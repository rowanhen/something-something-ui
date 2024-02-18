import{j as a,a as h}from"./jsx-runtime-86dfebf6.js";import{r as D}from"./index-1b03fe98.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import{a as v,P as S,B as k}from"./Button-d886bd73.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import"./Divider-b0f944c6.js";import"./Field-22302e01.js";import"./Icon-6aef228a.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-3fcbf10c.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";import"./styled-components.browser.esm-6d3cb859.js";import"./index-6fd5a17b.js";import"./theme-faa4253d.js";const er={title:"Drawer",component:v},n=f=>{const[B,s]=D.useState(!1);return a(S,{children:h("div",{children:[a(k,{onClick:()=>s(!0),children:"Open drawer"}),a(v,{...f,open:B,handleClose:()=>s(!1)})]})})},e=n.bind({});e.args={open:!1,handleClose:()=>alert("Closing drawer"),title:"Closed Drawer",closeButton:!0};const r=n.bind({});r.args={...e.args,open:!0};const t=n.bind({});t.args={...r.args,primaryButton:{label:"Primary Action",onClick:()=>alert("Primary Action")},secondaryButton:{label:"Secondary Action",onClick:()=>alert("Secondary Action")}};const o=n.bind({});o.args={...r.args,width:"400px"};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const tr=["ClosedDrawer","OpenDrawer","WithButtons","CustomWidth"];export{e as ClosedDrawer,o as CustomWidth,r as OpenDrawer,t as WithButtons,tr as __namedExportsOrder,er as default};
