import{j as u}from"./jsx-runtime-86dfebf6.js";import{r as g}from"./index-1b03fe98.js";import{a as e,u as m}from"./styled-components.browser.esm-6d3cb859.js";import{c as f}from"./theme-faa4253d.js";const r={"heading-large":e`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
  `,"heading-medium":e`
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
  `,"heading-small":e`
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
  `,"body-large":e`
    font-size: 18px;
    font-weight: normal;
    line-height: 28px;
  `,"body-regular":e`
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
  `,"body-small":e`
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
  `,label:e`
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    text-transform: uppercase;
  `,caption:e`
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
  `,code:e`
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    line-height: 22px;
  `},o=g.forwardRef(({children:a,typo:t="body-regular",className:i="",tag:n="span",color:s="night",...p},d)=>u(l,{as:n,className:i,typo:t,color:s,...p,ref:d,children:a})),l=m.span`
  ${a=>r[a.typo]||r["body-regular"]};
  color: ${({color:a,theme:t})=>a?f[a].DEFAULT:t.textPrimary};
`;try{o.displayName="Typography",o.__docgenInfo={description:"",displayName:"Typography",props:{tag:{defaultValue:{value:"span"},description:"",name:"tag",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},typo:{defaultValue:{value:"body-regular"},description:"",name:"typo",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"heading-large"'},{value:'"heading-medium"'},{value:'"heading-small"'},{value:'"body-large"'},{value:'"body-regular"'},{value:'"body-small"'},{value:'"caption"'},{value:'"code"'}]}},color:{defaultValue:{value:"night"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white_smoke"'},{value:'"night"'},{value:'"red_pantone"'},{value:'"ut_orange"'},{value:'"brandeis_blue"'},{value:'"sgbus_green"'},{value:'"transparent"'}]}}}}}catch{}try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{o as T,r as t};
