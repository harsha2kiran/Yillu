(function(){var j=null;var m=null;var S=null;var I=null;var X=null;var b=10000;var W=null;var L=30000;var G=null;var d=false;var O=null;var E=null;var T=null;var Y=false;var g=null;var B=false;var Q=null;if(!window.tinymce){alert("It looks like the PaintWeb plugin for TinyMCE cannot run.TinyMCE was not detected!");return }if(!window.XMLHttpRequest||!document.createElement("canvas").getContext){return }if(!window.getComputedStyle){try{if(!window.getComputedStyle(document.createElement("div"),null)){return }}catch(k){return }}var A,F,C;var M=(function(){var p=navigator.userAgent.toLowerCase();A=window.opera||/\b(opera|presto)\b/.test(p);F=!A&&/\b(applewebkit|webkit)\b/.test(p);C=!A&&!F&&/\bgecko\b/.test(p);if(F){return true}if(C){var o=/\brv\:([^;\)\s]+)[;\)\s]/.exec(p);if(o&&o[1]){o=o[1].replace(/[^\d]+$/,"").split(".");if(o[0]==1&&o[1]<=9&&o[2]<1){return true}}}return false})();function a(){if(window.PaintWeb){N();return }var o=E.getParam("paintweb_config"),p=o.tinymce.paintwebFolder+"paintweb.js";tinymce.ScriptLoader.load(p,N)}function N(){if(I){return }I=new PaintWeb();S=I.config;var p=E.getParam("paintweb_config"),o=E.getElement();pNode=O.parentNode,pwContainer=tinymce.DOM.create("div");pNode.insertBefore(pwContainer,o.nextSibling);if(!PaintWeb.baseFolder){PaintWeb.baseFolder=p.tinymce.paintwebFolder}p.imageLoad=T;p.guiPlaceholder=pwContainer;if(!p.lang){p.lang=E.getParam("language")}for(var q in p){S[q]=p[q]}S.tinymceEditor=E;I.init(J)}function J(o){if(m&&E){m.value=E.getLang("paintweb.overlayButton","Edit")}if(o.state!==PaintWeb.INIT_DONE){alert("PaintWeb initialization failed! "+o.errorMessage);I=null;T=null;E=null;return }Q=window.pwlib;I.events.add("imageSave",P);I.events.add("imageSaveResult",i);if(X){I.events.add("viewportSizeChange",l)}Z(o)}function c(){d=true;I.imageSave()}function f(){e()}function P(p){if(S.tinymce.imageSaveDataURL){p.preventDefault();var o=Y?"-":E.dom.getAttrib(T,"src");I.events.dispatch(new Q.appEvent.imageSaveResult(true,o,p.dataURL))}else{if(X){if(W){clearTimeout(W);W=null}X.firstChild.innerHTML=E.getLang("paintweb.statusSavingImage","Saving image...")}}}function i(o){if(!T){return }if(X){if(o.successful){X.firstChild.innerHTML=E.getLang("paintweb.statusImageSaved","Image save was succesful!")}else{X.firstChild.innerHTML=E.getLang("paintweb.statusImageSaveFailed","Image save failed!")}if(W){clearTimeout(W)}W=setTimeout(K,b)}if(o.successful){B=true;if(o.urlNew){g=o.urlNew}if(d){d=false;e()}}}function K(){if(!X){return }W=null;X.firstChild.innerHTML=E.getLang("paintweb.statusImageEditing","You are editing an image from TinyMCE.")}function l(o){tinymce.DOM.setStyle(X,"width",o.width)}function U(){if(!R(T)){T=null;return false}if(G){clearTimeout(G);G=null}var p=function(){if(m&&m.parentNode){m.value=E.getLang("paintweb.overlayLoading","Loading PaintWeb...")}if(I){I.imageLoad(T);Z()}else{a()}};var r=function(){tinymce.dom.Event.remove(T,"load",r);Y=false;p()};var q=E.dom.getAttrib(T,"src");if(q.substr(0,5)==="data:"){Y=true}else{Y=false}var o=Y&&M?E.getParam("paintweb_config"):null;if(o&&o.tinymce.imageDataURLfilter){tinymce.util.XHR.send({url:o.tinymce.imageDataURLfilter,content_type:"application/x-www-form-urlencoded",data:"url=-&dataURL="+encodeURIComponent(q),error:function(){if(window.console&&console.log){console.log("TinyMCE.PaintWeb: failed to preload image data URL!")}p()},success:function(s){if(!s){p();return }s=tinymce.util.JSON.parse(s);if(!s||!s.successful||!s.urlNew){p();return }g=T.src;tinymce.dom.Event.add(T,"load",r);E.dom.setAttrib(T,"src",s.urlNew)}})}else{p()}q=null;return true}function V(r,o,t,u,v){r=parseInt(r)||0;o=parseInt(o)||0;if(!r||!o){return }var p=tinymce.DOM.create("canvas",{width:r,height:o}),q=p.getContext("2d");if(t){q.fillStyle=t;q.fillRect(0,0,r,o)}E.execCommand("mceInsertContent",false,'<img id="paintwebNewImage">');var s=E.dom.get("paintwebNewImage");if(!s||s.id!=="paintwebNewImage"||s.nodeName.toLowerCase()!=="img"){return }if(u){E.dom.setAttrib(s,"alt",u)}if(v){E.dom.setAttrib(s,"title",v)}s.src=p.toDataURL();s.setAttribute("mce_src",s.src);s.removeAttribute("id");T=s;p=null;q=null;U()}function Z(p){var o=null;if(S.tinymce.syncViewportSize){o=tinymce.DOM.getRect(E.getContentAreaContainer())}tinymce.DOM.setStyle(O,"display","none");S.tinymceEditor=E;if(!p||p.type!=="appInit"){I.gui.show()}if(o&&o.w&&o.h){I.gui.resizeTo(o.w+"px",o.h+"px")}if(X){K();var q=S.guiPlaceholder;if(!X.parentNode){q.parentNode.insertBefore(X,q)}}}function e(){I.gui.hide();if(m&&E){m.value=E.getLang("paintweb.overlayButton","Edit")}if(X&&X.parentNode){O.parentNode.removeChild(X)}if(g){if(g.substr(0,5)!=="data:"){E.dom.setAttrib(T,"src",g)}else{T.src=g;if(T.hasAttribute("mce_src")){T.setAttribute("mce_src",g)}}g=null}else{if(!Y&&B){var p=E.dom.getAttrib(T,"src"),o=(new Date()).getMilliseconds()*Math.round(Math.random()*100);if(p.indexOf("?")===-1){p+="?"+o}else{if(/\?[0-9]+$/.test(p)){p=p.replace(/\?[0-9]+$/,"?"+o)}else{if(/&[0-9]+$/.test(p)){p=p.replace(/&[0-9]+$/,"&"+o)}else{p+="&"+o}}}E.dom.setAttrib(T,"src",p)}}O.style.display="";T=null;B=false;E.focus();if(!G){G=setTimeout(n,L)}}function n(){if(I){I.destroy();var o=S.guiPlaceholder.parentNode;o.removeChild(S.guiPlaceholder);I=null;S=null;G=null}}function h(){if(T){return }var p=this.selection.getNode(),o=p.nodeName.toLowerCase();if(o!=="img"&&m&&m.parentNode&&m._targetImage){p=m._targetImage;o=p.nodeName.toLowerCase()}E=this;O=this.getContainer();T=p;if(!U()&&o!=="img"){this.windowManager.open({file:j+"/newimage.html",width:350+parseInt(this.getLang("paintweb.dlg_delta_width",0)),height:200+parseInt(this.getLang("paintweb.dlg_delta_height",0)),inline:1},{plugin_url:j,newImageFn:V})}}function R(s){if(!s){return false}var o=s.src;if(s.nodeName.toLowerCase()!=="img"||!o){return false}var r=o.indexOf(":"),q=o.substr(0,r+1).toLowerCase();if(q==="data:"){return true}if(q!=="http:"&&q!=="https:"){return false}var p=o.replace(/^https?:\/\//i,"");r=p.indexOf("/");if(r>-1){p=p.substr(0,r)}if(p!==window.location.host){return false}return true}function D(o,t){if(!m||!o||!t){return }var r=5,s=5,q=null,p;if(t.parentNode.nodeName.toLowerCase()==="a"){p=t.parentNode.parentNode;q=t.parentNode.nextSibling}else{p=t.parentNode;q=t.nextSibling}m._targetImage=t;o.dom.setStyles(m,{top:(t.offsetTop+r)+"px",left:(t.offsetLeft+s)+"px"});m.value=o.getLang("paintweb.overlayButton","Edit");p.insertBefore(m,q)}function H(q){if(!m||!q||!q.getDoc){return }var o,p,s;if(m){if(m.parentNode){s=m.parentNode;s.removeChild(m)}m._targetImage=null}o=q.getDoc();if(!o||!o.getElementsByClassName){return }p=o.getElementsByClassName(m.className);for(var r=0;r<p.length;r++){s=p[r].parentNode;s.removeChild(p[r])}}tinymce.PluginManager.requireLangPack("paintweb");tinymce.create("tinymce.plugins.paintweb",{init:function(o,q){var r=this;j=q;o.addCommand("paintwebEdit",h,o);o.addButton("paintwebEdit",{title:"paintweb.toolbarButton",cmd:"paintwebEdit",image:j+"/img/paintweb2.gif"});if(A){o.onKeyUp.add(this.edNodeChange);o.onMouseUp.add(this.edNodeChange)}else{o.onNodeChange.add(this.edNodeChange)}var p=o.getParam("paintweb_config")||{};if(!p.tinymce){p.tinymce={}}if(p.tinymce.contextMenuItem&&o.plugins.contextmenu){o.plugins.contextmenu.onContextMenu.add(this.pluginContextMenu)}o.onSubmit.add(this.edSubmit);if(p.tinymce.overlayButton){o.onBeforeGetContent.add(H);o.onInit.add(function(t){H(t);t.onKeyDown.addToTop(r.overlayButtonEvent);t.onMouseDown.addToTop(r.overlayButtonEvent)});m=tinymce.DOM.create("input",{type:"button","class":"paintweb_tinymce_overlayButton",style:"position:absolute",value:o.getLang("paintweb.overlayButton","Edit")})}if(p.tinymce.dblclickHandler){o.onDblClick.add(this.edDblClick)}if(p.tinymce.pluginBar){X=tinymce.DOM.create("div",{"class":"paintweb_tinymce_status",style:"display:none"});var u=tinymce.DOM.create("input",{type:"button","class":"paintweb_tinymce_save",title:o.getLang("paintweb.imageSaveButtonTitle","Save the image and return to TinyMCE."),value:o.getLang("paintweb.imageSaveButton","Save")});u.addEventListener("click",c,false);var s=tinymce.DOM.create("input",{type:"button","class":"paintweb_tinymce_cancel",title:o.getLang("paintweb.cancelEditButtonTitle","Cancel image edits and return to TinyMCE."),value:o.getLang("paintweb.cancelEditButton","Cancel")});s.addEventListener("click",f,false);var v=tinymce.DOM.create("span");X.appendChild(v);X.appendChild(u);X.appendChild(s)}},edNodeChange:function(p){var o=p.controlManager,r=p.selection.getNode();if(!r||m&&m._targetImage&&r&&r.className===m.className){return }var q=!R(r);if(r.nodeName.toLowerCase()==="img"&&q){o.setDisabled("paintwebEdit",true);o.setActive("paintwebEdit",false)}else{o.setDisabled("paintwebEdit",false);o.setActive("paintwebEdit",!q)}if(!m){return }if(!q){D(p,r)}else{if(m._targetImage){m._targetImage=null}}},overlayButtonEvent:function(o,p){var q=p.type==="mousedown"?p.target:o.selection.getNode();if(!T&&p.type==="mousedown"&&m&&q&&q.className===m.className&&m._targetImage){E=o;O=o.getContainer();T=m._targetImage;U()}else{if(q&&q.nodeName.toLowerCase()!=="img"){H(o)}}},edDblClick:function(o,p){if(!T&&R(p.target)){E=o;O=o.getContainer();T=p.target;p.target.focus();U()}},edSubmit:function(o,p){if(!T||!I){return }if(!I.image.modified){e();o.save();return }p.preventDefault();if(X){var q=o.getLang("paintweb.submitUnsaved","The image is not saved! You cannot submit the form. Please save the image changes, or cancel image editing, then try again.");X.firstChild.innerHTML=q;if(W){clearTimeout(W)}W=setTimeout(K,b);X.tabIndex=5;X.focus();X.tabIndex=-1}if(typeof S.tinymce.onSubmitUnsaved==="function"){S.tinymce.onSubmitUnsaved(p,o,I)}},pluginContextMenu:function(p,q,o){if(R(o)){q.add({title:"paintweb.contextMenuEdit",cmd:"paintwebEdit",image:j+"/img/paintweb2.gif"})}},getInfo:function(){return{longname:"PaintWeb - online painting application",author:"Mihai Şucan",authorurl:"http://www.robodesign.ro/mihai",infourl:"http://code.google.com/p/paintweb",version:"0.9"}}});tinymce.PluginManager.add("paintweb",tinymce.plugins.paintweb)})();