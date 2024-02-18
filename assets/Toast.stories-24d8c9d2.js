import{a}from"./jsx-runtime-2162d874.js";import{T as P,P as v,c as f,u as C}from"./Button-de25ff69.js";import"./index-c6dae603.js";import"./styled-components.browser.esm-14148d23.js";import"./Accordian-3e8e99ea.js";import"./theme-860d7b96.js";import"./Ascii-30d57583.js";import"./Badge-d931c89c.js";import"./Banner-594646c0.js";import"./Card-07d02d2c.js";import"./Checkbox-2c0839d0.js";import"./Field-b9360730.js";import"./Chip-ac0743d4.js";import"./Container-2d7d5aaf.js";import"./Divider-8e72693e.js";import"./index-eb008d06.js";import"./Icon-bc54a877.js";import"./Info-639d9cc6.js";import"./Link-3c547324.js";import"./Loader-073627a0.js";import"./Menu-18af8f1f.js";import"./Popover-b7c4b040.js";import"./Radio-0cb6dd05.js";import"./Row-0ad75d8f.js";import"./TabList-77255eb7.js";import"./Text-6f869e24.js";import"./Textarea-af6c11b7.js";import"./Toggle-a6e8a904.js";import"./Tooltip-dab542f2.js";const X={title:"Toast",component:P},s=e=>a(v,{children:a(f,{children:a(b,{...e})})}),b=e=>{const{addToast:g}=C();return a("button",{onClick:()=>g(a(P,{...e}),e.id),children:"Open toast"})},r=s.bind({});r.args={id:"default-toast",title:"Default Toast",open:!0,position:"bottom-right",autoClose:3};const o=s.bind({});o.args={...r.args,primaryButton:{label:"Primary",onClick:()=>alert("Primary Clicked")},secondaryButton:{label:"Secondary",onClick:()=>alert("Secondary Clicked")}};const t=s.bind({});t.args={...r.args,position:"top-left"};var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <PortalProvider>
      <ToastProvider>
        <CreateToast {...args} />
      </ToastProvider>
    </PortalProvider>;
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <PortalProvider>
      <ToastProvider>
        <CreateToast {...args} />
      </ToastProvider>
    </PortalProvider>;
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,T;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <PortalProvider>
      <ToastProvider>
        <CreateToast {...args} />
      </ToastProvider>
    </PortalProvider>;
}`,...(T=(u=t.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const Y=["DefaultToast","ToastWithButtons","TopLeftToast"];export{r as DefaultToast,o as ToastWithButtons,t as TopLeftToast,Y as __namedExportsOrder,X as default};
