(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().da("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.H=a;this.ma("click",this.onClick,this);this.la("title",g.uP(a,e,"i"));g.Te(this,g.hQ(b.xb(),this.element))},P5=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.dl=!1;this.player=a;this.L(a,"minimized",this.Fh);this.L(a,"onStateChange",this.HO)},Q5=function(a){g.NO.call(this,a);
this.o=new P5(this.player);this.o.hide();g.zO(this.player,this.o.element,4);a.app.M.o&&(this.load(),g.I(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(O5,g.U);O5.prototype.onClick=function(){this.H.oa("onExpandMiniplayer")};g.t(P5,g.U);g.k=P5.prototype;
g.k.show=function(){this.Gc=new g.Vn(this.Kn,null,this);this.Gc.start();if(!this.dl){this.tooltip=new g.FS(this.player,this);g.A(this,this.tooltip);g.zO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.ub=new g.aQ(this.player);g.A(this,this.ub);this.Ri=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.A(this,this.Ri);this.Ri.ba(this.element);this.L(this.Ri.element,"click",this.qC);var a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.sN()]});
g.A(this,a);a.ba(this.Ri.element);this.L(a.element,"click",this.Cl);a=new O5(this.player,this);g.A(this,a);a.ba(this.Ri.element);this.kj=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.A(this,this.kj);this.kj.ba(this.Ri.element);this.L(this.kj.element,"click",this.qC);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.A(this,b);b.ba(this.kj.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.A(this,a);a.ba(this.kj.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.A(this,c);c.ba(this.kj.element);this.LC=new g.FR(this.player,this,!1);g.A(this,this.LC);this.LC.ba(b.element);b=new g.DR(this.player,this);g.A(this,b);b.ba(a.element);this.nextButton=new g.FR(this.player,this,!0);g.A(this,this.nextButton);this.nextButton.ba(c.element);this.hg=new g.uS(this.player,this);g.A(this,this.hg);this.hg.ba(this.Ri.element);this.hc=new g.JR(this.player,this);g.A(this,this.hc);g.zO(this.player,this.hc.element,4);this.Fq=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.A(this,
this.Fq);g.zO(this.player,this.Fq.element,4);a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.sN()]});g.A(this,a);a.ba(this.Fq.element);this.L(a.element,"click",this.Cl);a=new g.U({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.HN()]});g.A(this,a);a.ba(this.Fq.element);this.L(a.element,"click",this.GM);this.L(this.player,"presentingplayerstatechange",this.Eb);this.L(this.player,"appresize",this.Oa);this.L(this.player,
"fullscreentoggled",this.Oa);this.Oa();this.dl=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.U.prototype.hide.call(this);this.player.app.M.o||(this.dl&&this.hc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.U.prototype.X.call(this)};
g.k.Cl=function(){this.player.stopVideo();this.player.oa("onCloseMiniplayer")};
g.k.GM=function(){this.player.playVideo()};
g.k.qC=function(a){if(a.target===this.Ri.element||a.target===this.kj.element)g.P(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.hH(g.jN(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.oa("onExpandMiniplayer")};
g.k.Fh=function(){g.I(this.player.getRootNode(),"ytp-player-minimized",this.player.app.M.o)};
g.k.Yc=function(){this.hc.Wb();this.hg.Wb()};
g.k.Kn=function(){this.Yc();this.Gc&&this.Gc.start()};
g.k.Eb=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Oa=function(){this.hc.setPosition(0,g.iO(this.player).getPlayerSize().width,!1);this.hc.Yw()};
g.k.HO=function(a){this.player.app.M.o&&(0===a?this.hide():this.show())};
g.k.xb=function(){return this.tooltip};
g.k.Mc=function(){return!1};
g.k.ne=function(){return!1};
g.k.Nf=function(){return!1};
g.k.tw=function(){};
g.k.mj=function(){};
g.k.Fm=function(){};
g.k.xj=function(){return null};
g.k.Vk=function(){return new g.Jh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Il=function(a,b,c,d,e){var f=0,h=d=0,l=g.gi(a);if(b){c=g.bo(b,"ytp-prev-button")||g.bo(b,"ytp-next-button");var m=g.bo(b,"ytp-play-button"),n=g.bo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.di(b,this.element),h=b.x,f=b.y-12):n&&(h=g.bo(b,"ytp-miniplayer-button-top-left"),f=g.di(b,this.element),b=g.gi(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.iO(this.player).getPlayerSize().width;e=f+(e||0);l=g.Xd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Kh=function(){};
g.k.jh=function(){return!1};g.t(Q5,g.NO);Q5.prototype.create=function(){};
Q5.prototype.dg=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.YO.miniplayer=Q5;})(_yt_player);
