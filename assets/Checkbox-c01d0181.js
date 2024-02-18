import{a as c,j as t}from"./jsx-runtime-86dfebf6.js";import{r as m}from"./index-1b03fe98.js";import{u as a}from"./styled-components.browser.esm-6d3cb859.js";import{F as f}from"./Field-22302e01.js";const i=m.forwardRef(function({label:e,assistiveText:n,requiredMessage:l,checked:d,toggle:o,id:s,disabled:u},p){return c(g,{children:[t(y,{ref:p,type:"checkbox",checked:d,onChange:o,disabled:u}),t(x,{label:e,assistiveText:n,requiredMessage:l,id:s})]})}),g=a.div`
  display: flex;
`,x=a(f)`
  margin-top: 3px;
`,y=a.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: ${({checked:r,theme:e})=>r?e.primaryVariant:e.background};
  border: 1px solid
    ${({checked:r,theme:e})=>r?e.primaryVariant:e.background};
  border-radius: 6px;
  transition: all 150ms;
  margin-right: 8px;
`;try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"() => void"}}}}}catch{}export{i as C};
