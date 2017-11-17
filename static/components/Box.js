define("components/Box", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function (_a) {
        var title = _a.title, keywords = _a.keywords, pathname = _a.pathname, _b = _a.theme, theme = _b === void 0 ? 'primary' : _b, description = _a.description;
        return React.createElement("div", { className: "box" },
            React.createElement("article", { className: "media" },
                React.createElement("div", { className: "media-content" },
                    React.createElement("div", { className: "content", style: { cursor: 'pointer' } },
                        React.createElement("h4", { onClick: function (e) { location.href = pathname; } }, title),
                        React.createElement("p", { onClick: function (e) { location.href = pathname; } }, description),
                        React.createElement("div", { className: "tags" }, keywords && keywords.map(function (tag) { return React.createElement("a", { href: "/#@" + tag, className: "tag is-" + theme }, tag); }))))));
    };
});
