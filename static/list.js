define("list", ["require", "exports", "react", "react-dom", "react-router-dom", "./containers/ArticleListOfMenu", "./containers/ArticleListOfTag"], function (require, exports, React, ReactDOM, react_router_dom_1, ArticleListOfMenu_1, ArticleListOfTag_1) {
    "use strict";
    exports.__esModule = true;
    ReactDOM.render(React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/@:tag", component: ArticleListOfTag_1["default"] }),
            React.createElement(react_router_dom_1.Route, { path: "/", component: ArticleListOfMenu_1["default"] }))), document.getElementById('app'));
});
