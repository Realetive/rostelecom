"use strict";$(document).ready(function(){var o=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/table_kick/table_kick.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/table_kick/table_kick.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("table_kick finished!")}}),e=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/abduction/abduction.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/abduction/abduction.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("abduction finished!")}}),l=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/troll_roar/troll_roar.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/troll_roar/troll_roar.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("troll_roar finished!")}}),a=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/banner_fly/banner_fly.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/banner_fly/banner_fly.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("banner_fly finished!")}}),n=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/banner_throw/banner_throw.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/banner_throw/banner_throw.ogg"],autoplay:!1,loop:!1,onend:function(){a.play(),console.log("banner_throw finished!")}}),s=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/running/running.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/running/running.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("running finished!")}}),r=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/portal_open/portal_open.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/portal_open/portal_open.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("portal_open finished!")}}),i=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/moto/moto.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/moto/moto.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("moto finished!")}}),t=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/bike_fly/bike_fly.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/bike_fly/bike_fly.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("bike_fly finished!")}}),u=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/troll_roar_2/troll_roar_2.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/troll_roar_2/troll_roar_2.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("troll_roar_2 finished!")}}),d=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/dragon_roar/dragon_roar.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/dragon_roar/dragon_roar.ogg"],autoplay:!1,loop:!1,onend:function(){console.log("dragon_roar finished!")}}),c=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/fingers_click/fingers_click.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/fingers_click/fingers_click.ogg"],autoplay:!1,loop:!1,onend:function(){d.play(),console.log("fingers_click finished!")}});$("#fullpage").fullpage({css3:!0,fixedElements:"#header",loopBottom:!1,loopTop:!1,verticalCentered:!0,scrollOverflow:!0,afterLoad:function(a,d){switch(console.log("slide "+d),d){case 1:break;case 2:break;case 3:o.play();break;case 4:e.play();break;case 5:$("#layer-6-5").removeClass("visible").addClass("invisible"),$("#layer-6-4").removeClass("invisible").addClass("visible");break;case 6:setTimeout(function(){$("#layer-6-5").removeClass("invisible").addClass("visible"),$("#layer-6-4").removeClass("visible").addClass("invisible")},500),$("#layer-7-3").removeClass("push-center").addClass("push-bottom");break;case 7:$("#layer-6-5").removeClass("visible").addClass("invisible"),$("#layer-6-4").removeClass("invisible").addClass("visible"),setTimeout(function(){$("#layer-7-3").removeClass("push-bottom").addClass("push-center")},500);break;case 8:l.play(),$("#layer-7-3, #layer-9-5").removeClass("push-center").addClass("push-bottom"),$("#layer-9-3").removeClass("invisible").addClass("visible"),$("#layer-9-6").removeClass("visible").addClass("invisible");break;case 9:n.play(),s.stop(),setTimeout(function(){$("#layer-9-5").removeClass("push-bottom").addClass("push-center"),setTimeout(function(){$("#layer-9-6").removeClass("invisible").addClass("visible"),$("#layer-9-3").removeClass("visible").addClass("invisible")},500)},500);break;case 10:s.play(),$("#layer-9-5").removeClass("push-center").addClass("push-bottom"),$("#layer-9-3").removeClass("invisible").addClass("visible"),$("#layer-9-6").removeClass("visible").addClass("invisible");break;case 11:s.stop(),r.play();break;case 12:i.play();break;case 13:break;case 14:break;case 15:t.play();break;case 16:u.play();break;case 17:break;case 18:c.play();break;case 19:}}}),$('[data-toggle="tooltip"]').tooltip();var p=new Howl({urls:["https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/theme/theme.mp3","https://raw.githubusercontent.com/Realetive/rostelecom/gh-pages/sound/theme/theme.ogg"],autoplay:!0,loop:!0,onend:function(){console.log("Finished!")}});$(".mute-off, .mute-on").click(function(){$(".mute-off, .mute-on").toggleClass("hide show"),$(this).hasClass("mute-off")?(console.log("mute-off"),p.pause()):(console.log("mute-on"),p.play())}),$("#layer-4, #layer-5, #layer-14, #layer-18").parallax({calibrateX:!1,calibrateY:!0,invertX:!1,invertY:!0,limitX:!1,limitY:10,scalarX:2,scalarY:8,frictionX:.2,frictionY:.8,originX:0,originY:1})});