"use strict";
(self["webpackChunktube_reefer_social"] = self["webpackChunktube_reefer_social"] || []).push([["main"],{

/***/ 5892:
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/components/channels-card/channels-card.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelsCardComponent: () => (/* binding */ ChannelsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ChannelsCardComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelsCardComponent_ng_container_0_div_2_Template_div_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const channel_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.openChannelDetailPage(channel_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const channel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", channel_r3 == null ? null : channel_r3.profile_pic_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r3.unique_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", channel_r3.firstname, " ");
  }
}
function ChannelsCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelsCardComponent_ng_container_0_div_2_Template, 11, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.channelList);
  }
}
function ChannelsCardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class ChannelsCardComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  openChannelDetailPage(channel) {
    this.router.navigate([`channel/${channel.unique_link}`], {
      state: {
        data: channel
      }
    }).then(() => {
      window.location.reload();
    });
  }
  static #_ = this.ɵfac = function ChannelsCardComponent_Factory(t) {
    return new (t || ChannelsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChannelsCardComponent,
    selectors: [["app-channels-card"]],
    inputs: {
      channelList: "channelList"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "row"], ["class", "col-xl-3 col-sm-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-sm-6", "mb-3"], [1, "channels-card"], [1, "channels-card-image"], ["alt", "", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 1, "img-fluid", 3, "src"], [1, "channels-card-body", "cursor", 3, "click"], [1, "channels-title"], [1, "channels-view", "font-16-px"], [1, "col-12", "text-center"]],
    template: function ChannelsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChannelsCardComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChannelsCardComponent_ng_container_1_Template, 4, 0, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.channelList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.channelList.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3076:
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/details-card/details-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsCardComponent: () => (/* binding */ DetailsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);



const _c0 = function () {
  return ["fas", "angle-right"];
};
function DetailsCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6)(10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card text-white bg-", card_r1.backgroundColor, " o-hidden h-100 border-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-fw ", card_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
  }
}
class DetailsCardComponent {
  constructor() {
    this.cardsData = [{
      backgroundColor: 'primary',
      icon: 'fas fa-fw fa-users',
      count: 26,
      label: 'Channels'
    }, {
      backgroundColor: 'warning',
      icon: 'fas fa-fw fa-video',
      count: 156,
      label: 'Videos'
    }, {
      backgroundColor: 'success',
      icon: 'fas fa-fw fa-list-alt',
      count: 123,
      label: 'Categories'
    }, {
      backgroundColor: 'danger',
      icon: 'fas fa-fw fa-cloud-upload-alt',
      count: 13,
      label: 'New Videos'
    }];
  }
  static #_ = this.ɵfac = function DetailsCardComponent_Factory(t) {
    return new (t || DetailsCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DetailsCardComponent,
    selectors: [["app-details-card"]],
    decls: 2,
    vars: 1,
    consts: [[1, "row"], ["class", "col-xl-3 col-sm-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-sm-6", "mb-3"], [1, "card-body"], [1, "card-body-icon"], [1, "mr-5"], ["href", "#", 1, "card-footer", "text-white", "clearfix", "small", "z-1"], [1, "float-left"], [1, "float-right"], [3, "icon"]],
    template: function DetailsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsCardComponent_div_1_Template, 14, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2038:
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/lf-dashboard/lf-dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LfDashboardComponent: () => (/* binding */ LfDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/video-post-modal/video-post-modal.component */ 8641);
/* harmony import */ var _modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modals/create-channel/create-channel-modal.component */ 7801);
/* harmony import */ var _modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/create-conference-link/conference-link-modal.component */ 3901);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ 1432);
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/share.service */ 7534);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ 4656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);















const _c0 = ["userSearchDropdownRef"];
const _c1 = function () {
  return ["fas", "search"];
};
function LfDashboardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LfDashboardComponent_div_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 10)(4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LfDashboardComponent_div_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.getSearchData(ctx_r5.searchText));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1))("fixedWidth", true);
  }
}
function LfDashboardComponent_ng_container_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LfDashboardComponent_ng_container_6_ng_container_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const user_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.openProfile(user_r8.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", user_r8.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alt", user_r8.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r8.Username);
  }
}
function LfDashboardComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 13)(2, "div", 14, 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, LfDashboardComponent_ng_container_6_ng_container_5_Template, 5, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.userList);
  }
}
const _c2 = function () {
  return ["fas", "upload"];
};
function LfDashboardComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LfDashboardComponent_div_7_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.openVideoUploadPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2))("fixedWidth", true);
  }
}
const _c3 = function () {
  return ["fas", "plus-square"];
};
function LfDashboardComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LfDashboardComponent_div_7_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.openConferencePopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Conference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "& Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c3))("fixedWidth", true);
  }
}
const _c4 = function () {
  return ["fas", "user"];
};
function LfDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LfDashboardComponent_div_7_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.getmyChannel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " My Channel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, LfDashboardComponent_div_7_div_4_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, LfDashboardComponent_div_7_div_5_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c4))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.channelId === (ctx_r2.channelData == null ? null : ctx_r2.channelData.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.channelId === (ctx_r2.channelData == null ? null : ctx_r2.channelData.id));
  }
}
class LfDashboardComponent {
  constructor(route, commonService, shareService, authService, modalService, router) {
    this.route = route;
    this.commonService = commonService;
    this.shareService = shareService;
    this.authService = authService;
    this.modalService = modalService;
    this.router = router;
    this.onSearchData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.searchTextEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.userList = [];
    this.channelName = '';
    this.searchText = '';
    this.useDetails = {};
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.channelData = {};
    this.useDetails = JSON.parse(this.authService.getUserData());
    // this.getChannelByUserId(this.useDetails?.UserID);
    this.route.paramMap.subscribe(paramMap => {
      // https://facetime.opash.in/
      const name = paramMap.get('name');
      if (name) {
        this.channelName = name;
        this.getChannelDetails(name);
      }
    });
    const queryParams = this.route.snapshot.queryParams;
    const newParams = {
      ...queryParams
    };
    // console.log(newParams)
    // this.channelId = this.shareService?.channelData?.id;
    // this.route.queryParams.subscribe((params: any) => {
    //   console.log(params.channelId);
    if (newParams['channelId']) {
      this.channelId = newParams['channelId'];
      delete newParams['channelId'];
      const navigationExtras = {
        queryParams: newParams
      };
      this.router.navigate([], navigationExtras);
    }
    // else {
    // }
    // });
  }

  ngOnInit() {
    // console.log(this.channelId)
    if (!this.channelId) {
      this.channelId = +localStorage.getItem('channelId');
    }
  }
  getChannelDetails(value) {
    this.commonService.get(`${this.apiUrl}channels/${value}`).subscribe({
      next: res => {
        // console.log(res.data);
        if (res.data.length) {
          this.channelData = res.data[0];
          // console.log(this.channelData);
        }
      },

      error: error => {
        console.log(error);
      }
    });
  }
  openWebRtc() {
    const webRtcUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.conferenceUrl}${this.channelName}`;
    window.open(webRtcUrl, '_blank');
  }
  getSearchData(searchText) {
    this.searchTextEmitter?.emit(searchText);
    this.searchText = '';
  }
  openProfile(Id) {
    const url = `https://freedom.buzz/settings/view-profile/${Id}`;
    window.open(url, '_blank');
  }
  isUserMediaApproved() {
    return this.shareService.userDetails.MediaApproved === 1;
    // return this.useDetails?.MediaApproved === 1;
  }

  openVideoUploadPopUp() {
    const modalRef = this.modalService.open(_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_1__.VideoPostModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.title = `Upload Video`;
    modalRef.componentInstance.confirmButtonLabel = 'Upload Video';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      window.location.reload();
      // console.log(res);
    });
  }

  createChannel() {
    const modalRef = this.modalService.open(_modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_2__.CreateChannelComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.title = `Create Channel`;
    modalRef.componentInstance.confirmButtonLabel = 'Save';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      if (res === 'success') {}
    });
  }
  openConferencePopUp() {
    const modalRef = this.modalService.open(_modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConferenceLinkComponent, {
      centered: true,
      size: 'md'
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
  static #_ = this.ɵfac = function LfDashboardComponent_Factory(t) {
    return new (t || LfDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_share_service__WEBPACK_IMPORTED_MODULE_5__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LfDashboardComponent,
    selectors: [["app-lf-dashboard"]],
    viewQuery: function LfDashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.onSearchData = _t.first);
      }
    },
    outputs: {
      onSearchData: "onSearchData",
      searchTextEmitter: "searchTextEmitter"
    },
    decls: 8,
    vars: 4,
    consts: [[1, "jumbotron", "dash-container", "mb-0", "mx-sm-4", "pt-4", "videos-section", "pb-4", "rounded", "mb-4", "shadow"], [1, "col-12", "col-md-12", "col-lg-8", "m-auto", "token-img-modal", "token-hide-mb"], ["loading", "lazy", "alt", "", 1, "w-100", 3, "src"], [1, "d-xl-flex", "column-gap-2", "column-gap-xxl-4", "col-12", "col-md-12", "col-lg-8", "m-auto", "px-4", "mt-4", "justify-content-center", "mb-view-left-txt", "c-searchbar"], ["class", "form-inline osahan-navbar-search", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex c-bg-color py-2 column-gap-2 column-gap-xxl-4 col-12 col-md-12 col-lg-8 m-auto mt-4 my-xxl-4 justify-content-center mb-view-left-txt", 4, "ngIf"], [1, "form-inline", "osahan-navbar-search"], [1, "input-group"], ["type", "text", "autocomplete", "off", "placeholder", "Search for...", 1, "form-control", "c-input-height", 3, "ngModel", "ngModelChange"], [1, "input-group-append", "c-button"], ["type", "button", 1, "btn", "btn-light", 3, "disabled", "click"], [3, "icon", "fixedWidth"], [1, "col-xxl-4", "col-xl-6", "col-lg-6", "col-10", "pt-1", "m-auto"], ["ngbDropdown", "", 1, "c-search-dropdown"], ["userSearchDropdownRef", ""], ["ngbDropdownMenu", "", 1, "search-user-list", "w-100"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", "role", "button", 1, "d-flex", "gap-3", "pe-auto", 3, "click"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 1, "w-32-px", "h-32-px", "rounded", 3, "src", "alt"], [1, "d-flex", "c-bg-color", "py-2", "column-gap-2", "column-gap-xxl-4", "col-12", "col-md-12", "col-lg-8", "m-auto", "mt-4", "my-xxl-4", "justify-content-center", "mb-view-left-txt"], [1, "d-block", "d-md-flex", "gap-2", "align-items-center", "c-text", "flex-wrap", "justify-content-center", 3, "click"], ["class", "d-block d-md-flex gap-2 align-items-center c-text flex-wrap justify-content-center", 3, "click", 4, "ngIf"], ["class", "d-flex gap-2 align-items-center c-text flex-wrap justify-content-center", 3, "click", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "c-text", "flex-wrap", "justify-content-center", 3, "click"], [1, "d-none", "d-xl-block"]],
    template: function LfDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, LfDashboardComponent_div_5_Template, 6, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, LfDashboardComponent_ng_container_6_Template, 6, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, LfDashboardComponent_div_7_Template, 6, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", "/assets/img/localFoodslogo.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.shareService.getCredentials());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUserMediaApproved() && ctx.channelId);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent],
    styles: [".dash-container[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n}\n.dash-container[_ngcontent-%COMP%]   .c-bg-color[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  align-items: center;\n}\n.dash-container[_ngcontent-%COMP%]   .c-bg-color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dash-container[_ngcontent-%COMP%]   .c-bg-color[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 3px;\n  font-size: 16px;\n  background: var(--bg-sidebar);\n  width: 30px;\n  height: 30px;\n  text-align: center;\n}\n.dash-container[_ngcontent-%COMP%]   .c-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: var(--text-color);\n}\n.dash-container[_ngcontent-%COMP%]   .c-input-height[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.dash-container[_ngcontent-%COMP%]   .c-input-border[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--bg-secondary);\n  width: 100%;\n  color: var(--text-color);\n}\n.dash-container[_ngcontent-%COMP%]   .c-input-border[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.dash-container[_ngcontent-%COMP%]     .c-searchbar .input-group {\n  flex-wrap: unset;\n}\n.dash-container[_ngcontent-%COMP%]     .c-search-dropdown .dropdown-toggle::after {\n  display: none;\n}\n.dash-container[_ngcontent-%COMP%]     .c-search-dropdown .dropdown-menu {\n  border: 1px solid var(--link-color);\n  border-radius: 5px;\n  max-height: 332px;\n  overflow-y: scroll;\n}\n.dash-container[_ngcontent-%COMP%]     .c-search-dropdown .dropdown-menu .dropdown-item {\n  font-size: 16px;\n}\n.dash-container[_ngcontent-%COMP%]     .c-button svg path {\n  fill: var(--blue-text);\n}\n@media (max-width: 770px) {\n  .dash-container[_ngcontent-%COMP%]     .osahan-navbar-search .form-control {\n    max-width: unset !important;\n    width: unset !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL2xmLWRhc2hib2FyZC9sZi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQUNGO0FBQUU7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFESTtFQUNFLGVBQUE7QUFHTjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFSTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQUFOO0FBRUk7RUFDRSx3QkFBQTtBQUFOO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBS007RUFDRSxhQUFBO0FBSFI7QUFLTTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLTTtFQUNFLGVBQUE7QUFIUjtBQU1JO0VBQ0Usc0JBQUE7QUFKTjtBQU9JO0VBRUk7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0VBTlI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XHJcbiAgLmMtYmctY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGViYXIpO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgLmMtaW5wdXQtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLmMtaW5wdXQtYm9yZGVyIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG4gICAgOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLmMtc2VhcmNoYmFyIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgIGZsZXgtd3JhcDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuYy1zZWFyY2gtZHJvcGRvd24ge1xyXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluay1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMzMnB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYy1idXR0b24gc3ZnIHBhdGgge1xyXG4gICAgICBmaWxsOiB2YXIoLS1ibHVlLXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgICAub3NhaGFuLW5hdmJhci1zZWFyY2gge1xyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3181:
/*!*****************************************************************************************!*\
  !*** ./src/app/@shared/components/post-meta-data-card/post-meta-data-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostMetaDataCardComponent: () => (/* binding */ PostMetaDataCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function PostMetaDataCardComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.post.metalink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.metalink);
  }
}
function PostMetaDataCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.post.metalink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.post == null ? null : ctx_r1.post.metaimage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.post == null ? null : ctx_r1.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.post == null ? null : ctx_r1.post.metadescription, " ");
  }
}
class PostMetaDataCardComponent {
  constructor() {
    this.post = {};
  }
  static #_ = this.ɵfac = function PostMetaDataCardComponent_Factory(t) {
    return new (t || PostMetaDataCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PostMetaDataCardComponent,
    selectors: [["app-post-meta-data-card"]],
    inputs: {
      post: "post"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "post-description mdtxt pt-0 pb-1 text-start", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "border rounded-3 mb-3 w-400-px", 4, "ngIf"], ["target", "_blank", 1, "post-description", "mdtxt", "pt-0", "pb-1", "text-start", 3, "href"], [1, "border", "rounded-3", "mb-3", "w-400-px"], ["target", "_blank", 1, "post-img", "w-100", 3, "href"], ["loading", "lazy", "alt", "image", "onerror", "this.onerror=null;this.src='/assets/images/avtar/placeholder-room.png';", 1, "w-100", "h-100", "rounded-0", 3, "src"], [1, "post-description", "text-start", "m-2"]],
    template: function PostMetaDataCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostMetaDataCardComponent_a_0_Template, 2, 2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostMetaDataCardComponent_div_1_Template, 7, 4, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post == null ? null : ctx.post.metalink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post == null ? null : ctx.post.metaimage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .post-description[_ngcontent-%COMP%] {\n  max-width: 630px;\n  line-break: anywhere;\n}\n[_nghost-%COMP%]   .post-description[_ngcontent-%COMP%]   .post-img[_ngcontent-%COMP%] {\n  max-width: 630px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3Bvc3QtbWV0YS1kYXRhLWNhcmQvcG9zdC1tZXRhLWRhdGEtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtBQUdOIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICAucG9zdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDYzMHB4O1xyXG4gICAgbGluZS1icmVhazogYW55d2hlcmU7XHJcbiAgICAucG9zdC1pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDYzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6083:
/*!*****************************************************************************************!*\
  !*** ./src/app/@shared/components/reply-comment-modal/reply-comment-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplyCommentModalComponent: () => (/* binding */ ReplyCommentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toast.service */ 6749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag-user-input/tag-user-input.component */ 3781);






const _c0 = function () {
  return ["fas", "xmark"];
};
function ReplyCommentModalComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReplyCommentModalComponent_ng_container_9_Template_fa_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.removePostSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.commentData == null ? null : ctx_r0.commentData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
  }
}
class ReplyCommentModalComponent {
  constructor(activeModal, toastService) {
    this.activeModal = activeModal;
    this.toastService = toastService;
    this.cancelButtonLabel = 'Cancel';
    this.confirmButtonLabel = 'Confirm';
    this.title = 'Confirmation Dialog';
    this.commentData = {
      file: null,
      url: '',
      tags: []
    };
    this.commentMessageInputValue = '';
  }
  ngAfterViewInit() {
    if (this.data) {
      this.commentMessageInputValue = this.data?.comment;
      this.commentData.id = this.data.id;
      this.commentData.parentCommentId = this.data.parentCommentId;
      this.commentData.postId = this.data.postId;
      this.commentData.profileId = this.data.profileId;
      this.commentData['imageUrl'] = this.data?.imageUrl;
    }
  }
  onPostFileSelect(event) {
    const file = event.target?.files?.[0] || {};
    if (file?.size < 5120000) {
      if (file.type.includes('image/')) {
        this.commentData['file'] = file;
        this.commentData['imageUrl'] = URL.createObjectURL(file);
      } else {
        this.toastService.danger(`sorry ${file.type} are not allowed!`);
      }
    } else {
      this.toastService.warring('Image is too large!');
    }
  }
  removePostSelectedFile() {
    this.commentData['file'] = null;
    this.commentData['imageUrl'] = '';
  }
  onTagUserInputChangeEvent(data) {
    console.log('comments-data', data);
    this.commentData.comment = data?.html;
    this.commentMessageTags = data?.tags;
  }
  static #_ = this.ɵfac = function ReplyCommentModalComponent_Factory(t) {
    return new (t || ReplyCommentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReplyCommentModalComponent,
    selectors: [["app-reply-comment-modal"]],
    inputs: {
      cancelButtonLabel: "cancelButtonLabel",
      confirmButtonLabel: "confirmButtonLabel",
      title: "title",
      message: "message",
      data: "data"
    },
    decls: 19,
    vars: 8,
    consts: [[1, "modal-header"], [1, "text-start", "m-0"], ["role", "button", 1, "font-20-px", 3, "icon", "click"], [1, "modal-body", "text-start"], [1, "d-flex", "align-items-center"], [1, "d-center", "align-items-baseline"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", "alt", "avatar", 1, "w-40-px", "h-40-px", "rounded-3", 3, "src"], [1, "input-area", "py-2", "px-3", "gap-2", "align-items-center", "w-100", "ms-2"], [4, "ngIf"], [1, "d-flex"], ["placeholder", "Write something to comment..", 3, "value", "onDataChange"], [1, "file-input", "d-flex", "gap-1", "gap-md-2"], [1, "file-upload", "d-flex"], [1, "modal-footer", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "position-relative", "w-52-px", "h-52-px", "mb-2"], ["loading", "lazy", "alt", "icon", 1, "w-100", "h-100", "rounded-4", 3, "src"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "bg-danger", "p-1", "font-12-px", "c-pointer", "text-white", 3, "icon", "click"]],
    template: function ReplyCommentModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReplyCommentModalComponent_Template_fa_icon_click_3_listener() {
          return ctx.activeModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ReplyCommentModalComponent_ng_container_9_Template, 4, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "app-tag-user-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onDataChange", function ReplyCommentModalComponent_Template_app_tag_user_input_onDataChange_11_listener($event) {
          return ctx.onTagUserInputChangeEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReplyCommentModalComponent_Template_button_click_15_listener() {
          return ctx.activeModal.close("cancel");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReplyCommentModalComponent_Template_button_click_17_listener() {
          return ctx.activeModal.close(ctx.commentData);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.commentData == null ? null : ctx.commentData.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.commentMessageInputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.cancelButtonLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.confirmButtonLabel, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_1__.TagUserInputComponent],
    styles: ["h5[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\n  mention-list {\n  top: 70px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3JlcGx5LWNvbW1lbnQtbW9kYWwvcmVwbHktY29tbWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxvQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgbWVudGlvbi1saXN0IHtcclxuICAgIHRvcDogNzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3781:
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/components/tag-user-input/tag-user-input.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagUserInputComponent: () => (/* binding */ TagUserInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ 1432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-mentions */ 789);
/* harmony import */ var _post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-meta-data-card/post-meta-data-card.component */ 3181);










const _c0 = ["tagInputDiv"];
const _c1 = ["userSearchDropdownRef"];
function TagUserInputComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r4.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", item_r4.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.Username);
  }
}
function TagUserInputComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-post-meta-data-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("post", ctx_r3.metaData);
  }
}
const _c2 = function (a0) {
  return {
    items: a0,
    labelKey: "Username",
    triggerChar: "@"
  };
};
class TagUserInputComponent {
  constructor(renderer, spinner, commonService) {
    this.renderer = renderer;
    this.spinner = spinner;
    this.commonService = commonService;
    this.value = '';
    this.placeholder = 'ss';
    this.isShowMetaPreview = true;
    this.isAllowTagUser = true;
    this.onDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.metaDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.userList = [];
    this.userNameSearch = '';
    this.metaData = {};
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'customers/';
    this.metaDataSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300)).subscribe(() => {
      this.getMetaDataFromUrlStr();
      this.checkUserTagFlag();
    });
  }
  ngOnChanges(changes) {
    const val = changes?.['value']?.currentValue;
    this.setTagInputDivValue(val);
    if (val === '') {
      this.clearUserSearchData();
      this.clearMetaData();
    } else {
      this.getMetaDataFromUrlStr();
      this.checkUserTagFlag();
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.metaDataSubject.next();
    this.metaDataSubject.complete();
  }
  messageOnKeyEvent() {
    this.metaDataSubject.next();
    this.emitChangeEvent();
  }
  checkUserTagFlag() {
    if (this.isAllowTagUser) {
      const htmlText = this.tagInputDiv?.nativeElement?.innerHTML || '';
      const atSymbolIndex = htmlText.lastIndexOf('@');
      if (atSymbolIndex !== -1) {
        this.userNameSearch = htmlText.substring(atSymbolIndex + 1);
        if (this.userNameSearch?.length > 2) {
          this.getUserList(this.userNameSearch);
        } else {
          this.clearUserSearchData();
        }
      } else {
        this.clearUserSearchData();
      }
    }
  }
  getMetaDataFromUrlStr() {
    const htmlText = this.tagInputDiv?.nativeElement?.innerHTML || '';
    const text = htmlText.replace(/<[^>]*>/g, '');
    // const matches = htmlText.match(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/gi);
    const matches = text.match(/(?:https?:\/\/|www\.)[^\s]+/g);
    const url = matches?.[0];
    if (url) {
      if (!url?.includes(this.metaData?.url)) {
        this.spinner.show();
        this.ngUnsubscribe.next();
        this.commonService.getMetaData({
          url
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngUnsubscribe)).subscribe({
          next: res => {
            if (res?.meta?.image) {
              const urls = res.meta?.image?.url;
              const imgUrl = Array.isArray(urls) ? urls?.[0] : urls;
              this.metaData = {
                title: res?.meta?.title,
                metadescription: res?.meta?.description,
                metaimage: imgUrl,
                metalink: res?.meta?.url || url,
                url: url
              };
              this.emitChangeEvent();
            }
            this.spinner.hide();
          },
          error: () => {
            this.clearMetaData();
            this.spinner.hide();
          }
        });
      }
    } else {
      this.clearMetaData();
    }
  }
  moveCursorToEnd() {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(this.tagInputDiv?.nativeElement, this.tagInputDiv?.nativeElement.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  selectTagUser(user) {
    const htmlText = this.tagInputDiv?.nativeElement?.innerHTML || '';
    const text = htmlText.replace(`@${this.userNameSearch}`, `<a href="/settings/view-profile/${user?.Id}" class="text-danger" data-id="${user?.Id}">@${user?.Username}</a>`);
    this.setTagInputDivValue(text);
    this.emitChangeEvent();
    this.moveCursorToEnd();
  }
  getUserList(search) {
    this.commonService.get(`${this.apiUrl}search-user?searchText=${search}`).subscribe({
      next: res => {
        if (res?.data?.length > 0) {
          this.userList = res.data;
          this.userSearchNgbDropdown?.open();
        } else {
          this.clearUserSearchData();
        }
      },
      error: () => {
        this.clearUserSearchData();
      }
    });
  }
  clearUserSearchData() {
    this.userNameSearch = '';
    this.userList = [];
    this.userSearchNgbDropdown?.close();
  }
  clearMetaData() {
    this.metaData = {};
    this.emitChangeEvent();
  }
  setTagInputDivValue(htmlText) {
    if (this.tagInputDiv) {
      this.renderer.setProperty(this.tagInputDiv.nativeElement, 'innerHTML', htmlText);
    }
  }
  emitChangeEvent() {
    if (this.tagInputDiv) {
      // console.log(this.tagInputDiv);
      const htmlText = this.tagInputDiv?.nativeElement?.innerHTML;
      this.value = `${htmlText}`.replace(/\<div\>\<br\>\<\/div\>/ig, '');
      this.onDataChange.emit({
        html: htmlText,
        tags: this.tagInputDiv?.nativeElement?.children,
        meta: this.metaData
      });
    }
  }
  static #_ = this.ɵfac = function TagUserInputComponent_Factory(t) {
    return new (t || TagUserInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TagUserInputComponent,
    selectors: [["app-tag-user-input"]],
    viewQuery: function TagUserInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tagInputDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userSearchNgbDropdown = _t.first);
      }
    },
    inputs: {
      value: "value",
      placeholder: "placeholder",
      isShowMetaPreview: "isShowMetaPreview",
      isAllowTagUser: "isAllowTagUser"
    },
    outputs: {
      onDataChange: "onDataChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 6,
    consts: [["contenteditable", "", 1, "tag-input-div", "input-area", "c-text", "form-control", 3, "mentionConfig", "mentionListTemplate", "input", "itemSelected"], ["tagInputDiv", ""], ["class", "user-dropdown-menu w-100 overflow-auto"], ["mentionListTemplate", ""], [4, "ngIf"], [1, "d-flex", "gap-3", "pe-auto", "overflow-hidden"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 1, "w-32-px", "h-32-px", "rounded", 3, "src", "alt"], [1, "pt-5", 3, "post"]],
    template: function TagUserInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TagUserInputComponent_Template_div_input_0_listener() {
          return ctx.messageOnKeyEvent();
        })("itemSelected", function TagUserInputComponent_Template_div_itemSelected_0_listener($event) {
          return ctx.selectTagUser($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TagUserInputComponent_ng_template_2_Template, 4, 3, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TagUserInputComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mentionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx.userList))("mentionListTemplate", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowMetaPreview && (ctx.metaData == null ? null : ctx.metaData.metaimage));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, angular_mentions__WEBPACK_IMPORTED_MODULE_10__.MentionDirective, _post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_2__.PostMetaDataCardComponent],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .tag-input-div[_ngcontent-%COMP%] {\n  font-size: 16px;\n  min-height: 56px;\n  line-break: anywhere;\n  text-align: start;\n}\n[_nghost-%COMP%]   .tag-input-div[placeholder][_ngcontent-%COMP%]:empty:before {\n  content: attr(placeholder);\n  color: #697495;\n}\n[_nghost-%COMP%]   .tag-input-div[placeholder][_ngcontent-%COMP%]:empty:focus:before {\n  content: \"\";\n}\n[_nghost-%COMP%]   .user-dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n\n  .tag-input-div div,   .tag-input-div h1,   .tag-input-div h2,   .tag-input-div h3,   .tag-input-div h4,   .tag-input-div h5,   .tag-input-div h6,   .tag-input-div a,   .tag-input-div span,   .tag-input-div p {\n  background: unset !important;\n  background-color: unset !important;\n  font-size: 16px !important;\n  line-height: unset !important;\n  color: var(--para-2nd-color);\n}\n  mention-list .mention-menu {\n  width: 340px;\n}\n  mention-list .mention-menu .mention-item {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3RhZy11c2VyLWlucHV0L3RhZy11c2VyLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFTTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBR1E7RUFDRSxXQUFBO0FBRFY7QUFNRTtFQUNFLGlCQUFBO0FBSko7O0FBVUk7Ozs7Ozs7Ozs7RUFVRSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBUE47QUFlSTtFQUNFLFlBQUE7QUFiTjtBQWNNO0VBQ0UsWUFBQTtBQVpSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRhZy1pbnB1dC1kaXYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcblxyXG4gICAgJltwbGFjZWhvbGRlcl06ZW1wdHkge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgY29sb3I6ICM2OTc0OTU7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVzZXItZHJvcGRvd24tbWVudSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLnRhZy1pbnB1dC1kaXYge1xyXG4gICAgZGl2LFxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIGg2LFxyXG4gICAgYSxcclxuICAgIHNwYW4sXHJcbiAgICBwIHtcclxuICAgICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcGFyYS0ybmQtY29sb3IpO1xyXG4gICAgfVxyXG4gICAgLy8gYnIge1xyXG4gICAgLy8gICBkaXNwbGF5OiBub25lO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgbWVudGlvbi1saXN0IHtcclxuICAgIC5tZW50aW9uLW1lbnUge1xyXG4gICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgIC5tZW50aW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 338:
/*!*************************************************************************!*\
  !*** ./src/app/@shared/components/toast-modal/toast-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastModalComponent: () => (/* binding */ ToastModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toast.service */ 6749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);






function ToastModalComponent_ngb_toast_1_ng_template_2_ng_template_0_Template(rf, ctx) {}
function ToastModalComponent_ngb_toast_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastModalComponent_ngb_toast_1_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
  }
}
function ToastModalComponent_ngb_toast_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
  }
}
const _c0 = function () {
  return ["fas", "xmark"];
};
function ToastModalComponent_ngb_toast_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-toast", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function ToastModalComponent_ngb_toast_1_Template_ngb_toast_hidden_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const toast_r1 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.toastService.remove(toast_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ToastModalComponent_ngb_toast_1_ng_template_2_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastModalComponent_ngb_toast_1_ng_template_3_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastModalComponent_ngb_toast_1_Template_fa_icon_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const toast_r1 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toastService.remove(toast_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", toast_r1.className)("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
  }
}
class ToastModalComponent {
  constructor(toastService) {
    this.toastService = toastService;
  }
  ngOnInit() {}
  isTemplate(toast) {
    return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef;
  }
  static #_ = this.ɵfac = function ToastModalComponent_Factory(t) {
    return new (t || ToastModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToastModalComponent,
    selectors: [["app-toast-modal"]],
    hostVars: 2,
    hostBindings: function ToastModalComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngb-toasts", true);
      }
    },
    decls: 2,
    vars: 1,
    consts: [[1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], [3, "ngClass", "autohide", "delay", "hidden", 4, "ngFor", "ngForOf"], [3, "ngClass", "autohide", "delay", "hidden"], [1, "d-flex", "flex-coumn", "w-100"], [3, "ngIf", "ngIfElse"], ["text", ""], [1, "c-pointer", "c-icon-color", 3, "icon", "click"], [3, "ngTemplateOutlet"]],
    template: function ToastModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastModalComponent_ngb_toast_1_Template, 6, 7, "ngb-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbToast, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
    styles: [".toast[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n.toast[_ngcontent-%COMP%]     .toast-body {\n  display: flex;\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3RvYXN0LW1vZGFsL3RvYXN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIDo6bmctZGVlcCAudG9hc3QtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 841:
/*!***********************************************************************!*\
  !*** ./src/app/@shared/components/video-card/video-card.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoCardComponent: () => (/* binding */ VideoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/video-post-modal/video-post-modal.component */ 8641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipe/time-duration.pipe */ 3712);
/* harmony import */ var _pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipe/date-day.pipe */ 6283);










function VideoCardComponent_ng_container_1_div_1_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoCardComponent_ng_container_1_div_1_div_1_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.playvideo(video_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", video_r3 == null ? null : video_r3.thumbfilename, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return ["fas", "edit"];
};
function VideoCardComponent_ng_container_1_div_1_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoCardComponent_ng_container_1_div_1_div_1_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.videoEdit(video_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
function VideoCardComponent_ng_container_1_div_1_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (video_r3 == null ? null : video_r3.channelName) || (video_r3 == null ? null : video_r3.firstname), " ");
  }
}
const _c1 = function () {
  return ["fas", "clock"];
};
const _c2 = function (a1) {
  return ["/video/", a1];
};
const _c3 = function () {
  return ["fas", "play"];
};
const _c4 = function () {
  return ["fas", "calendar"];
};
function VideoCardComponent_ng_container_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VideoCardComponent_ng_container_1_div_1_div_1_img_3_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VideoCardComponent_ng_container_1_div_1_div_1_div_6_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "timeDurationWithSec");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoCardComponent_ng_container_1_div_1_div_1_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.redirectToPlayer(video_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 13)(12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 15)(15, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, VideoCardComponent_ng_container_1_div_1_div_1_div_17_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 18)(19, "a", 19)(20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Large Player");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "dateDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isPlay || ctx_r4.postId !== video_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "jwVideo-" + video_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", video_r3.profileid === ctx_r4.profileid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 17, +video_r3.videoduration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", video_r3.albumname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", video_r3.albumname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r4.stripTags(video_r3.postdescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.stripTags(video_r3.postdescription), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (video_r3 == null ? null : video_r3.channelName) || (video_r3 == null ? null : video_r3.firstname));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c2, video_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c3))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c4))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 19, video_r3.postcreationdate), " ");
  }
}
function VideoCardComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoCardComponent_ng_container_1_div_1_div_1_Template, 27, 26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.videoData);
  }
}
function VideoCardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoCardComponent_ng_container_1_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.videoData);
  }
}
function VideoCardComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class VideoCardComponent {
  constructor(router, modalService, authService) {
    this.router = router;
    this.modalService = modalService;
    this.authService = authService;
    this.isPlay = false;
    this.videoData = [];
    this.profileid = JSON.parse(this.authService.getUserData())?.Id;
    // console.log(this.profileid);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  ngAfterViewInit() {}
  playvideo(video) {
    this.isPlay = false;
    const player = jwplayer('jwVideo-' + video.id);
    player.setup({
      file: video.streamname,
      image: video?.thumbfilename,
      mute: true,
      autostart: false,
      volume: 90,
      height: '220px',
      width: '390px',
      playbackRateControls: false,
      preload: 'metadata',
      autoPause: {
        viewability: false
      }
    });
    player.load();
    this.playVideoByID(video.id);
  }
  openDetailPage(video) {
    // this.router.navigate([`video/${video.id}`], {
    //   state: { data: video },
    // });
    const url = `video/${video.id}`;
    window.open(url, '_blank');
  }
  playVideoByID(id) {
    this.postId = this.isPlay ? null : id;
    this.isPlay = !this.isPlay;
    console.log('isPlay', this.isPlay);
    // console.log('postId', this.postId);
  }

  stripTags(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  }
  redirectToPlayer(id) {
    window.open(`/video/${id}`, '_blank');
  }
  videoEdit(video) {
    // console.log(video);
    const modalRef = this.modalService.open(_modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_0__.VideoPostModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.title = `Edit Video Details`;
    modalRef.componentInstance.data = {
      ...video
    };
    modalRef.componentInstance.confirmButtonLabel = 'Save';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      // console.log(res);
      window.location.reload();
      if (res === 'success') {}
    });
  }
  static #_ = this.ɵfac = function VideoCardComponent_Factory(t) {
    return new (t || VideoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: VideoCardComponent,
    selectors: [["app-video-card"]],
    inputs: {
      videoData: "videoData"
    },
    decls: 3,
    vars: 2,
    consts: [[1, "row"], [4, "ngIf"], ["class", "col-xl-3 col-sm-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-sm-6", "mb-3"], ["class", "video-container shadow rounded-3", 4, "ngIf"], [1, "video-container", "shadow", "rounded-3"], [1, "video-card-image"], ["class", "img-fluid h-100 w-100 rounded-top-3", "loading", "lazy", "onerror", "this.onerror=null;this.src='/assets/dummy/11.jpg';", "alt", "", 3, "src", "click", 4, "ngIf"], [1, "w-100", "c-height", 3, "id"], [1, "d-flex", "align-items-center", "time", "text-white"], ["class", "font-20-px mx-2 cursor", 3, "click", 4, "ngIf"], [3, "icon", "fixedWidth"], [1, "video-card-body", "cursor", 3, "click"], [1, "video-title", "text-dark"], ["placement", "bottom", 1, "video-page", "font-16-px", 3, "ngbTooltip"], [1, "c-description-height", "video-description"], [3, "title"], ["class", "video-page text-dark c-height font-16-px", 4, "ngIf"], [1, "d-flex", "video-view", "pt-2"], ["target", "_blank", 3, "routerLink"], [1, "pe-2"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='/assets/dummy/11.jpg';", "alt", "", 1, "img-fluid", "h-100", "w-100", "rounded-top-3", 3, "src", "click"], [1, "font-20-px", "mx-2", "cursor", 3, "click"], [1, "video-page", "text-dark", "c-height", "font-16-px"], [1, "col-12", "text-center"]],
    template: function VideoCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoCardComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VideoCardComponent_ng_container_2_Template, 4, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.videoData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.videoData.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_2__.timeDurationWithSec, _pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_3__.DateDayPipe],
    styles: [".video-container[_ngcontent-%COMP%] {\n  min-height: 378px;\n}\n\n.video-card-image[_ngcontent-%COMP%] {\n  height: 220px;\n}\n\n.video-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n  .c-description-height {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 15px;\n  max-height: 47px;\n}\n  .c-description-height a h1,   .c-description-height a h2,   .c-description-height a h3,   .c-description-height a h4,   .c-description-height a h5,   .c-description-height a h6,   .c-description-height a span,   .c-description-height a p {\n  font-size: 15px;\n  text-decoration: none;\n  color: var(--text-color) !important;\n  background-color: unset !important;\n}\n\n.c-height[_ngcontent-%COMP%] {\n  height: 28px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-view[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.time[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3ZpZGVvLWNhcmQvdmlkZW8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUFBO0VBR0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUk7RUFDRSxlQUFBO0VBRUEscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRE47O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBRUUseUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMzc4cHg7XHJcbn1cclxuLnZpZGVvLWNhcmQtaW1hZ2Uge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcbi52aWRlby10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG46Om5nLWRlZXAgLmMtZGVzY3JpcHRpb24taGVpZ2h0IHtcclxuICAvLyBoZWlnaHQ6IDQ1cHg7XHJcbiAgLy8gaGVpZ2h0OiAzOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ3cHg7XHJcblxyXG4gIGF7XHJcbiAgICBoMSxoMixoMyxoNCxoNSxoNixzcGFuLHAge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIC8vIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcbi5jLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi52aWRlby12aWV3IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3937:
/*!*************************************************************************************!*\
  !*** ./src/app/@shared/components/video-slider-list/video-slider-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoSliderListComponent: () => (/* binding */ VideoSliderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipe/time-duration.pipe */ 3712);
/* harmony import */ var _pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipe/date-day.pipe */ 6283);








const _c0 = function () {
  return ["fas", "play-circle"];
};
const _c1 = function () {
  return ["fas", "clock"];
};
const _c2 = function () {
  return ["fas", "calendar"];
};
function VideoSliderListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VideoSliderListComponent_ng_container_0_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const video_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openDetailPage(video_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "timeDurationWithSec");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "dateDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const video_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", video_r1 == null ? null : video_r1.thumbfilename, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, +video_r1.videoduration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", video_r1.albumname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", video_r1.albumname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.stripTags(video_r1.postdescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stripTags(video_r1.postdescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", video_r1.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c2))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 17, video_r1.postcreationdate)), " ");
  }
}
class VideoSliderListComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  openDetailPage(video) {
    console.log(video.id);
    this.router.navigate([`video/${video.id}`], {
      state: {
        data: video
      }
    });
  }
  stripTags(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.innerText;
  }
  static #_ = this.ɵfac = function VideoSliderListComponent_Factory(t) {
    return new (t || VideoSliderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VideoSliderListComponent,
    selectors: [["app-video-slider-list"]],
    inputs: {
      videoList: "videoList"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [1, "video-card", "video-card-list", "cursor", 3, "click"], [1, "video-card-image"], [1, "play-icon"], [3, "icon"], ["loading", "lazy", "alt", "", "onerror", "this.onerror=null;this.src='/assets/dummy/11.jpg';", 1, "img-fluid", "h-100", 3, "src"], [1, "time"], [3, "icon", "fixedWidth"], [1, "video-card-body"], [1, "video-title", "text-dark"], ["placement", "bottom", 1, "video-page", "font-16-px", 3, "ngbTooltip"], [1, "c-description-height", "video-description"], ["placement", "bottom", 3, "title"], [1, "video-page", "text-dark", "c-height"], [1, "video-view"]],
    template: function VideoSliderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VideoSliderListComponent_ng_container_0_Template, 25, 22, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.videoList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.timeDurationWithSec, _pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_1__.DateDayPipe],
    styles: [".play-icon[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  bottom: 10px;\n}\n\n.video-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  height: 18px !important;\n  overflow: hidden;\n  font-weight: 600;\n  text-overflow: ellipsis;\n}\n\n.c-description-height[_ngcontent-%COMP%] {\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--text-color) !important;\n  background-color: unset !important;\n}\n\n.c-height[_ngcontent-%COMP%] {\n  height: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL3ZpZGVvLXNsaWRlci1saXN0L3ZpZGVvLXNsaWRlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXktaWNvbiB7XHJcbiAgLm5nLWZhLWljb24ge1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4udmlkZW8tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmMtZGVzY3JpcHRpb24taGVpZ2h0IHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5jLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1305:
/*!*********************************************!*\
  !*** ./src/app/@shared/constant/globals.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Globals: () => (/* binding */ Globals)
/* harmony export */ });


;
/**
 * This component is used to modified local data
 *
 * @export
 * @class Globals
 */
class Globals {
  /**
   * Build form data.
   *
   * @static
   * @param {*} formData Pass form data.
   * @param {*} data Pass data from parent component.
   * @param {*} [parentKey=null] Pass parent key data.
   * @memberof Globals
   */
  static buildFormData(formData, data, parentKey = null) {
    // console.log('data typeof : ', data, typeof data);
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        if (data[key] instanceof File) {
          this.buildFormData(formData, data[key], parentKey ? parentKey : key);
        } else {
          this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        }
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }
  /**
   * Convert json to form data.
   *
   * @static
   * @param {*} data Pass data from parent component.
   * @returns {FormData} Return data of form data.
   * @memberof Globals
   */
  static jsonToFormData(data) {
    const formData = new FormData();
    this.buildFormData(formData, data);
    return formData;
  }
  /**
   * Convert string to init.
   *
   * @static
   * @param {string} num pass string number.
   * @returns {number} Return data of number type.
   * @memberof Globals
   */
  static strToInt(num) {
    return parseInt(num, 10);
  }
  /**
   * Convert birth date to age.
   *
   * @static
   * @param {string} dob
   * @returns {number}
   * @memberof Globals
   */
  static findAge(dob) {
    const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
  /**
   * Array to json with key.
   *
   * @static
   * @param {string} idField pass id field
   * @param {*} datas Pass datas.
   * @returns {*} Return converted data.
   * @memberof Globals
   */
  // static arrayToJsonWithKey(idField: any, datas: any): any {
  //     const tempData = new Array();
  //     for (const data of datas) {
  //       const obj =  {};
  //       obj[idField] = data;
  //       tempData.push(obj);
  //     }
  //     return tempData;
  // }
  /**
   * Play audio
   *
   * @static
   * @memberof Globals
   */
  static playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/audio/alarm.wav';
    audio.load();
    audio.play();
  }
  /**
   * Show a error message.
   *
   * @static
   * @param {*} errorObj Pass error page data.
   * @returns {string}
   * @memberof Globals
   */
  static errorMsgs(errorObj) {
    let errMsgs = '';
    for (const key in errorObj) {
      if (errorObj.hasOwnProperty(key)) {
        const filed = key.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        errMsgs += filed + ' ' + errorObj[key] + '\n';
      }
    }
    return errMsgs;
  }
  /**
   * Formate date in 12 hour.
   *
   * @static
   * @param {string} strDate pass String data.
   * @returns {string} Return data.
   * @memberof Globals
   */
  static formatDateIn12Hours(strDate) {
    if (Date.parse(strDate)) {
      const date = new Date(strDate);
      let hours = date.getUTCHours();
      let minutes = date.getUTCMinutes().toString();
      const amPm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = parseInt(minutes, 0) < 10 ? '0' + minutes : minutes;
      return hours + ':' + minutes + ' ' + amPm;
    } else {
      return strDate;
    }
  }
  /**
  * This function is used to validate positive number.
  *
  * @param index Pass drug index.
  */
  static validatePositiveNumber(event) {
    var p = event.target.value + event.key;
    var s = p.match(/^(\d+(\.\d{0,1})?|\.?\d{1})$/) != null;
    if (!s && event.keyCode !== 8 && event.keyCode !== 9) {
      event.stopPropagation();
      return false;
    }
  }
  /**
   * Set paths for selected event.
   *
   * @param {*} path object as string
   * @memberof PatientListComponent
  */
  static setLocalStoragePaths(path) {
    var data = Object.assign(JSON.parse(localStorage.getItem('path') || '') || {}, JSON.parse(path));
    localStorage.setItem('path', JSON.stringify(data));
  }
  /**
   * Set paths for selected event.
   *
   * @param {*} base64, fileName
   * @memberof Globals
  */
  static base64toFile(base64, fileName) {
    var arr = base64.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {
      type: mime
    });
  }
  static fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = error => reject(error);
    });
  }
  static fileToBlobUrl(file) {
    return new Promise((resolve, reject) => {
      resolve(URL.createObjectURL(file));
    });
  }
  static blobToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = error => reject(error);
    });
  }
  static downloadBase64File(base64, fileName = 'sample') {
    fetch(base64).then(res => res.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    });
  }
  // static validateAllFormFields(formGroup: FormGroup) {
  //     Object.keys(formGroup.controls).forEach(field => {
  //         const control = formGroup.get(field);
  //         if (control instanceof FormControl) {
  //             console.log(field, control ,control.errors);
  //             control.markAsTouched();
  //         } else if (control instanceof FormGroup) {
  //             this.validateAllFormFields(control);
  //         } else if (control instanceof FormArray) {
  //             control.controls.forEach((ctrlGroup: FormGroup) => {
  //                 this.validateAllFormFields(ctrlGroup);
  //             });
  //         }
  //     });
  // }
  static isFormSubmittedAndError(formGroup, isFormSubmitted, controlName, errorName = '', notError = new Array()) {
    const otherError = formGroup.controls[controlName].errors;
    // if(otherError) {
    //     console.log(controlName, otherError);
    // }
    if (isFormSubmitted && otherError) {
      return errorName == '' ? true : (otherError ? !Object.keys(otherError).some(err => notError.includes(err)) : true) ? formGroup.controls[controlName].hasError(errorName) : false;
    }
    return false;
  }
  static jsonToQueryString(params = {}) {
    return Object.keys(params).map(function (key) {
      return key + '=' + params[key];
    }).join('&');
  }
  static splitCountryCode(phoneNumber = '') {
    return phoneNumber ? phoneNumber.substring(phoneNumber.indexOf(' '), phoneNumber.length) : '';
    ;
  }
  // static rememberMe(isRememberMe: boolean, params: any = {}): void {
  //     if(isRememberMe && params && params['username'] && params['password']) {
  //         // localStorage.setItem('me', );
  //     } else {
  //         localStorage.removeItem('me');
  //     }
  // }
  static createArrayRange(start, end) {
    return Array(end - start + 1).fill('').map((_, idx) => start + idx);
  }
}

/***/ }),

/***/ 5689:
/*!*************************************************!*\
  !*** ./src/app/@shared/constant/urlConstant.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlConstant: () => (/* binding */ urlConstant)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);

const urlConstant = {
  Auth: {
    AdminLogin: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/adminLogin',
    AdminLogout: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/adminLogout',
    Login: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/login',
    Signup: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/signup',
    Logout: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/logout',
    EmailExists: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/emailExists',
    ForgotPassword: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/forgotPassword',
    SendOtp: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/sendOtp',
    VerifyOtp: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/verifyOtp',
    ChangePassword: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/changePassword',
    ContactUs: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'auth/contactUs'
  },
  Task: {
    Insert: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/insert',
    Update: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/update',
    Delete: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/delete',
    Get: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/get',
    Ids: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/ids',
    Take: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/take',
    ScreenShot: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/screenShot',
    Download: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/download',
    Payment: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'task/payment'
  },
  User: {
    Insert: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/insert',
    Update: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/update',
    Delete: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/delete',
    GetByToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/getByToken',
    GetById: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/getById',
    Get: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/get',
    Ids: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'user/ids'
  },
  Payment: {
    Insert: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'payment/insert',
    Get: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'payment/get'
  },
  Shop: {
    Insert: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shop/insert',
    Update: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shop/update',
    Delete: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shop/delete',
    Get: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shop/get',
    GetAll: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shop/getAll'
  },
  Shared: {
    GetConstants: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shared/getConstants',
    GetInterests: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'shared/getInterests'
  },
  Instagram: {
    url: "https://www.instagram.com",
    code: "?__a=1"
  }
};

/***/ }),

/***/ 7763:
/*!************************************************************!*\
  !*** ./src/app/@shared/directives/btn-loader.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BtnLoaderDirective: () => (/* binding */ BtnLoaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class BtnLoaderDirective {
  constructor(el) {
    this.el = el;
    this.appBtnLoader = false;
  }
  ngAfterViewInit() {
    const parentElement = this.el.nativeElement;
    const loaderDiv = document.createElement('div');
    this.loaderDivClasses = loaderDiv.classList;
    this.loaderDivClasses.add('spinner-border', 'spinner-border-sm', 'text-light', 'ms-3', 'd-none');
    parentElement.appendChild(loaderDiv);
  }
  ngOnChanges(changes) {
    if (changes?.['appBtnLoader']) {
      if (this.loaderDivClasses) {
        this.appBtnLoader === true ? this.loaderDivClasses.remove('d-none') : this.loaderDivClasses.add('d-none');
      }
    }
  }
  static #_ = this.ɵfac = function BtnLoaderDirective_Factory(t) {
    return new (t || BtnLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: BtnLoaderDirective,
    selectors: [["", "appBtnLoader", ""]],
    inputs: {
      appBtnLoader: "appBtnLoader"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 3816:
/*!****************************************************************!*\
  !*** ./src/app/@shared/directives/copy-clipboard.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyClipboardDirective: () => (/* binding */ CopyClipboardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/toast.service */ 6749);


class CopyClipboardDirective {
  constructor(toastService) {
    this.toastService = toastService;
  }
  onClick(event) {
    event.preventDefault();
    if (!this.payload) return;
    let listener = e => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", this.payload.toString());
      e.preventDefault();
      this.toastService.success('Link has been copied to clipboard');
    };
    document.addEventListener("copy", listener, false);
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }
  static #_ = this.ɵfac = function CopyClipboardDirective_Factory(t) {
    return new (t || CopyClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CopyClipboardDirective,
    selectors: [["", "appCopyClipboard", ""]],
    hostBindings: function CopyClipboardDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CopyClipboardDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      payload: ["appCopyClipboard", "payload"]
    }
  });
}

/***/ }),

/***/ 9966:
/*!***************************************************!*\
  !*** ./src/app/@shared/guards/user-auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAuthGuard: () => (/* binding */ UserAuthGuard)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4656);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ 1432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





class UserAuthGuard {
  constructor(authService, commonService, router) {
    this.authService = authService;
    this.commonService = commonService;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
  }
  canActivate() {
    const auth = this.authService?.userData();
    // const token = this.authService?.token;
    const isLogin = auth.Id ? true : false;
    if (isLogin) {
      return true;
    } else {
      window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment?.loginUrl;
      return false;
    }
  }
  static #_ = this.ɵfac = function UserAuthGuard_Factory(t) {
    return new (t || UserAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UserAuthGuard,
    factory: UserAuthGuard.ɵfac
  });
}

/***/ }),

/***/ 3581:
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/modals/confirmation-modal/confirmation-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationModalComponent: () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);



const _c0 = function () {
  return ["fas", "xmark"];
};
class ConfirmationModalComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.cancelButtonLabel = 'Cancel';
    this.confirmButtonLabel = 'Confirm';
    this.title = 'Confirmation Dialog';
  }
  static #_ = this.ɵfac = function ConfirmationModalComponent_Factory(t) {
    return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationModalComponent,
    selectors: [["app-confirmation-modal"]],
    inputs: {
      cancelButtonLabel: "cancelButtonLabel",
      confirmButtonLabel: "confirmButtonLabel",
      title: "title",
      message: "message"
    },
    decls: 12,
    vars: 6,
    consts: [[1, "modal-header"], [1, "text-start", "m-0"], ["role", "button", 1, "font-20-px", 3, "icon", "click"], [1, "modal-body", "text-start"], [1, "modal-footer", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_fa_icon_click_3_listener() {
          return ctx.activeModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_8_listener() {
          return ctx.activeModal.close("cancel");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_10_listener() {
          return ctx.activeModal.close("success");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cancelButtonLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.confirmButtonLabel, " ");
      }
    },
    dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
    styles: ["h5[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJoNSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7801:
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/modals/create-channel/create-channel-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateChannelComponent: () => (/* binding */ CreateChannelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toast.service */ 6749);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/channels.service */ 8838);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);










const _c0 = function () {
  return ["fas", "folder-open"];
};
function CreateChannelComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateChannelComponent_div_19_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateChannelComponent_div_19_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
const _c1 = function () {
  return ["fas", "xmark"];
};
function CreateChannelComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24)(2, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateChannelComponent_ng_container_20_Template_fa_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.removePostSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.selectedFile, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class CreateChannelComponent {
  constructor(spinner, toastService, activateModal, channelService, authService) {
    this.spinner = spinner;
    this.toastService = toastService;
    this.activateModal = activateModal;
    this.channelService = channelService;
    this.authService = authService;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      profileid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
      feature: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      unique_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      }),
      profile_pic_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
    });
    this.profilePic = '';
    this.profileImg = {
      file: null,
      url: ''
    };
    this.hasDisplayedError = false;
    this.slugify = str => {
      return str?.length > 0 ? str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') : '';
    };
    this.profileId = JSON.parse(this.authService.getUserData()).Id;
  }
  ngOnInit() {}
  onChannelNameChange() {
    this.userForm.get('unique_link').enable();
    const channelName = this.userForm.get('firstname').value;
    const uniqueLink = this.slugify(channelName);
    this.userForm.get('unique_link').setValue(uniqueLink);
  }
  saveChanges() {
    this.userForm.get('profileid').setValue(this.profileId);
    if (this.userForm.valid) {
      this.spinner.show();
      this.channelService.createChannel(this.userForm.value).subscribe({
        next: res => {
          this.spinner.hide();
          this.activateModal.close('success');
          this.toastService.success('Channel created successfully');
        },
        error: err => {
          this.spinner.hide();
          console.log(err);
        }
      });
    }
  }
  upload() {
    this.spinner.show();
    this.channelService.upload(this.profileImg.file, this.profileId, 'channel').subscribe({
      next: res => {
        this.spinner.hide();
        if (this.profileImg.file?.size < 5120000) {
          if (res.body) {
            this.profilePic = res?.body?.url;
            this.userForm.get('profile_pic_name').setValue(this.profilePic);
            this.saveChanges();
          }
        } else {
          if (!this.hasDisplayedError) {
            this.toastService.danger('Image is too large!');
            this.hasDisplayedError = true;
          }
        }
      },
      error: err => {
        this.spinner.hide();
        this.profileImg = {
          file: null,
          url: ''
        };
        return 'Could not upload the file:' + this.profileImg.file.name;
      }
    });
  }
  onFileSelected(event) {
    this.profileImg.file = event.target?.files?.[0];
    this.selectedFile = URL.createObjectURL(event.target.files[0]);
  }
  removePostSelectedFile() {
    this.selectedFile = null;
  }
  static #_ = this.ɵfac = function CreateChannelComponent_Factory(t) {
    return new (t || CreateChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_channels_service__WEBPACK_IMPORTED_MODULE_1__.ChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CreateChannelComponent,
    selectors: [["app-create-channel-modal"]],
    decls: 31,
    vars: 6,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "font-28-px", "cursor", 3, "icon", "fixedWidth", "click"], [1, "modal-body", "d-flex", "flex-column"], [3, "formGroup"], [1, "row", "justify-content-center", "mt-2"], [1, "col-md-6"], ["formControlName", "firstname", "name", "FirstName", "type", "text", 1, "form-control", 3, "keyup"], ["name", "Unique Link", "formControlName", "unique_link", "type", "text", 1, "form-control"], [1, "row", "d-flex", "justify-content-center", "mt-4"], [1, "col", "d-flex", "flex-column"], ["class", "d-flex cursor", 4, "ngIf"], [4, "ngIf"], [1, "col", "align-self-center"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "form-check", "form-switch", "cursor", "font-28-px"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "formControlName", "feature", 1, "form-check-input"], [1, "modal-footer"], [1, "btn", "btn-danger", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", "text-white", 3, "click"], [1, "d-flex", "cursor"], [1, "font-32-px", 3, "icon", "fixedWidth", "click"], ["type", "file", "id", "fileInput", "accept", "image/*", "formControlName", "profile_pic_name", 1, "d-none", 3, "change"], ["uploadImage", ""], [1, "d-flex", "flex-row-reverse", "justify-content-end", "cursor"], [3, "icon", "fixedWidth", "click"], ["loading", "lazy", "height", "150", "width", "150", "alt", "icon", "onerror", "this.onerror = null;", 1, "w-100-px", "h-100-px", "rounded-4", "mt-2", 3, "src"]],
    template: function CreateChannelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateChannelComponent_Template_fa_icon_click_3_listener() {
          return ctx.activateModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Channel Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CreateChannelComponent_Template_input_keyup_10_listener() {
          return ctx.onChannelNameChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Unique Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Channel Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CreateChannelComponent_div_19_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CreateChannelComponent_ng_container_20_Template, 4, 4, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17)(27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateChannelComponent_Template_button_click_27_listener() {
          return ctx.activateModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateChannelComponent_Template_button_click_29_listener() {
          return ctx.upload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3901:
/*!******************************************************************************************!*\
  !*** ./src/app/@shared/modals/create-conference-link/conference-link-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConferenceLinkComponent: () => (/* binding */ ConferenceLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ 6749);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/channels.service */ 8838);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4656);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/copy-clipboard.directive */ 3816);











const _c0 = function () {
  return ["fas", "xmark"];
};
const _c1 = function () {
  return ["fas", "copy"];
};
class ConferenceLinkComponent {
  constructor(spinner, toastService, activateModal, channelService, authService) {
    this.spinner = spinner;
    this.toastService = toastService;
    this.activateModal = activateModal;
    this.channelService = channelService;
    this.authService = authService;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      profileid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
      feature: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      unique_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
        value: '',
        disabled: true
      }),
      profile_pic_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
    });
    this.profilePic = '';
    this.profileImg = {
      file: null,
      url: ''
    };
    this.hasDisplayedError = false;
    this.originUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.conferenceUrl;
    this.link = '';
    this.slugify = str => {
      return str?.length > 0 ? str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') : '';
    };
    this.profileId = JSON.parse(this.authService.getUserData()).Id;
  }
  ngOnInit() {}
  openConferenceCall() {
    const webRtcUrl = `${this.originUrl}${this.link}`;
    window.open(webRtcUrl, '_blank');
    this.activateModal.close();
  }
  static #_ = this.ɵfac = function ConferenceLinkComponent_Factory(t) {
    return new (t || ConferenceLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_channels_service__WEBPACK_IMPORTED_MODULE_2__.ChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ConferenceLinkComponent,
    selectors: [["app-conference-link-modal"]],
    decls: 20,
    vars: 11,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "font-28-px", "cursor", 3, "icon", "fixedWidth", "click"], [1, "modal-body", "d-flex", "flex-column"], [1, "form-group", "d-flex", "c-btn"], [1, "input-group-prepend"], [1, "input-group-text", "h-100", "border-0", "pe-0"], ["type", "text", "name", "cSlug", "placeholder", "create your link here", 1, "form-control", "ps-1", 3, "ngModel", "ngModelChange"], ["linkInput", ""], [1, "btn", 3, "disabled"], ["title", "Copy link", 1, "font-20-px", 3, "icon", "fixedWidth", "appCopyClipboard"], [1, "modal-title", "text-center"], [1, "modal-footer"], [1, "btn", "btn-danger", "text-white", 3, "click"], ["title", "Start Conference", 1, "btn", "btn-success", "text-white", 3, "disabled", "click"]],
    template: function ConferenceLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Create Conference Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConferenceLinkComponent_Template_fa_icon_click_3_listener() {
          return ctx.activateModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ConferenceLinkComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.link = $event;
        })("ngModelChange", function ConferenceLinkComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.link = ctx.slugify($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Email or text the URL to attendees, the link works on any device");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConferenceLinkComponent_Template_button_click_16_listener() {
          return ctx.activateModal.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConferenceLinkComponent_Template_button_click_18_listener() {
          return ctx.openConferenceCall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.originUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1))("fixedWidth", true)("appCopyClipboard", ctx.originUrl + ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.link);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__.CopyClipboardDirective],
    styles: [".c-btn .btn:disabled, .btn.disabled[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  border: unset;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9tb2RhbHMvY3JlYXRlLWNvbmZlcmVuY2UtbGluay9jb25mZXJlbmNlLWxpbmstbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuYy1idG4gLmJ0bjpkaXNhYmxlZCxcclxuLmJ0bi5kaXNhYmxlZCxcclxuZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0biB7XHJcbiAgYm9yZGVyOiB1bnNldDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8641:
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/modals/video-post-modal/video-post-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoPostModalComponent: () => (/* binding */ VideoPostModalComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirmation-modal/confirmation-modal.component */ 3581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ 6749);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ 1432);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 4656);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tag-user-input/tag-user-input.component */ 3781);














const _c0 = function () {
  return ["fas", "file-upload"];
};
function VideoPostModalComponent_ng_container_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_div_22_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r7.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function VideoPostModalComponent_ng_container_0_div_22_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["fas", "xmark"];
};
function VideoPostModalComponent_ng_container_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_ng_container_23_Template_fa_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.removePostSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r3.selectedThumbFile, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));
  }
}
function VideoPostModalComponent_ng_container_0_div_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please select another file to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VideoPostModalComponent_ng_container_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 27)(2, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_div_31_Template_fa_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r14.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, VideoPostModalComponent_ng_container_0_div_31_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function VideoPostModalComponent_ng_container_0_div_31_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.onSelectedVideo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.fileSizeError);
  }
}
function VideoPostModalComponent_ng_container_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "video", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("play", function VideoPostModalComponent_ng_container_0_div_32_Template_video_play_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.onvideoPlay($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_div_32_Template_fa_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.removeVideoSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r5.selectedVideoFile, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));
  }
}
function VideoPostModalComponent_ng_container_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_div_39_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.deletePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.deleteButtonLabel, " ");
  }
}
const _c2 = function (a0, a1) {
  return {
    "justify-content-between": a0,
    "justify-content-end": a1
  };
};
function VideoPostModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_Template_fa_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.activeModal.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Video Title(max 50 characters)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VideoPostModalComponent_ng_container_0_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.postData.albumname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10)(14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Video Description(max 500 characters)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-tag-user-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDataChange", function VideoPostModalComponent_ng_container_0_Template_app_tag_user_input_onDataChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.onTagUserInputChangeEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, VideoPostModalComponent_ng_container_0_div_22_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, VideoPostModalComponent_ng_container_0_ng_container_23_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14)(25, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "(Max. video size allowed is 2 GB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, VideoPostModalComponent_ng_container_0_div_31_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, VideoPostModalComponent_ng_container_0_div_32_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 6)(34, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Enter Upto 5 Tags Separated By A Comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VideoPostModalComponent_ng_container_0_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.postData.keywords = $event);
    })("keyup", function VideoPostModalComponent_ng_container_0_Template_input_keyup_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.onChangeTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, VideoPostModalComponent_ng_container_0_div_39_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div")(41, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.activeModal.close("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_0_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.uploadImgAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.postData.albumname);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isShowMetaPreview", false)("isAllowTagUser", true)("value", ctx_r0.postMessageInputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.selectedThumbFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedThumbFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.selectedVideoFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedVideoFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.postData.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](16, _c2, ctx_r0.postData.id, !ctx_r0.postData.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.postData.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.cancelButtonLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.confirmButtonLabel, " ");
  }
}
function VideoPostModalComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4)(2, "div", 36)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " It will take a while to upload long videos or if your internet connection is bad. You MUST keep your browser tab open to avoid interruptions. If you close this browser tab, you video will stop uploading. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 37)(6, "div", 38)(7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 40)(10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VideoPostModalComponent_ng_container_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Stop upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r1.progressValue, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-valuenow", ctx_r1.progressValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.progressValue, "% ");
  }
}
class VideoPostModalComponent {
  constructor(activeModal, toastService, spinner, commonService, authService, router, modalService, cdr) {
    this.activeModal = activeModal;
    this.toastService = toastService;
    this.spinner = spinner;
    this.commonService = commonService;
    this.authService = authService;
    this.router = router;
    this.modalService = modalService;
    this.cdr = cdr;
    this.deleteButtonLabel = 'Delete';
    this.cancelButtonLabel = 'Cancel';
    this.confirmButtonLabel = 'Confirm';
    this.title = 'Confirmation Dialog';
    this.postData = {
      id: null,
      profileid: null,
      communityId: null,
      postdescription: '',
      tags: [],
      imageUrl: '',
      videoduration: null,
      thumbfilename: null,
      streamname: '',
      posttype: 'V',
      albumname: '',
      file1: {},
      file2: {},
      keywords: ''
    };
    this.postMessageInputValue = '';
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'posts/create-post';
    this.isProgress = false;
    this.progressValue = 0;
    this.channelId = null;
    this.streamnameProgress = 0;
    this.thumbfilenameProgress = 0;
    this.fileSizeError = false;
    this.getTagUsersFromAnchorTags = anchorTags => {
      const tags = [];
      for (const key in anchorTags) {
        if (Object.prototype.hasOwnProperty.call(anchorTags, key)) {
          const tag = anchorTags[key];
          tags.push({
            id: tag?.getAttribute('data-id'),
            name: tag?.innerHTML
          });
        }
      }
      return tags;
    };
    this.postData.profileid = JSON.parse(this.authService.getUserData())?.Id;
    // console.log('profileId', this.postData.profileid);
    // console.log('editData', this.data);
    this.channelId = +localStorage.getItem('channelId');
    // console.log(this.channelId);
  }

  ngAfterViewInit() {
    if (this.data) {
      this.postData.id = this.data.id;
      this.postData.profileid = this.data.profileid;
      this.postData.albumname = this.data.albumname;
      this.postMessageInputValue = this.data?.postdescription;
      this.selectedThumbFile = this.data?.thumbfilename;
      this.selectedVideoFile = this.data?.streamname;
      // this.postData.streamname = this.selectedVideoFile;
      this.postData.thumbfilename = this.selectedThumbFile;
      this.postData.videoduration = this.data?.videoduration;
      this.postData.keywords = this.data?.keywords;
    }
  }
  ngOnInit() {}
  // uploadImgAndSubmit(): void {
  //   if (
  //     this.postData?.profileid &&
  //     this.postData.postdescription &&
  //     this.postData.albumname &&
  //     (this.postData.file1 || this.selectedVideoFile) &&
  //     (this.postData.file2 || this.selectedThumbFile)
  //   ) {
  //     let uploadObs = {};
  //     if (this.postData?.file1?.name) {
  //       uploadObs['streamname'] = this.commonService.upload(
  //         this.postData?.file1
  //       );
  //     }
  //     if (this.postData?.file2?.name) {
  //       uploadObs['thumbfilename'] = this.commonService.upload(
  //         this.postData?.file2
  //       );
  //     }
  //     if (Object.keys(uploadObs)?.length > 0) {
  //       // this.spinner.show();
  //       // this.startProgress();
  //       this.isProgress = true;
  //       forkJoin(uploadObs).subscribe({
  //         next: (res: any) => {
  //           if (res?.streamname?.body?.url) {
  //             this.postData['file1'] = null;
  //             this.postData['streamname'] = res?.streamname?.body?.url;
  //           }
  //           if (res?.thumbfilename?.body?.url) {
  //             this.postData['file2'] = null;
  //             this.postData['thumbfilename'] = res?.thumbfilename?.body?.url;
  //           }
  //           this.spinner.hide();
  //           this.progressValue = 100;
  //           this.createPost();
  //         },
  //         error: (err) => {
  //           this.spinner.hide();
  //         },
  //       });
  //     } else {
  //       this.postData.streamname = this.selectedVideoFile;
  //       this.postData.thumbfilename = this.selectedThumbFile;
  //       this.progressValue = 100;
  //       this.createPost();
  //     }
  //   } else {
  //     this.toastService.danger('Please enter mandatory fields(*) data.');
  //   }
  // }
  // startProgress() {
  //   const interval = setInterval(() => {
  //     if (this.progressValue < 92) {
  //       this.progressValue =
  //         this.progressValue > 92
  //           ? this.progressValue
  //           : this.progressValue + Math.floor(Math.random() * 10);
  //     }
  //     if (this.progressValue >= 98) {
  //       clearInterval(interval);
  //     }
  //     this.cdr.markForCheck();
  //   }, 1000);
  // }
  uploadImgAndSubmit() {
    if (this.postData?.profileid && this.postData.postdescription && this.postData.albumname && (this.postData.file1 || this.selectedVideoFile) && (this.postData.file2 || this.selectedThumbFile)) {
      if (this.postData?.file1?.name || this.postData?.file2?.name) {
        if (this.postData?.file1?.name) {
          this.isProgress = true;
          this.commonService.upload(this.postData?.file1).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
              this.streamnameProgress = Math.round(100 * event.loaded / event.total);
              this.cdr.markForCheck();
              this.progressValue = this.streamnameProgress;
              // console.log(`Streamname Progress: ${this.streamnameProgress}%`);
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
              if (event.body?.url) {
                this.postData['file1'] = null;
                this.postData['streamname'] = event.body.url;
                if (!this.postData.id && this.thumbfilenameProgress === 100 && this.streamnameProgress === 100) {
                  this.createPost();
                } else if (this.postData.id && this.streamnameProgress === 100) {
                  this.createPost();
                }
              }
            }
          });
        }
        if (this.postData?.file2?.name) {
          if (this.postData.id) {
            this.spinner.show();
          }
          this.commonService.upload(this.postData?.file2).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
              this.thumbfilenameProgress = Math.round(100 * event.loaded / event.total);
              // console.log(
              //   `Thumbfilename Progress: ${this.thumbfilenameProgress}%`
              // );
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
              if (event.body?.url) {
                this.postData['file2'] = null;
                this.postData['thumbfilename'] = event.body.url;
              }
              if (this.postData?.id && this.thumbfilenameProgress === 100 && !this.streamnameProgress) {
                this.spinner.hide();
                this.postData.streamname = this.selectedVideoFile;
                this.createPost();
              }
            }
          });
        }
      } else {
        if (this.postData?.id) {
          this.postData.streamname = this.selectedVideoFile;
          this.postData.thumbfilename = this.selectedThumbFile;
          this.createPost();
        }
      }
    } else {
      this.toastService.danger('Please enter mandatory fields(*) data.');
    }
  }
  onTagUserInputChangeEvent(data) {
    this.postData.postdescription = data?.html;
    this.postMessageTags = data?.tags;
  }
  createPost() {
    this.spinner.show();
    if (this.postData.streamname && this.postData.thumbfilename && this.postData.postdescription && this.postData.albumname) {
      this.postData['channelId'] = this.channelId || null;
      console.log('post-data', this.postData);
      this.commonService.post(this.apiUrl, this.postData).subscribe({
        next: res => {
          this.spinner.hide();
          // this.postData = null;
          if (this.postData.id) {
            this.toastService.success('Post updated successfully');
            this.activeModal.close();
          } else {
            this.toastService.success('Post created successfully');
            this.activeModal.close();
          }
        },
        error: error => {
          this.spinner.hide();
          console.log(error);
          this.toastService.danger('Something went wrong please try again!');
        }
      });
      // this.socketService.createOrEditPost(this.postData, (data) => {
      //   this.spinner.hide();
      //   this.toastService.success('Post created successfully.');
      //   this.postData = null;
      //   return data;
      // });
    } else {
      this.spinner.hide();
      // this.toastService.danger('Please enter mandatory fields(*) data.');
    }
  }

  deletePost() {
    const modalRef = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
      centered: true,
      size: 'md'
    });
    modalRef.componentInstance.message = `Are you sure want to this video?`;
    modalRef.componentInstance.confirmButtonLabel = 'Delete';
    modalRef.componentInstance.cancelButtonLabel = 'Cancel';
    modalRef.result.then(res => {
      // console.log(res);
      if (res === 'success') {
        const postId = this.postData.id;
        this.commonService.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}posts/${postId}`).subscribe({
          next: res => {
            this.toastService.success('Post delete successfully');
            this.activeModal.close();
            window.location.reload();
          },
          error: res => {
            this.toastService.danger('Something went wrong please try again');
          }
        });
      }
    });
  }
  onSelectedVideo(event) {
    // const maxSize = 2*10^9;
    const maxSize = 2147483648; //2GB
    if (event.target?.files?.[0].size < maxSize) {
      this.fileSizeError = false;
      if (event.target?.files?.[0].type.includes('video/mp4')) {
        this.postData.file1 = event.target?.files?.[0];
        this.selectedVideoFile = URL.createObjectURL(event.target.files[0]);
        const videoSize = this.postData.file1.size;
        console.log(videoSize);
      } else {
        this.toastService.warring('please upload only mp4 files');
      }
    } else {
      this.toastService.warring('Maximum video size allowed is 2 GB.');
      this.fileSizeError = true;
    }
  }
  onFileSelected(event) {
    this.postData.file2 = event.target?.files?.[0];
    this.selectedThumbFile = URL.createObjectURL(event.target.files[0]);
  }
  removePostSelectedFile() {
    this.selectedThumbFile = null;
  }
  removeVideoSelectedFile() {
    this.selectedVideoFile = null;
  }
  onvideoPlay(e) {
    this.postData.videoduration = Math.round(e?.target?.duration);
  }
  goToHome() {
    this.activeModal.close();
    location.reload();
  }
  onChangeTag(event) {
    this.postData.keywords = event.target.value.replaceAll(' ', ',');
  }
  static #_ = this.ɵfac = function VideoPostModalComponent_Factory(t) {
    return new (t || VideoPostModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: VideoPostModalComponent,
    selectors: [["app-video-post-modal"]],
    inputs: {
      deleteButtonLabel: "deleteButtonLabel",
      cancelButtonLabel: "cancelButtonLabel",
      confirmButtonLabel: "confirmButtonLabel",
      title: "title",
      message: "message",
      data: "data",
      communityId: "communityId"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "modal-header"], [1, "text-start", "m-0"], ["role", "button", 1, "font-20-px", 3, "icon", "click"], [1, "modal-body", "text-center"], ["ngNativeValidate", "", "autocomplete", "off", 1, "form-dark", "row"], [1, "col-12", "mb-5"], [1, "form-label", "d-flex"], [1, "text-danger"], ["type", "text", "name", "albumname", "placeholder", "Enter your video title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "mb-3"], ["placeholder", "", 3, "isShowMetaPreview", "isAllowTagUser", "value", "onDataChange"], [1, "col-6", "mb-3"], ["class", "d-flex", 4, "ngIf"], [1, "col-6", "mb-5", "d-grid"], [1, "d-none", "d-sm-block", "ms-2"], ["type", "text", "name", "keywords", "placeholder", "Enter keywords", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "modal-footer", 3, "ngClass"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "ms-3", 3, "click"], [1, "d-flex"], [1, "text-primary", "cursor", "font-24-px", 3, "icon", "click"], ["type", "file", "id", "fileInput", "accept", "image/*", 1, "d-none", 3, "change"], ["uploadImage", ""], [1, "position-relative", "w-100-px", "h-100-px"], ["loading", "lazy", "alt", "icon", "onerror", "this.onerror=null;", 1, "w-100", "h-100", "rounded-4", 3, "src"], ["role", "button", 1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "bg-danger", "p-1", "font-12-px", "c-pointer", "c-icon-color", 3, "icon", "click"], [1, "d-flex", "align-items-center"], ["class", "ms-2", 4, "ngIf"], ["type", "file", "id", "fileInput", "accept", "video/mp4*", 1, "d-none", 3, "change"], ["uploadVideo", ""], [1, "ms-2"], ["controls", "", "autoplay", "autoplay", 1, "w-100", "h-200-px", 3, "src", "play"], ["videoPlayer", ""], ["role", "button", 1, "position-absolute", "translate-middle", "badge", "bg-danger", "p-1", "font-12-px", "c-pointer", "c-icon-color", 3, "icon", "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "progress-bar-body"], [1, "osahan-progress"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], [1, "modal-footer", "justify-content-end", "gap-2"]],
    template: function VideoPostModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VideoPostModalComponent_ng_container_0_Template, 45, 19, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VideoPostModalComponent_ng_container_1_Template, 12, 4, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isProgress);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_5__.TagUserInputComponent],
    styles: ["h5[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\n.modal-body[_ngcontent-%COMP%]   .progress-bar-body[_ngcontent-%COMP%] {\n  border: solid;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9tb2RhbHMvdmlkZW8tcG9zdC1tb2RhbC92aWRlby1wb3N0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgLnByb2dyZXNzLWJhci1ib2R5IHtcclxuICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2929:
/*!*****************************************************!*\
  !*** ./src/app/@shared/pipe/comma-seperate.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommaSeperatePipe: () => (/* binding */ CommaSeperatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CommaSeperatePipe {
  transform(value) {
    if (!value) {
      return null;
    }
    return value.split(',').join(', ');
  }
  static #_ = this.ɵfac = function CommaSeperatePipe_Factory(t) {
    return new (t || CommaSeperatePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "commaSeperate",
    type: CommaSeperatePipe,
    pure: true
  });
}

/***/ }),

/***/ 6283:
/*!***********************************************!*\
  !*** ./src/app/@shared/pipe/date-day.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateDayPipe: () => (/* binding */ DateDayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DateDayPipe {
  transform(value) {
    const currentDate = new Date();
    const diffInTime = currentDate.getTime() - new Date(value).getTime();
    const diffInSeconds = Math.round(diffInTime / 1000);
    const diffInMinutes = Math.round(diffInTime / (1000 * 60));
    const diffInHours = Math.round(diffInTime / (1000 * 3600));
    const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
    if (diffInSeconds <= 60) {
      return 'just now';
    }
    if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    }
    if (diffInDays === 0 && diffInMinutes >= 60) {
      return `${diffInHours}h ago`;
    }
    if (diffInDays === 1) {
      return '1 day ago';
    }
    return `${diffInDays} days ago`;
  }
  static #_ = this.ɵfac = function DateDayPipe_Factory(t) {
    return new (t || DateDayPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "dateDay",
    type: DateDayPipe,
    pure: true
  });
}

/***/ }),

/***/ 510:
/*!****************************************************!*\
  !*** ./src/app/@shared/pipe/get-image-url.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetImageUrlPipe: () => (/* binding */ GetImageUrlPipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common.service */ 1432);



class GetImageUrlPipe {
  constructor(commonService) {
    this.commonService = commonService;
  }
  transform(value, defaultImageUrl) {
    if (!value) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(defaultImageUrl);
    }
    return this.commonService.getImageUrl(value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blob => {
      return URL.createObjectURL(blob);
    }));
  }
  static #_ = this.ɵfac = function GetImageUrlPipe_Factory(t) {
    return new (t || GetImageUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
    name: "getImageUrl",
    type: GetImageUrlPipe,
    pure: true
  });
}

/***/ }),

/***/ 123:
/*!*********************************************!*\
  !*** ./src/app/@shared/pipe/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipeModule: () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safe.pipe */ 9748);
/* harmony import */ var _get_image_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-image-url.pipe */ 510);
/* harmony import */ var _comma_seperate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comma-seperate.pipe */ 2929);
/* harmony import */ var _time_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-duration.pipe */ 3712);
/* harmony import */ var _date_day_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-day.pipe */ 6283);
/* harmony import */ var _sanitize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sanitize.pipe */ 3863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);







class PipeModule {
  static #_ = this.ɵfac = function PipeModule_Factory(t) {
    return new (t || PipeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: PipeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipeModule, {
    declarations: [_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe, _get_image_url_pipe__WEBPACK_IMPORTED_MODULE_1__.GetImageUrlPipe, _comma_seperate_pipe__WEBPACK_IMPORTED_MODULE_2__.CommaSeperatePipe, _time_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeDurationPipe, _time_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.timeDurationWithSec, _date_day_pipe__WEBPACK_IMPORTED_MODULE_4__.DateDayPipe, _sanitize_pipe__WEBPACK_IMPORTED_MODULE_5__.NoSanitizePipe],
    exports: [_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe, _get_image_url_pipe__WEBPACK_IMPORTED_MODULE_1__.GetImageUrlPipe, _comma_seperate_pipe__WEBPACK_IMPORTED_MODULE_2__.CommaSeperatePipe, _time_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeDurationPipe, _time_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.timeDurationWithSec, _date_day_pipe__WEBPACK_IMPORTED_MODULE_4__.DateDayPipe, _sanitize_pipe__WEBPACK_IMPORTED_MODULE_5__.NoSanitizePipe]
  });
})();

/***/ }),

/***/ 9748:
/*!*******************************************!*\
  !*** ./src/app/@shared/pipe/safe.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    switch (type) {
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "resourceUrl":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}

/***/ }),

/***/ 3863:
/*!***********************************************!*\
  !*** ./src/app/@shared/pipe/sanitize.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoSanitizePipe: () => (/* binding */ NoSanitizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class NoSanitizePipe {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(html) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
  static #_ = this.ɵfac = function NoSanitizePipe_Factory(t) {
    return new (t || NoSanitizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "noSanitize",
    type: NoSanitizePipe,
    pure: true
  });
}

/***/ }),

/***/ 3712:
/*!****************************************************!*\
  !*** ./src/app/@shared/pipe/time-duration.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeDurationPipe: () => (/* binding */ TimeDurationPipe),
/* harmony export */   timeDurationWithSec: () => (/* binding */ timeDurationWithSec)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TimeDurationPipe {
  transform(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00';
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  static #_ = this.ɵfac = function TimeDurationPipe_Factory(t) {
    return new (t || TimeDurationPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "timeDuration",
    type: TimeDurationPipe,
    pure: true
  });
}
class timeDurationWithSec {
  transform(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00:00';
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  static #_ = this.ɵfac = function timeDurationWithSec_Factory(t) {
    return new (t || timeDurationWithSec)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "timeDurationWithSec",
    type: timeDurationWithSec,
    pure: true
  });
}

/***/ }),

/***/ 4656:
/*!**************************************************!*\
  !*** ./src/app/@shared/services/auth.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _constant_urlConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/urlConstant */ 5689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ 1432);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.service */ 6749);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 8859);






class AuthService {
  constructor(commonService, toastService, cookieService) {
    this.commonService = commonService;
    this.toastService = toastService;
    this.cookieService = cookieService;
    // admin: BehaviorSubject<any>;
    this.userDetails = {};
    // const adminJson = localStorage.getItem('adminAuth') ? JSON.parse(localStorage.getItem('adminAuth') || '') : {};
    // this.admin = new BehaviorSubject<any>(adminJson);
    const userJson = localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : {};
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(userJson);
    // this.token = new BehaviorSubject<any>(this.cookieService.get('token') ? this.cookieService.get('token') : '');
  }

  adminData() {
    // return this.admin.getValue() || {};
  }
  adminId() {
    const adminData = this.adminData();
    return adminData['_id'];
  }
  // adminLogin(adminJson: any = {}): Observable<any> {
  //     localStorage.clear();
  //     localStorage.setItem('adminAuth', JSON.stringify(adminJson));
  //     localStorage.setItem('token', adminJson?.token);
  //     if (!!adminJson) {
  //         this.admin.next(adminJson);
  //         this.token.next(adminJson?.token)
  //     }
  //     return of(true);
  // }
  // adminLogout(): void {
  //     const reqBody = {
  //         _id: this.adminId()
  //     };
  //     this.commonService.post(urlConstant.Auth.AdminLogout, reqBody).subscribe((res) => {
  //         this.toastService.success(`Logout successfully.`);
  //         this.clearData();
  //         window.location.href = '/auth/login';
  //     });
  // }
  userData() {
    return this.user?.getValue() || {};
  }
  userId() {
    const userData = this.userData();
    return userData['_id'];
  }
  // userLogin(userJson: any = {}): Observable<any> {
  //     localStorage.clear();
  //     localStorage.setItem('auth-user', JSON.stringify(userJson));
  //     if (!!userJson) {
  //         this.user.next(userJson);
  //         this.setToken(userJson?.token)
  //     }
  //     return of(true);
  // }
  userLogout() {
    const reqBody = {
      _id: this.userId()
    };
    this.commonService.post(_constant_urlConstant__WEBPACK_IMPORTED_MODULE_0__.urlConstant.Auth.Logout, reqBody).subscribe(res => {
      this.toastService.success(`Logout successfully.`);
      this.clearData();
      window.location.href = '';
    });
  }
  clearData() {
    localStorage.clear();
    // this.admin.next(null);
    this.user?.next(null);
  }
  setToken(token = '') {
    localStorage.setItem('token', token);
    this.token?.next(token);
  }
  getToken() {
    return '';
    // return this.token?.getValue() || '';
  }

  setUserSignEmail(email = '') {
    localStorage.setItem('userEmail', email);
  }
  getUserSignEmail() {
    return localStorage.getItem('userEmail') || '';
  }
  // refreshUserData(): Observable<any> {
  //     return this.commonService.get(urlConstant.User.GetByToken).pipe(
  //         take(1),
  //         switchMap((res: any = {}) => {
  //             if (!!res && res['status'] === 200) {
  //                 return this.userLogin(res['data']).pipe(take(1));
  //             } else {
  //                 return of(res);
  //             }
  //         })
  //     );
  // }
  setUserData(userDetails) {
    // localStorage.setItem('authUser', JSON.stringify(userDetails));
  }
  getUserData() {
    return localStorage.getItem('authUser');
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8838:
/*!******************************************************!*\
  !*** ./src/app/@shared/services/channels.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelService: () => (/* binding */ ChannelService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class ChannelService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'channels';
  }
  getAllChannels(page, size, search = '', startDate, endDate) {
    const data = {
      page: page,
      size: size,
      search: search,
      startDate: startDate,
      endDate: endDate
    };
    return this.http.post(`${this.baseUrl}/get/`, data);
  }
  createChannel(data) {
    return this.http.post(`${this.baseUrl}/create-channel`, data);
  }
  changeChannelStatus(id, feature) {
    return this.http.get(`${this.baseUrl}/feature/${id}?feature=${feature}`);
  }
  deleteChannel(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getChannelById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  upload(file, id, defaultType) {
    const formData = new FormData();
    formData.append('folder', defaultType);
    formData.append('file', file);
    formData.append('id', id);
    formData.append('default', defaultType);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}utils/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  static #_ = this.ɵfac = function ChannelService_Factory(t) {
    return new (t || ChannelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ChannelService,
    factory: ChannelService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1432:
/*!****************************************************!*\
  !*** ./src/app/@shared/services/common.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _constant_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/globals */ 1305);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);








class CommonService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    //public loginUser = localStorage.getItem('loginUser');
    this.config = {};
    this.userData = {};
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  }
  getHtml(api, reqBody = {}) {
    let contentHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    contentHeaders.append('Accept', 'html/text');
    contentHeaders.append('Content-Type', 'html/text');
    const queryParam = _constant_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.jsonToQueryString(reqBody);
    return this.http.get(api + '?' + queryParam, {
      headers: contentHeaders,
      responseType: 'text'
    });
  }
  upload(files) {
    const formData = new FormData();
    formData.append('file', files);
    console.log(formData);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', `${this.apiUrl}posts/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getAll(api, reqBody = {}) {
    return this.http.post(api, reqBody);
  }
  insert(api, reqBody = {}) {
    return this.http.post(api, reqBody);
  }
  post(api, reqBody = {}) {
    return this.insert(api, reqBody);
  }
  insertWithProgress(api, reqBody) {
    return this.http.post(api, reqBody, {
      reportProgress: true,
      observe: 'events'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorMsg));
  }
  update(api, reqBody = {}) {
    return this.http.put(api, reqBody);
  }
  // getById(api: string, reqBody: any = {}): Observable<any> {
  //   const queryParam = Globals.jsonToQueryString(reqBody);
  //   return this.http.get(api + '?' + queryParam);
  // }
  getById(api, reqBody = {}) {
    return this.http.get(api + '/' + reqBody.id);
  }
  get(api, options = {}) {
    return this.http.get(api, options);
  }
  put(api, reqBody = {}) {
    return this.update(api, reqBody);
  }
  delete(api) {
    return this.http.delete(api);
  }
  insertOrUpdate(api, reqBody = {}) {
    return reqBody?._id ? this.update(api, reqBody) : this.insert(api, reqBody);
  }
  insertOrUpdateFormData(api, reqBody, id) {
    return id ? this.update(api, reqBody) : this.insert(api, reqBody);
  }
  download(api, reqBody = {}) {
    const queryParam = _constant_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.jsonToQueryString(reqBody);
    console.log('URL : ', api + '?' + queryParam);
    window.open(api + '?' + queryParam);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
  }
  patch(api, reqBody = {}) {
    return this.http.patch(api, reqBody);
  }
  errorMsg(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(errorMessage);
  }
  getImageUrl(url) {
    return this.http.get(url, {
      responseType: "blob"
    });
  }
  deleteComments() {}
  getNotificationList(id) {
    return this.http.get(`${this.apiUrl}customers/get-notification/${id}`);
  }
  deleteNotification(id) {
    return this.http.delete(`${this.apiUrl}customers/notification/${id}`, {
      responseType: 'text'
    });
  }
  readUnreadNotification(id, isRead) {
    return this.http.get(`${this.apiUrl}customers/edit-notification/${id}?isRead=${isRead}`);
  }
  getMetaData(url) {
    return this.http.post(`${this.apiUrl}posts/get-meta`, url);
  }
  getNotification(id) {
    return this.http.get(`${this.apiUrl}customers/notification/${id}`);
  }
  static #_ = this.ɵfac = function CommonService_Factory(t) {
    return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: CommonService,
    factory: CommonService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7534:
/*!***************************************************!*\
  !*** ./src/app/@shared/services/share.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareService: () => (/* binding */ ShareService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ 1432);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 4656);





class ShareService {
  constructor(commonService, authService) {
    this.commonService = commonService;
    this.authService = authService;
    this.isSidebarOpen = true;
    this.isDarkTheme = false;
    this.userDetails = {};
    this.channelData = {};
    this.notificationList = [];
    this.isUserAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this._credentials = {};
    const theme = localStorage.getItem('theme');
    this.isDarkTheme = theme === 'dark';
    // this.isDarkTheme = !(theme === 'dark');
    this.toggleTheme();
    const sidebar = localStorage.getItem('sidebar');
    this.isSidebarOpen = sidebar === 'open';
  }
  openSidebar() {
    this.isSidebarOpen = true;
    localStorage.setItem('sidebar', 'open');
  }
  closeSidebar() {
    this.isSidebarOpen = false;
    localStorage.setItem('sidebar', 'close');
  }
  toggleSidebar() {
    if (this.isSidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }
  toggleTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      this.isDarkTheme = false;
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      this.isDarkTheme = true;
    }
  }
  // toggleTheme(): void {
  //   if (this.isDarkTheme) {
  //     document.body.classList.remove('dark-theme');
  //     localStorage.setItem('theme', 'light');
  //     this.isDarkTheme = false;
  //   } else {
  //     document.body.classList.add('dark-theme');
  //     localStorage.setItem('theme', 'dark');
  //     this.isDarkTheme = true;
  //   }
  // }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  getUserDetails(id) {
    // const id = JSON.parse(this.authService.getUserData() as any)?.profileId
    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + `customers/profile/${id}`;
    this.commonService.get(url).subscribe({
      next: res => {
        localStorage.setItem('authUser', JSON.stringify(res.data[0]));
        this.userDetails = res.data[0];
        this.getChannelByUserId(this.userDetails?.channelId);
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getNotificationList() {
    const id = localStorage.getItem('profileId');
    this.commonService.getNotificationList(Number(id)).subscribe({
      next: res => {
        localStorage.setItem('isRead', 'Y');
        this.isNotify = false;
        this.notificationList = res?.data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getChannelByUserId(value) {
    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.commonService.get(`${url}channels/get/${value}`).subscribe({
      next: res => {
        // console.log(res[0]?.id)
        if (res[0]) {
          this.channelData = res[0];
          this.userChannelName = this.channelData.firstname;
          localStorage.setItem('channelId', res[0]?.id);
          // console.log(this.channelData.firstname);
        }
      },

      error: error => {
        console.log(error);
      }
    });
  }
  getCredentials() {
    this._credentials = JSON.parse(this.authService.getUserData()) || null;
    console.log(this._credentials);
    const isAuthenticate = Object.keys(this._credentials || {}).length > 0;
    this.changeIsUserAuthenticated(isAuthenticate);
    return isAuthenticate;
  }
  changeIsUserAuthenticated(flag = false) {
    this.isUserAuthenticated.next(flag);
  }
  static #_ = this.ɵfac = function ShareService_Factory(t) {
    return new (t || ShareService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ShareService,
    factory: ShareService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6749:
/*!***************************************************!*\
  !*** ./src/app/@shared/services/toast.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ToastService {
  constructor() {
    this.toasts = [];
  }
  show(header, textOrTpl, options = {}) {
    this.toasts.push({
      header,
      textOrTpl,
      ...options
    });
  }
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  removeAll() {
    this.toasts = [];
  }
  success(msg) {
    this.show('Success', msg, {
      className: 'bg-success text-light'
    });
  }
  warring(msg) {
    this.toasts.push({
      textOrTpl: msg,
      className: 'bg-warning text-light'
    });
  }
  danger(msg) {
    this.toasts.push({
      textOrTpl: msg,
      className: 'bg-danger text-light'
    });
  }
  error(msg) {
    this.show('Error', msg, {
      className: 'bg-danger text-light'
    });
  }
  info(msg) {
    this.show('Info', msg, {
      className: 'bg-info text-light'
    });
  }
  static #_ = this.ɵfac = function ToastService_Factory(t) {
    return new (t || ToastService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2661:
/*!******************************************!*\
  !*** ./src/app/@shared/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_trim_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-trim-directive */ 7528);
/* harmony import */ var _directives_btn_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/btn-loader.directive */ 7763);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/confirmation-modal/confirmation-modal.component */ 3581);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video-card/video-card.component */ 841);
/* harmony import */ var _components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lf-dashboard/lf-dashboard.component */ 2038);
/* harmony import */ var _components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/channels-card/channels-card.component */ 5892);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/pipe.module */ 123);
/* harmony import */ var _components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-slider-list/video-slider-list.component */ 3937);
/* harmony import */ var _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details-card/details-card.component */ 3076);
/* harmony import */ var _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tag-user-input/tag-user-input.component */ 3781);
/* harmony import */ var _components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reply-comment-modal/reply-comment-modal.component */ 6083);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/video-post-modal/video-post-modal.component */ 8641);
/* harmony import */ var _modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/create-channel/create-channel-modal.component */ 7801);
/* harmony import */ var _modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/create-conference-link/conference-link-modal.component */ 3901);
/* harmony import */ var _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/copy-clipboard.directive */ 3816);
/* harmony import */ var _components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/post-meta-data-card/post-meta-data-card.component */ 3181);
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-mentions */ 789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 1699);




























const sharedComponents = [_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, _directives_btn_loader_directive__WEBPACK_IMPORTED_MODULE_0__.BtnLoaderDirective, _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_2__.VideoCardComponent, _components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.LfDashboardComponent, _components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__.ChannelsCardComponent, _components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_6__.VideoSliderListComponent, _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_7__.DetailsCardComponent, _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_8__.TagUserInputComponent, _components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_9__.ReplyCommentModalComponent, _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_10__.VideoPostModalComponent, _modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_11__.CreateChannelComponent, _modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_12__.ConferenceLinkComponent, _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_13__.CopyClipboardDirective, _components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_14__.PostMetaDataCardComponent];
const sharedModules = [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_18__.NgxTrimDirectiveModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbToastModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, angular_mentions__WEBPACK_IMPORTED_MODULE_23__.MentionModule];
class SharedModule {
  constructor(library) {
    library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faAngleDoubleUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faXmark, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faBars, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faChevronDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faChevronUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faChevronRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faUser, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faUsers, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faBell, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faHouse, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faGear, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faSun, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faMoon, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faVideo, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCloudUpload, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faHistory, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCalendar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlayCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faUpload, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlusSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faSearch, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlusCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faUserCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCog, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCheckCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faSignOutAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faEye, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faClock, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faFileUpload, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faAngleRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCloudUploadAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faListAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faThumbsDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faThumbsUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faMessage, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faImage, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPaperPlane, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faArrowRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faEllipsis, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faUserXmark, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlay, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faBookOpen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPenToSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faTrashCan, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faRotateRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faShareAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCaretDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faFolderOpen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faCopy, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faSquareCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faSquareXmark);
  }
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FaIconLibrary));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbActiveOffcanvas, {
      provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__.LAZYLOAD_IMAGE_HOOKS,
      useClass: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__.ScrollHooks
    }],
    imports: [sharedModules, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_18__.NgxTrimDirectiveModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbToastModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, angular_mentions__WEBPACK_IMPORTED_MODULE_23__.MentionModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, _directives_btn_loader_directive__WEBPACK_IMPORTED_MODULE_0__.BtnLoaderDirective, _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_2__.VideoCardComponent, _components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.LfDashboardComponent, _components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__.ChannelsCardComponent, _components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_6__.VideoSliderListComponent, _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_7__.DetailsCardComponent, _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_8__.TagUserInputComponent, _components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_9__.ReplyCommentModalComponent, _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_10__.VideoPostModalComponent, _modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_11__.CreateChannelComponent, _modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_12__.ConferenceLinkComponent, _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_13__.CopyClipboardDirective, _components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_14__.PostMetaDataCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_18__.NgxTrimDirectiveModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbToastModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, angular_mentions__WEBPACK_IMPORTED_MODULE_23__.MentionModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_18__.NgxTrimDirectiveModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbToastModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, angular_mentions__WEBPACK_IMPORTED_MODULE_23__.MentionModule, _modals_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, _directives_btn_loader_directive__WEBPACK_IMPORTED_MODULE_0__.BtnLoaderDirective, _components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_2__.VideoCardComponent, _components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.LfDashboardComponent, _components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_4__.ChannelsCardComponent, _components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_6__.VideoSliderListComponent, _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_7__.DetailsCardComponent, _components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_8__.TagUserInputComponent, _components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_9__.ReplyCommentModalComponent, _modals_video_post_modal_video_post_modal_component__WEBPACK_IMPORTED_MODULE_10__.VideoPostModalComponent, _modals_create_channel_create_channel_modal_component__WEBPACK_IMPORTED_MODULE_11__.CreateChannelComponent, _modals_create_conference_link_conference_link_modal_component__WEBPACK_IMPORTED_MODULE_12__.ConferenceLinkComponent, _directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_13__.CopyClipboardDirective, _components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_14__.PostMetaDataCardComponent]
  });
})();

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main-layout_main-layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main-layout/main-layout.module */ 5770)).then(m => m.MainLayoutModule)
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth-layout_auth-layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/auth-layout.module */ 3970)).then(m => m.AuthLayoutModule)
}, {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_share_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@shared/services/share.service */ 7534);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_components_toast_modal_toast_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@shared/components/toast-modal/toast-modal.component */ 338);







const _c0 = function () {
  return ["fas", "angles-up"];
};
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.shareService.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0))("fixedWidth", true);
  }
}
class AppComponent {
  constructor(shareService, spinner) {
    this.shareService = shareService;
    this.spinner = spinner;
    this.isShowScrollTopBtn = false;
  }
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isShowScrollTopBtn = true;
    } else {
      this.isShowScrollTopBtn = false;
    }
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.spinner.hide();
    setTimeout(() => {
      const splashScreenLoader = document.getElementById('splashScreenLoader');
      if (splashScreenLoader) {
        splashScreenLoader.style.display = 'none';
      }
    }, 1000);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_share_service__WEBPACK_IMPORTED_MODULE_0__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.5)", "size", "medium", "color", "#fff", 3, "type", "fullScreen"], ["src", "/assets/default-profile.jpg", "alt", "", 1, "spinner-wrapper"], ["aria-live", "polite", "aria-atomic", "true"], ["role", "button", 1, "scroll-to-top", "rounded", 3, "click"], [3, "icon", "fixedWidth"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-toast-modal", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowScrollTopBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "line-scale")("fullScreen", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerComponent, _shared_components_toast_modal_toast_modal_component__WEBPACK_IMPORTED_MODULE_1__.ToastModalComponent],
    styles: [".spinner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  height: 75px;\n  -webkit-animation-name: _ngcontent-%COMP%_spinner;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-duration: 2s;\n  animation-name: _ngcontent-%COMP%_spinner;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-duration: 2s;\n  transform-style: preserve-3d;\n}\n@keyframes _ngcontent-%COMP%_spinner {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBSUEsNEJBQUE7QUFBRjtBQWFBO0VBQ0U7SUFHRSx3QkFBQTtFQUZGO0VBS0E7SUFHRSwyQkFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNzVweDtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIGZyb20ge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC0zNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _shared_components_toast_modal_toast_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@shared/components/toast-modal/toast-modal.component */ 338);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@shared/shared.module */ 2661);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@shared/guards/user-auth.guard */ 9966);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.provideClientHydration)(), _shared_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__.UserAuthGuard, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_components_toast_modal_toast_modal_component__WEBPACK_IMPORTED_MODULE_2__.ToastModalComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const frontendUrl = 'https://video.healing.tube/';
const backendUrl = 'https://api.healing.tube/';
const loginUrl = 'https://www.healing.tube/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/';
const logoutUrl = 'https://www.healing.tube/logout';
;
const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.healing.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map