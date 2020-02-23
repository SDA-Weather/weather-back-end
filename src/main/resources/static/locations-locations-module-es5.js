function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locations-locations-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/details/details.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/details/details.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Location: {{locationWeatherData?.location?.name}}</h3>\r\n\r\n<table [dataSource]=\"locationWeatherData?.weatherData\" class=\"mat-elevation-z8\" mat-table>\r\n  <ng-container matColumnDef=\"no\">\r\n    <th *matHeaderCellDef mat-header-cell> No.</th>\r\n    <td *matCellDef=\"let index = index\" mat-cell> {{index + 1}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"forecastTimeUtc\">\r\n    <th *matHeaderCellDef mat-header-cell> Forecast time</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.forecastTimeUtc}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"conditionCode\">\r\n    <th *matHeaderCellDef mat-header-cell></th>\r\n    <td *matCellDef=\"let element\" mat-cell><img src='{{ \"assets/images/\" + element.conditionCode + \".svg\" }}'></td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"airTemperature\">\r\n    <th *matHeaderCellDef mat-header-cell> Air temperature</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.airTemperature}} °C</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"windSpeed\">\r\n    <th *matHeaderCellDef mat-header-cell> Wind speed</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.windSpeed}} m/s</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"windGust\">\r\n    <th *matHeaderCellDef mat-header-cell> Wind gust</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.windGust}} m/s</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"windDirection\">\r\n    <th *matHeaderCellDef mat-header-cell> Wind direction</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.windDirection}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"cloudCover\">\r\n    <th *matHeaderCellDef mat-header-cell> Cloud cover</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.cloudCover}} %</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"seaLevelPressure\">\r\n    <th *matHeaderCellDef mat-header-cell> Sea level pressure</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.seaLevelPressure}} hPa</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"totalPrecipitation\">\r\n    <th *matHeaderCellDef mat-header-cell> Total precipitation</th>\r\n    <td *matCellDef=\"let element\" mat-cell> {{element.totalPrecipitation}} mm</td>\r\n  </ng-container>\r\n\r\n  <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\r\n  <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/list/list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/list/list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3> Locations list </h3>\r\n\r\n<div>\r\n  <mat-form-field>\r\n    <mat-label>Find:</mat-label>\r\n    <input (keyup)=\"applyFilter\r\n    ($event)\" autocomplete=\"off\" matInput placeholder=\"location...\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"locations\" matSort>\r\n\r\n    <!-- Add to favorites Column -->\r\n    <ng-container matColumnDef=\"addFavorite\">\r\n      <th mat-header-cell *matHeaderCellDef> Favorites </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"element.disabled = !element.disabled; saveToFavorites(element.id)\">\r\n          <mat-icon>{{element.disabled ? 'favorite' : 'favorite_border'}}</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Location ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No.</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Location Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"location-col\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Administrative division Column -->\r\n    <ng-container matColumnDef=\"administrativeDivision\">\r\n      <th mat-header-cell *matHeaderCellDef> Administrative division </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.administrativeDivision}} </td>\r\n    </ng-container>\r\n\r\n    <!-- View weather info Column -->\r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef> Weather info </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button [routerLink]=\"['/locations', element.id]\" aria-label=\"Example icon-button with a eye icon\" color=\"primary\" mat-icon-button>\r\n          <mat-icon>visibility</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[10, 50, 100]\"></mat-paginator>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var url = state.url;
          return this.checkLogin(url);
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(url) {
          if (this.authService.isLoggedIn()) {
            return true;
          }

          this.authService.redirectUrl = url;
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/locations/details/details.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/locations/details/details.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsDetailsDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1024px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 140px;\r\n}\r\n\r\ntable th:nth-child(2) {\r\n  width: 100px;\r\n}\r\n\r\nimg {\r\n  max-width: 50%;\r\n  height: auto;\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb25zL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG50YWJsZSB0aDpudGgtY2hpbGQoMikge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/locations/details/details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/locations/details/details.component.ts ***!
    \********************************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppLocationsDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/api.service */
    "./src/app/core/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DetailsComponent =
    /*#__PURE__*/
    function () {
      function DetailsComponent(api, route) {
        _classCallCheck(this, DetailsComponent);

        this.api = api;
        this.route = route;
        this.displayedColumns = ['forecastTimeUtc', 'conditionCode', 'airTemperature', 'windSpeed', 'windGust', 'windDirection', 'cloudCover', 'seaLevelPressure', 'totalPrecipitation'];
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.route.snapshot.paramMap.get('id');
          this.api.get('/api/locations/' + id).subscribe(function (result) {
            return _this.locationWeatherData = result;
          });
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/details/details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.component.css */
      "./src/app/locations/details/details.component.css")).default]
    })], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/locations/list/list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/locations/list/list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  margin-left: auto;\r\n}\r\n\r\n.mat-row:hover {\r\n  cursor: pointer;\r\n  background-color: lightgrey;\r\n}\r\n\r\ndiv {\r\n  margin: auto;\r\n  max-width: 1024px;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1024px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 80px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 80px;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n.location-col {\r\n  font-weight: 500;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbnMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAyNHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1jb2wge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/locations/list/list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/locations/list/list.component.ts ***!
    \**************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppLocationsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/api.service */
    "./src/app/core/api.service.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(api) {
        _classCallCheck(this, ListComponent);

        this.api = api;
        this.displayedColumns = ['addFavorite', 'id', 'name', 'administrativeDivision', 'view'];
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.api.get('/api/locations').subscribe(function (data) {
            _this2.locations = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this2.locations.paginator = _this2.paginator;
            _this2.locations.sort = _this2.sort;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.locations.filter = filterValue.trim().toLowerCase();

          if (this.locations.paginator) {
            this.locations.paginator.firstPage();
          }
        }
      }, {
        key: "saveToFavorites",
        value: function saveToFavorites(id) {
          var _this3 = this;

          this.api.post('/api/locations/favorites', id).subscribe(function (error) {
            _this3.error = error;

            if (!error.error.match('OK')) {
              alert(error.error);
            } else {
              alert('Favorite added.');
            }
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: true
    })], ListComponent.prototype, "sort", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/locations/list/list.component.css")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/locations/locations-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/locations/locations-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LocationsRoutingModule */

  /***/
  function srcAppLocationsLocationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsRoutingModule", function () {
      return LocationsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/locations/list/list.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/locations/details/details.component.ts");

    var routes = [{
      path: '',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }, {
      path: ':id',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"]
    }];

    var LocationsRoutingModule = function LocationsRoutingModule() {
      _classCallCheck(this, LocationsRoutingModule);
    };

    LocationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LocationsRoutingModule);
    /***/
  },

  /***/
  "./src/app/locations/locations.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/locations/locations.module.ts ***!
    \***********************************************/

  /*! exports provided: LocationsModule */

  /***/
  function srcAppLocationsLocationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsModule", function () {
      return LocationsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/locations/list/list.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/locations/details/details.component.ts");
    /* harmony import */


    var _locations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./locations-routing.module */
    "./src/app/locations/locations-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LocationsModule = function LocationsModule() {
      _classCallCheck(this, LocationsModule);
    };

    LocationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _locations_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationsRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]]
    })], LocationsModule);
    /***/
  }
}]);
//# sourceMappingURL=locations-locations-module-es5.js.map