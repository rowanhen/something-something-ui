import{j as p,a as s}from"./jsx-runtime-2162d874.js";import{u as e}from"./styled-components.browser.esm-14148d23.js";import{c as n}from"./theme-860d7b96.js";const t=({label:i,children:o,assistiveText:l,requiredMessage:r,id:a,className:d})=>p(c,{className:d,children:[i&&s(u,{htmlFor:a,children:i}),o,l&&s(m,{id:`${a}-assistive`,children:l}),r&&s(f,{id:`${a}-required`,children:r})]}),c=e.div`
  margin-bottom: 20px;
`,u=e.label`
  display: block;
  font-weight: bold;
`,m=e.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: ${n.night[600]};
`,f=e.span`
  display: block;
  color: ${n.red_pantone.DEFAULT};
  font-size: 16px;
`;try{t.displayName="Field",t.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{t as F};
