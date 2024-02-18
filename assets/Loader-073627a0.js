import{a as n}from"./jsx-runtime-2162d874.js";import{u as i}from"./styled-components.browser.esm-14148d23.js";import{c as o}from"./theme-860d7b96.js";const a=({color:e="night",size:r=16})=>n(t,{color:e,size:r}),t=i.div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  display: inline-block;
  box-sizing: border-box;

  --c: no-repeat linear-gradient(${({color:e})=>o[e].DEFAULT} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
  @keyframes l1 {
    0% {
      background-size: 20% 100%, 20% 100%, 20% 100%;
    }
    33% {
      background-size: 20% 10%, 20% 100%, 20% 100%;
    }
    50% {
      background-size: 20% 100%, 20% 10%, 20% 100%;
    }
    66% {
      background-size: 20% 100%, 20% 100%, 20% 10%;
    }
    100% {
      background-size: 20% 100%, 20% 100%, 20% 100%;
    }
  }
`;try{a.displayName="Loader",a.__docgenInfo={description:"",displayName:"Loader",props:{color:{defaultValue:{value:"night"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white_smoke"'},{value:'"night"'},{value:'"red_pantone"'},{value:'"ut_orange"'},{value:'"brandeis_blue"'},{value:'"sgbus_green"'},{value:'"transparent"'}]}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}export{a as L};
