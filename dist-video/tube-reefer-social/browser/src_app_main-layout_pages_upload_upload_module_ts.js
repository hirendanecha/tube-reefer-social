"use strict";
(self["webpackChunktube_reefer_social"] = self["webpackChunktube_reefer_social"] || []).push([["src_app_main-layout_pages_upload_upload_module_ts"],{

/***/ 2764:
/*!*******************************************************************!*\
  !*** ./src/app/main-layout/pages/upload/upload-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadRoutingModule: () => (/* binding */ UploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.component */ 8241);
/* harmony import */ var _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-video/upload-video.component */ 2665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent
}, {
  path: 'details',
  component: _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_1__.UploadVideoComponent
}];
class UploadRoutingModule {
  static #_ = this.ɵfac = function UploadRoutingModule_Factory(t) {
    return new (t || UploadRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: UploadRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UploadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 2665:
/*!*********************************************************************************!*\
  !*** ./src/app/main-layout/pages/upload/upload-video/upload-video.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadVideoComponent: () => (/* binding */ UploadVideoComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 1432);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 4656);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/services/toast.service */ 6749);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@shared/components/tag-user-input/tag-user-input.component */ 3781);
/* harmony import */ var _shared_pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@shared/pipe/time-duration.pipe */ 3712);












const _c0 = function () {
  return ["fas", "file-upload"];
};
function UploadVideoComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadVideoComponent_div_39_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UploadVideoComponent_div_39_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onFileSelected($event));
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
function UploadVideoComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadVideoComponent_ng_container_40_Template_fa_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.removePostSelectedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.postData == null ? null : ctx_r1.postData.thumbfilename, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));
  }
}
class UploadVideoComponent {
  constructor(commonService, authService, toasterService, spinner, router) {
    this.commonService = commonService;
    this.authService = authService;
    this.toasterService = toasterService;
    this.spinner = spinner;
    this.router = router;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'posts/create-post';
    this.videoSize = 0;
    this.uploadProgress = 80;
    this.videoUrl = '';
    this.postData = {
      profileid: null,
      communityId: null,
      postdescription: '',
      tags: [],
      imageUrl: '',
      videoduration: '',
      thumbfilename: null,
      streamname: null,
      posttype: 'V'
    };
    this.postMessageInputValue = '';
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
    const userData = JSON.parse(this.authService.getUserData());
    this.postData.profileid = userData.Id;
    if (history.state.data) {
      this.uploadVideoData = {
        ...history.state.data
      };
      this.videoSize = this.uploadVideoData?.file?.size / 1024 / 1024;
      this.postData.videoduration = Math.round(this.uploadVideoData.duration);
      // this.videoUrl = URL.createObjectURL(this.uploadVideoData.file);
      this.postData.streamname = this.uploadVideoData?.streamname;
    } else {
      this.router.navigate(['/upload']);
    }
  }
  ngOnInit() {}
  onSaveClick() {
    this.spinner.show();
    this.postData.tags = this.getTagUsersFromAnchorTags(this.postMessageTags);
    this.commonService.upload(this.postData?.file).subscribe({
      next: res => {
        this.spinner.hide();
        if (res?.body) {
          this.postData.thumbfilename = res?.body?.url;
          this.createPost();
        }
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  convertBase64ToImage(image) {
    const binaryString = window.atob(image.split(',')[1]);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], {
      type: 'image/png'
    });
    this.postData.thumbfilename = URL.createObjectURL(blob);
  }
  onTagUserInputChangeEvent(data) {
    this.postData.postdescription = data?.html;
    this.postMessageTags = data?.tags;
  }
  createPost() {
    this.spinner.show();
    if (this.postData?.streamname && this.postData.thumbfilename) {
      this.commonService.post(this.apiUrl, this.postData).subscribe({
        next: res => {
          this.spinner.hide();
          this.postData = null;
          this.uploadVideoData = null;
          this.router.navigate(['/home']);
          this.toasterService.success('Post created successfully');
        },
        error: error => {
          this.spinner.hide();
          console.log(error);
        }
      });
    }
  }
  onFileSelected(event) {
    this.postData.file = event.target?.files?.[0];
    this.postData.thumbfilename = URL.createObjectURL(event.target.files[0]);
  }
  removePostSelectedFile() {
    this.postData.thumbfilename = null;
  }
  static #_ = this.ɵfac = function UploadVideoComponent_Factory(t) {
    return new (t || UploadVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: UploadVideoComponent,
    selectors: [["app-upload-video"]],
    decls: 44,
    vars: 14,
    consts: [[1, "row"], [1, "col-lg-12"], [1, "main-title"], [1, "col-lg-2"], ["id", "playerVideo", "controls", "", 1, "w-100", "h-160-px", 3, "src"], [1, "col-lg-10"], [1, "osahan-title"], [1, "osahan-size"], [1, "osahan-form"], [1, "form-group"], ["for", "e1"], [1, "text-danger"], ["type", "text", "placeholder", "enter video title", "id", "e1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "e2"], ["placeholder", "", 3, "value", "onDataChange"], [4, "ngIf"], [1, "osahan-area", "text-center", "mt-5"], [1, "btn", "btn-outline-primary", "float-end", 3, "disabled", "click"], [1, "text-primary", "cursor", "font-24-px", 3, "icon", "click"], ["type", "file", "id", "fileInput", "accept", "image/*", 1, "d-none", 3, "change"], ["uploadImage", ""], [1, "position-relative", "w-100-px", "h-100-px"], ["loading", "lazy", "alt", "icon", "onerror", "this.onerror=null;", 1, "w-100", "h-100", "rounded-4", 3, "src"], ["role", "button", 1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "bg-danger", "p-1", "font-12-px", "c-pointer", "c-icon-color", 3, "icon", "click"]],
    template: function UploadVideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Upload Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "timeDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "div", 8)(18, "div", 0)(19, "div", 1)(20, "div", 9)(21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Video Title (max 50 characters)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UploadVideoComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.postData.albumname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 1)(27, "div", 9)(28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Video Description (max 500 characters)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "app-tag-user-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDataChange", function UploadVideoComponent_Template_app_tag_user_input_onDataChange_32_listener($event) {
          return ctx.onTagUserInputChangeEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 1)(34, "div", 9)(35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Upload Thumbnail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, UploadVideoComponent_div_39_Template, 4, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, UploadVideoComponent_ng_container_40_Template, 4, 3, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 16)(42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadVideoComponent_Template_button_click_42_listener() {
          return ctx.onSaveClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Post Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.postData == null ? null : ctx.postData.streamname, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.uploadVideoData.file.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](13, 9, ctx.videoSize, "1.2-2"), " . ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 12, ctx.postData.videoduration), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.postData.albumname);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.postMessageInputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.postData == null ? null : ctx.postData.thumbfilename));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.postData == null ? null : ctx.postData.thumbfilename);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.postData.thumbfilename);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _shared_components_tag_user_input_tag_user_input_component__WEBPACK_IMPORTED_MODULE_4__.TagUserInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _shared_pipe_time_duration_pipe__WEBPACK_IMPORTED_MODULE_5__.TimeDurationPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8241:
/*!**************************************************************!*\
  !*** ./src/app/main-layout/pages/upload/upload.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadComponent: () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/services/toast.service */ 6749);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 1432);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 4656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);








const _c0 = ["videoPlayer"];
const _c1 = function () {
  return ["fas", "file-upload"];
};
function UploadComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_div_4_Template_fa_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r4.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_div_4_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
  }
}
function UploadComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "video", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("play", function UploadComponent_div_5_Template_video_play_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onVideoPlay($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.selectedFile, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function UploadComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.uploadFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UploadComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.removeVideo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class UploadComponent {
  constructor(router, toastService, commonService, spinner, authService) {
    this.router = router;
    this.toastService = toastService;
    this.commonService = commonService;
    this.spinner = spinner;
    this.authService = authService;
    this.useDetails = {};
    this.selectedFile = {};
    this.postData = {
      profileid: '',
      communityId: '',
      file: {},
      streamname: '',
      duration: null,
      thumbfilename: ''
    };
    this.useDetails = JSON.parse(this.authService.getUserData());
    if (this.useDetails?.MediaApproved === 1) {
      return;
    } else {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
    this.postData = {};
    this.selectedFile = null;
  }
  onFileSelected(event) {
    if (event.target?.files?.[0].type.includes('video/mp4')) {
      this.postData.file = event.target?.files?.[0];
      this.selectedFile = URL.createObjectURL(event.target.files[0]);
    } else {
      this.toastService.warring('please upload only mp4 files');
    }
  }
  uploadFile() {
    if (this.postData.file) {
      const maxSize = 100 * 1024 * 1024; // 100MB (adjust as needed)
      this.spinner.show();
      if (this.postData.file.size <= maxSize) {
        this.commonService.upload(this.postData?.file).subscribe({
          next: res => {
            this.spinner.hide();
            if (res?.body) {
              this.postData.streamname = res?.body?.url;
              this.router.navigate(['/upload/details'], {
                state: {
                  data: this.postData
                }
              });
            }
          },
          error: error => {
            this.spinner.hide();
            console.log(error);
          }
        });
      } else {
        this.spinner.hide();
        this.toastService.danger('Invalid file format or size.');
      }
    }
  }
  onVideoPlay(e) {
    this.postData.duration = e.timeStamp;
  }
  removeVideo() {
    this.postData.file = null;
    this.selectedFile = null;
  }
  static #_ = this.ɵfac = function UploadComponent_Factory(t) {
    return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UploadComponent,
    selectors: [["app-upload"]],
    viewQuery: function UploadComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.videoPlayer = _t.first);
      }
    },
    decls: 11,
    vars: 4,
    consts: [["id", "content-wrapper"], [1, "pt-5", "pb-5"], [1, "row"], [1, "col-md-8", "mx-auto", "text-center", "upload-video", "pt-5", "pb-5"], [4, "ngIf"], [1, "mt-1", "cursor"], [1, "mt-3"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger ms-3", 3, "click", 4, "ngIf"], [1, "text-primary", "cursor", 3, "icon", "click"], ["type", "file", "id", "fileInput", "accept", "video/mp4*", 1, "d-none", 3, "change"], ["uploadVideo", ""], ["controls", "", 1, "c-height", 3, "src", "play"], ["videoPlayer", ""], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-danger", "ms-3", 3, "click"]],
    template: function UploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UploadComponent_div_4_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UploadComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Select Video files to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UploadComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, UploadComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.postData.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
    styles: [".c-height[_ngcontent-%COMP%] {\n  max-height: 450px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1oZWlnaHR7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4676:
/*!***********************************************************!*\
  !*** ./src/app/main-layout/pages/upload/upload.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadModule: () => (/* binding */ UploadModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/shared.module */ 2661);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-routing.module */ 2764);
/* harmony import */ var _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-video/upload-video.component */ 2665);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ 8241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class UploadModule {
  static #_ = this.ɵfac = function UploadModule_Factory(t) {
    return new (t || UploadModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: UploadModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UploadModule, {
    declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__.UploadComponent, _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_2__.UploadVideoComponent],
    imports: [_upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main-layout_pages_upload_upload_module_ts.js.map