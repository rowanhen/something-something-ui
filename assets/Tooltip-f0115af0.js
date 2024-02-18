import{a as n,j as u}from"./jsx-runtime-86dfebf6.js";import{r as c}from"./index-1b03fe98.js";import{u as r,a as e}from"./styled-components.browser.esm-6d3cb859.js";const i=({children:t,title:o,defaultPosition:s="top",tooltipContent:l,...p})=>{const[m,a]=c.useState(!1);return n(d,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),...p,children:[t,m&&n(h,{position:s,children:[o&&u(f,{children:o}),l]})]})},d=r.div`
  position: relative;
  display: inline-block;
  cursor: help;
  border-bottom: 1px dashed ${t=>t.theme.primaryVariant};
  color: ${t=>t.theme.textPrimary};
`,f=r.h4`
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`,h=r.div`
  position: absolute;
  padding: 8px;
  background-color: ${t=>t.theme.background};
  border: ${t=>t.theme.borderPrimary};
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
`;try{i.displayName="Tooltip",i.__docgenInfo={description:"",displayName:"Tooltip",props:{defaultPosition:{defaultValue:{value:"top"},description:"",name:"defaultPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"ReactNode"}}}}}catch{}export{i as T};
