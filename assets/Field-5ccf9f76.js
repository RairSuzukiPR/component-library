import{a as i}from"./jsx-runtime-03b4ddbf.js";import{r as o,R as p}from"./index-76fb7be0.js";import{s as c,S as R,a as _,b as y,D as h}from"./styles-3bf26d79.js";import{c as I}from"./polished.esm-021f8831.js";import{P as N}from"./index-8d47fad6.js";let T=e=>crypto.getRandomValues(new Uint8Array(e)),L=(e,t,r)=>{let s=(2<<Math.log(e.length-1)/Math.LN2)-1,u=-~(1.6*s*t/e.length);return(g=t)=>{let d="";for(;;){let x=r(u),m=u;for(;m--;)if(d+=e[x[m]&s]||"",d.length===g)return d}}},C=(e,t=21)=>L(e,t,T);const w=C("1234567890abc",10),O=()=>{const[e]=o.useState(w());return e},n=o.createContext(void 0),$=c.label`
  font-weight: 500;
  margin-bottom: 0.4rem;
`,b=c.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${R};
  background-color: transparent;
  border: 1px solid ${_};
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${y};
    box-shadow: 0 0 0 0.2rem ${I(.75,y)};
  }

  &:disabled {
    background-color: ${_};
    opacity: ${h};
  }
`,z=c(b).attrs({as:"textarea"})`
  resize: ${e=>!e.isResizable&&"none"};
`,f=p.forwardRef((e,t)=>{const r=o.useContext(n);return i($,{ref:t,htmlFor:r,...e})});f.displayName="Field.Label";try{Field.Label.displayName="Field.Label",Field.Label.__docgenInfo={description:"",displayName:"Field.Label",props:{}}}catch{}const F=p.forwardRef((e,t)=>{const r=o.useContext(n);return i(b,{ref:t,id:r,...e})});F.displayName="Field.Input";try{Field.Input.displayName="Field.Input",Field.Input.__docgenInfo={description:"",displayName:"Field.Input",props:{}}}catch{}const l=p.forwardRef(({isResizable:e,...t},r)=>{const s=o.useContext(n);return i(z,{ref:r,id:s,isResizable:e,...t})});l.displayName="Field.Textarea";l.defaultProps={isResizable:!0};l.propTypes={isResizable:N.bool};try{Field.Textarea.displayName="Field.Textarea",Field.Textarea.__docgenInfo={description:"",displayName:"Field.Textarea",props:{isResizable:{defaultValue:{value:"true"},description:"",name:"isResizable",required:!1,type:{name:"boolean"}}}}}catch{}const a=({children:e})=>{const t=O();return i(n.Provider,{value:t,children:e})};a.Label=f;a.Input=F;a.Textarea=l;try{a.displayName="Field",a.__docgenInfo={description:"",displayName:"Field",props:{}}}catch{}export{a as F};
