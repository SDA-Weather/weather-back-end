function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/cards/cards.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/cards/cards.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageCardsCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Top 5 locations</h3>\r\n<div class=\"container\">\r\n  <mat-card *ngFor=\"let card of homepageCards\" class=\"card\">\r\n    <mat-card-title>{{card.name}}</mat-card-title>\r\n    <mat-card-content>\r\n      <p>Temperature: {{card.airTemperature}} °C</p>\r\n      <img src='{{ \"assets/images/\" + card.conditionCode + \".svg\" }}'>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button (click)=\"viewDetails(card.id)\" aria-label=\"Example icon-button with a eye icon\" color=\"primary\" mat-icon-button>\r\n        <mat-icon>visibility</mat-icon>\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/favorites/favorites.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/favorites/favorites.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageFavoritesFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Favorite locations</h3>\r\n<div>\r\n  <div *ngIf=\"authService.isLoggedIn()\">\r\n    <div *ngIf=\"favoriteLocations\">\r\n      <table [dataSource]=\"favoriteLocations\" class=\"mat-elevation-z8\" mat-table>\r\n        <ng-container matColumnDef=\"no\">\r\n          <th *matHeaderCellDef mat-header-cell> No.</th>\r\n          <td *matCellDef=\"let index = index\" mat-cell> {{index + 1}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"locationName\">\r\n          <th *matHeaderCellDef mat-header-cell>Location</th>\r\n          <td *matCellDef=\"let element\" mat-cell> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"conditionCode\">\r\n          <th *matHeaderCellDef mat-header-cell></th>\r\n          <td *matCellDef=\"let element\" mat-cell><img src='{{ \"assets/images/\" + element.conditionCode + \".svg\" }}'></td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"temperature\">\r\n          <th *matHeaderCellDef mat-header-cell>Temperature</th>\r\n          <td *matCellDef=\"let element\" mat-cell> {{element.airTemperature}} °C</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"windSpeed\">\r\n          <th *matHeaderCellDef mat-header-cell>Wind Speed</th>\r\n          <td *matCellDef=\"let element\" mat-cell> {{element.windSpeed}} m/s</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"totalPrecipitation\">\r\n          <th *matHeaderCellDef mat-header-cell>Total Precipitation</th>\r\n          <td *matCellDef=\"let element\" mat-cell> {{element.totalPrecipitation}} mm</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th *matHeaderCellDef mat-header-cell>\r\n          </th>\r\n          <td *matCellDef=\"let element\" mat-cell>\r\n            <button [matMenuTriggerFor]=\"menu\" mat-icon-button>\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button [routerLink]=\"['/locations', element.id]\" mat-menu-item>\r\n                <mat-icon>list_alt</mat-icon>\r\n                <span>Details</span>\r\n              </button>\r\n              <button (click)=\"delete(element.id)\" mat-menu-item>\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Delete</span>\r\n              </button>\r\n            </mat-menu>\r\n          </td>\r\n        </ng-container>\r\n        <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\r\n        <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"!favoriteLocations\">\r\n      You currently have no favorites. Head to <a href=\"\" [routerLink]=\"['/locations']\">Locations</a> table and pick your favorite locations!\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!authService.isLoggedIn()\">\r\n    <p>Please login to manage your favorites!</p>\r\n    <img src=\"https://static.thenounproject.com/png/75190-200.png\">\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/view/view.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/view/view.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <app-favorites></app-favorites>\r\n</div>\r\n\r\n<div>\r\n  <app-cards></app-cards>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/homepage/cards/cards.component.css":
  /*!****************************************************!*\
    !*** ./src/app/homepage/cards/cards.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageCardsCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\nmat-card {\r\n  -webkit-box-flex: 0;\r\n          flex: 0 1 calc(25% - 1em);\r\n  max-width: 200px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  max-width: 50%;\r\n  height: auto;\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n\r\nh3 {\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZmxleDogMCAxIGNhbGMoMjUlIC0gMWVtKTtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/homepage/cards/cards.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/homepage/cards/cards.component.ts ***!
    \***************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppHomepageCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
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

    var CardsComponent =
    /*#__PURE__*/
    function () {
      function CardsComponent(api, router) {
        _classCallCheck(this, CardsComponent);

        this.api = api;
        this.router = router;
        this.biggestTowns = ['vilnius', 'kaunas', 'klaipeda', 'siauliai', 'panevezys'];
        this.homepageCards = [];
      }

      _createClass(CardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.get('/api/locations/current/' + this.biggestTowns).subscribe(function (result) {
            return _this.homepageCards = result;
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(id) {
          this.router.navigate(['/locations/' + id]);
        }
      }]);

      return CardsComponent;
    }();

    CardsComponent.ctorParameters = function () {
      return [{
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/cards/cards.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.component.css */
      "./src/app/homepage/cards/cards.component.css")).default]
    })], CardsComponent);
    /***/
  },

  /***/
  "./src/app/homepage/favorites/favorites.component.css":
  /*!************************************************************!*\
    !*** ./src/app/homepage/favorites/favorites.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageFavoritesFavoritesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  color: crimson;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1024px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:nth-child(3) {\r\n  width: 100px;\r\n}\r\n\r\ntable th:last-child{\r\n  width: 10px;\r\n}\r\n\r\nimg {\r\n  max-width: 50%;\r\n  height: auto;\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lemonchiffon;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUgdGg6bnRoLWNoaWxkKDMpIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmxhc3QtY2hpbGR7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxlbW9uY2hpZmZvbjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/homepage/favorites/favorites.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/homepage/favorites/favorites.component.ts ***!
    \***********************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppHomepageFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/api.service */
    "./src/app/core/api.service.ts");

    var FavoritesComponent =
    /*#__PURE__*/
    function () {
      function FavoritesComponent(authService, api) {
        _classCallCheck(this, FavoritesComponent);

        this.authService = authService;
        this.api = api;
        this.displayedColumns = ['no', 'locationName', 'conditionCode', 'temperature', 'windSpeed', 'totalPrecipitation', 'actions'];
        this.favoriteLocations = [];
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.api.get('/api/locations/favorites').subscribe(function (data) {
            _this2.favoriteLocations = data;
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this3 = this;

          this.api.delete("/api/locations/favorites/".concat(id)).subscribe(function () {
            _this3.favoriteLocations = _this3.favoriteLocations.filter(function (item) {
              return item.id !== id;
            });

            _this3.ngOnInit();
          });
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/favorites/favorites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.css */
      "./src/app/homepage/favorites/favorites.component.css")).default]
    })], FavoritesComponent);
    /***/
  },

  /***/
  "./src/app/homepage/homepage-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/homepage/homepage-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomepageRoutingModule */

  /***/
  function srcAppHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function () {
      return HomepageRoutingModule;
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


    var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/homepage/view/view.component.ts");

    var routes = [{
      path: '',
      component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"]
    }];

    var HomepageRoutingModule = function HomepageRoutingModule() {
      _classCallCheck(this, HomepageRoutingModule);
    };

    HomepageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomepageRoutingModule);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/homepage/homepage.module.ts ***!
    \*********************************************/

  /*! exports provided: HomepageModule */

  /***/
  function srcAppHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageModule", function () {
      return HomepageModule;
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


    var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage-routing.module */
    "./src/app/homepage/homepage-routing.module.ts");
    /* harmony import */


    var _cards_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cards/cards.component */
    "./src/app/homepage/cards/cards.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/homepage/view/view.component.ts");
    /* harmony import */


    var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorites/favorites.component */
    "./src/app/homepage/favorites/favorites.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var HomepageModule = function HomepageModule() {
      _classCallCheck(this, HomepageModule);
    };

    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cards_cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"]]
    })], HomepageModule);
    /***/
  },

  /***/
  "./src/app/homepage/view/view.component.css":
  /*!**************************************************!*\
    !*** ./src/app/homepage/view/view.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageViewViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n  margin: 0 20px 0 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2Uvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/homepage/view/view.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/homepage/view/view.component.ts ***!
    \*************************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppHomepageViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewComponent =
    /*#__PURE__*/
    function () {
      function ViewComponent() {
        _classCallCheck(this, ViewComponent);
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewComponent;
    }();

    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/view/view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view.component.css */
      "./src/app/homepage/view/view.component.css")).default]
    })], ViewComponent);
    /***/
  }
}]);
//# sourceMappingURL=homepage-homepage-module-es5.js.map