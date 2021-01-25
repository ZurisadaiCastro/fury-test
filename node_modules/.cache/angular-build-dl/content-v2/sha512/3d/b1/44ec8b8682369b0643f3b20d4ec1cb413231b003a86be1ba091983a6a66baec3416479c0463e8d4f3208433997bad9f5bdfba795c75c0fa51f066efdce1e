(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-components-components-module~pages-forms-form-elements-form-elements-module"], {
    /***/
    "3+Ks":
    /*!***************************************************!*\
      !*** ./node_modules/lodash-es/_basePropertyOf.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * The base implementation of `_.propertyOf` without support for deep paths.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Function} Returns the new accessor function.
       */


      function basePropertyOf(object) {
        return function (key) {
          return object == null ? undefined : object[key];
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = basePropertyOf;
      /***/
    },

    /***/
    "36No":
    /*!***************************************************!*\
      !*** ./node_modules/lodash-es/_escapeHtmlChar.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function No(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _basePropertyOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_basePropertyOf.js */
      "3+Ks");
      /** Used to map characters to HTML entities. */


      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      /**
       * Used by `_.escape` to convert characters to HTML entities.
       *
       * @private
       * @param {string} chr The matched character to escape.
       * @returns {string} Returns the escaped character.
       */

      var escapeHtmlChar = Object(_basePropertyOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(htmlEscapes);
      /* harmony default export */

      __webpack_exports__["default"] = escapeHtmlChar;
      /***/
    },

    /***/
    "Dpjh":
    /*!******************************************!*\
      !*** ./node_modules/lodash-es/escape.js ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function Dpjh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _escapeHtmlChar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_escapeHtmlChar.js */
      "36No");
      /* harmony import */


      var _toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toString.js */
      "efZk");
      /** Used to match HTML entities and HTML characters. */


      var reUnescapedHtml = /[&<>"']/g,
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      /**
       * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
       * corresponding HTML entities.
       *
       * **Note:** No other characters are escaped. To escape additional
       * characters use a third-party library like [_he_](https://mths.be/he).
       *
       * Though the ">" character is escaped for symmetry, characters like
       * ">" and "/" don't need escaping in HTML and have no special meaning
       * unless they're part of a tag or unquoted attribute value. See
       * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
       * (under "semi-related fun fact") for more details.
       *
       * When working with HTML you should always
       * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
       * XSS vectors.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escape('fred, barney, & pebbles');
       * // => 'fred, barney, &amp; pebbles'
       */

      function escape(string) {
        string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, _escapeHtmlChar_js__WEBPACK_IMPORTED_MODULE_0__["default"]) : string;
      }
      /* harmony default export */


      __webpack_exports__["default"] = escape;
      /***/
    },

    /***/
    "ECCn":
    /*!***********************************************!*\
      !*** ./node_modules/highlight.js/lib/core.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ECCn(module, exports) {
      // https://github.com/substack/deep-freeze/blob/master/index.js

      /** @param {any} obj */
      function deepFreeze(obj) {
        Object.freeze(obj);
        var objIsFunction = typeof obj === 'function';
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          if (Object.hasOwnProperty.call(obj, prop) && obj[prop] !== null && (typeof obj[prop] === "object" || typeof obj[prop] === "function") // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
          // TODO: remove in the future
          && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
          }
        });
        return obj;
      }

      var Response = /*#__PURE__*/function () {
        /**
         * @param {CompiledMode} mode
         */
        function Response(mode) {
          _classCallCheck(this, Response);

          // eslint-disable-next-line no-undefined
          if (mode.data === undefined) mode.data = {};
          this.data = mode.data;
        }

        _createClass(Response, [{
          key: "ignoreMatch",
          value: function ignoreMatch() {
            this.ignore = true;
          }
        }]);

        return Response;
      }();
      /**
       * @param {string} value
       * @returns {string}
       */


      function escapeHTML(value) {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
      }
      /**
       * performs a shallow merge of multiple objects into one
       *
       * @template T
       * @param {T} original
       * @param {Record<string,any>[]} objects
       * @returns {T} a single new object
       */


      function inherit(original) {
        /** @type Record<string,any> */
        var result = {};

        for (var key in original) {
          result[key] = original[key];
        }

        for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          objects[_key - 1] = arguments[_key];
        }

        objects.forEach(function (obj) {
          for (var _key2 in obj) {
            result[_key2] = obj[_key2];
          }
        });
        return (
          /** @type {T} */
          result
        );
      }
      /* Stream merging */

      /**
       * @typedef Event
       * @property {'start'|'stop'} event
       * @property {number} offset
       * @property {Node} node
       */

      /**
       * @param {Node} node
       */


      function tag(node) {
        return node.nodeName.toLowerCase();
      }
      /**
       * @param {Node} node
       */


      function nodeStream(node) {
        /** @type Event[] */
        var result = [];

        (function _nodeStream(node, offset) {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === 3) {
              offset += child.nodeValue.length;
            } else if (child.nodeType === 1) {
              result.push({
                event: 'start',
                offset: offset,
                node: child
              });
              offset = _nodeStream(child, offset); // Prevent void elements from having an end tag that would actually
              // double them in the output. There are more void elements in HTML
              // but we list only those realistically expected in code display.

              if (!tag(child).match(/br|hr|img|input/)) {
                result.push({
                  event: 'stop',
                  offset: offset,
                  node: child
                });
              }
            }
          }

          return offset;
        })(node, 0);

        return result;
      }
      /**
       * @param {any} original - the original stream
       * @param {any} highlighted - stream of the highlighted source
       * @param {string} value - the original source itself
       */


      function mergeStreams(original, highlighted, value) {
        var processed = 0;
        var result = '';
        var nodeStack = [];

        function selectStream() {
          if (!original.length || !highlighted.length) {
            return original.length ? original : highlighted;
          }

          if (original[0].offset !== highlighted[0].offset) {
            return original[0].offset < highlighted[0].offset ? original : highlighted;
          }
          /*
          To avoid starting the stream just before it should stop the order is
          ensured that original always starts first and closes last:
           if (event1 == 'start' && event2 == 'start')
            return original;
          if (event1 == 'start' && event2 == 'stop')
            return highlighted;
          if (event1 == 'stop' && event2 == 'start')
            return original;
          if (event1 == 'stop' && event2 == 'stop')
            return highlighted;
           ... which is collapsed to:
          */


          return highlighted[0].event === 'start' ? original : highlighted;
        }
        /**
         * @param {Node} node
         */


        function open(node) {
          /** @param {Attr} attr */
          function attributeString(attr) {
            return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
          } // @ts-ignore


          result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
        }
        /**
         * @param {Node} node
         */


        function close(node) {
          result += '</' + tag(node) + '>';
        }
        /**
         * @param {Event} event
         */


        function render(event) {
          (event.event === 'start' ? open : close)(event.node);
        }

        while (original.length || highlighted.length) {
          var stream = selectStream();
          result += escapeHTML(value.substring(processed, stream[0].offset));
          processed = stream[0].offset;

          if (stream === original) {
            /*
            On any opening or closing tag of the original markup we first close
            the entire highlighted node stack, then render the original tag along
            with all the following original tags at the same offset and then
            reopen all the tags on the highlighted stack.
            */
            nodeStack.reverse().forEach(close);

            do {
              render(stream.splice(0, 1)[0]);
              stream = selectStream();
            } while (stream === original && stream.length && stream[0].offset === processed);

            nodeStack.reverse().forEach(open);
          } else {
            if (stream[0].event === 'start') {
              nodeStack.push(stream[0].node);
            } else {
              nodeStack.pop();
            }

            render(stream.splice(0, 1)[0]);
          }
        }

        return result + escapeHTML(value.substr(processed));
      }

      var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        escapeHTML: escapeHTML,
        inherit: inherit,
        nodeStream: nodeStream,
        mergeStreams: mergeStreams
      });
      /**
       * @typedef {object} Renderer
       * @property {(text: string) => void} addText
       * @property {(node: Node) => void} openNode
       * @property {(node: Node) => void} closeNode
       * @property {() => string} value
       */

      /** @typedef {{kind?: string, sublanguage?: boolean}} Node */

      /** @typedef {{walk: (r: Renderer) => void}} Tree */

      /** */

      var SPAN_CLOSE = '</span>';
      /**
       * Determines if a node needs to be wrapped in <span>
       *
       * @param {Node} node */

      var emitsWrappingTags = function emitsWrappingTags(node) {
        return !!node.kind;
      };
      /** @type {Renderer} */


      var HTMLRenderer = /*#__PURE__*/function () {
        /**
         * Creates a new HTMLRenderer
         *
         * @param {Tree} parseTree - the parse tree (must support `walk` API)
         * @param {{classPrefix: string}} options
         */
        function HTMLRenderer(parseTree, options) {
          _classCallCheck(this, HTMLRenderer);

          this.buffer = "";
          this.classPrefix = options.classPrefix;
          parseTree.walk(this);
        }
        /**
         * Adds texts to the output stream
         *
         * @param {string} text */


        _createClass(HTMLRenderer, [{
          key: "addText",
          value: function addText(text) {
            this.buffer += escapeHTML(text);
          }
          /**
           * Adds a node open to the output stream (if needed)
           *
           * @param {Node} node */

        }, {
          key: "openNode",
          value: function openNode(node) {
            if (!emitsWrappingTags(node)) return;
            var className = node.kind;

            if (!node.sublanguage) {
              className = "".concat(this.classPrefix).concat(className);
            }

            this.span(className);
          }
          /**
           * Adds a node close to the output stream (if needed)
           *
           * @param {Node} node */

        }, {
          key: "closeNode",
          value: function closeNode(node) {
            if (!emitsWrappingTags(node)) return;
            this.buffer += SPAN_CLOSE;
          }
          /**
           * returns the accumulated buffer
          */

        }, {
          key: "value",
          value: function value() {
            return this.buffer;
          } // helpers

          /**
           * Builds a span element
           *
           * @param {string} className */

        }, {
          key: "span",
          value: function span(className) {
            this.buffer += "<span class=\"".concat(className, "\">");
          }
        }]);

        return HTMLRenderer;
      }();
      /** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */

      /** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */

      /**  */


      var TokenTree = /*#__PURE__*/function () {
        function TokenTree() {
          _classCallCheck(this, TokenTree);

          /** @type DataNode */
          this.rootNode = {
            children: []
          };
          this.stack = [this.rootNode];
        }

        _createClass(TokenTree, [{
          key: "add",

          /** @param {Node} node */
          value: function add(node) {
            this.top.children.push(node);
          }
          /** @param {string} kind */

        }, {
          key: "openNode",
          value: function openNode(kind) {
            /** @type Node */
            var node = {
              kind: kind,
              children: []
            };
            this.add(node);
            this.stack.push(node);
          }
        }, {
          key: "closeNode",
          value: function closeNode() {
            if (this.stack.length > 1) {
              return this.stack.pop();
            } // eslint-disable-next-line no-undefined


            return undefined;
          }
        }, {
          key: "closeAllNodes",
          value: function closeAllNodes() {
            while (this.closeNode()) {
              ;
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this.rootNode, null, 4);
          }
          /**
           * @typedef { import("./html_renderer").Renderer } Renderer
           * @param {Renderer} builder
           */

        }, {
          key: "walk",
          value: function walk(builder) {
            // this does not
            return this.constructor._walk(builder, this.rootNode); // this works
            // return TokenTree._walk(builder, this.rootNode);
          }
          /**
           * @param {Renderer} builder
           * @param {Node} node
           */

        }, {
          key: "top",
          get: function get() {
            return this.stack[this.stack.length - 1];
          }
        }, {
          key: "root",
          get: function get() {
            return this.rootNode;
          }
        }], [{
          key: "_walk",
          value: function _walk(builder, node) {
            var _this = this;

            if (typeof node === "string") {
              builder.addText(node);
            } else if (node.children) {
              builder.openNode(node);
              node.children.forEach(function (child) {
                return _this._walk(builder, child);
              });
              builder.closeNode(node);
            }

            return builder;
          }
          /**
           * @param {Node} node
           */

        }, {
          key: "_collapse",
          value: function _collapse(node) {
            if (typeof node === "string") return;
            if (!node.children) return;

            if (node.children.every(function (el) {
              return typeof el === "string";
            })) {
              // node.text = node.children.join("");
              // delete node.children;
              node.children = [node.children.join("")];
            } else {
              node.children.forEach(function (child) {
                TokenTree._collapse(child);
              });
            }
          }
        }]);

        return TokenTree;
      }();
      /**
        Currently this is all private API, but this is the minimal API necessary
        that an Emitter must implement to fully support the parser.
      
        Minimal interface:
      
        - addKeyword(text, kind)
        - addText(text)
        - addSublanguage(emitter, subLanguageName)
        - finalize()
        - openNode(kind)
        - closeNode()
        - closeAllNodes()
        - toHTML()
      
      */

      /**
       * @implements {Emitter}
       */


      var TokenTreeEmitter = /*#__PURE__*/function (_TokenTree) {
        _inherits(TokenTreeEmitter, _TokenTree);

        var _super = _createSuper(TokenTreeEmitter);

        /**
         * @param {*} options
         */
        function TokenTreeEmitter(options) {
          var _this2;

          _classCallCheck(this, TokenTreeEmitter);

          _this2 = _super.call(this);
          _this2.options = options;
          return _this2;
        }
        /**
         * @param {string} text
         * @param {string} kind
         */


        _createClass(TokenTreeEmitter, [{
          key: "addKeyword",
          value: function addKeyword(text, kind) {
            if (text === "") {
              return;
            }

            this.openNode(kind);
            this.addText(text);
            this.closeNode();
          }
          /**
           * @param {string} text
           */

        }, {
          key: "addText",
          value: function addText(text) {
            if (text === "") {
              return;
            }

            this.add(text);
          }
          /**
           * @param {Emitter & {root: DataNode}} emitter
           * @param {string} name
           */

        }, {
          key: "addSublanguage",
          value: function addSublanguage(emitter, name) {
            /** @type DataNode */
            var node = emitter.root;
            node.kind = name;
            node.sublanguage = true;
            this.add(node);
          }
        }, {
          key: "toHTML",
          value: function toHTML() {
            var renderer = new HTMLRenderer(this, this.options);
            return renderer.value();
          }
        }, {
          key: "finalize",
          value: function finalize() {
            return true;
          }
        }]);

        return TokenTreeEmitter;
      }(TokenTree);
      /**
       * @param {string} value
       * @returns {RegExp}
       * */


      function escape(value) {
        return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
      }
      /**
       * @param {RegExp | string } re
       * @returns {string}
       */


      function source(re) {
        if (!re) return null;
        if (typeof re === "string") return re;
        return re.source;
      }
      /**
       * @param {...(RegExp | string) } args
       * @returns {string}
       */


      function concat() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var joined = args.map(function (x) {
          return source(x);
        }).join("");
        return joined;
      }
      /**
       * @param {RegExp} re
       * @returns {number}
       */


      function countMatchGroups(re) {
        return new RegExp(re.toString() + '|').exec('').length - 1;
      }
      /**
       * Does lexeme start with a regular expression match at the beginning
       * @param {RegExp} re
       * @param {string} lexeme
       */


      function startsWith(re, lexeme) {
        var match = re && re.exec(lexeme);
        return match && match.index === 0;
      } // join logically computes regexps.join(separator), but fixes the
      // backreferences so they continue to match.
      // it also places each individual regular expression into it's own
      // match group, keeping track of the sequencing of those match groups
      // is currently an exercise for the caller. :-)

      /**
       * @param {(string | RegExp)[]} regexps
       * @param {string} separator
       * @returns {string}
       */


      function join(regexps) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "|";
        // backreferenceRe matches an open parenthesis or backreference. To avoid
        // an incorrect parse, it additionally matches the following:
        // - [...] elements, where the meaning of parentheses and escapes change
        // - other escape sequences, so we do not misparse escape sequences as
        //   interesting elements
        // - non-matching or lookahead parentheses, which do not capture. These
        //   follow the '(' with a '?'.
        var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
        var numCaptures = 0;
        var ret = '';

        for (var i = 0; i < regexps.length; i++) {
          numCaptures += 1;
          var offset = numCaptures;
          var re = source(regexps[i]);

          if (i > 0) {
            ret += separator;
          }

          ret += "(";

          while (re.length > 0) {
            var match = backreferenceRe.exec(re);

            if (match == null) {
              ret += re;
              break;
            }

            ret += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);

            if (match[0][0] === '\\' && match[1]) {
              // Adjust the backreference.
              ret += '\\' + String(Number(match[1]) + offset);
            } else {
              ret += match[0];

              if (match[0] === '(') {
                numCaptures++;
              }
            }
          }

          ret += ")";
        }

        return ret;
      } // Common regexps


      var IDENT_RE = '[a-zA-Z]\\w*';
      var UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
      var NUMBER_RE = '\\b\\d+(\\.\\d+)?';
      var C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float

      var BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...

      var RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
      /**
      * @param { Partial<Mode> & {binary?: string | RegExp} } opts
      */

      var SHEBANG = function SHEBANG() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var beginShebang = /^#![ ]*\//;

        if (opts.binary) {
          opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
        }

        return inherit({
          className: 'meta',
          begin: beginShebang,
          end: /$/,
          relevance: 0,

          /** @type {ModeCallback} */
          "on:begin": function onBegin(m, resp) {
            if (m.index !== 0) resp.ignoreMatch();
          }
        }, opts);
      }; // Common modes


      var BACKSLASH_ESCAPE = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
      };
      var APOS_STRING_MODE = {
        className: 'string',
        begin: '\'',
        end: '\'',
        illegal: '\\n',
        contains: [BACKSLASH_ESCAPE]
      };
      var QUOTE_STRING_MODE = {
        className: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [BACKSLASH_ESCAPE]
      };
      var PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };
      /**
       * Creates a comment mode
       *
       * @param {string | RegExp} begin
       * @param {string | RegExp} end
       * @param {Mode | {}} [modeOptions]
       * @returns {Partial<Mode>}
       */

      var COMMENT = function COMMENT(begin, end) {
        var modeOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var mode = inherit({
          className: 'comment',
          begin: begin,
          end: end,
          contains: []
        }, modeOptions);
        mode.contains.push(PHRASAL_WORDS_MODE);
        mode.contains.push({
          className: 'doctag',
          begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
          relevance: 0
        });
        return mode;
      };

      var C_LINE_COMMENT_MODE = COMMENT('//', '$');
      var C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
      var HASH_COMMENT_MODE = COMMENT('#', '$');
      var NUMBER_MODE = {
        className: 'number',
        begin: NUMBER_RE,
        relevance: 0
      };
      var C_NUMBER_MODE = {
        className: 'number',
        begin: C_NUMBER_RE,
        relevance: 0
      };
      var BINARY_NUMBER_MODE = {
        className: 'number',
        begin: BINARY_NUMBER_RE,
        relevance: 0
      };
      var CSS_NUMBER_MODE = {
        className: 'number',
        begin: NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
        relevance: 0
      };
      var REGEXP_MODE = {
        // this outer rule makes sure we actually have a WHOLE regex and not simply
        // an expression such as:
        //
        //     3 / something
        //
        // (which will then blow up when regex's `illegal` sees the newline)
        begin: /(?=\/[^/\n]*\/)/,
        contains: [{
          className: 'regexp',
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [BACKSLASH_ESCAPE, {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }]
        }]
      };
      var TITLE_MODE = {
        className: 'title',
        begin: IDENT_RE,
        relevance: 0
      };
      var UNDERSCORE_TITLE_MODE = {
        className: 'title',
        begin: UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var METHOD_GUARD = {
        // excludes method names from keyword processing
        begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      /**
       * Adds end same as begin mechanics to a mode
       *
       * Your mode must include at least a single () match group as that first match
       * group is what is used for comparison
       * @param {Partial<Mode>} mode
       */

      var END_SAME_AS_BEGIN = function END_SAME_AS_BEGIN(mode) {
        return Object.assign(mode, {
          /** @type {ModeCallback} */
          'on:begin': function onBegin(m, resp) {
            resp.data._beginMatch = m[1];
          },

          /** @type {ModeCallback} */
          'on:end': function onEnd(m, resp) {
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
          }
        });
      };

      var MODES = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IDENT_RE: IDENT_RE,
        UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
        NUMBER_RE: NUMBER_RE,
        C_NUMBER_RE: C_NUMBER_RE,
        BINARY_NUMBER_RE: BINARY_NUMBER_RE,
        RE_STARTERS_RE: RE_STARTERS_RE,
        SHEBANG: SHEBANG,
        BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
        APOS_STRING_MODE: APOS_STRING_MODE,
        QUOTE_STRING_MODE: QUOTE_STRING_MODE,
        PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
        COMMENT: COMMENT,
        C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
        HASH_COMMENT_MODE: HASH_COMMENT_MODE,
        NUMBER_MODE: NUMBER_MODE,
        C_NUMBER_MODE: C_NUMBER_MODE,
        BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
        CSS_NUMBER_MODE: CSS_NUMBER_MODE,
        REGEXP_MODE: REGEXP_MODE,
        TITLE_MODE: TITLE_MODE,
        UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
        METHOD_GUARD: METHOD_GUARD,
        END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
      }); // keywords that should have no default relevance value

      var COMMON_KEYWORDS = 'of and for in not or if then'.split(' '); // compilation

      /**
       * Compiles a language definition result
       *
       * Given the raw result of a language definition (Language), compiles this so
       * that it is ready for highlighting code.
       * @param {Language} language
       * @returns {CompiledLanguage}
       */

      function compileLanguage(language) {
        /**
         * Builds a regex with the case sensativility of the current language
         *
         * @param {RegExp | string} value
         * @param {boolean} [global]
         */
        function langRe(value, global) {
          return new RegExp(source(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
        }
        /**
          Stores multiple regular expressions and allows you to quickly search for
          them all in a string simultaneously - returning the first match.  It does
          this by creating a huge (a|b|c) regex - each individual item wrapped with ()
          and joined by `|` - using match groups to track position.  When a match is
          found checking which position in the array has content allows us to figure
          out which of the original regexes / match groups triggered the match.
           The match object itself (the result of `Regex.exec`) is returned but also
          enhanced by merging in any meta-data that was registered with the regex.
          This is how we keep track of which mode matched, and what type of rule
          (`illegal`, `begin`, end, etc).
        */


        var MultiRegex = /*#__PURE__*/function () {
          function MultiRegex() {
            _classCallCheck(this, MultiRegex);

            this.matchIndexes = {}; // @ts-ignore

            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
          } // @ts-ignore


          _createClass(MultiRegex, [{
            key: "addRule",
            value: function addRule(re, opts) {
              opts.position = this.position++; // @ts-ignore

              this.matchIndexes[this.matchAt] = opts;
              this.regexes.push([opts, re]);
              this.matchAt += countMatchGroups(re) + 1;
            }
          }, {
            key: "compile",
            value: function compile() {
              if (this.regexes.length === 0) {
                // avoids the need to check length every time exec is called
                // @ts-ignore
                this.exec = function () {
                  return null;
                };
              }

              var terminators = this.regexes.map(function (el) {
                return el[1];
              });
              this.matcherRe = langRe(join(terminators), true);
              this.lastIndex = 0;
            }
            /** @param {string} s */

          }, {
            key: "exec",
            value: function exec(s) {
              this.matcherRe.lastIndex = this.lastIndex;
              var match = this.matcherRe.exec(s);

              if (!match) {
                return null;
              } // eslint-disable-next-line no-undefined


              var i = match.findIndex(function (el, i) {
                return i > 0 && el !== undefined;
              }); // @ts-ignore

              var matchData = this.matchIndexes[i]; // trim off any earlier non-relevant match groups (ie, the other regex
              // match groups that make up the multi-matcher)

              match.splice(0, i);
              return Object.assign(match, matchData);
            }
          }]);

          return MultiRegex;
        }();
        /*
          Created to solve the key deficiently with MultiRegex - there is no way to
          test for multiple matches at a single location.  Why would we need to do
          that?  In the future a more dynamic engine will allow certain matches to be
          ignored.  An example: if we matched say the 3rd regex in a large group but
          decided to ignore it - we'd need to started testing again at the 4th
          regex... but MultiRegex itself gives us no real way to do that.
           So what this class creates MultiRegexs on the fly for whatever search
          position they are needed.
           NOTE: These additional MultiRegex objects are created dynamically.  For most
          grammars most of the time we will never actually need anything more than the
          first MultiRegex - so this shouldn't have too much overhead.
           Say this is our search group, and we match regex3, but wish to ignore it.
             regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0
           What we need is a new MultiRegex that only includes the remaining
          possibilities:
             regex4 | regex5                               ' ie, startAt = 3
           This class wraps all that complexity up in a simple API... `startAt` decides
          where in the array of expressions to start doing the matching. It
          auto-increments, so if a match is found at position 2, then startAt will be
          set to 3.  If the end is reached startAt will return to 0.
           MOST of the time the parser will be setting startAt manually to 0.
        */


        var ResumableMultiRegex = /*#__PURE__*/function () {
          function ResumableMultiRegex() {
            _classCallCheck(this, ResumableMultiRegex);

            // @ts-ignore
            this.rules = []; // @ts-ignore

            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
          } // @ts-ignore


          _createClass(ResumableMultiRegex, [{
            key: "getMatcher",
            value: function getMatcher(index) {
              if (this.multiRegexes[index]) return this.multiRegexes[index];
              var matcher = new MultiRegex();
              this.rules.slice(index).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    re = _ref2[0],
                    opts = _ref2[1];

                return matcher.addRule(re, opts);
              });
              matcher.compile();
              this.multiRegexes[index] = matcher;
              return matcher;
            }
          }, {
            key: "resumingScanAtSamePosition",
            value: function resumingScanAtSamePosition() {
              return this.regexIndex !== 0;
            }
          }, {
            key: "considerAll",
            value: function considerAll() {
              this.regexIndex = 0;
            } // @ts-ignore

          }, {
            key: "addRule",
            value: function addRule(re, opts) {
              this.rules.push([re, opts]);
              if (opts.type === "begin") this.count++;
            }
            /** @param {string} s */

          }, {
            key: "exec",
            value: function exec(s) {
              var m = this.getMatcher(this.regexIndex);
              m.lastIndex = this.lastIndex;
              var result = m.exec(s); // The following is because we have no easy way to say "resume scanning at the
              // existing position but also skip the current rule ONLY". What happens is
              // all prior rules are also skipped which can result in matching the wrong
              // thing. Example of matching "booger":
              // our matcher is [string, "booger", number]
              //
              // ....booger....
              // if "booger" is ignored then we'd really need a regex to scan from the
              // SAME position for only: [string, number] but ignoring "booger" (if it
              // was the first match), a simple resume would scan ahead who knows how
              // far looking only for "number", ignoring potential string matches (or
              // future "booger" matches that might be valid.)
              // So what we do: We execute two matchers, one resuming at the same
              // position, but the second full matcher starting at the position after:
              //     /--- resume first regex match here (for [number])
              //     |/---- full match here for [string, "booger", number]
              //     vv
              // ....booger....
              // Which ever results in a match first is then used. So this 3-4 step
              // process essentially allows us to say "match at this position, excluding
              // a prior rule that was ignored".
              //
              // 1. Match "booger" first, ignore. Also proves that [string] does non match.
              // 2. Resume matching for [number]
              // 3. Match at index + 1 for [string, "booger", number]
              // 4. If #2 and #3 result in matches, which came first?

              if (this.resumingScanAtSamePosition()) {
                if (result && result.index === this.lastIndex) ;else {
                  // use the second matcher result
                  var m2 = this.getMatcher(0);
                  m2.lastIndex = this.lastIndex + 1;
                  result = m2.exec(s);
                }
              }

              if (result) {
                this.regexIndex += result.position + 1;

                if (this.regexIndex === this.count) {
                  // wrap-around to considering all matches again
                  this.considerAll();
                }
              }

              return result;
            }
          }]);

          return ResumableMultiRegex;
        }();
        /**
         * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
         * the content and find matches.
         *
         * @param {CompiledMode} mode
         * @returns {ResumableMultiRegex}
         */


        function buildModeRegex(mode) {
          var mm = new ResumableMultiRegex();
          mode.contains.forEach(function (term) {
            return mm.addRule(term.begin, {
              rule: term,
              type: "begin"
            });
          });

          if (mode.terminator_end) {
            mm.addRule(mode.terminator_end, {
              type: "end"
            });
          }

          if (mode.illegal) {
            mm.addRule(mode.illegal, {
              type: "illegal"
            });
          }

          return mm;
        } // TODO: We need negative look-behind support to do this properly

        /**
         * Skip a match if it has a preceding or trailing dot
         *
         * This is used for `beginKeywords` to prevent matching expressions such as
         * `bob.keyword.do()`. The mode compiler automatically wires this up as a
         * special _internal_ 'on:begin' callback for modes with `beginKeywords`
         * @param {RegExpMatchArray} match
         * @param {CallbackResponse} response
         */


        function skipIfhasPrecedingOrTrailingDot(match, response) {
          var before = match.input[match.index - 1];
          var after = match.input[match.index + match[0].length];

          if (before === "." || after === ".") {
            response.ignoreMatch();
          }
        }
        /** skip vs abort vs ignore
         *
         * @skip   - The mode is still entered and exited normally (and contains rules apply),
         *           but all content is held and added to the parent buffer rather than being
         *           output when the mode ends.  Mostly used with `sublanguage` to build up
         *           a single large buffer than can be parsed by sublanguage.
         *
         *             - The mode begin ands ends normally.
         *             - Content matched is added to the parent mode buffer.
         *             - The parser cursor is moved forward normally.
         *
         * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
         *           never matched) but DOES NOT continue to match subsequent `contains`
         *           modes.  Abort is bad/suboptimal because it can result in modes
         *           farther down not getting applied because an earlier rule eats the
         *           content but then aborts.
         *
         *             - The mode does not begin.
         *             - Content matched by `begin` is added to the mode buffer.
         *             - The parser cursor is moved forward accordingly.
         *
         * @ignore - Ignores the mode (as if it never matched) and continues to match any
         *           subsequent `contains` modes.  Ignore isn't technically possible with
         *           the current parser implementation.
         *
         *             - The mode does not begin.
         *             - Content matched by `begin` is ignored.
         *             - The parser cursor is not moved forward.
         */

        /**
         * Compiles an individual mode
         *
         * This can raise an error if the mode contains certain detectable known logic
         * issues.
         * @param {Mode} mode
         * @param {CompiledMode | null} [parent]
         * @returns {CompiledMode | never}
         */


        function compileMode(mode, parent) {
          var _ref3;

          var cmode =
          /** @type CompiledMode */
          mode;
          if (mode.compiled) return cmode;
          mode.compiled = true; // __beforeBegin is considered private API, internal use only

          mode.__beforeBegin = null;
          mode.keywords = mode.keywords || mode.beginKeywords;
          var keywordPattern = null;

          if (typeof mode.keywords === "object") {
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
          }

          if (mode.keywords) {
            mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          } // both are not allowed


          if (mode.lexemes && keywordPattern) {
            throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
          } // `mode.lexemes` was the old standard before we added and now recommend
          // using `keywords.$pattern` to pass the keyword pattern


          cmode.keywordPatternRe = langRe(mode.lexemes || keywordPattern || /\w+/, true);

          if (parent) {
            if (mode.beginKeywords) {
              // for languages with keywords that include non-word characters checking for
              // a word boundary is not sufficient, so instead we check for a word boundary
              // or whitespace - this does no harm in any case since our keyword engine
              // doesn't allow spaces in keywords anyways and we still check for the boundary
              // first
              mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?=\\b|\\s)';
              mode.__beforeBegin = skipIfhasPrecedingOrTrailingDot;
            }

            if (!mode.begin) mode.begin = /\B|\b/;
            cmode.beginRe = langRe(mode.begin);
            if (mode.endSameAsBegin) mode.end = mode.begin;
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) cmode.endRe = langRe(mode.end);
            cmode.terminator_end = source(mode.end) || '';

            if (mode.endsWithParent && parent.terminator_end) {
              cmode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
            }
          }

          if (mode.illegal) cmode.illegalRe = langRe(mode.illegal); // eslint-disable-next-line no-undefined

          if (mode.relevance === undefined) mode.relevance = 1;
          if (!mode.contains) mode.contains = [];
          mode.contains = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(mode.contains.map(function (c) {
            return expandOrCloneMode(c === 'self' ? mode : c);
          })));
          mode.contains.forEach(function (c) {
            compileMode(
            /** @type Mode */
            c, cmode);
          });

          if (mode.starts) {
            compileMode(mode.starts, parent);
          }

          cmode.matcher = buildModeRegex(cmode);
          return cmode;
        } // self is not valid at the top-level


        if (language.contains && language.contains.includes('self')) {
          throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }

        return compileMode(
        /** @type Mode */
        language);
      }
      /**
       * Determines if a mode has a dependency on it's parent or not
       *
       * If a mode does have a parent dependency then often we need to clone it if
       * it's used in multiple places so that each copy points to the correct parent,
       * where-as modes without a parent can often safely be re-used at the bottom of
       * a mode chain.
       *
       * @param {Mode | null} mode
       * @returns {boolean} - is there a dependency on the parent?
       * */


      function dependencyOnParent(mode) {
        if (!mode) return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }
      /**
       * Expands a mode or clones it if necessary
       *
       * This is necessary for modes with parental dependenceis (see notes on
       * `dependencyOnParent`) and for nodes that have `variants` - which must then be
       * exploded into their own individual modes at compile time.
       *
       * @param {Mode} mode
       * @returns {Mode | Mode[]}
       * */


      function expandOrCloneMode(mode) {
        if (mode.variants && !mode.cached_variants) {
          mode.cached_variants = mode.variants.map(function (variant) {
            return inherit(mode, {
              variants: null
            }, variant);
          });
        } // EXPAND
        // if we have variants then essentially "replace" the mode with the variants
        // this happens in compileMode, where this function is called from


        if (mode.cached_variants) {
          return mode.cached_variants;
        } // CLONE
        // if we have dependencies on parents then we need a unique
        // instance of ourselves, so we can be reused with many
        // different parents without issue


        if (dependencyOnParent(mode)) {
          return inherit(mode, {
            starts: mode.starts ? inherit(mode.starts) : null
          });
        }

        if (Object.isFrozen(mode)) {
          return inherit(mode);
        } // no special dependency issues, just return ourselves


        return mode;
      }
      /***********************************************
        Keywords
      ***********************************************/

      /**
       * Given raw keywords from a language definition, compile them.
       *
       * @param {string | Record<string,string>} rawKeywords
       * @param {boolean} caseInsensitive
       */


      function compileKeywords(rawKeywords, caseInsensitive) {
        /** @type KeywordDict */
        var compiledKeywords = {};

        if (typeof rawKeywords === 'string') {
          // string
          splitAndCompile('keyword', rawKeywords);
        } else {
          Object.keys(rawKeywords).forEach(function (className) {
            splitAndCompile(className, rawKeywords[className]);
          });
        }

        return compiledKeywords; // ---

        /**
         * Compiles an individual list of keywords
         *
         * Ex: "for if when while|5"
         *
         * @param {string} className
         * @param {string} keywordList
         */

        function splitAndCompile(className, keywordList) {
          if (caseInsensitive) {
            keywordList = keywordList.toLowerCase();
          }

          keywordList.split(' ').forEach(function (keyword) {
            var pair = keyword.split('|');
            compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }
      /**
       * Returns the proper score for a given keyword
       *
       * Also takes into account comment keywords, which will be scored 0 UNLESS
       * another score has been manually assigned.
       * @param {string} keyword
       * @param {string} [providedScore]
       */


      function scoreForKeyword(keyword, providedScore) {
        // manual scores always win over common keywords
        // so you can force a score of 1 if you really insist
        if (providedScore) {
          return Number(providedScore);
        }

        return commonKeyword(keyword) ? 0 : 1;
      }
      /**
       * Determines if a given keyword is common or not
       *
       * @param {string} keyword */


      function commonKeyword(keyword) {
        return COMMON_KEYWORDS.includes(keyword.toLowerCase());
      }

      var version = "10.3.2"; // @ts-nocheck

      function hasValueOrEmptyAttribute(value) {
        return Boolean(value || value === "");
      }

      var Component = {
        props: ["language", "code", "autodetect"],
        data: function data() {
          return {
            detectedLanguage: "",
            unknownLanguage: false
          };
        },
        computed: {
          className: function className() {
            if (this.unknownLanguage) return "";
            return "hljs " + this.detectedLanguage;
          },
          highlighted: function highlighted() {
            // no idea what language to use, return raw code
            if (!this.autoDetect && !hljs.getLanguage(this.language)) {
              console.warn("The language \"".concat(this.language, "\" you specified could not be found."));
              this.unknownLanguage = true;
              return escapeHTML(this.code);
            }

            var result;

            if (this.autoDetect) {
              result = hljs.highlightAuto(this.code);
              this.detectedLanguage = result.language;
            } else {
              result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
              this.detectectLanguage = this.language;
            }

            return result.value;
          },
          autoDetect: function autoDetect() {
            return !this.language || hasValueOrEmptyAttribute(this.autodetect);
          },
          ignoreIllegals: function ignoreIllegals() {
            return true;
          }
        },
        // this avoids needing to use a whole Vue compilation pipeline just
        // to build Highlight.js
        render: function render(createElement) {
          return createElement("pre", {}, [createElement("code", {
            "class": this.className,
            domProps: {
              innerHTML: this.highlighted
            }
          })]);
        } // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`

      };
      var VuePlugin = {
        install: function install(Vue) {
          Vue.component('highlightjs', Component);
        }
      };
      /*
      Syntax highlighting with language autodetection.
      https://highlightjs.org/
      */

      var escape$1 = escapeHTML;
      var inherit$1 = inherit;
      var nodeStream$1 = utils.nodeStream,
          mergeStreams$1 = utils.mergeStreams;
      var NO_MATCH = Symbol("nomatch");
      /**
       * @param {any} hljs - object that is extended (legacy)
       * @returns {HLJSApi}
       */

      var HLJS = function HLJS(hljs) {
        // Convenience variables for build-in objects

        /** @type {unknown[]} */
        var ArrayProto = []; // Global internal variables used within the highlight.js library.

        /** @type {Record<string, Language>} */

        var languages = Object.create(null);
        /** @type {Record<string, string>} */

        var aliases = Object.create(null);
        /** @type {HLJSPlugin[]} */

        var plugins = []; // safe/production mode - swallows more errors, tries to keep running
        // even if a single syntax or parse hits a fatal error

        var SAFE_MODE = true;
        var fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
        var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
        /** @type {Language} */

        var PLAINTEXT_LANGUAGE = {
          disableAutodetect: true,
          name: 'Plain text',
          contains: []
        }; // Global options used when within external APIs. This is modified when
        // calling the `hljs.configure` function.

        /** @type HLJSOptions */

        var options = {
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: 'hljs-',
          tabReplace: null,
          useBR: false,
          languages: null,
          // beta configuration options, subject to change, welcome to discuss
          // https://github.com/highlightjs/highlight.js/issues/1086
          __emitter: TokenTreeEmitter
        };
        /* Utility functions */

        /**
         * Tests a language name to see if highlighting should be skipped
         * @param {string} languageName
         */

        function shouldNotHighlight(languageName) {
          return options.noHighlightRe.test(languageName);
        }
        /**
         * @param {HighlightedHTMLElement} block - the HTML element to determine language for
         */


        function blockLanguage(block) {
          var classes = block.className + ' ';
          classes += block.parentNode ? block.parentNode.className : ''; // language-* takes precedence over non-prefixed class names.

          var match = options.languageDetectRe.exec(classes);

          if (match) {
            var language = getLanguage(match[1]);

            if (!language) {
              console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
              console.warn("Falling back to no-highlight mode for this block.", block);
            }

            return language ? match[1] : 'no-highlight';
          }

          return classes.split(/\s+/).find(function (_class) {
            return shouldNotHighlight(_class) || getLanguage(_class);
          });
        }
        /**
         * Core highlighting function.
         *
         * @param {string} languageName - the language to use for highlighting
         * @param {string} code - the code to highlight
         * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
         * @param {Mode} [continuation] - current continuation mode, if any
         *
         * @returns {HighlightResult} Result - an object that represents the result
         * @property {string} language - the language name
         * @property {number} relevance - the relevance score
         * @property {string} value - the highlighted HTML code
         * @property {string} code - the original raw code
         * @property {Mode} top - top of the current mode stack
         * @property {boolean} illegal - indicates whether any illegal matches were found
        */


        function highlight(languageName, code, ignoreIllegals, continuation) {
          /** @type {{ code: string, language: string, result?: any }} */
          var context = {
            code: code,
            language: languageName
          }; // the plugin can change the desired language or the code to be highlighted
          // just be changing the object it was passed

          fire("before:highlight", context); // a before plugin can usurp the result completely by providing it's own
          // in which case we don't even need to call highlight

          var result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals, continuation);
          result.code = context.code; // the plugin can change anything in result to suite it

          fire("after:highlight", result);
          return result;
        }
        /**
         * private highlight that's used internally and does not fire callbacks
         *
         * @param {string} languageName - the language to use for highlighting
         * @param {string} code - the code to highlight
         * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
         * @param {Mode} [continuation] - current continuation mode, if any
        */


        function _highlight(languageName, code, ignoreIllegals, continuation) {
          var codeToHighlight = code;
          /**
           * Return keyword data if a match is a keyword
           * @param {CompiledMode} mode - current mode
           * @param {RegExpMatchArray} match - regexp match data
           * @returns {KeywordData | false}
           */

          function keywordData(mode, match) {
            var matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
            return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
          }

          function processKeywords() {
            if (!top.keywords) {
              emitter.addText(modeBuffer);
              return;
            }

            var lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            var match = top.keywordPatternRe.exec(modeBuffer);
            var buf = "";

            while (match) {
              buf += modeBuffer.substring(lastIndex, match.index);
              var data = keywordData(top, match);

              if (data) {
                var _data = _slicedToArray(data, 2),
                    kind = _data[0],
                    keywordRelevance = _data[1];

                emitter.addText(buf);
                buf = "";
                relevance += keywordRelevance;
                emitter.addKeyword(match[0], kind);
              } else {
                buf += match[0];
              }

              lastIndex = top.keywordPatternRe.lastIndex;
              match = top.keywordPatternRe.exec(modeBuffer);
            }

            buf += modeBuffer.substr(lastIndex);
            emitter.addText(buf);
          }

          function processSubLanguage() {
            if (modeBuffer === "") return;
            /** @type HighlightResult */

            var result = null;

            if (typeof top.subLanguage === 'string') {
              if (!languages[top.subLanguage]) {
                emitter.addText(modeBuffer);
                return;
              }

              result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
              continuations[top.subLanguage] = result.top;
            } else {
              result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            } // Counting embedded language score towards the host language may be disabled
            // with zeroing the containing mode relevance. Use case in point is Markdown that
            // allows XML everywhere and makes every XML snippet to have a much larger Markdown
            // score.


            if (top.relevance > 0) {
              relevance += result.relevance;
            }

            emitter.addSublanguage(result.emitter, result.language);
          }

          function processBuffer() {
            if (top.subLanguage != null) {
              processSubLanguage();
            } else {
              processKeywords();
            }

            modeBuffer = '';
          }
          /**
           * @param {Mode} mode - new mode to start
           */


          function startNewMode(mode) {
            if (mode.className) {
              emitter.openNode(mode.className);
            }

            top = Object.create(mode, {
              parent: {
                value: top
              }
            });
            return top;
          }
          /**
           * @param {CompiledMode } mode - the mode to potentially end
           * @param {RegExpMatchArray} match - the latest match
           * @param {string} matchPlusRemainder - match plus remainder of content
           * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
           */


          function endOfMode(mode, match, matchPlusRemainder) {
            var matched = startsWith(mode.endRe, matchPlusRemainder);

            if (matched) {
              if (mode["on:end"]) {
                var resp = new Response(mode);
                mode["on:end"](match, resp);
                if (resp.ignore) matched = false;
              }

              if (matched) {
                while (mode.endsParent && mode.parent) {
                  mode = mode.parent;
                }

                return mode;
              }
            } // even if on:end fires an `ignore` it's still possible
            // that we might trigger the end node because of a parent mode


            if (mode.endsWithParent) {
              return endOfMode(mode.parent, match, matchPlusRemainder);
            }
          }
          /**
           * Handle matching but then ignoring a sequence of text
           *
           * @param {string} lexeme - string containing full match text
           */


          function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
              // no more regexs to potentially match here, so we move the cursor forward one
              // space
              modeBuffer += lexeme[0];
              return 1;
            } else {
              // no need to move the cursor, we still have additional regexes to try and
              // match at this very spot
              resumeScanAtSamePosition = true;
              return 0;
            }
          }
          /**
           * Handle the start of a new potential mode match
           *
           * @param {EnhancedMatch} match - the current match
           * @returns {number} how far to advance the parse cursor
           */


          function doBeginMatch(match) {
            var lexeme = match[0];
            var newMode = match.rule;
            var resp = new Response(newMode); // first internal before callbacks, then the public ones

            var beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];

            for (var _i2 = 0, _beforeCallbacks = beforeCallbacks; _i2 < _beforeCallbacks.length; _i2++) {
              var cb = _beforeCallbacks[_i2];
              if (!cb) continue;
              cb(match, resp);
              if (resp.ignore) return doIgnore(lexeme);
            }

            if (newMode && newMode.endSameAsBegin) {
              newMode.endRe = escape(lexeme);
            }

            if (newMode.skip) {
              modeBuffer += lexeme;
            } else {
              if (newMode.excludeBegin) {
                modeBuffer += lexeme;
              }

              processBuffer();

              if (!newMode.returnBegin && !newMode.excludeBegin) {
                modeBuffer = lexeme;
              }
            }

            startNewMode(newMode); // if (mode["after:begin"]) {
            //   let resp = new Response(mode);
            //   mode["after:begin"](match, resp);
            // }

            return newMode.returnBegin ? 0 : lexeme.length;
          }
          /**
           * Handle the potential end of mode
           *
           * @param {RegExpMatchArray} match - the current match
           */


          function doEndMatch(match) {
            var lexeme = match[0];
            var matchPlusRemainder = codeToHighlight.substr(match.index);
            var endMode = endOfMode(top, match, matchPlusRemainder);

            if (!endMode) {
              return NO_MATCH;
            }

            var origin = top;

            if (origin.skip) {
              modeBuffer += lexeme;
            } else {
              if (!(origin.returnEnd || origin.excludeEnd)) {
                modeBuffer += lexeme;
              }

              processBuffer();

              if (origin.excludeEnd) {
                modeBuffer = lexeme;
              }
            }

            do {
              if (top.className) {
                emitter.closeNode();
              }

              if (!top.skip && !top.subLanguage) {
                relevance += top.relevance;
              }

              top = top.parent;
            } while (top !== endMode.parent);

            if (endMode.starts) {
              if (endMode.endSameAsBegin) {
                endMode.starts.endRe = endMode.endRe;
              }

              startNewMode(endMode.starts);
            }

            return origin.returnEnd ? 0 : lexeme.length;
          }

          function processContinuations() {
            var list = [];

            for (var current = top; current !== language; current = current.parent) {
              if (current.className) {
                list.unshift(current.className);
              }
            }

            list.forEach(function (item) {
              return emitter.openNode(item);
            });
          }
          /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */


          var lastMatch = {};
          /**
           *  Process an individual match
           *
           * @param {string} textBeforeMatch - text preceeding the match (since the last match)
           * @param {EnhancedMatch} [match] - the match itself
           */

          function processLexeme(textBeforeMatch, match) {
            var lexeme = match && match[0]; // add non-matched text to the current mode buffer

            modeBuffer += textBeforeMatch;

            if (lexeme == null) {
              processBuffer();
              return 0;
            } // we've found a 0 width match and we're stuck, so we need to advance
            // this happens when we have badly behaved rules that have optional matchers to the degree that
            // sometimes they can end up matching nothing at all
            // Ref: https://github.com/highlightjs/highlight.js/issues/2140


            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
              // spit the "skipped" character that our regex choked on back into the output sequence
              modeBuffer += codeToHighlight.slice(match.index, match.index + 1);

              if (!SAFE_MODE) {
                /** @type {AnnotatedError} */
                var err = new Error('0 width match regex');
                err.languageName = languageName;
                err.badRule = lastMatch.rule;
                throw err;
              }

              return 1;
            }

            lastMatch = match;

            if (match.type === "begin") {
              return doBeginMatch(match);
            } else if (match.type === "illegal" && !ignoreIllegals) {
              // illegal match, we do not continue processing

              /** @type {AnnotatedError} */
              var _err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

              _err.mode = top;
              throw _err;
            } else if (match.type === "end") {
              var processed = doEndMatch(match);

              if (processed !== NO_MATCH) {
                return processed;
              }
            } // edge case for when illegal matches $ (end of line) which is technically
            // a 0 width match but not a begin/end match so it's not caught by the
            // first handler (when ignoreIllegals is true)


            if (match.type === "illegal" && lexeme === "") {
              // advance so we aren't stuck in an infinite loop
              return 1;
            } // infinite loops are BAD, this is a last ditch catch all. if we have a
            // decent number of iterations yet our index (cursor position in our
            // parsing) still 3x behind our index then something is very wrong
            // so we bail


            if (iterations > 100000 && iterations > match.index * 3) {
              var _err2 = new Error('potential infinite loop, way more iterations than matches');

              throw _err2;
            }
            /*
            Why might be find ourselves here?  Only one occasion now.  An end match that was
            triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
            rule sets the end rule to a specific match.  Since the overall mode termination rule that's
            being used to scan the text isn't recompiled that means that any match that LOOKS like
            the end (but is not, because it is not an exact match to the beginning) will
            end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
            the end rule and fails to match, we wind up here, and just silently ignore the end.
             This causes no real harm other than stopping a few times too many.
            */


            modeBuffer += lexeme;
            return lexeme.length;
          }

          var language = getLanguage(languageName);

          if (!language) {
            console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
          }

          var md = compileLanguage(language);
          var result = '';
          /** @type {CompiledMode} */

          var top = continuation || md;
          /** @type Record<string,Mode> */

          var continuations = {}; // keep continuations for sub-languages

          var emitter = new options.__emitter(options);
          processContinuations();
          var modeBuffer = '';
          var relevance = 0;
          var index = 0;
          var iterations = 0;
          var resumeScanAtSamePosition = false;

          try {
            top.matcher.considerAll();

            for (;;) {
              iterations++;

              if (resumeScanAtSamePosition) {
                // only regexes not matched previously will now be
                // considered for a potential match
                resumeScanAtSamePosition = false;
              } else {
                top.matcher.considerAll();
              }

              top.matcher.lastIndex = index;
              var match = top.matcher.exec(codeToHighlight); // console.log("match", match[0], match.rule && match.rule.begin)

              if (!match) break;
              var beforeMatch = codeToHighlight.substring(index, match.index);
              var processedCount = processLexeme(beforeMatch, match);
              index = match.index + processedCount;
            }

            processLexeme(codeToHighlight.substr(index));
            emitter.closeAllNodes();
            emitter.finalize();
            result = emitter.toHTML();
            return {
              relevance: relevance,
              value: result,
              language: languageName,
              illegal: false,
              emitter: emitter,
              top: top
            };
          } catch (err) {
            if (err.message && err.message.includes('Illegal')) {
              return {
                illegal: true,
                illegalBy: {
                  msg: err.message,
                  context: codeToHighlight.slice(index - 100, index + 100),
                  mode: err.mode
                },
                sofar: result,
                relevance: 0,
                value: escape$1(codeToHighlight),
                emitter: emitter
              };
            } else if (SAFE_MODE) {
              return {
                illegal: false,
                relevance: 0,
                value: escape$1(codeToHighlight),
                emitter: emitter,
                language: languageName,
                top: top,
                errorRaised: err
              };
            } else {
              throw err;
            }
          }
        }
        /**
         * returns a valid highlight result, without actually doing any actual work,
         * auto highlight starts with this and it's possible for small snippets that
         * auto-detection may not find a better match
         * @param {string} code
         * @returns {HighlightResult}
         */


        function justTextHighlightResult(code) {
          var result = {
            relevance: 0,
            emitter: new options.__emitter(options),
            value: escape$1(code),
            illegal: false,
            top: PLAINTEXT_LANGUAGE
          };
          result.emitter.addText(code);
          return result;
        }
        /**
        Highlighting with language detection. Accepts a string with the code to
        highlight. Returns an object with the following properties:
         - language (detected language)
        - relevance (int)
        - value (an HTML string with highlighting markup)
        - second_best (object with the same structure for second-best heuristically
          detected language, may be absent)
           @param {string} code
          @param {Array<string>} [languageSubset]
          @returns {AutoHighlightResult}
        */


        function highlightAuto(code, languageSubset) {
          languageSubset = languageSubset || options.languages || Object.keys(languages);
          var result = justTextHighlightResult(code);
          var secondBest = result;
          languageSubset.filter(getLanguage).filter(autoDetection).forEach(function (name) {
            var current = _highlight(name, code, false);

            current.language = name;

            if (current.relevance > secondBest.relevance) {
              secondBest = current;
            }

            if (current.relevance > result.relevance) {
              secondBest = result;
              result = current;
            }
          });

          if (secondBest.language) {
            // second_best (with underscore) is the expected API
            result.second_best = secondBest;
          }

          return result;
        }
        /**
        Post-processing of the highlighted markup:
         - replace TABs with something more useful
        - replace real line-breaks with '<br>' for non-pre containers
           @param {string} html
          @returns {string}
        */


        function fixMarkup(html) {
          if (!(options.tabReplace || options.useBR)) {
            return html;
          }

          return html.replace(fixMarkupRe, function (match) {
            if (match === '\n') {
              return options.useBR ? '<br>' : match;
            } else if (options.tabReplace) {
              return match.replace(/\t/g, options.tabReplace);
            }

            return match;
          });
        }
        /**
         * Builds new class name for block given the language name
         *
         * @param {string} prevClassName
         * @param {string} [currentLang]
         * @param {string} [resultLang]
         */


        function buildClassName(prevClassName, currentLang, resultLang) {
          var language = currentLang ? aliases[currentLang] : resultLang;
          var result = [prevClassName.trim()];

          if (!prevClassName.match(/\bhljs\b/)) {
            result.push('hljs');
          }

          if (!prevClassName.includes(language)) {
            result.push(language);
          }

          return result.join(' ').trim();
        }
        /**
         * Applies highlighting to a DOM node containing code. Accepts a DOM node and
         * two optional parameters for fixMarkup.
         *
         * @param {HighlightedHTMLElement} element - the HTML element to highlight
        */


        function highlightBlock(element) {
          /** @type HTMLElement */
          var node = null;
          var language = blockLanguage(element);
          if (shouldNotHighlight(language)) return;
          fire("before:highlightBlock", {
            block: element,
            language: language
          });

          if (options.useBR) {
            node = document.createElement('div');
            node.innerHTML = element.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
          } else {
            node = element;
          }

          var text = node.textContent;
          var result = language ? highlight(language, text, true) : highlightAuto(text);
          var originalStream = nodeStream$1(node);

          if (originalStream.length) {
            var resultNode = document.createElement('div');
            resultNode.innerHTML = result.value;
            result.value = mergeStreams$1(originalStream, nodeStream$1(resultNode), text);
          }

          result.value = fixMarkup(result.value);
          fire("after:highlightBlock", {
            block: element,
            result: result
          });
          element.innerHTML = result.value;
          element.className = buildClassName(element.className, language, result.language);
          element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relavance: result.relevance
          };

          if (result.second_best) {
            element.second_best = {
              language: result.second_best.language,
              // TODO: remove with version 11.0
              re: result.second_best.relevance,
              relavance: result.second_best.relevance
            };
          }
        }
        /**
         * Updates highlight.js global options with the passed options
         *
         * @param {{}} userOptions
         */


        function configure(userOptions) {
          if (userOptions.useBR) {
            console.warn("'useBR' option is deprecated and will be removed entirely in v11.0");
            console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559");
          }

          options = inherit$1(options, userOptions);
        }
        /**
         * Highlights to all <pre><code> blocks on a page
         *
         * @type {Function & {called?: boolean}}
         */


        var initHighlighting = function initHighlighting() {
          if (initHighlighting.called) return;
          initHighlighting.called = true;
          var blocks = document.querySelectorAll('pre code');
          ArrayProto.forEach.call(blocks, highlightBlock);
        }; // Higlights all when DOMContentLoaded fires


        function initHighlightingOnLoad() {
          // @ts-ignore
          window.addEventListener('DOMContentLoaded', initHighlighting, false);
        }
        /**
         * Register a language grammar module
         *
         * @param {string} languageName
         * @param {LanguageFn} languageDefinition
         */


        function registerLanguage(languageName, languageDefinition) {
          var lang = null;

          try {
            lang = languageDefinition(hljs);
          } catch (error) {
            console.error("Language definition for '{}' could not be registered.".replace("{}", languageName)); // hard or soft error

            if (!SAFE_MODE) {
              throw error;
            } else {
              console.error(error);
            } // languages that have serious errors are replaced with essentially a
            // "plaintext" stand-in so that the code blocks will still get normal
            // css classes applied to them - and one bad language won't break the
            // entire highlighter


            lang = PLAINTEXT_LANGUAGE;
          } // give it a temporary name if it doesn't have one in the meta-data


          if (!lang.name) lang.name = languageName;
          languages[languageName] = lang;
          lang.rawDefinition = languageDefinition.bind(null, hljs);

          if (lang.aliases) {
            registerAliases(lang.aliases, {
              languageName: languageName
            });
          }
        }
        /**
         * @returns {string[]} List of language internal names
         */


        function listLanguages() {
          return Object.keys(languages);
        }
        /**
          intended usage: When one language truly requires another
           Unlike `getLanguage`, this will throw when the requested language
          is not available.
           @param {string} name - name of the language to fetch/require
          @returns {Language | never}
        */


        function requireLanguage(name) {
          var lang = getLanguage(name);

          if (lang) {
            return lang;
          }

          var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
          throw err;
        }
        /**
         * @param {string} name - name of the language to retrieve
         * @returns {Language | undefined}
         */


        function getLanguage(name) {
          name = (name || '').toLowerCase();
          return languages[name] || languages[aliases[name]];
        }
        /**
         *
         * @param {string|string[]} aliasList - single alias or list of aliases
         * @param {{languageName: string}} opts
         */


        function registerAliases(aliasList, _ref4) {
          var languageName = _ref4.languageName;

          if (typeof aliasList === 'string') {
            aliasList = [aliasList];
          }

          aliasList.forEach(function (alias) {
            aliases[alias] = languageName;
          });
        }
        /**
         * Determines if a given language has auto-detection enabled
         * @param {string} name - name of the language
         */


        function autoDetection(name) {
          var lang = getLanguage(name);
          return lang && !lang.disableAutodetect;
        }
        /**
         * @param {HLJSPlugin} plugin
         */


        function addPlugin(plugin) {
          plugins.push(plugin);
        }
        /**
         *
         * @param {PluginEvent} event
         * @param {any} args
         */


        function fire(event, args) {
          var cb = event;
          plugins.forEach(function (plugin) {
            if (plugin[cb]) {
              plugin[cb](args);
            }
          });
        }
        /**
        Note: fixMarkup is deprecated and will be removed entirely in v11
         @param {string} arg
        @returns {string}
        */


        function deprecateFixMarkup(arg) {
          console.warn("fixMarkup is deprecated and will be removed entirely in v11.0");
          console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534");
          return fixMarkup(arg);
        }
        /* Interface definition */


        Object.assign(hljs, {
          highlight: highlight,
          highlightAuto: highlightAuto,
          fixMarkup: deprecateFixMarkup,
          highlightBlock: highlightBlock,
          configure: configure,
          initHighlighting: initHighlighting,
          initHighlightingOnLoad: initHighlightingOnLoad,
          registerLanguage: registerLanguage,
          listLanguages: listLanguages,
          getLanguage: getLanguage,
          registerAliases: registerAliases,
          requireLanguage: requireLanguage,
          autoDetection: autoDetection,
          inherit: inherit$1,
          addPlugin: addPlugin,
          // plugins for frameworks
          vuePlugin: VuePlugin
        });

        hljs.debugMode = function () {
          SAFE_MODE = false;
        };

        hljs.safeMode = function () {
          SAFE_MODE = true;
        };

        hljs.versionString = version;

        for (var key in MODES) {
          // @ts-ignore
          if (typeof MODES[key] === "object") {
            // @ts-ignore
            deepFreeze(MODES[key]);
          }
        } // merge all the modes/regexs into our main object


        Object.assign(hljs, MODES);
        return hljs;
      }; // export an "instance" of the highlighter


      var highlight = HLJS({});
      module.exports = highlight;
      /***/
    },

    /***/
    "Ku73":
    /*!*********************************************************!*\
      !*** ./src/@fury/animations/fade-in-right.animation.ts ***!
      \*********************************************************/

    /*! exports provided: fadeInRightAnimation */

    /***/
    function Ku73(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () {
        return fadeInRightAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var fadeInRightAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-2vw)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      }))])]);
      /***/
    },

    /***/
    "QMK6":
    /*!**********************************************************!*\
      !*** ./src/@fury/shared/highlightjs/highlight.module.ts ***!
      \**********************************************************/

    /*! exports provided: HighlightModule */

    /***/
    function QMK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightModule", function () {
        return HighlightModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./highlight.directive */
      "yH/G");

      var HighlightModule = function HighlightModule() {
        _classCallCheck(this, HighlightModule);
      };

      HighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HighlightModule
      });
      HighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HighlightModule_Factory(t) {
          return new (t || HighlightModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HighlightModule, {
          declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]],
          exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]],
            exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jctj":
    /*!********************************************************!*\
      !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function jctj(module, exports) {
      /*
      Language: HTML, XML
      Website: https://www.w3.org/XML/
      Category: common
      */
      function xml(hljs) {
        var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
        var XML_ENTITIES = {
          className: 'symbol',
          begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
        };
        var XML_META_KEYWORDS = {
          begin: '\\s',
          contains: [{
            className: 'meta-keyword',
            begin: '#?[a-z_][a-z1-9_-]+',
            illegal: '\\n'
          }]
        };
        var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
          begin: '\\(',
          end: '\\)'
        });
        var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
          className: 'meta-string'
        });
        var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
          className: 'meta-string'
        });
        var TAG_INTERNALS = {
          endsWithParent: true,
          illegal: /</,
          relevance: 0,
          contains: [{
            className: 'attr',
            begin: XML_IDENT_RE,
            relevance: 0
          }, {
            begin: /=\s*/,
            relevance: 0,
            contains: [{
              className: 'string',
              endsParent: true,
              variants: [{
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              }, {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              }, {
                begin: /[^\s"'=<>`]+/
              }]
            }]
          }]
        };
        return {
          name: 'HTML, XML',
          aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
          case_insensitive: true,
          contains: [{
            className: 'meta',
            begin: '<![a-z]',
            end: '>',
            relevance: 10,
            contains: [XML_META_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE, XML_META_PAR_KEYWORDS, {
              begin: '\\[',
              end: '\\]',
              contains: [{
                className: 'meta',
                begin: '<![a-z]',
                end: '>',
                contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
              }]
            }]
          }, hljs.COMMENT('<!--', '-->', {
            relevance: 10
          }), {
            begin: '<\\!\\[CDATA\\[',
            end: '\\]\\]>',
            relevance: 10
          }, XML_ENTITIES, {
            className: 'meta',
            begin: /<\?xml/,
            end: /\?>/,
            relevance: 10
          }, {
            className: 'tag',

            /*
            The lookahead pattern (?=...) ensures that 'begin' only matches
            '<style' as a single word, followed by a whitespace or an
            ending braket. The '$' is needed for the lexeme to be recognized
            by hljs.subMode() that tests lexemes outside the stream.
            */
            begin: '<style(?=\\s|>)',
            end: '>',
            keywords: {
              name: 'style'
            },
            contains: [TAG_INTERNALS],
            starts: {
              end: '</style>',
              returnEnd: true,
              subLanguage: ['css', 'xml']
            }
          }, {
            className: 'tag',
            // See the comment in the <style tag about the lookahead pattern
            begin: '<script(?=\\s|>)',
            end: '>',
            keywords: {
              name: 'script'
            },
            contains: [TAG_INTERNALS],
            starts: {
              end: '\<\/script\>',
              returnEnd: true,
              subLanguage: ['javascript', 'handlebars', 'xml']
            }
          }, {
            className: 'tag',
            begin: '</?',
            end: '/?>',
            contains: [{
              className: 'name',
              begin: /[^\/><\s]+/,
              relevance: 0
            }, TAG_INTERNALS]
          }]
        };
      }

      module.exports = xml;
      /***/
    },

    /***/
    "nStZ":
    /*!******************************************************!*\
      !*** ./src/@fury/animations/fade-in-up.animation.ts ***!
      \******************************************************/

    /*! exports provided: fadeInUpAnimation */

    /***/
    function nStZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
        return fadeInUpAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var fadeInUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(3vh)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
      /***/
    },

    /***/
    "r0Rl":
    /*!***************************************************************!*\
      !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function r0Rl(module, exports) {
      var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      var KEYWORDS = ["as", // for exports
      "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", // JS handles these with a special rule
      // "get",
      // "set",
      "debugger", "async", "await", "static", "import", "from", "export", "extends"];
      var LITERALS = ["true", "false", "null", "undefined", "NaN", "Infinity"];
      var TYPES = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"];
      var ERROR_TYPES = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
      var BUILT_IN_GLOBALS = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"];
      var BUILT_IN_VARIABLES = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global" // Node.js
      ];
      var BUILT_INS = [].concat(BUILT_IN_GLOBALS, BUILT_IN_VARIABLES, TYPES, ERROR_TYPES);
      /**
       * @param {string} value
       * @returns {RegExp}
       * */

      /**
       * @param {RegExp | string } re
       * @returns {string}
       */

      function source(re) {
        if (!re) return null;
        if (typeof re === "string") return re;
        return re.source;
      }
      /**
       * @param {RegExp | string } re
       * @returns {string}
       */


      function lookahead(re) {
        return concat('(?=', re, ')');
      }
      /**
       * @param {RegExp | string } re
       * @returns {string}
       */


      function optional(re) {
        return concat('(', re, ')?');
      }
      /**
       * @param {...(RegExp | string) } args
       * @returns {string}
       */


      function concat() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var joined = args.map(function (x) {
          return source(x);
        }).join("");
        return joined;
      }
      /*
      Language: JavaScript
      Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
      Category: common, scripting
      Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
      */

      /** @type LanguageFn */


      function javascript(hljs) {
        /**
         * Takes a string like "<Booger" and checks to see
         * if we can find a matching "</Booger" later in the
         * content.
         * @param {RegExpMatchArray} match
         * @param {{after:number}} param1
         */
        var hasClosingTag = function hasClosingTag(match, _ref5) {
          var after = _ref5.after;
          var tag = match[0].replace("<", "</");
          var pos = match.input.indexOf(tag, after);
          return pos !== -1;
        };

        var IDENT_RE$1 = IDENT_RE;
        var FRAGMENT = {
          begin: '<>',
          end: '</>'
        };
        var XML_TAG = {
          begin: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,

          /**
           * @param {RegExpMatchArray} match
           * @param {CallbackResponse} response
           */
          isTrulyOpeningTag: function isTrulyOpeningTag(match, response) {
            var afterMatchIndex = match[0].length + match.index;
            var nextChar = match.input[afterMatchIndex]; // nested type?
            // HTML should not include another raw `<` inside a tag
            // But a type might: `<Array<Array<number>>`, etc.

            if (nextChar === "<") {
              response.ignoreMatch();
              return;
            } // <something>
            // This is now either a tag or a type.


            if (nextChar === ">") {
              // if we cannot find a matching closing tag, then we
              // will ignore it
              if (!hasClosingTag(match, {
                after: afterMatchIndex
              })) {
                response.ignoreMatch();
              }
            }
          }
        };
        var KEYWORDS$1 = {
          $pattern: IDENT_RE,
          keyword: KEYWORDS.join(" "),
          literal: LITERALS.join(" "),
          built_in: BUILT_INS.join(" ")
        };

        var nonDecimalLiterals = function nonDecimalLiterals(prefixLetters, validChars) {
          return "\\b0[".concat(prefixLetters, "][").concat(validChars, "]([").concat(validChars, "_]*[").concat(validChars, "])?n?");
        };

        var noLeadingZeroDecimalDigits = /[1-9]([0-9_]*\d)?/;
        var decimalDigits = /\d([0-9_]*\d)?/;
        var exponentPart = concat(/[eE][+-]?/, decimalDigits);
        var NUMBER = {
          className: 'number',
          variants: [{
            begin: nonDecimalLiterals('bB', '01')
          }, // Binary literals
          {
            begin: nonDecimalLiterals('oO', '0-7')
          }, // Octal literals
          {
            begin: nonDecimalLiterals('xX', '0-9a-fA-F')
          }, // Hexadecimal literals
          {
            begin: concat(/\b/, noLeadingZeroDecimalDigits, 'n')
          }, // Non-zero BigInt literals
          {
            begin: concat(/(\b0)?\./, decimalDigits, optional(exponentPart))
          }, // Decimal literals between 0 and 1
          {
            begin: concat(/\b/, noLeadingZeroDecimalDigits, optional(concat(/\./, optional(decimalDigits))), // fractional part
            optional(exponentPart))
          }, // Decimal literals >= 1
          {
            begin: /\b0[\.n]?/
          } // Zero literals (`0`, `0.`, `0n`)
          ],
          relevance: 0
        };
        var SUBST = {
          className: 'subst',
          begin: '\\$\\{',
          end: '\\}',
          keywords: KEYWORDS$1,
          contains: [] // defined later

        };
        var HTML_TEMPLATE = {
          begin: 'html`',
          end: '',
          starts: {
            end: '`',
            returnEnd: false,
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
            subLanguage: 'xml'
          }
        };
        var CSS_TEMPLATE = {
          begin: 'css`',
          end: '',
          starts: {
            end: '`',
            returnEnd: false,
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
            subLanguage: 'css'
          }
        };
        var TEMPLATE_STRING = {
          className: 'string',
          begin: '`',
          end: '`',
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        };
        var JSDOC_COMMENT = hljs.COMMENT('/\\*\\*', '\\*/', {
          relevance: 0,
          contains: [{
            className: 'doctag',
            begin: '@[A-Za-z]+',
            contains: [{
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            }, {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            }, // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        });
        var COMMENT = {
          className: "comment",
          variants: [JSDOC_COMMENT, hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]
        };
        var SUBST_INTERNALS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
        SUBST.contains = SUBST_INTERNALS.concat({
          // we need to pair up {} inside our subst to prevent
          // it from ending too early by matching another }
          begin: /{/,
          end: /}/,
          keywords: KEYWORDS$1,
          contains: ["self"].concat(SUBST_INTERNALS)
        });
        var SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
        var PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([// eat recursive parens in sub expressions
        {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS$1,
          contains: ["self"].concat(SUBST_AND_COMMENTS)
        }]);
        var PARAMS = {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          keywords: KEYWORDS$1,
          contains: PARAMS_CONTAINS
        };
        return {
          name: 'Javascript',
          aliases: ['js', 'jsx', 'mjs', 'cjs'],
          keywords: KEYWORDS$1,
          // this will be extended by TypeScript
          exports: {
            PARAMS_CONTAINS: PARAMS_CONTAINS
          },
          illegal: /#(?![$_A-z])/,
          contains: [hljs.SHEBANG({
            label: "shebang",
            binary: "node",
            relevance: 5
          }), {
            label: "use_strict",
            className: 'meta',
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, COMMENT, NUMBER, {
            // object attr container
            begin: concat(/[{,\n]\s*/, // we need to look ahead to make sure that we actually have an
            // attribute coming up so we don't steal a comma from a potential
            // "value" container
            //
            // NOTE: this might not work how you think.  We don't actually always
            // enter this mode and stay.  Instead it might merely match `,
            // <comments up next>` and then immediately end after the , because it
            // fails to find any actual attrs. But this still does the job because
            // it prevents the value contain rule from grabbing this instead and
            // prevening this rule from firing when we actually DO have keys.
            lookahead(concat( // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(\/\/.*$)*/, /(\/\*(.|\n)*\*\/)*/, /\s*/, IDENT_RE$1 + '\\s*:'))),
            relevance: 0,
            contains: [{
              className: 'attr',
              begin: IDENT_RE$1 + lookahead('\\s*:'),
              relevance: 0
            }]
          }, {
            // "value" container
            begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [COMMENT, hljs.REGEXP_MODE, {
              className: 'function',
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: '(\\(' + '[^()]*(\\(' + '[^()]*(\\(' + '[^()]*' + '\\))*[^()]*' + '\\))*[^()]*' + '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
              returnBegin: true,
              end: '\\s*=>',
              contains: [{
                className: 'params',
                variants: [{
                  begin: hljs.UNDERSCORE_IDENT_RE
                }, {
                  className: null,
                  begin: /\(\s*\)/,
                  skip: true
                }, {
                  begin: /\(/,
                  end: /\)/,
                  excludeBegin: true,
                  excludeEnd: true,
                  keywords: KEYWORDS$1,
                  contains: PARAMS_CONTAINS
                }]
              }]
            }, {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            }, {
              className: '',
              begin: /\s/,
              end: /\s*/,
              skip: true
            }, {
              // JSX
              variants: [{
                begin: FRAGMENT.begin,
                end: FRAGMENT.end
              }, {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }],
              subLanguage: 'xml',
              contains: [{
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }]
            }],
            relevance: 0
          }, {
            className: 'function',
            beginKeywords: 'function',
            end: /[{;]/,
            excludeEnd: true,
            keywords: KEYWORDS$1,
            contains: ['self', hljs.inherit(hljs.TITLE_MODE, {
              begin: IDENT_RE$1
            }), PARAMS],
            illegal: /%/
          }, {
            className: 'function',
            // we have to count the parens to make sure we actually have the correct
            // bounding ( ).  There could be any number of sub-expressions inside
            // also surrounded by parens.
            begin: hljs.UNDERSCORE_IDENT_RE + '\\(' + // first parens
            '[^()]*(\\(' + '[^()]*(\\(' + '[^()]*' + '\\))*[^()]*' + '\\))*[^()]*' + '\\)\\s*{',
            // end parens
            returnBegin: true,
            contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {
              begin: IDENT_RE$1
            })]
          }, // hack: prevents detection of keywords in some circumstances
          // .keyword()
          // $keyword = x
          {
            variants: [{
              begin: '\\.' + IDENT_RE$1
            }, {
              begin: '\\$' + IDENT_RE$1
            }],
            relevance: 0
          }, {
            // ES6 class
            className: 'class',
            beginKeywords: 'class',
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:"\[\]]/,
            contains: [{
              beginKeywords: 'extends'
            }, hljs.UNDERSCORE_TITLE_MODE]
          }, {
            begin: /\b(?=constructor)/,
            end: /[\{;]/,
            excludeEnd: true,
            contains: [hljs.inherit(hljs.TITLE_MODE, {
              begin: IDENT_RE$1
            }), 'self', PARAMS]
          }, {
            begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
            end: /{/,
            keywords: "get set",
            contains: [hljs.inherit(hljs.TITLE_MODE, {
              begin: IDENT_RE$1
            }), {
              begin: /\(\)/
            }, // eat to avoid empty params
            PARAMS]
          }, {
            begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

          }]
        };
      }
      /*
      Language: TypeScript
      Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
      Contributors: Ike Ku <dempfi@yahoo.com>
      Description: TypeScript is a strict superset of JavaScript
      Website: https://www.typescriptlang.org
      Category: common, scripting
      */

      /** @type LanguageFn */


      function typescript(hljs) {
        var IDENT_RE$1 = IDENT_RE;
        var NAMESPACE = {
          beginKeywords: 'namespace',
          end: /\{/,
          excludeEnd: true
        };
        var INTERFACE = {
          beginKeywords: 'interface',
          end: /\{/,
          excludeEnd: true,
          keywords: 'interface extends'
        };
        var USE_STRICT = {
          className: 'meta',
          relevance: 10,
          begin: /^\s*['"]use strict['"]/
        };
        var TYPES = ["any", "void", "number", "boolean", "string", "object", "never", "enum"];
        var TS_SPECIFIC_KEYWORDS = ["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"];
        var KEYWORDS$1 = {
          $pattern: IDENT_RE,
          keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS).join(" "),
          literal: LITERALS.join(" "),
          built_in: BUILT_INS.concat(TYPES).join(" ")
        };
        var DECORATOR = {
          className: 'meta',
          begin: '@' + IDENT_RE$1
        };

        var swapMode = function swapMode(mode, label, replacement) {
          var indx = mode.contains.findIndex(function (m) {
            return m.label === label;
          });

          if (indx === -1) {
            throw new Error("can not find mode to replace");
          }

          mode.contains.splice(indx, 1, replacement);
        };

        var tsLanguage = javascript(hljs); // this should update anywhere keywords is used since
        // it will be the same actual JS object

        Object.assign(tsLanguage.keywords, KEYWORDS$1);
        tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
        tsLanguage.contains = tsLanguage.contains.concat([DECORATOR, NAMESPACE, INTERFACE]); // TS gets a simpler shebang rule than JS

        swapMode(tsLanguage, "shebang", hljs.SHEBANG()); // JS use strict rule purposely excludes `asm` which makes no sense

        swapMode(tsLanguage, "use_strict", USE_STRICT);
        var functionDeclaration = tsLanguage.contains.find(function (m) {
          return m.className === "function";
        });
        functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript

        Object.assign(tsLanguage, {
          name: 'TypeScript',
          aliases: ['ts']
        });
        return tsLanguage;
      }

      module.exports = typescript;
      /***/
    },

    /***/
    "yH/G":
    /*!*************************************************************!*\
      !*** ./src/@fury/shared/highlightjs/highlight.directive.ts ***!
      \*************************************************************/

    /*! exports provided: HighlightDirective */

    /***/
    function yHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
        return HighlightDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! highlight.js/lib/core */
      "ECCn");
      /* harmony import */


      var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! highlight.js/lib/languages/typescript */
      "r0Rl");
      /* harmony import */


      var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! highlight.js/lib/languages/xml */
      "jctj");
      /* harmony import */


      var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__);

      highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["registerLanguage"]('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_3__);
      highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__);

      var HighlightDirective = /*#__PURE__*/function () {
        function HighlightDirective(elem) {
          _classCallCheck(this, HighlightDirective);

          this.elem = elem;
        }

        _createClass(HighlightDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["highlightBlock"](this.elem.nativeElement);
          }
        }]);

        return HighlightDirective;
      }();

      HighlightDirective.ɵfac = function HighlightDirective_Factory(t) {
        return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HighlightDirective,
        selectors: [["code", "furyHighlight", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'code[furyHighlight]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-components-components-module~pages-forms-form-elements-form-elements-module-es5.js.map