import{a as u}from"./jsx-runtime-03b4ddbf.js";import{R as p}from"./index-76fb7be0.js";import{P as o}from"./index-8d47fad6.js";import{s as f,D as b,n as y,S as g,a as _,P as v,b as O,c as R,d as h}from"./styles-3bf26d79.js";import{c as T}from"./polished.esm-021f8831.js";import"./_commonjsHelpers-de833af9.js";const C=e=>{let a=g,r=_;return e.variant==="primary"?(a=v,r=O):e.variant==="danger"&&(a=R,r=h),y`
    color: ${a};
    background-color: ${r};
    border-color: ${r};

    &:focus-visible {
      border-color: ${a};
      box-shadow: 0 0 0 0.2rem ${T(.45,r)};
    }
  `},$=f.button`
  cursor: pointer;
  display: ${e=>e.isFullWidth?"block":"inline-block"};
  width: ${e=>e.isFullWidth&&"100%"};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: ${e=>e.size==="large"?"0.5rem 1rem":e.size==="small"?"0.25rem 0.5rem":"0.4rem 0.75rem"};
  font-size: ${e=>e.size==="large"?"1.25rem":e.size==="small"?"0.875rem":"1rem"};
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${b};
  }

  ${C}
`,s=p.forwardRef(({children:e,variant:a,size:r,isFullWidth:d,...c},m)=>u($,{ref:m,type:"button",variant:a,size:r,isFullWidth:d,...c,children:e}));s.propTypes={variant:o.oneOf(["primary","secondary","danger"]),size:o.oneOf(["small","medium","large"]),isFullWidth:o.bool};s.defaultProps={variant:"secondary",size:"small",isFullWidth:!1};s.displayName="button";try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Example/Button",component:s},z=e=>u(s,{onClick:()=>console.log("teste"),...e,children:"Test text"}),t=z.bind({});t.args={variant:"secondary",size:"small",isFullWidth:!1,disabled:!1};var l,i,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Button onClick={() => console.log('teste')} {...args}>
    Test text
  </Button>`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
