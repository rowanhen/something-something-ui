import{j as m,a}from"./jsx-runtime-2162d874.js";import{r as f}from"./index-c6dae603.js";import{u as t}from"./styled-components.browser.esm-14148d23.js";import{F as x}from"./Field-b9360730.js";import{c as r}from"./theme-860d7b96.js";const i=f.forwardRef(function({label:n,assistiveText:l,requiredMessage:s,checked:o,toggle:d,id:u,disabled:p},c){return m(g,{children:[a(h,{ref:c,type:"checkbox",checked:o,onChange:d,disabled:p}),a(b,{label:n,assistiveText:l,requiredMessage:s,id:u})]})}),g=t.div`
  display: flex;
`,b=t(x)`
  margin-top: 3px;
`,h=t.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: ${({checked:e})=>e?r.brandeis_blue.DEFAULT:r.white_smoke.DEFAULT};
  border: 1px solid
    ${({checked:e})=>e?r.brandeis_blue.DEFAULT:r.white_smoke[400]};
  border-radius: 6px;
  transition: all 150ms;
  margin-right: 8px;
`;try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"() => void"}}}}}catch{}export{i as C};
