
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,u="",ea,v,w,x,y;
if(da)u=t?require("path").dirname(u)+"/":__dirname+"/",ea=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==
typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<ha)throw process.exitCode=a,b;process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=e.print||console.log.bind(console),B=e.printErr||console.warn.bind(console);
for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(r=e.quit);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ja,ka=!1;function la(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ma(a,b,c){var d={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=D(q);E(m,F,p,q)}return p},array:function(m){var p=D(m.length);na.set(m,p);return p}};a=la(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var n=d[b[g]];n?(0===h&&(h=oa()),f[g]=n(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(m){0!==h&&pa(h);return m}(b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function G(a,b){return a?ra(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var n=a.charCodeAt(++h);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=D(b);E(a,na,c,b);return c}var ua,na,F,va,wa,H,xa,ya,I;
function za(){var a=ja.buffer;ua=a;e.HEAP8=na=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=ya=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ha=0;function Fa(){var a=e.preRun.shift();Aa.unshift(a)}var K=0,Ga=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);B(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="doom.wasm";if(!Ha()){var Ia=M;M=e.locateFile?e.locateFile(Ia,u):u+Ia}function Ja(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ka(){if(!C&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(v)return new Promise(function(a,b){v(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.vc;"number"===typeof c?void 0===b.Vb?J.get(c)():J.get(c)(b.Vb):c(void 0===b.Vb?null:b.Vb)}}}var La=0;function Ma(){for(var a=O.length-1;0<=a;--a)Na(a);O=[];P=[]}var P=[];function Oa(){if(La&&Pa.Qb)for(var a=0;a<P.length;++a){var b=P[a];P.splice(a,1);--a;b.Fc.apply(null,b.sc)}}var O=[];function Na(a){var b=O[a];b.target.removeEventListener(b.Jb,b.lc,b.Kb);O.splice(a,1)}
function Q(a){function b(d){++La;Pa=a;Oa();a.Mb(d);Oa();--La}if(a.Lb)a.lc=b,a.target.addEventListener(a.Jb,b,a.Kb),O.push(a),Qa||(Da.push(Ma),Qa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Jb==a.Jb&&Na(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,R,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function S(a){a=2<a?G(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function $a(a,b,c,d,f,h){Sa||(Sa=T(256));a={target:S(a),Jb:h,Lb:d,Mb:function(g){g=g||event;var n=g.target.id?g.target.id:"",m=Sa;E(Ra(g.target),F,m+0,128);E(n,F,m+128,128);J.get(d)(f,m,b)&&g.preventDefault()},Kb:c};Q(a)}
function ab(a,b,c,d,f,h){Ta||(Ta=T(176));a={target:S(a),Qb:!0,Jb:h,Lb:d,Mb:function(g){var n=Ta;I[n>>3]=g.timeStamp;var m=n>>2;H[m+2]=g.location;H[m+3]=g.ctrlKey;H[m+4]=g.shiftKey;H[m+5]=g.altKey;H[m+6]=g.metaKey;H[m+7]=g.repeat;H[m+8]=g.charCode;H[m+9]=g.keyCode;H[m+10]=g.which;E(g.key||"",F,n+44,32);E(g.code||"",F,n+76,32);E(g.char||"",F,n+108,32);E(g.locale||"",F,n+140,32);J.get(d)(f,n,b)&&g.preventDefault()},Kb:c};Q(a)}
function bb(a,b,c){I[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=Za(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function U(a,b,c,d,f,h){R||(R=T(72));a=S(a);Q({target:a,Qb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Jb:h,Lb:d,Mb:function(g){g=g||event;bb(R,g,a);J.get(d)(f,R,b)&&g.preventDefault()},Kb:c})}function V(a,b,c,d,f){Ua||(Ua=T(260));Q({target:a,Jb:f,Lb:d,Mb:function(h){h=h||event;var g=Ua,n=document.pointerLockElement||document.Xb||document.Zb||document.Yb;H[g>>2]=!!n;var m=n&&n.id?n.id:"";E(Ra(n),F,g+4,128);E(m,F,g+132,128);J.get(d)(20,g,b)&&h.preventDefault()},Kb:c})}
function cb(a,b,c,d,f){Q({target:a,Jb:f,Lb:d,Mb:function(h){h=h||event;J.get(d)(38,0,b)&&h.preventDefault()},Kb:c})}
function db(a,b,c,d){Va||(Va=T(36));a=S(a);Q({target:a,Jb:"resize",Lb:d,Mb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Va;H[g>>2]=f.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&f.preventDefault()}}},Kb:c})}
function eb(a,b,c,d,f,h){Wa||(Wa=T(1696));a=S(a);Q({target:a,Qb:"touchstart"==h||"touchend"==h,Jb:h,Lb:d,Mb:function(g){for(var n={},m=g.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=g.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.oc=1,n[q.identifier]=q;m=g.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].qc=1;m=Wa;I[m>>3]=g.timeStamp;q=m>>2;H[q+3]=g.ctrlKey;H[q+4]=g.shiftKey;H[q+5]=g.altKey;H[q+6]=g.metaKey;q+=7;var jb=Za(a),kb=0;for(p in n){var z=n[p];H[q]=z.identifier;H[q+
1]=z.screenX;H[q+2]=z.screenY;H[q+3]=z.clientX;H[q+4]=z.clientY;H[q+5]=z.pageX;H[q+6]=z.pageY;H[q+7]=z.oc;H[q+8]=z.qc;H[q+9]=z.clientX-jb.left;H[q+10]=z.clientY-jb.top;q+=13;if(31<++kb)break}H[m+8>>2]=kb;J.get(d)(f,m,b)&&g.preventDefault()},Kb:c})}function fb(a,b,c,d,f,h){a={target:S(a),Jb:h,Lb:d,Mb:function(g){g=g||event;J.get(d)(f,0,b)&&g.preventDefault()},Kb:c};Q(a)}
function gb(a,b,c,d){Xa||(Xa=T(104));Q({target:a,Qb:!0,Jb:"wheel",Lb:d,Mb:function(f){f=f||event;var h=Xa;bb(h,f,a);I[h+72>>3]=f.deltaX;I[h+80>>3]=f.deltaY;I[h+88>>3]=f.deltaZ;H[h+96>>2]=f.deltaMode;J.get(d)(9,h,b)&&f.preventDefault()},Kb:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function mb(a){a.yc=a.getExtension("WEBGL_multi_draw")}
var nb=1,ob=[],W=[],pb=[],qb=[],rb=[],X=[],sb=[],tb={};function Y(a){ub||(ub=a)}function vb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}function wb(a,b){a.ac||(a.ac=a.getContext,a.getContext=function(d,f){f=a.ac(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?xb(c,b):0}function xb(a,b){var c=vb(sb),d={wc:c,attributes:b,version:b.pc,Ub:a};a.canvas&&(a.canvas.rc=d);sb[c]=d;("undefined"===typeof b.$b||b.$b)&&yb(d);return c}
function yb(a){a||(a=zb);if(!a.nc){a.nc=!0;var b=a.Ub;hb(b);ib(b);lb(b);b.uc=b.getExtension("EXT_disjoint_timer_query");mb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var ub,zb,Ab=["default","low-power","high-performance"],Bb=[null,[],[]];function Cb(a,b,c,d){for(var f=0;f<a;f++){var h=Z[c](),g=h&&vb(d);h?(h.name=g,d[g]=h):Y(1282);H[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else Y(1281)}function Eb(a){var b=sa(a)+1,c=T(b);E(a,F,c,b);return c}
function Fb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Gb(a,b,c,d,f){a-=5120;a=1==a?F:4==a?H:6==a?ya:5==a||28922==a?xa:wa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
var Z,Sb={G:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},N:function(a,b,c){a=S(a);if(!a)return-4;a=Za(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Za:function(a,b,c){F.copyWithin(a,b,b+c)},ta:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ja.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);za();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},D:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},_:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ea:function(a,b,c,d){U(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,
c,d){U(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){U(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){U(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){U(a,b,c,d,6,"mouseup");return 0},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Xb||document.body.Zb||document.body.Yb))return-1;a=S(a);if(!a)return-4;V(a,b,c,d,"pointerlockchange");V(a,b,c,d,"mozpointerlockchange");V(a,b,c,d,"webkitpointerlockchange");V(a,b,c,d,"mspointerlockchange");
return 0},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Xb||document.body.Zb||document.body.Yb))return-1;a=S(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Ha:function(a,b,c,d){db(a,b,c,d);return 0},U:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},V:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){eb(a,b,c,d,24,
"touchmove");return 0},X:function(a,b,c,d){eb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},ha:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Ab[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],pc:H[b+8],xc:H[b+9],$b:H[b+10],mc:H[b+11],zc:H[b+12],Ac:H[b+13]};a=S(a);return!a||b.mc?0:wb(a,b)},Wa:function(a,b){a=sb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(Z);"OES_vertex_array_object"==b&&ib(Z);"WEBGL_draw_buffers"==b&&lb(Z);"WEBGL_multi_draw"==b&&mb(Z);return!!a.Ub.getExtension(b)},lb:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ya:function(a){zb=sb[a];e.tc=Z=zb&&zb.Ub;return!a||Z?0:-5},mb:function(a){Hb(a)},
ab:function(){return 0},Xa:function(){},$a:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],n=H[b+(8*h+4)>>2],m=0;m<n;m++){var p=F[g+m],q=Bb[a];0===p||10===p?((1===a?ia:B)(ra(q,0)),q.length=0):q.push(p)}f+=n}H[d>>2]=f;return 0},b:function(a){Z.activeTexture(a)},C:function(a,b){Z.attachShader(W[a],X[b])},c:function(a,b){Z.bindBuffer(a,ob[b])},i:function(a,b){Z.bindFramebuffer(a,pb[b])},Ba:function(a,b){Z.bindRenderbuffer(a,qb[b])},a:function(a,b){Z.bindTexture(a,rb[b])},I:function(a,
b,c,d){Z.blendColor(a,b,c,d)},J:function(a,b){Z.blendEquationSeparate(a,b)},K:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},Da:function(a,b,c,d){Z.bufferData(a,c?F.subarray(c,c+b):b,d)},m:function(a,b,c,d){Z.bufferSubData(a,b,F.subarray(d,d+c))},ib:function(a){Z.clear(a)},x:function(a,b,c,d){Z.clearColor(a,b,c,d)},kb:function(a){Z.clearDepth(a)},jb:function(a){Z.clearStencil(a)},j:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},qa:function(a){Z.compileShader(X[a])},ya:function(a,b,c,d,f,h,g,n){Z.compressedTexImage2D(a,
b,c,d,f,h,n?F.subarray(n,n+g):null)},wa:function(){var a=vb(W),b=Z.createProgram();b.name=a;b.Tb=b.Rb=b.Sb=0;b.Wb=1;W[a]=b;return a},sa:function(a){var b=vb(X);X[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ob[d];f&&(Z.deleteBuffer(f),f.name=0,ob[d]=null)}},h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=pb[d];f&&(Z.deleteFramebuffer(f),f.name=0,pb[d]=null)}},u:function(a){if(a){var b=W[a];b?(Z.deleteProgram(b),b.name=
0,W[a]=null):Y(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,qb[d]=null)}},q:function(a){if(a){var b=X[a];b?(Z.deleteShader(b),X[a]=null):Y(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=rb[d];f&&(Z.deleteTexture(f),f.name=0,rb[d]=null)}},t:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},L:function(a){Z.disableVertexAttribArray(a)},ia:function(a,b,c){Z.drawArrays(a,b,c)},ja:function(a,
b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},fb:function(a){Z.enableVertexAttribArray(a)},F:function(a){Z.frontFace(a)},Ea:function(a,b){Cb(a,b,"createBuffer",ob)},Ca:function(a,b){Cb(a,b,"createRenderbuffer",qb)},za:function(a,b){Cb(a,b,"createTexture",rb)},oa:function(a,b){return Z.getAttribLocation(W[a],G(b))},e:function(a,b){Db(a,b)},ua:function(a,b,c,d){a=Z.getProgramInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},B:function(a,b,c){if(c)if(a>=
nb)Y(1281);else if(a=W[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Tb)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Tb=Math.max(a.Tb,Z.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Tb}else if(35722==b){if(!a.Rb)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Rb=Math.max(a.Rb,Z.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.Rb}else if(35381==b){if(!a.Sb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Sb=Math.max(a.Sb,Z.getActiveUniformBlockName(a,
b).length+1);H[c>>2]=a.Sb}else H[c>>2]=Z.getProgramParameter(a,b);else Y(1281)},pa:function(a,b,c,d){a=Z.getShaderInfoLog(X[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(X[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(X[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=Z.getShaderParameter(X[a],b):Y(1281)},Ka:function(a){var b=tb[a];if(!b){switch(a){case 7939:b=Z.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=b&&Eb(b);break;case 7938:b=Eb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:Y(1280)}tb[a]=b}return b},l:function(a,b){b=G(b);if(a=W[a]){var c=a,d=c.Pb,
f=c.jc,h;if(!d)for(c.Pb=d={},c.ic={},h=0;h<Z.getProgramParameter(c,35718);++h){var g=Z.getActiveUniform(c,h);var n=g.name;g=g.size;var m=Fb(n);m=0<m?n.slice(0,m):n;var p=c.Wb;c.Wb+=g;f[m]=[g,p];for(n=0;n<g;++n)d[p]=n,c.ic[p++]=m}c=a.Pb;d=0;f=b;h=Fb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,f=b.slice(0,h));if((f=a.jc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,b)))return d}else Y(1281);return-1},va:function(a){a=W[a];Z.linkProgram(a);a.Pb=0;a.jc={}},H:function(a,b){Z.polygonOffset(a,b)},Aa:function(a,
b,c,d){Z.renderbufferStorage(a,b,c,d)},na:function(a,b,c,d){Z.scissor(a,b,c,d)},ra:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=G(H[c+4*h>>2],0>g?void 0:g)}Z.shaderSource(X[a],f)},Ga:function(a,b,c){Z.stencilFunc(a,b,c)},la:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},Fa:function(a,b,c){Z.stencilOp(a,b,c)},ka:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,f,h,g,n,m){Z.texImage2D(a,b,c,d,f,h,g,n,m?Gb(n,g,d,f,m):null)},
g:function(a,b,c){Z.texParameteri(a,b,c)},eb:function(a,b,c,d,f,h,g,n,m){var p=null;m&&(p=Gb(n,g,f,h,m));Z.texSubImage2D(a,b,c,d,f,h,g,n,p)},A:function(a,b){var c=Z,d=c.uniform1i;var f=Z.kc;if(f){var h=f.Pb[a];"number"===typeof h&&(f.Pb[a]=h=Z.getUniformLocation(f,f.ic[a]+(0<h?"["+h+"]":"")));a=h}else Y(1282),a=void 0;d.call(c,a,b)},k:function(a){a=W[a];Z.useProgram(a);Z.kc=a},gb:function(a,b){Z.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,f,h){Z.vertexAttribPointer(a,b,c,!!d,f,h)},y:function(a,
b,c,d){Z.viewport(a,b,c,d)},Ua:function(){e.bc=function(a){0!=Ib()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.bc)},Ta:function(){e.hc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.hc)},Sa:function(a){e.Cc=[];a=G(a);a=document.getElementById(a);e.cc=function(b){b.stopPropagation();b.preventDefault()};e.dc=function(b){b.stopPropagation();b.preventDefault()};e.ec=function(b){b.stopPropagation();
b.preventDefault()};e.fc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Dc=c;Jb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Kb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.cc,!1);a.addEventListener("dragleave",e.dc,!1);a.addEventListener("dragover",e.ec,!1);a.addEventListener("drop",e.fc,!1)},Ma:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Lb()});document.body.append(a)},Na:function(){document.exitPointerLock&&document.exitPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").focus()},Ra:function(a){a=G(a);e.Ob=document.getElementById(a);e.Ob||console.log("sokol_app.h: invalid target:"+a);e.Ob.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Qa:function(){window.removeEventListener("beforeunload",e.bc)},Pa:function(){window.removeEventListener("paste",e.hc)},Oa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.cc);a.removeEventListener("dragleave",e.dc);a.removeEventListener("dragover",e.ec);a.removeEventListener("drop",e.fc)},v:function(){e.Ob&&e.Ob.requestPointerLock&&e.Ob.requestPointerLock()},La:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),
h=f.createImageData(a,b);h.data.set(F.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},bb:function(){return e.Nb?e.Nb.bufferSize:0},db:function(a,b,c){e.Ib=null;e.Nb=null;"undefined"!==typeof AudioContext?e.Ib=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?
e.Ib=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.Ib=null,console.log("sokol_audio.h: no WebAudio support"));return e.Ib?(console.log("sokol_audio.h: sample rate ",e.Ib.sampleRate),e.Nb=e.Ib.createScriptProcessor(c,0,b),e.Nb.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Mb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,n=0;n<g;n++)for(var m=d.outputBuffer.getChannelData(n),p=0;p<f;p++)m[p]=ya[(h>>2)+(g*p+n)]},e.Nb.connect(e.Ib.destination),a=function(){e.Ib&&"suspended"===
e.Ib.state&&e.Ib.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},cb:function(){return e.Ib?e.Ib.sampleRate:0},fa:function(){null!==e.Ib&&(e.Nb&&e.Nb.disconnect(),e.Ib.close(),e.Ib=null,e.Nb=null)},w:function(a,b,c,d,f,h){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var n=0<d;n&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!n){var m=new Uint8Array(g.response),p=m.length;p<=h?(F.set(m,f),Nb(a,d,p)):Ob(a)}else Pb(a,this.status)};g.send()},ga:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Qb(a,d)}else Pb(a,this.status)};c.send()},Va:function(){return performance.now()},ma:function(a){if(da){if(!a)return 1;a=G(a);if(!a.length)return 0;
a=require("child_process").Ec(a,[],{Bc:!0,stdio:"inherit"});var b=function(c,d){return c<<8|d};return null===a.status?b(0,function(c){switch(c){case "SIGHUP":return 1;case "SIGQUIT":return 3;case "SIGFPE":return 8;case "SIGKILL":return 9;case "SIGALRM":return 14;case "SIGTERM":return 15}return 2}(a.signal)):a.status<<8|0}if(!a)return 0;H[Rb()>>2]=52;return-1}};
(function(){function a(f){e.asm=f.exports;ja=e.asm.nb;za();J=e.asm.Hb;Ba.unshift(e.asm.ob);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ga&&(clearInterval(Ga),Ga=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Sb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.ob).apply(null,arguments)};var T=e._malloc=function(){return(T=e._malloc=e.asm.pb).apply(null,arguments)},Lb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Lb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.qb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.rb).apply(null,arguments)};
var Ib=e.__sapp_html5_get_ask_leave_site=function(){return(Ib=e.__sapp_html5_get_ask_leave_site=e.asm.sb).apply(null,arguments)},Jb=e.__sapp_emsc_begin_drop=function(){return(Jb=e.__sapp_emsc_begin_drop=e.asm.tb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.ub).apply(null,arguments)};var Kb=e.__sapp_emsc_end_drop=function(){return(Kb=e.__sapp_emsc_end_drop=e.asm.vb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.wb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.xb).apply(null,arguments)};
var Qb=e.__sfetch_emsc_head_response=function(){return(Qb=e.__sfetch_emsc_head_response=e.asm.yb).apply(null,arguments)},Nb=e.__sfetch_emsc_get_response=function(){return(Nb=e.__sfetch_emsc_get_response=e.asm.zb).apply(null,arguments)},Pb=e.__sfetch_emsc_failed_http_status=function(){return(Pb=e.__sfetch_emsc_failed_http_status=e.asm.Ab).apply(null,arguments)},Ob=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Ob=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Bb).apply(null,arguments)},Mb=
e.__saudio_emsc_pull=function(){return(Mb=e.__saudio_emsc_pull=e.asm.Cb).apply(null,arguments)},Rb=e.___errno_location=function(){return(Rb=e.___errno_location=e.asm.Db).apply(null,arguments)},oa=e.stackSave=function(){return(oa=e.stackSave=e.asm.Eb).apply(null,arguments)},pa=e.stackRestore=function(){return(pa=e.stackRestore=e.asm.Fb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Gb).apply(null,arguments)},Tb;
function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Ub(){Tb||Vb();Tb||(L=Ub)};
function Vb(a){function b(){if(!Tb&&(Tb=!0,e.calledRun=!0,!ka)){N(Ba);N(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Wb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=D(4*(f+1));H[h>>2]=ta(ba);for(var g=1;g<f;g++)H[(h>>2)+g]=ta(c[g-1]);H[(h>>2)+f]=0;try{var n=d(f,h);Hb(n)}catch(m){m instanceof fa||"unwind"==m||((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+c),r(1,m))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=
e.postRun.shift(),Ea.unshift(c);N(Ea)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Fa();N(Aa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Vb;function Hb(a){if(!(noExitRuntime||0<ha)){if(e.onExit)e.onExit(a);ka=!0}r(a,new fa(a))}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Wb=!0;
e.noInitialRun&&(Wb=!1);Vb();
