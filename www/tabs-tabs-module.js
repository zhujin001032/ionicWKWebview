(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../coms/coms.module */ "./src/app/coms/coms.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");









var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__["ComsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__["TabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
            ],
            exports: [
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__["ComsModule"],
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs class=\"tab-bar\">\n\n  <ion-tab-bar #myTabBar id=\"myTabBar\"  slot=\"bottom\" (ionTabBarChanged) = \"change($event)\">\n    <ng-container *ngFor=\"let item of appNavigation; let i=index\">\n        <ion-tab-button tab=\"tab{{i+1}}\" >\n          <ng-container *ngIf=\"i === 0\">\n              <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab1'\" class=\"img-icon\"/>\n              <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab1'\" class=\"img-icon\"/>\n          </ng-container>\n            \n          <ng-container *ngIf=\"i === 1\">\n              <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab2'\" class=\"img-icon\"/>\n              <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab2'\" class=\"img-icon\"/>\n          </ng-container>\n\n          <ng-container *ngIf=\"i === 2\">\n              <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab3'\" class=\"img-icon\"/>\n              <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab3'\" class=\"img-icon\"/>\n          </ng-container>\n          <ng-container *ngIf=\"i === 3\">\n              <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab4'\" class=\"img-icon\"/>\n              <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab4'\" class=\"img-icon\"/>\n          </ng-container>\n          <ng-container *ngIf=\"i === 4\">\n              <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab5'\" class=\"img-icon\"/>\n              <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab5'\" class=\"img-icon\"/>\n          </ng-container> \n          \n          <ion-label >{{item.label}}</ion-label>\n          <ng-container *ngIf=\"item.badge && (item.badge > 99) \">\n            <ion-badge class=\"badge\">99+</ion-badge>\n          </ng-container>\n\n          <ng-container *ngIf=\"item.badge && (item.badge > 0)  && (item.badge &lt;= 99) \">\n            <ion-badge id=\"badgeForTab{{i+1}}\" class=\"badge\">{{item.badge}}</ion-badge>\n          </ng-container>\n\n\n        </ion-tab-button>\n    </ng-container>\n    \n    <!-- <ion-tab-button tab=\"tab1\">\n        <img src='../../assets/icon/tabbar_icon_home_nor@3x.png' *ngIf=\"flag!='tab1'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_home_pre@3x.png' *ngIf=\"flag=='tab1'\" class=\"img-icon\"/>\n      <ion-label>首页</ion-label>\n    </ion-tab-button> -->\n\n    <!-- <ion-tab-button tab=\"tab2\">\n        <img src='../../assets/icon/tabbar_icon_release_nor@3x.png' *ngIf=\"flag!='tab2'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_release_pre@3x.png' *ngIf=\"flag=='tab2'\" class=\"img-icon\"/>\n      <ion-label>发布</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n        <img src='../../assets/icon/tabbar_icon_my_nor@3x.png' *ngIf=\"flag!='tab3'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_my_press@3x.png' *ngIf=\"flag=='tab3'\" class=\"img-icon\"/>\n      <ion-label>我的</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myTabBar {\n  background: white;\n  box-shadow: 0px -1px 6px 0px rgba(133, 136, 148, 0.1);\n  border-top: 0px; }\n\n.img-icon {\n  width: 1.375rem;\n  height: 1.375rem; }\n\n.tab-selected {\n  --color-selected:#FF6314 ; }\n\nion-label {\n  font-size: 0.625rem;\n  font-weight: 400; }\n\nion-tab-button {\n  --color-selected:#B6B7BF;\n  --color:#B6B7BF; }\n\n.badge {\n  --background: #FF6314;\n  left: calc(50% + 0.125rem);\n  top: 0.05rem;\n  border-radius: 0.8rem;\n  border: 0.13rem solid white;\n  min-width: 1.45rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbmhlL25ld01ldGFEYXRhQXBwL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUE4QjtFQUM5QixxREFBaUQ7RUFDakQsZUFBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWM7RUFBQyxnQkFBZ0IsRUFBQTs7QUFFbkM7RUFDSSx5QkFBaUIsRUFBQTs7QUFFckI7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSx3QkFBaUI7RUFDakIsZUFBUSxFQUFBOztBQUVaO0VBQ0kscUJBQWE7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jbXlUYWJCYXJ7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJveC1zaGFkb3c6MHB4IC0xcHggNnB4IDBweCByZ2JhKDEzMywxMzYsMTQ4LDAuMSk7IFxuICAgIGJvcmRlci10b3A6MHB4O1xufVxuLmltZy1pY29ue1xuICAgIHdpZHRoOjEuMzc1cmVtO2hlaWdodDogMS4zNzVyZW07XG59XG4udGFiLXNlbGVjdGVke1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6I0ZGNjMxNCA7XG59XG5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOjAuNjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbn1cbmlvbi10YWItYnV0dG9uIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiNCNkI3QkY7IFxuICAgIC0tY29sb3I6I0I2QjdCRjtcbn1cbi5iYWRnZXtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjYzMTQ7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAwLjEyNXJlbSk7XG4gICAgdG9wOiAwLjA1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgd2hpdGU7XG4gICAgbWluLXdpZHRoOiAxLjQ1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");








var TabsPage = /** @class */ (function () {
    function TabsPage(http, route, router, appGlobalService, modalController, mapBaiduService, eventService, ngZone) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.modalController = modalController;
        this.mapBaiduService = mapBaiduService;
        this.eventService = eventService;
        this.ngZone = ngZone;
        this.flag = 'tab1';
        this.defaultIndex = -111;
        // 位置对象
        this.positionInfo = {};
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.mapBaiduService.refreshWatchPosition(function () {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    // 以下三选一
                    // web预览模式
                    // this.preViewApp();
                    // app指定项目id 134
                    // this.debugApp(178);
                    // this.debugApp(134);
                    // this.debugApp(86);
                    // 发布app
                    _this.releaseApp();
                });
            });
        });
    };
    // web预览模式
    TabsPage.prototype.preViewApp = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.sessionId = params.sessionId;
            if (!_this.sessionId) {
                _this.sessionId = localStorage.getItem('sessionId');
            }
            localStorage.setItem('sessionId', _this.sessionId);
        });
        if (this.sessionId && this.sessionId !== 'null') {
            var params = {
                sessionId: this.sessionId,
                cityId: this.positionInfo.code
            };
            // 请求获取新数据
            console.log('getting app tab data \n');
            this.http.post('application/home/', params, function (res) {
                // 请求数据成功
                if (res) {
                    _this.getPageData(res);
                }
                else {
                    // 请求数据失败
                    _this.appGlobalService.showToast(res.message, 2000, 'middle');
                }
            });
        }
        else {
            console.log('无法获取sessionId');
        }
    };
    /** 打包测试 116 是测试项目 id */
    TabsPage.prototype.debugApp = function (pId) {
        var _this = this;
        this.http.get('application/debug/' + pId, function (ress) {
            _this.sessionId = ress.sessionId;
            localStorage.setItem('sessionId', _this.sessionId);
            console.log(_this.sessionId);
            _this.http.get('application/home/' + _this.sessionId, function (res) {
                _this.getPageData(res);
            });
        });
    };
    // 发布
    TabsPage.prototype.releaseApp = function () {
        var _this = this;
        this.http.get('application/openApp/xw', function (ress) {
            _this.sessionId = ress.sessionId;
            localStorage.setItem('sessionId', _this.sessionId);
            console.log(_this.sessionId);
            _this.http.get('application/home/' + _this.sessionId, function (res) {
                _this.getPageData(res);
            });
        });
    };
    TabsPage.prototype.getPageData = function (res) {
        var comContainer = [];
        var pageData = JSON.parse(res.script);
        this.appNavigation = JSON.stringify(pageData.navgtion) !== '{}' ? pageData.navgtion : false;
        console.log('got app tab data \n', this.appNavigation);
        if (this.appNavigation === undefined) {
            return;
        }
        for (var i = 0; i < this.appNavigation.length; i++) {
            if (this.appNavigation[i].check) {
                console.log('defaul index ===== ', i, this.appNavigation[i].label);
                this.defaultIndex = i;
                this.getDefaultPageData(this.defaultIndex + 1, +this.appNavigation[this.defaultIndex].target);
                break;
            }
        }
        if (this.defaultIndex === -111) {
            this.defaultIndex = 0;
            this.getDefaultPageData(this.defaultIndex + 1, +this.appNavigation[this.defaultIndex].target);
        }
    };
    TabsPage.prototype.getDefaultPageData = function (index, viewId) {
        var path = 'home/tab' + (index);
        console.log('===================================default path', path);
        console.log('===========================init app city:\n', localStorage.getItem("position"));
        localStorage.setItem('tabPath', path);
        this.router.navigate([path], { queryParams: { viewId: viewId } });
    };
    TabsPage.prototype.change = function (event) {
        this.flag = event.detail.tab;
        console.log('====================================change tab', this.flag);
        if (this.flag) {
            var index = +this.flag.substring(this.flag.length - 1) - 1;
            if (index === this.defaultIndex) {
                this.defaultIndex = -111;
                return;
            }
            if (this.appNavigation && this.appNavigation[index].ifuser) {
                this.getDefaultPageData(index + 1, +this.appNavigation[index].target);
            }
        }
    };
    // 减逻辑
    TabsPage.prototype.setBadgeForKeyValue = function (key, num) {
        var index = +key.substring(key.length - 1) - 1;
        var item = this.appNavigation[index];
        var badge = +(item.badge - num);
        item.badge = badge;
        if (badge <= 0) {
            item.badge = 0;
        }
    };
    // 设置初始值
    TabsPage.prototype.firstBadgeForKeyValue = function (key, num) {
        var index = +key.substring(key.length - 1) - 1;
        var item = this.appNavigation[index];
        item.badge = num;
        if (num <= 0) {
            item.badge = 0;
        }
    };
    TabsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // obj 结构{tab1:10}
        this.eventService.eventEmit.on("badgeForTab", function (obj) {
            var key = "";
            if (obj.tab1 >= 0) {
                key = 'tab1';
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab2 >= 0) {
                key = 'tab2';
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab3 >= 0) {
                key = 'tab3';
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab4 >= 0) {
                key = 'tab4';
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab5 >= 0) {
                key = 'tab5';
                _this.setBadgeForKeyValue(key, obj[key]);
            }
        });
        this.eventService.eventEmit.on("firstBadgeForTab", function (obj) {
            var key = "";
            if (obj.tab1 >= 0) {
                key = 'tab1';
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab2 >= 0) {
                key = 'tab2';
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab3 >= 0) {
                key = 'tab3';
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab4 >= 0) {
                key = 'tab4';
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab5 >= 0) {
                key = 'tab5';
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_4__["AppGlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_7__["MapBaiduService"],
            _shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-history/search-history.page */ "./src/app/search-history/search-history.page.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





var routes = [
    {
        path: 'home',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        // component: MypagePage
                        // loadChildren: '../tab3/page/mypage/mypage.module#MypagePageModule'
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab4/tab4.module#Tab4PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab5/tab5.module#Tab5PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map