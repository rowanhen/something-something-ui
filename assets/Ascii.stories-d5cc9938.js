import{a as e,j as f}from"./jsx-runtime-2162d874.js";import{u,a as h}from"./styled-components.browser.esm-14148d23.js";import"./index-c6dae603.js";const v=()=>e("pre",{children:`
   .
   |\\
   |_\\
 __|__
 \\   /
~~~~~~~
`}),C=()=>e("pre",{children:`
    |\\__/,|   ('\\
  _.|o o  |_   ) )
-(((---(((--------
    `}),g=()=>e("pre",{children:`
    ____
 __/  |_\\_
|  _     _''-.
'-(_)---(_)--'  
      `}),b=()=>e("pre",{children:`
 /\\_/\\
( o.o )
 > ^ <`}),y=()=>e("pre",{children:`
     _
    (  )
 ( '  ) . )
(_, _(  ,_)_)`}),x=()=>e("pre",{children:`
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)`}),A=()=>e("pre",{children:`
 __
( o>
///\\ 
\\V_/_
            `}),o={boat:e(v,{}),car:e(g,{}),cloud:e(y,{}),"fat-cat":e(x,{}),"border-cat":e(C,{}),"cat-face":e(b,{}),penguin:e(A,{})},a=({ascii:r,size:d=16})=>{if(!r||!o[r])return null;const m=o[r];return e(j,{size:d,children:m})},j=u.div(({size:r})=>h`
    font-size: ${r}px;
  `);try{a.displayName="Ascii",a.__docgenInfo={description:"",displayName:"Ascii",props:{ascii:{defaultValue:null,description:"",name:"ascii",required:!0,type:{name:"enum",value:[{value:'"boat"'},{value:'"car"'},{value:'"cloud"'},{value:'"fat-cat"'},{value:'"border-cat"'},{value:'"cat-face"'},{value:'"penguin"'}]}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const N={title:"Ascii",component:a},z=r=>e(a,{...r}),t=z.bind({});t.args={ascii:"car",size:16};const V=()=>e("div",{children:Object.keys(o).map(r=>f(q,{children:[e("span",{children:r}),e(a,{ascii:r})]},r))}),q=u.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 400px;
`,w=()=>e(V,{}),n=w.bind({});var c,s,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"props => <Ascii {...props} />",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var _,l,p;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:"() => <Container />",...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["Default","Collection"];export{n as Collection,t as Default,O as __namedExportsOrder,N as default};
