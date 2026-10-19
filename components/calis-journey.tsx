"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  AREA_LABELS, EQUIPMENT_LABELS, GOALS, LEVELS, LEVEL_COLORS, SEQUENCE_AREAS,
  findExercise, goalText, imageFor, selectExercises,
  type Exercise, type GoalId, type TimeChoice,
} from "@/lib/programmes-v2";

type Screen = { kind:"accueil" } | { kind:"niveaux" } | { kind:"niveau"; n:number } | { kind:"exercice"; id:string };
const defaultScreen:Screen={kind:"accueil"};
function readScreen():Screen {
  if (typeof window==="undefined") return defaultScreen;
  const hash=decodeURIComponent(window.location.hash.replace(/^#/,""));
  if(hash==="niveaux") return {kind:"niveaux"};
  if(hash.startsWith("niveau/")){
    const n=Number(hash.slice("niveau/".length));
    if(Number.isInteger(n)&&n>=1&&n<=7) return {kind:"niveau",n};
  }
  if(hash.startsWith("exercice/")){
    const id=hash.slice("exercice/".length);
    if(findExercise(id)) return {kind:"exercice",id};
  }
  return defaultScreen;
}
function navigate(fragment:string) {
  if(typeof window!=="undefined") window.location.hash=fragment;
}
function getStored<T>(key:string,fallback:T):T {
  if (typeof window==="undefined") return fallback;
  try {
    const raw=window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch { return fallback; }
}
function storageSet<T>(key:string,value:T) {
  if(typeof window==="undefined") return;
  try { window.sessionStorage.setItem(key,JSON.stringify(value)); } catch {}
}

function GoalCard({goal,selected,onToggle}:{goal:(typeof GOALS)[number];selected:boolean;onToggle:()=>void}){
  return (
    <button type="button" className={"calisGoal calis-"+goal.color+(selected?" isSelected":"")} onClick={onToggle} aria-pressed={selected}>
      <span className="calisGoalIcon" aria-hidden="true">{goal.symbol}</span>
      <span className="calisGoalCopy"><strong>{goal.title}</strong><small>{goal.subtitle}</small></span>
      <span className="calisCheck" aria-hidden="true">{selected?"✓":"+"}</span>
    </button>
  );
}

function ExerciseVisual({exercise}:{exercise:Exercise}) {
  const image=imageFor(exercise.id);
  const [failed,setFailed]=useState(false);
  const base=process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  useEffect(()=>setFailed(false),[exercise.id]);
  return (
    <div className="calisExerciseVisual">
      {image&&!failed?
        // Les images sont locales et versionnées. Les nouveaux assets seront nommés par ID.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={base+image} alt={"Illustration de "+exercise.name} onError={()=>setFailed(true)} />:
        <div className="calisVisualPlaceholder" role="img" aria-label={"Illustration de "+exercise.name+" à intégrer"}>
          <span aria-hidden="true">✦</span><strong>{exercise.name}</strong><small>Illustration à venir</small>
        </div>}
    </div>
  );
}

export function CalisJourney() {
  const [screen,setScreen]=useState<Screen>(defaultScreen);
  const [goals,setGoals]=useState<GoalId[]>([]);
  const [gear,setGear]=useState(false);
  const [minutes,setMinutes]=useState<TimeChoice>(30);
  const [ready,setReady]=useState(false);
  const [showAll,setShowAll]=useState(false);
  const [currentLevel,setCurrentLevel]=useState(1);
  useEffect(()=>{
    const stored=getStored<GoalId[]>("calis-v2-goals",[]);
    const valid=new Set(GOALS.map(g=>g.id));
    setGoals(stored.filter(g=>valid.has(g)));
    setGear(getStored<boolean>("calis-v2-equipment",false));
    const storedMin=getStored<number>("calis-v2-time",30);
    setMinutes(storedMin===15||storedMin===45?storedMin:30);
    setScreen(readScreen());
    setReady(true);
    const onHashChange=()=>setScreen(readScreen());
    window.addEventListener("hashchange",onHashChange);
    return ()=>window.removeEventListener("hashchange",onHashChange);
  },[]);
  useEffect(()=>{
    if(!ready) return;
    storageSet("calis-v2-goals",goals);
    storageSet("calis-v2-equipment",gear);
    storageSet("calis-v2-time",minutes);
  },[goals,gear,minutes,ready]);
  useEffect(()=>{if(screen.kind==="niveau") setCurrentLevel(screen.n);},[screen]);
  const level=LEVELS.find(l=>l.number===currentLevel)??LEVELS[0];
  const recommended=useMemo(()=>selectExercises(level,goals,gear,minutes),[level,goals,gear,minutes]);
  const updateGoal=useCallback((id:GoalId)=>setGoals(previous=>
    previous.includes(id)?previous.filter(goal=>goal!==id):[...previous,id]),[]);
  const openLevels=()=>{if(goals.length)navigate("niveaux");};
  const selectedExercise=screen.kind==="exercice"?findExercise(screen.id):undefined;
  const episode=selectedExercise?LEVELS.find(l=>l.exercises.some(e=>e.id===selectedExercise.id)):undefined;
  const playlist=episode?selectExercises(episode,goals,gear,minutes):[];
  const activeIndex=selectedExercise?playlist.findIndex(e=>e.id===selectedExercise.id):-1;
  const backLevel=episode?.number??currentLevel;
  const exerciseAt=(direction:-1|1)=>activeIndex<0?undefined:playlist[activeIndex+direction];

  return (
    <div className="calisV2">
      <div className="shell calisShell">
        {screen.kind==="accueil"&&
          <section className="calisWelcome" aria-labelledby="calis-title">
            <div className="calisTopLine"><span className="calisEyebrow">CALIS • TON CHEMIN</span><span className="calisTiny">5 choix · 1 programme</span></div>
            <h1 id="calis-title">Qu'as-tu envie<br /><em>de développer ?</em></h1>
            <p className="calisIntro">Choisis un ou plusieurs objectifs. Ton entraînement s'adapte à tes envies, sans oublier l'équilibre du corps.</p>
            <div className="calisGoalGrid" role="group" aria-label="Objectifs à sélectionner">
              {GOALS.map(g=><GoalCard key={g.id} goal={g} selected={goals.includes(g.id)} onToggle={()=>updateGoal(g.id)} />)}
            </div>
            <section className="calisSettings" aria-label="Personnaliser le programme">
              <div><strong>Ton matériel</strong><div className="calisSegment" role="group" aria-label="Matériel disponible">
                <button type="button" aria-pressed={!gear} className={!gear?"active":""} onClick={()=>setGear(false)}>Sans matériel sportif</button>
                <button type="button" aria-pressed={gear} className={gear?"active":""} onClick={()=>setGear(true)}>Avec matériel</button>
              </div><small>Un mur ou un support domestique stable peut être utilisé dans les deux modes.</small></div>
              <div><strong>Temps par séance</strong><div className="calisSegment" role="group" aria-label="Temps disponible">
                {([15,30,45] as TimeChoice[]).map(t=><button type="button" key={t} aria-pressed={minutes===t} className={minutes===t?"active":""} onClick={()=>setMinutes(t)}>{t} min</button>)}
              </div></div>
            </section>
            <button className="calisBigButton" disabled={!goals.length} type="button" onClick={openLevels}>Voir mes programmes <span aria-hidden="true">→</span></button>
            {!goals.length&&<small className="calisHint">Choisis au moins un objectif.</small>}
          </section>
        }
        {screen.kind!=="accueil"&&<>
          <div className="calisBreadcrumb">
            <button type="button" onClick={()=>navigate("")}>← Objectifs</button>
            {screen.kind!=="niveaux"&&<button type="button" onClick={()=>navigate("niveaux")}>7 niveaux</button>}
            {screen.kind==="exercice"&&<button type="button" onClick={()=>navigate("niveau/"+backLevel)}>Niveau {backLevel}</button>}
          </div>
          {screen.kind==="niveaux"&&<section className="calisInner">
            <span className="calisEyebrow">TON PROGRAMME SUR MESURE</span>
            <h1>Choisis ton niveau.</h1>
            <p className="calisIntro">Départ progressif conseillé. Le numéro n'est pas une compétition : choisis les mouvements que tu maîtrises réellement.</p>
            <div className="calisSummary">{goalText(goals)||"Objectifs à sélectionner"} · {gear?"Avec matériel":"Sans matériel sportif"} · {minutes} min</div>
            <div className="calisLevelGrid">{LEVELS.map(l=><button key={l.number} type="button" className={"calisLevel calis-"+LEVEL_COLORS[l.number-1]} onClick={()=>navigate("niveau/"+l.number)}>
              <span className="calisLevelNumber">{String(l.number).padStart(2,"0")}</span>
              <span><strong>{l.name}</strong><small>{l.subtitle}</small></span><span className="calisLevelArrow" aria-hidden="true">→</span>
            </button>)}</div>
            <p className="calisFine">Les contenus actuels proviennent d'une version de travail : les dosages et transitions devront être validés avant publication définitive.</p>
          </section>}
          {screen.kind==="niveau"&&<section className="calisInner">
            <span className={"calisLevelBadge calis-"+LEVEL_COLORS[level.number-1]}>NIVEAU {level.number}</span>
            <h1>{level.name}</h1><p className="calisIntro">{level.subtitle}</p>
            <div className="calisSummary">{goalText(goals)||"Objectifs à sélectionner"} · {minutes} min · {gear?"Avec matériel":"Sans matériel sportif"}</div>
            <div className="calisExplainShort">Voici une sélection adaptée à tes priorités. Les groupes ci-dessous sont des catégories, <strong>pas une obligation de tout faire en une séance.</strong></div>
            <div className="calisTabRow">
              <button type="button" className={!showAll?"selected":""} onClick={()=>setShowAll(false)}>Ma sélection ({recommended.length})</button>
              <button type="button" className={showAll?"selected":""} onClick={()=>setShowAll(true)}>Tous les exercices ({level.exercises.length})</button>
            </div>
            {recommended.length===0&&!showAll&&<p className="calisNotice">Ce niveau nécessite du matériel sportif pour la plupart des mouvements. Reviens aux objectifs pour autoriser le matériel, ou consulte un niveau plus accessible.</p>}
            {SEQUENCE_AREAS.map(area=>{
              const items=(showAll?level.exercises:recommended).filter(item=>item.area===area);
              return items.length?<section key={area} className="calisCategory">
                <h2>{AREA_LABELS[area]} <span>{items.length}</span></h2>
                <div className="calisExerciseList">{items.map((item,index)=><button key={item.id} type="button" onClick={()=>navigate("exercice/"+item.id)}>
                  <span className="calisListNumber">{String(index+1).padStart(2,"0")}</span>
                  <span className="calisListContent"><strong>{item.name}</strong><small>{item.dose} · {EQUIPMENT_LABELS[item.equipment]}{item.optional?" · Facultatif":""}</small></span>
                  <span aria-hidden="true">→</span>
                </button>)}</div>
              </section>:null;
            })}
            {level.number>=4&&<p className="calisNotice">⚠️ À partir de ce niveau, plusieurs exercices exigent des prérequis et un contrôle technique important. Ne teste pas des figures difficiles sans préparation.</p>}
            <div className="calisNavBottom"><button type="button" onClick={()=>navigate("niveaux")}>← Tous les niveaux</button></div>
          </section>}
          {screen.kind==="exercice"&&selectedExercise&&<section className="calisInner">
            <span className={"calisLevelBadge calis-"+LEVEL_COLORS[backLevel-1]}>NIVEAU {backLevel}</span>
            <h1>{selectedExercise.name}</h1>
            <div className="calisExerciseTags"><span>{selectedExercise.dose}</span><span>{AREA_LABELS[selectedExercise.area]}</span><span>{EQUIPMENT_LABELS[selectedExercise.equipment]}</span></div>
            <ExerciseVisual exercise={selectedExercise} />
            <div className="calisInstructions">
              <section><h2>Comment faire ?</h2><p>{selectedExercise.how}</p></section>
              <section><h2>À surveiller</h2><p>{selectedExercise.watch}</p></section>
              {selectedExercise.easier&&<section><h2>Pour commencer plus facilement</h2><p>{selectedExercise.easier}</p></section>}
            </div>
            {selectedExercise.equipment!=="aucun"&&<div className="calisEquipmentCallout"><div><strong>Matériel : {EQUIPMENT_LABELS[selectedExercise.equipment]}</strong><p>Utiliser uniquement un support stable et adapté. Les conseils d'achat seront ajoutés après vérification des produits.</p></div><Link href="/materiel">Voir les conseils matériel →</Link></div>}
            <div className="calisNavBottom">
              {exerciseAt(-1)?<button type="button" onClick={()=>navigate("exercice/"+exerciseAt(-1)!.id)}>← Précédent</button>:<span />}
              <button type="button" className="calisBackMain" onClick={()=>navigate("niveau/"+backLevel)}>Liste des exercices</button>
              {exerciseAt(1)?<button type="button" onClick={()=>navigate("exercice/"+exerciseAt(1)!.id)}>Suivant →</button>:<span />}
            </div>
            {activeIndex<0&&<p className="calisFine">Cet exercice fait partie du catalogue de ce niveau, mais pas de ta sélection actuelle.</p>}
          </section>}
        </>}
      </div>
      <div className="calisAdvice"><Link href="/conseils-importants">ⓘ Conseils importants & sécurité <span aria-hidden="true">→</span></Link></div>
    </div>
  );
}