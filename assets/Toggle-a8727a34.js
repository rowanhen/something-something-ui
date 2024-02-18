import{a as n,j as t}from"./jsx-runtime-86dfebf6.js";import{u as r}from"./styled-components.browser.esm-6d3cb859.js";import{F as u}from"./Field-22302e01.js";const o=({label:e,disabled:a,assistiveText:s,requiredMessage:l,checked:d,onToggle:i})=>n(c,{children:[n(g,{children:[t("input",{type:"checkbox",checked:d,onChange:i,onKeyDown:p=>{p.key==="Enter"&&!a&&i()},disabled:a}),t("span",{})]}),t(m,{label:e,assistiveText:s,requiredMessage:l,id:e})]}),c=r.div`
  display: flex;
  color: ${e=>e.theme.textPrimary};
`,m=r(u)`
  margin-top: 4px;
`,g=r.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
  margin-right: 8px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>e.theme.surface};
    transition: 0.4s;
    border-radius: 28px;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: ${e=>e.theme.background};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${e=>e.theme.primaryVariant};
  }

  input:focus + span {
    box-shadow: 0 0 1px 1px ${e=>e.theme.secondaryVariant};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;try{o.displayName="Toggle",o.__docgenInfo={description:"",displayName:"Toggle",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"() => void"}}}}}catch{}export{o as T};
