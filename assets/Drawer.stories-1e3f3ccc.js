import{a,j as h}from"./jsx-runtime-2162d874.js";import{r as D}from"./index-c6dae603.js";import"./Accordian-3e8e99ea.js";import"./Badge-d931c89c.js";import"./Banner-594646c0.js";import{a as v,P as S,B as k}from"./Button-7bd5e4dc.js";import"./Card-07d02d2c.js";import"./Checkbox-2c0839d0.js";import"./Chip-ac0743d4.js";import"./Container-2d7d5aaf.js";import"./Divider-8e72693e.js";import"./Field-b9360730.js";import"./Icon-bc54a877.js";import"./Info-639d9cc6.js";import"./Link-3c547324.js";import"./Loader-073627a0.js";import"./Menu-18af8f1f.js";import"./Popover-b7c4b040.js";import"./Radio-0cb6dd05.js";import"./Row-0ad75d8f.js";import"./TabList-77255eb7.js";import"./Text-6f869e24.js";import"./Textarea-af6c11b7.js";import"./Toggle-a6e8a904.js";import"./Tooltip-dab542f2.js";import"./styled-components.browser.esm-14148d23.js";import"./theme-860d7b96.js";import"./index-eb008d06.js";const rr={title:"Drawer",component:v},n=f=>{const[B,s]=D.useState(!1);return a(S,{children:h("div",{children:[a(k,{onClick:()=>s(!0),children:"Open drawer"}),a(v,{...f,open:B,handleClose:()=>s(!1)})]})})},e=n.bind({});e.args={open:!1,handleClose:()=>alert("Closing drawer"),title:"Closed Drawer",closeButton:!0};const r=n.bind({});r.args={...e.args,open:!0};const t=n.bind({});t.args={...r.args,primaryButton:{label:"Primary Action",onClick:()=>alert("Primary Action")},secondaryButton:{label:"Secondary Action",onClick:()=>alert("Secondary Action")}};const o=n.bind({});o.args={...r.args,width:"400px"};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <PortalProvider>
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} handleClose={() => setOpen(false)} />
      </div>
    </PortalProvider>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <PortalProvider>
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} handleClose={() => setOpen(false)} />
      </div>
    </PortalProvider>;
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,O,P;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <PortalProvider>
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} handleClose={() => setOpen(false)} />
      </div>
    </PortalProvider>;
}`,...(P=(O=t.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var g,w,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <PortalProvider>
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} handleClose={() => setOpen(false)} />
      </div>
    </PortalProvider>;
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const er=["ClosedDrawer","OpenDrawer","WithButtons","CustomWidth"];export{e as ClosedDrawer,o as CustomWidth,r as OpenDrawer,t as WithButtons,er as __namedExportsOrder,rr as default};
