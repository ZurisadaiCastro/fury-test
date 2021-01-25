(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-maps-google-maps-google-maps-module"],{

/***/ "3sZV":
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js ***!
  \********************************************************************************/
/*! exports provided: GoogleMap, GoogleMapsModule, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function() { return GoogleMapsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBaseLayer", function() { return MapBaseLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBicyclingLayer", function() { return MapBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCircle", function() { return MapCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGroundOverlay", function() { return MapGroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapInfoWindow", function() { return MapInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapKmlLayer", function() { return MapKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarker", function() { return MapMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPolygon", function() { return MapPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPolyline", function() { return MapPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRectangle", function() { return MapRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTrafficLayer", function() { return MapTrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTransitLayer", function() { return MapTransitLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */


const _c0 = ["*"];
class MapEventManager {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /** Pending listeners that were added before the target was set. */
        this._pending = [];
        this._listeners = [];
        this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
    }
    /** Clears all currently-registered event listeners. */
    _clearListeners() {
        for (const listener of this._listeners) {
            listener.remove();
        }
        this._listeners = [];
    }
    /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
    getLazyEmitter(name) {
        return this._targetStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(target => {
            const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                // If the target hasn't been initialized yet, cache the observer so it can be added later.
                if (!target) {
                    this._pending.push({ observable, observer });
                    return undefined;
                }
                const listener = target.addListener(name, (event) => {
                    this._ngZone.run(() => observer.next(event));
                });
                this._listeners.push(listener);
                return () => listener.remove();
            });
            return observable;
        }));
    }
    /** Sets the current target that the manager should bind events to. */
    setTarget(target) {
        const currentTarget = this._targetStream.value;
        if (target === currentTarget) {
            return;
        }
        // Clear the listeners from the pre-existing target.
        if (currentTarget) {
            this._clearListeners();
            this._pending = [];
        }
        this._targetStream.next(target);
        // Add the listeners that were bound before the map was initialized.
        this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));
        this._pending = [];
    }
    /** Destroys the manager and clears the event listeners. */
    destroy() {
        this._clearListeners();
        this._pending = [];
        this._targetStream.complete();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** default options set to the Googleplex */
const DEFAULT_OPTIONS = {
    center: { lat: 37.421995, lng: -122.084092 },
    zoom: 17
};
/** Arbitrary default height for the map element */
const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */
const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */
class GoogleMap {
    constructor(_elementRef, _ngZone, platformId) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_OPTIONS);
        this._center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._zoom = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */
        this.height = DEFAULT_HEIGHT;
        /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */
        this.width = DEFAULT_WIDTH;
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
         */
        this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
         */
        this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
         */
        this.mapDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
         */
        this.mapDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
         */
        this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
         */
        this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
         */
        this.idle = this._eventManager.getLazyEmitter('idle');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
         */
        this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
         */
        this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
         */
        this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
         */
        this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
         */
        this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
         */
        this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
         */
        this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
         */
        this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
         */
        this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
        this._isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
        if (this._isBrowser) {
            const googleMapsWindow = window;
            if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Namespace google not found, cannot construct embedded google ' +
                    'map. Please install the Google Maps JavaScript API: ' +
                    'https://developers.google.com/maps/documentation/javascript/' +
                    'tutorial#Loading_the_Maps_API');
            }
        }
    }
    set center(center) {
        this._center.next(center);
    }
    set zoom(zoom) {
        this._zoom.next(zoom);
    }
    set options(options) {
        this._options.next(options || DEFAULT_OPTIONS);
    }
    ngOnChanges() {
        this._setSize();
        if (this.googleMap && this.mapTypeId) {
            this.googleMap.setMapTypeId(this.mapTypeId);
        }
    }
    ngOnInit() {
        // It should be a noop during server-side rendering.
        if (this._isBrowser) {
            this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');
            this._setSize();
            this._googleMapChanges = this._initializeMap(this._combineOptions());
            this._googleMapChanges.subscribe((googleMap) => {
                this.googleMap = googleMap;
                this._eventManager.setTarget(this.googleMap);
            });
            this._watchForOptionsChanges();
            this._watchForCenterChanges();
            this._watchForZoomChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
     */
    fitBounds(bounds, padding) {
        this._assertInitialized();
        this.googleMap.fitBounds(bounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
     */
    panBy(x, y) {
        this._assertInitialized();
        this.googleMap.panBy(x, y);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
     */
    panTo(latLng) {
        this._assertInitialized();
        this.googleMap.panTo(latLng);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
     */
    panToBounds(latLngBounds, padding) {
        this._assertInitialized();
        this.googleMap.panToBounds(latLngBounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.googleMap.getBounds() || null;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
     */
    getCenter() {
        this._assertInitialized();
        return this.googleMap.getCenter();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
     */
    getClickableIcons() {
        this._assertInitialized();
        return this.googleMap.getClickableIcons();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
     */
    getHeading() {
        this._assertInitialized();
        return this.googleMap.getHeading();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
     */
    getMapTypeId() {
        this._assertInitialized();
        return this.googleMap.getMapTypeId();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
     */
    getProjection() {
        this._assertInitialized();
        return this.googleMap.getProjection();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
     */
    getStreetView() {
        this._assertInitialized();
        return this.googleMap.getStreetView();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
     */
    getTilt() {
        this._assertInitialized();
        return this.googleMap.getTilt();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
     */
    getZoom() {
        this._assertInitialized();
        return this.googleMap.getZoom();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
     */
    get controls() {
        this._assertInitialized();
        return this.googleMap.controls;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
     */
    get data() {
        this._assertInitialized();
        return this.googleMap.data;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
     */
    get mapTypes() {
        this._assertInitialized();
        return this.googleMap.mapTypes;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
     */
    get overlayMapTypes() {
        this._assertInitialized();
        return this.googleMap.overlayMapTypes;
    }
    _setSize() {
        if (this._mapEl) {
            const styles = this._mapEl.style;
            styles.height =
                this.height === null ? '' : (coerceCssPixelValue(this.height) || DEFAULT_HEIGHT);
            styles.width = this.width === null ? '' : (coerceCssPixelValue(this.width) || DEFAULT_WIDTH);
        }
    }
    /** Combines the center and zoom and the other map options into a single object */
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._center, this._zoom])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, center, zoom]) => {
            var _a;
            const combinedOptions = Object.assign(Object.assign({}, options), { 
                // It's important that we set **some** kind of `center` and `zoom`, otherwise
                // Google Maps will render a blank rectangle which looks broken.
                center: center || options.center || DEFAULT_OPTIONS.center, zoom: (_a = zoom !== null && zoom !== void 0 ? zoom : options.zoom) !== null && _a !== void 0 ? _a : DEFAULT_OPTIONS.zoom, mapTypeId: this.mapTypeId });
            return combinedOptions;
        }));
    }
    _initializeMap(optionsChanges) {
        return optionsChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(options => {
            // Create the object outside the zone so its events don't trigger change detection.
            // We'll bring it back in inside the `MapEventManager` only for the events that the
            // user has subscribed to.
            return this._ngZone.runOutsideAngular(() => new google.maps.Map(this._mapEl, options));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    _watchForOptionsChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._options])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, options]) => {
            googleMap.setOptions(options);
        });
    }
    _watchForCenterChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._center])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, center]) => {
            if (center) {
                googleMap.setCenter(center);
            }
        });
    }
    _watchForZoomChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._zoom])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, zoom]) => {
            if (zoom !== undefined) {
                googleMap.setZoom(zoom);
            }
        });
    }
    /** Asserts that the map has been initialized. */
    _assertInitialized() {
        if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
    }
}
GoogleMap.ɵfac = function GoogleMap_Factory(t) { return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
GoogleMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMap, selectors: [["google-map"]], inputs: { height: "height", width: "width", center: "center", zoom: "zoom", options: "options", mapTypeId: "mapTypeId" }, outputs: { boundsChanged: "boundsChanged", centerChanged: "centerChanged", mapClick: "mapClick", mapDblclick: "mapDblclick", mapDrag: "mapDrag", mapDragend: "mapDragend", mapDragstart: "mapDragstart", headingChanged: "headingChanged", idle: "idle", maptypeidChanged: "maptypeidChanged", mapMousemove: "mapMousemove", mapMouseout: "mapMouseout", mapMouseover: "mapMouseover", projectionChanged: "projectionChanged", mapRightclick: "mapRightclick", tilesloaded: "tilesloaded", tiltChanged: "tiltChanged", zoomChanged: "zoomChanged" }, exportAs: ["googleMap"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "map-container"]], template: function GoogleMap_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } }, encapsulation: 2, changeDetection: 0 });
GoogleMap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
GoogleMap.propDecorators = {
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mapTypeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundsChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    centerChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headingChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    idle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    maptypeidChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    projectionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tilesloaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tiltChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zoomChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'google-map',
                exportAs: 'googleMap',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: '<div class="map-container"></div><ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], headingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], maptypeidChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tilesloaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tiltChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zoomChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return cssUnitsPattern.test(value) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MapBaseLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._ngZone.runOutsideAngular(() => {
                this._initializeObject();
            });
            this._assertInitialized();
            this._setMap();
        }
    }
    ngOnDestroy() {
        this._unsetMap();
    }
    _assertInitialized() {
        if (!this._map.googleMap) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
    }
    _initializeObject() { }
    _setMap() { }
    _unsetMap() { }
}
MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) { return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapBaseLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapBaseLayer, selectors: [["map-base-layer"]], exportAs: ["mapBaseLayer"] });
MapBaseLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBaseLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-base-layer',
                exportAs: 'mapBaseLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */
class MapBicyclingLayer extends MapBaseLayer {
    _initializeObject() {
        this.bicyclingLayer = new google.maps.BicyclingLayer();
    }
    _setMap() {
        this._assertLayerInitialized();
        this.bicyclingLayer.setMap(this._map.googleMap);
    }
    _unsetMap() {
        if (this.bicyclingLayer) {
            this.bicyclingLayer.setMap(null);
        }
    }
    _assertLayerInitialized() {
        if (!this.bicyclingLayer) {
            throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' +
                'Please wait for the Transit Layer to load before trying to interact with it.');
        }
    }
}
MapBicyclingLayer.ɵfac = function MapBicyclingLayer_Factory(t) { return ɵMapBicyclingLayer_BaseFactory(t || MapBicyclingLayer); };
MapBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapBicyclingLayer, selectors: [["map-bicycling-layer"]], exportAs: ["mapBicyclingLayer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMapBicyclingLayer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapBicyclingLayer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-bicycling-layer',
                exportAs: 'mapBicyclingLayer'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */
class MapCircle {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
         */
        this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
         */
        this.circleClick = this._eventManager.getLazyEmitter('click');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
         */
        this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
         */
        this.circleDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
         */
        this.circleDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
         */
        this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
         */
        this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
         */
        this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
         */
        this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
         */
        this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
         */
        this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
         */
        this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
         */
        this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set center(center) {
        this._center.next(center);
    }
    set radius(radius) {
        this._radius.next(radius);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.circle = new google.maps.Circle(options);
                });
                this._assertInitialized();
                this.circle.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.circle);
            });
            this._watchForOptionsChanges();
            this._watchForCenterChanges();
            this._watchForRadiusChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.circle) {
            this.circle.setMap(null);
        }
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.circle.getBounds();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */
    getCenter() {
        this._assertInitialized();
        return this.circle.getCenter();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.circle.getDraggable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.circle.getEditable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */
    getRadius() {
        this._assertInitialized();
        return this.circle.getRadius();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.circle.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._center, this._radius])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, center, radius]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { center: center || options.center, radius: radius !== undefined ? radius : options.radius });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.circle.setOptions(options);
        });
    }
    _watchForCenterChanges() {
        this._center.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(center => {
            if (center) {
                this._assertInitialized();
                this.circle.setCenter(center);
            }
        });
    }
    _watchForRadiusChanges() {
        this._radius.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(radius => {
            if (radius !== undefined) {
                this._assertInitialized();
                this.circle.setRadius(radius);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.circle) {
                throw Error('Cannot interact with a Google Map Circle before it has been ' +
                    'initialized. Please wait for the Circle to load before trying to interact with it.');
            }
        }
    }
}
MapCircle.ɵfac = function MapCircle_Factory(t) { return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapCircle, selectors: [["map-circle"]], inputs: { options: "options", center: "center", radius: "radius" }, outputs: { centerChanged: "centerChanged", circleClick: "circleClick", circleDblclick: "circleDblclick", circleDrag: "circleDrag", circleDragend: "circleDragend", circleDragstart: "circleDragstart", circleMousedown: "circleMousedown", circleMousemove: "circleMousemove", circleMouseout: "circleMouseout", circleMouseover: "circleMouseover", circleMouseup: "circleMouseup", radiusChanged: "radiusChanged", circleRightclick: "circleRightclick" }, exportAs: ["mapCircle"] });
MapCircle.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapCircle.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    centerChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    radiusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-circle',
                exportAs: 'mapCircle'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], radiusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */
class MapGroundOverlay {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Whether the overlay is clickable */
        this.clickable = false;
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/image-overlay
         * #GroundOverlay.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    }
    /** URL of the image that will be shown in the overlay. */
    set url(url) {
        this._url.next(url);
    }
    /** Bounds for the overlay. */
    get bounds() {
        return this._bounds.value;
    }
    set bounds(bounds) {
        this._bounds.next(bounds);
    }
    /** Opacity of the overlay. */
    set opacity(opacity) {
        this._opacity.next(opacity);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            // The ground overlay setup is slightly different from the other Google Maps objects in that
            // we have to recreate the `GroundOverlay` object whenever the bounds change, because
            // Google Maps doesn't provide an API to update the bounds of an existing overlay.
            this._bounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(bounds => {
                if (this.groundOverlay) {
                    this.groundOverlay.setMap(null);
                    this.groundOverlay = undefined;
                }
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                if (bounds) {
                    this._ngZone.runOutsideAngular(() => {
                        this.groundOverlay = new google.maps.GroundOverlay(this._url.getValue(), bounds, {
                            clickable: this.clickable,
                            opacity: this._opacity.value,
                        });
                    });
                    this._assertInitialized();
                    this.groundOverlay.setMap(this._map.googleMap);
                    this._eventManager.setTarget(this.groundOverlay);
                }
            });
            this._watchForOpacityChanges();
            this._watchForUrlChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.groundOverlay) {
            this.groundOverlay.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.groundOverlay.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getOpacity
     */
    getOpacity() {
        this._assertInitialized();
        return this.groundOverlay.getOpacity();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getUrl
     */
    getUrl() {
        this._assertInitialized();
        return this.groundOverlay.getUrl();
    }
    _watchForOpacityChanges() {
        this._opacity.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(opacity => {
            if (opacity != null) {
                this._assertInitialized();
                this.groundOverlay.setOpacity(opacity);
            }
        });
    }
    _watchForUrlChanges() {
        this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(url => {
            this._assertInitialized();
            const overlay = this.groundOverlay;
            overlay.set('url', url);
            // Google Maps only redraws the overlay if we re-set the map.
            overlay.setMap(null);
            overlay.setMap(this._map.googleMap);
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.groundOverlay) {
                throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' +
                    'Please wait for the GroundOverlay to load before trying to interact with it.');
            }
        }
    }
}
MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) { return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapGroundOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapGroundOverlay, selectors: [["map-ground-overlay"]], inputs: { clickable: "clickable", url: "url", bounds: "bounds", opacity: "opacity" }, outputs: { mapClick: "mapClick", mapDblclick: "mapDblclick" }, exportAs: ["mapGroundOverlay"] });
MapGroundOverlay.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapGroundOverlay.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapGroundOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-ground-overlay',
                exportAs: 'mapGroundOverlay'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */
class MapInfoWindow {
    constructor(_googleMap, _elementRef, _ngZone) {
        this._googleMap = _googleMap;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
         */
        this.closeclick = this._eventManager.getLazyEmitter('closeclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.content_changed
         */
        this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
         */
        this.domready = this._eventManager.getLazyEmitter('domready');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.position_changed
         */
        this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.zindex_changed
         */
        this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set position(position) {
        this._position.next(position);
    }
    ngOnInit() {
        if (this._googleMap._isBrowser) {
            const combinedOptionsChanges = this._combineOptions();
            combinedOptionsChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.infoWindow = new google.maps.InfoWindow(options);
                });
                this._eventManager.setTarget(this.infoWindow);
            });
            this._watchForOptionsChanges();
            this._watchForPositionChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroy.next();
        this._destroy.complete();
        // If no info window has been created on the server, we do not try closing it.
        // On the server, an info window cannot be created and this would cause errors.
        if (this.infoWindow) {
            this.close();
        }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
     */
    close() {
        this._assertInitialized();
        this.infoWindow.close();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
     */
    getContent() {
        this._assertInitialized();
        return this.infoWindow.getContent();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.getPosition
     */
    getPosition() {
        this._assertInitialized();
        return this.infoWindow.getPosition();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.infoWindow.getZIndex();
    }
    /**
     * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
     * then the position property of the options input is used instead.
     */
    open(anchor) {
        this._assertInitialized();
        const anchorObject = anchor ? anchor.getAnchor() : undefined;
        // Prevent the info window from initializing if trying to reopen on the same anchor.
        if (this.infoWindow.get('anchor') !== anchorObject) {
            this._elementRef.nativeElement.style.display = '';
            this.infoWindow.open(this._googleMap.googleMap, anchorObject);
        }
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._position]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, position]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { position: position || options.position, content: this._elementRef.nativeElement });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(options => {
            this._assertInitialized();
            this.infoWindow.setOptions(options);
        });
    }
    _watchForPositionChanges() {
        this._position.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(position => {
            if (position) {
                this._assertInitialized();
                this.infoWindow.setPosition(position);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.infoWindow) {
                throw Error('Cannot interact with a Google Map Info Window before it has been ' +
                    'initialized. Please wait for the Info Window to load before trying to interact with ' +
                    'it.');
            }
        }
    }
}
MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) { return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapInfoWindow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapInfoWindow, selectors: [["map-info-window"]], hostAttrs: [2, "display", "none"], inputs: { options: "options", position: "position" }, outputs: { closeclick: "closeclick", contentChanged: "contentChanged", domready: "domready", positionChanged: "positionChanged", zindexChanged: "zindexChanged" }, exportAs: ["mapInfoWindow"] });
MapInfoWindow.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapInfoWindow.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    domready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zindexChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-info-window',
                exportAs: 'mapInfoWindow',
                host: { 'style': 'display: none' }
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { closeclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], domready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */
class MapKmlLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
         */
        this.kmlClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/kml
         * #KmlLayer.defaultviewport_changed
         */
        this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
         */
        this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set url(url) {
        this._url.next(url);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.kmlLayer = new google.maps.KmlLayer(options));
                this._assertInitialized();
                this.kmlLayer.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.kmlLayer);
            });
            this._watchForOptionsChanges();
            this._watchForUrlChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.kmlLayer) {
            this.kmlLayer.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
     */
    getDefaultViewport() {
        this._assertInitialized();
        return this.kmlLayer.getDefaultViewport();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
     */
    getMetadata() {
        this._assertInitialized();
        return this.kmlLayer.getMetadata();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
     */
    getStatus() {
        this._assertInitialized();
        return this.kmlLayer.getStatus();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
     */
    getUrl() {
        this._assertInitialized();
        return this.kmlLayer.getUrl();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.kmlLayer.getZIndex();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._url]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, url]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { url: url || options.url });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            if (this.kmlLayer) {
                this._assertInitialized();
                this.kmlLayer.setOptions(options);
            }
        });
    }
    _watchForUrlChanges() {
        this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(url => {
            if (url && this.kmlLayer) {
                this._assertInitialized();
                this.kmlLayer.setUrl(url);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.kmlLayer) {
                throw Error('Cannot interact with a Google Map KmlLayer before it has been ' +
                    'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
            }
        }
    }
}
MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) { return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapKmlLayer, selectors: [["map-kml-layer"]], inputs: { options: "options", url: "url" }, outputs: { kmlClick: "kmlClick", defaultviewportChanged: "defaultviewportChanged", statusChanged: "statusChanged" }, exportAs: ["mapKmlLayer"] });
MapKmlLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapKmlLayer.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    kmlClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    defaultviewportChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    statusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-kml-layer',
                exportAs: 'mapKmlLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { kmlClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], defaultviewportChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], statusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
const DEFAULT_MARKER_OPTIONS = {
    position: { lat: 37.421995, lng: -122.084092 },
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
class MapMarker {
    constructor(_googleMap, _ngZone) {
        this._googleMap = _googleMap;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_MARKER_OPTIONS);
        this._title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._label = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._clickable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
         */
        this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
         */
        this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
         */
        this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
         */
        this.mapDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
         */
        this.mapDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
         */
        this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
         */
        this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
         */
        this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
         */
        this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
         */
        this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
         */
        this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
         */
        this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
         */
        this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
         */
        this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
         */
        this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
         */
        this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
         */
        this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
         */
        this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
         */
        this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
    }
    set options(options) {
        this._options.next(options || DEFAULT_MARKER_OPTIONS);
    }
    set title(title) {
        this._title.next(title);
    }
    set position(position) {
        this._position.next(position);
    }
    set label(label) {
        this._label.next(label);
    }
    set clickable(clickable) {
        this._clickable.next(clickable);
    }
    ngOnInit() {
        if (this._googleMap._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.marker = new google.maps.Marker(options));
                this._assertInitialized();
                this.marker.setMap(this._googleMap.googleMap);
                this._eventManager.setTarget(this.marker);
            });
            this._watchForOptionsChanges();
            this._watchForTitleChanges();
            this._watchForPositionChanges();
            this._watchForLabelChanges();
            this._watchForClickableChanges();
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this._eventManager.destroy();
        if (this.marker) {
            this.marker.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
     */
    getAnimation() {
        this._assertInitialized();
        return this.marker.getAnimation() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
     */
    getClickable() {
        this._assertInitialized();
        return this.marker.getClickable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
     */
    getCursor() {
        this._assertInitialized();
        return this.marker.getCursor() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return !!this.marker.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
     */
    getIcon() {
        this._assertInitialized();
        return this.marker.getIcon() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
     */
    getLabel() {
        this._assertInitialized();
        return this.marker.getLabel() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
     */
    getOpacity() {
        this._assertInitialized();
        return this.marker.getOpacity() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
     */
    getPosition() {
        this._assertInitialized();
        return this.marker.getPosition() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
     */
    getShape() {
        this._assertInitialized();
        return this.marker.getShape() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
     */
    getTitle() {
        this._assertInitialized();
        return this.marker.getTitle() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.marker.getVisible();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.marker.getZIndex() || null;
    }
    /** Gets the anchor point that can be used to attach other Google Maps objects. */
    getAnchor() {
        this._assertInitialized();
        return this.marker;
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._title, this._position, this._label, this._clickable])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, title, position, label, clickable]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { title: title || options.title, position: position || options.position, label: label || options.label, clickable: clickable !== undefined ? clickable : options.clickable, map: this._googleMap.googleMap });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(options => {
            if (this.marker) {
                this._assertInitialized();
                this.marker.setOptions(options);
            }
        });
    }
    _watchForTitleChanges() {
        this._title.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(title => {
            if (this.marker && title !== undefined) {
                this._assertInitialized();
                this.marker.setTitle(title);
            }
        });
    }
    _watchForPositionChanges() {
        this._position.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(position => {
            if (this.marker && position) {
                this._assertInitialized();
                this.marker.setPosition(position);
            }
        });
    }
    _watchForLabelChanges() {
        this._label.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(label => {
            if (this.marker && label !== undefined) {
                this._assertInitialized();
                this.marker.setLabel(label);
            }
        });
    }
    _watchForClickableChanges() {
        this._clickable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(clickable => {
            if (this.marker && clickable !== undefined) {
                this._assertInitialized();
                this.marker.setClickable(clickable);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.marker) {
                throw Error('Cannot interact with a Google Map Marker before it has been ' +
                    'initialized. Please wait for the Marker to load before trying to interact with it.');
            }
        }
    }
}
MapMarker.ɵfac = function MapMarker_Factory(t) { return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapMarker, selectors: [["map-marker"]], inputs: { options: "options", title: "title", position: "position", label: "label", clickable: "clickable" }, outputs: { animationChanged: "animationChanged", mapClick: "mapClick", clickableChanged: "clickableChanged", cursorChanged: "cursorChanged", mapDblclick: "mapDblclick", mapDrag: "mapDrag", mapDragend: "mapDragend", draggableChanged: "draggableChanged", mapDragstart: "mapDragstart", flatChanged: "flatChanged", iconChanged: "iconChanged", mapMousedown: "mapMousedown", mapMouseout: "mapMouseout", mapMouseover: "mapMouseover", mapMouseup: "mapMouseup", positionChanged: "positionChanged", mapRightclick: "mapRightclick", shapeChanged: "shapeChanged", titleChanged: "titleChanged", visibleChanged: "visibleChanged", zindexChanged: "zindexChanged" }, exportAs: ["mapMarker"] });
MapMarker.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapMarker.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    clickableChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cursorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggableChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    flatChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    iconChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    shapeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    titleChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    visibleChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zindexChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-marker',
                exportAs: 'mapMarker'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { animationChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cursorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], draggableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], flatChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], iconChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], shapeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], titleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], visibleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */
class MapPolygon {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
         */
        this.polygonClick = this._eventManager.getLazyEmitter('click');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
         */
        this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
         */
        this.polygonDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
         */
        this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
         */
        this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
         */
        this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
         */
        this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
         */
        this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
         */
        this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
         */
        this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
         */
        this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set paths(paths) {
        this._paths.next(paths);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.polygon = new google.maps.Polygon(options);
                });
                this._assertInitialized();
                this.polygon.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.polygon);
            });
            this._watchForOptionsChanges();
            this._watchForPathChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.polygon) {
            this.polygon.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.polygon.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.polygon.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
     */
    getPath() {
        this._assertInitialized();
        return this.polygon.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
     */
    getPaths() {
        this._assertInitialized();
        return this.polygon.getPaths();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.polygon.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._paths]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, paths]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { paths: paths || options.paths });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.polygon.setOptions(options);
        });
    }
    _watchForPathChanges() {
        this._paths.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(paths => {
            if (paths) {
                this._assertInitialized();
                this.polygon.setPaths(paths);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.polygon) {
                throw Error('Cannot interact with a Google Map Polygon before it has been ' +
                    'initialized. Please wait for the Polygon to load before trying to interact with it.');
            }
        }
    }
}
MapPolygon.ɵfac = function MapPolygon_Factory(t) { return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapPolygon, selectors: [["map-polygon"]], inputs: { options: "options", paths: "paths" }, outputs: { polygonClick: "polygonClick", polygonDblclick: "polygonDblclick", polygonDrag: "polygonDrag", polygonDragend: "polygonDragend", polygonDragstart: "polygonDragstart", polygonMousedown: "polygonMousedown", polygonMousemove: "polygonMousemove", polygonMouseout: "polygonMouseout", polygonMouseover: "polygonMouseover", polygonMouseup: "polygonMouseup", polygonRightclick: "polygonRightclick" }, exportAs: ["mapPolygon"] });
MapPolygon.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapPolygon.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    polygonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-polygon',
                exportAs: 'mapPolygon'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { polygonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */
class MapPolyline {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._path = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
         */
        this.polylineClick = this._eventManager.getLazyEmitter('click');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
         */
        this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
         */
        this.polylineDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
         */
        this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
         */
        this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
         */
        this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
         */
        this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
         */
        this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
         */
        this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
         */
        this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
         */
        this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set path(path) {
        this._path.next(path);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.polyline = new google.maps.Polyline(options));
                this._assertInitialized();
                this.polyline.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.polyline);
            });
            this._watchForOptionsChanges();
            this._watchForPathChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.polyline) {
            this.polyline.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.polyline.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.polyline.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
     */
    getPath() {
        this._assertInitialized();
        return this.polyline.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.polyline.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._path]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, path]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { path: path || options.path });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.polyline.setOptions(options);
        });
    }
    _watchForPathChanges() {
        this._path.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(path => {
            if (path) {
                this._assertInitialized();
                this.polyline.setPath(path);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.polyline) {
                throw Error('Cannot interact with a Google Map Polyline before it has been ' +
                    'initialized. Please wait for the Polyline to load before trying to interact with it.');
            }
        }
    }
}
MapPolyline.ɵfac = function MapPolyline_Factory(t) { return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapPolyline, selectors: [["map-polyline"]], inputs: { options: "options", path: "path" }, outputs: { polylineClick: "polylineClick", polylineDblclick: "polylineDblclick", polylineDrag: "polylineDrag", polylineDragend: "polylineDragend", polylineDragstart: "polylineDragstart", polylineMousedown: "polylineMousedown", polylineMousemove: "polylineMousemove", polylineMouseout: "polylineMouseout", polylineMouseover: "polylineMouseover", polylineMouseup: "polylineMouseup", polylineRightclick: "polylineRightclick" }, exportAs: ["mapPolyline"] });
MapPolyline.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapPolyline.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    polylineClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-polyline',
                exportAs: 'mapPolyline'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { polylineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */
class MapRectangle {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
         */
        this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
         */
        this.rectangleClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
         */
        this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
         */
        this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
         */
        this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
         */
        this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
         */
        this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
         */
        this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
         */
        this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
         */
        this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
         */
        this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
         */
        this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set bounds(bounds) {
        this._bounds.next(bounds);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.rectangle = new google.maps.Rectangle(options);
                });
                this._assertInitialized();
                this.rectangle.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.rectangle);
            });
            this._watchForOptionsChanges();
            this._watchForBoundsChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.rectangle) {
            this.rectangle.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.rectangle.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.rectangle.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.rectangle.getEditable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.rectangle.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._bounds]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, bounds]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { bounds: bounds || options.bounds });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.rectangle.setOptions(options);
        });
    }
    _watchForBoundsChanges() {
        this._bounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(bounds => {
            if (bounds) {
                this._assertInitialized();
                this.rectangle.setBounds(bounds);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.rectangle) {
                throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' +
                    'Please wait for the Rectangle to load before trying to interact with it.');
            }
        }
    }
}
MapRectangle.ɵfac = function MapRectangle_Factory(t) { return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapRectangle, selectors: [["map-rectangle"]], inputs: { options: "options", bounds: "bounds" }, outputs: { boundsChanged: "boundsChanged", rectangleClick: "rectangleClick", rectangleDblclick: "rectangleDblclick", rectangleDrag: "rectangleDrag", rectangleDragend: "rectangleDragend", rectangleDragstart: "rectangleDragstart", rectangleMousedown: "rectangleMousedown", rectangleMousemove: "rectangleMousemove", rectangleMouseout: "rectangleMouseout", rectangleMouseover: "rectangleMouseover", rectangleMouseup: "rectangleMouseup", rectangleRightclick: "rectangleRightclick" }, exportAs: ["mapRectangle"] });
MapRectangle.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapRectangle.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundsChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-rectangle',
                exportAs: 'mapRectangle'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */
class MapTrafficLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Whether the traffic layer refreshes with updated information automatically.
     */
    set autoRefresh(autoRefresh) {
        this._autoRefresh.next(autoRefresh);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                this._ngZone.runOutsideAngular(() => {
                    this.trafficLayer = new google.maps.TrafficLayer(options);
                });
                this._assertInitialized();
                this.trafficLayer.setMap(this._map.googleMap);
            });
            this._watchForAutoRefreshChanges();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        if (this.trafficLayer) {
            this.trafficLayer.setMap(null);
        }
    }
    _combineOptions() {
        return this._autoRefresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(autoRefresh => {
            const combinedOptions = { autoRefresh };
            return combinedOptions;
        }));
    }
    _watchForAutoRefreshChanges() {
        this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.trafficLayer.setOptions(options);
        });
    }
    _assertInitialized() {
        if (!this._map.googleMap) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.trafficLayer) {
            throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' +
                'Please wait for the Traffic Layer to load before trying to interact with it.');
        }
    }
}
MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) { return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapTrafficLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapTrafficLayer, selectors: [["map-traffic-layer"]], inputs: { autoRefresh: "autoRefresh" }, exportAs: ["mapTrafficLayer"] });
MapTrafficLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapTrafficLayer.propDecorators = {
    autoRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTrafficLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-traffic-layer',
                exportAs: 'mapTrafficLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { autoRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */
class MapTransitLayer extends MapBaseLayer {
    _initializeObject() {
        this.transitLayer = new google.maps.TransitLayer();
    }
    _setMap() {
        this._assertLayerInitialized();
        this.transitLayer.setMap(this._map.googleMap);
    }
    _unsetMap() {
        if (this.transitLayer) {
            this.transitLayer.setMap(null);
        }
    }
    _assertLayerInitialized() {
        if (!this.transitLayer) {
            throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' +
                'Please wait for the Transit Layer to load before trying to interact with it.');
        }
    }
}
MapTransitLayer.ɵfac = function MapTransitLayer_Factory(t) { return ɵMapTransitLayer_BaseFactory(t || MapTransitLayer); };
MapTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapTransitLayer, selectors: [["map-transit-layer"]], exportAs: ["mapTransitLayer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMapTransitLayer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapTransitLayer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-transit-layer',
                exportAs: 'mapTransitLayer'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const COMPONENTS = [
    GoogleMap,
    MapBaseLayer,
    MapBicyclingLayer,
    MapCircle,
    MapGroundOverlay,
    MapInfoWindow,
    MapKmlLayer,
    MapMarker,
    MapPolygon,
    MapPolyline,
    MapRectangle,
    MapTrafficLayer,
    MapTransitLayer,
];
class GoogleMapsModule {
}
GoogleMapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleMapsModule });
GoogleMapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleMapsModule_Factory(t) { return new (t || GoogleMapsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleMapsModule, { declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer], exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=google-maps.js.map

/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-maps-google-maps-google-maps-module-es2015.js.map