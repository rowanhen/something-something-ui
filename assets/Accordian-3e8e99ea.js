import{j as d,a as n}from"./jsx-runtime-2162d874.js";import{r as l}from"./index-c6dae603.js";import{u as o}from"./styled-components.browser.esm-14148d23.js";import{c as i}from"./theme-860d7b96.js";const p=o.section`
  margin: 10px 0;
`,g=o.button`
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.4s ease;
  background: ${i.white_smoke.DEFAULT};
  border: 1px solid ${i.night.DEFAULT};
`,m=o.div`
  overflow: hidden;
  padding: 4px;
`,c=({title:r,children:s})=>{const[e,t]=l.useState(!1);return d(p,{children:[n(g,{onClick:()=>{t(!e)},onKeyDown:a=>{a.key==="Enter"&&t(!e)},children:r}),e&&n(m,{children:s})]})};try{c.displayName="Accordian",c.__docgenInfo={description:"",displayName:"Accordian",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{c as A};
