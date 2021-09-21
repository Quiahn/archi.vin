(this["webpackJsonparchi.vin"]=this["webpackJsonparchi.vin"]||[]).push([[0],{67:function(e,t,n){},76:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(25),c=n.n(r),i=(n(67),n(9)),l=n(5),o=n(11),u=n(2),d=n(3),j=n(1),b=["user","component","render"],h=function(e){var t=e.user,n=e.component,s=e.render,a=Object(d.a)(e,b);return t&&s?Object(j.jsx)(o.b,Object(u.a)(Object(u.a)({},a),{},{render:s})):Object(j.jsx)(o.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return t?Object(j.jsx)(n,Object(u.a)({},e)):Object(j.jsx)(o.a,{to:"/"})}}))},m=n(57),O=n(58),x=n(62),f=n(61),p=n(45),g=(n(76),function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).handleClose=function(){return s.setState({show:!1})},s.state={show:!0},s.timeoutId=null,s}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,s=e.message,a=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){a(r)}),300),Object(j.jsx)(p.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(p.a.Heading,{children:n}),Object(j.jsx)("p",{className:"alert-body",children:s})]})})}}]),n}(a.a.Component)),v=n(60),w=n(33),y=n(12),N=Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(y.c,{to:"/change-password",className:"nav-link",style:{color:"#000",textDecoration:"none"},children:"Change Password"}),Object(j.jsx)(y.c,{to:"/sign-out",className:"nav-link",style:{color:"#000",textDecoration:"none"},children:"Sign Out"})]}),S=Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(y.c,{to:"/sign-up",className:"nav-link text-center",style:{color:"#000",textDecoration:"none"},children:"Sign Up"}),Object(j.jsx)(y.c,{to:"/sign-in",className:"nav-link text-center",style:{color:"#000",textDecoration:"none"},children:"Sign In"})]}),C=function(e){var t=e.user;return Object(j.jsxs)(w.a,{bg:"light",variant:"dark",expand:"md",children:[Object(j.jsx)(w.a.Brand,{children:Object(j.jsx)(y.b,{to:"/",className:"font-weight-bold",style:{color:"#000",textDecoration:"none",margin:"0 2rem"},children:"ARCHI.VIN"})}),Object(j.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav",style:{background:"#111"}}),Object(j.jsx)(w.a.Collapse,{className:"d-md-flex flex-row-reverse ",id:"basic-navbar-nav",children:Object(j.jsxs)(v.a,{children:[t&&Object(j.jsxs)("span",{className:"navbar-text mr-2 d-md-block d-none",style:{color:"#000",textDecoration:"none"},children:["Welcome, ",t.email]}),t?N:S]})})]})},k="https://archivin-backend.herokuapp.com",A="http://localhost:4741",F="localhost"===window.location.hostname?A:k,U=n(20),P=n.n(U),E=function(e){return P()({url:F+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},I=n(8),M=n(29);var D=Object(o.f)((function(e){var t=e.setMsgAlerts,n=e.history,a=e.setUser,r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1],O=Object(s.useState)(""),x=Object(l.a)(O,2),f=x[0],p=x[1];return Object(s.useEffect)((function(){u(""),m(""),p("")}),[]),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(I.a,{onSubmit:function(e){var s;e.preventDefault(),(s={email:o,password:h,passwordConfirmation:f},P()({method:"POST",url:F+"/sign-up/",data:{credentials:{email:s.email,password:s.password,password_confirmation:s.passwordConfirmation}}})).then((function(){return E({email:o,password:h,passwordConfirmation:f})})).then((function(e){return a(e.data.user)})).then((function(){return t((function(e){return[].concat(Object(i.a)(e),[{heading:"Sign Up Success",message:"Successfully registered! You've been signed in as well.",variant:"success"}])}))})).then((function(){return n.push("/")})).catch((function(e){u(""),m(""),p(""),t((function(t){return[].concat(Object(i.a)(t),[{heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"}])}))}))},children:[Object(j.jsxs)(I.a.Group,{controlId:"email",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"Email address"}),Object(j.jsx)(I.a.Control,{required:!0,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)(I.a.Group,{controlId:"password",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"Password"}),Object(j.jsx)(I.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){m(e.target.value)}})]}),Object(j.jsxs)(I.a.Group,{controlId:"passwordConfirmation",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(I.a.Control,{required:!0,name:"passwordConfirmation",value:f,type:"password",placeholder:"Confirm Password",onChange:function(e){p(e.target.value)}})]}),Object(j.jsx)(M.a,{variant:"dark",type:"submit",children:"Submit"})]})]})})}));var T=Object(o.f)((function(e){var t=e.setMsgAlerts,n=e.history,a=e.setUser,r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1];return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(I.a,{onSubmit:function(e){e.preventDefault(),E({email:o,password:h}).then((function(e){return a(e.data.user)})).then((function(){return t((function(e){return[].concat(Object(i.a)(e),[{heading:"Sign In Success",message:"Welcome!",variant:"success"}])}))})).then((function(){return n.push("/")})).catch((function(e){u(""),m(""),t((function(t){return[].concat(Object(i.a)(t),[{heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"}])}))}))},children:[Object(j.jsxs)(I.a.Group,{controlId:"email",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"Email address"}),Object(j.jsx)(I.a.Control,{required:!0,className:"mt-2",type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(I.a.Group,{controlId:"password",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"Password"}),Object(j.jsx)(I.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(M.a,{variant:"dark",type:"submit",children:"Submit"})]})]})})}));var q=Object(o.f)((function(e){var t=e.setUser,n=e.setMsgAlerts,a=e.history,r=e.user;return Object(s.useEffect)((function(){(function(e){return P()({url:F+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(r).finally((function(){return n((function(e){return[].concat(Object(i.a)(e),[{heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}])}))})).finally((function(){return t(null)})).finally((function(){return a.push("/")}))}),[]),""}));var B=Object(o.f)((function(e){var t=e.setMsgAlerts,n=e.user,a=e.history,r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],u=c[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1];return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(I.a,{onSubmit:function(e){e.preventDefault(),function(e,t){return P()({url:F+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}({oldPassword:o,newPassword:h},n).then((function(){return t((function(e){return[].concat(Object(i.a)(e),[{heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}])}))})).then((function(){return a.push("/")})).catch((function(e){u(""),m(""),t((function(t){return[].concat(Object(i.a)(t),[{heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"}])}))}))},className:"my-4",children:[Object(j.jsxs)(I.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(I.a.Label,{children:"Old password"}),Object(j.jsx)(I.a.Control,{required:!0,name:"oldPassword",value:o,type:"password",placeholder:"Old Password",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(I.a.Group,{controlId:"newPassword",className:"my-4",children:[Object(j.jsx)(I.a.Label,{children:"New Password"}),Object(j.jsx)(I.a.Control,{required:!0,name:"newPassword",value:h,type:"password",placeholder:"New Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(M.a,{variant:"dark",type:"submit",children:"Submit"})]})]})})}));function L(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],c=e.setUploads;return Object(j.jsxs)("div",{className:"w-50 mx-auto text-center",children:[Object(j.jsx)("h3",{className:"my-2",children:"Upload A File"}),Object(j.jsxs)("form",{className:"my-3",id:"upload-form",onSubmit:function(t){t.preventDefault();var n=t.target.title.value,s=t.target.artist.value,a=t.target.file.files[0],l=new FormData;l.append("userId",e.user._id),l.append("title",n),l.append("artist",s),l.append("file",a),r(!0),function(e,t){return P()({method:"POST",url:F+"/blobs",headers:{Authorization:"Bearer ".concat(e.token)},data:t})}(e.user,l).then((function(e){return c((function(t){return[].concat(Object(i.a)(t),[e.data.blob])}))})).then((function(){document.getElementById("upload-form").reset()})).then((function(){return r(!1)})).then((function(){return e.setMsgAlerts((function(e){return[].concat(Object(i.a)(e),[{heading:"File Uploaded Successfully",message:"File uploaded successfully!",variant:"success"}])}))})).catch((function(){return e.setMsgAlerts((function(e){return[].concat(Object(i.a)(e),[{heading:"File Upload Failed",message:"Failed to upload file. Check your file size (100mb Max).",variant:"danger"}])}))}))},children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"title",children:"Title:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control",id:"title",type:"text",name:"title",required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"form-label",htmlFor:"artist",children:"Artist:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control mb-2",id:"artist",type:"text",name:"artist",required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control",type:"file",name:"file",accept:"audio/AAC, audio/MPEG, a /WAV, audio/FLAC, .opus",required:!0}),Object(j.jsx)("br",{}),a?Object(j.jsx)("div",{className:"spinner-grow text-secondary"}):Object(j.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Upload"})]})]})}var G=n(32);function z(e){var t=e.user,n=e.index,a=e.setIndex,r=e.uploads,c=(e.setUploads,e.setMsgAlerts),o=e.setUpdateUploads,d=Object(s.useState)(!1),b=Object(l.a)(d,2),h=b[0],m=b[1],O=Object(s.useState)(!1),x=Object(l.a)(O,2),f=x[0],p=x[1],g=Object(s.useState)(null),v=Object(l.a)(g,2),w=v[0],y=v[1],N=Object(s.useState)(""),S=Object(l.a)(N,2),C=S[0],k=S[1],A=Object(s.useState)(""),U=Object(l.a)(A,2),E=U[0],I=U[1],M=Object(s.useState)(""),D=Object(l.a)(M,2),T=D[0],q=D[1],B=Object(s.useState)(!1),L=Object(l.a)(B,2),z=L[0],H=L[1],Y=Object(s.useState)(!1),_=Object(l.a)(Y,2),R=_[0],W=_[1],V=Object(s.useRef)(null);if(Object(s.useEffect)((function(){var e;null===n||r.length<1||!r[n]||(y(r[n]),e=r[n].url,k(e),V.current&&(V.current.pause(),V.current.load(),V.current.play()),I(r[n].title),q(r[n].artist))}),[n,r]),null===n||r.length<1||!r[n]||!w)return Object(j.jsx)("div",{children:Object(j.jsx)("h5",{className:"p-3 text-center",children:"Select any of your uploads."})});return Object(j.jsx)("div",{className:"",children:w?Object(j.jsxs)("div",{className:"p-3 text-center",children:[Object(j.jsxs)("h5",{children:[" ",w.title," by ",w.artist," "]}),Object(j.jsxs)("p",{children:[Object(j.jsxs)("small",{children:["Date: ",w.createdAt.substring(0,10)," "]})," "]}),Object(j.jsx)("div",{className:"w-100 my-4 d-flex justify-content-center align-items-center",children:Object(j.jsxs)("audio",{controls:!0,preload:"auto",ref:V,children:[Object(j.jsx)("source",{src:C}),"Your browser does not support the audio element."]})}),Object(j.jsx)("h5",{children:" Public link "}),Object(j.jsx)("input",{className:"w-100 w-sm-50 mb-4 text-center",value:window.location.href+"u/"+w._id,onChange:function(){return null}}),Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(j.jsx)("button",{className:"mx-1 btn btn-dark",onClick:function(e){return m(!h)},children:"Edit"}),Object(j.jsx)("button",{className:"mx-1 btn btn-dark",onClick:function(e){return p(!f)},children:"Delete"})]}),Object(j.jsx)("div",{className:"pt-4",children:Object(j.jsx)(G.a,{className:"",in:h,children:Object(j.jsxs)("form",{id:"edit-form",onSubmit:function(e){e.preventDefault(),H(!0);var n=Object(u.a)({},w);n.title=E,n.artist=T,function(e,t,n){return P()({url:F+"/blobs/"+t,method:"PATCH",headers:{Authorization:"Bearer ".concat(e.token)},data:n})}(t,w._id,n).then((function(){return o(!0)})).then((function(){return H(!1)})).then((function(){return c((function(e){return[].concat(Object(i.a)(e),[{heading:"File Edited Successfully",message:"File updated successfully!",variant:"success"}])}))})).then(m(!1)).catch((function(){return c((function(e){return[].concat(Object(i.a)(e),[{heading:"Edit Failed",message:"Failed to update file.",variant:"danger"}])}))}))},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"title",onChange:function(e){return I(e.target.value)},value:E,required:!0})]}),Object(j.jsxs)("div",{className:"pt-2",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Artist: "})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"artist",onChange:function(e){return q(e.target.value)},value:T,required:!0})]}),z?Object(j.jsx)("div",{className:"spinner-border"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"submit",value:"Submit",className:"mt-3 mx-1 btn btn-dark"}),Object(j.jsx)("input",{type:"button",onClick:function(e){return m(!h)},value:"Cancel",className:"mt-3 mx-1 btn btn-dark"})]})]})})}),Object(j.jsx)("div",{className:"pt-4",children:Object(j.jsx)(G.a,{className:"",in:f,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Are You Sure?"}),R?Object(j.jsx)("div",{className:"spinner-border"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"button",className:"mx-1 btn btn-dark",onClick:function(e){e.preventDefault(),W(!0),n>r.length-1?a(null):function(e,t){return P()({url:F+"/blobs/"+t,method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})}(t,w._id).then((function(){return o(!0)})).then((function(){return W(!1)})).then((function(){return p(!1)})).then((function(){return c((function(e){return[].concat(Object(i.a)(e),[{heading:"File Edited Successfully",message:"File deleted successfully!",variant:"success"}])}))})).catch((function(){return c((function(e){return[].concat(Object(i.a)(e),[{heading:"Edit Failed",message:"File delete failed.",variant:"danger"}])}))}))},value:"Confirm"}),Object(j.jsx)("input",{type:"button",className:"mx-1 btn btn-dark",onClick:function(e){return p(!f)},value:"Cancel"})]})]})})})]})]}):null})}function H(e){var t=e.setUpdateUploads,n=e.user,a=e.uploads,r=e.setUploads,c=e.setMsgAlerts,i=Object(s.useState)(null),o=Object(l.a)(i,2),u=o[0],d=o[1];return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"pt-3 col-12 col-md-4 text-center",children:[Object(j.jsx)("h3",{children:"Your Uploads"}),a&&0!==a.length?a.map((function(e,t){return Object(j.jsxs)("h6",{className:"pe-pointer my-3 text-start",onClick:function(){return d(t)},children:[e.title,"  ",Object(j.jsxs)("span",{className:"text-secondary",children:[" by ",e.artist," "]})]},t)})):Object(j.jsx)("h5",{children:"No Uploads Found."})]}),Object(j.jsx)("div",{className:"col-12 col-md-8 bg-light mt-3",children:Object(j.jsx)(z,{setUpdateUploads:t,user:n,index:u,setIndex:d,setMsgAlerts:c,uploads:a,setUploads:r})})]})}var Y=n.p+"static/media/front.e3ec0cba.svg";function _(){return Object(j.jsx)("div",{className:"position-relative",children:Object(j.jsxs)("div",{className:"row animated animatedFadeInUp fadeInUp",children:[Object(j.jsx)("div",{className:"d-flex col-12 col-sm-6 text-center align-items-center",children:Object(j.jsxs)("div",{className:"d-block p-3 mx-auto",children:[Object(j.jsx)("h1",{className:"display-4",children:"Try out ARCHI.VIN"}),Object(j.jsx)("h5",{className:"d-block",children:"for all of your music storing needs"}),Object(j.jsx)(y.c,{to:"/sign-up",className:"btn btn-dark m-2",children:"Sign Up"}),Object(j.jsx)(y.c,{to:"/sign-in",className:"btn btn-dark m-2",children:"Sign In"})]})}),Object(j.jsx)("div",{className:"col-6 py-4 mx-auto",children:Object(j.jsx)("img",{src:Y,className:"w-100 bob-down img-fluid"})})]})})}var R=Object(o.f)((function(e){var t=e.setMsgAlerts,n=(e.user,e.match),a=(e.history,Object(s.useState)({})),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(s.useEffect)((function(){var e;(e=n.params.id,P()({url:F+"/blobs/"+e,method:"GET"})).then((function(e){return o(e.data.blob)})).catch((function(){return t((function(e){return[].concat(Object(i.a)(e),[{heading:"Failed getting file.",message:"File does not exist",variant:"danger"}])}))}))}),[]),Object(j.jsx)("div",{className:"text-center w-100 my-5 d-flex align-items-center justify-content-center",children:0===Object.keys(c).length?Object(j.jsx)("h1",{children:"404: File Does Not Exist."}):Object(j.jsxs)("div",{className:"border shadow p-3",children:[Object(j.jsxs)("div",{className:"p-2",children:[Object(j.jsx)("h3",{className:"",children:c.title}),Object(j.jsxs)("h5",{children:["By ",c.artist]})]}),Object(j.jsxs)("audio",{controls:!0,children:[Object(j.jsx)("source",{src:c.url}),"Your Browser does not support the audio element."]})]})})}));function W(e){var t=Object(s.useState)(null),n=Object(l.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(!1),u=Object(l.a)(c,2),d=u[0],b=u[1],m=Object(s.useState)([]),O=Object(l.a)(m,2),x=O[0],f=O[1],p=Object(s.useState)([]),v=Object(l.a)(p,2),w=v[0],y=v[1];Object(s.useEffect)((function(){(a||d)&&function(e){return P()({url:F+"/list-blobs/",method:"POST",headers:{Authorization:"Bearer ".concat(e.token)},data:e})}(a).then((function(e){y(e.data.blobs)})).then((function(){return b(!1)})).catch((function(){return f((function(e){return[].concat(Object(i.a)(e),[{heading:"Failed getting files.",message:"Severs could be down",variant:"danger"}])}))}))}),[a,d]),Object(s.useEffect)((function(){}),[]);var N=function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{user:a}),x.map((function(e,t){return Object(j.jsx)(g,{heading:e.heading,variant:e.variant,message:e.message,id:e.id,deleteAlert:N},t)})),Object(j.jsxs)("main",{className:"container",children:[Object(j.jsx)(o.b,{path:"/",exact:!0,render:function(){return null===a?Object(j.jsx)(_,{msgAlert:x,setUploads:y,user:a,setMsgAlerts:f}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{msgAlert:x,setUploads:y,user:a,setMsgAlerts:f}),Object(j.jsx)(H,{setUpdateUploads:b,msgAlert:x,uploads:w,setUploads:y,user:a,setMsgAlerts:f})]})}}),Object(j.jsx)(o.b,{path:"/sign-up",render:function(){return Object(j.jsx)(D,{msgAlert:x,setMsgAlerts:f,setUser:r})}}),Object(j.jsx)(o.b,{path:"/sign-in",render:function(){return Object(j.jsx)(T,{msgAlert:x,setMsgAlerts:f,setUser:r})}}),Object(j.jsx)(o.b,{path:"/u/:id",exact:!0,render:function(){return Object(j.jsx)(R,{msgAlert:x,setMsgAlerts:f,user:a})}}),Object(j.jsx)(h,{user:a,path:"/sign-out",render:function(){return Object(j.jsx)(q,{msgAlert:x,setMsgAlerts:f,setUser:r,user:a})}}),Object(j.jsx)(h,{user:a,path:"/change-password",render:function(){return Object(j.jsx)(B,{msgAlert:x,setMsgAlerts:f,user:a})}})]})]})}var V=Object(j.jsx)(y.a,{basename:"/archi.vin",children:Object(j.jsx)(W,{})});c.a.render(V,document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.30122c5f.chunk.js.map