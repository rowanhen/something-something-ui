import{R as T,r as Ye}from"./index-1b03fe98.js";var R=function(){return R=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},R.apply(this,arguments)};function oe(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var v="-ms-",ne="-moz-",m="-webkit-",pt="comm",ke="rule",We="decl",Yt="@import",ft="@keyframes",Wt="@layer",dt=Math.abs,Ue=String.fromCharCode,De=Object.assign;function Ut(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function ht(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,r){return e.replace(t,r)}function he(e,t,r){return e.indexOf(t,r)}function P(e,t){return e.charCodeAt(t)|0}function q(e,t,r){return e.slice(t,r)}function _(e){return e.length}function gt(e){return e.length}function re(e,t){return t.push(e),e}function qt(e,t){return e.map(t).join("")}function Qe(e,t){return e.filter(function(r){return!D(r,t)})}var xe=1,V=1,mt=0,O=0,A=0,Z="";function Ce(e,t,r,n,o,i,a,u){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:xe,column:V,length:a,return:"",siblings:u}}function M(e,t){return De(Ce("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function W(e){for(;e.root;)e=M(e.root,{children:[e]});re(e,e.siblings)}function Vt(){return A}function Xt(){return A=O>0?P(Z,--O):0,V--,A===10&&(V=1,xe--),A}function $(){return A=O<mt?P(Z,O++):0,V++,A===10&&(V=1,xe++),A}function G(){return P(Z,O)}function ge(){return O}function Ae(e,t){return q(Z,e,t)}function je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kt(e){return xe=V=1,mt=_(Z=e),O=0,[]}function Zt(e){return Z="",e}function Te(e){return ht(Ae(O-1,ze(e===91?e+2:e===40?e+1:e)))}function Jt(e){for(;(A=G())&&A<33;)$();return je(e)>2||je(A)>3?"":" "}function Qt(e,t){for(;--t&&$()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Ae(e,ge()+(t<6&&G()==32&&$()==32))}function ze(e){for(;$();)switch(A){case e:return O;case 34:case 39:e!==34&&e!==39&&ze(A);break;case 40:e===41&&ze(e);break;case 92:$();break}return O}function er(e,t){for(;$()&&e+A!==47+10;)if(e+A===42+42&&G()===47)break;return"/*"+Ae(t,O-1)+"*"+Ue(e===47?e:$())}function tr(e){for(;!je(G());)$();return Ae(e,O)}function rr(e){return Zt(me("",null,null,null,[""],e=Kt(e),0,[0],e))}function me(e,t,r,n,o,i,a,u,s){for(var c=0,p=0,d=a,g=0,h=0,b=0,x=1,E=1,C=1,w=0,S="",k=o,I=i,y=n,f=S;E;)switch(b=w,w=$()){case 40:if(b!=108&&P(f,d-1)==58){he(f+=l(Te(w),"&","&\f"),"&\f",dt(c?u[c-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:f+=Te(w);break;case 9:case 10:case 13:case 32:f+=Jt(b);break;case 92:f+=Qt(ge()-1,7);continue;case 47:switch(G()){case 42:case 47:re(nr(er($(),ge()),t,r,s),s);break;default:f+="/"}break;case 123*x:u[c++]=_(f)*C;case 125*x:case 59:case 0:switch(w){case 0:case 125:E=0;case 59+p:C==-1&&(f=l(f,/\f/g,"")),h>0&&_(f)-d&&re(h>32?tt(f+";",n,r,d-1,s):tt(l(f," ","")+";",n,r,d-2,s),s);break;case 59:f+=";";default:if(re(y=et(f,t,r,c,p,o,u,S,k=[],I=[],d,i),i),w===123)if(p===0)me(f,t,y,y,k,i,d,u,I);else switch(g===99&&P(f,3)===110?100:g){case 100:case 108:case 109:case 115:me(e,y,y,n&&re(et(e,y,y,0,0,o,u,S,o,k=[],d,I),I),o,I,d,u,n?k:I);break;default:me(f,y,y,y,[""],I,0,u,I)}}c=p=h=0,x=C=1,S=f="",d=a;break;case 58:d=1+_(f),h=b;default:if(x<1){if(w==123)--x;else if(w==125&&x++==0&&Xt()==125)continue}switch(f+=Ue(w),w*x){case 38:C=p>0?1:(f+="\f",-1);break;case 44:u[c++]=(_(f)-1)*C,C=1;break;case 64:G()===45&&(f+=Te($())),g=G(),p=d=_(S=f+=tr(ge())),w++;break;case 45:b===45&&_(f)==2&&(x=0)}}return i}function et(e,t,r,n,o,i,a,u,s,c,p,d){for(var g=o-1,h=o===0?i:[""],b=gt(h),x=0,E=0,C=0;x<n;++x)for(var w=0,S=q(e,g+1,g=dt(E=a[x])),k=e;w<b;++w)(k=ht(E>0?h[w]+" "+S:l(S,/&\f/g,h[w])))&&(s[C++]=k);return Ce(e,t,r,o===0?ke:u,s,c,p,d)}function nr(e,t,r,n){return Ce(e,t,r,pt,Ue(Vt()),q(e,2,-2),0,n)}function tt(e,t,r,n,o){return Ce(e,t,r,We,q(e,0,n),q(e,n+1,-1),n,o)}function yt(e,t,r){switch(Ut(e,t)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 4789:return ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+ne+e+v+e+e;case 5936:switch(P(e,t+11)){case 114:return m+e+v+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+v+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+v+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return m+e+v+e+e;case 6165:return m+e+v+"flex-"+e+e;case 5187:return m+e+l(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+e;case 5443:return m+e+v+"flex-item-"+l(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":v+"grid-row-"+l(e,/flex-|-self/g,""))+e;case 4675:return m+e+v+"flex-line-pack"+l(e,/align-content|flex-|-self/g,"")+e;case 5548:return m+e+v+l(e,"shrink","negative")+e;case 5292:return m+e+v+l(e,"basis","preferred-size")+e;case 6060:return m+"box-"+l(e,"-grow","")+m+e+v+l(e,"grow","positive")+e;case 4554:return m+l(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4200:if(!D(e,/flex-|baseline/))return v+"grid-column-align"+q(e,t)+e;break;case 2592:case 3360:return v+l(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,D(n.props,/grid-\w+-end/)})?~he(e+(r=r[t].value),"span",0)?e:v+l(e,"-start","")+e+v+"grid-row-span:"+(~he(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":v+l(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:v+l(l(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+ne+(P(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch",0)?yt(l(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return l(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,u,s,c){return v+o+":"+i+c+(a?v+o+"-span:"+(u?s:+s-+i)+c:"")+e});case 4949:if(P(e,t+6)===121)return l(e,":",":"+m)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return l(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(P(e,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+e;case 100:return l(e,":",":"+v)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return l(e,"scroll-","scroll-snap-")+e}return e}function Se(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function or(e,t,r,n){switch(e.type){case Wt:if(e.children.length)break;case Yt:case We:return e.return=e.return||e.value;case pt:return"";case ft:return e.return=e.value+"{"+Se(e.children,n)+"}";case ke:if(!_(e.value=e.props.join(",")))return""}return _(r=Se(e.children,n))?e.return=e.value+"{"+r+"}":""}function ir(e){var t=gt(e);return function(r,n,o,i){for(var a="",u=0;u<t;u++)a+=e[u](r,n,o,i)||"";return a}}function ar(e){return function(t){t.root||(t=t.return)&&e(t)}}function sr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case We:e.return=yt(e.value,e.length,r);return;case ft:return Se([M(e,{value:l(e.value,"@","@"+m)})],n);case ke:if(e.length)return qt(r=e.props,function(o){switch(D(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(M(e,{props:[l(o,/:(read-\w+)/,":"+ne+"$1")]})),W(M(e,{props:[o]})),De(e,{props:Qe(r,n)});break;case"::placeholder":W(M(e,{props:[l(o,/:(plac\w+)/,":"+m+"input-$1")]})),W(M(e,{props:[l(o,/:(plac\w+)/,":"+ne+"$1")]})),W(M(e,{props:[l(o,/:(plac\w+)/,v+"input-$1")]})),W(M(e,{props:[o]})),De(e,{props:Qe(r,n)});break}return""})}}var cr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vt="active",St="data-styled-version",Ie="6.1.6",qe=`/*!sc*/
`,Ve=typeof window<"u"&&"HTMLElement"in window,ur=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),lr={},Pe=Object.freeze([]),K=Object.freeze({});function bt(e,t,r){return r===void 0&&(r=K),e.theme!==r.theme&&e.theme||t||r.theme}var wt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),pr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fr=/(^-|-$)/g;function rt(e){return e.replace(pr,"-").replace(fr,"")}var dr=/(a)(d)/gi,fe=52,nt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Me(e){var t,r="";for(t=Math.abs(e);t>fe;t=t/fe|0)r=nt(t%fe)+r;return(nt(t%fe)+r).replace(dr,"$1-$2")}var $e,kt=5381,U=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},xt=function(e){return U(kt,e)};function Ct(e){return Me(xt(e)>>>0)}function hr(e){return e.displayName||e.name||"Component"}function _e(e){return typeof e=="string"&&!0}var At=typeof Symbol=="function"&&Symbol.for,It=At?Symbol.for("react.memo"):60115,gr=At?Symbol.for("react.forward_ref"):60112,mr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vr=(($e={})[gr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$e[It]=Pt,$e);function ot(e){return("type"in(t=e)&&t.type.$$typeof)===It?Pt:"$$typeof"in e?vr[e.$$typeof]:mr;var t}var Sr=Object.defineProperty,br=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,wr=Object.getOwnPropertyDescriptor,kr=Object.getPrototypeOf,at=Object.prototype;function Rt(e,t,r){if(typeof t!="string"){if(at){var n=kr(t);n&&n!==at&&Rt(e,n,r)}var o=br(t);it&&(o=o.concat(it(t)));for(var i=ot(e),a=ot(t),u=0;u<o.length;++u){var s=o[u];if(!(s in yr||r&&r[s]||a&&s in a||i&&s in i)){var c=wr(t,s);try{Sr(e,s,c)}catch{}}}}return e}function H(e){return typeof e=="function"}function Xe(e){return typeof e=="object"&&"styledComponentId"in e}function B(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Le(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ie(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fe(e,t,r){if(r===void 0&&(r=!1),!r&&!ie(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Fe(e[n],t[n]);else if(ie(t))for(var n in t)e[n]=Fe(e[n],t[n]);return e}function Ke(e,t){Object.defineProperty(e,"toString",{value:t})}function Y(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Y(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(t+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(u,r[a])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(qe);return r},e}(),ye=new Map,be=new Map,ve=1,de=function(e){if(ye.has(e))return ye.get(e);for(;be.has(ve);)ve++;var t=ve++;return ye.set(e,t),be.set(t,e),t},Cr=function(e,t){ve=t+1,ye.set(e,t),be.set(t,e)},Ar="style[".concat(X,"][").concat(St,'="').concat(Ie,'"]'),Ir=new RegExp("^".concat(X,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pr=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},Rr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(qe),o=[],i=0,a=n.length;i<a;i++){var u=n[i].trim();if(u){var s=u.match(Ir);if(s){var c=0|parseInt(s[1],10),p=s[2];c!==0&&(Cr(p,c),Pr(e,p,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(u)}}};function Er(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Et=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(u){var s=Array.from(u.querySelectorAll("style[".concat(X,"]")));return s[s.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(X,vt),n.setAttribute(St,Ie);var a=Er();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},Or=function(){function e(t){this.element=Et(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Y(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Tr=function(){function e(t){this.element=Et(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$r=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),st=Ve,_r={isServer:!Ve,useCSSOMInjection:!ur},we=function(){function e(t,r,n){t===void 0&&(t=K),r===void 0&&(r={});var o=this;this.options=R(R({},_r),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ve&&st&&(st=!1,function(i){for(var a=document.querySelectorAll(Ar),u=0,s=a.length;u<s;u++){var c=a[u];c&&c.getAttribute(X)!==vt&&(Rr(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ke(this,function(){return function(i){for(var a=i.getTag(),u=a.length,s="",c=function(d){var g=function(C){return be.get(C)}(d);if(g===void 0)return"continue";var h=i.names.get(g),b=a.getGroup(d);if(h===void 0||b.length===0)return"continue";var x="".concat(X,".g").concat(d,'[id="').concat(g,'"]'),E="";h!==void 0&&h.forEach(function(C){C.length>0&&(E+="".concat(C,","))}),s+="".concat(b).concat(x,'{content:"').concat(E,'"}').concat(qe)},p=0;p<u;p++)c(p);return s}(o)})}return e.registerId=function(t){return de(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(R(R({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new $r(o):n?new Or(o):new Tr(o)}(this.options),new xr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(de(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(de(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(de(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Nr=/&/g,Dr=/^\s*\/\/.*$/gm;function Ot(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ot(r.children,t)),r})}function jr(e){var t,r,n,o=e===void 0?K:e,i=o.options,a=i===void 0?K:i,u=o.plugins,s=u===void 0?Pe:u,c=function(g,h,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(t):g},p=s.slice();p.push(function(g){g.type===ke&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Nr,r).replace(n,c))}),a.prefix&&p.push(sr),p.push(or);var d=function(g,h,b,x){h===void 0&&(h=""),b===void 0&&(b=""),x===void 0&&(x="&"),t=x,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var E=g.replace(Dr,""),C=rr(b||h?"".concat(b," ").concat(h," { ").concat(E," }"):E);a.namespace&&(C=Ot(C,a.namespace));var w=[];return Se(C,ir(p.concat(ar(function(S){return w.push(S)})))),w};return d.hash=s.length?s.reduce(function(g,h){return h.name||Y(15),U(g,h.name)},kt).toString():"",d}var zr=new we,Be=jr(),Tt=T.createContext({shouldForwardProp:void 0,styleSheet:zr,stylis:Be});Tt.Consumer;T.createContext(void 0);function Ge(){return Ye.useContext(Tt)}var Mr=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Be);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ke(this,function(){throw Y(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Be),this.name+t.hash},e}(),Lr=function(e){return e>="A"&&e<="Z"};function ct(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Lr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var $t=function(e){return e==null||e===!1||e===""},_t=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!$t(i)&&(Array.isArray(i)&&i.isCss||H(i)?n.push("".concat(ct(o),":"),i,";"):ie(i)?n.push.apply(n,oe(oe(["".concat(o," {")],_t(i),!1),["}"],!1)):n.push("".concat(ct(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in cr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function L(e,t,r,n){if($t(e))return[];if(Xe(e))return[".".concat(e.styledComponentId)];if(H(e)){if(!H(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return L(o,t,r,n)}var i;return e instanceof Mr?r?(e.inject(r,n),[e.getName(n)]):[e]:ie(e)?_t(e):Array.isArray(e)?Array.prototype.concat.apply(Pe,e.map(function(a){return L(a,t,r,n)})):[e.toString()]}function Nt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(H(r)&&!Xe(r))return!1}return!0}var Fr=xt(Ie),Br=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Nt(t),this.componentId=r,this.baseHash=U(Fr,r),this.baseStyle=n,we.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=B(o,this.staticRulesId);else{var i=Le(L(this.rules,t,r,n)),a=Me(U(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var u=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,u)}o=B(o,a),this.staticRulesId=a}else{for(var s=U(this.baseHash,n.hash),c="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")c+=d;else if(d){var g=Le(L(d,t,r,n));s=U(s,g+p),c+=g}}if(c){var h=Me(s>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(c,".".concat(h),void 0,this.componentId)),o=B(o,h)}}return o},e}(),ae=T.createContext(void 0);ae.Consumer;function Ur(e){var t=T.useContext(ae),r=Ye.useMemo(function(){return function(n,o){if(!n)throw Y(14);if(H(n)){var i=n(o);return i}if(Array.isArray(n)||typeof n!="object")throw Y(8);return o?R(R({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?T.createElement(ae.Provider,{value:r},e.children):null}var Ne={};function Gr(e,t,r){var n=Xe(e),o=e,i=!_e(e),a=t.attrs,u=a===void 0?Pe:a,s=t.componentId,c=s===void 0?function(k,I){var y=typeof k!="string"?"sc":rt(k);Ne[y]=(Ne[y]||0)+1;var f="".concat(y,"-").concat(Ct(Ie+y+Ne[y]));return I?"".concat(I,"-").concat(f):f}(t.displayName,t.parentComponentId):s,p=t.displayName,d=p===void 0?function(k){return _e(k)?"styled.".concat(k):"Styled(".concat(hr(k),")")}(e):p,g=t.displayName&&t.componentId?"".concat(rt(t.displayName),"-").concat(t.componentId):t.componentId||c,h=n&&o.attrs?o.attrs.concat(u).filter(Boolean):u,b=t.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;b=function(k,I){return x(k,I)&&E(k,I)}}else b=x}var C=new Br(r,g,n?o.componentStyle:void 0);function w(k,I){return function(y,f,J){var se=y.attrs,zt=y.componentStyle,Mt=y.defaultProps,Lt=y.foldedComponentIds,Ft=y.styledComponentId,Bt=y.target,Gt=T.useContext(ae),Ht=Ge(),Re=y.shouldForwardProp||Ht.shouldForwardProp,Ze=bt(f,Gt,Mt)||K,N=function(ue,ee,le){for(var te,F=R(R({},ee),{className:void 0,theme:le}),Oe=0;Oe<ue.length;Oe+=1){var pe=H(te=ue[Oe])?te(F):te;for(var z in pe)F[z]=z==="className"?B(F[z],pe[z]):z==="style"?R(R({},F[z]),pe[z]):pe[z]}return ee.className&&(F.className=B(F.className,ee.className)),F}(se,f,Ze),ce=N.as||Bt,Q={};for(var j in N)N[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&N.theme===Ze||(j==="forwardedAs"?Q.as=N.forwardedAs:Re&&!Re(j,ce)||(Q[j]=N[j]));var Je=function(ue,ee){var le=Ge(),te=ue.generateAndInjectStyles(ee,le.styleSheet,le.stylis);return te}(zt,N),Ee=B(Lt,Ft);return Je&&(Ee+=" "+Je),N.className&&(Ee+=" "+N.className),Q[_e(ce)&&!wt.has(ce)?"class":"className"]=Ee,Q.ref=J,Ye.createElement(ce,Q)}(S,k,I)}w.displayName=d;var S=T.forwardRef(w);return S.attrs=h,S.componentStyle=C,S.displayName=d,S.shouldForwardProp=b,S.foldedComponentIds=n?B(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=g,S.target=n?o.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(I){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var J=0,se=y;J<se.length;J++)Fe(I,se[J],!0);return I}({},o.defaultProps,k):k}}),Ke(S,function(){return".".concat(S.styledComponentId)}),i&&Rt(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function ut(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var lt=function(e){return Object.assign(e,{isCss:!0})};function Dt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(H(e)||ie(e))return lt(L(ut(Pe,oe([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?L(n):lt(L(ut(n,t)))}function He(e,t,r){if(r===void 0&&(r=K),!t)throw Y(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Dt.apply(void 0,oe([o],i,!1)))};return n.attrs=function(o){return He(e,t,R(R({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return He(e,t,R(R({},r),o))},n}var jt=function(e){return He(Gr,e)},Hr=jt;wt.forEach(function(e){Hr[e]=jt(e)});var Yr=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Nt(t),we.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Le(L(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&we.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function qr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Dt.apply(void 0,oe([e],t,!1)),o="sc-global-".concat(Ct(JSON.stringify(n))),i=new Yr(n,o),a=function(s){var c=Ge(),p=T.useContext(ae),d=T.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&u(d,s,c.styleSheet,p,c.stylis),T.useLayoutEffect(function(){if(!c.styleSheet.server)return u(d,s,c.styleSheet,p,c.stylis),function(){return i.removeStyles(d,c.styleSheet)}},[d,s,c.styleSheet,p,c.stylis]),null};function u(s,c,p,d,g){if(i.isStatic)i.renderStyles(s,lr,p,g);else{var h=R(R({},c),{theme:bt(c,d,a.defaultProps)});i.renderStyles(s,h,p,g)}}return T.memo(a)}export{Dt as a,qr as d,Ur as t,Hr as u};
