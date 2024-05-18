import{j as a}from"./jsx-runtime-86dfebf6.js";import{T as P,P as v,c as f,u as C,B as b}from"./Button-3319cbc2.js";import"./index-1b03fe98.js";import"./styled-components.browser.esm-6d3cb859.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Field-22302e01.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import"./Divider-b0f944c6.js";import"./index-6fd5a17b.js";import"./Icon-6aef228a.js";import"./theme-faa4253d.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-120e3f42.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";const Y={title:"Toast",component:P},s=e=>a(v,{children:a(f,{children:a(h,{...e})})}),h=e=>{const{addToast:g}=C();return a(b,{onClick:()=>g(a(P,{...e}),e.id),children:"Open toast"})},r=s.bind({});r.args={id:"default-toast",title:"Default Toast",open:!0,position:"bottom-right",autoClose:3};const o=s.bind({});o.args={...r.args,primaryButton:{label:"Primary",onClick:()=>alert("Primary Clicked")},secondaryButton:{label:"Secondary",onClick:()=>alert("Secondary Clicked")}};const t=s.bind({});t.args={...r.args,position:"top-left"};var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(T=(u=t.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const Z=["DefaultToast","ToastWithButtons","TopLeftToast"];export{r as DefaultToast,o as ToastWithButtons,t as TopLeftToast,Z as __namedExportsOrder,Y as default};
