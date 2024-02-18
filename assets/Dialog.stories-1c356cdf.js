import{a,j as y}from"./jsx-runtime-2162d874.js";import{r as k}from"./index-c6dae603.js";import"./Accordian-3e8e99ea.js";import"./Ascii-30d57583.js";import"./Badge-d931c89c.js";import"./Banner-594646c0.js";import{D as S,B as v}from"./Button-de25ff69.js";import"./Card-07d02d2c.js";import"./Checkbox-2c0839d0.js";import"./Chip-ac0743d4.js";import"./Container-2d7d5aaf.js";import"./Divider-8e72693e.js";import"./Field-b9360730.js";import"./Icon-bc54a877.js";import"./Info-639d9cc6.js";import"./Link-3c547324.js";import"./Loader-073627a0.js";import"./Menu-18af8f1f.js";import"./Popover-b7c4b040.js";import"./Radio-0cb6dd05.js";import"./Row-0ad75d8f.js";import"./TabList-77255eb7.js";import"./Text-6f869e24.js";import"./Textarea-af6c11b7.js";import"./Toggle-a6e8a904.js";import"./Tooltip-dab542f2.js";import"./styled-components.browser.esm-14148d23.js";import"./theme-860d7b96.js";import"./index-eb008d06.js";const ee={title:"Dialog",component:S},n=C=>{const[D,s]=k.useState(!1);return y("div",{children:[a(v,{onClick:()=>s(!0),children:"Open modal"}),a(S,{...C,open:D,handleClose:()=>s(!1)})]})},e=n.bind({});e.args={open:!1,title:"Default Dialog",closeButton:!0,children:a("p",{children:"This is a default modal"})};const t=n.bind({});t.args={...e.args,primaryButton:{label:"Primary",onClick:()=>alert("Primary Button clicked")}};const r=n.bind({});r.args={...e.args,width:"600px",secondaryButton:{label:"Secondary",onClick:()=>alert("Secondary Button clicked")}};const o=n.bind({});o.args={...t.args,...r.args};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
