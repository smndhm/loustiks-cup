import{_ as m,a as u,o as a,c as o,b as e,d as h,e as p,f as _,t as s,u as i,p as r,F as v,q as n,h as g,i as x}from"./index.aba0905f.js";var k="/heure.svg",y="/terrain.svg",f="/arbitre.svg";const l=c=>(g("data-v-3a4aee55"),c=c(),x(),c),b={class:"card"},q={class:"card-content"},C={class:"content"},B={class:"block"},w={key:0,class:"mx-3"},D=_(" - "),I={key:0},M={class:"icon-text"},N=l(()=>e("span",{class:"icon is-small"},[e("img",{src:k,alt:"Heure"})],-1)),S={class:"icon-text"},V=l(()=>e("span",{class:"icon"},[e("img",{src:y,alt:"Terrain"})],-1)),$={key:1},H={class:"icon-text"},F=l(()=>e("span",{class:"icon is-small"},[e("img",{src:f,alt:"Arbitre"})],-1)),T={key:2},j={class:"tag is-info"},A={name:"MatchDetails",props:{match:Object,withHour:Boolean,noCategory:Boolean},setup(c){const t=c;return(E,O)=>{const d=u("router-link");return a(),o("div",b,[e("div",q,[e("div",C,[e("div",B,[e("h4",null,[h(d,{to:`/categories/${i(r)(t.match.categorie)}/equipes/${i(r)(t.match.domicile.equipe)}`},{default:p(()=>[_(s(t.match.domicile.equipe),1)]),_:1},8,["to"]),t.match.domicile.score!==null&&t.match.exterieur.score!==null?(a(),o("span",w,s(t.match.domicile.score)+" - "+s(t.match.exterieur.score),1)):(a(),o(v,{key:1},[D],64)),h(d,{to:`/categories/${i(r)(t.match.categorie)}/equipes/${i(r)(t.match.exterieur.equipe)}`},{default:p(()=>[_(s(t.match.exterieur.equipe),1)]),_:1},8,["to"])])]),e("div",null,[t.withHour?(a(),o("div",I,[e("span",M,[N,e("span",null,s(t.match.heure),1)])])):n("",!0),e("div",null,[e("span",S,[V,e("span",null,s(t.match.terrain),1)])]),t.match.arbitre?(a(),o("div",$,[e("span",H,[F,e("span",null,s(t.match.arbitre),1)])])):n("",!0),t.noCategory?n("",!0):(a(),o("div",T,[e("span",j,s(t.match.categorie),1)]))])])])])}}};var G=m(A,[["__scopeId","data-v-3a4aee55"]]);export{G as M};
