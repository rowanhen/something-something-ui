import{j as a,a as i}from"./jsx-runtime-2162d874.js";import{u as o}from"./styled-components.browser.esm-14148d23.js";import{F as c}from"./Field-b9360730.js";import{c as e}from"./theme-860d7b96.js";const s=({label:t,disabled:r,assistiveText:l,requiredMessage:d,checked:p,onToggle:n})=>a(m,{children:[a(h,{children:[i("input",{type:"checkbox",checked:p,onChange:n,onKeyDown:u=>{u.key==="Enter"&&!r&&n()},disabled:r}),i("span",{})]}),i(g,{label:t,assistiveText:l,requiredMessage:d,id:t})]}),m=o.div`
  display: flex;
`,g=o(c)`
  margin-top: 4px;
`,h=o.label`
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
    background-color: ${e.white_smoke[400]};
    transition: 0.4s;
    border-radius: 28px;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: ${e.white_smoke.DEFAULT};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${e.brandeis_blue.DEFAULT};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${e.brandeis_blue.DEFAULT};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;try{s.displayName="Toggle",s.__docgenInfo={description:"",displayName:"Toggle",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"() => void"}}}}}catch{}export{s as T};
