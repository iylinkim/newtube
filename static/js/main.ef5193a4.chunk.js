(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,a){e.exports={video_list:"video_list_video_list__1UIYw",detail:"video_list_detail__3LdBB",list:"video_list_list__2r-xM"}},2:function(e,t,a){e.exports={makerLightGrey:"#ddd",makerLightGrey2:"#f8f8f8",makerWhite:"#fff",makerBlack:"#000",search_form:"search_header_search_form__3WKsL",light:"search_header_light__Q0U7L",dark:"search_header_dark__3aA9G",logo:"search_header_logo__tK0eh",search:"search_header_search__12JjY",search_btn:"search_header_search_btn__2un4Y",mode:"search_header_mode__30ptr",keywords:"search_header_keywords__2noK1",keyword:"search_header_keyword__3ss7Z",recent_search:"search_header_recent_search__3lQG9"}},25:function(e,t,a){},3:function(e,t,a){e.exports={makerLightGrey:"#ddd",mode:"toggleBtn_mode__1-cIi",mode_state:"toggleBtn_mode_state__3twvu",selected:"toggleBtn_selected__2Wf4T"}},31:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),i=a(17),s=a.n(i),o=(a(25),a(5)),l=a(3),d=a.n(l),_=function(e){var t=e.darkMode,a=e.setDarkMode,r="dark",i=function(e){e?localStorage.setItem(r,!0):localStorage.setItem(r,!1)},s=function(e){var c=e.target.innerText;t||"Dark"!==c?t&&"Light"===c&&a((function(e){return i(!e),!e})):a((function(e){return i(!e),!e}))};return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(r));if(null!==e)a(e),i(e);else{console.log("localStorage \ube44\uc5b4\uc788\uc74c");var t=window.matchMedia("(prefers-color-scheme: Dark)").matches;a(t),i(t)}}),[a]),Object(c.jsxs)("div",{className:t?"".concat(d.a.mode," ").concat(d.a.dark):d.a.mode,children:[Object(c.jsx)("p",{onClick:s,className:t?d.a.mode_state:"".concat(d.a.mode_state," ").concat(d.a.selected),children:"Light"}),Object(c.jsx)("p",{onClick:s,className:t?"".concat(d.a.mode_state," ").concat(d.a.selected):d.a.mode_state,children:"Dark"})]})},u=a(7),h=a.n(u),m=a(12),p=a(33),j=a(2),f=a.n(j),v=Object(n.memo)((function(e){var t=e.search,a=e.darkMode,r=e.setSelectedVideo,i=Object(n.useRef)(),s=Object(n.useState)([]),l=Object(o.a)(s,2),d=l[0],_=l[1],u=Object(n.useCallback)((function(e){e.preventDefault();var a=i.current.value;if(t(a),d.length>=6){var c=Object(m.a)(d);c.shift(),_((function(){return Object(m.a)(c)})),localStorage.setItem("keywords",JSON.stringify(d))}else d.length<6&&_((function(){return[].concat(Object(m.a)(d),[a])}));localStorage.setItem("keywords",JSON.stringify(d)),i.current.value=""}),[d,t]);Object(n.useEffect)((function(){localStorage.getItem("keywords")&&"undefined"!==localStorage.getItem("keywords")?(console.log("have ls"),_((function(){return JSON.parse(localStorage.getItem("keywords"))}))):console.log("empty ls")}),[]);var h=function(e){var a=e.currentTarget.innerText;t(a)};return Object(c.jsxs)("form",{className:a?"".concat(f.a.search_form," ").concat(f.a.dark):f.a.search_form,onSubmit:u,children:[Object(c.jsxs)("h1",{onClick:function(){r(null)},className:a?"".concat(f.a.logo," ").concat(f.a.dark):f.a.logo,children:[Object(c.jsx)("img",{src:"images/logo.png",alt:"youtube logo"}),Object(c.jsx)("span",{children:"Newtube"})]}),Object(c.jsxs)("div",{className:f.a.search,children:[Object(c.jsx)("input",{ref:i,type:"text",placeholder:"Search"}),Object(c.jsx)("button",{className:a?"".concat(f.a.search_btn," ").concat(f.a.dark):f.a.search_btn,children:Object(c.jsx)("img",{src:"images/search.png",alt:"search icon"})}),Object(c.jsxs)("ul",{className:f.a.keywords,children:[Object(c.jsx)("li",{className:f.a.recent_search,children:"recent search:"},Object(p.a)()),d&&d.map((function(e){return Object(c.jsx)("li",{className:a?"".concat(f.a.keyword," ").concat(f.a.dark):f.a.keyword,onClick:h,children:e},Object(p.a)())}))]})]})]})})),b=a(8),O=a.n(b),g=function(e){var t=e.video;return Object(c.jsxs)("div",{className:O.a.detail,children:[Object(c.jsx)("iframe",{type:"text/html",title:t.snippet.title,width:"100%",height:"500",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0"}),Object(c.jsx)("h2",{className:O.a.title,children:t.snippet.title}),Object(c.jsx)("h3",{className:O.a.channelTitle,children:t.snippet.channelTitle}),Object(c.jsx)("p",{className:O.a.description,children:t.snippet.description})]})},x=a(4),k=a.n(x),y=Object(n.memo)((function(e){var t=e.video.snippet,a=e.videoDetail,n=e.display,r=e.video,i=n?k.a.list:k.a.grid;return Object(c.jsxs)("li",{className:"".concat(k.a.video_item," ").concat(i),onClick:function(){a(r)},children:[Object(c.jsx)("p",{className:k.a.video_img,children:Object(c.jsx)("img",{src:t.thumbnails.medium.url,alt:t.title})}),Object(c.jsxs)("div",{className:k.a.video_text,children:[Object(c.jsx)("h2",{className:k.a.video_title,children:t.title}),Object(c.jsx)("p",{className:k.a.channel,children:t.channelTitle})]})]})})),w=a(11),N=a.n(w),S=function(e){var t=e.videos,a=e.videoDetail,n=e.display,r=n?N.a.detail:N.a.list;return Object(c.jsx)("ul",{className:"".concat(N.a.video_list," ").concat(r),children:t&&t.map((function(e){return Object(c.jsx)(y,{video:e,videoDetail:a,display:n},e.id)}))})};var I=function(e){var t=e.youtube,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),u=d[0],m=d[1],p=Object(n.useState)(!1),j=Object(o.a)(p,2),f=j[0],b=j[1];return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(c.jsxs)("div",{className:f?"".concat(h.a.wrap," ").concat(h.a.dark):h.a.wrap,children:[Object(c.jsx)(v,{search:function(e){t.search(e).then((function(e){s(e),m(null)}))},darkMode:f,setSelectedVideo:m}),Object(c.jsx)(_,{darkMode:f,setDarkMode:b}),Object(c.jsxs)("div",{className:h.a.video_container,children:[u&&Object(c.jsx)(g,{video:u}),Object(c.jsx)(S,{videos:i,videoDetail:function(e){m(e)},display:u})]})]})},D=a(16),T=a(9),M=a.n(T),B=a(15),R=a(18),J=a(19),L=function(){function e(t){Object(R.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(J.a)(e,[{key:"mostPopular",value:function(){var e=Object(B.a)(M.a.mark((function e(){var t,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(B.a)(M.a.mark((function e(t){var a,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c.items.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Q=(a(27),new L("AIzaSyAmFKQO3AxR7iRs6rnEFeZzKyNAPaTgcK8"));s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(I,{youtube:Q})}),document.getElementById("root"))},4:function(e,t,a){e.exports={mediaQuery992:"992px",mediaQuery768:"768px",mediaQuery576:"576px",makerWhite:"#fff",video_item:"video_item_video_item__kmn7f",list:"video_item_list__2jYRY",video_img:"video_item_video_img__3kYz-",video_text:"video_item_video_text__2JzhU",video_title:"video_item_video_title__2X378",channel:"video_item_channel__1dZ3U"}},7:function(e,t,a){e.exports={wrap:"app_wrap__1a09C",dark:"app_dark__1HEs_",app:"app_app__cewju",video_info:"app_video_info__1oFbI",video_container:"app_video_container__25DAK"}},8:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",title:"video_detail_title__30Sij",channelTitle:"video_detail_channelTitle__iQMqd",description:"video_detail_description__3nW_r"}}},[[31,1,2]]]);
//# sourceMappingURL=main.ef5193a4.chunk.js.map