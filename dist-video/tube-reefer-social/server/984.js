"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 91134:
/*!********************************************************!*\
  !*** ./src/app/@shared/services/breakpoint.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointService: () => (/* binding */ BreakpointService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 85028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);


class BreakpointService {
  constructor() {
    this.breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    this.breakpointFlags = {
      xs: {
        lessThen: false,
        between: false,
        gatherThen: false
      },
      sm: {
        lessThen: false,
        between: false,
        gatherThen: false
      },
      md: {
        lessThen: false,
        between: false,
        gatherThen: false
      },
      lg: {
        lessThen: false,
        between: false,
        gatherThen: false
      },
      xl: {
        lessThen: false,
        between: false,
        gatherThen: false
      },
      xxl: {
        lessThen: false,
        between: false,
        gatherThen: false
      }
    };
    this.screen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.breakpointFlags);
    this.setBreakpoints(window.innerWidth);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'resize').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(() => window.innerWidth), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilChanged)()).subscribe(innerWidth => {
      this.setBreakpoints(innerWidth);
    });
  }
  setBreakpoints(innerWidth) {
    this.breakpointFlags.xs.lessThen = innerWidth <= this.breakpoints.xs;
    this.breakpointFlags.xs.between = innerWidth >= this.breakpoints.xs && innerWidth <= this.breakpoints.sm;
    this.breakpointFlags.xs.gatherThen = innerWidth >= this.breakpoints.xs;
    this.breakpointFlags.sm.lessThen = innerWidth <= this.breakpoints.sm;
    this.breakpointFlags.sm.between = innerWidth >= this.breakpoints.sm && innerWidth <= this.breakpoints.md;
    this.breakpointFlags.sm.gatherThen = innerWidth >= this.breakpoints.sm;
    this.breakpointFlags.md.lessThen = innerWidth <= this.breakpoints.md;
    this.breakpointFlags.md.between = innerWidth >= this.breakpoints.md && innerWidth <= this.breakpoints.lg;
    this.breakpointFlags.md.gatherThen = innerWidth >= this.breakpoints.md;
    this.breakpointFlags.lg.lessThen = innerWidth <= this.breakpoints.lg;
    this.breakpointFlags.lg.between = innerWidth >= this.breakpoints.lg && innerWidth <= this.breakpoints.xl;
    this.breakpointFlags.lg.gatherThen = innerWidth >= this.breakpoints.lg;
    this.breakpointFlags.xl.lessThen = innerWidth <= this.breakpoints.xl;
    this.breakpointFlags.xl.between = innerWidth >= this.breakpoints.xl && innerWidth <= this.breakpoints.xxl;
    this.breakpointFlags.xl.gatherThen = innerWidth >= this.breakpoints.xl;
    this.breakpointFlags.xxl.lessThen = innerWidth <= this.breakpoints.xxl;
    this.breakpointFlags.xxl.between = innerWidth >= this.breakpoints.xxl;
    this.breakpointFlags.xxl.gatherThen = innerWidth >= this.breakpoints.xxl;
    this.screen.next(this.breakpointFlags);
  }
  static #_ = this.ɵfac = function BreakpointService_Factory(t) {
    return new (t || BreakpointService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BreakpointService,
    factory: BreakpointService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 89516:
/*!*******************************************************************!*\
  !*** ./src/app/main-layout/components/footer/footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 10,
    vars: 0,
    consts: [[1, "sticky-footer"], [1, "container"], [1, "row", "no-gutters"], [1, "d-flex", "justify-content-center"], [1, "mt-1", "mb-0"], [1, "text-dark"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A9 Copyright 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29826:
/*!*******************************************************************!*\
  !*** ./src/app/main-layout/components/header/header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 37578);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var src_app_shared_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/modals/video-post-modal/video-post-modal.component */ 34622);
/* harmony import */ var _notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications-modal/notifications-modal.component */ 40062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 60910);
/* harmony import */ var src_app_shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/services/breakpoint.service */ 91134);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90337);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 36978);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 37431);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 23342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 93737);














function HeaderComponent_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 35);
  }
}
const _c0 = function () {
  return ["fas", "bars"];
};
const _c1 = function () {
  return ["fas", "house"];
};
const _c2 = function () {
  return ["fas", "book-open"];
};
const _c3 = function () {
  return ["fas", "play"];
};
const _c4 = function () {
  return ["fas", "bell"];
};
const _c5 = function () {
  return ["fas", "caret-down"];
};
const _c6 = function () {
  return ["fas", "user-circle"];
};
const _c7 = function () {
  return ["fas", "user"];
};
const _c8 = function () {
  return ["fas", "moon"];
};
const _c9 = function () {
  return ["fas", "sun"];
};
const _c10 = function () {
  return ["fas", "sign-out-alt"];
};
function HeaderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div")(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.toggleSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 7)(7, "li", 8)(8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li", 11)(11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "li", 14)(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ul", 16)(17, "div", 17)(18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_div_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.openNotificationsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, HeaderComponent_ng_container_1_span_19_Template, 1, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 21)(22, "div", 22)(23, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 26)(29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.myAccountNavigation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " \u00A0 My Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " \u00A0 ReeferTube Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "button", 30)(36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 32)(39, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function HeaderComponent_ng_container_1_Template_input_change_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.shareService.toggleTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\u00A0 Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](22, _c0))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](23, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](24, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](25, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.shareService.isNotify);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](26, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.shareService.userDetails == null ? null : ctx_r0.shareService.userDetails.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r0.shareService == null ? null : ctx_r0.shareService.userChannelName) ? ctx_r0.shareService == null ? null : ctx_r0.shareService.userChannelName : ctx_r0.shareService.userDetails == null ? null : ctx_r0.shareService.userDetails.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](27, _c5))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](28, _c6))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c7))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](30, _c8))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r0.shareService.isDarkTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c9))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](32, _c10))("fixedWidth", true);
  }
}
function HeaderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 37)(5, "a", 38)(6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 40)(9, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
class HeaderComponent {
  constructor(shareService, breakpointService, offcanvasService, commonService, cookieService, authService, router, modalService) {
    this.shareService = shareService;
    this.breakpointService = breakpointService;
    this.offcanvasService = offcanvasService;
    this.commonService = commonService;
    this.cookieService = cookieService;
    this.authService = authService;
    this.router = router;
    this.modalService = modalService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'customers/logout';
    const isRead = localStorage.getItem('isRead');
    if (isRead === 'N') {
      this.shareService.isNotify = true;
    }
  }
  ngOnInit() {
    this.userDetails = JSON.parse(this.authService.getUserData());
  }
  ngAfterViewInit() {}
  myAccountNavigation() {
    const id = this.shareService.userDetails.Id;
    // location.href = `https://freedom.buzz/settings/view-profile/${id}`;
    const url = `https://reefer.social/settings/view-profile/${id}`;
    window.open(url, "_blank");
  }
  toggleSidebar() {
    if (this.breakpointService.screen.getValue().md.gatherThen) {
      this.shareService.toggleSidebar();
    } else {
      this.offcanvasService.open(_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent);
    }
  }
  logout() {
    // this.isCollapsed = true;
    this.cookieService.delete('auth-user', '/', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.domain);
    this.commonService.get(this.apiUrl).subscribe({
      next: res => {
        localStorage.clear();
        sessionStorage.clear();
        location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.logoutUrl;
        // location.href = "https://freedom-api.opash.in/api/v1/customers/logout";
      }
    });
  }

  isUserMediaApproved() {
    return this.userDetails?.MediaApproved === 1;
  }
  openVideoUploadPopUp() {
    const modalRef = this.modalService.open(src_app_shared_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_2__.VideoPostModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.title = `Upload Video`;
    modalRef.componentInstance.confirmButtonLabel = 'Upload Video';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      console.log(res);
    });
  }
  openNotificationsModal() {
    this.userMenusOverlayDialog = this.modalService.open(_notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_3__.NotificationsModalComponent, {
      keyboard: true,
      modalDialogClass: 'notifications-modal'
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_4__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_5__.BreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbOffcanvas), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 4,
    vars: 2,
    consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "osahan-nav", "fixed-top", "justify-content-between"], [4, "ngIf", "ngIfElse"], ["noCredentials", ""], [1, "btn", "btn-link", "btn-sm", "text-secondary", "order-1", "order-sm-0", "ms-1", 3, "click"], [3, "icon", "fixedWidth"], ["routerLink", "/home", 1, "navbar-brand", "ms-2", "me-1"], ["alt", "", "src", "/assets/logo-square.png", 1, "img-fluid", "h-40-px", "rounded"], [1, "navbar-nav", "d-none", "d-sm-flex", "flex-row", "justify-content-around", "align-self-center", "ms-auto", "m-lg-auto", "gap-3", "gap-xl-20", "gap-lg-10", "py-0", "nav-btn"], ["title", "Reefer Home", 1, "cursor"], ["href", "https://reefer.social/home", "target", "_blank"], [1, "font-24-px", 3, "icon"], ["title", "Reefer Research", 1, "cursor"], ["href", "https://reefer.social/research", "target", "_blank"], [1, "font-24-px", "mx-sm-5", 3, "icon"], ["title", "Home", 1, "cursor"], ["routerLink", "/home"], [1, "navbar-nav", "ms-auto", "ms-md-0", "osahan-right-navbar"], [1, "single-item"], [1, "icon-area", "d-center", "position-relative", 3, "click"], ["class", "abs-area position-absolute d-center smtxt", 4, "ngIf"], [1, "font-20-px", 3, "icon"], [1, "nav-item", "dropdown", "no-arrow", "osahan-right-navbar-user"], ["ngbDropdown", "", 1, "d-inline-block", "btn-group", "float-end", "right-action"], ["id", "userDropdown", "role", "button", "ngbDropdownToggle", "", 1, "nav-link", "user-dropdown-link", "w-160-px", "d-flex", "align-items-center"], ["alt", "", "loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 3, "src"], [1, "c-header-name"], ["ngbDropdownMenu", "", "aria-labelledby", "userDropdown", 1, "shadow-lg", "p-1", "mb-5", "rounded"], ["ngbDropdownItem", "", 3, "click"], [1, "font-20-px", 3, "icon", "fixedWidth"], ["ngbDropdownItem", "", "routerLink", "/account"], ["ngbDropdownItem", ""], [1, "d-flex", "gap-1", "align-items-center"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "button", 1, "form-check-input", 3, "checked", "change"], [1, "dropdown-divider"], [1, "abs-area", "position-absolute", "d-center", "smtxt"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "m-2"], [1, "d-flex"], ["href", "https://reefer.social/login"], [1, "btn", "btn-success", "me-2"], ["href", "https://reefer.social/register"], [1, "btn", "btn-primary"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HeaderComponent_ng_container_1_Template, 45, 33, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_ng_template_2_Template, 11, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shareService.getCredentials())("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent],
    styles: ["@media (max-width: 556px) {\n  .w-160-px[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: unset;\n  }\n  .navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -170px;\n  }\n}\n.single-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n@media (max-width: 1199px) {\n  .single-item[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n.single-item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: var(--box-1st-color);\n  border-radius: 12px;\n  cursor: pointer;\n}\n.single-item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   .abs-area[_ngcontent-%COMP%] {\n  right: initial;\n  top: 0px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  background: red;\n  border-radius: 50%;\n}\n.single-item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--para-3rd-color);\n}\n\n.c-header-name[_ngcontent-%COMP%] {\n  max-width: 85px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0 3px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  left: -70px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUFDRjtFQUNBO0lBQ0Usa0JBQUE7SUFFQSxZQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsZ0JBQUE7QUFERjtBQUdFO0VBSEY7SUFJSSxnQkFBQTtFQUFGO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdJO0VBQ0UsNEJBQUE7QUFETjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDU1NnB4KSB7XHJcbiAgLnctMTYwLXB4IHtcclxuICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGxlZnQ6IC0xMTdweDtcclxuICAgIGxlZnQ6IC0xNzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaW5nbGUtaXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmljb24tYXJlYSB7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJveC0xc3QtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuYWJzLWFyZWEge1xyXG4gICAgICByaWdodDogaW5pdGlhbDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAvLyBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcGFyYS0zcmQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYy1oZWFkZXItbmFtZSB7XHJcbiAgbWF4LXdpZHRoOiA4NXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbGVmdDogLTcwcHg7XHJcblxyXG4gIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 87381:
/*!*****************************************************************************!*\
  !*** ./src/app/main-layout/components/mobile-menu/mobile-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileMenuComponent: () => (/* binding */ MobileMenuComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/modals/video-post-modal/video-post-modal.component */ 34622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90337);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 60910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 23342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 93737);








const _c0 = function () {
  return ["fas", "user"];
};
function MobileMenuComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileMenuComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.getmyChannel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
const _c1 = function () {
  return ["fas", "cloud-upload"];
};
function MobileMenuComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileMenuComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openVideoUploadPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1))("fixedWidth", true);
  }
}
const _c2 = function () {
  return ["fas", "home"];
};
class MobileMenuComponent {
  constructor(modalService, shareService, router, authService) {
    this.modalService = modalService;
    this.shareService = shareService;
    this.router = router;
    this.authService = authService;
    this.useDetails = {};
    this.useDetails = JSON.parse(this.authService.getUserData());
  }
  ngOnInit() {
    this.channelId = +localStorage.getItem('channelId');
  }
  openVideoUploadPopUp() {
    const modalRef = this.modalService.open(src_app_shared_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_0__.VideoPostModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.title = `Upload Video`;
    modalRef.componentInstance.confirmButtonLabel = 'Upload Video';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      // console.log(res);
    });
  }
  getmyChannel() {
    const unique_link = this.shareService.channelData.unique_link;
    this.router.navigate([`channel/${unique_link}`], {
      state: {
        data: unique_link
      }
    });
  }
  isUserMediaApproved() {
    return this.useDetails?.MediaApproved === 1;
  }
  static #_ = this.ɵfac = function MobileMenuComponent_Factory(t) {
    return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MobileMenuComponent,
    selectors: [["app-mobile-menu"]],
    decls: 9,
    vars: 5,
    consts: [[1, "mobile-menu"], [1, "bottom-navbar-nav"], ["routerLinkActive", "active", 1, "bottom-nav-item"], ["routerLink", "/home", 1, "bottom-nav-link"], [3, "icon", "fixedWidth"], ["class", "bottom-nav-item", "routerLinkActive", "active", 4, "ngIf"], [1, "bottom-nav-link", 3, "click"]],
    template: function MobileMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MobileMenuComponent_li_7_Template, 5, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MobileMenuComponent_li_8_Template, 5, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c2))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUserMediaApproved() && ctx.channelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUserMediaApproved() && ctx.channelId);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40062:
/*!*********************************************************************************************!*\
  !*** ./src/app/main-layout/components/notifications-modal/notifications-modal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsModalComponent: () => (/* binding */ NotificationsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 60910);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 36978);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 93737);
/* harmony import */ var _shared_pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@shared/pipe/date-day.pipe */ 56070);








function NotificationsModalComponent_ng_container_4_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 19);
  }
}
const _c0 = function () {
  return ["fas", "clock"];
};
function NotificationsModalComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsModalComponent_ng_container_4_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.readUnreadNotification(notification_r3.postId, notification_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13)(6, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NotificationsModalComponent_ng_container_4_div_1_span_8_Template, 1, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "dateDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://reefer.social/post/" + notification_r3.postId, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", (notification_r3 == null ? null : notification_r3.ProfilePicName) || "/assets/images/avtar/placeholder-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", notification_r3 == null ? null : notification_r3.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notification_r3.isRead === "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, notification_r3 == null ? null : notification_r3.createDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r3 == null ? null : notification_r3.notificationDesc);
  }
}
function NotificationsModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationsModalComponent_ng_container_4_div_1_Template, 15, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notification_r3.isRead === "N");
  }
}
function NotificationsModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function NotificationsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsModalComponent_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "See all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NotificationsModalComponent {
  constructor(sharedService, commonService, activeModal, activeOffcanvas) {
    this.sharedService = sharedService;
    this.commonService = commonService;
    this.activeModal = activeModal;
    this.activeOffcanvas = activeOffcanvas;
    this.sharedService.getNotificationList();
  }
  readUnreadNotification(postId, notificationId) {
    this.commonService.readUnreadNotification(notificationId, 'Y').subscribe({
      next: res => {
        // const url = `https://freedom.buzz/post/${postId}`;
        // window.open(url, "_blank");
        // this.router.navigate([`post/${postId}`]);
        this.closeModal();
      }
    });
  }
  closeModal() {
    this.activeModal?.dismiss();
    this.activeOffcanvas?.dismiss();
  }
  static #_ = this.ɵfac = function NotificationsModalComponent_Factory(t) {
    return new (t || NotificationsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_0__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveOffcanvas));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NotificationsModalComponent,
    selectors: [["app-notifications-modal"]],
    decls: 8,
    vars: 3,
    consts: [[1, "main-area", "p-3", "notification-content", "modal-height"], [1, "mb-8"], [1, "dropdown-divider", "mb-2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dropdown-divider"], ["class", "btn-area m-2", 3, "click", 4, "ngIf"], ["class", "single-box p-2", 4, "ngIf"], [1, "single-box", "p-2"], ["target", "_blank", 1, "d-flex", "justify-content-between", "align-items-center", 3, "href", "click"], [1, "left-item", "position-relative", "d-inline-flex", "gap-3"], [1, "avatar", "position-relative", "d-inline-flex"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='/assets/images/avtar/placeholder-user.png';", "alt", "avatar", 1, "avatar-img", "w-48-px", "h-48-px", "rounded-5", 3, "src"], [1, "text-area"], [1, "m-0", "mb-1"], ["class", "unread-notification smtxt", 4, "ngIf"], [1, "font-12-px"], [1, "ms-2", 3, "icon"], [1, "mdtxt"], [1, "unread-notification", "smtxt"], [1, "btn-area", "m-2", 3, "click"], ["routerLink", "/notifications"]],
    template: function NotificationsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NotificationsModalComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NotificationsModalComponent_ng_container_5_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NotificationsModalComponent_div_7_Template, 3, 0, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sharedService.notificationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.sharedService.notificationList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sharedService.notificationList.length > 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_2__.DateDayPipe],
    styles: [".notifications-modal {\n  cursor: pointer;\n  position: fixed;\n  right: 185px;\n  top: 28px;\n  display: flex;\n  bottom: unset !important;\n  min-width: 280px;\n  max-width: 80vw;\n}\n@media (max-width: 556px) {\n    .notifications-modal {\n    top: 52px;\n    right: 75px;\n  }\n}\n\n.modal-height[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9ub3RpZmljYXRpb25zLW1vZGFsL25vdGlmaWNhdGlvbnMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQVZGO0lBV0ksU0FBQTtJQUNBLFdBQUE7RUFDSjtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5ub3RpZmljYXRpb25zLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxODVweDtcclxuICAgIHRvcDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTZweCkge1xyXG4gICAgICB0b3A6IDUycHg7XHJcbiAgICAgIHJpZ2h0OiA3NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlaWdodHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37578:
/*!*********************************************************************!*\
  !*** ./src/app/main-layout/components/sidebar/sidebar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 56316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 60910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 36978);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 32856);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 23342);
/* harmony import */ var src_app_shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/services/breakpoint.service */ 91134);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 93737);











const _c0 = function () {
  return ["fas", "user"];
};
function SidebarComponent_ng_container_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 2)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "My Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
const _c1 = function () {
  return ["fas", "cloud-upload"];
};
function SidebarComponent_ng_container_0_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 2)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Upload Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c1))("fixedWidth", true);
  }
}
const _c2 = function (a0) {
  return {
    data: a0
  };
};
function SidebarComponent_ng_container_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarComponent_ng_container_0_li_14_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const channel_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.navigateToChannel(channel_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const channel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "channel/" + (channel_r4 == null ? null : channel_r4.unique_link))("state", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c2, channel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", channel_r4.profile_pic_name, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", channel_r4.firstname, " ");
  }
}
const _c3 = function (a0) {
  return {
    toggled: a0
  };
};
const _c4 = function () {
  return ["fas", "home"];
};
function SidebarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li", 2)(4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SidebarComponent_ng_container_0_li_8_Template, 5, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SidebarComponent_ng_container_0_li_9_Template, 5, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 6)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Featured Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SidebarComponent_ng_container_0_li_14_Template, 5, 6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c3, !ctx_r0.shareService.isSidebarOpen && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx_r0.breakpointService == null ? null : ctx_r0.breakpointService.screen)) == null ? null : tmp_0_0.md == null ? null : tmp_0_0.md.gatherThen)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c4))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isUserMediaApproved());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isUserMediaApproved());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.featuredChannels);
  }
}
class SidebarComponent {
  constructor(shareService, route, commonService, spinner, router, authService, breakpointService, offcanvasService) {
    this.shareService = shareService;
    this.route = route;
    this.commonService = commonService;
    this.spinner = spinner;
    this.router = router;
    this.authService = authService;
    this.breakpointService = breakpointService;
    this.offcanvasService = offcanvasService;
    this.useDetails = {};
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'channels/';
  }
  ngOnInit() {
    const channelId = this.route.snapshot.paramMap.get('id');
    this.getChannels();
    // this.channel = this.channelService.getChannelById(channelId);
  }

  getChannels() {
    // this.spinner.show();
    this.commonService.get(this.apiUrl).subscribe({
      next: res => {
        // this.spinner.hide();
        if (res.data) {
          this.featuredChannels = res.data;
        }
      },
      error: error => {
        // this.spinner.hide();
        console.log(error);
      }
    });
  }
  navigateToChannel(channel) {
    // console.log(channel);
    // this.router.navigate([`home/${channel?.unique_link}`, { data: channel }]);
    // this.router.navigate([`channel/${channel?.unique_link}`], {
    //   state: { data: channel },
    // });
    this.offcanvasService.dismiss();
  }
  isUserMediaApproved() {
    return this.useDetails?.MediaApproved === 1;
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_4__.BreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbOffcanvas));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "sidebar", "navbar-nav", 3, "ngClass"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], [3, "icon", "fixedWidth"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], [1, "nav-item", "channel-sidebar-list"], [4, "ngFor", "ngForOf"], ["routerLink", "/channels", 1, "nav-link"], ["routerLink", "/upload/details", 1, "nav-link"], [3, "click"], [3, "routerLink", "state"], ["alt", "", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 1, "img-fluid", 3, "src"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_ng_container_0_Template, 15, 11, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.shareService.getCredentials());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 34517:
/*!***********************************************************!*\
  !*** ./src/app/main-layout/main-layout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutRoutingModule: () => (/* binding */ MainLayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout.component */ 69858);
/* harmony import */ var _pages_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/history-page/history-page.component */ 95673);
/* harmony import */ var _shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/guards/user-auth.guard */ 66341);
/* harmony import */ var _pages_settings_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings/edit-profile/edit-profile.component */ 83763);
/* harmony import */ var _pages_settings_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/settings/my-account/my-account.component */ 74251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 59936);








const routes = [{
  path: '',
  component: _main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ 642).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 99642)).then(m => m.HomeModule)
    // canActivate: mapToCanActivate([UserAuthGuard]),
  }, {
    path: 'channels',
    loadChildren: () => __webpack_require__.e(/*! import() */ 198).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/channels/channels.module */ 87198)).then(m => m.ChannelModule),
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }, {
    path: 'video/:id',
    loadChildren: () => __webpack_require__.e(/*! import() */ 115).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/video/video.module */ 33115)).then(m => m.VideoModule)
    // canActivate: mapToCanActivate([UserAuthGuard]),
  }, {
    path: 'upload',
    loadChildren: () => __webpack_require__.e(/*! import() */ 982).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/upload/upload.module */ 28982)).then(m => m.UploadModule),
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }, {
    path: 'notifications',
    loadChildren: () => __webpack_require__.e(/*! import() */ 641).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notification.module */ 77641)).then(m => m.NotificationsModule),
    data: {
      isShowLeftSideBar: true
    },
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }, {
    path: 'history-page',
    component: _pages_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_1__.HistoryPageComponent,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }, {
    path: 'settings',
    component: _pages_settings_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__.EditProfileComponent,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }, {
    path: 'account',
    component: _pages_settings_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__.MyAccountComponent,
    canActivate: (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.mapToCanActivate)([_shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__.UserAuthGuard])
  }]
}];
class MainLayoutRoutingModule {
  static #_ = this.ɵfac = function MainLayoutRoutingModule_Factory(t) {
    return new (t || MainLayoutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MainLayoutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainLayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 69858:
/*!******************************************************!*\
  !*** ./src/app/main-layout/main-layout.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@shared/services/share.service */ 60910);
/* harmony import */ var _shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/breakpoint.service */ 91134);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/common.service */ 36978);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 32856);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/auth.service */ 23342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 29826);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 37578);
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ 87381);












function MainLayoutComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "sidebar-toggled": a0
  };
};
class MainLayoutComponent {
  constructor(shareService, breakpointService, commonService, router, spinner, authService) {
    this.shareService = shareService;
    this.breakpointService = breakpointService;
    this.commonService = commonService;
    this.router = router;
    this.spinner = spinner;
    this.authService = authService;
  }
  ngOnInit() {
    this.spinner.show();
    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'login/me';
    this.commonService.get(url, {
      withCredentials: true
    }).subscribe({
      next: res => {
        this.spinner.hide();
        this.tokenData = {
          ...res
        };
        const auth = this.tokenData?.user;
        const token = this.tokenData?.accessToken;
        const isLogin = token && auth ? true : false;
        // this.authService.setUserData(auth)
        this.shareService.getUserDetails(auth?.profileId);
        this.authService.userDetails = auth;
        this.authService.token = token;
        // if (!isLogin) {
        //   location.href = environment?.loginUrl;
        // }
      },

      error: err => {
        this.spinner.hide();
        // window.location.href = environment?.loginUrl;
        console.log(err);
      }
    });
  }
  static #_ = this.ɵfac = function MainLayoutComponent_Factory(t) {
    return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_share_service__WEBPACK_IMPORTED_MODULE_1__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_breakpoint_service__WEBPACK_IMPORTED_MODULE_2__.BreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MainLayoutComponent,
    selectors: [["app-main-layout"]],
    decls: 8,
    vars: 6,
    consts: [["id", "wrapper"], [4, "ngIf"], ["id", "content-wrapper", 3, "ngClass"], [1, "container-fluid", "pb-0", "min-vh-100"]],
    template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MainLayoutComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-mobile-menu");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx.breakpointService == null ? null : ctx.breakpointService.screen)) == null ? null : tmp_0_0.md == null ? null : tmp_0_0.md.gatherThen);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, !ctx.shareService.isSidebarOpen));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__.MobileMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 75984:
/*!***************************************************!*\
  !*** ./src/app/main-layout/main-layout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutModule: () => (/* binding */ MainLayoutModule)
/* harmony export */ });
/* harmony import */ var _main_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout-routing.module */ 34517);
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-layout.component */ 69858);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 89516);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 29826);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 37578);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ 30359);
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ 87381);
/* harmony import */ var _pages_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/history-page/history-page.component */ 95673);
/* harmony import */ var _pages_settings_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/settings/edit-profile/edit-profile.component */ 83763);
/* harmony import */ var _pages_settings_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/settings/my-account/my-account.component */ 74251);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-lazyload-image */ 36296);
/* harmony import */ var _components_notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notifications-modal/notifications-modal.component */ 40062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 59936);













class MainLayoutModule {
  static #_ = this.ɵfac = function MainLayoutModule_Factory(t) {
    return new (t || MainLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: MainLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_main_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainLayoutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__.LazyLoadImageModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MainLayoutModule, {
    declarations: [_main_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainLayoutComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_6__.MobileMenuComponent, _pages_history_page_history_page_component__WEBPACK_IMPORTED_MODULE_7__.HistoryPageComponent, _pages_settings_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__.EditProfileComponent, _pages_settings_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_9__.MyAccountComponent, _components_notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_10__.NotificationsModalComponent],
    imports: [_main_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainLayoutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__.LazyLoadImageModule]
  });
})();

/***/ }),

/***/ 95673:
/*!**************************************************************************!*\
  !*** ./src/app/main-layout/pages/history-page/history-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPageComponent: () => (/* binding */ HistoryPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@shared/components/video-card/video-card.component */ 61695);
/* harmony import */ var _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@shared/components/channels-card/channels-card.component */ 33349);



class HistoryPageComponent {
  static #_ = this.ɵfac = function HistoryPageComponent_Factory(t) {
    return new (t || HistoryPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HistoryPageComponent,
    selectors: [["app-history-page"]],
    decls: 6,
    vars: 0,
    consts: [[1, "my-2"]],
    template: function HistoryPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Watch History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-video-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Watch Channel History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-channels-card");
      }
    },
    dependencies: [_shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_0__.VideoCardComponent, _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_1__.ChannelsCardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83763:
/*!***********************************************************************************!*\
  !*** ./src/app/main-layout/pages/settings/edit-profile/edit-profile.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileComponent: () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 85028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 23342);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 36978);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/services/toast.service */ 46085);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 32856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 34228);










const _c0 = ["zipCode"];
function EditProfileComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Username field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4.country_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.country, " ");
  }
}
function EditProfileComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Zip field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
class EditProfileComponent {
  constructor(authService, commonService, toasterService, spinner) {
    this.authService = authService;
    this.commonService = commonService;
    this.toasterService = toasterService;
    this.spinner = spinner;
    this.useDetails = {};
    this.allCountryData = [];
    this.isEdit = false;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'customers/';
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      Zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      MobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^\d{10}$/)]),
      City: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      State: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      UserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      ProfilePicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      CoverPicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    this.useDetails = JSON.parse(this.authService.getUserData());
    console.log(this.useDetails);
  }
  ngOnInit() {
    this.getAllCountries();
    this.getUserDetails();
  }
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.zipCode.nativeElement, 'input').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(1000)).subscribe(event => {
      const val = event['target'].value;
      if (val.length > 3) {
        this.onZipChange(val);
      }
    });
  }
  getUserDetails() {
    const data = {
      FirstName: this.useDetails?.FirstName,
      LastName: this.useDetails?.LastName,
      Country: this.useDetails?.Country,
      Zip: this.useDetails?.Zip,
      City: this.useDetails?.City,
      State: this.useDetails?.State,
      Username: this.useDetails?.Username,
      MobileNo: this.useDetails?.MobileNo || '',
      UserID: this.useDetails?.UserID,
      ProfilePicName: this.useDetails?.ProfilePicName,
      CoverPicName: this.useDetails?.CoverPicName
    };
    this.userForm.setValue(data);
  }
  saveChanges() {
    this.spinner.show();
    if (this.userForm?.value) {
      const profileId = this.useDetails.Id;
      const apiUrl = `${this.apiUrl}profile/${profileId}`;
      this.commonService.update(apiUrl, this.userForm.value).subscribe({
        next: res => {
          this.spinner.hide();
          this.isEdit = false;
          this.toasterService.success(res.message);
        },
        error: error => {
          this.spinner.hide();
          console.log(error);
        }
      });
    } else {
      this.spinner.hide();
      this.toasterService.danger('something went wrong!');
    }
  }
  getAllCountries() {
    this.commonService.get(`${this.apiUrl}countries`).subscribe({
      next: result => {
        this.allCountryData = result;
        this.userForm.get('Zip').enable();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  changeCountry(e) {
    this.userForm.get('Country').setValue(e.target.value);
    this.userForm.get('Zip').setValue('');
    this.userForm.get('State').setValue('');
    this.userForm.get('City').setValue('');
  }
  onZipChange(event) {
    const country = this.userForm.value.Country;
    const zip = event;
    this.commonService.get(`${this.apiUrl}zip/${zip}?country=${country}`).subscribe({
      next: data => {
        const zip_data = data[0];
        if (zip_data?.state) {
          // zip_data
          //   ? this.userForm.get('State')!.setValue(zip_data.state)
          //   : null;
          // zip_data ? this.userForm.get('City')!.setValue(zip_data.city) : null;
          this.userForm.get('State').enable();
          this.userForm.get('City').enable();
          this.userForm.get('State').setValue(zip_data.state);
          this.userForm.get('City').setValue(zip_data.city);
          console.log(zip_data);
        } else {
          this.userForm.get('State').disable();
          this.userForm.get('City').disable();
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }
  resetForm() {
    this.getUserDetails();
  }
  onChangeData() {
    this.isEdit = true;
  }
  static #_ = this.ɵfac = function EditProfileComponent_Factory(t) {
    return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EditProfileComponent,
    selectors: [["app-edit-profile"]],
    viewQuery: function EditProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.zipCode = _t.first);
      }
    },
    decls: 77,
    vars: 8,
    consts: [[1, "upload-details"], [1, "row"], [1, "col-lg-12"], [1, "main-title"], [3, "formGroup", "change"], [1, "col-sm-6"], [1, "form-group"], [1, "control-label"], [1, "required"], ["formControlName", "FirstName", "type", "text", 1, "form-control", "border-form-control"], ["formControlName", "LastName", "type", "text", 1, "form-control", "border-form-control"], ["formControlName", "Username", "type", "text", 1, "form-control", "border-form-control"], ["class", "srv-validation-message text-danger", 4, "ngIf"], ["formControlName", "MobileNo", "type", "number", 1, "form-control", "border-form-control"], ["id", "Country", "required", "", "name", "Country", 1, "form-control", "w-100", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Zip", "type", "number", 1, "form-control", "border-form-control"], ["zipCode", ""], ["formControlName", "State", "type", "text", 1, "form-control", "border-form-control"], ["formControlName", "City", "type", "text", 1, "form-control", "border-form-control"], [1, "col-sm-12", "text-right"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-block", "btn-md", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-block", "btn-md", "ms-4", 3, "disabled", "click"], [1, "srv-validation-message", "text-danger"], [3, "value"]],
    template: function EditProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EditProfileComponent_Template_form_change_6_listener() {
          return ctx.onChangeData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1)(23, "div", 5)(24, "div", 6)(25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, EditProfileComponent_div_30_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 5)(32, "div", 6)(33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 1)(39, "div", 5)(40, "div", 6)(41, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_select_ngModelChange_45_listener($event) {
          return ctx.useDetails.Country = $event;
        })("change", function EditProfileComponent_Template_select_change_45_listener($event) {
          return ctx.changeCountry($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, EditProfileComponent_option_46_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 5)(48, "div", 6)(49, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Zip Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, EditProfileComponent_div_55_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 1)(57, "div", 5)(58, "div", 6)(59, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 5)(65, "div", 6)(66, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 1)(72, "div", 20)(73, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_73_listener() {
          return ctx.resetForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_75_listener() {
          return ctx.saveChanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " Save Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.userForm == null ? null : ctx.userForm.controls["Username"] == null ? null : ctx.userForm.controls["Username"].invalid) && (ctx.userForm == null ? null : ctx.userForm.controls["Username"] == null ? null : ctx.userForm.controls["Username"].errors == null ? null : ctx.userForm.controls["Username"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.useDetails.Country)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allCountryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userForm.controls["Zip"].invalid && (ctx.userForm.controls["Zip"].errors == null ? null : ctx.userForm.controls["Zip"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEdit && ctx.userForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74251:
/*!*******************************************************************************!*\
  !*** ./src/app/main-layout/pages/settings/my-account/my-account.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyAccountComponent: () => (/* binding */ MyAccountComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 56316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 36978);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 32856);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 60910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 93737);
/* harmony import */ var _shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@shared/components/video-card/video-card.component */ 61695);
/* harmony import */ var _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@shared/components/channels-card/channels-card.component */ 33349);









function MyAccountComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyAccountComponent_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["fas", "users"];
};
const _c1 = function () {
  return ["fas", "angle-right"];
};
const _c2 = function () {
  return ["fas", "video"];
};
class MyAccountComponent {
  constructor(commonService, spinner, shareService) {
    this.commonService = commonService;
    this.spinner = spinner;
    this.shareService = shareService;
    this.videoList = [];
    this.channelDetails = {};
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'channels';
    this.channelData = [];
    this.activePage = 0;
    this.hasMoreData = false;
    this.channelId = +localStorage.getItem('channelId');
    this.userData = JSON.parse(localStorage.getItem('authUser'));
  }
  ngOnInit() {
    this.getPostVideosById();
    this.getChannelByUserId();
  }
  getPostVideosById() {
    // this.commonService
    //   .post(`${this.apiUrl}/posts`, {
    //     id: this.channelDetails?.profileid,
    //     size: 10,
    //     page: 1,
    //   })
    //   .subscribe({
    //     next: (res: any) => {
    //       this.videoList = res.data;
    //       // console.log(res);
    //       console.log(this.videoList);
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
    this.activePage = 0;
    if (this.channelId) {
      this.loadMore();
    }
  }
  loadMore() {
    this.activePage++;
    this.spinner.show();
    this.commonService.post(`${this.apiUrl}/my-posts`, {
      id: this.channelId,
      size: 12,
      page: this.activePage
    }).subscribe({
      next: res => {
        this.spinner.hide();
        if (res?.data?.length > 0) {
          this.videoList = this.videoList.concat(res.data);
          this.hasMoreData = false;
          this.postedVideoCount = res.pagination.totalItems;
        } else {
          this.hasMoreData = true;
        }
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  getChannelByUserId() {
    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.commonService.get(`${url}channels/my-channel/${this.userData.UserID}`).subscribe({
      next: res => {
        if (res) {
          this.channelData = res;
          this.userChannelCount = this.channelData.length;
          console.log(this.channelData.length);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
  static #_ = this.ɵfac = function MyAccountComponent_Factory(t) {
    return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_2__.ShareService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MyAccountComponent,
    selectors: [["app-my-account"]],
    decls: 47,
    vars: 13,
    consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "mb-3"], [1, "card", "text-white", "bg-primary", "o-hidden", "h-100", "border-none"], [1, "card-body"], [1, "card-body-icon"], [3, "icon"], [1, "mr-5"], [1, "card-footer", "text-white", "clearfix", "small", "z-1"], [1, "float-left"], [1, "float-right"], [1, "card", "text-white", "bg-warning", "o-hidden", "h-100", "border-none"], [1, "video-block", "section-padding"], [1, "col-md-12"], [1, "main-title"], [3, "videoData"], ["class", "d-flex justify-content-center mb-2", 4, "ngIf"], [1, "mt-0"], [3, "channelList"], [1, "d-flex", "justify-content-center", "mb-2"], [1, "btn", "btn-outline-primary", 3, "click"]],
    template: function MyAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 7)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 1)(17, "div", 10)(18, "div", 3)(19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 6)(22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 7)(26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11)(32, "div", 0)(33, "div", 12)(34, "div", 13)(35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "My Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "app-video-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, MyAccountComponent_div_38_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 11)(41, "div", 0)(42, "div", 12)(43, "div", 13)(44, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "My Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "app-channels-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userChannelCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.postedVideoCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("videoData", ctx.videoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hasMoreData && ctx.videoList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("channelList", ctx.channelData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_3__.VideoCardComponent, _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__.ChannelsCardComponent],
    styles: [".card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvcGFnZXMvc2V0dGluZ3MvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuLmZsb2F0LXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

};
;
//# sourceMappingURL=984.js.map