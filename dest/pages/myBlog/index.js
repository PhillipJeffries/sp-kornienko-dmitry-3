"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c="https://academy.directlinedev.com",i=document.querySelector(".filter-tags"),s=document.querySelector(".card-box");function e(e,t,n,r){var a=new XMLHttpRequest;a.open(e,c+t),a.send(),a.onload=function(){n(a)},a.onerror=function(){r&&r(a)}}function t(e){var t,n={},r=e.querySelectorAll("input"),a=e.querySelectorAll("textarea"),o=f(r);try{for(o.s();!(t=o.n()).done;){var c=t.value;switch(c.type){case"radio":c.checked&&(n[c.name]=c.value);break;case"checkbox":n[c.name]||(n[c.name]=[]),c.checked&&n[c.name].push(c.value);break;case"file":n[c.name]=c.files;break;default:n[c.name]=c.value}var l,i=f(a);try{for(i.s();!(l=i.n()).done;){var s=l.value;n[s.name]=s.value}}catch(e){i.e(e)}finally{i.f()}}}catch(e){o.e(e)}finally{o.f()}return n}function n(e,t){for(var n=e.querySelectorAll("input"),r=e.querySelectorAll("textarea"),a=0;a<n.length;a++){var o=n[a];switch(o.type){case"radio":t[o.name]&&t[o.name]===o.value&&(o.checked=!0);break;case"checkbox":if(t[o.name])if("object"===u(t[o.name]))for(var c=0;c<t[o.name].length;c++){t[o.name][c]===o.value&&(o.checked=!0)}else t[o.name]===o.value&&(o.checked=!0);break;default:o.value=t[o.name]}}var l,i=f(r);try{for(i.s();!(l=i.n()).done;){var s=l.value;s.value=t[s.name]}}catch(e){i.e(e)}finally{i.f()}}function r(){var e={};if(location.search)for(var t=location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("="),a=r[0],o=r[1];e[a]?"string"==typeof e[a]?e[a]=[e[a],o]:e[a].push(o):e[a]=o}return e}e("GET","/api/tags",function(e){var t,n=JSON.parse(e.response);if(n.success){for(var r=n.data,a=0;a<r.length;a++){var o=(t=r[a],'\n  <div>\n  <input type="checkbox" id=\''.concat(t.id,'\' name="tags" value="" class="filter-checkbox">\n  <label for=\'').concat(t.id,"' style='color: ").concat(t.color,"'>").concat(t.name,"</label>\n  </div>\n  "));i.insertAdjacentHTML("beforeend",o)}console.log("tags",r)}else alert("WTF?!")}),e("GET","/api/posts",function(e){var t,n=JSON.parse(e.response);if(n.success){for(var r=n.data,a="",o=0;o<r.length;o++)a+=(t=r[o],'\n  <div class="blog-card1">\n  <div class="blog-img-wrapper">\n    <img src="'.concat(c).concat(t.desktopPhotoUrl,'">\n  </div>\n  <div class="blog-card-info-wrapper">\n    <div class="blog-card-tags">\n      <div class="blog-card-tag"></div>\n    </div>\n    <div class="blog-meta-wrapper">\n      <span class="blog-card-date">').concat(t.date,'</span>\n      <span class="blog-card-views">').concat(t.views,'</span>\n      <span class="blog-card-comments">12345</span>\n    </div>\n    <h4 class="blog-card-title">').concat(t.title,'</h4>\n    <p class="blog-card-text">').concat(t.text,'</p>\n    <a href="#" class="blog-card-link">Go to this post</a>\n  </div>\n</div>\n  '));s.innerHTML=a,console.log("cards",r)}else alert("WTF?!")}),console.log("urlValues",r());var a=document.querySelector(".filterForm");a.addEventListener("submit",function(e){return e.preventDefault(),console.log("filterSubmitPush",t(e.target)),localStorage.setItem("filterForm",a),function(e){for(var t=[],n=Object.keys(e),r=0;r<n.length;r++)if("string"==typeof e[n[r]])t.push(n[r]+"="+e[n[r]]);else for(var a=0;a<e[n[r]].length;a++)t.push(n[r]+"="+e[n[r]][a]);window.history.replaceState({},document.title,"?"+t.join("&"))}(t(e.target)),t(e.target)}),n(a,localStorage.getItem("filterForm",a)),n(a,r());