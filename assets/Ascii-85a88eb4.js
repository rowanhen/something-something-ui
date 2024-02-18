import{j as e}from"./jsx-runtime-86dfebf6.js";import{u as c,a as o}from"./styled-components.browser.esm-6d3cb859.js";const i=()=>e("pre",{children:`
   .
   |\\
   |_\\
 __|__
 \\   /
~~~~~~~`}),u=()=>e("pre",{children:`
    |\\__/,|   ('\\
  _.|o o  |_   ) )
-(((---(((--------`}),s=()=>e("pre",{children:`
    ____
 __/  |_\\_
|  _     _''-.
'-(_)---(_)--'`}),l=()=>e("pre",{children:`
 /\\_/\\
( o.o )
 > ^ <`}),d=()=>e("pre",{children:`
     _
    (  )
 ( '  ) . )
(_, _(  ,_)_)`}),p=()=>e("pre",{children:`
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)`}),m=()=>e("pre",{children:`
 __
( o>
///\\ 
\\V_/_`}),a={boat:e(i,{}),car:e(s,{}),cloud:e(d,{}),"fat-cat":e(p,{}),"border-cat":e(u,{}),"cat-face":e(l,{}),penguin:e(m,{})},_=({ascii:r,size:t=16})=>{if(!r||!a[r])return null;const n=a[r];return e(f,{size:t,children:n})},f=c.div(({size:r,theme:t})=>o`
    font-size: ${r}px;
    color: ${t.textPrimary};
  `);try{_.displayName="Ascii",_.__docgenInfo={description:"",displayName:"Ascii",props:{ascii:{defaultValue:null,description:"",name:"ascii",required:!0,type:{name:"enum",value:[{value:'"boat"'},{value:'"car"'},{value:'"cloud"'},{value:'"fat-cat"'},{value:'"border-cat"'},{value:'"cat-face"'},{value:'"penguin"'}]}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}export{_ as A,a};
