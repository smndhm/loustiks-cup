import{_ as f,w as y,i as g,l as q,o,c as r,a as n,e as x,t as u,F as p,f as v,p as c,b as w}from"./index.66f2143d.js";import{a as V}from"./sheets.service.40429bca.js";import{M as E}from"./MatchDetails.3c208fde.js";const k={class:"tag is-info is-medium"},M={class:"columns is-multiline"},B={name:"EquipeView",async setup(D){let s,l;const _=([s,l]=y(()=>V()),s=await s,l(),s),i=g(),e={},m=async a=>{Object.keys(e).forEach(t=>delete e[t]),e.matchs=_.filter(t=>c(t.categorie)===i.params.category&&(c(t.domicile.equipe)===a||c(t.exterieur.equipe)===a)),e.name=c(e.matchs[0].domicile.equipe)===a?e.matchs[0].domicile.equipe:e.matchs[0].exterieur.equipe};return m(i.params.equipe),q(()=>i.params.equipe,async a=>{a&&m(a)}),(a,t)=>(o(),r(p,null,[n("h2",null,[x(u(e.name)+" ",1),n("span",k,u(e.matchs[0].categorie),1)]),n("div",M,[(o(!0),r(p,null,v(e.matchs,(h,d)=>(o(),r("div",{class:"column is-half",key:d},[w(E,{"with-hour":"","no-category":"",match:h},null,8,["match"])]))),128))])],64))}};var C=f(B,[["__scopeId","data-v-4df41f15"]]);export{C as default};
