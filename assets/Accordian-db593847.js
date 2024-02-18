import{a as s,j as n}from"./jsx-runtime-86dfebf6.js";import{r as d}from"./index-1b03fe98.js";import{u as t}from"./styled-components.browser.esm-6d3cb859.js";const a=({title:e,children:c})=>{const[r,o]=d.useState(!1);return s(l,{children:[n(p,{onClick:()=>{o(!r)},onKeyDown:i=>{i.key==="Enter"&&o(!r)},children:e}),r&&n(m,{children:c})]})},l=t.section`
  margin: 10px 0;
  color: ${e=>e.theme.textPrimary};
`,p=t.button`
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.4s ease;
  background: ${e=>e.theme.background};
  border: ${e=>e.theme.borderPrimary};
  color: ${e=>e.theme.textPrimary};
`,m=t.div`
  overflow: hidden;
  padding: 4px;
  background: ${e=>e.theme.background};
`;try{a.displayName="Accordian",a.__docgenInfo={description:"",displayName:"Accordian",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{a as A};
