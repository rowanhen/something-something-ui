import{a as t}from"./jsx-runtime-2162d874.js";import{u as n,a as o}from"./styled-components.browser.esm-14148d23.js";import{c as l}from"./theme-860d7b96.js";const i=({type:e,size:r,margin:a})=>t(d,{type:e,size:r,margin:a}),d=n.div`
  ${({type:e,size:r=1,margin:a="0"})=>o`
    ${e==="horizontal"&&"width"}: 100%;
    ${e==="horizontal"?"height":"width"}: ${r}px;
    margin: ${a};
    background: ${l.night.DEFAULT};
  `}
`;try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}}}}}catch{}export{i as D};
