function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\r\n  <h2>Login required!</h2>\r\n  <div>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"email\" autocomplete=\"off\" matInput placeholder=\"Email\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"password\" matInput placeholder=\"Password\" type=\"Password\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <button (click)=\"reset()\" mat-button>Reset</button>\r\n    <button (click)=\"login()\" color=\"primary\" mat-raised-button>Login</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/auth/login-routing.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/login-routing.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppAuthLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/login.module.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/login.module.ts ***!
    \**************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppAuthLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/auth/login-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.content {\r\n  margin-top: 30px;\r\n  text-align: center;\r\n}\r\n\r\ndiv > div:last-child > button {\r\n  margin: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2ID4gZGl2Omxhc3QtY2hpbGQgPiBidXR0b24ge1xyXG4gIG1hcmdpbjogNnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this = this;

          this.authService.login(this.email, this.password).subscribe(function () {
            if (_this.authService.isLoggedIn()) {
              // const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
              console.log('sucess');
              var redirect = '';

              _this.router.navigateByUrl(redirect);
            } else {
              console.log('already logged in');
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.email = '';
          this.password = '';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  }
}]);
//# sourceMappingURL=auth-login-module-es5.js.map