"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Icon} from "@/components/icon";
const items=[
 {href:"/",label:"Objectifs",icon:"home" as const},
 {href:"/#niveaux",label:"Programmes",icon:"today" as const},
 {href:"/conseils-importants",label:"Conseils",icon:"library" as const}
];
export function MobileAppNav(){
 const path=usePathname();
 return <nav className="mobileAppNav" aria-label="Navigation mobile">
 {items.map(item=>{
   const active=path===(item.href.startsWith("/#")?"/":item.href);
   return <Link href={item.href} key={item.label} className={active?"isActive":undefined} aria-current={active?"page":undefined}>
    <span aria-hidden="true"><Icon name={item.icon} size={20}/></span><b>{item.label}</b>
   </Link>;
 })}
 </nav>;
}
