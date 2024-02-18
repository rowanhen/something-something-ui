import{a as u,j as r}from"./jsx-runtime-86dfebf6.js";import{u as t,a as s}from"./styled-components.browser.esm-6d3cb859.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import{r as m}from"./index-1b03fe98.js";import"./Divider-b0f944c6.js";import{r as T}from"./index-6fd5a17b.js";import{F as B}from"./Field-22302e01.js";import"./Icon-6aef228a.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import{L as E}from"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-3fcbf10c.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";const v=({open:e,handleClose:i,title:a,closeButton:c,children:o,width:n,primaryButton:l,secondaryButton:d})=>{const p=m.useRef(null);return m.useEffect(()=>{p.current&&(e?typeof p.current.showModal=="function"?p.current.showModal():console.warn("The showModal() method is not supported by this browser."):p.current.close())},[e]),u(S,{ref:p,width:n,children:[u(j,{children:[r("h2",{children:a}),c&&r(z,{onClick:i,children:"X"})]}),r(R,{children:o}),u(L,{children:[d&&r(F,{onClick:d.onClick,fullLength:!!l,children:d.label}),l&&r(M,{onClick:l.onClick,fullLength:!!d,children:l.label})]})]})},S=t.dialog(({width:e,theme:i})=>s`
    color: ${i.textPrimary};
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
  `),j=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,z=t(f)``,R=t.div``,L=t.div`
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
  `),F=t(f)(({fullLength:e})=>s`
    ${e&&s`
      width: 100%;
    `}
    min-width: 120px;
  `);try{v.displayName="Dialog",v.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}}}catch{}const N=m.createContext({portalRoot:null}),_=({children:e})=>{const i=document.getElementById("portal-root")||document.createElement("div");return document.getElementById("portal-root")||(i.id="portal-root",document.body.appendChild(i)),r(N.Provider,{value:{portalRoot:i},children:e})},I=()=>{const e=m.useContext(N);if(!e)throw new Error("usePortal must be used within a PortalProvider");return e};try{_.displayName="PortalProvider",_.__docgenInfo={description:"",displayName:"PortalProvider",props:{}}}catch{}const w=({open:e,handleClose:i,title:a,closeButton:c,primaryButton:o,secondaryButton:n,width:l,closeOnOutsideClick:d=!0,children:p})=>{const{portalRoot:h}=I(),y=m.useRef(null),g=b=>{y.current&&!y.current.contains(b.target)&&d&&i()};if(m.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]),m.useEffect(()=>{},[e]),!h)return null;const x=r(O,{ref:y,open:e,width:l,children:u(X,{children:[u(Y,{children:[a&&r(W,{children:a}),c&&r(A,{onClick:i,children:"X"})]}),r(H,{children:p}),u(G,{children:[n&&r(C,{onClick:n.onClick,children:n.label}),o&&r(C,{onClick:o.onClick,children:o.label})]})]})});return T.createPortal(x,h)},O=t.div`
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
`,X=t.div`
  height: 100%;
  padding: 24px;
`,Y=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,H=t.div``,W=t.h2``,A=t(f)``,G=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,C=t(f)`
  flex-grow: 1;
`;try{w.displayName="Drawer",w.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},closeOnOutsideClick:{defaultValue:{value:"true"},description:"",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}}}}}catch{}const q=({label:e,assistiveText:i,requiredMessage:a,prefix:c,suffix:o,options:n,...l})=>r(B,{label:e,assistiveText:i,requiredMessage:a,id:l.id,children:u(J,{children:[c&&r(K,{children:c}),r(U,{...l,children:n.map(d=>r("option",{value:d.value,children:d.label},d.value))}),o&&r(Q,{children:o})]})}),J=t.div`
  display: flex;
  align-items: center;
`,K=t.span`
  margin-right: 8px;
`,Q=t.span`
  margin-left: 8px;
`,U=t.select`
  flex: 1;
  padding: 8px;
`;try{q.displayName="Dropdown",q.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}}}}}catch{}const $=({label:e,assistiveText:i,requiredMessage:a,prefix:c,suffix:o,...n})=>r(B,{label:e,assistiveText:i,requiredMessage:a,id:n.id,children:u(Z,{children:[c&&r(ee,{children:c}),r(re,{...n,"aria-describedby":`${n.id}-assistive ${n.id}-required`}),o&&r(te,{children:o})]})}),Z=t.div`
  display: flex;
  align-items: center;
`,ee=t.span`
  margin-right: 8px;
`,te=t.span`
  margin-left: 8px;
`,re=t.input`
  flex: 1;
  padding: 8px;
`;try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}}}}}catch{}const D=m.createContext(void 0),V=({children:e})=>{const[i,a]=m.useState([]),c=(n,l)=>{a(d=>[...d.slice(-2),{id:l,content:n}])},o=n=>{a(l=>l.filter(d=>d.id!==n))};return u(D.Provider,{value:{addToast:c,removeToast:o},children:[e,i.map(n=>n.content)]})},ne=()=>{const e=m.useContext(D);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};try{V.displayName="ToastProvider",V.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const k=({id:e,title:i,open:a,handleClose:c,closeButton:o,primaryButton:n,secondaryButton:l,width:d,autoClose:p=6,position:h})=>{const{portalRoot:y}=I(),{removeToast:g}=ne();if(m.useEffect(()=>{if(p){const b=setTimeout(()=>{g(e)},p*1e3);return()=>clearTimeout(b)}},[p,c,e,g]),!y||!a)return null;const x=r(ie,{width:d,position:h,open:a,children:u(ae,{children:[u(oe,{children:[i&&r(le,{children:i}),o&&r(se,{onClick:()=>g(e),children:"X"})]}),u(de,{children:[l&&r(P,{onClick:l.onClick,children:l.label}),n&&r(P,{onClick:n.onClick,children:n.label})]})]})});return T.createPortal(x,y)},ie=t.div`
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
`,ae=t.div`
  padding: 24px;
`,oe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,le=t.h2``,se=t(f)``,de=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,P=t(f)`
  flex-grow: 1;
`;try{k.displayName="Toast",k.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!1,type:{name:"(() => void)"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},autoClose:{defaultValue:{value:"6"},description:"",name:"autoClose",required:!1,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}}}}}catch{}const ce={small:s`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,medium:s`
    padding: 8px 18px;
    font-size: 1rem;
  `,large:s`
    padding: 10px 24px;
    font-size: 1.2rem;
  `},f=({active:e,disabled:i,loading:a,size:c="small",children:o,...n})=>u(me,{...n,active:e,disabled:i,loading:a,size:c,children:[a&&r(ue,{children:r(E,{size:16})}),r(pe,{loading:a,children:o})]}),ue=t.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,pe=t.div`
  flex-grow: 1;
  opacity: ${({loading:e})=>e?0:1};
`,me=t.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textPrimary};
  background: ${e=>e.theme.background};
  border-radius: ${e=>e.theme.borderRadius};
  border: ${e=>e.theme.borderPrimary};

  ${({size:e="medium"})=>ce[e]}

  ${({loading:e})=>e&&s`
      cursor: progress;
    `}

  ${({disabled:e})=>e&&s`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as B,v as D,$ as I,_ as P,k as T,w as a,q as b,V as c,ne as u};
