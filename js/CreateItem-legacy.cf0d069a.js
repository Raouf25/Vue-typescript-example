"use strict";(self["webpackChunkts_vue_sample"]=self["webpackChunkts_vue_sample"]||[]).push([[547,514],{37419:function(o,t,r){r.r(t),r.d(t,{default:function(){return m}});var e=function(){var o=this,t=o._self._c;o._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"image-container"},[t("canvas",{ref:"canvas",attrs:{width:o.imageWidth,height:o.imageHeight},on:{mousedown:o.handleMouseDown,mousemove:o.handleMouseMove,mouseup:o.handleMouseUp,wheel:o.zoomdezoom}}),t("canvas",{ref:"canvas2",attrs:{width:o.imageWidth,height:o.imageHeight},on:{mousedown:o.handleMouseDown2,mousemove:o.handleMouseMove2,mouseup:o.handleMouseUp}})]),t("div",{staticClass:"table-container"},[t("table",[o._m(0),t("tbody",o._l(o.points,(function(r,e){return t("tr",{key:e},[t("td",[t("span",{staticClass:"color-dot",style:{backgroundColor:r.color}})]),t("td",[t("span",{staticClass:"material-icons hover-green",on:{click:function(t){return o.resetMove(r.color)}}},[o._v("undo")]),t("span",{staticClass:"material-icons hover-red",on:{click:function(t){return o.deletePoint(r.color)}}},[o._v("delete")])])])})),0)]),t("button",{staticClass:"submit-button",on:{click:o.submitNewPoint}},[t("span",{staticClass:"text"},[o._v("Submit")]),t("span",{staticClass:"material-icons"},[o._v("send")])])])])},i=[function(){var o=this,t=o._self._c;o._self._setupProxy;return t("thead",[t("tr",[t("th",[o._v("Color")]),t("th",[o._v("Actions")])])])}],c=r(45226),l=r(27594),n=r(26520),x=r(32011),a=r(98361),y=r(54503),s=(r(92222),r(21249),r(41539),r(54747),r(43290),r(34553),r(40561),r(38862),r(32389)),g=r(61283),h=JSON.parse('[{"color":"rgb(107, 237, 212)","x1":516,"y1":132,"x2":486,"y2":118},{"color":"rgb(236, 142, 130)","x1":524,"y1":140,"x2":482,"y2":142},{"color":"rgb(61, 120, 88)","x1":132,"y1":140,"x2":104,"y2":140},{"color":"rgb(111, 234, 132)","x1":532,"y1":140,"x2":490,"y2":142},{"color":"rgb(121, 233, 136)","x1":540,"y1":132,"x2":510,"y2":118},{"color":"rgb(129, 74, 99)","x1":548,"y1":132,"x2":518,"y2":118},{"color":"rgb(75, 134, 134)","x1":556,"y1":132,"x2":530,"y2":126},{"color":"rgb(95, 122, 173)","x1":140,"y1":132,"x2":110,"y2":132},{"color":"rgb(185, 128, 74)","x1":564,"y1":132,"x2":542,"y2":130},{"color":"rgb(177, 79, 73)","x1":572,"y1":148,"x2":544,"y2":148},{"color":"rgb(85, 23, 132)","x1":361,"y1":32,"x2":413,"y2":266},{"color":"rgb(123, 213, 55)","x1":363,"y1":62,"x2":34,"y2":6574},{"color":"rgb(136, 204, 2)","x1":364,"y1":44,"x2":44,"y2":6590},{"color":"rgb(202, 240, 103)","x1":362,"y1":4,"x2":420,"y2":465},{"color":"rgb(87, 198, 230)","x1":365,"y1":24,"x2":52,"y2":6617},{"color":"rgb(96, 174, 104)","x1":366,"y1":4,"x2":58,"y2":6617},{"color":"rgb(95, 69, 146)","x1":367,"y1":64,"x2":74,"y2":6627},{"color":"rgb(108, 184, 155)","x1":368,"y1":44,"x2":82,"y2":6626},{"color":"rgb(213, 14, 183)","x1":369,"y1":24,"x2":92,"y2":6611},{"color":"rgb(226, 47, 29)","x1":580,"y1":132,"x2":550,"y2":130},{"color":"rgb(88, 187, 249)","x1":588,"y1":132,"x2":562,"y2":132},{"color":"rgb(143, 63, 164)","x1":148,"y1":132,"x2":118,"y2":132},{"color":"rgb(158, 88, 250)","x1":596,"y1":132,"x2":572,"y2":132},{"color":"rgb(166, 201, 210)","x1":604,"y1":132,"x2":580,"y2":130},{"color":"rgb(74, 112, 237)","x1":612,"y1":132,"x2":588,"y2":130},{"color":"rgb(14, 248, 14)","x1":620,"y1":132,"x2":594,"y2":130},{"color":"rgb(183, 225, 205)","x1":156,"y1":132,"x2":126,"y2":132},{"color":"rgb(70, 212, 177)","x1":628,"y1":132,"x2":602,"y2":130},{"color":"rgb(196, 48, 178)","x1":636,"y1":132,"x2":610,"y2":130},{"color":"rgb(4, 38, 60)","x1":644,"y1":132,"x2":618,"y2":130},{"color":"rgb(107, 113, 85)","x1":652,"y1":132,"x2":626,"y2":132},{"color":"rgb(245, 1, 166)","x1":164,"y1":132,"x2":134,"y2":132},{"color":"rgb(196, 218, 105)","x1":660,"y1":132,"x2":634,"y2":132},{"color":"rgb(104, 43, 79)","x1":668,"y1":36,"x2":636,"y2":346},{"color":"rgb(201, 93, 59)","x1":676,"y1":132,"x2":648,"y2":130},{"color":"rgb(96, 124, 28)","x1":684,"y1":132,"x2":656,"y2":130},{"color":"rgb(143, 164, 182)","x1":172,"y1":132,"x2":142,"y2":130},{"color":"rgb(3, 87, 120)","x1":692,"y1":140,"x2":662,"y2":140},{"color":"rgb(164, 138, 246)","x1":700,"y1":132,"x2":670,"y2":130},{"color":"rgb(3, 69, 124)","x1":441,"y1":32,"x2":121,"y2":326},{"color":"rgb(197, 170, 72)","x1":443,"y1":61,"x2":236,"y2":663},{"color":"rgb(202, 137, 152)","x1":444,"y1":41,"x2":244,"y2":662},{"color":"rgb(46, 225, 170)","x1":442,"y1":4,"x2":122,"y2":26},{"color":"rgb(72, 146, 38)","x1":445,"y1":21,"x2":252,"y2":662},{"color":"rgb(149, 230, 88)","x1":446,"y1":1,"x2":260,"y2":663},{"color":"rgb(160, 177, 46)","x1":447,"y1":61,"x2":276,"y2":662},{"color":"rgb(60, 184, 206)","x1":448,"y1":41,"x2":282,"y2":662},{"color":"rgb(246, 237, 53)","x1":449,"y1":21,"x2":292,"y2":662},{"color":"rgb(10, 209, 128)","x1":708,"y1":132,"x2":676,"y2":132},{"color":"rgb(72, 100, 28)","x1":716,"y1":132,"x2":684,"y2":130},{"color":"rgb(112, 155, 14)","x1":180,"y1":132,"x2":152,"y2":132},{"color":"rgb(184, 159, 232)","x1":724,"y1":132,"x2":692,"y2":130},{"color":"rgb(39, 195, 11)","x1":732,"y1":132,"x2":700,"y2":132},{"color":"rgb(84, 241, 1)","x1":188,"y1":132,"x2":162,"y2":134},{"color":"rgb(250, 53, 111)","x1":196,"y1":36,"x2":166,"y2":346},{"color":"rgb(243, 233, 150)","x1":204,"y1":132,"x2":174,"y2":130},{"color":"rgb(253, 172, 221)","x1":521,"y1":32,"x2":201,"y2":326},{"color":"rgb(153, 24, 61)","x1":523,"y1":62,"x2":34,"y2":662},{"color":"rgb(60, 142, 41)","x1":522,"y1":4,"x2":202,"y2":46},{"color":"rgb(145, 180, 48)","x1":525,"y1":22,"x2":50,"y2":661},{"color":"rgb(89, 74, 47)","x1":526,"y1":2,"x2":60,"y2":660},{"color":"rgb(210, 61, 218)","x1":527,"y1":62,"x2":76,"y2":658},{"color":"rgb(162, 217, 48)","x1":528,"y1":42,"x2":82,"y2":659},{"color":"rgb(252, 90, 146)","x1":529,"y1":22,"x2":90,"y2":656},{"color":"rgb(252, 231, 132)","x1":212,"y1":132,"x2":184,"y2":132},{"color":"rgb(60, 137, 174)","x1":220,"y1":132,"x2":192,"y2":132},{"color":"rgb(242, 51, 92)","x1":228,"y1":140,"x2":200,"y2":138},{"color":"rgb(229, 3, 125)","x1":236,"y1":132,"x2":210,"y2":132},{"color":"rgb(84, 114, 71)","x1":601,"y1":32,"x2":301,"y2":306},{"color":"rgb(174, 14, 245)","x1":603,"y1":62,"x2":834,"y2":655},{"color":"rgb(225, 180, 173)","x1":602,"y1":4,"x2":302,"y2":46},{"color":"rgb(90, 70, 210)","x1":605,"y1":23,"x2":52,"y2":657},{"color":"rgb(41, 212, 165)","x1":606,"y1":3,"x2":60,"y2":658},{"color":"rgb(169, 71, 38)","x1":607,"y1":63,"x2":74,"y2":659},{"color":"rgb(166, 51, 225)","x1":608,"y1":42,"x2":884,"y2":658},{"color":"rgb(207, 164, 225)","x1":609,"y1":22,"x2":892,"y2":656},{"color":"rgb(89, 224, 51)","x1":244,"y1":140,"x2":218,"y2":140},{"color":"rgb(144, 167, 179)","x1":252,"y1":132,"x2":224,"y2":130},{"color":"rgb(60, 226, 18)","x1":260,"y1":132,"x2":234,"y2":132},{"color":"rgb(25, 242, 110)","x1":268,"y1":132,"x2":242,"y2":132},{"color":"rgb(42, 111, 48)","x1":681,"y1":32,"x2":381,"y2":306},{"color":"rgb(87, 231, 171)","x1":683,"y1":63,"x2":836,"y2":657},{"color":"rgb(19, 88, 11)","x1":682,"y1":4,"x2":382,"y2":46},{"color":"rgb(112, 115, 45)","x1":685,"y1":23,"x2":852,"y2":657},{"color":"rgb(25, 104, 103)","x1":686,"y1":3,"x2":860,"y2":657},{"color":"rgb(252, 131, 148)","x1":687,"y1":63,"x2":876,"y2":657},{"color":"rgb(236, 199, 75)","x1":688,"y1":43,"x2":684,"y2":658},{"color":"rgb(104, 220, 4)","x1":689,"y1":23,"x2":892,"y2":655},{"color":"rgb(236, 192, 124)","x1":276,"y1":132,"x2":250,"y2":132},{"color":"rgb(164, 202, 142)","x1":284,"y1":132,"x2":258,"y2":132},{"color":"rgb(175, 51, 154)","x1":292,"y1":132,"x2":266,"y2":132},{"color":"rgb(230, 209, 249)","x1":300,"y1":132,"x2":272,"y2":130},{"color":"rgb(36, 141, 135)","x1":761,"y1":32,"x2":461,"y2":326},{"color":"rgb(87, 208, 241)","x1":763,"y1":64,"x2":634,"y2":659},{"color":"rgb(27, 167, 167)","x1":764,"y1":44,"x2":644,"y2":657},{"color":"rgb(130, 131, 121)","x1":762,"y1":4,"x2":482,"y2":46},{"color":"rgb(220, 194, 2)","x1":765,"y1":24,"x2":652,"y2":657},{"color":"rgb(209, 15, 215)","x1":766,"y1":4,"x2":658,"y2":658},{"color":"rgb(131, 18, 113)","x1":767,"y1":64,"x2":676,"y2":660},{"color":"rgb(239, 223, 18)","x1":768,"y1":44,"x2":684,"y2":659},{"color":"rgb(166, 117, 7)","x1":769,"y1":24,"x2":692,"y2":660},{"color":"rgb(25, 139, 8)","x1":308,"y1":132,"x2":282,"y2":130},{"color":"rgb(212, 213, 153)","x1":316,"y1":132,"x2":290,"y2":130},{"color":"rgb(242, 55, 195)","x1":324,"y1":132,"x2":298,"y2":130},{"color":"rgb(212, 131, 76)","x1":332,"y1":132,"x2":306,"y2":132},{"color":"rgb(160, 192, 233)","x1":841,"y1":32,"x2":561,"y2":326},{"color":"rgb(155, 211, 223)","x1":843,"y1":65,"x2":434,"y2":658},{"color":"rgb(38, 44, 66)","x1":844,"y1":45,"x2":444,"y2":658},{"color":"rgb(153, 44, 126)","x1":842,"y1":4,"x2":562,"y2":46},{"color":"rgb(232, 169, 30)","x1":845,"y1":25,"x2":650,"y2":660},{"color":"rgb(126, 177, 100)","x1":846,"y1":5,"x2":660,"y2":660},{"color":"rgb(36, 227, 157)","x1":847,"y1":65,"x2":676,"y2":660},{"color":"rgb(153, 172, 127)","x1":848,"y1":45,"x2":684,"y2":661},{"color":"rgb(6, 174, 12)","x1":849,"y1":25,"x2":692,"y2":661},{"color":"rgb(214, 28, 236)","x1":340,"y1":140,"x2":314,"y2":140},{"color":"rgb(219, 249, 204)","x1":348,"y1":132,"x2":318,"y2":132},{"color":"rgb(98, 100, 6)","x1":356,"y1":132,"x2":326,"y2":132},{"color":"rgb(184, 76, 110)","x1":921,"y1":32,"x2":641,"y2":306},{"color":"rgb(101, 9, 50)","x1":923,"y1":66,"x2":234,"y2":659},{"color":"rgb(108, 202, 96)","x1":922,"y1":4,"x2":662,"y2":26},{"color":"rgb(136, 69, 154)","x1":924,"y1":62,"x2":26,"y2":5639},{"color":"rgb(131, 137, 215)","x1":926,"y1":86,"x2":468,"y2":658},{"color":"rgb(99, 228, 28)","x1":927,"y1":66,"x2":476,"y2":661},{"color":"rgb(171, 200, 87)","x1":928,"y1":46,"x2":482,"y2":662},{"color":"rgb(166, 24, 31)","x1":929,"y1":26,"x2":490,"y2":663},{"color":"rgb(89, 63, 63)","x1":372,"y1":132,"x2":346,"y2":130},{"color":"rgb(65, 241, 173)","x1":380,"y1":36,"x2":348,"y2":366},{"color":"rgb(166, 199, 33)","x1":388,"y1":132,"x2":350,"y2":126},{"color":"rgb(171, 4, 47)","x1":396,"y1":132,"x2":358,"y2":126},{"color":"rgb(230, 104, 253)","x1":100,"y1":132,"x2":74,"y2":1306},{"color":"rgb(68, 140, 219)","x1":404,"y1":132,"x2":380,"y2":132},{"color":"rgb(23, 140, 19)","x1":412,"y1":132,"x2":388,"y2":130},{"color":"rgb(233, 37, 100)","x1":420,"y1":132,"x2":396,"y2":130},{"color":"rgb(174, 248, 85)","x1":428,"y1":132,"x2":404,"y2":130},{"color":"rgb(5, 164, 141)","x1":108,"y1":132,"x2":82,"y2":1326},{"color":"rgb(125, 59, 180)","x1":436,"y1":132,"x2":412,"y2":130},{"color":"rgb(243, 75, 153)","x1":452,"y1":132,"x2":428,"y2":132},{"color":"rgb(90, 152, 58)","x1":460,"y1":36,"x2":428,"y2":366},{"color":"rgb(74, 224, 150)","x1":116,"y1":132,"x2":88,"y2":1326},{"color":"rgb(148, 244, 129)","x1":468,"y1":36,"x2":436,"y2":346},{"color":"rgb(236, 180, 98)","x1":476,"y1":132,"x2":454,"y2":130},{"color":"rgb(181, 179, 255)","x1":484,"y1":36,"x2":452,"y2":366},{"color":"rgb(142, 204, 13)","x1":492,"y1":140,"x2":472,"y2":140},{"color":"rgb(246, 4, 147)","x1":124,"y1":132,"x2":96,"y2":1326},{"color":"rgb(242, 75, 24)","x1":500,"y1":36,"x2":470,"y2":346},{"color":"rgb(149, 166, 15)","x1":508,"y1":132,"x2":478,"y2":122}]'),b=function(o){(0,x.Z)(e,o);var t=(0,a.Z)(e);function e(){var o;(0,c.Z)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return o=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,n.Z)(o),"canvas",void 0),(0,y.Z)((0,n.Z)(o),"canvas2",void 0),(0,y.Z)((0,n.Z)(o),"imageWidth",0),(0,y.Z)((0,n.Z)(o),"imageHeight",0),(0,y.Z)((0,n.Z)(o),"selectedPoint",null),(0,y.Z)((0,n.Z)(o),"selectedPoint2",null),(0,y.Z)((0,n.Z)(o),"offsetX",0),(0,y.Z)((0,n.Z)(o),"offsetY",0),(0,y.Z)((0,n.Z)(o),"newPoints",[]),(0,y.Z)((0,n.Z)(o),"points",[]),(0,y.Z)((0,n.Z)(o),"zoomFactor",1),(0,y.Z)((0,n.Z)(o),"zoomIncrement",.1),(0,y.Z)((0,n.Z)(o),"context",void 0),(0,y.Z)((0,n.Z)(o),"image",void 0),(0,y.Z)((0,n.Z)(o),"context2",void 0),(0,y.Z)((0,n.Z)(o),"image2",void 0),o}return(0,l.Z)(e,[{key:"mounted",value:function(){var o=this;this.points=h.map((function(o){return{color:o.color,initialX:o.x1,initialY:o.y1,x1:o.x1,y1:o.y1,initialX2:o.x2,initialY2:o.y2,x2:o.x2,y2:o.y2}})),this.context=this.canvas.getContext("2d"),this.image=new Image,this.image.src=r(41132),this.image.onload=function(){o.canvas.width=o.image.width,o.canvas.height=o.image.height,o.context.drawImage(o.image,0,0),o.imageWidth=o.image.width,o.imageHeight=o.image.height,o.drawPoints()},this.context2=this.canvas2.getContext("2d"),this.image2=new Image,this.image2.src=r(332),this.image2.onload=function(){o.canvas2.width=o.image2.width,o.canvas2.height=o.image2.height,o.context2.drawImage(o.image2,0,0),o.drawPoints()}}},{key:"drawCanvas",value:function(o,t,r){o.width=t.width,o.height=t.height,r.drawImage(t,0,0),this.drawPoints()}},{key:"drawPoints",value:function(){var o=this;this.clearCanvas(this.canvas,this.context),this.context.drawImage(this.image,0,0),this.clearCanvas(this.canvas2,this.context2),this.context2.drawImage(this.image2,0,0),this.points.forEach((function(t){o.context.fillStyle=t.color,o.context.beginPath(),o.context.arc(t.x1,t.y1,5,0,2*Math.PI),o.context.fill(),o.context2.fillStyle=t.color,o.context2.beginPath(),o.context2.arc(t.x2,t.y2,5,0,2*Math.PI),o.context2.fill()}))}},{key:"clearCanvas",value:function(o,t){t.clearRect(0,0,o.width,o.height)}},{key:"handleMouseDown",value:function(o){for(var t=this.canvas.getBoundingClientRect(),r=o.clientX-t.left,e=o.clientY-t.top,i=0;i<this.points.length;i++){var c=this.points[i],l=Math.sqrt(Math.pow(r-c.x1,2)+Math.pow(e-c.y1,2));if(l<=5)return this.selectedPoint=c,this.offsetX=r-c.x1,void(this.offsetY=e-c.y1)}}},{key:"handleMouseDown2",value:function(o){for(var t=this.canvas2.getBoundingClientRect(),r=o.clientX-t.left,e=o.clientY-t.top,i=0;i<this.points.length;i++){var c=this.points[i],l=Math.sqrt(Math.pow(r-c.x2,2)+Math.pow(e-c.y2,2));if(l<=5)return this.selectedPoint2=c,this.offsetX=r-c.x2,void(this.offsetY=e-c.y2)}}},{key:"handleMouseMove",value:function(o){if(this.selectedPoint){var t=this.canvas.getBoundingClientRect(),r=o.clientX-t.left,e=o.clientY-t.top;this.selectedPoint.x1=r-this.offsetX,this.selectedPoint.y1=e-this.offsetY,this.selectedPoint.y2=e-this.offsetY,this.drawPoints()}}},{key:"handleMouseMove2",value:function(o){if(this.selectedPoint2){var t=this.canvas2.getBoundingClientRect(),r=o.clientX-t.left;o.clientY,t.top;this.selectedPoint2.x2=r-this.offsetX,this.drawPoints()}}},{key:"handleMouseUp",value:function(){this.selectedPoint=null,this.selectedPoint2=null}},{key:"resetMove",value:function(o){this.points.forEach((function(t){t.color===o&&(t.x1=t.initialX,t.y1=t.initialY,t.x2=t.initialX2,t.y2=t.initialY2)})),this.drawPoints()}},{key:"deletePoint",value:function(o){var t=this.points.findIndex((function(t){return t.color===o}));-1!==t&&this.points.splice(t,1),this.drawPoints()}},{key:"submitNewPoint",value:function(){this.newPoints=this.points.map((function(o){return{color:o.color,x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2}})),console.warn(JSON.stringify(this.newPoints,null,"  "))}},{key:"zoomdezoom",value:function(o){var t=this;o.preventDefault();var r=o.deltaY||o.detail||o.wheelDelta,e=o.clientX-this.canvas.getBoundingClientRect().left,i=o.clientY-this.canvas.getBoundingClientRect().top,c=e/this.canvas.width,l=i/this.canvas.height;r<0?this.zoomFactor+=this.zoomIncrement:this.zoomFactor-=this.zoomIncrement,this.zoomFactor=Math.max(1,this.zoomFactor),this.zoomFactor=Math.min(30,this.zoomFactor);var n=this.image.width*this.zoomFactor,x=this.image.height*this.zoomFactor,a=e-c*n,y=i-l*x;this.clearCanvas(this.canvas,this.context),this.context.translate(a,y),this.context.drawImage(this.image,0,0,n,x),this.points.forEach((function(o){t.context.fillStyle=o.color,t.context.beginPath(),t.context.arc(o.x1*t.zoomFactor,o.y1*t.zoomFactor,5,0,2*Math.PI),t.context.fill()})),this.context.translate(-a,-y),this.clearCanvas(this.canvas2,this.context2),this.context2.translate(a,y),this.context2.drawImage(this.image2,0,0,n,x),this.points.forEach((function(o){t.context2.fillStyle=o.color,t.context2.beginPath(),t.context2.arc(o.x2*t.zoomFactor,o.y2*t.zoomFactor,5,0,2*Math.PI),t.context2.fill()})),this.context2.translate(-a,-y)}}]),e}(g.w3);(0,s.gn)([(0,g.Rl)("canvas")],b.prototype,"canvas",void 0),(0,s.gn)([(0,g.Rl)("canvas2")],b.prototype,"canvas2",void 0),b=(0,s.gn)([g.wA],b);var u=b,d=u,f=r(1001),v=(0,f.Z)(d,e,i,!1,null,"e4b74cce",null),m=v.exports},99002:function(o,t,r){r.r(t),r.d(t,{default:function(){return p}});var e=function(){var o=this,t=o._self._c;o._self._setupProxy;return t("div",{staticClass:"create"},[t("h1",{staticClass:"page-title"},[o._v(o._s(o.pageTitle))]),t("div",{staticClass:"form-container"},[t("el-form",{attrs:{"label-position":"top",model:o.formData}},[t("el-form-item",{attrs:{label:"Title"}},[t("el-input",{attrs:{type:"textarea"},model:{value:o.formData.title,callback:function(t){o.$set(o.formData,"title",t)},expression:"formData.title"}})],1),t("el-form-item",{attrs:{label:"Description"}},[t("el-input",{attrs:{type:"textarea"},model:{value:o.formData.body,callback:function(t){o.$set(o.formData,"body",t)},expression:"formData.body"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return o.submitForm()}}},[o._v(o._s(o.pageTitle))])],1)],1)],1)])},i=[],c=r(45226),l=r(27594),n=r(26520),x=r(32011),a=r(98361),y=r(54503),s=(r(92222),r(32389)),g=r(61283),h=r(606),b=(0,h.uD)("posts"),u=function(o){(0,x.Z)(r,o);var t=(0,a.Z)(r);function r(){var o;(0,c.Z)(this,r);for(var e=arguments.length,i=new Array(e),l=0;l<e;l++)i[l]=arguments[l];return o=t.call.apply(t,[this].concat(i)),(0,y.Z)((0,n.Z)(o),"pageTitle",""),(0,y.Z)((0,n.Z)(o),"isNew",!0),(0,y.Z)((0,n.Z)(o),"postId",0),(0,y.Z)((0,n.Z)(o),"formData",{title:"",id:0,body:""}),(0,y.Z)((0,n.Z)(o),"editPost",void 0),(0,y.Z)((0,n.Z)(o),"createPost",void 0),(0,y.Z)((0,n.Z)(o),"getPost",void 0),o}return(0,l.Z)(r,[{key:"created",value:function(){var o=this;this.postId=+this.$route.params.id,this.postId?(this.isNew=!1,this.pageTitle="Modify Article",this.getPost(this.postId).then((function(t){o.formData=t}))):this.pageTitle="Create new Article"}},{key:"submitForm",value:function(){this.isNew?this.createPost(this.formData):(this.formData.id=this.postId,this.editPost(this.formData))}}]),r}(g.w3);(0,s.gn)([b.Action],u.prototype,"editPost",void 0),(0,s.gn)([b.Action],u.prototype,"createPost",void 0),(0,s.gn)([b.Action],u.prototype,"getPost",void 0),u=(0,s.gn)([g.wA],u);var d=u,f=d,v=r(1001),m=(0,v.Z)(f,e,i,!1,null,"59dec75c",null),p=m.exports},332:function(o,t,r){o.exports=r.p+"img/left.c7cc8191.png"},41132:function(o,t,r){o.exports=r.p+"img/right.b94827e4.png"}}]);
//# sourceMappingURL=CreateItem-legacy.cf0d069a.js.map