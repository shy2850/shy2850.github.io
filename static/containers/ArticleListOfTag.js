var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),__assign=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};define("containers/ArticleListOfTag",["require","exports","react","../components/Box","../components/Pager","../config"],function(t,e,n,r,o,i){"use strict";e.__esModule=!0;var a=i.articles,s=void 0===a?[]:a,c=i.theme,u=function(t){function e(e){var n=t.call(this,e)||this;return n.state={size:5,page:1},n}return __extends(e,t),e.prototype.filterArticles=function(){var t=this.props.match.params.tag;return s.filter(function(e){return~e.keywords.indexOf(t)})},e.prototype.changePage=function(t){this.setState({page:t})},e.prototype.render=function(){var t=this.filterArticles(),e=this.state,i=e.size,a=e.page,s=i*(a-1),u=i*a;return t.length?n.createElement("div",null,t.slice(s,u).map(function(t,e){return n.createElement(r.default,__assign({key:t.pathname,theme:c},t))}),n.createElement(o.default,{current:a,size:i,total:t.length,onChange:this.changePage.bind(this)})):n.createElement("h2",{style:{textAlign:"center"}},"该标签还没有文章！")},e}(n.Component);e.default=u});