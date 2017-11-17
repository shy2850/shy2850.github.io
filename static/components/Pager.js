define("components/Pager", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    exports.__esModule = true;
    var emptyFn = function (page) { };
    exports["default"] = function (_a) {
        var _b = _a.theme, theme = _b === void 0 ? 'primary' : _b, _c = _a.onChange, onChange = _c === void 0 ? emptyFn : _c, _d = _a.current, current = _d === void 0 ? 1 : _d, _e = _a.size, size = _e === void 0 ? 10 : _e, _f = _a.total, total = _f === void 0 ? 0 : _f;
        // 不需要分页
        if (total <= size) {
            return React.createElement("div", null);
        }
        var maxPage = Math.ceil(total / size);
        return React.createElement("nav", { className: "pagination", role: "navigation", "aria-label": "pagination" },
            React.createElement("ul", { className: "pagination-list" },
                React.createElement("li", null,
                    React.createElement("span", { className: "pagination-link button", disabled: current === 1, onClick: function (e) { return onChange(--current); } }, "\u4E0A\u4E00\u9875")),
                React.createElement("li", null,
                    React.createElement("span", { className: "pagination-link button is-" + theme }, current)),
                React.createElement("li", null,
                    React.createElement("span", { className: "pagination-link button", disabled: current === maxPage, onClick: function (e) { return onChange(++current); } }, "\u4E0B\u4E00\u9875"))));
    };
});
