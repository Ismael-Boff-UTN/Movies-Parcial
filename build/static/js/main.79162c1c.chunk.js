(this.webpackJsonpfrontmovies=this.webpackJsonpfrontmovies||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),s=c(37),n=c.n(s),o=c(15),i=c(4),r=c(0),d=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{class:"card",children:[Object(r.jsxs)("div",{class:"card-body",children:[Object(r.jsx)("h5",{class:"card-title",children:"Movies Anywhere"}),Object(r.jsx)("p",{class:"card-text",children:"Bienvenidos a Digital Movies"}),Object(r.jsx)("p",{class:"card-text",children:Object(r.jsx)(o.b,{to:"/movies-list",children:Object(r.jsx)("button",{className:"btn btn-success",style:{alignContent:"center"},children:"Ver Peliculas"})})})]}),Object(r.jsx)("img",{src:"https://movieclub.com.ar/imgs/og_image.png",class:"card-img-bottom",alt:"xd",style:{maxHeight:"400px"}})]})})},j=c(12),b=c(10),h=c.n(b),m=c(16),u=c(17),p=c(11),x=c.n(p),O=function(e){var t=e.movie,c=Object(a.useState)([]),l=Object(j.a)(c,2),s=l[0],n=l[1],o=Object(a.useState)([]),i=Object(j.a)(o,2),d=i[0],b=i[1];Object(a.useEffect)((function(){b(t),h.a.get("https://moviesapi2021.herokuapp.com/genres").then((function(e){n(e.data.genres)})).catch((function(e){console.log(e)}))}),[t]);var p=d.id,O=d.title,g=d.rating,f=d.release_date,v=d.length,w=d.awards,y=d.genre_id,E=function(e){b(Object(u.a)(Object(u.a)({},d),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==O&&""!==g&&""!==w&&""!==f&&""!==v&&""!==y&&"Seleccione Un Genero"!==y?(console.log(d),h.a.post("https://moviesapi2021.herokuapp.com/movies/update/".concat(p),d).then((function(e){console.log(e.data)})),x.a.fire({showConfirmButton:!1,position:"center",icon:"success",title:"Pelicula Actualizada, Redireccionando!"}),setTimeout((function(){window.location.reload()}),3e3)):x.a.fire("","Campos Vacios","error")},children:[Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput1",style:{color:"black"},children:"Titulo"}),Object(r.jsx)("input",{type:"text",class:"form-control",placeholder:"Ej. Avatar 2",id:"formGroupExampleInput1",onChange:E,defaultValue:O,name:"title"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput2",style:{color:"black"},children:"Calificaci\xf3n"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 4",id:"formGroupExampleInput2",onChange:E,defaultValue:g,name:"rating"})]})]}),Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput3",style:{color:"black"},children:"Premios"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 2",id:"formGroupExampleInput3",onChange:E,defaultValue:w,name:"awards"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput4",style:{color:"black"},children:"Fecha De Lanzamiento"}),Object(r.jsx)("input",{type:"date",class:"form-control",placeholder:"Ej. 13/10/2000",id:"formGroupExampleInput4",onChange:E,defaultValue:f,name:"release_date"})]})]}),Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput5",style:{color:"black"},children:"Duraci\xf3n"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 120",id:"formGroupExampleInput5",onChange:E,defaultValue:v,name:"length"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput6",style:{color:"black"},children:"Genero"}),Object(r.jsxs)("select",{className:"form-select",id:"formGroupExampleInput6",name:"genre_id",onChange:E,defaultValue:y,children:[Object(r.jsx)("option",{children:"Seleccione Un Genero"}),s.map((function(e){return Object(r.jsx)("option",{value:e.id,children:e.name})}))]})]})]}),Object(r.jsx)("button",{type:"submit",class:"btn btn-primary mt-5",children:"Guardar Cambios"})]})})},g=function(e){var t=e.movie,c=t.id,a=t.title,l=t.rating,s=t.release_date,n=t.length,o=t.awards;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:c}),Object(r.jsx)("td",{children:a}),Object(r.jsxs)("td",{children:[Object(r.jsx)("button",{className:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop".concat(c),children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-pen-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"})})}),"\xa0 \xa0",Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){x.a.fire({title:"Estas Seguro?",text:"Vas A Eliminar ".concat(a),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Si, Eliminar!",cancelButtonText:"Cancelar!"}).then((function(t){t.value&&(h.a.post("https://moviesapi2021.herokuapp.com/movies/delete/".concat(e)).then((function(e){console.log(e),console.log(e.data)})),window.location.reload())}))}(c)},children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-shield-fill-x",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zM6.854 5.146 8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 1 1 .708-.708z"})})}),"\xa0 \xa0",Object(r.jsx)("button",{className:"btn btn-success","data-bs-toggle":"modal","data-bs-target":"#staticBackdropVer".concat(c),children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-info-circle-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})]})]}),Object(r.jsx)("div",{class:"modal fade",id:"staticBackdrop".concat(c),"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog modal-lg modal-dialog-scrollable",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title",id:"staticBackdropLabel",style:{color:"black"},children:"Editar Pelicula"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{class:"modal-body",children:Object(r.jsx)(O,{movie:t})}),Object(r.jsx)("div",{class:"modal-footer",children:Object(r.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"})})]})})}),Object(r.jsx)("div",{class:"modal fade",id:"staticBackdropVer".concat(c),"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog modal-dialog-scrollable",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title",id:"staticBackdropLabel",style:{color:"black"},children:"Detalles Pelicula"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{class:"modal-body",children:Object(r.jsxs)("div",{class:"card mb-3",style:{width:"28rem"},children:[Object(r.jsx)("div",{class:"card-header",children:a}),Object(r.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(r.jsxs)("li",{class:"list-group-item",children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-star-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})}),"\xa0 \xa0",l]}),Object(r.jsxs)("li",{class:"list-group-item",children:[Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-award",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"}),Object(r.jsx)("path",{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"})]}),"\xa0 \xa0",o]}),null===n?Object(r.jsxs)("li",{class:"list-group-item",children:[Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-clock",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}),Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"})]}),"\xa0 \xa0Sin Informacion"]}):Object(r.jsxs)("li",{class:"list-group-item",children:[Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-clock",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}),Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"})]}),"\xa0 \xa0",n,"\xa0 min"]}),Object(r.jsxs)("li",{class:"list-group-item",children:[Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-calendar-check",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),Object(r.jsx)("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]}),"\xa0 \xa0",s]})]})]})}),Object(r.jsx)("div",{class:"modal-footer",children:Object(r.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cerrar"})})]})})})]})},f=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],l=t[1],s=Object(a.useState)({title:"",rating:"",awards:"",release_date:"",length:"",genre_id:""}),n=Object(j.a)(s,2),o=n[0],i=n[1];Object(a.useEffect)((function(){h.a.get("https://moviesapi2021.herokuapp.com/genres").then((function(e){l(e.data.genres)})).catch((function(e){console.log(e)}))}),[]);var d=o.title,b=o.rating,p=o.release_date,O=o.length,g=o.awards,f=o.genre_id,v=function(e){i(Object(u.a)(Object(u.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput1",children:"Titulo"}),Object(r.jsx)("input",{type:"text",class:"form-control",placeholder:"Ej. Avatar 2",id:"formGroupExampleInput1",onChange:v,value:d,name:"title"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput2",children:"Calificaci\xf3n"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 4",id:"formGroupExampleInput2",onChange:v,value:b,name:"rating"})]})]}),Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput3",children:"Premios"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 2",id:"formGroupExampleInput3",onChange:v,value:g,name:"awards"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput4",children:"Fecha De Lanzamiento"}),Object(r.jsx)("input",{type:"date",class:"form-control",placeholder:"Ej. 13/10/2000",id:"formGroupExampleInput4",onChange:v,value:p,name:"release_date"})]})]}),Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput5",children:"Duraci\xf3n"}),Object(r.jsx)("input",{type:"number",class:"form-control",placeholder:"Ej. 120",id:"formGroupExampleInput5",onChange:v,value:O,name:"length"})]}),Object(r.jsxs)("div",{class:"col",children:[Object(r.jsx)("label",{for:"formGroupExampleInput6",children:"Genero"}),Object(r.jsxs)("select",{className:"form-select",id:"formGroupExampleInput6",name:"genre_id",onChange:v,children:[Object(r.jsx)("option",{children:"Seleccione Un Genero"}),c.map((function(e){return Object(r.jsx)("option",{value:e.id,children:e.name})}))]})]})]}),Object(r.jsx)("button",{type:"submit",class:"btn btn-primary mt-5",onClick:function(e){if(e.preventDefault(),""!==d&&""!==b&&""!==g&&""!==p&&""!==O&&""!==f&&"Seleccione Un Genero"!==f){try{h.a.post("https://moviesapi2021.herokuapp.com/movies/create",o).then((function(e){}))}catch(t){console.log(t)}x.a.fire({showConfirmButton:!1,position:"center",icon:"success",title:"Pelicula Agregada, Espere!"}),setTimeout((function(){window.location.reload()}),3e3)}else x.a.fire("","Campos Vacios","error")},children:"Guardar"})]})})},v=c(39),w=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],l=t[1];return Object(a.useEffect)((function(){h.a.get("https://moviesapi2021.herokuapp.com/movies").then((function(e){l(e.data.movies)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{type:"button",className:"btn btn-success mt-3 mb-3","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"Agregar Nueva Pelicula"}),0===c.length?Object(r.jsx)(v.EatLoading,{}):Object(r.jsxs)("table",{className:"table table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"#ID"}),Object(r.jsx)("th",{scope:"col",children:"Nombre"}),Object(r.jsx)("th",{scope:"col",children:"Opciones"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsx)(g,{movie:e},e.id)}))})]}),Object(r.jsx)("div",{class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog modal-lg modal-dialog-scrollable",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title",id:"staticBackdropLabel",children:"Agregar Nueva Pelicula"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{class:"modal-body",children:Object(r.jsx)(f,{})}),Object(r.jsx)("div",{class:"modal-footer",children:Object(r.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"})})]})})})]})},y=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(r.jsx)("div",{class:"container-fluid",children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("a",{class:"navbar-brand",href:"!#",children:Object(r.jsx)("img",{src:"https://www.pngkey.com/png/full/343-3434547_movies-everywhere-logo-featured-black-movies-anywhere-logo.png",alt:"",width:"150",height:"60",class:"d-inline-block align-text-top"})})})})})})},E=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(i.c,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(r.jsx)(i.a,{exact:!0,path:"/movies-list",component:w})]})})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,117)).then((function(t){var c=t.getCLS,a=t.getFID,l=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),l(e),s(e),n(e)}))};n.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),C()}},[[116,1,2]]]);
//# sourceMappingURL=main.79162c1c.chunk.js.map