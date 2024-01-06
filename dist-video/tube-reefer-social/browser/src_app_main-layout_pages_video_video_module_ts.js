"use strict";
(self["webpackChunktube_reefer_social"] = self["webpackChunktube_reefer_social"] || []).push([["src_app_main-layout_pages_video_video_module_ts"],{

/***/ 9570:
/*!****************************************!*\
  !*** ./src/app/@shared/utils/utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteExtraParamsFromReqObj: () => (/* binding */ deleteExtraParamsFromReqObj),
/* harmony export */   getTagUsersFromAnchorTags: () => (/* binding */ getTagUsersFromAnchorTags),
/* harmony export */   isFormSubmittedAndError: () => (/* binding */ isFormSubmittedAndError),
/* harmony export */   numToRevArray: () => (/* binding */ numToRevArray),
/* harmony export */   slugify: () => (/* binding */ slugify)
/* harmony export */ });
const slugify = str => {
  return str?.length > 0 ? str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') : '';
};
const numToRevArray = num => {
  return Array(num).fill(0).map((x, i) => i).reverse();
};
const isFormSubmittedAndError = (formGroup, isFormSubmitted, controlName, errorName = '', notError = new Array()) => {
  const otherError = formGroup.controls[controlName].errors;
  if (isFormSubmitted && otherError) {
    return errorName == '' ? true : (otherError ? !Object.keys(otherError).some(err => notError.includes(err)) : true) ? formGroup.controls[controlName].hasError(errorName) : false;
  }
  return false;
};
const getTagUsersFromAnchorTags = anchorTags => {
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
const deleteExtraParamsFromReqObj = reqObj => {
  delete reqObj?.['isClicked'];
  delete reqObj?.['isSubmitted'];
  return reqObj;
};

/***/ }),

/***/ 2209:
/*!*****************************************************************!*\
  !*** ./src/app/main-layout/pages/video/video-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoRoutingModule: () => (/* binding */ VideoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.component */ 6122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent
}
// {
//   path: ':id',
//   component: VideoComponent
// }
];

class VideoRoutingModule {
  static #_ = this.ɵfac = function VideoRoutingModule_Factory(t) {
    return new (t || VideoRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: VideoRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6122:
/*!************************************************************!*\
  !*** ./src/app/main-layout/pages/video/video.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoComponent: () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/components/reply-comment-modal/reply-comment-modal.component */ 6083);
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/utils/utils */ 9570);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 1432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/services/toast.service */ 6749);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/services/socket.service */ 6043);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 4656);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 7534);
/* harmony import */ var src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@shared/services/seo.service */ 1456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@shared/components/video-slider-list/video-slider-list.component */ 3937);
/* harmony import */ var _shared_components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@shared/components/tag-user-input/tag-user-input.component */ 3781);
/* harmony import */ var _shared_components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@shared/components/post-meta-data-card/post-meta-data-card.component */ 3181);
/* harmony import */ var _shared_pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@shared/pipe/date-day.pipe */ 6283);
/* harmony import */ var _shared_pipe_sanitize_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@shared/pipe/sanitize.pipe */ 3863);
























const _c0 = ["parentPostCommentElement"];
const _c1 = ["childPostCommentElement"];
const _c2 = ["userSearchDropdownRef"];
function VideoComponent_div_4_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_div_4_ng_container_4_ng_container_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const user_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.openProfile(user_r10.unique_link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", user_r10.profile_pic_name, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alt", user_r10.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](user_r10 == null ? null : user_r10.firstname);
  }
}
function VideoComponent_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 37)(2, "div", 38, 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, VideoComponent_div_4_ng_container_4_ng_container_5_Template, 5, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r7.userSearchList);
  }
}
const _c3 = function () {
  return ["fas", "magnifying-glass"];
};
function VideoComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function VideoComponent_div_4_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.searchText = $event);
    })("keyup", function VideoComponent_div_4_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.getSearchData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, VideoComponent_div_4_ng_container_4_Template, 6, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.searchText && ctx_r0.userSearchList.length);
  }
}
const _c4 = function () {
  return ["fas", "check-circle"];
};
function VideoComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 45)(3, "a")(4, "strong", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r1.videoDetails == null ? null : ctx_r1.videoDetails.profile_pic_name, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.videoDetails.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c4))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Published on ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 5, ctx_r1.videoDetails == null ? null : ctx_r1.videoDetails.created, "MMM dd,yyyy"), "");
  }
}
const _c5 = function () {
  return ["fas", "xmark"];
};
function VideoComponent_div_39_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_div_39_ng_container_4_Template_fa_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.removePostSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r16.commentData == null ? null : ctx_r16.commentData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c5));
  }
}
const _c6 = function () {
  return ["fas", "paper-plane"];
};
function VideoComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 48)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, VideoComponent_div_39_ng_container_4_Template, 4, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 51)(6, "app-tag-user-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onDataChange", function VideoComponent_div_39_Template_app_tag_user_input_onDataChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.onTagUserInputChangeEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 53)(8, "fa-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_div_39_Template_fa_icon_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.commentOnPost(ctx_r21.videoDetails.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r2.authService == null ? null : ctx_r2.authService.userDetails == null ? null : ctx_r2.authService.userDetails.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isParent && (ctx_r2.commentData == null ? null : ctx_r2.commentData.imageUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r2.commentMessageInputValue)("isShowMetaPreview", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c6));
  }
}
const _c7 = function () {
  return ["fas", "ellipsis"];
};
const _c8 = function () {
  return ["fas", "pen-to-square"];
};
const _c9 = function () {
  return ["fas", "trash-can"];
};
function VideoComponent_ng_container_40_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "fa-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 73)(5, "button", 74)(6, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_2_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const comment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.editComment(comment_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "fa-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "button", 74)(11, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_2_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const comment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r30.deleteComments(comment_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "fa-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c9));
  }
}
function VideoComponent_ng_container_40_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const comment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, comment_r22 == null ? null : comment_r22.comment), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}
function VideoComponent_ng_container_40_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 78)(2, "div", 51)(3, "app-tag-user-input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onDataChange", function VideoComponent_ng_container_40_ng_container_20_Template_app_tag_user_input_onDataChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r33.onTagUserInputChangeEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 53)(5, "fa-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_20_Template_fa_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const comment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r35.commentOnPost(ctx_r35.videoDetails.id, comment_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r25.commentMessageInputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c6));
  }
}
function VideoComponent_ng_container_40_ng_container_22_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "fa-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 73)(5, "button", 74)(6, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_22_ng_container_6_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const reply_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r40.editComment(reply_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "fa-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "button", 74)(11, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_22_ng_container_6_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const reply_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.deleteComments(reply_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "fa-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c9));
  }
}
function VideoComponent_ng_container_40_ng_container_22_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reply_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, reply_r37 == null ? null : reply_r37.comment), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}
const _c10 = function () {
  return ["fas", "thumbs-up"];
};
function VideoComponent_ng_container_40_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 80)(2, "div", 81)(3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, VideoComponent_ng_container_40_ng_container_22_ng_container_6_Template, 15, 6, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 62)(8, "h6", 63)(9, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, VideoComponent_ng_container_40_ng_container_22_ng_container_11_Template, 3, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-post-meta-data-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 83)(14, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_ng_container_22_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);
      const reply_r37 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](reply_r37.react == "L" ? ctx_r46.disLikeComments(reply_r37) : ctx_r46.likeComments(reply_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reply_r37 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", reply_r37 == null ? null : reply_r37.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r26.profileId === reply_r37.profileId && ctx_r26.sharedService.getCredentials());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", reply_r37 == null ? null : reply_r37.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", reply_r37 == null ? null : reply_r37.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("post", reply_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r26.sharedService.getCredentials());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](9, _c10))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (reply_r37 == null ? null : reply_r37.likeCount) > 0 ? reply_r37 == null ? null : reply_r37.likeCount : 0, "\u00A0Likes ");
  }
}
const _c11 = function () {
  return ["fas", "message"];
};
function VideoComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, VideoComponent_ng_container_40_ng_container_2_Template, 15, 6, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 48)(4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 61)(7, "div", 62)(8, "h6", 63)(9, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, VideoComponent_ng_container_40_ng_container_11_Template, 3, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-post-meta-data-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 66)(14, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const comment_r22 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](comment_r22.react == "L" ? ctx_r48.disLikeComments(comment_r22) : ctx_r48.likeComments(comment_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_ng_container_40_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const comment_r22 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r50.showReplySection(comment_r22 == null ? null : comment_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "fa-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Reply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, VideoComponent_ng_container_40_ng_container_20_Template, 7, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, VideoComponent_ng_container_40_ng_container_22_Template, 17, 10, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const comment_r22 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.profileId === (comment_r22 == null ? null : comment_r22.profileId) && ctx_r3.sharedService.getCredentials());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", comment_r22 == null ? null : comment_r22.ProfilePicName, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", comment_r22 == null ? null : comment_r22.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", comment_r22 == null ? null : comment_r22.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("post", comment_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r3.sharedService.getCredentials());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](14, _c10))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (comment_r22 == null ? null : comment_r22.likeCount) > 0 ? comment_r22 == null ? null : comment_r22.likeCount : 0, "\u00A0Likes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r3.sharedService.getCredentials());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](15, _c11))("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.isReply && ctx_r3.videoDetails.id === (comment_r22 == null ? null : comment_r22.postId) && ctx_r3.commentId === (comment_r22 == null ? null : comment_r22.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", comment_r22 == null ? null : comment_r22.replyCommnetsList);
  }
}
const _c12 = function () {
  return ["fas", "rotate-right"];
};
function VideoComponent_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 88)(1, "fa-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VideoComponent_div_42_div_2_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r52.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " load more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c12))("fixedWidth", true);
  }
}
function VideoComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-video-slider-list", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, VideoComponent_div_42_div_2_Template, 3, 3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("videoList", ctx_r4.videoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r4.hasMoreData);
  }
}
function VideoComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 90)(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " Get paid 1 1776 Token to Post, Reactions, Share and View and Refer family and friends to Freedom! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 94)(6, "a", 95)(7, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "a", 97)(10, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
const _c13 = function () {
  return ["fas", "calendar"];
};
const _c14 = function () {
  return ["fas", "share-alt"];
};
class VideoComponent {
  constructor(commonService, router, route, toastService, socketService, authService, renderer, modalService, spinner, sharedService, seoService, platformId) {
    this.commonService = commonService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.socketService = socketService;
    this.authService = authService;
    this.renderer = renderer;
    this.modalService = modalService;
    this.spinner = spinner;
    this.sharedService = sharedService;
    this.seoService = seoService;
    this.platformId = platformId;
    this.searchText = '';
    this.userSearchList = [];
    this.videoDetails = {};
    this.channelDetails = {};
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + 'channels';
    this.commentapiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + 'posts';
    this.searchApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + 'customers/search-user';
    this.videoList = [];
    this.isOpenCommentsPostId = null;
    this.commentList = [];
    this.replyCommentList = [];
    this.isReply = false;
    this.isReplyComments = false;
    this.commentId = null;
    this.commentData = {
      file: null,
      url: '',
      tags: [],
      meta: {}
    };
    this.isParent = false;
    this.postComment = {};
    this.isCommentsLoader = false;
    this.isPostComment = false;
    // webUrl = environment.webUrl;
    this.hasMoreData = false;
    this.commentMessageTags = [];
    this.commentMessageInputValue = '';
    this.profileId = JSON.parse(this.authService.getUserData())?.Id || null;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(this.platformId)) {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        console.log('>>>>>', id);
        if (id) {
          this.getPostDetailsById(id);
          // this.videoDetails = history?.state?.data;
          // console.log(this.videoDetails);
          // this.viewComments(id);
          // this.playvideo(id);
        }
      });
    }
    // this.router.events.subscribe((event: any) => {
    //   const id = event?.routerEvent?.url.split('/')[1];
    // });
  }

  ngOnChanges(changes) {}
  ngOnInit() {
    // this.getMyChannels();
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(this.platformId)) {
      this.getPostVideosById();
      this.viewComments(this.videoDetails?.id);
      this.socketListner();
    }
  }
  getMyChannels() {
    // this.spinner.show();
    this.commonService.getById(this.apiUrl, {
      id: this.videoDetails.profileid
    }
    // this.userData.profileId
    ).subscribe({
      next: res => {
        this.spinner.hide();
        // console.log(res);
        this.channelDetails = res[0];
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  getPostDetailsById(id) {
    this.commonService.get(`${this.apiUrl}/post/${id}`).subscribe({
      next: res => {
        this.spinner.hide();
        // console.log(res);
        this.videoDetails = res[0];
        const data = {
          title: `ReeferTube ${this.videoDetails.albumname}`,
          description: this.videoDetails.postdescription
        };
        this.seoService.updateSeoMetaData(data);
        this.playvideo(this.videoDetails.id);
        this.viewComments(this.videoDetails.id);
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  getPostVideosById() {
    this.activePage = 0;
    this.loadMore();
    // this.commonService
    //   .post(`${this.apiUrl}/posts`, { size: 15, page: 1 })
    //   .subscribe({
    //     next: (res: any) => {
    //       this.videoList = res.data;
    //       // console.log(res);
    //       // this.playvideo();
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
  }

  loadMore() {
    this.activePage++;
    // this.spinner.show();
    this.commonService.post(`${this.apiUrl}/posts`, {
      size: 15,
      page: this.activePage
    }).subscribe({
      next: res => {
        this.spinner.hide();
        if (res?.data?.length > 0) {
          this.videoList = this.videoList.concat(res.data);
        } else {
          this.hasMoreData = false;
        }
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  playvideo(id) {
    let i = setInterval(() => {
      if (this.player) {
        this.player.remove();
      }
      // console.log('enter', id);
      const isPhone = window.innerWidth <= 768;
      const config = {
        file: this.videoDetails?.streamname,
        image: this.videoDetails?.thumbfilename,
        mute: false,
        autostart: false,
        volume: 50,
        height: isPhone ? '270px' : '660px',
        // height: '640px',
        width: 'auto',
        pipIcon: 'disabled',
        preload: 'metadata',
        aspectratio: '16:9',
        autoPause: {
          viewability: false
        },
        playbackRateControls: true,
        playbackRates: [0.25, 0.50,, 0.75, 1, 1.25, 1.75, 2],
        controls: true,
        events: {
          onError: function (e) {
            console.log(e);
          }
        }
      };
      console.log('>>>>> config', JSON.stringify(config));
      this.player = jwplayer('jwVideo-' + id).setup({
        ...config
      });
      this.player.load();
      console.log('>>>>>', this.player);
      if (this.player) clearInterval(i);
    }, 1000);
  }
  onPostFileSelect(event, type) {
    if (type === 'parent') {
      this.isParent = true;
    } else {
      this.isParent = false;
    }
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
  commentOnPost(postId, commentId = null) {
    this.commentData.tags = (0,src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getTagUsersFromAnchorTags)(this.commentMessageTags);
    // const postComment = parentPostCommentElement.innerHTML;
    // console.log(this.commentData);
    if (this.isPostComment === false) {
      if (this.commentData.comment || this.commentData?.file?.name) {
        this.isPostComment = true;
        this.commentData.postId = postId;
        this.commentData.profileId = this.profileId;
        if (commentId) {
          this.commentData['parentCommentId'] = commentId;
        }
        this.addComment();
        this.commentMessageInputValue = null;
      } else {
        this.toastService.danger('Please enter comment');
      }
    }
  }
  // viewComments(id: number): void {
  //   this.isOpenCommentsPostId = id;
  //   this.isCommentsLoader = true;
  //   const data = {
  //     postId: id,
  //     profileId: this.profileId,
  //   };
  //   this.commonService.post(`${this.commentapiUrl}/comments/`, data).subscribe({
  //     next: (res) => {
  //       // console.log('comments DATA', res);
  //       if (res) {
  //         this.commentList = res.data.commmentsList.map((ele: any) => ({
  //           ...ele,
  //           replyCommnetsList: res.data.replyCommnetsList.filter((ele1) => {
  //             return ele.id === ele1.parentCommentId;
  //           }),
  //         }));
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       this.isCommentsLoader = false;
  //     },
  //   });
  // }
  viewComments(id) {
    // this.isExpand = this.isOpenCommentsPostId == id ? false : true;
    // this.isOpenCommentsPostId = id;
    // if (!this.isExpand) {
    //   this.isOpenCommentsPostId = null;
    // } else {
    //   this.isOpenCommentsPostId = id;
    // }
    // this.spinner.show();
    this.isOpenCommentsPostId = id;
    this.isCommentsLoader = true;
    const data = {
      postId: id,
      profileId: this.profileId
    };
    this.commonService.post(`${this.commentapiUrl}/comments/`, data).subscribe({
      next: res => {
        if (res) {
          // this.spinner.hide();
          // this.commentList = res.data.commmentsList.filter((ele: any) => {
          //   res.data.replyCommnetsList.some((element: any) => {
          //     if (ele?.id === element?.parentCommentId) {
          //       ele?.replyCommnetsList.push(element);
          //       return ele;
          //     }
          //   });
          // });
          this.commentList = res.data.commmentsList.map(ele => ({
            ...ele,
            replyCommnetsList: res.data.replyCommnetsList.filter(ele1 => {
              return ele.id === ele1.parentCommentId;
            })
          }));
          const replyCount = res.data.replyCommnetsList.filter(ele1 => {
            return ele1.parentCommentId;
          });
        }
      },
      error: error => {
        console.log(error);
        ;
      },
      complete: () => {
        this.isCommentsLoader = false;
      }
    });
  }
  // addComment(): void {
  //   if (this.commentData?.parentCommentId) {
  //     this.socketService.commentOnPost(this.commentData, (data) => {
  //       this.toastService.success('replied on comment');
  //       this.postComment = '';
  //       this.commentData = {};
  //       // childPostCommentElement.innerText = '';
  //     });
  //     this.socketService.socket.on('comments-on-post', (data: any) => {
  //       this.isPostComment = false;
  //       this.commentList.map((ele: any) =>
  //         data.filter((ele1) => {
  //           if (ele.id === ele1.parentCommentId) {
  //             ele?.['replyCommnetsList'].push(ele1);
  //             return ele;
  //           }
  //         })
  //       );
  //       this.isReply = false;
  //       this.commentId = null;
  //     });
  //     this.viewComments(this.commentData?.postId);
  //   } else {
  //     this.socketService.commentOnPost(this.commentData, (data) => {
  //       this.toastService.success('comment added on post');
  //       this.commentData.comment = '';
  //       this.commentData = {};
  //       // parentPostCommentElement.innerText = '';
  //     });
  //     this.socketService.socket.on('comments-on-post', (data: any) => {
  //       console.log('commnets data', data);
  //       this.isPostComment = false;
  //       // this.commentList.push(data[0]);
  //       this.commentData.comment = '';
  //       this.commentMessageInputValue = ''
  //       setTimeout(() => {
  //         this.commentMessageInputValue = ''
  //       }, 100);
  //       this.commentData = {};
  //       this.commentData.tags = [];
  //       // parentPostCommentElement.innerText = '';
  //     });
  //     this.viewComments(this.commentData?.postId);
  //   }
  // }
  // addComment(): void {
  //   if (this.commentData) {
  //     this.socketService.commentOnPost(this.commentData, (data) => {
  //       this.postComment = '';
  //       this.commentData = {};
  //       this.commentData.meta = {};
  //       this.commentData.comment = '';
  //       this.commentData.tags = [];
  //       this.commentMessageTags = [];
  //       // childPostCommentElement.innerText = '';
  //     });
  //     this.commentMessageInputValue = '';
  //     setTimeout(() => {
  //       this.commentMessageInputValue = '';
  //     }, 100);
  //     this.commentData = {};
  //     this.viewComments(this.videoDetails?.id);
  //   }
  //   //  else {
  //   //   this.socketService.commentOnPost(this.commentData, (data) => {
  //   //     this.toastService.success('comment added on post');
  //   //     this.commentData.comment = '';
  //   //     this.commentData = {}
  //   //     // parentPostCommentElement.innerText = '';
  //   //     return data;
  //   //   });
  //   // }
  // }
  addComment() {
    if (this.commentData) {
      this.socketService.commentOnPost(this.commentData, data => {
        this.postComment = '';
        this.commentData = {};
        this.commentData.comment = '';
        this.commentData.tags = [];
        this.commentMessageTags = [];
        // childPostCommentElement.innerText = '';
      });

      this.commentMessageInputValue = '';
      setTimeout(() => {
        this.commentMessageInputValue = '';
      }, 100);
      this.commentData = {};
      this.isReply = false;
      this.viewComments(this.videoDetails?.id);
    }
    //  else {
    //   this.socketService.commentOnPost(this.commentData, (data) => {
    //     this.toastService.success('comment added on post');
    //     this.commentData.comment = '';
    //     this.commentData = {}
    //     // parentPostCommentElement.innerText = '';
    //     return data;
    //   });
    // }
  }

  showReplySection(id) {
    this.isReply = this.commentId == id ? false : true;
    this.commentId = id;
    if (!this.isReply) {
      this.commentId = null;
    }
    this.isReplyComments = false;
  }
  showReplyedComments(id) {
    this.isReplyComments = this.commentId == id ? false : true;
    this.commentId = id;
    if (!this.isReplyComments) {
      this.commentId = null;
    }
    this.isReply = false;
  }
  likeComments(comment) {
    comment.likeCount = comment.likeCount + 1;
    comment.react = 'L';
    const data = {
      postId: comment.postId,
      commentId: comment.id,
      profileId: Number(this.profileId),
      toProfileId: Number(comment.profileId),
      likeCount: comment.likeCount,
      actionType: 'L'
    };
    this.socketService.likeFeedComments(data, res => {
      return;
    });
  }
  disLikeComments(comment) {
    comment.likeCount = comment.likeCount - 1;
    comment.react = null;
    const data = {
      postId: comment.postId,
      commentId: comment.id,
      profileId: Number(this.profileId),
      toProfileId: Number(comment.profileId),
      likeCount: comment.likeCount
    };
    this.socketService.likeFeedComments(data, res => {
      return;
    });
  }
  // editComment(comment): void {
  //   if (comment.parentCommentId) {
  //     this.renderer.setProperty(
  //       this.childPostCommentElement?.nativeElement,
  //       'innerHTML',
  //       comment.comment
  //     );
  //     this.commentData['id'] = comment.id
  //     if (comment.imageUrl) {
  //       this.commentData['imageUrl'] = comment.imageUrl
  //       this.isParent = true;
  //     }
  //   } else {
  //     this.renderer.setProperty(
  //       this.parentPostCommentElement?.nativeElement,
  //       'innerHTML',
  //       comment.comment
  //     );
  //     this.commentData['id'] = comment.id
  //     if (comment.imageUrl) {
  //       this.commentData['imageUrl'] = comment.imageUrl
  //       this.isParent = true;
  //     }
  //   }
  //   console.log(comment);
  // }
  editComment(comment) {
    if (comment.parentCommentId) {
      const modalRef = this.modalService.open(src_app_shared_components_reply_comment_modal_reply_comment_modal_component__WEBPACK_IMPORTED_MODULE_0__.ReplyCommentModalComponent, {
        centered: true
      });
      modalRef.componentInstance.title = 'Edit Comment';
      modalRef.componentInstance.confirmButtonLabel = 'Comment';
      modalRef.componentInstance.cancelButtonLabel = 'Cancel';
      modalRef.componentInstance.data = comment;
      modalRef.result.then(res => {
        if (res) {
          // console.log('resDATA', res);
          this.commentData['tags'] = res?.tags;
          this.commentData.comment = res?.comment;
          this.commentData.postId = res?.postId;
          this.commentData.profileId = res?.profileId;
          this.commentData['id'] = res?.id;
          this.commentData.parentCommentId = res?.parentCommentId;
          this.addComment();
        }
      });
    } else {
      this.isReply = false;
      this.commentMessageInputValue = comment?.comment;
      this.commentData['id'] = comment.id;
      if (comment.imageUrl) {
        this.commentData['imageUrl'] = comment.imageUrl;
        this.isParent = true;
      }
    }
    // console.log(comment);
  }

  deleteComments(comments) {
    this.commonService.delete(`${this.commentapiUrl}/comments/${comments.id}`).subscribe({
      next: res => {
        this.toastService.success(res.message);
        this.viewComments(comments.postId);
      },
      error: error => {
        console.log(error);
        this.toastService.danger(error.message);
      }
    });
  }
  getSearchData1() {
    this.commonService.get(`${this.searchApi}?searchText=${this.searchText}`).subscribe({
      next: res => {
        if (res?.data?.length > 0) {
          this.userSearchList = res.data;
          console.log(' this.userList', this.userSearchList);
          this.userSearchNgbDropdown.open();
        } else {
          this.userSearchList = [];
          this.userSearchNgbDropdown.close();
        }
      },
      error: error => {
        this.userSearchList = [];
        this.userSearchNgbDropdown.close();
        console.log(error);
      }
    });
  }
  getSearchData() {
    const search = this.searchText;
    this.commonService.post(`${this.apiUrl}/search-all`, {
      search
    }).subscribe({
      next: res => {
        if (res) {
          this.userSearchList = res.channels;
          this.userSearchNgbDropdown.open();
          console.log(res);
        } else {
          this.userSearchList = [];
          this.userSearchNgbDropdown.close();
        }
      },
      error: error => {
        this.userSearchList = [];
        this.userSearchNgbDropdown.close();
        console.log(error);
      }
    });
  }
  openProfile(Id) {
    const url = `https://tube.freedom.buzz/channel/${Id}`;
    window.open(url, '_blank');
  }
  onTagUserInputChangeEvent(data) {
    this.commentData.comment = data?.html;
    this.commentData.meta = data?.meta;
    this.commentMessageTags = data?.tags;
    console.log(this.commentData, data);
  }
  socketListner() {
    this.socketService.socket.on('likeOrDislikeComments', res => {
      console.log('likeOrDislikeComments', res);
      if (res[0]) {
        if (res[0].parentCommentId) {
          // let index = this.commentList.findIndex(obj => obj.id === res[0].parentCommentId);
          // let index1 = this.commentList.findIndex(obj => obj.replyCommnetsList.findIndex(ele => ele.id === res[0].id));
          // if (index1 !== -1 && index !== -1) {
          //   this.commentList[index].replyCommnetsList[index1].likeCount = res[0]?.likeCount;
          // }
          this.commentList.map(ele => res.filter(ele1 => {
            if (ele.id === ele1.parentCommentId) {
              let index = ele?.['replyCommnetsList'].findIndex(obj => obj.id === res[0].id);
              if (index !== -1) {
                return ele['replyCommnetsList'][index].likeCount = res[0]?.likeCount;
              } else {
                return ele;
              }
            }
          }));
        } else {
          let index = this.commentList.findIndex(obj => obj.id === res[0].id);
          if (index !== -1) {
            this.commentList[index].likeCount = res[0].likeCount;
          }
        }
        // if (this.post.id === res[0]?.id) {
        //   this.post.likescount = res[0]?.likescount;
        // }
      }
    });

    this.socketService.socket.on('comments-on-post', data => {
      this.isPostComment = false;
      console.log('comments-on-post', data[0]);
      if (data[0]?.parentCommentId) {
        this.commentList.map(ele => data.filter(ele1 => {
          if (ele.id === ele1.parentCommentId) {
            let index = ele?.['replyCommnetsList'].findIndex(obj => obj.id === data[0].id);
            if (!ele?.['replyCommnetsList'][index]) {
              ele?.['replyCommnetsList'].push(ele1);
              return ele;
            } else {
              return ele;
            }
          }
        }));
      } else {
        let index = this.commentList.findIndex(obj => obj.id === data[0].id);
        if (!this.commentList[index]) {
          this.commentList.push(data[0]);
        }
        // this.viewComments(data[0]?.postId);
      }
    });
  }

  stripTags(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  }
  static #_ = this.ɵfac = function VideoComponent_Factory(t) {
    return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_7__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: VideoComponent,
    selectors: [["app-video"]],
    viewQuery: function VideoComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.parentPostCommentElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.childPostCommentElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.userSearchNgbDropdown = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵNgOnChangesFeature"]],
    decls: 45,
    vars: 18,
    consts: [[1, "video-block-right-list", "section-padding"], [1, "row", "mb-4"], [1, "col-md-9"], [1, "d-xl-flex", "column-gap-2", "column-gap-xxl-4", "col-12", "col-md-12", "col-lg-8", "m-auto", "px-4", "mb-4", "justify-content-center", "mb-view-left-txt", "c-searchbar"], ["class", "form-inline osahan-navbar-search", 4, "ngIf"], [1, "single-video"], ["loading", "lazy", 1, "w-100", "c-height", 3, "id"], [1, "video-block", "section-padding"], [1, "single-video-left"], [1, "single-video-title", "box", "mb-3"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-column"], [1, "mb-0"], [3, "icon", "fixedWidth"], ["ngbTooltip", "Coming Soon!", "placement", "bottom", 1, "d-flex", "align-items-center", "cursor"], [1, "me-1", "font-20-px"], ["class", "single-video-author box mb-3", 4, "ngIf"], [1, "single-video-info-content", "box", "mb-3"], [1, "video-description"], [1, "sub-text", "c-width"], [1, "box", "mb-3", "single-video-comment-tabs"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "retro-comments-tab", 1, "nav-link", "active"], [1, "tab-content"], ["id", "retro-comments", "role", "tabpanel", "aria-labelledby", "retro-comments-tab", 1, "tab-pane", "fade", "show", "active"], [1, "reviews-members", "pt-0"], ["class", "media", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-md-3"], ["class", "video-slider-right-list", 4, "ngIf", "ngIfElse"], ["noCredentials", ""], [1, "form-inline", "osahan-navbar-search"], [1, "input-group", "form-control", "c-input-border"], [1, "m-1", 3, "icon"], ["type", "text", "autocomplete", "off", "placeholder", "Search for...", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngIf"], [1, "col-10", "pt-1", "m-auto"], ["ngbDropdown", "", 1, "c-search-dropdown"], ["userSearchDropdownRef", ""], ["ngbDropdownMenu", "", 1, "search-user-list", "w-100"], ["ngbDropdownItem", "", "role", "button", 1, "d-flex", "gap-3", "pe-auto", 3, "click"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", 1, "w-32-px", "h-32-px", "rounded", 3, "src", "alt"], [1, "single-video-author", "box", "mb-3"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", "alt", "", 1, "img-fluid", 3, "src"], [1, "d-flex", "align-items-center"], [1, "header-text", "me-2"], ["title", "", "data-placement", "top", "data-toggle", "tooltip", "data-original-title", "Verified"], [1, "media"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='/assets/dummy/11.jpg';", "alt", "icon", 1, "me-3", 3, "src"], [1, "media-body", "gap-2", "align-items-center"], [1, "d-flex", "align-items-center", "form-members-body"], ["placeholder", "", 3, "value", "isShowMetaPreview", "onDataChange"], [1, "file-input", "mx-2", "mx-sm-3", "gap-1", "gap-md-2", "cursor"], ["role", "button", 1, "font-20-px", "text-primary", 3, "icon", "click"], [1, "form-members-footer", "mt-2"], [1, "position-relative", "w-52-px", "h-52-px", "mb-2"], ["loading", "lazy", "data-src", "", "onerror", "this.onerror=null;this.src='/assets/dummy/11.jpg';", "alt", "icon", 1, "w-100", "h-100", "rounded-4", 3, "src"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "bg-danger", "p-1", "font-12-px", "c-pointer", "text-white", 3, "icon", "click"], [1, "reviews-members"], ["onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", "alt", "icon", 1, "me-3", 3, "src"], [1, "media-body"], [1, "reviews-members-header"], [1, "mb-1"], [1, "text-black"], [3, "post"], [1, "reviews-members-footer", "d-flex", "align-items-center"], [1, "total-like", "me-2", "cursor", 3, "disabled", "click"], [1, "total-like", "cursor", 3, "disabled", "click"], ["type", "button", 3, "icon", "fixedWidth"], [1, "float-end"], ["ngbDropdown", "", 1, "c-dropdown"], ["role", "button", "ngbDropdownToggle", "", 1, "font-20-px", "m-0", 3, "icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", ""], [1, "droplist", "d-flex", "align-items-center", "gap-2", 3, "click"], [3, "icon"], [1, "reviews-members-body", 3, "innerHTML"], [1, "media-body", "ps-5", "gap-2", "align-items-center", "pt-4"], ["placeholder", "Write something to reply..", 3, "value", "onDataChange"], [1, "ms-5"], [1, "d-flex", "mx-sm-5", "mt-2", "mt-sm-4", "top-area"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='assets/default-profile.jpg';", "alt", "icon", 1, "me-3", 3, "src"], [1, "reviews-members-footer"], [1, "total-like", "text-primary", "cursor", 3, "disabled", "click"], [1, "video-slider-right-list"], [3, "videoList"], ["class", "d-flex flex-column text-center justify-content-center mb-2", 4, "ngIf"], [1, "d-flex", "flex-column", "text-center", "justify-content-center", "mb-2"], [1, "font-28-px", "cursor", 3, "icon", "fixedWidth", "click"], [1, "right-sidebar", "profile-sidebar", "cus-scrollbar", "d-flex", "flex-column", "w-400-px", "shadow"], [1, "dashboard-img", "mb-5", "mt-2"], ["src", "/assets/img/freedom-dashboard.png", 1, "w-100", "rounded-3"], [1, "mt-3", "text-start", "font-16-px"], [1, "w-100", "d-grid"], ["href", "https://freedom.buzz/login"], [1, "btn", "btn-success", "w-100", "mb-2"], ["href", "https://freedom.buzz/register"], [1, "btn", "btn-primary", "w-100"]],
    template: function VideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, VideoComponent_div_4_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h2")(13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, " Uploaded ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "dateDay");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 14)(21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, VideoComponent_div_24_Template, 11, 9, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 17)(26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Video Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 18)(29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 20)(32, "ul", 21)(33, "li", 22)(34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "video Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 24)(37, "div", 25)(38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, VideoComponent_div_39_Template, 10, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, VideoComponent_ng_container_40_Template, 23, 16, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, VideoComponent_div_42_Template, 3, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, VideoComponent_ng_template_43_Template, 12, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sharedService.getCredentials());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", "jwVideo-" + (ctx.videoDetails == null ? null : ctx.videoDetails.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.videoDetails == null ? null : ctx.videoDetails.albumname);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](16, _c13))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 14, ctx.videoDetails == null ? null : ctx.videoDetails.postcreationdate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](17, _c14))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.videoDetails == null ? null : ctx.videoDetails.unique_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.stripTags(ctx.videoDetails == null ? null : ctx.videoDetails.postdescription));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sharedService.getCredentials());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.commentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sharedService == null ? null : ctx.sharedService.getCredentials())("ngIfElse", _r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownItem, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FaIconComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltip, _shared_components_video_slider_list_video_slider_list_component__WEBPACK_IMPORTED_MODULE_9__.VideoSliderListComponent, _shared_components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_10__.TagUserInputComponent, _shared_components_post_meta_data_card_post_meta_data_card_component__WEBPACK_IMPORTED_MODULE_11__.PostMetaDataCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _shared_pipe_date_day_pipe__WEBPACK_IMPORTED_MODULE_12__.DateDayPipe, _shared_pipe_sanitize_pipe__WEBPACK_IMPORTED_MODULE_13__.NoSanitizePipe],
    styles: [".top-area[_ngcontent-%COMP%] {\n  background: var(--link-bg);\n  color: var(--text-color);\n  border-radius: 10px;\n  padding: 10px 20px;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-color);\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-color);\n}\n\n.c-width[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.c-input-border[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--bg-secondary);\n  width: 100%;\n  color: var(--text-color);\n}\n.c-input-border[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.right-sidebar.cus-scrollbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 107px;\n  max-height: calc(100vh - 112px);\n  overflow-x: auto;\n  padding: 30px !important;\n}\n\n.list-unstyled[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border: 1px solid #ccc;\n  font-size: 11px;\n  text-align: center;\n  display: flex;\n}\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n  .c-searchbar .input-group {\n  flex-wrap: unset;\n}\n  .c-search-dropdown .dropdown-toggle::after {\n  display: none;\n}\n  .c-search-dropdown .dropdown-menu {\n  border: 1px solid var(--link-color);\n  border-radius: 5px;\n  max-height: 332px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n  .c-search-dropdown .dropdown-menu .dropdown-item {\n  font-size: 16px;\n}\n  .sub-text span,   .sub-text h1,   .sub-text a,   .sub-text p {\n  font-size: 15px;\n  color: var(--text-color) !important;\n  background-color: unset !important;\n}\n@media (max-width: 770px) {\n    .osahan-navbar-search .form-control {\n    max-width: unset !important;\n    width: unset !important;\n  }\n}\n  .c-description-height span,   .c-description-height h1 {\n  color: var(--text-color) !important;\n  background-color: unset !important;\n}\n  .style-scope {\n  color: var(--text-color) !important;\n  background-color: unset !important;\n}\n  .comment-input {\n  font-size: 16px;\n  outline: none;\n  align-self: center;\n}\n  label {\n  margin: 0;\n}\n  .c-dropdown .dropdown-toggle::after {\n  display: none;\n}\n  .c-dropdown .dropdown-menu {\n  border: 1px solid var(--link-color);\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvcGFnZXMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUVFO0VBQ0Usd0JBQUE7QUFBSjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtBQUFOOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjtBQU1JO0VBQ0UsYUFBQTtBQUpOO0FBT0k7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFRSTtFQUNFLGVBQUE7QUFOTjtBQVlJOzs7O0VBSUUsZUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFWTjtBQWNFO0VBRUk7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0VBYk47QUFDRjtBQWlCRTs7RUFFRSxtQ0FBQTtFQUNBLGtDQUFBO0FBZko7QUFrQkU7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FBaEJKO0FBa0JFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWhCSjtBQW1CRTtFQUNFLFNBQUE7QUFqQko7QUFxQkk7RUFDRSxhQUFBO0FBbkJOO0FBc0JJO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtBQXBCTiIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGluay1iZyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuLnN1Yi10ZXh0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4uYy13aWR0aCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmMtaW5wdXQtYm9yZGVyIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnJpZ2h0LXNpZGViYXIuY3VzLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTA3cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtdW5zdHlsZWQge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG46Om5nLWRlZXAge1xyXG4gIC5jLXNlYXJjaGJhciAuaW5wdXQtZ3JvdXAge1xyXG4gICAgZmxleC13cmFwOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5jLXNlYXJjaC1kcm9wZG93biB7XHJcbiAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5rLWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMzJweDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3ViLXRleHQge1xyXG5cclxuICAgIHNwYW4sXHJcbiAgICBoMSxcclxuICAgIGEsXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgLm9zYWhhbi1uYXZiYXItc2VhcmNoIHtcclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jLWRlc2NyaXB0aW9uLWhlaWdodHsgXHJcbiAgc3BhbixcclxuICBoMXtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnN0eWxlLXNjb3Ble1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29tbWVudC1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmMtZHJvcGRvd24ge1xyXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluay1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6822:
/*!*********************************************************!*\
  !*** ./src/app/main-layout/pages/video/video.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoModule: () => (/* binding */ VideoModule)
/* harmony export */ });
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-routing.module */ 2209);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/shared.module */ 2661);
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component */ 6122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




class VideoModule {
  static #_ = this.ɵfac = function VideoModule_Factory(t) {
    return new (t || VideoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: VideoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_video_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VideoModule, {
    declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__.VideoComponent],
    imports: [_video_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main-layout_pages_video_video_module_ts.js.map