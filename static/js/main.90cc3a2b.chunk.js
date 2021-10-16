(this["webpackJsonpempty-react-typescript"]=this["webpackJsonpempty-react-typescript"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(32),s=n.n(a),c=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),a(e),s(e)}))},o=n(150),l=n(145),j=n(148),d=n(151),m=n(42),h=n(78),b="#00494d",u="#f4fafa",x="#ffffff",O=Object(h.a)({palette:{primary:{main:"#26c0ab"},secondary:{main:b},common:{darkGrayish1:"#5e7a7d",darkGrayish2:"#7f9c9f",lightGrayish1:"#c5e4e7",lightGrayish2:u,white:x}},typography:{fontFamily:"Space Mono",body1:{margin:0,fontWeight:400,fontSize:"1.5rem"},body2:{margin:0,fontWeight:500,fontSize:"1.5rem"},h1:{margin:0,fontWeight:500,fontSize:"1.25rem",color:x},h2:{margin:0,fontWeight:500,fontSize:"1.5rem",color:x},h3:{margin:0,fontWeight:700,fontSize:"1.5rem",lineHeight:1.5,letterSpacing:"0.5em"},h4:{margin:0,fontWeight:700,fontSize:"1rem"},h5:{margin:0,fontWeight:500,fontSize:"1rem"},h6:{margin:0,fontWeight:700,fontSize:"2.5rem"}},status:{danger:m.a[500]},components:{MuiCssBaseline:{styleOverrides:"\n                body {\n                    margin: 0;\n                }\n            "},MuiOutlinedInput:{styleOverrides:{input:{textAlign:"right"},root:{backgroundColor:u,".MuiOutlinedInput-notchedOutline":{borderColor:u}}}},MuiButton:{styleOverrides:{root:{width:"100%",height:"51.5px",backgroundColor:b}}}}}),p=n(13),g=n(144),f=n(146),v=n(36),y=n(147),C=n(45),S=Object(C.a)(y.a,{shouldForwardProp:function(e){return"selected"!==e}})((function(e){var t=e.selected;e.theme;return Object(v.a)({},t&&{backgroundColor:"#26c0ab"})})),T=n(2),w=function(e){var t=e.setTips,n=e.tips,i=e.setCustomTips,r=e.customTips,a=function(e){e.preventDefault();var n=e.currentTarget,r=parseInt(n.name);i(""),t(r)};return Object(T.jsxs)(j.a,{container:!0,rowSpacing:3,columnSpacing:{xs:3},children:[[{name:"5",label:"5%"},{name:"10",label:"10%"},{name:"15",label:"15%"},{name:"25",label:"25%"},{name:"50",label:"50%"}].map((function(e){return Object(T.jsx)(j.a,{item:!0,xs:4,children:Object(T.jsx)(S,{onClick:a,variant:"contained",name:e.name,selected:!r&&n===parseInt(e.name),children:Object(T.jsx)(d.a,{variant:"h2",children:e.label})})},e.label)})),Object(T.jsx)(j.a,{item:!0,xs:4,children:Object(T.jsx)(f.a,{size:"small",label:"Custom",id:"Custom",onChange:function(e){var n=e.currentTarget.value;if(n){var r=parseInt(n);isNaN(r)||(t(r),i(n))}else i(""),t(0)},value:r})})]})},k=n(152),z=n(153),I=n(149),B=n(154),W=n(77),G=n.n(W),P={margin:0,fontSize:"1rem",fontWeight:700,color:"primary.dark"},R=function(e){var t=e.label,n=e.fieldSymbol,i=e.value,r=e.onChange,a=e.errorMessage;return Object(T.jsxs)(k.a,{variant:"outlined",sx:{width:"100%"},children:[Object(T.jsxs)(z.a,{sx:P,children:[Object(T.jsx)("span",{style:{display:"inline",float:"left"},children:t}),Object(T.jsx)("span",{id:t.split(" ")[0]+"Error",style:{display:"inline",color:"red",float:"right"},children:a})]}),Object(T.jsx)(I.a,{id:t.split(" ")[0],startAdornment:Object(T.jsx)(B.a,{position:"start",children:null!==n&&void 0!==n?n:Object(T.jsx)(G.a,{})}),value:i,error:!!a||void 0,onChange:function(e){if("Bill"===t)r(e.target.value);else if(e.currentTarget.value){var n=parseInt(e.target.value);isNaN(n)||r(n)}else r(0)}})]})},F=function(e){var t=e.setTips,n=e.tips,i=e.bill,r=e.setBill,a=e.numberOfPeople,s=e.setNumberOfPeople,c=e.customTips,o=e.setCustomTips,l=0==a?"Can't be zero":void 0;return Object(T.jsxs)(j.a,{container:!0,alignContent:"space-between",direction:"row",sx:{height:"95%"},children:[Object(T.jsx)(j.a,{item:!0,xs:12,children:Object(T.jsx)(R,{value:i,label:"Bill",fieldSymbol:"$",onChange:r},"billValue")}),Object(T.jsxs)(j.a,{item:!0,xs:12,children:[Object(T.jsx)(d.a,{variant:"h4",sx:{marginBottom:"1rem"},children:"Select Tip %"}),Object(T.jsx)(w,{setTips:t,tips:n,setCustomTips:o,customTips:c})]}),Object(T.jsx)(j.a,{item:!0,xs:12,children:Object(T.jsx)(R,{errorMessage:l,value:a,label:"Number of People",onChange:s})})]})},M={color:"primary.main",textAlign:"end"},N={color:"common.lightGrayish1",margin:0,fontWeight:500,fontSize:"1rem"},E=function(e){var t=e.amount,n=e.total,i=e.handleReset,r=Object(g.a)("(min-width:445px)"),a=r?M:Object(v.a)(Object(v.a)({},M),{},{fontSize:"2rem"}),s=r?N:Object(v.a)(Object(v.a)({},N),{},{fontSize:"0.75rem"}),c=r?{}:{fontSize:"1rem"};return Object(T.jsx)(j.a,{container:!0,alignContent:"space-between",children:Object(T.jsxs)(j.a,{container:!0,rowGap:5,sx:{margin:"2rem"},children:[Object(T.jsxs)(j.a,{item:!0,container:!0,xs:12,alignItems:"center",children:[Object(T.jsx)(j.a,{xs:6,item:!0,children:Object(T.jsxs)(d.a,{variant:"h1",sx:c,children:["Tip Amount",Object(T.jsx)(d.a,{sx:s,children:"/ person"})]})}),Object(T.jsx)(j.a,{xs:6,item:!0,children:Object(T.jsx)(d.a,{id:"Tip",variant:"h6",sx:a,children:"$"+t})})]}),Object(T.jsxs)(j.a,{item:!0,container:!0,xs:12,alignItems:"center",children:[Object(T.jsx)(j.a,{xs:6,item:!0,children:Object(T.jsxs)(d.a,{variant:"h1",sx:c,children:["Total",Object(T.jsx)(d.a,{sx:s,children:"/ person"})]})}),Object(T.jsx)(j.a,{xs:6,item:!0,children:Object(T.jsx)(d.a,{id:"Total",variant:"h6",sx:a,children:"$"+n})})]}),Object(T.jsx)(j.a,{item:!0,container:!0,xs:12,sx:{marginTop:"4rem"},children:Object(T.jsx)(j.a,{xs:12,item:!0,sx:{height:"4rem"},children:Object(T.jsx)(y.a,{variant:"contained",sx:{backgroundColor:"primary.main",width:"100%",height:"100%"},onClick:i,children:Object(T.jsx)(d.a,{id:"Reset",variant:"body2",children:"RESET"})})})})]})})},A={width:"40em",height:"30rem",backgroundColor:"common.white",borderRadius:"25px"},L={width:"100%",height:"90%",backgroundColor:"common.white",borderRadius:"25px 25px 0 0"},$=function(){var e=Object(i.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(0),s=Object(p.a)(a,2),c=s[0],o=s[1],l=Object(i.useState)(1),d=Object(p.a)(l,2),m=d[0],h=d[1],b=Object(i.useState)(""),u=Object(p.a)(b,2),x=u[0],O=u[1],f=Object(g.a)("(min-width:970px)"),v=function(e,t,n){var i="0.00";0!==n&&(i=(e*(t/100)/n).toFixed(2));return i}(c,n,m),y=function(e,t,n){var i="0.00";0!==n&&(i=(e*(1+t/100)/n).toFixed(2));return i}(c,n,m);return Object(T.jsx)(j.a,{container:!0,sx:f?A:L,children:Object(T.jsxs)(j.a,{container:!0,sx:{margin:"1.5rem"},rowGap:f?void 0:5,columnGap:f?7:void 0,children:[Object(T.jsx)(j.a,{item:!0,sx:f?{width:"50%"}:{width:"100%"},children:Object(T.jsx)(F,{setTips:r,tips:n,bill:c,setBill:o,numberOfPeople:m,setNumberOfPeople:h,customTips:x,setCustomTips:O})}),Object(T.jsx)(j.a,{item:!0,sx:f?{width:"43%",backgroundColor:"secondary.main",borderRadius:"20px"}:{width:"100%",backgroundColor:"secondary.main",borderRadius:"20px"},children:Object(T.jsx)(E,{amount:v,total:y,handleReset:function(){r(0),o(0),h(1),O("")}})})]})})},D={backgroundColor:"common.lightGrayish1",color:"primary.dark",minHeight:"100vh"},H=function(){return Object(T.jsxs)(o.a,{theme:O,children:[Object(T.jsx)(l.a,{}),Object(T.jsx)(j.a,{sx:D,container:!0,alignContent:"space-evenly",children:Object(T.jsxs)(j.a,{item:!0,container:!0,alignItems:"center",justifyContent:"center",children:[Object(T.jsx)(j.a,{item:!0,children:Object(T.jsxs)(d.a,{variant:"h3",sx:{marginBottom:"3rem"},children:["SPLI",Object(T.jsx)("br",{}),"TTER"]})}),Object(T.jsx)(j.a,{item:!0,container:!0,alignItems:"center",justifyContent:"center",children:Object(T.jsx)($,{})})]})})]})},J=function(){return Object(T.jsx)(H,{})};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(J,{})}),document.getElementById("root")),c()}},[[102,1,2]]]);
//# sourceMappingURL=main.90cc3a2b.chunk.js.map