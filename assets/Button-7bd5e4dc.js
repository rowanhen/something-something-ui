import{j as u,a as n}from"./jsx-runtime-2162d874.js";import{u as t,a as s}from"./styled-components.browser.esm-14148d23.js";import"./Accordian-3e8e99ea.js";import"./Badge-d931c89c.js";import"./Banner-594646c0.js";import"./Card-07d02d2c.js";import"./Checkbox-2c0839d0.js";import"./Chip-ac0743d4.js";import"./Container-2d7d5aaf.js";import{r as m}from"./index-c6dae603.js";import"./Divider-8e72693e.js";import{r as B}from"./index-eb008d06.js";import{F as N}from"./Field-b9360730.js";import"./Icon-bc54a877.js";import"./Info-639d9cc6.js";import"./Link-3c547324.js";import{L as S}from"./Loader-073627a0.js";import"./Menu-18af8f1f.js";import"./Popover-b7c4b040.js";import"./Radio-0cb6dd05.js";import"./Row-0ad75d8f.js";import"./TabList-77255eb7.js";import"./Text-6f869e24.js";import"./Textarea-af6c11b7.js";import"./Toggle-a6e8a904.js";import"./Tooltip-dab542f2.js";import{c as b}from"./theme-860d7b96.js";const _=({open:e,handleClose:i,title:a,closeButton:c,children:o,width:r,primaryButton:l,secondaryButton:d})=>{const p=m.useRef(null);return m.useEffect(()=>{p.current&&(e?typeof p.current.showModal=="function"?p.current.showModal():console.warn("The showModal() method is not supported by this browser."):p.current.close())},[e]),u(j,{ref:p,width:r,children:[u(z,{children:[n("h2",{children:a}),c&&n(L,{onClick:i,children:"X"})]}),n(R,{children:o}),u(F,{children:[d&&n(O,{onClick:d.onClick,fullLength:!!l,children:d.label}),l&&n(M,{onClick:l.onClick,fullLength:!!d,children:l.label})]})]})},j=t.dialog(({width:e})=>s`
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
  `),z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,L=t(f)``,R=t.div``,F=t.div`
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
  `);try{_.displayName="Dialog",_.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}}}catch{}const D=m.createContext({portalRoot:null}),w=({children:e})=>{const i=document.getElementById("portal-root")||document.createElement("div");return document.getElementById("portal-root")||(i.id="portal-root",document.body.appendChild(i)),n(D.Provider,{value:{portalRoot:i},children:e})},I=()=>{const e=m.useContext(D);if(!e)throw new Error("usePortal must be used within a PortalProvider");return e};try{w.displayName="PortalProvider",w.__docgenInfo={description:"",displayName:"PortalProvider",props:{}}}catch{}const C=({open:e,handleClose:i,title:a,closeButton:c,primaryButton:o,secondaryButton:r,width:l,closeOnOutsideClick:d=!0,children:p})=>{const{portalRoot:h}=I(),y=m.useRef(null),g=v=>{y.current&&!y.current.contains(v.target)&&d&&i()};if(m.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]),m.useEffect(()=>{},[e]),!h)return null;const x=n(X,{ref:y,open:e,width:l,children:u(Y,{children:[u(H,{children:[a&&n(U,{children:a}),c&&n(W,{onClick:i,children:"X"})]}),n(A,{children:p}),u(G,{children:[r&&n(q,{onClick:r.onClick,children:r.label}),o&&n(q,{onClick:o.onClick,children:o.label})]})]})});return B.createPortal(x,h)},X=t.div`
  position: fixed;
  top: 0;
  right: ${e=>e.open?"0":`-${e.width||"340px"}`};
  width: ${e=>e.width||"300px"};
  height: 100%;
  background-color: white;
  border-left: 1px solid black;
  transition: right 0.3s ease;
  z-index: 1000;
`,Y=t.div`
  height: 100%;
  padding: 24px;
`,H=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,A=t.div``,U=t.h2``,W=t.button``,G=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,q=t.button`
  flex-grow: 1;
`;try{C.displayName="Drawer",C.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},closeOnOutsideClick:{defaultValue:{value:"true"},description:"",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}}}}}catch{}const V=({label:e,assistiveText:i,requiredMessage:a,prefix:c,suffix:o,options:r,...l})=>n(N,{label:e,assistiveText:i,requiredMessage:a,id:l.id,children:u(J,{children:[c&&n(K,{children:c}),n(Z,{...l,children:r.map(d=>n("option",{value:d.value,children:d.label},d.value))}),o&&n(Q,{children:o})]})}),J=t.div`
  display: flex;
  align-items: center;
`,K=t.span`
  margin-right: 8px;
`,Q=t.span`
  margin-left: 8px;
`,Z=t.select`
  flex: 1;
  padding: 8px;
`;try{V.displayName="Dropdown",V.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}}}}}catch{}const k=({label:e,assistiveText:i,requiredMessage:a,prefix:c,suffix:o,...r})=>n(N,{label:e,assistiveText:i,requiredMessage:a,id:r.id,children:u(ee,{children:[c&&n(te,{children:c}),n(re,{...r,"aria-describedby":`${r.id}-assistive ${r.id}-required`}),o&&n(ne,{children:o})]})}),ee=t.div`
  display: flex;
  align-items: center;
`,te=t.span`
  margin-right: 8px;
`,ne=t.span`
  margin-left: 8px;
`,re=t.input`
  flex: 1;
  padding: 8px;
`;try{k.displayName="Input",k.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},requiredMessage:{defaultValue:null,description:"",name:"requiredMessage",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}}}}}catch{}const E=m.createContext(void 0),$=({children:e})=>{const[i,a]=m.useState([]),c=(r,l)=>{a(d=>[...d.slice(-2),{id:l,content:r}])},o=r=>{a(l=>l.filter(d=>d.id!==r))};return u(E.Provider,{value:{addToast:c,removeToast:o},children:[e,i.map(r=>r.content)]})},ie=()=>{const e=m.useContext(E);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};try{$.displayName="ToastProvider",$.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const T=({id:e,title:i,open:a,handleClose:c,closeButton:o,primaryButton:r,secondaryButton:l,width:d,autoClose:p=6,position:h})=>{const{portalRoot:y}=I(),{removeToast:g}=ie();if(m.useEffect(()=>{if(p){const v=setTimeout(()=>{g(e)},p*1e3);return()=>clearTimeout(v)}},[p,c,e,g]),!y||!a)return null;const x=n(ae,{width:d,position:h,open:a,children:u(oe,{children:[u(le,{children:[i&&n(se,{children:i}),o&&n(de,{onClick:()=>g(e),children:"X"})]}),u(ce,{children:[l&&n(P,{onClick:l.onClick,children:l.label}),r&&n(P,{onClick:r.onClick,children:r.label})]})]})});return B.createPortal(x,y)},ae=t.div`
  position: fixed;
  width: ${e=>e.width||"300px"};
  padding: 12px;
  background-color: ${b.white_smoke.DEFAULT};
  border: 1px solid ${b.night.DEFAULT};
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
`,oe=t.div`
  padding: 24px;
`,le=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,se=t.h2``,de=t(f)``,ce=t.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`,P=t(f)`
  flex-grow: 1;
`;try{T.displayName="Toast",T.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!1,type:{name:"(() => void)"}},primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},autoClose:{defaultValue:{value:"6"},description:"",name:"autoClose",required:!1,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}}}}}catch{}const ue={small:s`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,medium:s`
    padding: 8px 18px;
    font-size: 1rem;
  `,large:s`
    padding: 10px 24px;
    font-size: 1.2rem;
  `},f=({active:e,disabled:i,loading:a,size:c="small",children:o,...r})=>u(fe,{...r,active:e,disabled:i,loading:a,size:c,children:[a&&n(pe,{children:n(S,{size:16})}),n(me,{loading:a,children:o})]}),pe=t.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,me=t.div`
  flex-grow: 1;
  opacity: ${({loading:e})=>e?0:1};
`,fe=t.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({size:e="medium"})=>ue[e]}

  ${({loading:e})=>e&&s`
      cursor: progress;
    `}

  ${({disabled:e})=>e&&s`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as B,_ as D,k as I,w as P,T,C as a,V as b,$ as c,ie as u};
