import{a as m,j as r}from"./jsx-runtime-86dfebf6.js";import{u as t,a as s}from"./styled-components.browser.esm-6d3cb859.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import{r as p}from"./index-1b03fe98.js";import"./Divider-b0f944c6.js";import{r as $}from"./index-6fd5a17b.js";import{F as k}from"./Field-22302e01.js";import"./Icon-6aef228a.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import{L as D}from"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-120e3f42.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";const x=({open:e,handleClose:a,title:l,closeButton:d,children:u,width:n,primaryButton:i,secondaryButton:o})=>{const c=p.useRef(null);return p.useEffect(()=>{c.current&&(e?typeof c.current.showModal=="function"?c.current.showModal():console.warn("The showModal() method is not supported by this browser."):c.current.close())},[e]),m(E,{ref:c,width:n,children:[m(S,{children:[r("h2",{children:l}),d&&r(j,{onClick:a,children:"X"})]}),r(z,{children:u}),m(R,{children:[o&&r(M,{onClick:o.onClick,fullLength:!!i,children:o.label}),i&&r(L,{onClick:i.onClick,fullLength:!!o,children:i.label})]})]})},E=t.dialog(({width:e,theme:a})=>s`
    color: ${a.textPrimary};
    min-width: 300px;

    ${e&&s`
      width: ${e};
    `}

    &[open] {
      animation: fade-in 0.1s ease-out;
    }

    &[open]::backdrop {
      animation: backdrop-fade-in 0.1s ease-out forwards;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: scaleY(0);
      }
      100% {
        opacity: 1;
        transform: scaleY(1);
      }
    }

    @keyframes backdrop-fade-in {
      0% {
        background-color: rgb(0 0 0 / 0);
      }
      100% {
        background-color: rgb(0 0 0 / 0.3);
      }
    }
  `),S=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,j=t(f)``,z=t.div``,R=t.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 60%;
`,L=t(f)(({fullLength:e})=>s`
    ${e&&s`
      width: 100%;
    `}
    min-width: 120px;
  `),M=t(f)(({fullLength:e})=>s`
    ${e&&s`
      width: 100%;
    `}
    min-width: 120px;
  `);try{x.displayName="Dialog",x.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}}}catch{}const P=p.createContext({portalRoot:null}),b=({children:e})=>{const a=document.getElementById("portal-root")||document.createElement("div");return document.getElementById("portal-root")||(a.id="portal-root",document.body.appendChild(a)),r(P.Provider,{value:{portalRoot:a},children:e})},T=()=>{const e=p.useContext(P);if(!e)throw new Error("usePortal must be used within a PortalProvider");return e};try{b.displayName="PortalProvider",b.__docgenInfo={description:"",displayName:"PortalProvider",props:{}}}catch{}const v=({open:e,onChange:a,handleClose:l,width:d,closeOnOutsideClick:u=!0,children:n})=>{const{portalRoot:i}=T(),o=p.useRef(null),c=y=>{o.current&&!o.current.contains(y.target)&&u&&l()};if(p.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[]),p.useEffect(()=>{a&&a()},[e]),!i)return null;const g=r(O,{ref:o,open:e,width:d,children:n});return $.createPortal(g,i)},O=t.div`
  position: fixed;
  top: 0;
  right: ${e=>e.open?"0":`-${e.width||"340px"}`};
  width: ${e=>e.width||"300px"};
  height: 100%;
  background-color: ${e=>e.theme.background};
  border-left: ${e=>e.theme.borderPrimary};
  transition: right 0.3s ease;
  z-index: 1000;
  color: ${e=>e.theme.textPrimary};
`;try{v.displayName="Drawer",v.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},closeOnOutsideClick:{defaultValue:{value:"true"},description:"",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}}}}}catch{}const _=({label:e,assistiveText:a,requiredMessage:l,prefix:d,suffix:u,options:n,...i})=>r(k,{label:e,assistiveText:a,requiredMessage:l,id:i.id,children:m(F,{children:[d&&r(Y,{children:d}),r(H,{...i,children:n.map(o=>r("option",{value:o.value,children:o.label},o.value))}),u&&r(X,{children:u})]})}),F=t.div`
  display: flex;
  align-items: center;
`,Y=t.span`
  margin-right: 8px;
`,X=t.span`
  margin-left: 8px;
`,H=t.select`
  flex: 1;
  padding: 8px;
`;try{_.displayName="Dropdown",_.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}}}}}catch{}const w=({label:e,assistiveText:a,requiredMessage:l,prefix:d,suffix:u,...n})=>r(k,{label:e,assistiveText:a,requiredMessage:l,id:n.id,children:m(W,{children:[d&&r(A,{children:d}),r(J,{...n,"aria-describedby":`${n.id}-assistive ${n.id}-required`}),u&&r(G,{children:u})]})}),W=t.div`
  display: flex;
  align-items: center;
`,A=t.span`
  margin-right: 8px;
`,G=t.span`
  margin-left: 8px;
`,J=t.input`
  flex: 1;
  padding: 8px;
`;try{w.displayName="Input",w.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}}}}}catch{}const N=p.createContext(void 0),q=({children:e})=>{const[a,l]=p.useState([]),d=(n,i)=>{l(o=>[...o.slice(-2),{id:i,content:n}])},u=n=>{l(i=>i.filter(o=>o.id!==n))};return m(N.Provider,{value:{addToast:d,removeToast:u},children:[e,a.map(n=>n.content)]})},K=()=>{const e=p.useContext(N);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};try{q.displayName="ToastProvider",q.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const C=({id:e,title:a,open:l,handleClose:d,closeButton:u,primaryButton:n,secondaryButton:i,width:o,autoClose:c=6,position:g})=>{const{portalRoot:y}=T(),{removeToast:h}=K();if(p.useEffect(()=>{if(c){const I=setTimeout(()=>{h(e)},c*1e3);return()=>clearTimeout(I)}},[c,d,e,h]),!y||!l)return null;const B=r(Q,{width:o,position:g,open:l,children:m(U,{children:[m(Z,{children:[a&&r(ee,{children:a}),u&&r(te,{onClick:()=>h(e),children:"X"})]}),m(re,{children:[i&&r(V,{onClick:i.onClick,children:i.label}),n&&r(V,{onClick:n.onClick,children:n.label})]})]})});return $.createPortal(B,y)},Q=t.div`
  position: fixed;
  width: ${e=>e.width||"300px"};
  padding: 12px;
  background-color: ${e=>e.theme.background};
  border: ${e=>e.theme.borderPrimary};
  color: ${e=>e.theme.textPrimary};
  border-radius: 4px;
  z-index: 1000;

  opacity: 0;

  ${e=>e.position.includes("top")&&s`
      top: 48px;
    `}
  ${e=>e.position.includes("bottom")&&s`
      bottom: 48px;
    `}

  ${e=>e.position.includes("center")&&s`
      left: 50%;
      transform: translateX(-50%) translateY(0);
    `}

  ${e=>e.position.includes("left")&&s`
      left: 48px;
    `}
  ${e=>e.position.includes("right")&&s`
      right: 48px;
      transform: translateY(0);
    `}

  ${e=>e.open&&s`
      opacity: 1;
    `}
`,U=t.div`
  padding: 24px;
`,Z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,ee=t.h2``,te=t(f)``,re=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,V=t(f)`
  flex-grow: 1;
`;try{C.displayName="Toast",C.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!1,type:{name:"(() => void)"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},autoClose:{defaultValue:{value:"6"},description:"",name:"autoClose",required:!1,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}}}}}catch{}const ne={small:s`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,medium:s`
    padding: 8px 18px;
    font-size: 1rem;
  `,large:s`
    padding: 10px 24px;
    font-size: 1.2rem;
  `},f=({active:e,disabled:a,loading:l,size:d="small",children:u,...n})=>m(oe,{...n,active:e,disabled:a,loading:l,size:d,children:[l&&r(ae,{children:r(D,{size:16})}),r(ie,{loading:l,children:u})]}),ae=t.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,ie=t.div`
  flex-grow: 1;
  opacity: ${({loading:e})=>e?0:1};
`,oe=t.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textPrimary};
  background: ${e=>e.theme.background};
  border-radius: ${e=>e.theme.borderRadius};
  border: ${e=>e.theme.borderPrimary};

  ${({size:e="medium"})=>ne[e]}

  ${({loading:e})=>e&&s`
      cursor: progress;
    `}

  ${({disabled:e})=>e&&s`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as B,x as D,w as I,b as P,C as T,v as a,_ as b,q as c,K as u};
