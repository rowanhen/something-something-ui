import{a as d,j as a}from"./jsx-runtime-86dfebf6.js";import{u as r}from"./styled-components.browser.esm-6d3cb859.js";const s=({label:e,children:n,assistiveText:i,requiredMessage:l,id:t,className:o})=>d(c,{className:o,children:[e&&a(p,{htmlFor:t,children:e}),n,i&&a(m,{id:`${t}-assistive`,children:i}),l&&a(u,{id:`${t}-required`,children:l})]}),c=r.div`
  margin-bottom: 20px;
  color: ${e=>e.theme.textPrimary};
`,p=r.label`
  display: block;
  font-weight: bold;
  color: ${e=>e.theme.textPrimary};
`,m=r.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,u=r.span`
  display: block;
  color: ${e=>e.theme.error};
  font-size: 16px;
`;try{s.displayName="Field",s.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{s as F};
