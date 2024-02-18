import{j as v,a as l}from"./jsx-runtime-2162d874.js";import{r}from"./index-c6dae603.js";import{u as n,a as t}from"./styled-components.browser.esm-14148d23.js";import{c as p}from"./theme-860d7b96.js";const c=({children:e,popoverContent:u,defaultPosition:d="bottom",...f})=>{const[a,s]=r.useState(!1),o=r.useRef(null),i=m=>{o.current&&!o.current.contains(m.target)&&s(!1)};return r.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),v(g,{ref:o,children:[l(h,{onClick:()=>s(!a),children:e}),a&&l(b,{position:d,...f,children:u})]})},g=n.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`,h=n.div``,b=n.div`
  position: absolute;
  padding: 8px;
  background-color: ${p.white_smoke.DEFAULT};
  border: 1px solid ${p.night.DEFAULT};
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
