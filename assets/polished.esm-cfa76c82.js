function h(){return h=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},h.apply(this,arguments)}function L(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function g(r,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},g(r,e)}function B(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,g(r,e)}function H(r){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},H(r)}function W(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function D(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(r,e,n){return D()?v=Reflect.construct.bind():v=function(a,f,i){var u=[null];u.push.apply(u,f);var o=Function.bind.apply(a,u),d=new o;return i&&g(d,i.prototype),d},v.apply(null,arguments)}function j(r){var e=typeof Map=="function"?new Map:void 0;return j=function(t){if(t===null||!W(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return v(t,arguments,H(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),g(a,t)},j(r)}var p=function(r){B(e,r);function e(n){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,L(t)}return e}(j(Error));function F(r){return Math.round(r*255)}function G(r,e,n){return F(r)+","+F(e)+","+F(n)}function y(r,e,n,t){if(t===void 0&&(t=G),e===0)return t(n,n,n);var a=(r%360+360)%360/60,f=(1-Math.abs(2*n-1))*e,i=f*(1-Math.abs(a%2-1)),u=0,o=0,d=0;a>=0&&a<1?(u=f,o=i):a>=1&&a<2?(u=i,o=f):a>=2&&a<3?(o=f,d=i):a>=3&&a<4?(o=i,d=f):a>=4&&a<5?(u=i,d=f):a>=5&&a<6&&(u=f,d=i);var b=n-f/2,l=u+b,s=o+b,O=d+b;return t(l,s,O)}var q={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function J(r){if(typeof r!="string")return r;var e=r.toLowerCase();return q[e]?"#"+q[e]:r}var K=/^#[a-fA-F0-9]{6}$/,Q=/^#[a-fA-F0-9]{8}$/,U=/^#[a-fA-F0-9]{3}$/,X=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Y=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Z=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,C=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function k(r){if(typeof r!="string")throw new p(3);var e=J(r);if(e.match(K))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(Q)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(U))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(X)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var a=R.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var f=Y.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=Z.exec(e);if(i){var u=parseInt(""+i[1],10),o=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+y(u,o,d)+")",l=R.exec(b);if(!l)throw new p(4,e,b);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var s=C.exec(e.substring(0,50));if(s){var O=parseInt(""+s[1],10),S=parseInt(""+s[2],10)/100,E=parseInt(""+s[3],10)/100,M="rgb("+y(O,S,E)+")",m=R.exec(M);if(!m)throw new p(4,e,M);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])}}throw new p(5)}function V(r){var e=r.red/255,n=r.green/255,t=r.blue/255,a=Math.max(e,n,t),f=Math.min(e,n,t),i=(a+f)/2;if(a===f)return r.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:r.alpha}:{hue:0,saturation:0,lightness:i};var u,o=a-f,d=i>.5?o/(2-a-f):o/(a+f);switch(a){case e:u=(n-t)/o+(n<t?6:0);break;case n:u=(t-e)/o+2;break;default:u=(e-n)/o+4;break}return u*=60,r.alpha!==void 0?{hue:u,saturation:d,lightness:i,alpha:r.alpha}:{hue:u,saturation:d,lightness:i}}function A(r){return V(k(r))}var ee=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},P=ee;function c(r){var e=r.toString(16);return e.length===1?"0"+e:e}function _(r){return c(Math.round(r*255))}function re(r,e,n){return P("#"+_(r)+_(e)+_(n))}function w(r,e,n){return y(r,e,n,re)}function ne(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return w(r,e,n);if(typeof r=="object"&&e===void 0&&n===void 0)return w(r.hue,r.saturation,r.lightness);throw new p(1)}function te(r,e,n,t){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?w(r,e,n):"rgba("+y(r,e,n)+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?w(r.hue,r.saturation,r.lightness):"rgba("+y(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new p(2)}function T(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return P("#"+c(r)+c(e)+c(n));if(typeof r=="object"&&e===void 0&&n===void 0)return P("#"+c(r.red)+c(r.green)+c(r.blue));throw new p(6)}function $(r,e,n,t){if(typeof r=="string"&&typeof e=="number"){var a=k(r);return"rgba("+a.red+","+a.green+","+a.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?T(r,e,n):"rgba("+r+","+e+","+n+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?T(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new p(7)}var ae=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},ie=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ue=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function z(r){if(typeof r!="object")throw new p(8);if(fe(r))return $(r);if(ae(r))return T(r);if(ue(r))return te(r);if(ie(r))return ne(r);throw new p(8)}function N(r,e,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=e?r.apply(this,a):N(r,e,a)}}function x(r){return N(r,r.length,[])}function I(r,e,n){return Math.max(r,Math.min(e,n))}function oe(r,e){if(e==="transparent")return e;var n=A(e);return z(h({},n,{lightness:I(0,1,n.lightness-parseFloat(r))}))}var de=x(oe),ge=de;function pe(r,e){if(e==="transparent")return e;var n=A(e);return z(h({},n,{lightness:I(0,1,n.lightness+parseFloat(r))}))}var se=x(pe),ye=se;function ce(r,e){if(e==="transparent")return e;var n=k(e),t=typeof n.alpha=="number"?n.alpha:1,a=h({},n,{alpha:I(0,1,(t*100+parseFloat(r)*100)/100)});return $(a)}var be=x(ce),me=be;function le(r,e){if(e==="transparent")return e;var n=k(e),t=typeof n.alpha=="number"?n.alpha:1,a=h({},n,{alpha:I(0,1,+(t*100-parseFloat(r)*100).toFixed(2)/100)});return $(a)}var he=x(le),ve=he;export{ge as a,me as b,ve as c,ye as d,$ as r};
//# sourceMappingURL=polished.esm-cfa76c82.js.map
