var LandingPage={config:{withTandC:!0},cache:{images:[]},init:function(a){"use strict";for(var b in a)LandingPage.config[b]=a[b];this.setBindings(),this.setPreload()},setBindings:function(){1==LandingPage.config.withTandC&&(document.getElementById("toggle-tc").onclick=function(){var a=document.getElementById("toggle-tc").getAttribute("data-terms-id"),b=document.getElementById(a);return b.style.display="none"==b.style.display?"block":"none",!1})},setPreload:function(){var a=this,b=document.getElementsByTagName("body")[0];setTimeout(function(){b.className="js-startup js-preload",setTimeout(function(){b.className="js-preload",a.cache.images.push(b.getAttribute("data-preload")),a.preloadImages(a.cache.images,function(){setTimeout(function(){b.className="js-preloaded"},200)})},100)},200)},preloadImages:function(a,b){var c=function(a,b){var c=0,d=[];a="[object Array]"===Object.prototype.toString.apply(a)?a:[a];for(var e=function(){c+=1,c===a.length&&b&&b(d)},f=0;f<a.length;f++)d[f]=new Image,d[f].onabort=e,d[f].onerror=e,d[f].onload=e,d[f].src=a[f]};c(a,function(a){b(a)})}},config=config||{};LandingPage.init(config);