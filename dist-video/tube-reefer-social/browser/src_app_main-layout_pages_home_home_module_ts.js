"use strict";
(self["webpackChunktube_reefer_social"] = self["webpackChunktube_reefer_social"] || []).push([["src_app_main-layout_pages_home_home_module_ts"],{

/***/ 1285:
/*!***************************************************************!*\
  !*** ./src/app/main-layout/pages/home/home-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'channel/:name',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 376:
/*!**********************************************************!*\
  !*** ./src/app/main-layout/pages/home/home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/services/common.service */ 1432);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/services/socket.service */ 6043);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/services/auth.service */ 4656);
/* harmony import */ var src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/services/share.service */ 7534);
/* harmony import */ var src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/services/seo.service */ 1456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/video-card/video-card.component */ 841);
/* harmony import */ var _shared_components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/components/lf-dashboard/lf-dashboard.component */ 2038);
/* harmony import */ var _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/components/channels-card/channels-card.component */ 5892);














function HomeComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No search result found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function HomeComponent_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_ng_container_5_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["fas", "play-circle"];
};
function HomeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-video-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomeComponent_ng_container_5_div_6_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.channelData.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("videoData", ctx_r1.videoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.hasMoreData && ctx_r1.videoList.length);
  }
}
function HomeComponent_ng_container_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_ng_container_6_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.recommendedLoadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Featured Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-video-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, HomeComponent_ng_container_6_div_9_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("videoData", ctx_r2.recommendedVideoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.hasRecommendedData && ctx_r2.recommendedVideoList.length);
  }
}
function HomeComponent_ng_container_7_app_channels_card_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-channels-card", 24);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("channelList", ctx_r10.searchChannelData);
  }
}
function HomeComponent_ng_container_7_app_video_card_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-video-card", 8);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("videoData", ctx_r11.searchPostData);
  }
}
const _c1 = function () {
  return ["fas", "xmark"];
};
function HomeComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_ng_container_7_Template_fa_icon_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.clearSearchData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ul", 17)(11, "li", 18)(12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_ng_container_7_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.switchTab("Channels"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li", 20)(15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_ng_container_7_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.switchTab("Videos"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, HomeComponent_ng_container_7_app_channels_card_17_Template, 1, 1, "app-channels-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, HomeComponent_ng_container_7_app_video_card_18_Template, 1, 1, "app-video-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("About ", ctx_r3.searchResults, " results");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Search result for ", ctx_r3.searchText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r3.activeTab === "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r3.activeTab === "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === "Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === "Videos");
  }
}
class HomeComponent {
  constructor(route, commonService, spinner, socketService, authService, shareService,
  // private seoService: SeoService,
  seoService) {
    this.route = route;
    this.commonService = commonService;
    this.spinner = spinner;
    this.socketService = socketService;
    this.authService = authService;
    this.shareService = shareService;
    this.seoService = seoService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'channels/';
    this.channelData = {};
    this.videoList = [];
    this.recommendedVideoList = [];
    this.isNavigationEnd = false;
    this.activePage = 0;
    this.activeFeturePage = 0;
    this.hasMoreData = false;
    this.hasRecommendedData = false;
    this.channelName = '';
    this.receivedSearchText = '';
    this.activeTab = 'Videos';
    this.searchChannelData = [];
    this.searchPostData = [];
    this.profileId = JSON.parse(this.authService.getUserData())?.Id;
    this.userId = JSON.parse(this.authService.getUserData())?.UserID;
    this.channelId = +localStorage.getItem('channelId');
    this.route.paramMap.subscribe(paramMap => {
      // https://facetime.opash.in/
      const name = paramMap.get('name');
      this.channelName = name;
      this.videoList = [];
      if (name) {
        this.channelName = name;
        this.getChannelDetails(name);
        if (this.searchResults) {
          this.searchChannelData = null;
          this.searchPostData = null;
          this.searchResults = null;
        }
      } else {
        this.getChannelByUserId(this.userId);
      }
    });
    const data = {
      title: `ReeferTube`,
      description: ''
    };
    this.seoService.updateSeoMetaData(data);
  }
  ngOnInit() {
    this.recommendedLoadMore();
  }
  ngAfterViewInit() {
    if (!this.socketService?.socket?.connected) {
      this.socketService?.socket?.connect();
    }
    this.socketService?.socket?.emit('join', {
      room: this.profileId
    });
    this.socketService?.socket?.on('notification', data => {
      console.log(data);
      if (data) {
        this.notificationId = data.id;
        this.shareService.isNotify = true;
        if (this.notificationId) {
          this.commonService.getNotification(this.notificationId).subscribe({
            next: res => {
              console.log(res);
              localStorage.setItem('isRead', res.data[0]?.isRead);
            },
            error: error => {
              console.log(error);
            }
          });
        }
      }
    });
    const isRead = localStorage.getItem('isRead');
    if (isRead === 'N') {
      this.shareService.isNotify = true;
    }
  }
  getChannelByUserId(value) {
    this.commonService.get(`${this.apiUrl}my-channel/${value}`).subscribe({
      next: res => {
        // console.log(res.data);
        if (res) {
          this.channelData = res[0];
          // localStorage.setItem('channelId', this.channelData.id);
          // console.log(this.channelData);
          const data = {
            title: `ReeferTube ${this.channelData?.firstname}`,
            url: `${location.href}`,
            description: ''
          };
          this.seoService.updateSeoMetaData(data);
          this.getPostVideosById();
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getChannelDetails(value) {
    this.commonService.get(`${this.apiUrl}${value}`).subscribe({
      next: res => {
        // console.log(res.data);
        if (res.data.length) {
          this.channelData = res.data[0];
          const data = {
            title: `ReeferTube ${this.channelData.firstname}`,
            url: `${location.href}`,
            description: ''
          };
          this.seoService.updateSeoMetaData(data);
          // console.log(this.channelData);
          this.getPostVideosById();
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
  // getPostVideosById(): void {
  //   this.commonService
  //     .post(this.apiUrl, { id: this.channelData?.profileid, size: 10, page: this.activePage })
  //     .subscribe({
  //       next: (res: any) => {
  //         this.videoList = res.data;
  //         console.log(res);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }
  getPostVideosById() {
    this.activePage = 0;
    if (this.channelData?.profileid) {
      this.loadMore();
    }
  }
  loadMore() {
    this.activePage++;
    this.spinner.show();
    this.commonService.post(`${this.apiUrl}my-posts`, {
      id: this.channelData?.id,
      size: 12,
      page: this.activePage
    }).subscribe({
      next: res => {
        this.spinner.hide();
        if (res?.data?.length > 0) {
          this.videoList = this.videoList.concat(res.data);
          this.hasMoreData = false;
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
  recommendedLoadMore() {
    this.activeFeturePage++;
    this.spinner.show();
    this.commonService.post(`${this.apiUrl}posts`, {
      id: this.channelData?.id,
      size: 12,
      page: this.activeFeturePage
    }).subscribe({
      next: res => {
        this.spinner.hide();
        if (res?.data?.length > 0) {
          this.recommendedVideoList = this.recommendedVideoList.concat(res.data);
          this.hasRecommendedData = false;
        } else {
          this.hasRecommendedData = true;
        }
      },
      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  switchTab(tabName) {
    this.activeTab = tabName;
    console.log(tabName);
  }
  onSearchData(searchText) {
    console.log(searchText);
    this.searchText = searchText;
    this.spinner.show();
    this.commonService.post(`${this.apiUrl}search-all`, {
      search: searchText
    }).subscribe({
      next: res => {
        this.spinner.hide();
        this.searchChannelData = res.channels;
        this.searchPostData = res.posts;
        this.searchResults = this.searchChannelData.length + this.searchPostData.length;
        if (res.channels.length === 0) {
          this.activeTab = 'Videos';
        }
        // console.log(this.searchResults);
      },

      error: error => {
        this.spinner.hide();
        console.log(error);
      }
    });
  }
  clearSearchData() {
    this.searchChannelData = null;
    this.searchPostData = null;
    this.searchResults = null;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_share_service__WEBPACK_IMPORTED_MODULE_4__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 8,
    vars: 4,
    consts: [[1, "video-block", "section-padding"], [1, "row"], [1, "col-md-12"], [3, "searchTextEmitter"], [4, "ngIf"], [1, "text-center"], [1, "main-title", "d-flex", "font-24-px", "icon-color"], [1, "me-2", 3, "icon"], [3, "videoData"], ["class", "d-flex justify-content-center mb-2", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-2"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "search-container"], [1, "c-box", "mb-3", "single-video-comment-tabs"], [1, "d-flex", "justify-content-between"], [1, "mb-5"], ["role", "button", "title", "close", 1, "font-24-px", 3, "icon", "click"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item", "cursor"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "nav-link", "cursor", 3, "click"], [3, "channelList", 4, "ngIf"], [3, "videoData", 4, "ngIf"], [3, "channelList"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-lf-dashboard", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("searchTextEmitter", function HomeComponent_Template_app_lf_dashboard_searchTextEmitter_3_listener($event) {
          return ctx.onSearchData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HomeComponent_ng_container_4_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomeComponent_ng_container_5_Template, 7, 5, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomeComponent_ng_container_6_Template, 10, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, HomeComponent_ng_container_7_Template, 19, 10, "ng-container", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchResults === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.channelData == null ? null : ctx.channelData.firstname) && !ctx.searchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.searchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchResults);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _shared_components_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_6__.VideoCardComponent, _shared_components_lf_dashboard_lf_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.LfDashboardComponent, _shared_components_channels_card_channels_card_component__WEBPACK_IMPORTED_MODULE_8__.ChannelsCardComponent],
    styles: [".main-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n\n  .icon-color fa-icon svg path {\n  fill: red;\n  opacity: 0.9;\n}\n  .loading-text {\n  top: 50% !important;\n}\n\n.c-box[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 2px;\n  background: var(--bg-sidebar);\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1sYXlvdXQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FBRko7QUFJRTtFQUNFLG1CQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZSB7XHJcbiAgaDYge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuaWNvbi1jb2xvciBmYS1pY29uIHN2ZyBwYXRoIHtcclxuICAgIGZpbGw6IHJlZDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbiAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmMtYm94IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlYmFyKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLCAzMywgMzMsIDAuMik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8895:
/*!*******************************************************!*\
  !*** ./src/app/main-layout/pages/home/home.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 1285);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/shared.module */ 2661);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ 376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent],
    imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main-layout_pages_home_home_module_ts.js.map