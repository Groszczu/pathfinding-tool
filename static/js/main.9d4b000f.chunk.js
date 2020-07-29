(this["webpackJsonppathfinding-tool"]=this["webpackJsonppathfinding-tool"]||[]).push([[0],{24:function(n,e,t){n.exports=t(38)},29:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),c=t.n(o),i=(t(29),t(17)),u=t(1),l=t(2),s=t(3);function d(){var n=Object(l.a)(["\n      left: calc((100vw - ",") / 2);\n      top: 0;\n      position: absolute;\n      max-width: ",";\n    "]);return d=function(){return n},n}function f(){var n=Object(l.a)(["\n  margin: 0 auto;\n  min-width: ","px;\n  max-width: 100%;\n  background: var(--empty-node-clr);\n  border-radius: 10px;\n  overflow: hidden;\n  resize: horizontal;\n  border: 3px solid black;\n  ","\n"]);return f=function(){return n},n}function m(){var n=Object(l.a)(["\n  position: relative;\n  padding-bottom: ","%;\n  width: 100%;\n"]);return m=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(\n    ",",\n    calc(100% / ",")\n  );\n  grid-template-rows: repeat(\n    ",",\n    calc(100% / ",")\n  );\n  justify-content: center;\n  position: absolute;\n  top: 0;\n\n  margin: 0 auto;\n  user-select: none;\n\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return n},n}var p=s.b.div(b(),(function(n){return n.columns}),(function(n){return n.columns}),(function(n){return n.rows}),(function(n){return n.rows})),v=s.b.div(m(),(function(n){return n.aspectRatio})),h=s.b.div(f(),(function(n){return 6*n.columns}),(function(n){if(n.fullscreen){var e=window.screen,t=e.width,r=e.height>t?"100vmin":"".concat(n.aspectRatio,"vmax");return Object(s.a)(d(),r,r)}}));function g(n){var e=Object(r.useRef)(null);Object(r.useEffect)((function(){e.current.style.width="100%"}),[n.fullscreen]);var t=n.rows/n.columns*100;return a.a.createElement(h,{ref:e,fullscreen:n.fullscreen,aspectRatio:t,columns:n.columns},a.a.createElement(v,{aspectRatio:t},a.a.createElement(p,n)))}var y=t(5);function j(){var n=Object(l.a)(["\n  0% {\n    background-color: var(--visited-start-clr);\n    transform: scale(0.4, 0.4);\n    border-radius: 100%;\n    z-index: 2;\n  }\n  50% {\n    background-color: var(--visited-progress-clr);\n    transform: scale(1, 1);\n    border-radius: 0;\n    z-index: 2;\n  }\n  100% {\n    background-color: var(--visited-node-clr);\n    z-index: 0;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  0% {\n    transform: scale(1.4, 1.4);\n    z-index: 2;\n  }\n  100%{\n    transform: scale(1, 1);\n    z-index: 0;\n  }\n"]);return O=function(){return n},n}var x,w,k=Object(s.c)(O()),E=Object(s.c)(j());function M(){var n=Object(l.a)(["\n    background: ",";\n    box-shadow: 0px 0px 10px 5px rgba(252, 3, 3, 1);\n    z-index: 3;\n  "]);return M=function(){return n},n}function F(){var n=Object(l.a)(["\n    background: ",";\n    box-shadow: 0px 0px 10px 5px rgba(9, 135, 0, 1);\n    z-index: 3;\n  "]);return F=function(){return n},n}function N(){var n=Object(l.a)(["\n    background: ",";\n    animation: "," 0.3s linear;\n    transition: background-color 0.5s;\n  "]);return N=function(){return n},n}function S(){var n=Object(l.a)(["\n    background: ",";\n    animation: "," 1.4s linear;\n  "]);return S=function(){return n},n}function z(){var n=Object(l.a)(["\n    background: ",";\n    animation: "," 0.2s linear;\n  "]);return z=function(){return n},n}var T={empty:"empty_node",wall:"wall_node",visited:"visited_node",result:"result_node",start:"start_node",end:"end_node"},C=(new Set([T.empty,T.wall,T.visited,T.result]),new Set([T.empty,T.wall,T.start,T.end]));function A(n){return C.has(n)}var D=(x={},Object(y.a)(x,T.empty,"var(--empty-node-clr)"),Object(y.a)(x,T.wall,"var(--wall-node-clr)"),Object(y.a)(x,T.visited,"var(--visited-node-clr)"),Object(y.a)(x,T.result,"var(--result-node-clr)"),Object(y.a)(x,T.start,"var(--start-node-clr)"),Object(y.a)(x,T.end,"var(--end-node-clr)"),x),R=(w={},Object(y.a)(w,T.empty,""),Object(y.a)(w,T.wall,Object(s.a)(z(),D[T.wall],k)),Object(y.a)(w,T.visited,Object(s.a)(S(),D[T.visited],E)),Object(y.a)(w,T.result,Object(s.a)(N(),D[T.result],k)),Object(y.a)(w,T.start,Object(s.a)(F(),D[T.start])),Object(y.a)(w,T.end,Object(s.a)(M(),D[T.end])),w),I=T;function _(){var n=Object(l.a)(["\n  width: fill;\n  height: fill;\n  border: 1px solid var(--secondary-clr);\n\n  ","\n"]);return _=function(){return n},n}var P=s.b.span.attrs((function(n){var e=n.delay;return{style:{gridColumnStart:n.x+1,gridRowStart:n.y+1,gridColumnEnd:"span 1",gridRowEnd:"span 1",transitionDelay:"".concat(e,"ms"),animationDelay:"".concat(e,"ms")}}}))(_(),(function(n){return R[n.type]})),B=a.a.memo((function(n){var e=n.animationFrameTime,t=n.x,r=n.y,o=n.onMouseDown,c=n.onMouseOver,i=Object(u.c)((function(n){return n.nodes.nodes[r][t]}));return a.a.createElement(P,{delay:i.visitedIndex*e,type:i.type,x:i.x,y:i.y,onMouseDown:function(){return o(i)},onMouseOver:function(){return c(i)}})})),W=t(9);function H(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I.empty;return{x:n,y:e,type:t,visitedIndex:null}}function G(n,e){return!(!n||!e)&&(n.x===e.x&&n.y===e.y)}function U(n,e){return Math.abs(n.x-e.x)+Math.abs(n.y-e.y)===1}function q(n,e,t){return G(n,e)||G(n,t)}function J(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}var X="ready",L="running",$="done";var K=function(n,e){var t=function(n,e){return Array(e).fill(0).map((function(e,t){return Array(n).fill(0).map((function(n,e){return H(e,t)}))}))}(n,e),r=Math.floor(t.length/2),a=Math.floor(t[0].length/2),o={y:r,x:a},c={y:Math.floor(r/2),x:a};return t[o.y][o.x].type=I.start,t[c.y][c.x].type=I.end,{columns:n,rows:e,nodes:t,startNode:o,endNode:c,pathfinding:X}}(40,30),Q=Object(W.b)({name:"nodes",initialState:K,reducers:{changeColumns:function(n,e){var t=e.payload;n.columns=t},changeRows:function(n,e){var t=e.payload;n.rows=t},startPathfinding:function(n){n.pathfinding===X&&(n.pathfinding=L)},endPathfinding:function(n){n.pathfinding===L&&(n.pathfinding=$)},setNodesType:function(n,e){switch(n.pathfinding){case X:cn(n,e);break;case L:!function(n,e){var t=e.payload,r=t.nodes,a=t.type,o=n.startNode,c=n.endNode;switch(a){case I.visited:case I.result:r.forEach((function(e){if(!q(e,o,c)){var t=n.nodes[e.y][e.x];t.type=a,t.visitedIndex=e.visitedIndex,a===I.result&&(n.pathfinding=$)}}))}}(n,e);break;case $:!function(n,e){on(n),cn(n,e)}(n,e)}},clearNodes:on,resetNodes:function(){return K}}}),V=Q.actions,Y=Q.reducer,Z=(V.changeColumns,V.changeRows,V.startPathfinding),nn=V.endPathfinding,en=V.setNodesType,tn=V.clearNodes,rn=V.resetNodes,an=Y;function on(n){n.nodes=n.nodes.map((function(n){return n.map((function(n){return A(n.type)?n:H(n.x,n.y,I.empty)}))})),n.pathfinding=X}function cn(n,e){var t=e.payload,r=t.nodes,a=t.type,o=n.startNode,c=n.endNode;switch(a){case I.start:case I.end:if(1!==r.length)return;var i=r[0];if(q(i,o,c))return;var u=a===I.start?o:c,l=u.x,s=u.y;n.nodes[s][l].type=I.empty;var d=i.x,f=i.y;u.x=d,u.y=f,n.nodes[f][d].type=a;break;case I.empty:case I.wall:var m=n.nodes;r.forEach((function(n){q(n,o,c)||(m[n.y][n.x].type=a)}))}}var un=t(4),ln={comparer:function(n,e){return n.distanceFromStart-e.distanceFromStart},addHeuristics:function(n,e,t){return n.map((function(n){return Object(un.a)(Object(un.a)({},n),{},{distanceFromStart:n.type===I.start?0:1/0,previousNode:null})}))},map:function(n,e){var t=n.distanceFromStart+1;return U(n,e)?Object(un.a)(Object(un.a)({},e),{},{distanceFromStart:Math.min(e.distanceFromStart,t),previousNode:e.distanceFromStart>t?n:e.previousNode}):e},endCondition:function(n){return n.distanceFromStart===1/0}},sn={comparer:function(n,e){return n.combinedDistance-e.combinedDistance},addHeuristics:function(n,e,t){return n.map((function(n){var e=n.type===I.start?0:1/0,r=Math.ceil(J(n,t));return Object(un.a)(Object(un.a)({},n),{},{distanceFromStart:e,distanceToEnd:r,combinedDistance:e+r,previousNode:null})}))},map:function(n,e){var t=n.distanceFromStart+1,r=t+e.distanceToEnd;return U(n,e)?Object(un.a)(Object(un.a)({},e),{},{distanceFromStart:Math.min(e.distanceFromStart,t),combinedDistance:Math.min(e.combinedDistance,r),previousNode:e.distanceFromStart>r?n:e.previousNode}):e},endCondition:function(n){return n.combinedDistance===1/0}},dn={comparer:function(n,e){return(n.visited?n.distanceToEnd:Number.MAX_SAFE_INTEGER)-(e.visited?e.distanceToEnd:Number.MAX_SAFE_INTEGER)},addHeuristics:function(n,e,t){return n.map((function(n){var e=n.type===I.start,r=Math.ceil(J(n,t));return Object(un.a)(Object(un.a)({},n),{},{distanceToEnd:r,visited:e,previousNode:null})}))},map:function(n,e){return U(n,e)?Object(un.a)(Object(un.a)({},e),{},{visited:!0,previousNode:n}):e},endCondition:function(n){return!n.visited}};function fn(n,e,t,r){var a=[],o=n.flat().filter((function(n){return n.type!==I.wall})),c=r.addHeuristics(o,e,t),i=function(n){c.sort(r.comparer);var e=c[0];return r.endCondition(e)?{v:{visited:a,result:null}}:(c.shift(),c=c.map((function(n){return r.map(e,n)})),a.push(Object(un.a)(Object(un.a)({},e),{},{visitedIndex:n})),e.type===I.end?"break":void 0)};n:for(var u=0;0!==c.length;u++){var l=i(u);switch(l){case"break":break n;default:if("object"===typeof l)return l.v}}for(var s=[],d=0,f=a.find((function(n){return n.type===I.end})).previousNode;(null===(m=f)||void 0===m?void 0:m.type)!==I.start;f=f.previousNode,d++){var m;if(!f)return{visited:a,result:s};s.push(Object(un.a)(Object(un.a)({},f),{},{visitedIndex:d}))}return{visited:a,result:s}}function mn(n,e,t){return fn(n,e,t,sn)}function bn(n,e,t){return fn(n,e,t,ln)}function pn(n,e,t){return fn(n,e,t,dn)}var vn={dijkstra:"Dijkstra's",aStar:"A*",greedy:"Greedy"};var hn=vn,gn={fullscreen:!1,animationFrameTime:20,pathfindingAlgorithm:hn.dijkstra,drawTool:I.wall},yn=Object(W.b)({name:"tools",initialState:gn,reducers:{enterFullscreen:function(n){n.fullscreen=!0},exitFullscreen:function(n){n.fullscreen=!1},setAnimationFrameTime:function(n,e){var t=e.payload;n.animationFrameTime=t},setPathfindingAlgorithm:function(n,e){var t=e.payload;n.pathfindingAlgorithm=t},setDrawTool:function(n,e){var t=e.payload;A(t)&&(n.drawTool=t)}}}),jn=yn.reducer,On=yn.actions,xn=On.enterFullscreen,wn=On.exitFullscreen,kn=On.setAnimationFrameTime,En=On.setPathfindingAlgorithm,Mn=On.setDrawTool,Fn=jn,Nn=0,Sn=2,zn=function(n,e,t){e.current=t,n(Mn(t))},Tn=function(n){var e=Object(r.useRef)(!1),t=Object(r.useRef)(!1),a=Object(u.c)((function(n){return n.tools.drawTool})),o=Object(r.useRef)(a);Object(r.useEffect)((function(){o.current=a}),[a]);var c=Object(r.useCallback)((function(e){e.type===I.start||e.type===I.end?(zn(n,o,e.type),t.current=!0):n(en({nodes:[e],type:o.current}))}),[n]),i=Object(r.useCallback)((function(n){e.current&&c(n)}),[c]);return{handleMouseDown:function(t){t.button===Sn&&zn(n,o,I.empty),e.current=!0},handleMouseUp:function(r){switch(e.current=!1,r.button){case Nn:t.current&&zn(n,o,I.wall),t.current=!1;break;case Sn:zn(n,o,I.wall)}},onMouseDownOnNode:c,onMouseOverNode:i}},Cn=function(){var n=Object(u.c)((function(n){return n.nodes.columns})),e=Object(u.c)((function(n){return n.nodes.rows})),t=Object(u.c)((function(n){return n.tools.animationFrameTime})),r=Object(u.c)((function(n){return n.tools.fullscreen})),o=Object(u.b)(),c=Tn(o),l=c.handleMouseDown,s=c.handleMouseUp,d=c.onMouseDownOnNode,f=c.onMouseOverNode,m=Object(i.a)(Array(e).keys()),b=Object(i.a)(Array(n).keys());return a.a.createElement(g,{fullscreen:r,columns:n,rows:e,onMouseDownCapture:l,onMouseUp:s,onContextMenu:function(n){return n.preventDefault()}},m.map((function(n){return b.map((function(e){return a.a.createElement(B,{key:"".concat(e,"_").concat(n),x:e,y:n,animationFrameTime:t,onMouseDown:d,onMouseOver:f})}))})))};function An(){var n=Object(l.a)(["\n  margin: 0 auto;\n  width: 60%;\n  max-width: 1920px;\n  text-align: center;\n  border-radius: 10px;\n\n  @media (max-width: 1024px) {\n    width: 80%;\n  }\n\n  @media (max-width: 425px) {\n    width: 95%;\n  }\n\n  @media (max-width: 320px) {\n    width: 100%;\n  }\n"]);return An=function(){return n},n}var Dn=s.b.div(An());function Rn(){var n=Object(l.a)(["\n  font-size: 3rem;\n  color: var(--text-clr);\n  -webkit-text-stroke: 2px black;\n  margin-bottom: 0.2em;\n"]);return Rn=function(){return n},n}var In=s.b.h1(Rn()),_n=t(7);function Pn(){var n=Object(l.a)(["\n      & > * {\n        width: 100%;\n        margin: 0 !important;\n      }\n\n      & > * + * {\n        margin-top: 0.4em !important;\n      }\n\n      flex-direction: column;\n\n      position: fixed;\n      top: ",";\n      right: ",";\n      left: ",";\n      bottom: ",";\n      z-index: ",";\n      margin: 0.4rem;\n    "]);return Pn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n\n  font-size: var(--clamped-font-size);\n  padding: 0.4em;\n  margin: 0.8em 0;\n\n  color: var(--light-text-clr);\n  background-color: var(--light-background-clr);\n  border-radius: 10px;\n  border: 3px solid black;\n\n  & > * {\n    margin: 0;\n  }\n\n  ","\n"]);return Bn=function(){return n},n}var Wn=s.b.div(Bn(),(function(n){return n.fullscreen&&Object(s.a)(Pn(),n.top,n.right,n.left,n.bottom,n.zIndex)}));function Hn(){var n=Object(l.a)(["\n  width: 90%;\n  padding: 0.8em;\n\n  overflow: hidden;\n  appearance: none;\n  background-color: var(--empty-node-clr);\n  border: 3px solid black;\n  border-radius: 10px;\n\n  opacity: ",";\n\n  &::-webkit-slider-thumb {\n    appearance: none;\n    cursor: ew-resize;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border: 1px solid black;\n    background: var(--primary-clr);\n  }\n\n  &::-moz-range-thumb {\n    appearance: none;\n    cursor: ew-resize;\n    width: 16px;\n    height: 16px;\n    background: var(--primary-clr);\n    border-radius: 100%;\n    border: 1px solid black;\n  }\n\n  &::-ms-thumb {\n    appearance: none;\n    cursor: ew-resize;\n    width: 16px;\n    height: 16px;\n    background: var(--primary-clr);\n    border-radius: 100%;\n    border: 1px solid black;\n  }\n\n  &::-webkit-slider-runnable-track {\n    background-color: var(--visited-node-clr);\n    border-radius: 10px;\n    border: 1px solid black;\n  }\n\n  &::-moz-range-progress {\n    background-color: var(--visited-node-clr);\n  }\n\n  &::-ms-fill-lower {\n    background-color: var(--visited-node-clr);\n  }\n"]);return Hn=function(){return n},n}var Gn=s.b.input.attrs((function(){return{type:"range"}}))(Hn(),(function(n){return n.disabled?.3:1}));function Un(){var n=Object(l.a)(["\n  color: var(--light-text-clr);\n"]);return Un=function(){return n},n}var qn=s.b.label(Un());function Jn(){var n=Object(l.a)(["\n  display: inline-flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: center;\n  max-width: 450px;\n  max-height: 100%;\n  font-size: var(--clamped-font-size);\n  flex: 1 1 60px;\n"]);return Jn=function(){return n},n}var Xn=s.b.span(Jn(),(function(n){return n.direction})),Ln=function(){var n=Object(u.c)((function(n){return n.tools.animationFrameTime})),e=Object(u.c)((function(n){return n.nodes.pathfinding})),t=Object(u.b)(),o=Object(r.useState)(n),c=Object(_n.a)(o,2),i=c[0],l=c[1];Object(r.useEffect)((function(){l(n)}),[n]);var s=e===X;return a.a.createElement(Xn,{direction:"column"},a.a.createElement(qn,{htmlFor:"animation-speed-range"},"Animation: ",i,"ms"),a.a.createElement(Gn,{id:"animation-speed-range",value:i,disabled:!s,min:0,max:250,step:10,onChange:function(n){l(n.target.value)},onBlur:function(){i!==n&&t(kn(i))}}))};function $n(){var n=Object(l.a)(["\n  background-color: ",";\n"]);return $n=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  width: 90%;\n  color: var(--text-clr);\n  border-radius: 5px;\n  border: 3px solid black;\n  font-size: inherit;\n  padding: 0.2em 0.4em;\n  background-color: var(--empty-node-clr);\n"]);return Kn=function(){return n},n}var Qn=s.b.select(Kn()),Vn=s.b.option($n(),(function(n){return n.isSelected?"var(--empty-node-clr)":"var(--background-clr)"})),Yn=function(){var n=Object(u.c)((function(n){return n.tools.pathfindingAlgorithm})),e=Object(u.b)();return a.a.createElement(Xn,{direction:"column"},a.a.createElement(qn,{htmlFor:"algorithm-select"},"Algorithm"),a.a.createElement(Qn,{id:"algorithm-select",onChange:function(n){e(En(n.target.value))},value:n},Object.entries(hn).map((function(e){var t=Object(_n.a)(e,2),r=t[0],o=t[1];return a.a.createElement(Vn,{key:r,value:o,isSelected:n===o},o)}))))};function Zn(){var n=Object(l.a)(["\n      opacity: 1;\n      transform: scale(1.2, 1.2);\n      border-color: var(--secondary-clr);\n    "]);return Zn=function(){return n},n}function ne(){var n=Object(l.a)(["\n  border-radius: 10px;\n  background-color: ",";\n  font-size: var(--clamped-font-size);\n  color: var(--light-text-clr);\n  padding: ",";\n  text-align: center;\n  margin: 0.4rem;\n  border: 2px solid black;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.25s, transform 0.25s;\n\n  ","\n\n  :hover {\n    opacity: 1;\n  }\n"]);return ne=function(){return n},n}var ee=s.b.button(ne(),(function(n){return n.primary?"var(--primary-clr)":"var(--secondary-clr)"}),(function(n){return n.children?".5em .75em":".75em"}),(function(n){return n.selected&&Object(s.a)(Zn())})),te=function(){var n=Object(u.c)((function(n){return n.tools.drawTool}));return a.a.createElement(ee,{selected:!0,style:{backgroundColor:D[n],maxWidth:".75em",margin:".2em .4em"}})},re=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n.tools.drawTool}));return a.a.createElement(Xn,null,Array.from(C).map((function(t){return a.a.createElement(ee,{"aria-label":"".concat(t," button"),key:t,onClick:function(){return n(Mn(t))},selected:t===e,style:{backgroundColor:D[t],maxWidth:".75em",margin:".2em"}})})))},ae=function(){var n=Object(r.useState)(!1),e=Object(_n.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(!1),i=Object(_n.a)(c,2),l=i[0],s=i[1],d=Object(u.c)((function(n){return n.tools.fullscreen}));return a.a.createElement(Wn,{fullscreen:d,top:0,right:0,zIndex:100,onMouseEnter:d?function(){return o(!0)}:null,onMouseLeave:d?function(){return o(!1)}:null,onFocus:d?function(){return s(!0)}:null,onBlur:d?function(){return s(!1)}:null},!d||t||l?a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null),a.a.createElement(Ln,null),a.a.createElement(Yn,null)):a.a.createElement(te,null))},oe=t(12),ce=t.n(oe),ie=t(16),ue=function(){var n=Object(ie.a)(ce.a.mark((function n(e){return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,document.getElementById("root").requestFullscreen();case 2:e(xn());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),le=function(){var n=Object(ie.a)(ce.a.mark((function n(e){return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=document.fullscreen,!n.t0){n.next=4;break}return n.next=4,document.exitFullscreen();case 4:e(wn());case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),se=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n.tools.fullscreen}));return a.a.createElement(ee,{onClick:e?function(){n(le)}:function(){n(ue)},style:{position:"fixed",maxWidth:"none",left:0,bottom:0,zIndex:"2"}},e?"\u274c":"\ud83d\udd3c")},de=function(n,e,t,a,o){var c=Object(u.b)(),i=Object(r.useRef)(null);return[Object(r.useCallback)((function(){c(Z());var r=a(n,e,t),u=r.visited,l=r.result;u&&c(en({nodes:u,type:I.visited})),i.current=setTimeout((function(){return c(l?en({nodes:l,type:I.result}):nn())}),o*u.length)}),[a,n,e,t,o,c]),Object(r.useCallback)((function(){return clearTimeout(i.current)}),[i])]},fe=function(){var n=Object(u.c)((function(n){return n.tools.fullscreen})),e=Object(u.c)((function(n){return n.nodes.nodes})),t=Object(u.c)((function(n){return n.nodes.startNode})),r=Object(u.c)((function(n){return n.nodes.endNode})),o=Object(u.c)((function(n){return n.nodes.pathfinding})),c=Object(u.c)((function(n){return n.tools.pathfindingAlgorithm})),i=Object(u.c)((function(n){return n.tools.animationFrameTime})),l=Object(u.b)(),s=function(n){switch(n){case vn.dijkstra:return bn;case vn.aStar:return mn;case vn.greedy:return pn;default:return}}(c),d=de(e,t,r,s,i),f=Object(_n.a)(d,2),m=f[0],b=f[1];return a.a.createElement(Wn,{fullscreen:n,bottom:0,right:0,zIndex:99},o===X?a.a.createElement(ee,{onClick:function(){return m()},primary:!1},"Start"):a.a.createElement(ee,{onClick:function(){b(),l(tn())},primary:!0},"Clear"),a.a.createElement(ee,{onClick:function(){b(),l(rn())},primary:!0},"Reset"))};var me=function(){var n=Object(u.c)((function(n){return n.tools.fullscreen}));return a.a.createElement(Dn,null,n||a.a.createElement(In,null,"Pathfinding tool"),a.a.createElement(ae,null),a.a.createElement(Cn,null),a.a.createElement(fe,null),a.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be={nodes:an,tools:Fn},pe=Object(W.a)({reducer:be});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:pe},a.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9d4b000f.chunk.js.map