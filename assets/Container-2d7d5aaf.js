import{a as l,j as d}from"./jsx-runtime-2162d874.js";import{u as r,a as t}from"./styled-components.browser.esm-14148d23.js";import{c as o}from"./theme-860d7b96.js";const s=({className:e,children:a,label:n,labelX:i="center",labelY:p="top"})=>l(u,{children:d(c,{className:e,children:[n&&l(m,{labelX:i,labelY:p,children:n}),a]})}),u=r.div`
  background-color: ${o.white_smoke[900]};
  padding: 12px;
`,c=r.div`
  padding: 20px;
  border: 1px solid ${o.night.DEFAULT};
  position: relative;
`,m=r.h4`
  ${({labelX:e,labelY:a})=>t`
    position: absolute;
    background-color: ${o.white_smoke[900]};
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
`;try{s.displayName="Container",s.__docgenInfo={description:"",displayName:"Container",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelX:{defaultValue:{value:"center"},description:"",name:"labelX",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},labelY:{defaultValue:{value:"top"},description:"",name:"labelY",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}export{s as C};
