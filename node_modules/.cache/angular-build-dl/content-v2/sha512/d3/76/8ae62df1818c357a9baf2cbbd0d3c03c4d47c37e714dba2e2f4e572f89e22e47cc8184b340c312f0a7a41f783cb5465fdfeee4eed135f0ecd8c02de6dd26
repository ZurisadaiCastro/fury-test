(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blank-blank-module"], {
    /***/
    "7pIB":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
      \*******************************************************************************/

    /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

    /***/
    function pIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
        return FileDropDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileItem", function () {
        return FileItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
        return FileLikeObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
        return FileSelectDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
        return FileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
        return FileUploader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} node
       * @return {?}
       */


      function isElement(node) {
        return !!(node && (node.nodeName || node.prop && node.attr && node.find));
      }

      var FileLikeObject = /*#__PURE__*/function () {
        /**
         * @param {?} fileOrInput
         */
        function FileLikeObject(fileOrInput) {
          _classCallCheck(this, FileLikeObject);

          this.rawFile = fileOrInput;
          /** @type {?} */

          var isInput = isElement(fileOrInput);
          /** @type {?} */

          var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
          /** @type {?} */

          var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
          /** @type {?} */

          var method = '_createFrom' + postfix;

          /** @type {?} */
          this[method](fakePathOrObject);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(FileLikeObject, [{
          key: "_createFromFakePath",
          value: function _createFromFakePath(path) {
            this.lastModifiedDate = void 0;
            this.size = void 0;
            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
          }
          /**
           * @param {?} object
           * @return {?}
           */

        }, {
          key: "_createFromObject",
          value: function _createFromObject(object) {
            this.size = object.size;
            this.type = object.type;
            this.name = object.name;
          }
        }]);

        return FileLikeObject;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileItem = /*#__PURE__*/function () {
        /**
         * @param {?} uploader
         * @param {?} some
         * @param {?} options
         */
        function FileItem(uploader, some, options) {
          _classCallCheck(this, FileItem);

          this.url = '/';
          this.headers = [];
          this.withCredentials = true;
          this.formData = [];
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.uploader = uploader;
          this.some = some;
          this.options = options;
          this.file = new FileLikeObject(some);
          this._file = some;

          if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
          }

          this.url = uploader.options.url;
        }
        /**
         * @return {?}
         */


        _createClass(FileItem, [{
          key: "upload",
          value: function upload() {
            try {
              this.uploader.uploadItem(this);
            } catch (e) {
              this.uploader._onCompleteItem(this, '', 0, {});

              this.uploader._onErrorItem(this, '', 0, {});
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel() {
            this.uploader.cancelItem(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.uploader.removeFromQueue(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBeforeUpload",
          value: function onBeforeUpload() {
            return void 0;
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildForm",
          value: function onBuildForm(form) {
            return {
              form: form
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgress",
          value: function onProgress(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccess",
          value: function onSuccess(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancel",
          value: function onCancel(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onComplete",
          value: function onComplete(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onBeforeUpload",
          value: function _onBeforeUpload() {
            this.isReady = true;
            this.isUploading = true;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = false;
            this.progress = 0;
            this.onBeforeUpload();
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildForm",
          value: function _onBuildForm(form) {
            this.onBuildForm(form);
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgress",
          value: function _onProgress(progress) {
            this.progress = progress;
            this.onProgress(progress);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccess",
          value: function _onSuccess(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = true;
            this.isCancel = false;
            this.isError = false;
            this.progress = 100;
            this.index = void 0;
            this.onSuccess(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onError",
          value: function _onError(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = true;
            this.progress = 0;
            this.index = void 0;
            this.onError(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancel",
          value: function _onCancel(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = true;
            this.isError = false;
            this.progress = 0;
            this.index = void 0;
            this.onCancel(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onComplete",
          value: function _onComplete(response, status, headers) {
            this.onComplete(response, status, headers);

            if (this.uploader.options.removeAfterUpload) {
              this.remove();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_prepareToUploading",
          value: function _prepareToUploading() {
            this.index = this.index || ++this.uploader._nextIndex;
            this.isReady = true;
          }
        }]);

        return FileItem;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileType = /*#__PURE__*/function () {
        function FileType() {
          _classCallCheck(this, FileType);
        }

        _createClass(FileType, null, [{
          key: "getMimeClass",

          /**
           * @param {?} file
           * @return {?}
           */
          value: function getMimeClass(file) {
            /** @type {?} */
            var mimeClass = 'application';

            if (this.mime_psd.indexOf(file.type) !== -1) {
              mimeClass = 'image';
            } else if (file.type.match('image.*')) {
              mimeClass = 'image';
            } else if (file.type.match('video.*')) {
              mimeClass = 'video';
            } else if (file.type.match('audio.*')) {
              mimeClass = 'audio';
            } else if (file.type === 'application/pdf') {
              mimeClass = 'pdf';
            } else if (this.mime_compress.indexOf(file.type) !== -1) {
              mimeClass = 'compress';
            } else if (this.mime_doc.indexOf(file.type) !== -1) {
              mimeClass = 'doc';
            } else if (this.mime_xsl.indexOf(file.type) !== -1) {
              mimeClass = 'xls';
            } else if (this.mime_ppt.indexOf(file.type) !== -1) {
              mimeClass = 'ppt';
            }

            if (mimeClass === 'application') {
              mimeClass = this.fileTypeDetection(file.name);
            }

            return mimeClass;
          }
          /**
           * @param {?} inputFilename
           * @return {?}
           */

        }, {
          key: "fileTypeDetection",
          value: function fileTypeDetection(inputFilename) {
            /** @type {?} */
            var types = {
              'jpg': 'image',
              'jpeg': 'image',
              'tif': 'image',
              'psd': 'image',
              'bmp': 'image',
              'png': 'image',
              'nef': 'image',
              'tiff': 'image',
              'cr2': 'image',
              'dwg': 'image',
              'cdr': 'image',
              'ai': 'image',
              'indd': 'image',
              'pin': 'image',
              'cdp': 'image',
              'skp': 'image',
              'stp': 'image',
              '3dm': 'image',
              'mp3': 'audio',
              'wav': 'audio',
              'wma': 'audio',
              'mod': 'audio',
              'm4a': 'audio',
              'compress': 'compress',
              'zip': 'compress',
              'rar': 'compress',
              '7z': 'compress',
              'lz': 'compress',
              'z01': 'compress',
              'bz2': 'compress',
              'gz': 'compress',
              'pdf': 'pdf',
              'xls': 'xls',
              'xlsx': 'xls',
              'ods': 'xls',
              'mp4': 'video',
              'avi': 'video',
              'wmv': 'video',
              'mpg': 'video',
              'mts': 'video',
              'flv': 'video',
              '3gp': 'video',
              'vob': 'video',
              'm4v': 'video',
              'mpeg': 'video',
              'm2ts': 'video',
              'mov': 'video',
              'doc': 'doc',
              'docx': 'doc',
              'eps': 'doc',
              'txt': 'doc',
              'odt': 'doc',
              'rtf': 'doc',
              'ppt': 'ppt',
              'pptx': 'ppt',
              'pps': 'ppt',
              'ppsx': 'ppt',
              'odp': 'ppt'
            };
            /** @type {?} */

            var chunks = inputFilename.split('.');

            if (chunks.length < 2) {
              return 'application';
            }
            /** @type {?} */


            var extension = chunks[chunks.length - 1].toLowerCase();

            if (types[extension] === undefined) {
              return 'application';
            } else {
              return types[extension];
            }
          }
        }]);

        return FileType;
      }();
      /*  MS office  */


      FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
      FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
      FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
      /* PSD */

      FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
      /* Compressed files */

      FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value
       * @return {?}
       */


      function _isFile(value) {
        return File && value instanceof File;
      }
      /**
       * @record
       */


      function Headers() {}

      if (false) {}
      /**
       * @record
       */


      function FileUploaderOptions() {}

      if (false) {}

      var FileUploader = /*#__PURE__*/function () {
        /**
         * @param {?} options
         */
        function FileUploader(options) {
          _classCallCheck(this, FileUploader);

          this.isUploading = false;
          this.queue = [];
          this.progress = 0;
          this._nextIndex = 0;
          this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction:
            /**
            * @param {?} item
            * @return {?}
            */
            function formatDataFunction(item) {
              return item._file;
            },
            formatDataFunctionIsAsync: false
          };
          this.setOptions(options);
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(FileUploader, [{
          key: "setOptions",
          value: function setOptions(options) {
            this.options = Object.assign(this.options, options);
            this.authToken = this.options.authToken;
            this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
            this.autoUpload = this.options.autoUpload;
            this.options.filters.unshift({
              name: 'queueLimit',
              fn: this._queueLimitFilter
            });

            if (this.options.maxFileSize) {
              this.options.filters.unshift({
                name: 'fileSize',
                fn: this._fileSizeFilter
              });
            }

            if (this.options.allowedFileType) {
              this.options.filters.unshift({
                name: 'fileType',
                fn: this._fileTypeFilter
              });
            }

            if (this.options.allowedMimeType) {
              this.options.filters.unshift({
                name: 'mimeType',
                fn: this._mimeTypeFilter
              });
            }

            for (var i = 0; i < this.queue.length; i++) {
              this.queue[i].url = this.options.url;
            }
          }
          /**
           * @param {?} files
           * @param {?=} options
           * @param {?=} filters
           * @return {?}
           */

        }, {
          key: "addToQueue",
          value: function addToQueue(files, options, filters) {
            var _this = this;

            /** @type {?} */
            var list = [];

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                list.push(file);
              }
              /** @type {?} */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var arrayOfFilters = this._getFilters(filters);
            /** @type {?} */


            var count = this.queue.length;
            /** @type {?} */

            var addedFileItems = [];
            list.map(
            /**
            * @param {?} some
            * @return {?}
            */
            function (some) {
              if (!options) {
                options = _this.options;
              }
              /** @type {?} */


              var temp = new FileLikeObject(some);

              if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);

                _this.queue.push(fileItem);

                _this._onAfterAddingFile(fileItem);
              } else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];

                _this._onWhenAddingFileFailed(temp, filter, options);
              }
            });

            if (this.queue.length !== count) {
              this._onAfterAddingAll(addedFileItems);

              this.progress = this._getTotalProgress();
            }

            this._render();

            if (this.options.autoUpload) {
              this.uploadAll();
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "removeFromQueue",
          value: function removeFromQueue(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];

            if (item.isUploading) {
              item.cancel();
            }

            this.queue.splice(index, 1);
            this.progress = this._getTotalProgress();
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearQueue",
          value: function clearQueue() {
            while (this.queue.length) {
              this.queue[0].remove();
            }

            this.progress = 0;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "uploadItem",
          value: function uploadItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

            item._prepareToUploading();

            if (this.isUploading) {
              return;
            }

            this.isUploading = true;

            /** @type {?} */
            this[transport](item);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cancelItem",
          value: function cancelItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var prop = this.options.isHTML5 ? item._xhr : item._form;

            if (item && item.isUploading) {
              prop.abort();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "uploadAll",
          value: function uploadAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems().filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploading;
            });

            if (!items.length) {
              return;
            }

            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._prepareToUploading();
            });
            items[0].upload();
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancelAll",
          value: function cancelAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems();
            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.cancel();
            });
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFile",
          value: function isFile(value) {
            return _isFile(value);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFileLikeObject",
          value: function isFileLikeObject(value) {
            return value instanceof FileLikeObject;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getIndexOfItem",
          value: function getIndexOfItem(value) {
            return typeof value === 'number' ? value : this.queue.indexOf(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNotUploadedItems",
          value: function getNotUploadedItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploaded;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "getReadyItems",
          value: function getReadyItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isReady && !item.isUploading;
            }).sort(
            /**
            * @param {?} item1
            * @param {?} item2
            * @return {?}
            */
            function (item1, item2) {
              return item1.index - item2.index;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            return void 0;
          }
          /**
           * @param {?} fileItems
           * @return {?}
           */

        }, {
          key: "onAfterAddingAll",
          value: function onAfterAddingAll(fileItems) {
            return {
              fileItems: fileItems
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildItemForm",
          value: function onBuildItemForm(fileItem, form) {
            return {
              fileItem: fileItem,
              form: form
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onAfterAddingFile",
          value: function onAfterAddingFile(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "onWhenAddingFileFailed",
          value: function onWhenAddingFileFailed(item, filter, options) {
            return {
              item: item,
              filter: filter,
              options: options
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onBeforeUploadItem",
          value: function onBeforeUploadItem(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressItem",
          value: function onProgressItem(fileItem, progress) {
            return {
              fileItem: fileItem,
              progress: progress
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressAll",
          value: function onProgressAll(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccessItem",
          value: function onSuccessItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onErrorItem",
          value: function onErrorItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancelItem",
          value: function onCancelItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCompleteItem",
          value: function onCompleteItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCompleteAll",
          value: function onCompleteAll() {
            return void 0;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_mimeTypeFilter",
          value: function _mimeTypeFilter(item) {
            return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileSizeFilter",
          value: function _fileSizeFilter(item) {
            return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileTypeFilter",
          value: function _fileTypeFilter(item) {
            return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onErrorItem",
          value: function _onErrorItem(item, response, status, headers) {
            item._onError(response, status, headers);

            this.onErrorItem(item, response, status, headers);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCompleteItem",
          value: function _onCompleteItem(item, response, status, headers) {
            item._onComplete(response, status, headers);

            this.onCompleteItem(item, response, status, headers);
            /** @type {?} */

            var nextItem = this.getReadyItems()[0];
            this.isUploading = false;

            if (nextItem) {
              nextItem.upload();
              return;
            }

            this.onCompleteAll();
            this.progress = this._getTotalProgress();

            this._render();
          }
          /**
           * @protected
           * @param {?} parsedHeaders
           * @return {?}
           */

        }, {
          key: "_headersGetter",
          value: function _headersGetter(parsedHeaders) {
            return (
              /**
              * @param {?} name
              * @return {?}
              */
              function (name) {
                if (name) {
                  return parsedHeaders[name.toLowerCase()] || void 0;
                }

                return parsedHeaders;
              }
            );
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_xhrTransport",
          value: function _xhrTransport(item) {
            var _this2 = this;

            /** @type {?} */
            var that = this;
            /** @type {?} */

            var xhr = item._xhr = new XMLHttpRequest();
            /** @type {?} */

            var sendable;

            this._onBeforeUploadItem(item);

            if (typeof item._file.size !== 'number') {
              throw new TypeError('The file specified is no longer valid');
            }

            if (!this.options.disableMultipart) {
              sendable = new FormData();

              this._onBuildItemForm(item, sendable);
              /** @type {?} */


              var appendFile =
              /**
              * @return {?}
              */
              function appendFile() {
                return sendable.append(item.alias, item._file, item.file.name);
              };

              if (!this.options.parametersBeforeFiles) {
                appendFile();
              } // For AWS, Additional Parameters must come BEFORE Files


              if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  /** @type {?} */
                  var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                  if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                    paramVal = paramVal.replace('{{file_name}}', item.file.name);
                  }

                  sendable.append(key, paramVal);
                });
              }

              if (this.options.parametersBeforeFiles) {
                appendFile();
              }
            } else {
              sendable = this.options.formatDataFunction(item);
            }

            xhr.upload.onprogress =
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

              _this2._onProgressItem(item, progress);
            };

            xhr.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);
              /** @type {?} */


              var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
              /** @type {?} */

              var method = '_on' + gist + 'Item';

              /** @type {?} */
              _this2[method](item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onerror =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onErrorItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onabort =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onCancelItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.open(item.method, item.url, true);
            xhr.withCredentials = item.withCredentials;

            if (this.options.headers) {
              var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var header = _step2.value;
                  xhr.setRequestHeader(header.name, header.value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (item.headers.length) {
              var _iterator3 = _createForOfIteratorHelper(item.headers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _header = _step3.value;
                  xhr.setRequestHeader(_header.name, _header.value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (this.authToken) {
              xhr.setRequestHeader(this.authTokenHeader, this.authToken);
            }

            xhr.onreadystatechange =
            /**
            * @return {?}
            */
            function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
              }
            };

            if (this.options.formatDataFunctionIsAsync) {
              sendable.then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                return xhr.send(JSON.stringify(result));
              });
            } else {
              xhr.send(sendable);
            }

            this._render();
          }
          /**
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "_getTotalProgress",
          value: function _getTotalProgress() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.options.removeAfterUpload) {
              return value;
            }
            /** @type {?} */


            var notUploaded = this.getNotUploadedItems().length;
            /** @type {?} */

            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
            /** @type {?} */

            var ratio = 100 / this.queue.length;
            /** @type {?} */

            var current = value * ratio / 100;
            return Math.round(uploaded * ratio + current);
          }
          /**
           * @protected
           * @param {?} filters
           * @return {?}
           */

        }, {
          key: "_getFilters",
          value: function _getFilters(filters) {
            if (!filters) {
              return this.options.filters;
            }

            if (Array.isArray(filters)) {
              return filters;
            }

            if (typeof filters === 'string') {
              /** @type {?} */
              var names = filters.match(/[^\s,]+/g);
              return this.options.filters.filter(
              /**
              * @param {?} filter
              * @return {?}
              */
              function (filter) {
                return names.indexOf(filter.name) !== -1;
              });
            }

            return this.options.filters;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_render",
          value: function _render() {
            return void 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_queueLimitFilter",
          value: function _queueLimitFilter() {
            return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
          }
          /**
           * @protected
           * @param {?} file
           * @param {?} filters
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_isValidFile",
          value: function _isValidFile(file, filters, options) {
            var _this3 = this;

            this._failFilterIndex = -1;
            return !filters.length ? true : filters.every(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              _this3._failFilterIndex++;
              return filter.fn.call(_this3, file, options);
            });
          }
          /**
           * @protected
           * @param {?} status
           * @return {?}
           */

        }, {
          key: "_isSuccessCode",
          value: function _isSuccessCode(status) {
            return status >= 200 && status < 300 || status === 304;
          }
          /**
           * @protected
           * @param {?} response
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_transformResponse",
          value: function _transformResponse(response, headers) {
            return response;
          }
          /**
           * @protected
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_parseHeaders",
          value: function _parseHeaders(headers) {
            /** @type {?} */
            var parsed = {};
            /** @type {?} */

            var key;
            /** @type {?} */

            var val;
            /** @type {?} */

            var i;

            if (!headers) {
              return parsed;
            }

            headers.split('\n').map(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              i = line.indexOf(':');
              key = line.slice(0, i).trim().toLowerCase();
              val = line.slice(i + 1).trim();

              if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
              }
            });
            return parsed;
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_onWhenAddingFileFailed",
          value: function _onWhenAddingFileFailed(item, filter, options) {
            this.onWhenAddingFileFailed(item, filter, options);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onAfterAddingFile",
          value: function _onAfterAddingFile(item) {
            this.onAfterAddingFile(item);
          }
          /**
           * @protected
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "_onAfterAddingAll",
          value: function _onAfterAddingAll(items) {
            this.onAfterAddingAll(items);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onBeforeUploadItem",
          value: function _onBeforeUploadItem(item) {
            item._onBeforeUpload();

            this.onBeforeUploadItem(item);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildItemForm",
          value: function _onBuildItemForm(item, form) {
            item._onBuildForm(form);

            this.onBuildItemForm(item, form);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgressItem",
          value: function _onProgressItem(item, progress) {
            /** @type {?} */
            var total = this._getTotalProgress(progress);

            this.progress = total;

            item._onProgress(progress);

            this.onProgressItem(item, progress);
            this.onProgressAll(total);

            this._render();
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccessItem",
          value: function _onSuccessItem(item, response, status, headers) {
            item._onSuccess(response, status, headers);

            this.onSuccessItem(item, response, status, headers);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancelItem",
          value: function _onCancelItem(item, response, status, headers) {
            item._onCancel(response, status, headers);

            this.onCancelItem(item, response, status, headers);
          }
        }]);

        return FileUploader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileSelectDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileSelectDirective(element) {
          _classCallCheck(this, FileSelectDirective);

          this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileSelectDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEmptyAfterSelection",
          value: function isEmptyAfterSelection() {
            return !!this.element.nativeElement.attributes.multiple;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange() {
            /** @type {?} */
            var files = this.element.nativeElement.files;
            /** @type {?} */

            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();
            this.uploader.addToQueue(files, options, filters);
            this.onFileSelected.emit(files);

            if (this.isEmptyAfterSelection()) {
              this.element.nativeElement.value = '';
            }
          }
        }]);

        return FileSelectDirective;
      }();

      FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
        return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileSelectDirective,
        selectors: [["", "ng2FileSelect", ""]],
        hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
              return ctx.onChange();
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          onFileSelected: "onFileSelected"
        }
      });
      /** @nocollapse */

      FileSelectDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileSelectDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileSelect]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onFileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @return {?}
           */
          onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileDropDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileDropDirective(element) {
          _classCallCheck(this, FileDropDirective);

          this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileDropDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!transfer) {
              return;
            }
            /** @type {?} */


            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();

            this._preventAndStop(event);

            this.uploader.addToQueue(transfer.files, options, filters);
            this.fileOver.emit(false);
            this.onFileDrop.emit(transfer.files);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!this._haveFiles(transfer.types)) {
              return;
            }

            transfer.dropEffect = 'copy';

            this._preventAndStop(event);

            this.fileOver.emit(true);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            if (
            /** @type {?} */
            this.element) {
              if (event.currentTarget ===
              /** @type {?} */
              this.element[0]) {
                return;
              }
            }

            this._preventAndStop(event);

            this.fileOver.emit(false);
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_getTransfer",
          value: function _getTransfer(event) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_preventAndStop",
          value: function _preventAndStop(event) {
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * @protected
           * @param {?} types
           * @return {?}
           */

        }, {
          key: "_haveFiles",
          value: function _haveFiles(types) {
            if (!types) {
              return false;
            }

            if (types.indexOf) {
              return types.indexOf('Files') !== -1;
            } else if (types.contains) {
              return types.contains('Files');
            } else {
              return false;
            }
          }
        }]);

        return FileDropDirective;
      }();

      FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
        return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileDropDirective,
        selectors: [["", "ng2FileDrop", ""]],
        hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
              return ctx.onDragOver($event);
            })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
              return ctx.onDragLeave($event);
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          fileOver: "fileOver",
          onFileDrop: "onFileDrop"
        }
      });
      /** @nocollapse */

      FileDropDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileDropDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileDrop]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileUploadModule = function FileUploadModule() {
        _classCallCheck(this, FileUploadModule);
      };

      FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FileUploadModule
      });
      FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FileUploadModule_Factory(t) {
          return new (t || FileUploadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
          declarations: function declarations() {
            return [FileDropDirective, FileSelectDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [FileDropDirective, FileSelectDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [FileDropDirective, FileSelectDirective],
            exports: [FileDropDirective, FileSelectDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng2-file-upload.js.map

      /***/

    },

    /***/
    "EZyZ":
    /*!******************************************************************!*\
      !*** ./node_modules/mat-file-upload/fesm2015/mat-file-upload.js ***!
      \******************************************************************/

    /*! exports provided: MatFileUploadComponent, MatFileUploadModule, MatFileUploadService */

    /***/
    function EZyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFileUploadComponent", function () {
        return MatFileUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFileUploadModule", function () {
        return MatFileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFileUploadService", function () {
        return MatFileUploadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");

      var MatFileUploadService = function MatFileUploadService() {
        _classCallCheck(this, MatFileUploadService);
      };

      MatFileUploadService.ɵfac = function MatFileUploadService_Factory(t) {
        return new (t || MatFileUploadService)();
      };

      MatFileUploadService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        token: MatFileUploadService,
        factory: MatFileUploadService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MatFileUploadService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var _c0 = ["fileInput"];

      function MatFileUploadComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 6);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function MatFileUploadComponent_button_7_Template_button_click_0_listener() {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4);
            var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
            return ctx_r3.uploadFiles();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("type", ctx_r1.uploadButtonType)("disabled", !ctx_r1.selectedFiles);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("aria-label", ctx_r1.uploadButtonText);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r1.uploadButtonText, " ");
        }
      }

      function MatFileUploadComponent_button_10_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-icon");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "close");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }
      }

      function MatFileUploadComponent_button_10_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "mat-icon", 10);
        }

        if (rf & 2) {
          var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("svgIcon", ctx_r6.customSvgIcon);
        }
      }

      function MatFileUploadComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 7);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function MatFileUploadComponent_button_10_Template_button_click_0_listener() {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r8);
            var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
            return ctx_r7.filesChanged(null);
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, MatFileUploadComponent_button_10_mat_icon_1_Template, 2, 0, "mat-icon", 8);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, MatFileUploadComponent_button_10_mat_icon_2_Template, 1, 1, "mat-icon", 9);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r2.customSvgIcon);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.customSvgIcon);
        }
      }

      var MatFileUploadComponent = /*#__PURE__*/function () {
        function MatFileUploadComponent() {
          _classCallCheck(this, MatFileUploadComponent);

          this.labelText = 'Select File(s)';
          this.selectButtonText = 'Select File(s)';
          this.selectFilesButtonType = 'button';
          this.uploadButtonText = 'Upload File(s)';
          this.uploadButtonType = 'button';
          this.allowMultipleFiles = false;
          this.showUploadButton = true;
          this.acceptedTypes = '*.*';
          this.customSvgIcon = null;
          this.uploadClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedFilesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedFileText = '';
        }

        _createClass(MatFileUploadComponent, [{
          key: "filesChanged",
          value: function filesChanged(files) {
            this.selectedFiles = files;
            this.selectedFilesChanged.emit(this.selectedFiles);

            if (this.selectedFiles) {
              var numSelectedFiles = this.selectedFiles.length;
              this.selectedFileText = numSelectedFiles === 1 ? this.selectedFiles[0].name : "".concat(numSelectedFiles, " files selected");
            } else {
              this.selectedFileText = '';
              this.resetFileInput();
            }
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            this.uploadClicked.emit(this.selectedFiles);
            this.resetFileInput();
          }
        }, {
          key: "resetFileInput",
          value: function resetFileInput() {
            this.fileInputRef.nativeElement.value = '';
          }
        }]);

        return MatFileUploadComponent;
      }();

      MatFileUploadComponent.ɵfac = function MatFileUploadComponent_Factory(t) {
        return new (t || MatFileUploadComponent)();
      };

      MatFileUploadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
        type: MatFileUploadComponent,
        selectors: [["mat-file-upload"]],
        viewQuery: function MatFileUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true);
          }

          if (rf & 2) {
            var _t;

            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.fileInputRef = _t.first);
          }
        },
        inputs: {
          labelText: "labelText",
          selectButtonText: "selectButtonText",
          selectFilesButtonType: "selectFilesButtonType",
          uploadButtonText: "uploadButtonText",
          uploadButtonType: "uploadButtonType",
          allowMultipleFiles: "allowMultipleFiles",
          showUploadButton: "showUploadButton",
          acceptedTypes: "acceptedTypes",
          customSvgIcon: "customSvgIcon"
        },
        outputs: {
          uploadClicked: "uploadClicked",
          selectedFilesChanged: "selectedFilesChanged"
        },
        decls: 11,
        vars: 9,
        consts: [[1, "file-input-text"], ["mat-button", "", "color", "primary", 1, "file-input-button", 3, "type", "click"], ["type", "file", 2, "display", "none", 3, "accept", "multiple", "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "class", "file-input-button", 3, "type", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "aria-label", "Remove Selected File(s)", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "file-input-button", 3, "type", "disabled", "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Remove Selected File(s)", 3, "click"], [4, "ngIf"], [3, "svgIcon", 4, "ngIf"], [3, "svgIcon"]],
        template: function MatFileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "button", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function MatFileUploadComponent_Template_button_click_2_listener() {
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9);

              var _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(6);

              return _r0.click();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "input", 2, 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function MatFileUploadComponent_Template_input_change_5_listener($event) {
              return ctx.filesChanged($event.target.files);
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, MatFileUploadComponent_button_7_Template, 2, 4, "button", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "span", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(9);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, MatFileUploadComponent_button_10_Template, 3, 2, "button", 5);
          }

          if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.labelText);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("type", ctx.selectFilesButtonType);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("aria-label", ctx.selectButtonText);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.selectButtonText);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("accept", ctx.acceptedTypes)("multiple", ctx.allowMultipleFiles);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.showUploadButton);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.selectedFileText);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.selectedFiles != null && ctx.selectedFiles.length > 0);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".file-input-button[_ngcontent-%COMP%] { margin-right: 8px !important }", ".file-input-text[_ngcontent-%COMP%] { font-size: 14px !important; margin-right: 8px !important }"]
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MatFileUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-file-upload',
            template: "\n    <span class=\"file-input-text\">{{ labelText }}</span>\n    <button\n      mat-button\n      [type]=\"selectFilesButtonType\"\n      color=\"primary\"\n      class=\"file-input-button\"\n      (click)=\"fileInput.click()\"\n      [attr.aria-label]=\"selectButtonText\"\n    >\n      <span>{{ selectButtonText }}</span>\n      <input\n        #fileInput\n        type=\"file\"\n        style=\"display: none\"\n        [accept]=\"acceptedTypes\"\n        [multiple]=\"allowMultipleFiles\"\n        (change)=\"filesChanged($event.target.files)\"\n      />\n    </button>\n    <button\n      mat-raised-button\n      [type]=\"uploadButtonType\"\n      color=\"primary\"\n      class=\"file-input-button\"\n      [disabled]=\"!selectedFiles\"\n      (click)=\"uploadFiles()\"\n      *ngIf=\"showUploadButton\"\n      [attr.aria-label]=\"uploadButtonText\"\n    >\n      {{ uploadButtonText }}\n    </button>\n    <span class=\"file-input-text\">{{ selectedFileText }}</span>\n    <button\n      mat-icon-button\n      (click)=\"filesChanged(null)\"\n      type=\"button\"\n      aria-label=\"Remove Selected File(s)\"\n       *ngIf=\"selectedFiles != null && selectedFiles.length > 0\"\n    >\n        <mat-icon *ngIf=\"!customSvgIcon\">close</mat-icon>\n        <mat-icon *ngIf=\"customSvgIcon\" [svgIcon]=\"customSvgIcon\"></mat-icon>\n    </button>\n  ",
            styles: ['.file-input-button { margin-right: 8px !important }', '.file-input-text { font-size: 14px !important; margin-right: 8px !important }']
          }]
        }], null, {
          labelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectFilesButtonType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          uploadButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          uploadButtonType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          allowMultipleFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showUploadButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          acceptedTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customSvgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          uploadClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectedFilesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
          }]
        });
      })();

      var MatFileUploadModule = function MatFileUploadModule() {
        _classCallCheck(this, MatFileUploadModule);
      };

      MatFileUploadModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
        type: MatFileUploadModule
      });
      MatFileUploadModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
        factory: function MatFileUploadModule_Factory(t) {
          return new (t || MatFileUploadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(MatFileUploadModule, {
          declarations: [MatFileUploadComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          exports: [MatFileUploadComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MatFileUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MatFileUploadComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            exports: [MatFileUploadComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of mat-file-upload
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=mat-file-upload.js.map

      /***/

    },

    /***/
    "OC/Z":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/@angular-material-components/file-input/__ivy_ngcc__/fesm2015/angular-material-components-file-input.js ***!
      \******************************************************************************************************************************/

    /*! exports provided: AcceptValidator, MaxSizeValidator, NgxMatFileInputComponent, NgxMatFileInputIcon, NgxMatFileInputModule, calculFileSize */

    /***/
    function OCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AcceptValidator", function () {
        return AcceptValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxSizeValidator", function () {
        return MaxSizeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMatFileInputComponent", function () {
        return NgxMatFileInputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMatFileInputIcon", function () {
        return NgxMatFileInputIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMatFileInputModule", function () {
        return NgxMatFileInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculFileSize", function () {
        return calculFileSize;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/file-input.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _c0 = ["inputFile"];
      var _c1 = ["inputValue"];

      function NgxMatFileInputComponent_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "attach_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c2 = [[["", "ngxMatFileInputIcon", ""]]];
      var _c3 = ["[ngxMatFileInputIcon]"];
      var nextUniqueId = 0;

      var NgxMatInputBase =
      /**
       * @param {?} _defaultErrorStateMatcher
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} ngControl
       */
      function NgxMatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        _classCallCheck(this, NgxMatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      if (false) {}
      /** @type {?} */


      var _NgxMatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(NgxMatInputBase);

      var NgxMatFileInputIcon = function NgxMatFileInputIcon() {
        _classCallCheck(this, NgxMatFileInputIcon);
      };

      NgxMatFileInputIcon.ɵfac = function NgxMatFileInputIcon_Factory(t) {
        return new (t || NgxMatFileInputIcon)();
      };

      NgxMatFileInputIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NgxMatFileInputIcon,
        selectors: [["", "ngxMatFileInputIcon", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatFileInputIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[ngxMatFileInputIcon]'
          }]
        }], null, null);
      })();

      var NgxMatFileInputComponent = /*#__PURE__*/function (_NgxMatInputMixinBase2) {
        _inherits(NgxMatFileInputComponent, _NgxMatInputMixinBase2);

        var _super = _createSuper(NgxMatFileInputComponent);

        /**
         * @param {?} _elementRef
         * @param {?} _platform
         * @param {?} _cd
         * @param {?} ngControl
         * @param {?} _parentForm
         * @param {?} _parentFormGroup
         * @param {?} _defaultErrorStateMatcher
         */
        function NgxMatFileInputComponent(_elementRef, _platform, _cd, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
          var _this4;

          _classCallCheck(this, NgxMatFileInputComponent);

          _this4 = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this4._elementRef = _elementRef;
          _this4._platform = _platform;
          _this4._cd = _cd;
          _this4.ngControl = ngControl;
          _this4.color = 'primary';
          _this4.fileNames = null;
          _this4._uid = "ngx-mat-fileinput-".concat(nextUniqueId++);
          _this4.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          _this4.focused = false;
          _this4.controlType = 'ngx-mat-file-input';
          _this4.autofilled = false;
          /**
           * Function when touched
           */

          _this4._onTouched =
          /**
          * @return {?}
          */
          function () {};
          /**
           * Function when changed
           */


          _this4._onChange =
          /**
          * @return {?}
          */
          function () {};

          _this4._disabled = false;
          _this4._multiple = false;
          _this4.placeholder = 'Choose a file';
          _this4.separator = ',';
          _this4._required = false;
          _this4._readonly = true;
          _this4.id = _this4.id;

          if (_this4.ngControl) {
            _this4.ngControl.valueAccessor = _assertThisInitialized(_this4);
          }

          return _this4;
        }
        /**
         * @return {?}
         */


        _createClass(NgxMatFileInputComponent, [{
          key: "ngOnChanges",

          /**
           * @return {?}
           */
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              this.updateErrorState();
            }
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._updateInputValue(value);
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Focuses the input.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputValueRef.nativeElement.focus(options);
          }
          /**
           * @param {?} isFocused
           * @return {?}
           */

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          }
          /**
           * Mark the field as touched
           * @return {?}
           */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._cd.markForCheck();

            this.stateChanges.next();
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            /** @type {?} */
            var validity =
            /** @type {?} */
            this._inputValueRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * @return {?}
           */

        }, {
          key: "setDescribedByIds",

          /**
           * @param {?} ids
           * @return {?}
           */
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "openFilePicker",
          value: function openFilePicker(event) {
            this._inputFileRef.nativeElement.click();

            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }

            this._markAsTouched();
          }
          /**
           * @param {?} filelist
           * @return {?}
           */

        }, {
          key: "handleFiles",
          value: function handleFiles(filelist) {
            if (filelist.length > 0) {
              /** @type {?} */
              var files = new Array();

              for (var i = 0; i < filelist.length; i++) {
                files.push(filelist.item(i));
              }

              this._updateInputValue(files);

              this._resetInputFile();

              this._onChange(this.multiple ? files : files[0]);
            }
          }
          /**
           * Handles a click on the control's container.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {}
        }, {
          key: "_resetInputFile",

          /**
           * @private
           * @return {?}
           */
          value: function _resetInputFile() {
            this._inputFileRef.nativeElement.value = "";
          }
          /**
           * @private
           * @param {?} files
           * @return {?}
           */

        }, {
          key: "_updateInputValue",
          value: function _updateInputValue(files) {
            /** @type {?} */
            var text = null;

            if (files) {
              if (Array.isArray(files)) {
                text = this._multiple ? files.map(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x.name;
                }).join(this.separator) : files[0].name;
              } else {
                text = files.name != null ? files.name : null;
              }
            }

            this._inputValueRef.nativeElement.value = text;
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * @return {?}
           */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._value = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Limiting accepted file types
           * Example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" — Accept PNG or JPEG files.
           * @return {?}
           */

        }, {
          key: "accept",
          get: function get() {
            return this._accept;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._accept = value;
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._inputValueRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * @return {?}
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
        }]);

        return NgxMatFileInputComponent;
      }(_NgxMatInputMixinBase);

      NgxMatFileInputComponent.ɵfac = function NgxMatFileInputComponent_Factory(t) {
        return new (t || NgxMatFileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]));
      };

      NgxMatFileInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NgxMatFileInputComponent,
        selectors: [["ngx-mat-file-input"]],
        contentQueries: function NgxMatFileInputComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NgxMatFileInputIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function NgxMatFileInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputFileRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputValueRef = _t.first);
          }
        },
        hostAttrs: [1, "ngx-mat-file-input"],
        inputs: {
          color: "color",
          placeholder: "placeholder",
          separator: "separator",
          id: "id",
          disabled: "disabled",
          multiple: "multiple",
          required: "required",
          value: "value",
          readonly: "readonly",
          accept: "accept",
          errorStateMatcher: "errorStateMatcher"
        },
        exportAs: ["ngx-mat-file-input"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgxMatFileInputComponent;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 8,
        vars: 13,
        consts: [["autocomplete", "off", 1, "mat-input-element", "mat-form-field-autofill-control", 3, "disabled", "required"], ["inputValue", ""], [1, "mat-form-field-suffix"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 1, "button-browse", 3, "color", "disabled", "click"], ["class", "ngx-mat-file-input--default-icon", 4, "ngIf"], ["type", "file", 1, "input-file", 3, "multiple", "accept", "change"], ["inputFile", ""], [1, "ngx-mat-file-input--default-icon"]],
        template: function NgxMatFileInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxMatFileInputComponent_Template_button_click_3_listener($event) {
              return ctx.openFilePicker($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NgxMatFileInputComponent_mat_icon_4_Template, 2, 0, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NgxMatFileInputComponent_Template_input_change_6_listener($event) {
              return ctx.handleFiles($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.color)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx._customIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", ctx.multiple)("accept", ctx.accept);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{align-items:center;display:flex;height:18px;line-height:18px}.ngx-mat-file-input .input-file{display:block;height:0;visibility:hidden;width:0}"],
        encapsulation: 2
      });
      /** @nocollapse */

      NgxMatFileInputComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
        }];
      };

      NgxMatFileInputComponent.propDecorators = {
        _inputFileRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputFile', {
            "static": true
          }]
        }],
        _inputValueRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputValue', {
            "static": true
          }]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [NgxMatFileInputIcon]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        separator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatFileInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'ngx-mat-file-input',
            template: "<input #inputValue autocomplete=\"off\" class=\"mat-input-element mat-form-field-autofill-control\" [attr.id]='id'\r\n  [attr.placeholder]='placeholder' [disabled]='disabled' [required]='required' [attr.readonly]='readonly || null'\r\n  [attr.aria-describedby]='_ariaDescribedby || null' [attr.aria-invalid]='errorState'\r\n  [attr.aria-required]='required.toString()'>\r\n<div class=\"mat-form-field-suffix\">\r\n  <button matSuffix mat-icon-button [color]=\"color\" class=\"button-browse\"  (click)=\"openFilePicker($event)\" type=\"button\"\r\n   [disabled]=\"disabled\">\r\n    <mat-icon *ngIf=\"!_customIcon\" class=\"ngx-mat-file-input--default-icon\">attach_file</mat-icon>\r\n    <ng-content select=\"[ngxMatFileInputIcon]\"></ng-content>\r\n  </button>\r\n</div>\r\n<input type=\"file\" #inputFile (change)=\"handleFiles($event.target.files)\" class=\"input-file\"\r\n  [multiple]=\"multiple\" [accept]=\"accept\">",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            host: {
              'class': 'ngx-mat-file-input'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return NgxMatFileInputComponent;
              })
            }],
            exportAs: 'ngx-mat-file-input',
            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{align-items:center;display:flex;height:18px;line-height:18px}.ngx-mat-file-input .input-file{display:block;height:0;visibility:hidden;width:0}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          _inputFileRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputFile', {
              "static": true
            }]
          }],
          _inputValueRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputValue', {
              "static": true
            }]
          }],
          _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NgxMatFileInputIcon]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/file-input.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxMatFileInputModule = function NgxMatFileInputModule() {
        _classCallCheck(this, NgxMatFileInputModule);
      };

      NgxMatFileInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NgxMatFileInputModule
      });
      NgxMatFileInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NgxMatFileInputModule_Factory(t) {
          return new (t || NgxMatFileInputModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxMatFileInputModule, {
          declarations: function declarations() {
            return [NgxMatFileInputComponent, NgxMatFileInputIcon];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]];
          },
          exports: function exports() {
            return [NgxMatFileInputComponent, NgxMatFileInputIcon];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatFileInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [NgxMatFileInputComponent, NgxMatFileInputIcon],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]],
            exports: [NgxMatFileInputComponent, NgxMatFileInputIcon]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/file-input-type.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: lib/file-input-helper.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} number
       * @return {?}
       */


      function calculFileSize(number) {
        if (number < 1024) {
          return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
          return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
          return (number / 1048576).toFixed(1) + 'MB';
        }
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/validators/max-size.validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Validator for size of file
       * @param {?} max Max of size of file (in bytes)
       * @return {?}
       */


      function MaxSizeValidator(max) {
        return (
          /**
          * @param {?} ctrl
          * @return {?}
          */
          function (ctrl) {
            max = Number(max);

            if (isNaN(max)) {
              throw 'MaxSizeValidator: max of size of file is invalid';
            }

            if (!ctrl.value) return null;
            /** @type {?} */

            var files = ctrl.value;

            if (!Array.isArray(ctrl.value)) {
              files = [ctrl.value];
            }

            if (!files.length) return null;
            /** @type {?} */

            var add =
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function add(a, b) {
              return a + b;
            };
            /** @type {?} */


            var sumSize = files.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.size;
            }).reduce(add);

            if (sumSize > max) {
              return {
                maxSize: true
              };
            }

            return null;
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/validators/accept.validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       *
       * @param {?} accept Allowable type of file
       * @return {?}
       */


      function AcceptValidator(accept) {
        return (
          /**
          * @param {?} ctrl
          * @return {?}
          */
          function (ctrl) {
            if (!accept) {
              throw 'AcceptValidator: allowable type of file can not be empty';
            }

            if (ctrl.value == null) return null;

            if (!accept.includes(ctrl.value.type)) {
              return {
                accept: true
              };
            }

            return null;
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/validators/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-material-components-file-input.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-material-components-file-input.js.map

      /***/

    },

    /***/
    "SrGn":
    /*!*****************************************************!*\
      !*** ./src/app/pages/blank/blank-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BlankRoutingModule */

    /***/
    function SrGn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankRoutingModule", function () {
        return BlankRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _BlankComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./BlankComponent */
      "rgVX");
      /* harmony import */


      var angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-file-uploader */
      "wn2B");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular-material-components/file-input */
      "OC/Z");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var mat_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! mat-file-upload */
      "EZyZ");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      var routes = [{
        path: '',
        component: _BlankComponent__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"]
      }];

      var BlankRoutingModule = function BlankRoutingModule() {
        _classCallCheck(this, BlankRoutingModule);
      };

      BlankRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BlankRoutingModule
      });
      BlankRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BlankRoutingModule_Factory(t) {
          return new (t || BlankRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__["AngularFileUploaderModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_6__["NgxMatFileInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], mat_file_upload__WEBPACK_IMPORTED_MODULE_10__["MatFileUploadModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__["AngularFileUploaderModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_6__["NgxMatFileInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], mat_file_upload__WEBPACK_IMPORTED_MODULE_10__["MatFileUploadModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__["AngularFileUploaderModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_6__["NgxMatFileInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], mat_file_upload__WEBPACK_IMPORTED_MODULE_10__["MatFileUploadModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nHp/":
    /*!*********************************************!*\
      !*** ./src/app/pages/blank/blank.module.ts ***!
      \*********************************************/

    /*! exports provided: BlankModule */

    /***/
    function nHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankModule", function () {
        return BlankModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blank-routing.module */
      "SrGn");
      /* harmony import */


      var _BlankComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./BlankComponent */
      "rgVX");
      /* harmony import */


      var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@fury/fury-shared.module */
      "WCGO");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/@fury/shared/material-components.module */
      "KthW");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      var BlankModule = function BlankModule() {
        _classCallCheck(this, BlankModule);
      };

      BlankModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BlankModule
      });
      BlankModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BlankModule_Factory(t) {
          return new (t || BlankModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankModule, {
          declarations: [_BlankComponent__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]],
            declarations: [_BlankComponent__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rgVX":
    /*!***********************************************!*\
      !*** ./src/app/pages/blank/BlankComponent.ts ***!
      \***********************************************/

    /*! exports provided: BlankComponent */

    /***/
    function rgVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");

      var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

      var BlankComponent = /*#__PURE__*/function () {
        function BlankComponent() {
          var _this5 = this;

          _classCallCheck(this, BlankComponent);

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            disableMultipart: true,
            formatDataFunctionIsAsync: true,
            formatDataFunction: function formatDataFunction(item) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                          resolve({
                            name: item._file.name,
                            length: item._file.size,
                            contentType: item._file.type,
                            date: new Date()
                          });
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            }
          });
          this.hasBaseDropZoneOver = false;
          this.hasAnotherDropZoneOver = false;
          this.response = "";
          this.uploader.response.subscribe(function (res) {
            return _this5.response = res;
          });
        }

        _createClass(BlankComponent, [{
          key: "fileOverBase",
          value: function fileOverBase(e) {
            this.hasBaseDropZoneOver = e;
          }
        }, {
          key: "fileOverAnother",
          value: function fileOverAnother(e) {
            this.hasAnotherDropZoneOver = e;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankComponent;
      }();

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["fury-blank"]],
        decls: 6,
        vars: 0,
        consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/icon?family=Material+Icons"), "rel", "stylesheet"], [1, "container"], [1, "navbar", "navbar-default"], ["href", "", 1, "navbar-brand"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Carga de Plantilla");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
          }
        },
        styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibGFuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoiYmxhbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmV5O1xyXG4gIH0iXX0= */", ".my-drop-zone[_ngcontent-%COMP%] { border: dotted 3px lightgray; }\n  .nv-file-over[_ngcontent-%COMP%] { border: dotted 3px red; } \n  .another-file-over-class[_ngcontent-%COMP%] { border: dotted 3px green; }\n\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'fury-blank',
            templateUrl: './blank.component.html',
            styleUrls: ['./blank.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wn2B":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angular-file-uploader/__ivy_ngcc__/fesm2015/angular-file-uploader.js ***!
      \*******************************************************************************************/

    /*! exports provided: AngularFileUploaderComponent, AngularFileUploaderModule */

    /***/
    function wn2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFileUploaderComponent", function () {
        return AngularFileUploaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFileUploaderModule", function () {
        return AngularFileUploaderModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AngularFileUploaderComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function AngularFileUploaderComponent_div_0_div_1_Template_div_drop_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.drop($event);
          })("dragover", function AngularFileUploaderComponent_div_0_div_1_Template_div_dragover_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.allowDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.hideSelectBtn && ctx_r2.hideResetBtn ? null : "dragNDropBtmPad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.replaceTexts == null ? null : ctx_r2.replaceTexts.dragNDropBox);
        }
      }

      function AngularFileUploaderComponent_div_0_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "sel", ctx_r3.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.replaceTexts == null ? null : ctx_r3.replaceTexts.selectFileBtn);
        }
      }

      function AngularFileUploaderComponent_div_0_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularFileUploaderComponent_div_0_input_3_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "sel", ctx_r4.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r4.formatsAllowed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx_r4.multiple ? "" : null);
        }
      }

      function AngularFileUploaderComponent_div_0_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.resetFileUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.replaceTexts == null ? null : ctx_r5.replaceTexts.resetBtn);
        }
      }

      function AngularFileUploaderComponent_div_0_br_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "width": a0
        };
      };

      function AngularFileUploaderComponent_div_0_div_8_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r20.uploadPercent + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.uploadPercent, "%");
        }
      }

      function AngularFileUploaderComponent_div_0_div_8_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_div_8_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.removeFile(i_r19, "sf");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AngularFileUploaderComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularFileUploaderComponent_div_0_div_8_div_8_Template, 3, 4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_8_a_9_Template, 2, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sf_r18 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sf_r18.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.convertSize(sf_r18.size), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isAllowedFileSingle && ctx_r7.progressBarShow && !ctx_r7.hideProgressBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.uploadStarted);
        }
      }

      function AngularFileUploaderComponent_div_0_div_9_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_div_9_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.removeFile(j_r26, "na");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AngularFileUploaderComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_9_a_9_Template, 3, 0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var na_r25 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](na_r25["fileName"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", na_r25["fileSize"], ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](na_r25["errorMsg"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.uploadStarted);
        }
      }

      function AngularFileUploaderComponent_div_0_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.uploadMsgClass, " + afu-upload-status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.uploadMsgText);
        }
      }

      function AngularFileUploaderComponent_div_0_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r10.uploadPercent + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.uploadPercent, "%");
        }
      }

      function AngularFileUploaderComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularFileUploaderComponent_div_0_div_1_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularFileUploaderComponent_div_0_label_2_Template, 2, 2, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularFileUploaderComponent_div_0_input_3_Template, 1, 3, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularFileUploaderComponent_div_0_button_4_Template, 2, 1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularFileUploaderComponent_div_0_br_5_Template, 1, 0, "br", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularFileUploaderComponent_div_0_div_8_Template, 10, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_9_Template, 10, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AngularFileUploaderComponent_div_0_p_10_Template, 2, 4, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AngularFileUploaderComponent_div_0_div_12_Template, 6, 4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.uploadFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theme == "dragNDrop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideResetBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("(", ctx_r0.formatsAllowed, ") ", ctx_r0.replaceTexts == null ? null : ctx_r0.replaceTexts.sizeLimit, ": ", ctx_r0.convertSize(ctx_r0.maxSize), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allowedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notAllowedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAllowedFileSingle && ctx_r0.progressBarShow && !ctx_r0.hideProgressBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.enableUploadBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.replaceTexts == null ? null : ctx_r0.replaceTexts.uploadBtn);
        }
      }

      function AngularFileUploaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_1_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.attachpinOnclick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularFileUploaderComponent_div_1_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.replaceTexts == null ? null : ctx_r1.replaceTexts.attachPinBtn, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "sel", ctx_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.formatsAllowed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx_r1.multiple ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "upload-file-info", ctx_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.allowedFiles[0] == null ? null : ctx_r1.allowedFiles[0].name);
        }
      }

      var AngularFileUploaderComponent = /*#__PURE__*/function () {
        function AngularFileUploaderComponent(http) {
          _classCallCheck(this, AngularFileUploaderComponent);

          this.http = http;
          this.resetUpload = false; // Outputs

          this.ApiResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.everythingDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.allowedFiles = [];
          this.notAllowedFiles = [];
          this.Caption = [];
          this.isAllowedFileSingle = true;
          this.progressBarShow = false;
          this.enableUploadBtn = false;
          this.uploadMsg = false;
          this.afterUpload = false;
          this.uploadStarted = false;
          this.currentUploads = [];
          this.fileNameIndex = true;
          this.idDate = +new Date();
        }

        _createClass(AngularFileUploaderComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Track changes in Configuration and see if user has even provided Configuration.
            if (changes.config && this.config) {
              // Assign User Configurations to Library Properties.
              this.theme = this.config.theme || '';
              this.id = this.config.id || parseInt((this.idDate / 10000).toString().split('.')[1], 10) + Math.floor(Math.random() * 20) * 10000;
              this.hideProgressBar = this.config.hideProgressBar || false;
              this.hideResetBtn = this.config.hideResetBtn || false;
              this.hideSelectBtn = this.config.hideSelectBtn || false;
              this.maxSize = (this.config.maxSize || 20) * 1024000; // mb to bytes.

              this.uploadAPI = this.config.uploadAPI.url;
              this.method = this.config.uploadAPI.method || 'POST';
              this.formatsAllowed = this.config.formatsAllowed || '.jpg,.png,.pdf,.docx,.txt,.gif,.jpeg';
              this.multiple = this.config.multiple || false;
              this.headers = this.config.uploadAPI.headers || {};
              this.params = this.config.uploadAPI.params || {};
              this.responseType = this.config.uploadAPI.responseType || null;
              this.fileNameIndex = this.config.fileNameIndex === false ? false : true;
              this.replaceTexts = {
                selectFileBtn: this.multiple ? 'Select Files' : 'Select File',
                resetBtn: 'Reset',
                uploadBtn: 'Upload',
                dragNDropBox: 'Drag N Drop',
                attachPinBtn: this.multiple ? 'Attach Files...' : 'Attach File...',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !',
                sizeLimit: 'Size Limit'
              }; // default replaceText.

              if (this.config.replaceTexts) {
                // updated replaceText if user has provided any.
                this.replaceTexts = Object.assign(Object.assign({}, this.replaceTexts), this.config.replaceTexts);
              }
            } // Reset when resetUpload value changes from false to true.


            if (changes.resetUpload) {
              if (changes.resetUpload.currentValue === true) {
                this.resetFileUpload();
              }
            }
          } // Reset following properties.

        }, {
          key: "resetFileUpload",
          value: function resetFileUpload() {
            this.allowedFiles = [];
            this.Caption = [];
            this.notAllowedFiles = [];
            this.uploadMsg = false;
            this.enableUploadBtn = false;
          } // When user selects files.

        }, {
          key: "onChange",
          value: function onChange(event) {
            this.notAllowedFiles = [];
            var fileExtRegExp = /(?:\.([^.]+))?$/;
            var fileList;

            if (this.afterUpload || !this.multiple) {
              this.allowedFiles = [];
              this.Caption = [];
              this.afterUpload = false;
            }

            if (event.type === 'drop') {
              fileList = event.dataTransfer.files;
            } else {
              fileList = event.target.files || event.srcElement.files;
            } // 'forEach' does not exist on 'filelist' that's why this good old 'for' is used.


            for (var i = 0; i < fileList.length; i++) {
              var currentFileExt = fileExtRegExp.exec(fileList[i].name)[1].toLowerCase(); // Get file extension.

              var isFormatValid = this.formatsAllowed.includes(currentFileExt);
              var isSizeValid = fileList[i].size <= this.maxSize; // Check whether current file format and size is correct as specified in the configurations.

              if (isFormatValid && isSizeValid) {
                this.allowedFiles.push(fileList[i]);
              } else {
                this.notAllowedFiles.push({
                  fileName: fileList[i].name,
                  fileSize: this.convertSize(fileList[i].size),
                  errorMsg: !isFormatValid ? 'Invalid format' : 'Invalid size'
                });
              }
            } // If there's any allowedFiles.


            if (this.allowedFiles.length > 0) {
              this.enableUploadBtn = true; // Upload the files directly if theme is attach pin (as upload btn is not there for this theme).

              if (this.theme === 'attachPin') {
                this.uploadFiles();
              }
            } else {
              this.enableUploadBtn = false;
            }

            this.uploadMsg = false;
            this.uploadStarted = false;
            this.uploadPercent = 0;
            event.target.value = null;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            var _this6 = this;

            this.progressBarShow = true;
            this.uploadStarted = true;
            this.notAllowedFiles = [];
            var isError = false;
            this.isAllowedFileSingle = this.allowedFiles.length <= 1;
            var formData = new FormData(); // Add data to be sent in this request

            this.allowedFiles.forEach(function (file, i) {
              formData.append(_this6.Caption[i] || 'file' + (_this6.fileNameIndex ? i : ''), _this6.allowedFiles[i]);
            });
            /*
            Not Working, Headers null
            // Contruct Headers
            const headers = new HttpHeaders();
            for (const key of Object.keys(this.headers)) {
              headers.append(key, this.headers[key]);
            }
                  // Contruct Params
            const params = new HttpParams();
            for (const key of Object.keys(this.params)) {
              params.append(key, this.params[key]);
            } */

            var options = {
              headers: this.headers,
              params: this.params
            };
            if (this.responseType) options.responseType = this.responseType;
            this.http.request(this.method.toUpperCase(), this.uploadAPI, Object.assign({
              body: formData,
              reportProgress: true,
              observe: 'events'
            }, options)).subscribe(function (event) {
              // Upload Progress
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this6.enableUploadBtn = false; // button should be disabled if process uploading

                var currentDone = event.loaded / event.total;
                _this6.uploadPercent = Math.round(event.loaded / event.total * 100);
              } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                if (event.status === 200 || event.status === 201) {
                  // Success
                  _this6.progressBarShow = false;
                  _this6.enableUploadBtn = false;
                  _this6.uploadMsg = true;
                  _this6.afterUpload = true;

                  if (!isError) {
                    _this6.uploadMsgText = _this6.replaceTexts.afterUploadMsg_success;
                    _this6.uploadMsgClass = 'text-success lead';
                  }
                } else {
                  // Failure
                  isError = true;

                  _this6.handleErrors();
                }

                _this6.ApiResponse.emit(event);
              } else {//console.log('Event Other: ', event);
              }
            }, function (error) {
              // Failure
              isError = true;

              _this6.handleErrors();

              _this6.ApiResponse.emit(error);
            });
          }
        }, {
          key: "handleErrors",
          value: function handleErrors() {
            this.progressBarShow = false;
            this.enableUploadBtn = false;
            this.uploadMsg = true;
            this.afterUpload = true;
            this.uploadMsgText = this.replaceTexts.afterUploadMsg_error;
            this.uploadMsgClass = 'text-danger lead';
          }
        }, {
          key: "removeFile",
          value: function removeFile(i, sf_na) {
            if (sf_na === 'sf') {
              this.allowedFiles.splice(i, 1);
              this.Caption.splice(i, 1);
            } else {
              this.notAllowedFiles.splice(i, 1);
            }

            if (this.allowedFiles.length === 0) {
              this.enableUploadBtn = false;
            }
          }
        }, {
          key: "convertSize",
          value: function convertSize(fileSize) {
            return fileSize < 1024000 ? (fileSize / 1024).toFixed(2) + ' KB' : (fileSize / 1024000).toFixed(2) + ' MB';
          }
        }, {
          key: "attachpinOnclick",
          value: function attachpinOnclick() {
            var element = document.getElementById('sel' + this.id);

            if (element !== null) {
              element.click();
            }
          }
        }, {
          key: "drop",
          value: function drop(event) {
            event.stopPropagation();
            event.preventDefault();
            this.onChange(event);
          }
        }, {
          key: "allowDrop",
          value: function allowDrop(event) {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
          }
        }]);

        return AngularFileUploaderComponent;
      }();

      AngularFileUploaderComponent.ɵfac = function AngularFileUploaderComponent_Factory(t) {
        return new (t || AngularFileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 4));
      };

      AngularFileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AngularFileUploaderComponent,
        selectors: [["angular-file-uploader"]],
        inputs: {
          resetUpload: "resetUpload",
          config: "config"
        },
        outputs: {
          ApiResponse: "ApiResponse",
          everythingDone: "everythingDone"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["class", "container", "id", "default", 4, "ngIf"], ["id", "attachPin", 4, "ngIf"], ["id", "default", 1, "container"], ["id", "dragNDrop", "class", "dragNDrop", 3, "ngClass", 4, "ngIf"], ["class", "btn btn-primary btn-sm afu-select-btn", 3, "for", 4, "ngIf"], ["type", "file", "style", "display: none", "title", "Select file", "name", "files[]", 3, "id", "accept", "change", 4, "ngIf"], ["class", "btn btn-info btn-sm resetBtn afu-reset-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "constraints-info", "afu-constraints-info"], ["class", "row afu-valid-file", 4, "ngFor", "ngForOf"], ["class", "row text-danger afu-invalid-file", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "afu-upload-btn", 3, "disabled", "click"], ["id", "dragNDrop", 1, "dragNDrop", 3, "ngClass"], [2, "position", "relative"], ["id", "div1", 1, "div1", "afu-dragndrop-box", 3, "drop", "dragover"], [1, "afu-dragndrop-text"], [1, "btn", "btn-primary", "btn-sm", "afu-select-btn", 3, "for"], ["type", "file", "title", "Select file", "name", "files[]", 2, "display", "none", 3, "id", "accept", "change"], [1, "btn", "btn-info", "btn-sm", "resetBtn", "afu-reset-btn", 3, "click"], [1, "row", "afu-valid-file"], [1, "col-xs-3", "textOverflow"], [1, "text-primary"], [1, "col-xs-3", "padMarg", "sizeC"], ["class", "progress col-xs-3 padMarg afu-progress-bar", 4, "ngIf"], ["class", "col-xs-1", "role", "button", 3, "click", 4, "ngIf"], [1, "progress", "col-xs-3", "padMarg", "afu-progress-bar"], ["role", "progressbar", 1, "progress-bar", "progress-bar-success", 3, "ngStyle"], ["role", "button", 1, "col-xs-1", 3, "click"], [1, "fa", "fa-times"], [1, "row", "text-danger", "afu-invalid-file"], [1, "col-xs-3"], ["class", "col-xs-1 delFileIcon", "role", "button", 3, "click", 4, "ngIf"], ["role", "button", 1, "col-xs-1", "delFileIcon", 3, "click"], [1, "progress", "col-xs-4", "padMarg", "afu-progress-bar"], ["id", "attachPin"], [2, "position", "relative", "padding-left", "6px"], [1, "btn", "up_btn", "afu-attach-pin", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"], [1, "label", "label-info", 3, "id"]],
        template: function AngularFileUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AngularFileUploaderComponent_div_0_Template, 16, 14, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularFileUploaderComponent_div_1_Template, 10, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theme !== "attachPin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theme == "attachPin");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        styles: [".constraints-info[_ngcontent-%COMP%]{font-style:italic;margin-top:10px}.padMarg[_ngcontent-%COMP%]{margin-bottom:0;padding:0}.caption[_ngcontent-%COMP%]{margin-right:5px}.textOverflow[_ngcontent-%COMP%]{overflow:hidden;padding-right:0;text-overflow:ellipsis;white-space:nowrap}.up_btn[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #5c5b5b;border-radius:22px;color:#000}.delFileIcon[_ngcontent-%COMP%]{color:#ce0909;text-decoration:none}.dragNDrop[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%]{border:2px dashed #5c5b5b;display:border-box;height:6rem;width:20rem}.dragNDrop[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#5c5b5b;font-weight:700;margin-top:1.4em;text-align:center}.dragNDropBtmPad[_ngcontent-%COMP%]{padding-bottom:2rem}@media screen and (max-width:620px){.caption[_ngcontent-%COMP%]{padding:0}}@media screen and (max-width:510px){.sizeC[_ngcontent-%COMP%]{width:25%}}@media screen and (max-width:260px){.caption[_ngcontent-%COMP%], .sizeC[_ngcontent-%COMP%]{font-size:10px}}.resetBtn[_ngcontent-%COMP%]{margin-left:3px}"]
      });

      AngularFileUploaderComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      AngularFileUploaderComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resetUpload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ApiResponse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        everythingDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFileUploaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'angular-file-uploader',
            template: "<div class=\"container\" *ngIf=\"(theme !== 'attachPin')\" id=\"default\">\r\n\r\n  <!-- Drag n Drop theme Starts -->\r\n  <div *ngIf=\"theme == 'dragNDrop'\" id=\"dragNDrop\"\r\n    [ngClass]=\"(hideSelectBtn && hideResetBtn) ? null : 'dragNDropBtmPad'\" class=\"dragNDrop\">\r\n    <div style=\"position:relative;\">\r\n      <div id=\"div1\" class=\"div1 afu-dragndrop-box\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\r\n        <p class=\"afu-dragndrop-text\">{{replaceTexts?.dragNDropBox}}</p>\r\n      </div>\r\n      <!-- <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span> -->\r\n    </div>\r\n  </div>\r\n  <!-- Drag n Drop theme Ends -->\r\n  <label for=\"sel{{id}}\" class=\"btn btn-primary btn-sm afu-select-btn\"\r\n    *ngIf=\"!hideSelectBtn\">{{replaceTexts?.selectFileBtn}}</label>\r\n  <input type=\"file\" id=\"sel{{id}}\" style=\"display: none\" *ngIf=\"!hideSelectBtn\" (change)=\"onChange($event)\"\r\n    title=\"Select file\" name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\r\n  <button class=\"btn btn-info btn-sm resetBtn afu-reset-btn\" (click)=\"resetFileUpload()\"\r\n    *ngIf=\"!hideResetBtn\">{{replaceTexts?.resetBtn}}</button>\r\n  <br *ngIf=\"!hideSelectBtn\">\r\n  <p class=\"constraints-info afu-constraints-info\">({{formatsAllowed}}) {{replaceTexts?.sizeLimit}}: {{(convertSize(maxSize))}}\r\n  </p>\r\n  <!--Allowed file list-->\r\n  <div class=\"row afu-valid-file\" *ngFor=\"let sf of allowedFiles;let i=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span class=\"text-primary\">{{sf.name}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{convertSize(sf.size)}})</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n    <!--  <input class=\"col-xs-3 progress caption\"  type=\"text\"  placeholder=\"Caption..\"  [(ngModel)]=\"Caption[i]\"  *ngIf=\"!uploadStarted\"/> -->\r\n    <div class=\"progress col-xs-3 padMarg afu-progress-bar\" *ngIf=\"isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n      <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n        [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n    </div>\r\n    <a class=\"col-xs-1\" role=\"button\" (click)=\"removeFile(i,'sf')\" *ngIf=\"!uploadStarted\"><i class=\"fa fa-times\"></i></a>\r\n  </div>\r\n  <!--Not Allowed file list-->\r\n  <div class=\"row text-danger afu-invalid-file\" *ngFor=\"let na of notAllowedFiles;let j=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span>{{na['fileName']}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{na['fileSize']}})</strong></p>\r\n    <p class=\"col-xs-3 \">{{na['errorMsg']}}</p>\r\n    <a class=\"col-xs-1 delFileIcon\" role=\"button\" (click)=\"removeFile(j,'na')\" *ngIf=\"!uploadStarted\">&nbsp;<i\r\n        class=\"fa fa-times\"></i></a>\r\n  </div>\r\n\r\n  <p *ngIf=\"uploadMsg\" class=\"{{uploadMsgClass}} + afu-upload-status\">{{uploadMsgText}}<p>\r\n      <div *ngIf=\"!isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n        <div class=\"progress col-xs-4 padMarg afu-progress-bar\">\r\n          <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n            [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n        </div>\r\n        <br>\r\n        <br>\r\n      </div>\r\n      <button class=\"btn btn-success afu-upload-btn\" type=\"button\" (click)=\"uploadFiles()\"\r\n        [disabled]=!enableUploadBtn>{{replaceTexts?.uploadBtn}}</button>\r\n      <br>\r\n</div>\r\n\r\n<!--/////////////////////////// ATTACH PIN THEME  //////////////////////////////////////////////////////////-->\r\n<div *ngIf=\"theme == 'attachPin'\" id=\"attachPin\">\r\n  <div style=\"position:relative;padding-left:6px\">\r\n    <a class='btn up_btn afu-attach-pin' (click)=\"attachpinOnclick()\">\r\n      {{replaceTexts?.attachPinBtn}}\r\n      <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\r\n      <!-- <p style=\"margin-top:10px\">({{formatsAllowed}}) Size limit- {{(convertSize(maxSize))}}</p> -->\r\n      <input type=\"file\" id=\"sel{{id}}\" (change)=\"onChange($event)\" style=\"display: none\" title=\"Select file\"\r\n        name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\r\n      <br>\r\n    </a>\r\n    &nbsp;\r\n    <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span>\r\n  </div>\r\n</div>\r\n\r\n",
            styles: [".constraints-info{font-style:italic;margin-top:10px}.padMarg{margin-bottom:0;padding:0}.caption{margin-right:5px}.textOverflow{overflow:hidden;padding-right:0;text-overflow:ellipsis;white-space:nowrap}.up_btn{background-color:transparent;border:2px solid #5c5b5b;border-radius:22px;color:#000}.delFileIcon{color:#ce0909;text-decoration:none}.dragNDrop .div1{border:2px dashed #5c5b5b;display:border-box;height:6rem;width:20rem}.dragNDrop .div1>p{color:#5c5b5b;font-weight:700;margin-top:1.4em;text-align:center}.dragNDropBtmPad{padding-bottom:2rem}@media screen and (max-width:620px){.caption{padding:0}}@media screen and (max-width:510px){.sizeC{width:25%}}@media screen and (max-width:260px){.caption,.sizeC{font-size:10px}}.resetBtn{margin-left:3px}"]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, {
          resetUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ApiResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          everythingDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var AngularFileUploaderModule = function AngularFileUploaderModule() {
        _classCallCheck(this, AngularFileUploaderModule);
      };

      AngularFileUploaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFileUploaderModule
      });
      AngularFileUploaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFileUploaderModule_Factory(t) {
          return new (t || AngularFileUploaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularFileUploaderModule, {
          declarations: function declarations() {
            return [AngularFileUploaderComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]];
          },
          exports: function exports() {
            return [AngularFileUploaderComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFileUploaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            declarations: [AngularFileUploaderComponent],
            exports: [AngularFileUploaderComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of angular-file-uploader
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-file-uploader.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-blank-blank-module-es5.js.map