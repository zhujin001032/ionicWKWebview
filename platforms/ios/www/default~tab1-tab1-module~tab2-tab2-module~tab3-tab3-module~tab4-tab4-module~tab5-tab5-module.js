(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tab5-tab5-module"],{

/***/ "./src/app/route/entry/anchor.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/route/entry/anchor.directive.ts ***!
  \*************************************************/
/*! exports provided: AppAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAnchorDirective", function() { return AppAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppAnchorDirective = /** @class */ (function () {
    function AppAnchorDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AppAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppAnchorDirective);
    return AppAnchorDirective;
}());



/***/ }),

/***/ "./src/app/route/entry/coms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/route/entry/coms.component.ts ***!
  \***********************************************/
/*! exports provided: ComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComsComponent", function() { return ComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchor.directive */ "./src/app/route/entry/anchor.directive.ts");




var ComsComponent = /** @class */ (function () {
    function ComsComponent(componentFactoryResolver, eventService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
    }
    ComsComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ComsComponent.prototype.ngOnChanges = function (changes) {
        // const viewContainerRef = this.appAnchor.viewContainerRef;
        // viewContainerRef.clear();
        this.loadComponent();
    };
    ComsComponent.prototype.loadComponent = function () {
        var _this = this;
        var viewContainerRef = this.appAnchor.viewContainerRef;
        viewContainerRef.clear();
        this.coms.forEach(function (v) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance).tagData = v.tagData;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ComsComponent.prototype, "coms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["AppAnchorDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _anchor_directive__WEBPACK_IMPORTED_MODULE_3__["AppAnchorDirective"])
    ], ComsComponent.prototype, "appAnchor", void 0);
    ComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coms',
            template: '<section>\n' +
                '<ng-template appAnchor></ng-template>\n' +
                '</section>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], ComsComponent);
    return ComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/entry.page.html":
/*!*********************************************!*\
  !*** ./src/app/route/entry/entry.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"titleBar && titleBar!=={}\" translucent=\"true\">\n    <ion-toolbar\n        [ngClass]=\"{'bg-image':showWaterImg,'title-orange': titleBar.cssStyle === 'orange','title-white': titleBar.cssStyle === 'white','bottom-line': (titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined ) && titleBar.bottomLine !== false }\">\n        <ion-title class=\"nav-title\" *ngIf=\"titleBar.title\">{{titleBar.title.labelName}}</ion-title>\n        <ion-buttons *ngIf=\"titleBar.position\" slot=\"start\" (click)=\"buttonClick(titleBar.position.link)\">\n            <span>{{positionInfo.name}}</span>\n            <i class=\"triangle-icon\" style=\"font-size: 0.25rem;color: #27282E;\"></i>\n        </ion-buttons>\n\n        <!-- search box -->\n        <ion-searchbar class=\"search-bar\" *ngIf=\"titleBar.searchInput\" (click)=\"searchButtonClick(titleBar.searchInput)\"\n            placeholder={{titleBar.searchInput.placeholder}} mode=\"ios\"></ion-searchbar>\n\n        <!-- search btn -->\n        <ng-container *ngIf=\"titleBar.searchButton\">\n            <ng-container *ngIf=\"titleBar.searchButton.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"searchButtonClick(titleBar.searchButton)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search.png\" alt=\"search\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search_white@3x.png\" alt=\"search\">\n                    </ng-container>\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.searchButton.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.searchButton.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"searchButtonClick(titleBar.searchButton)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search.png\" alt=\"search\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search_white@3x.png\" alt=\"search\">\n                    </ng-container>\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.searchButton.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"titleBar.back\">\n            <ng-container *ngIf=\"titleBar.back.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"back()\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/back.png\" alt=\"back\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_icon_back_white@3x.png\" alt=\"back\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.back.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"back()\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/back.png\" alt=\"back\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_icon_back_white@3x.png\" alt=\"back\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n\n        <!-- add  call btn : -->\n        <ng-container *ngIf=\"titleBar.call\">\n            <ng-container *ngIf=\"titleBar.call.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"call(titleBar.call)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel@3x.png\" alt=\"call\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel_white@3x.png\" alt=\"call\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.call.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"call(titleBar.call)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel@3x.png\" alt=\"call\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel_white@3x.png\" alt=\"call\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  share btn-->\n        <ng-container *ngIf=\"titleBar.share\">\n            <ng-container *ngIf=\"titleBar.share.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"share(titleBar.share.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share@3x.png\" alt=\"share\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share_white@3x.png\" alt=\"share\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.share.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"share(titleBar.share.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share@3x.png\" alt=\"share\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share_white@3x.png\" alt=\"share\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  favorite btn-->\n        <ng-container *ngIf=\"titleBar.favorite\">\n            <ng-container *ngIf=\"titleBar.favorite.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"favorite(titleBar.favorite.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_normal@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_white_nor@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.favorite.icon === 'favorite'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_pre@3x.png\"\n                            alt=\"favorite\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\" titleBar.favorite.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"favorite(titleBar.favorite.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_normal@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_white_nor@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.favorite.icon === 'favorite'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_pre@3x.png\"\n                            alt=\"favorite\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.cancel\">\n            <ng-container *ngIf=\"titleBar.cancel.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"back()\">\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.cancel.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.cancel.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"back()\">\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.cancel.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.close\">\n            <ng-container *ngIf=\"titleBar.close.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"close()\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/close.png\" alt=\"back\">\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.close.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"close()\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/close.png\" alt=\"back\">\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.discounts\">\n            <ng-container *ngIf=\"titleBar.discounts.layout==='left'\">\n                <ion-buttons slot=\"start\" (click)=\"buttonClick(titleBar.discounts.link)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/activity@3x.png\" alt=\"discounts\">\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.discounts.layout==='right'\">\n                <ion-buttons slot=\"end\" (click)=\"buttonClick(titleBar.discounts.link)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/activity@3x.png\" alt=\"discounts\">\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"showTopTab\" style=\"--padding-bottom:0px;padding-left: 0px;padding-right: 0px;\">\n        <ul class=\"ulTopTab\">\n            <li *ngFor=\"let item of tagData.data;let i=index;\" id=\"homeNavTab{{i}}\"\n                [ngClass]=\"{'active': tagData.currentTab === item.indexTab}\" [ngStyle]=\"{'width': aWidth}\"\n                (click)=\"change(item,item.indexTab)\">\n                <span>{{item.label}}</span>\n            </li>\n        </ul>\n        <hr *ngIf=\"tagData.isShowLine===true\" style=\"width: 100%;height: 0.04rem;background-color: #EBEBED;\">\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"showSubTab\" style=\"--padding-bottom:0px;padding-left: 0px;padding-right: 0px;\">\n        <ul class=\"ulTopTab\">\n            <li *ngFor=\"let item of subTagData.data;let i=index;\" id=\"fixedNavTab{{i}}\"\n                [ngClass]=\"{'active': subTagData.currentTab === item.indexTab}\" [ngStyle]=\"{'width': subAWidth}\"\n                (click)=\"subChange(item,item.indexTab)\">\n                <span>{{item.label}}</span>\n            </li>\n        </ul>\n        <hr *ngIf=\"subTagData.isShowLine===true\" style=\"width: 100%;height: 0.04rem;background-color: #EBEBED;\">\n    </ion-toolbar>\n</ion-header>\n<ion-content id=\"superCotainer\" [ngClass]=\"{'gray-bg': isGrayBg,'white-bg': !isGrayBg ,'bg-image':showWaterImg}\"\n    [forceOverscroll]=\"false\">\n    <app-coms *ngIf=\"coms\" [coms]=\"coms\"></app-coms>\n    <app-second *ngIf=\"subComs\" [subComs]=\"subComs\"></app-second>\n</ion-content>\n<ion-footer [ngClass]=\"{'bg-image':showWaterImg}\">\n    <app-footer-coms [coms]=\"footerComs\"></app-footer-coms>\n</ion-footer>"

/***/ }),

/***/ "./src/app/route/entry/entry.page.scss":
/*!*********************************************!*\
  !*** ./src/app/route/entry/entry.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  --background:#F2F3F5; }\n\nion-toolbar:last-child {\n  --border-width: 0 0 0; }\n\nion-header .nav-title {\n  color: #27282e;\n  font-size: 1.13rem;\n  font-weight: bold; }\n\nion-header ion-toolbar {\n  --background: #fff;\n  padding-left: 20px;\n  padding-right: 20px; }\n\nion-header ion-toolbar ul {\n    background: #fff;\n    box-shadow: 0 0 0 0 #ebebed;\n    margin-bottom: 1px;\n    width: 100%;\n    z-index: 16; }\n\nion-header ion-toolbar ul li {\n      display: inline-block;\n      font-size: 0.88rem;\n      color: #858894;\n      text-align: center;\n      height: 2.75rem;\n      line-height: 2.75rem; }\n\nion-header ion-toolbar ul li.active {\n      color: #27282e;\n      font-weight: bold; }\n\nion-header ion-toolbar ul li.active:after {\n        content: \"\";\n        height: 3px;\n        display: block;\n        width: 1.76rem;\n        margin: 0 auto;\n        margin-top: -3px;\n        background-image: linear-gradient(-90deg, #ff6314 0%, #ff9500 100%);\n        border-radius: 1.5px; }\n\nion-header ion-toolbar .toolbar-title {\n    color: white; }\n\nion-header ion-toolbar .title-white {\n    --background: #fff;\n    color: #27282E; }\n\nion-header .triangle-icon {\n  display: inline-block;\n  border-top: .25rem solid #27282e;\n  border-left: .2rem solid transparent;\n  border-bottom: .2rem solid transparent;\n  border-right: .2rem solid transparent;\n  margin-left: 5px;\n  margin-top: 5px; }\n\nion-header ion-buttons span {\n  font-size: 1rem;\n  color: #27282E;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\nion-header ion-buttons .button-orange {\n  color: white; }\n\nion-header ion-buttons .button-white {\n  color: #27282E; }\n\nion-header .search-bar {\n  padding-right: 1.25rem;\n  padding-left: 1.25rem; }\n\nion-header ion-searchbar {\n  padding: 0;\n  height: 36px; }\n\nion-header .title-orange {\n  --background: linear-gradient(90deg, rgba(255, 149, 0, 1) 0%, rgba(255, 99, 20, 1) 100%); }\n\nion-header .title-orange .nav-title {\n    color: white; }\n\nion-header .toolbar-title {\n  color: white; }\n\nion-header .title-white {\n  --background: #fff;\n  color: #27282e; }\n\nion-header .bottom-line {\n  --border-width: 0 0 0.03rem 0 !important;\n  box-shadow: 0 0.03rem 0 0 #ebebed !important; }\n\n.triangle-icon {\n  display: inline-block;\n  border-top: 0.25rem solid #27282e;\n  border-left: 0.2rem solid transparent;\n  border-bottom: 0.2rem solid transparent;\n  border-right: 0.2rem solid transparent;\n  margin-left: 5px;\n  margin-top: 5px; }\n\nion-buttons span {\n  font-size: 1rem;\n  color: #27282e;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\nion-buttons .button-orange {\n  color: white; }\n\nion-buttons .button-white {\n  color: #27282e; }\n\n.tabbar {\n  background-color: white;\n  background: white; }\n\n@supports (bottom: env(safe-area-inset-bottom)) {\n  .tabbar, ion-footer {\n    padding-bottom: env(safe-area-inset-bottom); } }\n\n@supports (bottom: constant(safe-area-inset-bottom)) {\n  .tabbar, ion-footer {\n    padding-bottom: constant(safe-area-inset-bottom); } }\n\n@media screen and (max-width: 340px) {\n  ion-toolbar {\n    padding-left: 2% !important;\n    padding-right: 2% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbmhlL25ld01ldGFEYXRhQXBwL3NyYy9hcHAvcm91dGUvZW50cnkvZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWEsRUFBQTs7QUFFZjtFQUNFLHFCQUFlLEVBQUE7O0FBRWpCO0VBRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFKckI7RUFPSSxrQkFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFUdkI7SUFXTSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWZqQjtNQWlCUSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLG9CQUFvQixFQUFBOztBQXRCNUI7TUF5QlEsY0FBYztNQUNkLGlCQUFpQixFQUFBOztBQTFCekI7UUE0QlUsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUVBQW1FO1FBQ25FLG9CQUFvQixFQUFBOztBQW5DOUI7SUF3Q1EsWUFBVyxFQUFBOztBQXhDbkI7SUEyQ1Esa0JBQWE7SUFDWixjQUFjLEVBQUE7O0FBNUN2QjtFQWtEUSxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBeER2QjtFQTREWSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBaEVuQztFQXFFWSxZQUFXLEVBQUE7O0FBckV2QjtFQXdFWSxjQUFjLEVBQUE7O0FBeEUxQjtFQTRFSSxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBN0V6QjtFQWdGSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQWpGaEI7RUFvRkksd0ZBQWEsRUFBQTs7QUFwRmpCO0lBc0ZNLFlBQVksRUFBQTs7QUF0RmxCO0VBMEZJLFlBQVksRUFBQTs7QUExRmhCO0VBNkZJLGtCQUFhO0VBQ2IsY0FBYyxFQUFBOztBQTlGbEI7RUFpR00sd0NBQWU7RUFDZiw0Q0FBNEMsRUFBQTs7QUFHbEQ7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBRUksZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQU4zQjtFQVNJLFlBQVksRUFBQTs7QUFUaEI7RUFZSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUc0QjtFQUM3QztJQUNFLDJDQUEyQyxFQUFBLEVBQzVDOztBQUVpRDtFQUNsRDtJQUNFLGdEQUFnRCxFQUFBLEVBQ2pEOztBQUdIO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsNEJBQTRCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZS9lbnRyeS9lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAtLWJhY2tncm91bmQ6I0YyRjNGNTtcbn1cbmlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5pb24taGVhZGVyIHtcbiAgLm5hdi10aXRsZSB7XG4gICAgY29sb3I6ICMyNzI4MmU7XG4gICAgZm9udC1zaXplOiAxLjEzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgdWwge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgI2ViZWJlZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTY7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgICBjb2xvcjogIzg1ODg5NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjc1cmVtO1xuICAgICAgfVxuICAgICAgbGkuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMyNzI4MmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxLjc2cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2ZmNjMxNCAwJSwgI2ZmOTUwMCAxMDAlKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudG9vbGJhci10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuICAgIC50aXRsZS13aGl0ZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgIGNvbG9yOiAjMjcyODJFO1xuICAgIH1cbiAgICBcbiAgIFxuICAgIH1cbiAgICAudHJpYW5nbGUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXRvcDogLjI1cmVtIHNvbGlkICMyNzI4MmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjcyODJFO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogMzVweDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tb3Jhbmdle1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi13aGl0ZXtcbiAgICAgICAgICAgIGNvbG9yOiAjMjcyODJFO1xuICAgICAgICB9XG4gIH1cbiAgLnNlYXJjaC1iYXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG4gIC50aXRsZS1vcmFuZ2Uge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMTQ5LCAwLCAxKSAwJSwgcmdiYSgyNTUsIDk5LCAyMCwgMSkgMTAwJSk7XG4gICAgLm5hdi10aXRsZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRpdGxlLXdoaXRlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMyNzI4MmU7XG4gIH1cbiAgLmJvdHRvbS1saW5lIHtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC4wM3JlbSAwICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMDNyZW0gMCAwICNlYmViZWQgIWltcG9ydGFudDsgIFxuICB9XG59XG4udHJpYW5nbGUtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXRvcDogMC4yNXJlbSBzb2xpZCAjMjcyODJlO1xuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tYnV0dG9ucyB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzI3MjgyZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmJ1dHRvbi1vcmFuZ2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnV0dG9uLXdoaXRlIHtcbiAgICBjb2xvcjogIzI3MjgyZTtcbiAgfVxufVxuXG4udGFiYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5Ac3VwcG9ydHMgKGJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSB7XG4gIC50YWJiYXIgLCBpb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICB9XG59XG5Ac3VwcG9ydHMgKGJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIHtcbiAgLnRhYmJhciAsIGlvbi1mb290ZXJ7XG4gICAgcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMiUgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/route/entry/footercoms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/route/entry/footercoms.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComsComponent", function() { return FooterComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");




// tslint:disable-next-line:max-line-length
var FooterComsComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function FooterComsComponent(componentFactoryResolver, eventService, tabService, ngZone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
        this.tabService = tabService;
        this.ngZone = ngZone;
    }
    FooterComsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.eventService.eventEmit.on("loadFooterComponent", function (data) {
                    _this.coms = data;
                });
            });
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    FooterComsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.coms) {
            var viewContainerRef_1 = this.myRef;
            viewContainerRef_1.clear();
            this.coms.forEach(function (v) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
                var componentRef = viewContainerRef_1.createComponent(componentFactory);
                (componentRef.instance).tagData = v.tagData;
            });
        }
    };
    FooterComsComponent.prototype.loadComponent = function (askTag) {
        var _this = this;
        this.coms = [];
        this.myRef.clear();
        var tag = JSON.parse(askTag);
        if (!tag.clean) {
            this.tabService.getComsDataByStyle(tag.style, function (callData) { if (callData) {
                _this.coms.push(callData);
            } }, tag);
            var len = this.coms.length;
            for (var i = 0; i < len; i++) {
                var v = this.coms[i];
                var factory = this.componentFactoryResolver.resolveComponentFactory(v.component);
                var ref = this.myRef.createComponent(factory);
                ref.instance.tagData = v.tagData;
                ref.changeDetectorRef.detectChanges();
            }
        }
        localStorage.removeItem("refreshFooterComsTag");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FooterComsComponent.prototype, "coms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerComsAnchor', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], FooterComsComponent.prototype, "myRef", void 0);
    FooterComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-footer-coms', template: '<section>\n' + '<ng-template #footerComsAnchor></ng-template>\n' + '</section>' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], FooterComsComponent);
    return FooterComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/nav-one/nav-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/route/entry/nav-one/nav-one.component.ts ***!
  \**********************************************************/
/*! exports provided: NavOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavOneComponent", function() { return NavOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");
/* harmony import */ var _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");










var NavOneComponent = /** @class */ (function () {
    function NavOneComponent(http, router, appGlobalService, modalController, mapBaiduService, tabsService, eventService, alertController, ngZone) {
        this.http = http;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.modalController = modalController;
        this.mapBaiduService = mapBaiduService;
        this.tabsService = tabsService;
        this.eventService = eventService;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.hidden = false;
        // 标签头数据
        this.titleBar = {};
        this.isGrayBg = false; // 默认背景为灰色
        this.showWaterImg = false; // 是否显示水印
        // 位置对象
        this.positionInfo = {};
        this.showTopTab = false; // 是否显示顶部tab
        this.showSubTab = false; // 是否显示Subtab
    }
    NavOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.targetObj = JSON.parse(localStorage.getItem('targetObj'));
        this.getInitInfo(0);
        this.eventService.eventEmit.on('refreshPageData', function (pageData) {
            console.log('need Refresh page data 刷新页面 ------->\n');
            _this.coms = pageData.coms;
            _this.subComs = pageData.subComs;
            _this.titleBar = pageData.titleBar;
            _this.footerComs = pageData.footerComs;
            _this.isGrayBg = pageData.isGrayBg;
            _this.backgroundImg = pageData.backgroundImg;
            _this.showWaterImg = pageData.showWaterImg;
        });
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.eventService.eventEmit.on('testRefreshFooterComsContainer', function () {
                    var askTag = localStorage.getItem("refreshFooterComsTag");
                    if (askTag !== null) {
                        _this.loadComponent(askTag);
                    }
                });
            });
        });
    };
    NavOneComponent.prototype.loadComponent = function (askTag) {
        var _this = this;
        this.footerComs = [];
        var tag = JSON.parse(askTag);
        if (!tag.clean) {
            this.tabsService.getComsDataByStyle(tag.style, function (callData) { if (callData) {
                _this.footerComs.push(callData);
            } }, tag);
        }
        this.eventService.eventEmit.emit("loadFooterComponent", this.footerComs);
        // localStorage.removeItem("refreshFooterComsTag");
    };
    NavOneComponent.prototype.getInitInfo = function (index, pageId) {
        var _this = this;
        this.positionInfo = JSON.parse(this.mapBaiduService.getStore('position'))
            ? JSON.parse(this.mapBaiduService.getStore('position'))
            // tslint:disable-next-line:max-line-length
            : JSON.parse(this.mapBaiduService.getStore('currentCityPosition')) ? JSON.parse(this.mapBaiduService.getStore('currentCityPosition')) : { name: '深圳', code: 4403 };
        if (pageId) {
            this.targetObj.forward.pageId = pageId;
        }
        if (this.targetObj !== null) {
            this.targetObj.forward.params = (pageId && index) ? ({ code: this.positionInfo.code }) : this.targetObj.forward.params;
            console.log('------------nav1-application/page', JSON.stringify(this.targetObj.forward));
            this.http.post('application/page', this.targetObj.forward, function (res) {
                console.log('nav1 pageData------>', JSON.parse(res.script));
                var pageData = JSON.parse(res.script);
                // 回到 主tab
                if (pageData.style === 'page.FramePageLogic') {
                    _this.router.navigate(['/home/tab1']);
                }
                // 请求数据成功
                if (res) {
                    // tslint:disable-next-line:no-shadowed-variable
                    _this.tabsService.getPageData(res, function (pageData) {
                        _this.footerComs = pageData.footerComs;
                        _this.coms = pageData.coms;
                        if (_this.coms[0] && _this.coms[0].tagData.style === 'tag.AppTabTagLogic' && _this.coms[0].tagData.name === 'homeAppTabTag') {
                            _this.showTopTab = true;
                            _this.tagData = _this.coms[0].tagData;
                            _this.aWidth = 100 / _this.tagData.data.length + '%';
                        }
                        if (_this.coms[0] && _this.coms[0].tagData.style === 'tag.AppTabTagLogic' && _this.coms[0].tagData.name === 'imagesTag') {
                            _this.subComs = _this.coms;
                            _this.coms = undefined;
                            _this.showSubTab = true;
                            _this.showTopTab = false;
                            _this.subTagData = _this.subComs[0].tagData;
                            _this.subAWidth = 100 / _this.subTagData.data.length + '%';
                        }
                        _this.titleBar = pageData.titleBar;
                        _this.isGrayBg = pageData.isGrayBg;
                        _this.backgroundImg = pageData.backgroundImg;
                        _this.showWaterImg = pageData.showWaterImg;
                        if (_this.footerComs && pageData.footerComs.length) {
                            localStorage.setItem("refreshFooterComsTag", JSON.stringify(pageData.footerComs[0].tagData));
                            // this.eventService.eventEmit.emit("refreshFooterComsContainer", "refreshFooterComsContainer");
                        }
                    });
                }
                else {
                    // 请求数据失败
                    _this.appGlobalService.showToast(res.message, 2000, 'middle');
                }
            }, function (err) {
                // 请求数据失败  add by jason he
                // this.appGlobalService.showToast(err.message, 2000, 'middle');
                _this.titleBar = {
                    background: 'white',
                    back: { layout: 'left' },
                    title: { labelName: err.message }
                };
            });
        }
    };
    NavOneComponent.prototype.buttonClick = function (obj) {
        if (obj.type === 'page') {
            var params = {
                pageId: obj.target,
                params: {},
                sessionId: localStorage.getItem('sessionId')
            };
            if (obj.param) {
                params.params = { code: this.positionInfo.code };
            }
            this.appGlobalService.goToForward(params);
        }
        else if (obj.type === 'modal') {
            this.showCityModel(obj.target);
        }
    };
    NavOneComponent.prototype.showCityModel = function (target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_5__["ChooseCityComponent"],
                                componentProps: { value: target, type: 1, modalTitle: '选择地址' } // 首页是1 默认不传或者0
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            that.positionInfo = JSON.parse(localStorage.getItem('position'));
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NavOneComponent.prototype.searchButtonClick = function (obj) {
        console.log('to search history');
        localStorage.removeItem('searchParams');
        var searchPath = localStorage.getItem('tabPath') + '/navSearch';
        this.router.navigate([searchPath], { queryParams: { obj: JSON.stringify(obj) } });
    };
    /**
     * 关闭方法 登录后返回 刷新 返回再刷新一次上一个页面
     */
    NavOneComponent.prototype.close = function () {
        window.history.back();
        if (localStorage.getItem('needRefresh') !== 'true') {
            this.appGlobalService.popTarget();
        }
    };
    /**
     * 返回方法
     */
    NavOneComponent.prototype.back = function () {
        localStorage.removeItem('searchParams');
        if (localStorage.getItem('fromPostOrEdit') === 'true') {
            localStorage.removeItem('fromPostOrEdit');
            if (document.getElementById('fixedNavTab0')) {
                this.eventService.eventEmit.emit('refreshSubTab', 'refreshSubTab');
            }
            else {
                // 设置返回刷新前两级页面page级别
                localStorage.setItem('needRefresh-2', 'true');
            }
            this.appGlobalService.popTarget();
            this.appGlobalService.popTarget();
            window.history.go(-2);
        }
        else if (localStorage.getItem('back-4') === 'true') {
            localStorage.removeItem('back-4');
            this.appGlobalService.popTarget();
            this.appGlobalService.popTarget();
            this.appGlobalService.popTarget();
            this.appGlobalService.popTarget();
            this.eventService.eventEmit.emit('refreshSubTab', 'refreshSubTab');
            window.history.go(-4);
        }
        else {
            window.history.back();
            if (localStorage.getItem('needRefresh') !== 'true') {
                this.appGlobalService.popTarget();
            }
        }
    };
    /** 收藏 */
    NavOneComponent.prototype.favorite = function (submit) {
        var _this = this;
        // 判断是否登录 登录 返回 详情
        var params = {
            id: submit.id,
            content: submit.content,
            sessionId: localStorage.getItem('sessionId')
        };
        console.log('favorite --> submit', params);
        this.http.post('application/submit', params, function (res) {
            // 请求成功
            if (res.success) {
                // 更新收藏icon UI
                if (_this.titleBar.favorite.icon === "unfavorite") {
                    _this.titleBar.favorite.icon = "favorite";
                }
                else {
                    _this.titleBar.favorite.icon = "unfavorite";
                }
                console.log('favorite -->', res.message);
            }
            else {
                // 请求数据失败
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
                if (res.type === 'page') {
                    var loginParams = {
                        pageId: res.target,
                        params: {},
                        sessionId: localStorage.getItem('sessionId')
                    };
                    // to login
                    _this.appGlobalService.goToForward(loginParams);
                }
            }
        });
    };
    /** 拨打客服 */
    NavOneComponent.prototype.call = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(' 拨打客服 ', data);
                        message = data.name ? data.name + ' ' + data.phone : data.phone;
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                subHeader: '',
                                message: data.title + '<br>' + message,
                                buttons: [{
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('取消');
                                        }
                                    }, {
                                        text: '拨打',
                                        handler: function () {
                                            document.location.href = 'tel:' + data.phone;
                                        }
                                    },]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 分享 */
    NavOneComponent.prototype.share = function (submit) {
        var _this = this;
        console.log('share --> submit', submit);
        this.http.post('application/submit', submit, function (res) {
            // 请求成功
            if (res.success) {
                console.log('share --> success');
            }
            else {
                // 请求数据失败
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
            }
        });
    };
    NavOneComponent.prototype.change = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.tagData.currentTab = indexTab;
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    setTimeout(function () {
                        _this.tagData.currentData = JSON.parse(res.script);
                        localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                        _this.eventService.eventEmit.emit('refreshTopTabContainer', 'refreshTopTabContainer');
                    }, 50);
                }
            });
        }
    };
    NavOneComponent.prototype.subChange = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.subTagData.currentTab = indexTab;
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    setTimeout(function () {
                        _this.subTagData.currentData = JSON.parse(res.script);
                        localStorage.setItem("dataMapFixedTabContainer", JSON.stringify(_this.subTagData));
                        _this.eventService.eventEmit.emit('refreshFixedTabContainer', 'refreshFixedTabContainer');
                    }, 50);
                }
            });
        }
    };
    NavOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-one',
            template: __webpack_require__(/*! ../entry.page.html */ "./src/app/route/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ../entry.page.scss */ "./src/app/route/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_6__["AppGlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_8__["MapBaiduService"],
            _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_9__["TabsService"],
            src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NavOneComponent);
    return NavOneComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/secondComs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/route/entry/secondComs.component.ts ***!
  \*****************************************************/
/*! exports provided: SecondComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComsComponent", function() { return SecondComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");



var SecondComsComponent = /** @class */ (function () {
    function SecondComsComponent(componentFactoryResolver, eventService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
    }
    SecondComsComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SecondComsComponent.prototype.ngOnChanges = function (changes) {
        // const viewContainerRef = this.appAnchor.viewContainerRef;
        // viewContainerRef.clear();
        this.loadComponent();
    };
    SecondComsComponent.prototype.loadComponent = function () {
        var _this = this;
        var viewContainerRef = this.myRef;
        viewContainerRef.clear();
        this.subComs.forEach(function (v) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance).tagData = v.tagData;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SecondComsComponent.prototype, "subComs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secondComs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], SecondComsComponent.prototype, "myRef", void 0);
    SecondComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: '<section>\n' +
                '<ng-template #secondComs></ng-template>\n' +
                '</section>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], SecondComsComponent);
    return SecondComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/subAnchor.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/route/entry/subAnchor.directive.ts ***!
  \****************************************************/
/*! exports provided: AppSubTabAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubTabAnchorDirective", function() { return AppSubTabAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppSubTabAnchorDirective = /** @class */ (function () {
    function AppSubTabAnchorDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AppSubTabAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSubAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppSubTabAnchorDirective);
    return AppSubTabAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../coms/call/call.component */ "./src/app/coms/call/call.component.ts");
/* harmony import */ var _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route/entry/anchor.directive */ "./src/app/route/entry/anchor.directive.ts");
/* harmony import */ var _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route/entry/coms.component */ "./src/app/route/entry/coms.component.ts");
/* harmony import */ var _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route/entry/secondComs.component */ "./src/app/route/entry/secondComs.component.ts");
/* harmony import */ var _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../route/entry/footercoms.component */ "./src/app/route/entry/footercoms.component.ts");
/* harmony import */ var _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../route/entry/subAnchor.directive */ "./src/app/route/entry/subAnchor.directive.ts");
/* harmony import */ var _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../coms/footer-logo/footer-logo.component */ "./src/app/coms/footer-logo/footer-logo.component.ts");
/* harmony import */ var _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../route/entry/nav-one/nav-one.component */ "./src/app/route/entry/nav-one/nav-one.component.ts");













// import { TimesGapPipe } from './pipe/times-gap.pipe';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [
                _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["AppAnchorDirective"],
                _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_7__["ComsComponent"],
                _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_8__["SecondComsComponent"],
                _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__["FooterComsComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"],
                _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_12__["NavOneComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_11__["FooterLogoComponent"],
                _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_10__["AppSubTabAnchorDirective"]
            ],
            exports: [
                _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["AppAnchorDirective"],
                _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_7__["ComsComponent"],
                _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_8__["SecondComsComponent"],
                _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__["FooterComsComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"],
                _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_12__["NavOneComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_11__["FooterLogoComponent"],
                _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_10__["AppSubTabAnchorDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tab5-tab5-module.js.map