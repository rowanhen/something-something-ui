import{j as a,a as y}from"./jsx-runtime-86dfebf6.js";import{r as k}from"./index-1b03fe98.js";import"./Accordian-db593847.js";import"./Ascii-85a88eb4.js";import"./Badge-903f212d.js";import"./Banner-9ff38bdd.js";import{D as S,B as v}from"./Button-3319cbc2.js";import"./Card-1656868b.js";import"./Checkbox-c01d0181.js";import"./Chip-96cb49d9.js";import"./Container-39128c0f.js";import"./Divider-b0f944c6.js";import"./Field-22302e01.js";import"./Icon-6aef228a.js";import"./Info-93f6cd3c.js";import"./Link-fdd46baf.js";import"./Loader-7162adea.js";import"./Menu-6f50b6f7.js";import"./Popover-9792811c.js";import"./Radio-120e3f42.js";import"./Row-6e58c6fd.js";import"./TabList-54dab45a.js";import"./Textarea-a6b20235.js";import"./Toggle-a8727a34.js";import"./Tooltip-945044ef.js";import"./Typography-6deb4273.js";import"./styled-components.browser.esm-6d3cb859.js";import"./index-6fd5a17b.js";import"./theme-faa4253d.js";const ee={title:"Dialog",component:S},n=C=>{const[D,s]=k.useState(!1);return y("div",{children:[a(v,{onClick:()=>s(!0),children:"Open modal"}),a(S,{...C,open:D,handleClose:()=>s(!1)})]})},e=n.bind({});e.args={open:!1,title:"Default Dialog",closeButton:!0,children:a("p",{children:"This is a default modal"})};const t=n.bind({});t.args={...e.args,primaryButton:{label:"Primary",onClick:()=>alert("Primary Button clicked")}};const r=n.bind({});r.args={...e.args,width:"600px",secondaryButton:{label:"Secondary",onClick:()=>alert("Secondary Button clicked")}};const o=n.bind({});o.args={...t.args,...r.args};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </div>;
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </div>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,g,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </div>;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var B,O,h;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </div>;
}`,...(h=(O=o.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const te=["Default","WithPrimaryButton","WithSecondaryButton","FullFeatured"];export{e as Default,o as FullFeatured,t as WithPrimaryButton,r as WithSecondaryButton,te as __namedExportsOrder,ee as default};
