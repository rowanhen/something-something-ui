import{a as f,j as l}from"./jsx-runtime-86dfebf6.js";import{r}from"./index-1b03fe98.js";import{u as n,a as t}from"./styled-components.browser.esm-6d3cb859.js";const c=({children:e,popoverContent:p,defaultPosition:u="bottom",...d})=>{const[a,s]=r.useState(!1),o=r.useRef(null),i=m=>{o.current&&!o.current.contains(m.target)&&s(!1)};return r.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),f(v,{ref:o,children:[l(g,{onClick:()=>s(!a),children:e}),a&&l(h,{position:u,...d,children:p})]})},v=n.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: ${e=>e.theme.textPrimary};
`,g=n.div``,h=n.div`
  position: absolute;
  padding: 8px;
  background-color: ${e=>e.theme.background};
  border: ${e=>e.theme.borderPrimary};
  z-index: 1000;

  ${({position:e})=>{switch(e){case"top":return t`
          margin-bottom: 8px;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom":return t`
          margin-top: 8px;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          offset-anchor: top center;
        `;case"left":return t`
          margin-right: 8px;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center right;
        `;case"right":return t`
          margin-left: 8px;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center left;
        `;default:return""}}};
`;try{c.displayName="Popover",c.__docgenInfo={description:"",displayName:"Popover",props:{popoverContent:{defaultValue:null,description:"",name:"popoverContent",required:!0,type:{name:"ReactNode"}},defaultPosition:{defaultValue:{value:"bottom"},description:"",name:"defaultPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}}}}}catch{}export{c as P};
