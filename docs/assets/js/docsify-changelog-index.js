"use strict";window.$docsify.plugins=[].concat((n,e)=>{var t,o;localStorage&&(t=!0),window.changelogDisplayHandler=function(){if(document.getElementById("CHANGELOG_RENDERER").classList.toggle("show"),t&&null===localStorage.getItem(o)){document.getElementById("CHANGELOG_NOTIFY").remove(),localStorage.setItem(o,!0)}document.getElementById("CHANGELOG_RENDERER").classList.contains("show")?window.addEventListener("click",a):window.removeEventListener("click",a)};let i=document.querySelector("nav.app-nav");if(null===i&&(i=document.querySelector("nav"),null===i))return void console.error("[Docsify-plugin-changelog] : please Write the nav element statically and set the loadNavbar option to false");const c=i.outerHTML.split("\n");function a(n){1!=document.getElementById("CHANGELOG_RENDERER").contains(n.target)&&1!=document.querySelector("nav").contains(n.target)&&document.getElementById("CHANGELOG_RENDERER").classList.contains("show")&&(document.getElementById("CHANGELOG_RENDERER").classList.remove("show"),window.removeEventListener("click",a))}n.ready((function(){e.config.changelog&&!e.config.loadNavbar&&function(){const n=new XMLHttpRequest;n.onreadystatechange=function(){!function(n){var a;const l=JSON.stringify(n);t&&localStorage.getItem(l)?a='<a href="javascript:void(0)" onClick="window.changelogDisplayHandler(); return false;" id="CHANGELOG">CHANGELOG</a>\n                <div id="CHANGELOG_RENDERER">\n                  <div class="CL_content">\n                    <div class="CL_content-body"></div>\n                  </div>\n                </div>':(a='<a href="javascript:void(0)" onClick="window.changelogDisplayHandler(); return false;" id="CHANGELOG"><i id="CHANGELOG_NOTIFY"></i>  CHANGELOG</a>\n                <div id="CHANGELOG_RENDERER">\n                  <div class="CL_content">\n                    <div class="CL_content-body"></div>\n                  </div>\n                </div>',o=l);i.innerHTML=c.map(n=>n.trim()).slice(1,c.length-1).concat(a.split("\n").map(n=>n.trim())).concat(c.slice(-1,-1)).join("\n");const s=e.compiler._marked.parse(n);document.querySelector("#CHANGELOG_RENDERER .CL_content .CL_content-body").innerHTML=s}(` ${this.responseText} \n # {docsify-ignore-all} `)},n.open("GET",e.config.changelog,!0),n.send()}()}))},window.$docsify.plugins);