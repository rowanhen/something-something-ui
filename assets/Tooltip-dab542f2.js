import{j as i,a as d}from"./jsx-runtime-2162d874.js";import{r as m}from"./index-c6dae603.js";import{u as r,a as e}from"./styled-components.browser.esm-14148d23.js";import{c as o}from"./theme-860d7b96.js";const s=({children:t,title:a,defaultPosition:l="top",tooltipContent:p,...u})=>{const[c,n]=m.useState(!1);return i(f,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),...u,children:[t,c&&i(h,{position:l,children:[a&&d(g,{children:a}),p]})]})},f=r.div`
  position: relative;
  display: inline-block;
  cursor: help;
  border-bottom: 1px dashed ${o.ut_orange[600]};
`,g=r.h4`
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`,h=r.div`
  position: absolute;
  padding: 8px;
  background-color: ${o.white_smoke.DEFAULT};
  border: 1px solid ${o.night.DEFAULT};
  z-index: 1000;

  ${({position:t})=>{switch(t){case"top":return e`
          margin-bottom: 8px;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom":return e`
          margin-top: 8px;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          offset-anchor: top center;
        `;case"left":return e`
          margin-right: 8px;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center right;
        `;case"right":return e`
          margin-left: 8px;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center left;
        `;default:return""}}};
`;try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{defaultPosition:{defaultValue:{value:"top"},description:"",name:"defaultPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"ReactNode"}}}}}catch{}export{s as T};
