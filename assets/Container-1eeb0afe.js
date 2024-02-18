import{j as o,a as p}from"./jsx-runtime-86dfebf6.js";import{u as n,a as t}from"./styled-components.browser.esm-6d3cb859.js";const l=({className:e,children:a,label:r,labelX:i="center",labelY:s="top"})=>o(d,{children:p(u,{className:e,children:[r&&o(c,{labelX:i,labelY:s,children:r}),a]})}),d=n.div`
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.textPrimary};
  padding: 12px;
`,u=n.div`
  padding: 20px;
  border: ${e=>e.theme.borderPrimary};
  position: relative;
`,c=n.h4`
  ${({labelX:e,labelY:a})=>t`
    position: absolute;
    background-color: ${r=>r.theme.background};
    padding: 0 12px;

    ${a==="top"&&t`
      top: -24px;
      transform: translateY(-50%);
    `}

    ${a==="bottom"&&t`
      bottom: -24px;
      transform: translateY(50%);
    `}

    ${e==="center"&&t`
      left: 50%;
      transform: translateX(-50%)
        ${a==="top"?"translateY(-50%)":"translateY(50%)"};
    `}

    ${e==="left"&&t`
      left: 24px;
    `}

    ${e==="right"&&t`
      right: 24px;
    `}
  `}
`;try{l.displayName="Container",l.__docgenInfo={description:"",displayName:"Container",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelX:{defaultValue:{value:"center"},description:"",name:"labelX",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},labelY:{defaultValue:{value:"top"},description:"",name:"labelY",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}export{l as C};
