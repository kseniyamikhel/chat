/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    function Form(_ref) {
        var el = _ref.el;

        _classCallCheck(this, Form);

        this.el = el;
        this._onSubmit = this._onSubmit.bind(this);
        this._initEvents();
    }

    _createClass(Form, [{
        key: 'onSubmit',
        value: function onSubmit(message) {
            console.info("You should define your own onSubmit!");
            console.log(message);
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.innerHTML = '\n            <form class="form">\n                <textarea name="message" placeholder="Write your message..." class="form__messagetext" required></textarea>\n                <input type="submit" value="Send" class="form__buttonsubmit" />\n            </form>\n        ';
        }
    }, {
        key: '_initEvents',
        value: function _initEvents() {
            this.el.addEventListener('submit', this._onSubmit);
        }
    }, {
        key: '_onSubmit',
        value: function _onSubmit(event) {
            event.preventDefault();
            var formData = this._getFormData();
            this.onSubmit(formData);
        }
    }, {
        key: '_getFormData',
        value: function _getFormData() {
            var names = this.el.querySelectorAll('[name]');
            var data = {};
            names.forEach(function (el) {
                data[el.name] = el.value;
            });
            data.time = new Date().toLocaleString('ru', { hour: '2-digit', minute: '2-digit' });
            return data;
        }
    }]);

    return Form;
}();

//export


exports.Form = Form;
//window.Form = Form;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
    function Http(_ref) {
        var path = _ref.path;

        _classCallCheck(this, Http);

        this.path = path;
    }

    _createClass(Http, [{
        key: 'makeRequest',
        value: function makeRequest(callback) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';


            var req = new XMLHttpRequest();

            req.open(type, this.path, true);

            req.addEventListener('readystatechange', function (event) {
                if (req.readyState !== 4) {
                    return;
                }

                var respData = JSON.parse(req.responseText);

                callback(respData);
            });

            req.send(JSON.stringify(data));
        }
    }]);

    return Http;
}();
//export


exports.Http = Http;
//window.Http = Http;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Messages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import


var _messagesTmpl = __webpack_require__(5);

var _messagesTmpl2 = _interopRequireDefault(_messagesTmpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const tmpl = window.chatTmpl;

var Messages = function () {
    function Messages(_ref) {
        var el = _ref.el,
            _ref$data = _ref.data,
            data = _ref$data === undefined ? { messages: [] } : _ref$data;

        _classCallCheck(this, Messages);

        this.el = el;
        this.data = data;
    }

    _createClass(Messages, [{
        key: 'setMessages',
        value: function setMessages(chatData) {
            this.data.messages = chatData.map(function (message) {
                return {
                    username: message.user,
                    messageContent: message.message || message.text,
                    time: message.time || message.date || new Date()
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.innerHTML = (0, _messagesTmpl2.default)(this.data);
        }
        /*addMessage(username, messageContent){
            let message = {
                username: username,
                messageContent: messageContent.message,
                time: messageContent.time
            };
            this.data.messages.push(message);
        }*/

    }]);

    return Messages;
}();

//export
//window.Messages = Messages;


exports.Messages = Messages;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(_ref) {
        var el = _ref.el;

        _classCallCheck(this, User);

        this.el = el;
        this._onSubmit = this._onSubmit.bind(this);
        this._initEvents();
    }

    _createClass(User, [{
        key: 'render',
        value: function render() {
            this.el.innerHTML = '\n            <form class="userForm">\n                <span>Hello! Name yourself, please: </span>\n                <input type="text" name="username" placeholder="Your name" class="userForm__username" required/>\n                <input type="submit" value="OK" class="userForm__buttonsubmit" />\n            </form>\n        ';
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(username) {
            console.info('You should define your own onSubmit!');
            console.log(username);
        }
    }, {
        key: '_initEvents',
        value: function _initEvents() {
            this.el.addEventListener('submit', this._onSubmit);
        }
    }, {
        key: '_onSubmit',
        value: function _onSubmit(event) {
            event.preventDefault();
            var formData = this._getFormData();
            this.welcome(formData.username);
            this.onSubmit(formData.username);
        }
    }, {
        key: 'welcome',
        value: function welcome(username) {
            this.el.innerHTML = '\n            <div class="welcome">\n                <span class="welcome__content">Welcome, ' + username + '!</span>  \n            </div>\n        ';
        }
    }, {
        key: '_getFormData',
        value: function _getFormData() {
            var names = this.el.querySelectorAll('[name]');
            var data = {};
            names.forEach(function (el) {
                data[el.name] = el.value;
            });
            return data;
        }
    }]);

    return User;
}();

//export


exports.User = User;
//window.User = User;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import


var _messages = __webpack_require__(2);

var _form = __webpack_require__(0);

var _user = __webpack_require__(3);

var _http = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const Messages = window.Messages;
//const Form = window.Form;
//const User = window.User;
//const Http = window.Http;

var App = function () {
    function App(_ref) {
        var el = _ref.el;

        _classCallCheck(this, App);

        this.el = el;
        this._createComponents();
        this._initComponents();
    }

    _createClass(App, [{
        key: '_createComponents',
        value: function _createComponents() {
            this.userWrap = document.createElement('div');
            this.userWrap.id = 'userWrap';
            this.formWrap = document.createElement('div');
            this.formWrap.id = 'formWrap';
            this.messagesWrap = document.createElement('div');
            this.messagesWrap.id = 'messagesWrap';
            this.el.appendChild(this.userWrap);
            this.el.appendChild(this.messagesWrap);
            this.el.appendChild(this.formWrap);
        }
    }, {
        key: '_initComponents',
        value: function _initComponents() {
            var _this = this;

            var user = new _user.User({ el: this.userWrap });
            user.render();
            user.onSubmit = function (username) {
                _this.username = username;
            };

            var form = new _form.Form({ el: this.formWrap });
            form.render();

            var messages = new _messages.Messages({ el: this.messagesWrap });
            messages.render();

            var http = new _http.Http({ path: 'https://chat-f30aa.firebaseio.com/messages.json' });
            setTimeout(function refresh() {
                http.makeRequest(function (data) {
                    var chatData = Object.values(data);
                    messages.setMessages(chatData);
                    messages.render();
                });
                setTimeout(refresh, 500);
            }, 500);

            form.onSubmit = function (message) {
                var sendData = {
                    user: _this.username || 'Anonymous',
                    message: message.message,
                    time: message.time
                };
                http.makeRequest(function (data) {
                    http.makeRequest(function (data) {
                        var chatData = Object.values(data);
                        messages.setMessages(chatData);
                        messages.render();
                    });
                }, sendData, 'POST');
                form.render();
            };
        }
    }]);

    return App;
}();

//export


window.App = App;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(6);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (messages) {// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"messages__message\"\u003E\u003Cspan class=\"message__author\"\u003E" + (pug.escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"message__time\"\u003E" + (pug.escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbr\u003E\u003Cdiv class=\"message__content\"\u003E" + (pug.escape(null == (pug_interp = message.messageContent) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"messages__message\"\u003E\u003Cspan class=\"message__author\"\u003E" + (pug.escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"message__time\"\u003E" + (pug.escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbr\u003E\u003Cdiv class=\"message__content\"\u003E" + (pug.escape(null == (pug_interp = message.messageContent) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(7).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);