(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(31),s=n.n(r),i=(n(37),n(38),n(8)),o=n(2),h=n(13),l=n.n(h),u=n(15),j=n(9),p=n(10),b=n(12),v=n(11),d=n(16),m=n.n(d),O=n(0),f=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={movies:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("3648f672b1c21855bded6f7b57b6e29a"));case 2:t=e.sent,this.setState({movies:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"HomePage"}),Object(O.jsx)("ul",{children:this.state.movies.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}]),n}(c.Component),x=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],value:""},e.setValue=function(t){e.setState({value:t.target.value})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("3648f672b1c21855bded6f7b57b6e29a"));case 2:t=e.sent,this.setState({movies:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.value,n=e.movies;return console.log(n),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:this.renderMovies,children:[Object(O.jsx)("input",{type:"text",value:t,onChange:this.setValue,className:"input"}),Object(O.jsx)("button",{type:"submit",children:"Search"})]})})}}]),n}(c.Component),g=n(18),y=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log(Number(this.props.match.params.movieId)),console.log(this.props.movies)}},{key:"componentDidUpdate",value:function(){console.log(Number(this.props.match.params.movieId)),console.log(this.props.movies)}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{children:"Cast List"})})}}]),n}(c.Component),w=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{children:"Reviews List"})})}}]),n}(c.Component),k=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={genres:[],poster_path:null,overview:null,title:null,vote_average:null},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("3648f672b1c21855bded6f7b57b6e29a","&language=en-US"));case 3:n=e.sent,console.log(n.data),this.setState(Object(g.a)({},n.data));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log(this.props.match.path);var t=this.state,n=t.genres,c=t.poster_path,a=t.overview,r=t.title,s=t.vote_average;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["MovieDetailsPage-",this.props.match.params.movieId]}),Object(O.jsx)("h2",{children:r}),Object(O.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(c),alt:r}),Object(O.jsxs)("h2",{children:["Movie rating: ",s]}),Object(O.jsx)("h2",{children:"Overview"}),Object(O.jsx)("p",{children:a}),Object(O.jsx)("h2",{children:"Genres"}),Object(O.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.name;return Object(O.jsx)("li",{children:n},t)}))}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(this.props.match.url,"/cast"),children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(this.props.match.url,"/reviews"),children:"Reviews"})})]}),Object(O.jsx)(o.a,{path:"".concat(this.props.match.path,"/cast"),render:function(t){return Object(O.jsx)(y,Object(g.a)(Object(g.a)({},t),{},{movies:e.state.movies}))}}),Object(O.jsx)(o.a,{path:"".concat(this.props.match.path,"/reviews"),component:w})]})}}]),n}(c.Component),C=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/",children:"HomePage"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/movies",children:"MoviesPage"})})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(O.jsx)(o.a,{exact:!0,path:"/movies",component:x}),Object(O.jsx)(o.a,{path:"/movies/:movieId",component:k})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsxs)(a.a.StrictMode,{children:[Object(O.jsx)(i.a,{children:Object(O.jsx)(C,{})}),","]}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.1207fea1.chunk.js.map