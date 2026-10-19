/** Nouveau prototype CALIS : données pédagogiques de travail, non validées cliniquement.
 * La source est le programme fourni par le fondateur. Les dosages sont indicatifs.
 */
export type GoalId = "forme" | "force" | "mobilite" | "silhouette" | "maitrise";
export type Area = "haut" | "bas" | "tronc" | "mobilite" | "cardio";
export type Equipment = "aucun" | "support" | "barre" | "barre-basse" | "paralleles" | "elastique";
export type TimeChoice = 15 | 30 | 45;

export const GOALS: { id: GoalId; title: string; subtitle: string; symbol: string; color: string }[] = [
  { id:"forme", title:"Retrouver la forme", subtitle:"Souffle, endurance, énergie", symbol:"↗", color:"green" },
  { id:"force", title:"Devenir plus fort", subtitle:"Force et gestes du quotidien", symbol:"✦", color:"blue" },
  { id:"mobilite", title:"Bouger plus librement", subtitle:"Mobilité, équilibre, souplesse", symbol:"◎", color:"purple" },
  { id:"silhouette", title:"Me sentir bien dans mon corps", subtitle:"Tonicité, aisance, confiance", symbol:"◈", color:"orange" },
  { id:"maitrise", title:"Maîtriser mon corps", subtitle:"Contrôle et figures", symbol:"✳", color:"red" },
];

export interface Exercise {
  id: string;
  name: string;
  dose: string;
  area: Area;
  equipment: Equipment;
  how: string;
  watch: string;
  easier?: string;
  tags?: GoalId[];
  optional?: boolean;
}

export interface Level {
  number: number;
  name: string;
  subtitle: string;
  exercises: Exercise[];
}

const e = (id:string, name:string, dose:string, area:Area, equipment:Equipment, how:string, watch:string, easier?:string, tags?:GoalId[], optional=false):Exercise =>
  ({ id,name,dose,area,equipment,how,watch,easier,tags,optional });

export const LEVELS: Level[] = [
  { number:1, name:"Préparation & fondations", subtitle:"Démarrer en douceur, même de très loin.", exercises:[
    e("cercles-articulations","Cercles d'articulations","10 par sens", "mobilite","aucun","Faire de petits cercles lents aux épaules, poignets, hanches et chevilles. Rester dans une amplitude confortable.","Ne pas forcer la nuque ni chercher la plus grande amplitude possible."),
    e("squat-poids-corps","Squat au poids du corps","3 × 10","bas","aucun","Pieds à largeur d'épaules, fléchir hanches et genoux puis se relever en poussant dans le sol. Garder les genoux dans l'axe des pieds.","Réduire l'amplitude si le dos s'arrondit ou si les talons se lèvent.","S'accroupir vers une chaise stable."),
    e("pompes-inclinees","Pompes inclinées","3 × 8","haut","support","Mains sur une table ou un plan fixe et solide. Garder le corps aligné, plier les coudes puis repousser progressivement.","Vérifier la stabilité du support. Ne pas creuser le dos.","Utiliser un mur plus haut."),
    e("pont-fessier","Pont fessier","3 × 12","bas","aucun","Allongé sur le dos, pieds au sol, fléchir les genoux. Soulever le bassin en contractant les fessiers, puis redescendre lentement.","Ne pas exagérer la cambrure."),
    e("gainage-genoux","Gainage sur les genoux","3 × 20 s","tronc","aucun","Sur les avant-bras et les genoux, garder la tête, le buste et les cuisses alignés. Respirer tranquillement.","Éviter que le bassin s'affaisse.","Réduire le temps de maintien."),
    e("superman","Superman","3 × 10","tronc","aucun","À plat ventre, soulever légèrement bras et jambes, tenir brièvement puis reposer en contrôle.","Garder le regard au sol; ne pas tirer la tête vers l'arrière.","Lever seulement les bras ou les jambes."),
    e("suspension-passive","Suspension passive","3 × 10 s","haut","barre","Saisir une barre stable, bras tendus, laisser les épaules monter naturellement. Garder les pieds au sol au besoin.","Optionnelle : ne pas se suspendre en présence de douleur à l'épaule.","Conserver les pieds en appui.",undefined,true),
    e("marche-active","Marche active ou course facile","10 à 20 min adaptées","cardio","aucun","Marcher à un rythme où la conversation reste possible. Alterner avec de très courtes périodes de course facile si cela convient.","Revenir à la marche en cas d'essoufflement excessif; ne pas chercher la vitesse.","Marcher moins longtemps.",["forme","silhouette"],true),
  ]},
  { number:2, name:"Bases solides", subtitle:"Construire une pratique régulière.", exercises:[
    e("pompes-classiques","Pompes classiques","3 × 6","haut","aucun","Mains au sol un peu plus larges que les épaules, corps aligné. Descendre de façon contrôlée puis repousser.","Ne pas laisser tomber le bassin.","Pompes inclinées ou négatives."),
    e("squat-tempo","Squat tempo","3 × 12","bas","aucun","Descendre en trois secondes, marquer une courte pause puis remonter sans se précipiter.","Ne pas chercher la profondeur au détriment du contrôle."),
    e("fente-arriere","Fente arrière","3 × 8 par côté","bas","aucun","Faire un pas en arrière, plier les genoux selon sa mobilité puis revenir en poussant sur le pied avant.","Garder un appui stable et contrôler le genou avant.","Se tenir légèrement à un support."),
    e("planche-avantbras","Planche sur les avant-bras","3 × 30 s","tronc","aucun","Avant-bras au sol, pieds derrière, maintenir une ligne confortable de la tête aux talons. Respirer.","Ne pas laisser les lombaires se creuser.","Planche sur les genoux."),
    e("dead-bug","Dead bug","3 × 8 par côté","tronc","aucun","Sur le dos, bras vers le plafond et genoux fléchis. Descendre lentement bras et jambe opposés sans perdre le contrôle du bassin.","Réduire l'amplitude si les lombaires se creusent."),
    e("gainage-lateral-genoux","Gainage latéral sur les genoux","3 × 20 s par côté","tronc","aucun","Sur un avant-bras, genoux pliés, lever les hanches pour former une ligne épaule–hanche–genou.","Éviter d'appuyer douloureusement sur l'épaule."),
    e("pont-fessier-une-jambe","Pont fessier à une jambe","3 × 8 par côté","bas","aucun","Depuis un pont fessier, allonger une jambe et monter le bassin sans tourner.","Garder le bassin horizontal.","Revenir au pont fessier à deux jambes."),
    e("rowing-australien-flechi","Rowing australien, jambes fléchies","3 × 6","haut","barre-basse","Sous une barre basse solidement fixée, genoux fléchis, tirer la poitrine vers la barre puis redescendre en contrôle.","Vérifier l'ancrage de la barre; ne pas laisser tomber les hanches.","Se placer plus verticalement."),
  ]},
  { number:3, name:"Intermédiaire", subtitle:"Diversifier les mouvements avec contrôle.", exercises:[
    e("pompes-classiques-12","Pompes classiques","3 × 12","haut","aucun","Pompe contrôlée au sol, corps gainé, amplitude sans douleur.","Ne pas accélérer au point de perdre l'alignement.","Pompes inclinées."),
    e("pompes-diamant","Pompes diamant","3 × 6","haut","aucun","Placer les mains assez proches sous la poitrine et fléchir les coudes près du buste, sans gêne aux poignets.","Élargir la position des mains si nécessaire.","Pompes avec les mains moins rapprochées."),
    e("squat-bulgare","Squat bulgare","3 × 8 par côté","bas","support","Pied arrière sur un banc stable, pied avant avancé. Descendre verticalement selon la mobilité puis remonter.","Choisir un support stable et éviter toute douleur au genou.","Fente arrière."),
    e("hollow-body","Hollow body","3 × 20 s","tronc","aucun","Sur le dos, engager les abdominaux pour garder les lombaires proches du sol. Lever légèrement épaules et jambes.","Plier les genoux si le dos se cambre.","Maintien genoux pliés."),
    e("traction-negative","Traction négative","3 × 4","haut","barre","Avec un marchepied stable, commencer menton au-dessus de la barre puis descendre lentement.","Contrôler la descente; ne pas sauter sur une barre instable.","Suspension assistée avec pieds au sol."),
    e("traction-assistee-elastique","Traction assistée à l'élastique","3 × 5","haut","elastique","Accrocher un élastique prévu pour les tractions sur une barre fixée, soutenir le pied et tirer jusqu'à hauteur de la barre.","Vérifier l'état de l'élastique et l'ancrage; attention au retour de bande.","Rowing australien plus vertical."),
    e("rowing-australien-tendu","Rowing australien, jambes tendues","3 × 8","haut","barre-basse","Suspendu sous une barre basse, corps aligné avec les talons au sol, tirer la poitrine vers la barre.","Vérifier que la barre ne peut pas glisser."),
    e("dips-negatifs","Dips négatifs","3 × 4","haut","paralleles","En appui sur deux barres solidement fixées, descendre lentement avec amplitude confortable. Utiliser les pieds pour revenir.","Ne pas forcer la profondeur ni continuer avec douleur à l'épaule.","Appui bras tendus avec pieds soutenus."),
    e("releves-jambes-allonge","Relevés de jambes allongé","3 × 10","tronc","aucun","Allongé sur le dos, lever les jambes puis les abaisser lentement en contrôlant les lombaires.","Fléchir les genoux si le bas du dos se creuse.","Dead bug."),
    e("squat-saute","Squat sauté","3 × 10","bas","aucun","Effectuer un squat modéré, sauter doucement et réceptionner avec les genoux souples.","Éviter sur sol glissant ou avec douleur articulaire.","Squat classique."),
  ]},
  { number:4, name:"Tractions & dips", subtitle:"Développer la force sur agrès.", exercises:[
    e("traction-pronation","Traction en pronation","3 × 5","haut","barre","Depuis une suspension active, tirer les coudes vers le bas pour monter le menton au-dessus de la barre puis redescendre lentement.","Sans balancement; choisir une barre ancrée.","Traction assistée."),
    e("traction-supination","Traction en supination","3 × 5","haut","barre","Paumes vers soi, tirer en gardant les coudes proches du corps puis revenir en contrôle.","Stopper en cas de douleur au coude.","Traction assistée."),
    e("dips","Dips sur barres parallèles","3 × 6","haut","paralleles","Bras tendus en appui, fléchir les coudes à une profondeur confortable puis repousser.","Éviter les amplitudes douloureuses et les barres instables.","Dips avec appui des pieds."),
    e("pompes-declinees","Pompes déclinées","3 × 8","haut","support","Pieds sur un support fixe, mains au sol; descendre et remonter en gardant un corps aligné.","Préférer un support bas pour débuter.","Pompes classiques."),
    e("pompes-pike","Pompes pike","3 × 8","haut","aucun","Former un V inversé, bassin haut; fléchir les bras pour abaisser doucement la tête vers le sol puis repousser.","Garder un contrôle du cou et des poignets.","Pike avec amplitude réduite."),
    e("releves-genoux-suspendus","Relevés de genoux suspendus","3 × 8","tronc","barre","Suspendu à une barre fixe, ramener lentement les genoux vers la poitrine puis redescendre sans balancer.","Ne pas se lancer avec élan.","Relevés au sol."),
    e("l-sit-tuck","L-sit tuck","3 × 10 s","tronc","paralleles","En appui bras tendus sur parallettes ou barres, soulever les genoux repliés.","Éviter de forcer les épaules ou poignets.","Maintien pieds au sol."),
    e("squat-bulgare-10","Squat bulgare","3 × 10 par côté","bas","support","Pied arrière sur un support stable, descendre en fléchissant la jambe avant puis remonter.","Garder l'équilibre et l'appui du pied avant.","Fentes statiques."),
  ]},
  { number:5, name:"Avancé", subtitle:"Force exigeante et positions contrôlées.", exercises:[
    e("traction-large","Traction large","3 × 6","haut","barre","Mains un peu plus larges que les épaules, monter vers la barre en contrôle.","Une prise très large peut être inconfortable pour les épaules.","Traction classique."),
    e("traction-stricte","Traction stricte","3 × 10","haut","barre","Tractions sans élan, amplitude confortable et descente maîtrisée.","Ne pas perdre le contrôle au dernier mouvement.","Tractions assistées."),
    e("dips-12","Dips contrôlés","3 × 12","haut","paralleles","Effectuer des dips à amplitude contrôlée sur des barres stables.","Arrêter si une douleur d'épaule apparaît.","Dips assistés."),
    e("pompes-archer","Pompes archer","3 × 5 par côté","haut","aucun","Mains écartées, déplacer le buste vers un bras pendant que l'autre aide à soutenir.","Limiter l'écartement selon les épaules.","Pompes asymétriques."),
    e("pistol-assiste","Squat pistolet assisté","3 × 5 par côté","bas","support","Tenir un support fixe, descendre sur une jambe selon ses capacités et remonter avec l'aide nécessaire.","Ne pas forcer la profondeur ou l'équilibre.","Squat sur chaise."),
    e("l-sit","L-sit","3 × 10 s","tronc","paralleles","En appui bras tendus, lever les jambes jusqu'à l'horizontale sans forcer.","Épaules et poignets doivent être confortables.","Tuck L-sit."),
    e("releves-jambes-suspendus","Relevés de jambes suspendus","3 × 8","tronc","barre","En suspension, monter lentement les jambes puis revenir sans balancer.","Ne pas forcer si la prise fatigue.","Relevés de genoux."),
    e("handstand-mur","Handstand au mur","3 × 20 s","haut","support","Après échauffement, monter progressivement avec les pieds contre un mur dégagé et stable, puis tenir bras tendus.","Chute possible : prévoir un espace sécurisé et apprendre la sortie.","Marche au mur partielle.",["maitrise","force"]),
    e("nordic-negatif","Nordic curl excentrique","3 × 4","bas","support","À genoux sur un coussin, chevilles maintenues par un ancrage fiable, descendre lentement le buste en ligne.","Très exigeant pour les ischio-jambiers; progression graduelle.","Curl ischios glissé."),
    e("front-lever-tuck","Front lever tuck","3 × 5 s","haut","barre","Suspendu bras tendus, ramener les genoux et chercher une position de tronc contrôlée proche de l'horizontale.","Épaules et prises préparées; éviter les mouvements brusques.","Suspension active.",["maitrise","force"]),
  ]},
  { number:6, name:"Expert", subtitle:"Explosivité et figures avancées.", exercises:[
    e("pistol-squat","Squat pistolet","3 × 5 par côté","bas","aucun","Sur une jambe, descendre et remonter en contrôle avec l'autre jambe devant.","Ne pas forcer si l'équilibre ou la mobilité limite.","Pistol assisté."),
    e("traction-archer","Traction archer","3 × 4 par côté","haut","barre","Mains écartées, tirer davantage vers un bras et garder l'autre en soutien.","Très exigeant pour les coudes.","Traction classique."),
    e("traction-explosive","Traction explosive","3 × 5","haut","barre","Tirer rapidement pour monter la poitrine vers la barre, puis redescendre sans choc.","Barre stable obligatoire; éviter la fatigue excessive.","Traction stricte."),
    e("pompes-claquees","Pompes claquées","3 × 6","haut","aucun","Pousser assez fort pour décoller brièvement les mains et réceptionner en douceur.","Exercice pliométrique avec risque de chute; maîtriser les pompes strictes.","Pompes rapides sans décoller."),
    e("pompes-pseudo-planche","Pompes pseudo-planche","3 × 6","haut","aucun","Incliner les épaules devant les mains dans une position de pompe, puis fléchir et tendre les bras.","Progression lente pour les poignets.","Planche lean."),
    e("hspu-negative","Pompe de poirier négative","3 × 3","haut","support","Depuis un appui au mur maîtrisé, fléchir lentement les bras sur une amplitude adaptée puis descendre de la position.","Éviter l'appui forcé sur la tête et le cou; apprendre avec encadrement compétent.","Pike push-up.",["maitrise","force"]),
    e("dragon-flag-negatif","Dragon flag négatif","3 × 4","tronc","support","Sur un banc stable, mains tenant fermement derrière la tête, descendre le corps aussi aligné que possible en contrôle.","Ne jamais charger le cou; maîtriser le gainage avant.","Relevé de bassin au sol.",["maitrise","force"]),
    e("toes-to-bar","Orteils à la barre","3 × 6","tronc","barre","En suspension contrôlée, rapprocher les pieds de la barre sans élan excessif.","Protéger la prise et éviter les à-coups.","Relevés de genoux."),
    e("front-lever-advanced","Front lever advanced tuck","3 × 8 s","haut","barre","Depuis un front lever groupé maîtrisé, éloigner les genoux du tronc avec le dos contrôlé.","Ne pas forcer les épaules.","Tuck front lever.",["maitrise","force"]),
    e("planche-tuck","Planche tuck","3 × 8 s","haut","aucun","Sur les mains, déplacer le poids vers l'avant et décoller les pieds avec genoux repliés.","Préparer soigneusement les poignets et le travail d'appui.","Frog stand.",["maitrise","force"]),
  ]},
  { number:7, name:"Élite", subtitle:"Figures d'exception : prérequis indispensables.", exercises:[
    e("muscle-up","Muscle-up","3 × 3","haut","barre","Depuis une traction très haute, passer le torse au-dessus de la barre puis pousser en appui.","Mouvement complexe avec risque de chute; préférer un encadrement qualifié.","Tractions explosives et dips.",["maitrise","force"]),
    e("hspu","Pompe de poirier","3 × 5","haut","support","Depuis un équilibre renversé très solide au mur, fléchir puis repousser sur une amplitude maîtrisée.","Risque pour la tête et le cou, éviter sans prérequis et sécurisation.","Pike push-up.",["maitrise","force"]),
    e("handstand-libre","Handstand libre","3 × 20 s","haut","aucun","Monter progressivement sur les mains dans un espace dégagé, chercher l'équilibre avec les doigts.","Apprendre la sortie de sécurité avant le maintien.","Handstand au mur.",["maitrise"]),
    e("pompe-un-bras","Pompe à un bras","3 × 3 par côté","haut","aucun","Pieds écartés, une main au sol sous l'épaule, descendre et remonter sans trop tourner le bassin.","Protéger le poignet, rester progressif.","Pompe archer.",["maitrise","force"]),
    e("front-lever","Front lever","3 × 8 s","haut","barre","Suspendu bras tendus, maintenir le corps proche de l'horizontale face vers le haut.","Progression des épaules et du tronc indispensable.","Advanced tuck.",["maitrise","force"]),
    e("planche-complete","Planche complète","3 × 5 s","haut","aucun","Maintenir le corps horizontal uniquement sur les mains, bras tendus.","Exercice extrême pour poignets et épaules, ne pas tenter sans prérequis.","Tuck planche.",["maitrise","force"]),
    e("drapeau-humain","Drapeau humain","3 × 5 s","haut","barre","Sur une structure verticale adaptée, une main pousse et l'autre tire pour maintenir le corps de côté.","Ne pas utiliser un support impropre; risque de chute.","Drapeau groupé.",["maitrise","force"]),
    e("dragon-flag","Dragon flag complet","3 × 5","tronc","support","Depuis la position alignée sur banc stable, monter et descendre le corps sans faire reposer le poids sur la nuque.","Ne pas charger le cou; ne pas tenter sans maîtrise de la variante négative.","Dragon flag négatif.",["maitrise","force"]),
    e("back-lever","Back lever","3 × 8 s","haut","barre","Suspension inversée contrôlée puis corps horizontal, face vers le sol.","Exige mobilité et résistance des épaules; encadrement conseillé.","Tuck back lever.",["maitrise","force"]),
  ]},
];

export const AREA_LABELS: Record<Area,string> = {haut:"Haut du corps",bas:"Bas du corps",tronc:"Tronc & gainage",mobilite:"Mobilité",cardio:"Endurance"};
export const EQUIPMENT_LABELS: Record<Equipment,string> = {
  aucun:"Sans matériel",support:"Mur ou support stable",barre:"Barre de traction",
  "barre-basse":"Barre basse",paralleles:"Barres parallèles",elastique:"Élastique + barre"
};
export const LEVEL_COLORS = ["green","blue","purple","yellow","orange","red","black"] as const;
export const SPECIAL_GEAR: Equipment[] = ["barre","barre-basse","paralleles","elastique"];
export const SEQUENCE_AREAS:Area[] = ["mobilite","cardio","haut","bas","tronc"];

export function findExercise(id:string): Exercise | undefined {
  for (const l of LEVELS) { const result=l.exercises.find(item=>item.id===id); if(result) return result; }
}
/** Correspondances à contrôler : les 84 SVG ne sont pas certifiés biomécaniquement. */
export const CANDIDATE_IMAGES:Record<string,string> = {
    "squat-poids-corps":"squat-classique.svg",
    "pompes-inclinees":"pompe-inclinee.svg",
    "pont-fessier":"pont-fessier.svg",
    "superman":"superman.svg",
    "suspension-passive":"suspension-passive.svg",
    "pompes-classiques":"pompe-classique.svg",
    "fente-arriere":"fente-arriere.svg",
    "planche-avantbras":"planche-gainage-sur-les-avant-bras.svg",
    "dead-bug":"dead-bug.svg",
    "pont-fessier-une-jambe":"pont-fessier-a-une-jambe.svg",
    "pompes-classiques-12":"pompe-classique.svg",
    "pompes-diamant":"pompe-diamant.svg",
    "squat-bulgare":"fente-bulgare.svg",
    "hollow-body":"hollow-body.svg",
    "traction-negative":"traction-negative.svg",
    "rowing-australien-tendu":"rowing-australien-jambes-tendues.svg",
    "releves-jambes-allonge":"releve-de-jambes-allonge.svg",
    "squat-saute":"squat-saute.svg",
    "traction-pronation":"traction-en-pronation.svg",
    "traction-supination":"traction-en-supination.svg",
    "dips":"dips-sur-barres-paralleles.svg",
    "pompes-declinees":"pompe-declinee.svg",
    "pompes-pike":"pompe-pike.svg",
    "releves-genoux-suspendus":"releve-de-genoux-suspendus.svg",
    "squat-bulgare-10":"fente-bulgare.svg",
    "traction-stricte":"traction-en-pronation-stricte.svg",
    "dips-12":"dips-sur-barres-paralleles.svg",
    "pompes-archer":"pompe-archer.svg",
    "pistol-assiste":"squat-pistolet-assiste.svg",
    "l-sit":"l-sit-complet.svg",
    "releves-jambes-suspendus":"releve-de-jambes-suspendues.svg",
    "nordic-negatif":"nordic-curl-excentrique.svg",
    "pistol-squat":"squat-pistolet.svg",
    "hspu":"pompe-de-poirier.svg",
    "dragon-flag":"drapeau-du-dragon-complet.svg",
};
export function imageFor(id:string):string|undefined {
  const candidate=CANDIDATE_IMAGES[id];
  if(candidate) return "/illustrations/programmes/candidats-libres/"+candidate;
  const known:Record<string,string> = {
    "rowing-australien-flechi":"/illustrations/calis/tractions/rowing-incline.svg",
  };
  return known[id];
}
export function goalText(goals:GoalId[]):string {
  return GOALS.filter(goal=>goals.includes(goal.id)).map(goal=>goal.title).join(" · ");
}
export function parseGoals(value:string):GoalId[] {
  const valid=new Set<GoalId>(GOALS.map(g=>g.id));
  return [...new Set(value.split(",").filter((v):v is GoalId=>valid.has(v as GoalId)))];
}
export function score(exercise:Exercise, goals:GoalId[]):number {
  if (!goals.length) return 0;
  return goals.reduce((s,g)=>{
    const matching:Record<GoalId,Area[]> = {
      forme:["cardio","bas","mobilite","tronc"],force:["haut","bas","tronc"],
      mobilite:["mobilite","tronc"],silhouette:["haut","bas","cardio"],maitrise:["haut","tronc","mobilite"]
    };
    return s+(exercise.tags?.includes(g)?4:0)+(matching[g].includes(exercise.area)?2:0);
  },0);
}
/** Démonstration de sélection (pas un système de prescription médicale ou de coaching validé). */
export function selectExercises(level:Level, goals:GoalId[], withGear:boolean, minutes:TimeChoice):Exercise[] {
  const eligible=level.exercises.filter(item=>withGear||!SPECIAL_GEAR.includes(item.equipment));
  if (!eligible.length) return [];
  const limit=minutes===15?4:minutes===30?6:8;
  const ranked=[...eligible].sort((a,b)=>score(b,goals)-score(a,goals));
  const chosen:Exercise[]=[];
  // Préserver les bases : ne jamais ne sélectionner que les figures ou le haut du corps.
  for(const area of ["haut","bas","tronc"] as Area[]){
    const candidate=ranked.find(item=>item.area===area&&!item.optional);
    if(candidate && !chosen.includes(candidate)) chosen.push(candidate);
  }
  for(const item of ranked){
    if(chosen.length>=limit) break;
    if(!chosen.includes(item) && !item.optional) chosen.push(item);
  }
  // Affichage logique, pas ordre d'exécution imposé.
  return chosen.sort((a,b)=>SEQUENCE_AREAS.indexOf(a.area)-SEQUENCE_AREAS.indexOf(b.area));
}