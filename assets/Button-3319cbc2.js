import{a as p,j as r}from"./jsx-runtime-86dfebf6.js";import{u as t,a as s}from"./styled-components.browser.esm-6d3cb859.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import{r as m}from"./index-1b03fe98.js";import"./Divider-b0f944c6.js";import{r as P}from"./index-6fd5a17b.js";import{F as N}from"./Field-22302e01.js";import"./Icon-6aef228a.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import{L as S}from"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-120e3f42.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";const x=({open:e,handleClose:n,title:i,closeButton:d,children:c,width:a,primaryButton:o,secondaryButton:l})=>{const u=m.useRef(null);return m.useEffect(()=>{u.current&&(e?typeof u.current.showModal=="function"?u.current.showModal():console.warn("The showModal() method is not supported by this browser."):u.current.close())},[e]),p(z,{ref:u,width:a,children:[p(R,{children:[r("h2",{children:i}),d&&r(F,{onClick:n,children:"X"})]}),r(H,{children:c}),p(L,{children:[l&&r(O,{onClick:l.onClick,fullLength:!!o,children:l.label}),o&&r(M,{onClick:o.onClick,fullLength:!!l,children:o.label})]})]})},z=t.dialog(({width:e,theme:n})=>s`
    color: ${n.textPrimary};
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
  `),R=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,F=t(f)``,H=t.div``,L=t.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 60%;
`,M=t(f)(({fullLength:e})=>s`
    ${e&&s`
      width: 100%;
    `}
    min-width: 120px;
  `),O=t(f)(({fullLength:e})=>s`
    ${e&&s`
      width: 100%;
    `}
    min-width: 120px;
  `);try{x.displayName="Dialog",x.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}}}catch{}const B=m.createContext({portalRoot:null}),_=({children:e})=>{const n=document.getElementById("portal-root")||document.createElement("div");return document.getElementById("portal-root")||(n.id="portal-root",document.body.appendChild(n)),r(B.Provider,{value:{portalRoot:n},children:e})},D=()=>{const e=m.useContext(B);if(!e)throw new Error("usePortal must be used within a PortalProvider");return e};try{_.displayName="PortalProvider",_.__docgenInfo={description:"",displayName:"PortalProvider",props:{}}}catch{}const v=({open:e,onChange:n,handleClose:i,width:d,closeOnOutsideClick:c=!0,children:a})=>{const{portalRoot:o}=D(),l=m.useRef(null),u=y=>{l.current&&!l.current.contains(y.target)&&c&&i()};if(m.useEffect(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[]),m.useEffect(()=>{n&&n()},[e]),!o)return null;const g=r(X,{ref:l,open:e,width:d,children:a});return P.createPortal(g,o)},X=t.div`
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
`;try{v.displayName="Drawer",v.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},closeOnOutsideClick:{defaultValue:{value:"true"},description:"",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}}}}}catch{}const b=({children:e})=>r(Y,{children:r(W,{children:e})}),Y=t.div`
  display: flex;
  flex-grow: 1;
`,W=t.div``;try{b.displayName="DrawerBody",b.__docgenInfo={description:"",displayName:"DrawerBody",props:{}}}catch{}const w=({children:e})=>r(A,{children:r(G,{children:e})}),A=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,G=t.div``;try{w.displayName="DrawerFooter",w.__docgenInfo={description:"",displayName:"DrawerFooter",props:{}}}catch{}const q=({title:e,closeButton:n,handleClose:i,children:d})=>p(J,{children:[p(K,{children:[e&&r(U,{children:e}),n&&r(Z,{onClick:i,children:"X"})]}),r(Q,{children:d})]}),J=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-items: flex-start;
`,K=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,Q=t.div``,U=t.h2``,Z=t(f)``;try{q.displayName="DrawerHeader",q.__docgenInfo={description:"",displayName:"DrawerHeader",props:{handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}}}}}catch{}const C=({label:e,assistiveText:n,requiredMessage:i,prefix:d,suffix:c,options:a,...o})=>r(N,{label:e,assistiveText:n,requiredMessage:i,id:o.id,children:p(ee,{children:[d&&r(te,{children:d}),r(ne,{...o,children:a.map(l=>r("option",{value:l.value,children:l.label},l.value))}),c&&r(re,{children:c})]})}),ee=t.div`
  display: flex;
  align-items: center;
`,te=t.span`
  margin-right: 8px;
`,re=t.span`
  margin-left: 8px;
`,ne=t.select`
  flex: 1;
  padding: 8px;
`;try{C.displayName="Dropdown",C.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}}}}}catch{}const V=({label:e,assistiveText:n,requiredMessage:i,prefix:d,suffix:c,...a})=>r(N,{label:e,assistiveText:n,requiredMessage:i,id:a.id,children:p(ae,{children:[d&&r(ie,{children:d}),r(le,{...a,"aria-describedby":`${a.id}-assistive ${a.id}-required`}),c&&r(oe,{children:c})]})}),ae=t.div`
  display: flex;
  align-items: center;
`,ie=t.span`
  margin-right: 8px;
`,oe=t.span`
  margin-left: 8px;
`,le=t.input`
  flex: 1;
  padding: 8px;
`;try{V.displayName="Input",V.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}}}}}catch{}const I=m.createContext(void 0),$=({children:e})=>{const[n,i]=m.useState([]),d=(a,o)=>{i(l=>[...l.slice(-2),{id:o,content:a}])},c=a=>{i(o=>o.filter(l=>l.id!==a))};return p(I.Provider,{value:{addToast:d,removeToast:c},children:[e,n.map(a=>a.content)]})},de=()=>{const e=m.useContext(I);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};try{$.displayName="ToastProvider",$.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const k=({id:e,title:n,open:i,handleClose:d,closeButton:c,primaryButton:a,secondaryButton:o,width:l,autoClose:u=6,position:g})=>{const{portalRoot:y}=D(),{removeToast:h}=de();if(m.useEffect(()=>{if(u){const j=setTimeout(()=>{h(e)},u*1e3);return()=>clearTimeout(j)}},[u,d,e,h]),!y||!i)return null;const E=r(se,{width:l,position:g,open:i,children:p(ce,{children:[p(ue,{children:[n&&r(pe,{children:n}),c&&r(me,{onClick:()=>h(e),children:"X"})]}),p(fe,{children:[o&&r(T,{onClick:o.onClick,children:o.label}),a&&r(T,{onClick:a.onClick,children:a.label})]})]})});return P.createPortal(E,y)},se=t.div`
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
`,ce=t.div`
  padding: 24px;
`,ue=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,pe=t.h2``,me=t(f)``,fe=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,T=t(f)`
  flex-grow: 1;
`;try{k.displayName="Toast",k.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!1,type:{name:"(() => void)"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},autoClose:{defaultValue:{value:"6"},description:"",name:"autoClose",required:!1,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}}}}}catch{}const ye={small:s`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,medium:s`
    padding: 8px 18px;
    font-size: 1rem;
  `,large:s`
    padding: 10px 24px;
    font-size: 1.2rem;
  `},f=({active:e,disabled:n,loading:i,size:d="small",children:c,...a})=>p(xe,{...a,active:e,disabled:n,loading:i,size:d,children:[i&&r(ge,{children:r(S,{size:16})}),r(he,{loading:i,children:c})]}),ge=t.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,he=t.div`
  flex-grow: 1;
  opacity: ${({loading:e})=>e?0:1};
`,xe=t.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textPrimary};
  background: ${e=>e.theme.background};
  border-radius: ${e=>e.theme.borderRadius};
  border: ${e=>e.theme.borderPrimary};

  ${({size:e="medium"})=>ye[e]}

  ${({loading:e})=>e&&s`
      cursor: progress;
    `}

  ${({disabled:e})=>e&&s`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as B,x as D,V as I,_ as P,k as T,v as a,C as b,$ as c,de as u};
