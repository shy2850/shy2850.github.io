var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define("containers/ArticleListOfMenu", ["require", "exports", "react", "../components/Box", "../components/Pager", "../config"], function (require, exports, React, Box_1, Pager_1, config) {
    "use strict";
    exports.__esModule = true;
    var _a = config.articles, articles = _a === void 0 ? [] : _a, theme = config.theme;
    var List = /** @class */ (function (_super) {
        __extends(List, _super);
        function List(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                size: 5,
                page: 1
            };
            return _this;
        }
        List.prototype.filterArticles = function () {
            // react-router-dom props
            var pathname = this.props.location.pathname;
            return articles.filter(function (article) { return article.pathname.includes(pathname); });
        };
        List.prototype.changePage = function (page) {
            this.setState({ page: page });
        };
        List.prototype.render = function () {
            var list = this.filterArticles();
            var _a = this.state, size = _a.size, page = _a.page;
            var min = size * (page - 1);
            var max = size * page;
            return list.length ? React.createElement("div", null,
                list.slice(min, max).map(function (item, i) { return React.createElement(Box_1["default"], __assign({ key: item.pathname, theme: theme }, item)); }),
                React.createElement(Pager_1["default"], { current: page, size: size, total: list.length, onChange: this.changePage.bind(this) })) : React.createElement("h2", { style: { textAlign: 'center' } }, "\u8BE5\u680F\u76EE\u4E0B\u8FD8\u6CA1\u6709\u6587\u7AE0\uFF01");
        };
        return List;
    }(React.Component));
    exports["default"] = List;
});
