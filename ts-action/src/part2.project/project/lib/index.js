"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports.C = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hello = 'zcl';
hello = '1';

var C = function C() {
  var _this = this;

  _classCallCheck(this, C);

  _defineProperty(this, "x", 10);

  _defineProperty(this, "getX", function () {
    return _this.x;
  });

  _defineProperty(this, "setX", function (newVal) {
    _this.x = newVal;
  });
};

exports.C = C;
var x = new C();
exports.x = x;

var y = _objectSpread({}, {
  some: "value"
});

exports.y = y;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJoZWxsbyIsIkMiLCJ4IiwibmV3VmFsIiwieSIsInNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQWEsR0FBRyxLQUFwQjtBQUNBQSxLQUFLLEdBQUcsR0FBUjs7SUFFYUMsQzs7Ozs7NkJBQ0MsRTs7Z0NBQ0w7QUFBQSxXQUFNLEtBQUksQ0FBQ0MsQ0FBWDtBQUFBLEc7O2dDQUNBLFVBQUNDLE1BQUQsRUFBb0I7QUFBRSxJQUFBLEtBQUksQ0FBQ0QsQ0FBTCxHQUFTQyxNQUFUO0FBQWtCLEc7Ozs7QUFHMUMsSUFBSUQsQ0FBQyxHQUFHLElBQUlELENBQUosRUFBUjs7O0FBQ0EsSUFBSUcsQ0FBQyxxQkFBUTtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFSLENBQUwiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGVsbG86IHN0cmluZyA9ICd6Y2wnXHJcbmhlbGxvID0gJzEnXHJcblxyXG5leHBvcnQgY2xhc3MgQyB7XHJcbiAgcHJpdmF0ZSB4ID0gMTA7XHJcbiAgZ2V0WCA9ICgpID0+IHRoaXMueDtcclxuICBzZXRYID0gKG5ld1ZhbDogbnVtYmVyKSA9PiB7IHRoaXMueCA9IG5ld1ZhbDsgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHggPSBuZXcgQygpO1xyXG5leHBvcnQgbGV0IHkgPSB7IC4uLnsgc29tZTogXCJ2YWx1ZVwiIH0gfTsiXX0=