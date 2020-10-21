/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function l(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function f(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var a={},e=0;e<10;e++)a["_"+String.fromCharCode(e)]=e;var o=Object.getOwnPropertyNames(a).map(function(r){return a[r]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),!(Object.keys(Object.assign({},n)).join("")!=="abcdefghijklmnopqrst")}catch(r){return!1}}var p=f()?Object.assign:function(t,a){for(var e,o=l(t),n,r=1;r<arguments.length;r++){e=Object(arguments[r]);for(var i in e)c.call(e,i)&&(o[i]=e[i]);if(u){n=u(e);for(var s=0;s<n.length;s++)b.call(e,n[s])&&(o[n[s]]=e[n[s]])}}return o};export{p as o};
