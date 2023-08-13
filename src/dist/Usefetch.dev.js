"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Usefetch = function Usefetch(url) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      ispending = _useState4[0],
      setIspending = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      seterror = _useState6[1];

  (0, _react.useEffect)(function () {
    var abortCont = new AbortController();
    fetch(url, {
      signal: abortCont.signal
    }).then(function (res) {
      if (!res.ok) {
        throw Error("Could not fetch the data for that resources");
      }

      return res.json();
    }).then(function (data) {
      setData(data);
      setIspending(false);
      seterror(null);
    })["catch"](function (err) {
      if (err.name === 'AbortError') {
        console.log('fetch aborted');
      } else {
        setIspending(false);
        seterror(err.message);
      }
    });
    return function () {
      return abortCont.abort();
    };
  }, [url]);
  return {
    data: data,
    ispending: ispending,
    error: error
  };
};

var _default = Usefetch;
exports["default"] = _default;