import{j as n}from"./jsx-runtime-86dfebf6.js";import{u as d,a as l}from"./styled-components.browser.esm-6d3cb859.js";const i=({type:e,size:r,margin:a})=>n(o,{type:e,size:r,margin:a}),o=d.div`
  ${({type:e,size:r=1,margin:a="0"})=>l`
    ${e==="horizontal"&&"width"}: 100%;
    ${e==="horizontal"?"height":"width"}: ${r}px;
    margin: ${a};
    background: ${t=>t.theme.borderPrimary};
  `}
`;try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}}}}}catch{}export{i as D};
