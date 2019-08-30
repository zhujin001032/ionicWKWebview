(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var _coms_coms_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coms/coms.module */ "./src/app/coms/coms.module.ts");
/* harmony import */ var _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-history/search-history.page */ "./src/app/search-history/search-history.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _coms_address_map_address_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../coms/address-map/address-map.component */ "./src/app/coms/address-map/address-map.component.ts");
/* harmony import */ var _coms_address_address_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../coms/address/address.page */ "./src/app/coms/address/address.page.ts");
/* harmony import */ var _coms_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../coms/article-list/article-list.component */ "./src/app/coms/article-list/article-list.component.ts");
/* harmony import */ var _coms_bIcon_link_bIcon_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../coms/bIcon-link/bIcon-link.component */ "./src/app/coms/bIcon-link/bIcon-link.component.ts");
/* harmony import */ var _coms_basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../coms/basic-list/basic-list.component */ "./src/app/coms/basic-list/basic-list.component.ts");
/* harmony import */ var _coms_block_link_block_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../coms/block-link/block-link.component */ "./src/app/coms/block-link/block-link.component.ts");
/* harmony import */ var _coms_brand_brand_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../coms/brand/brand.component */ "./src/app/coms/brand/brand.component.ts");
/* harmony import */ var _coms_browsing_volume_browsing_volume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../coms/browsing-volume/browsing-volume.component */ "./src/app/coms/browsing-volume/browsing-volume.component.ts");
/* harmony import */ var _coms_button_nav_button_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../coms/button-nav/button-nav.component */ "./src/app/coms/button-nav/button-nav.component.ts");
/* harmony import */ var _coms_call_call_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../coms/call/call.component */ "./src/app/coms/call/call.component.ts");
/* harmony import */ var _coms_case_case_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../coms/case/case.component */ "./src/app/coms/case/case.component.ts");
/* harmony import */ var _coms_change_pwd_change_pwd_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../coms/change-pwd/change-pwd.component */ "./src/app/coms/change-pwd/change-pwd.component.ts");
/* harmony import */ var _coms_chat_invite_chat_invite_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../coms/chat-invite/chat-invite.component */ "./src/app/coms/chat-invite/chat-invite.component.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _coms_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../coms/choose-type/choose-type.component */ "./src/app/coms/choose-type/choose-type.component.ts");
/* harmony import */ var _coms_city_modal_city_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../coms/city-modal/city-modal.component */ "./src/app/coms/city-modal/city-modal.component.ts");
/* harmony import */ var _coms_column_tag_column_tag_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../coms/column-tag/column-tag.component */ "./src/app/coms/column-tag/column-tag.component.ts");
/* harmony import */ var _coms_common_btn_common_btn_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../coms/common-btn/common-btn.component */ "./src/app/coms/common-btn/common-btn.component.ts");
/* harmony import */ var _coms_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../coms/consultant-list/consultant-list.component */ "./src/app/coms/consultant-list/consultant-list.component.ts");
/* harmony import */ var _coms_counselor_list_counselor_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../coms/counselor-list/counselor-list.component */ "./src/app/coms/counselor-list/counselor-list.component.ts");
/* harmony import */ var _coms_counselor_counselor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../coms/counselor/counselor.component */ "./src/app/coms/counselor/counselor.component.ts");
/* harmony import */ var _coms_customer_evaluation_customer_evaluation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../coms/customer-evaluation/customer-evaluation.component */ "./src/app/coms/customer-evaluation/customer-evaluation.component.ts");
/* harmony import */ var _coms_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../coms/customer-service/customer-service.component */ "./src/app/coms/customer-service/customer-service.component.ts");
/* harmony import */ var _coms_data_map_data_map_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../coms/data-map/data-map.component */ "./src/app/coms/data-map/data-map.component.ts");
/* harmony import */ var _coms_detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../coms/detail-list/detail-list.component */ "./src/app/coms/detail-list/detail-list.component.ts");
/* harmony import */ var _coms_detail_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../coms/detail/detail.component */ "./src/app/coms/detail/detail.component.ts");
/* harmony import */ var _coms_edit_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../coms/edit/edit.component */ "./src/app/coms/edit/edit.component.ts");
/* harmony import */ var _coms_edit_editnickname_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../coms/edit/editnickname.page */ "./src/app/coms/edit/editnickname.page.ts");
/* harmony import */ var _coms_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../coms/example-list/example-list.component */ "./src/app/coms/example-list/example-list.component.ts");
/* harmony import */ var _coms_exclusive_consultant_exclusive_consultant_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../coms/exclusive-consultant/exclusive-consultant.component */ "./src/app/coms/exclusive-consultant/exclusive-consultant.component.ts");
/* harmony import */ var _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../coms/footer-logo/footer-logo.component */ "./src/app/coms/footer-logo/footer-logo.component.ts");
/* harmony import */ var _coms_footer_protocol_footer_protocol_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../coms/footer-protocol/footer-protocol.component */ "./src/app/coms/footer-protocol/footer-protocol.component.ts");
/* harmony import */ var _coms_help_transfer_siting_help_transfer_siting_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../coms/help-transfer-siting/help-transfer-siting.component */ "./src/app/coms/help-transfer-siting/help-transfer-siting.component.ts");
/* harmony import */ var _coms_icon_link_icon_link_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../coms/icon-link/icon-link.component */ "./src/app/coms/icon-link/icon-link.component.ts");
/* harmony import */ var _coms_industry_modal_industry_modal_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../coms/industry-modal/industry-modal.component */ "./src/app/coms/industry-modal/industry-modal.component.ts");
/* harmony import */ var _coms_invitation_to_shop_invitation_to_shop_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../coms/invitation-to-shop/invitation-to-shop.component */ "./src/app/coms/invitation-to-shop/invitation-to-shop.component.ts");
/* harmony import */ var _coms_line_line_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../coms/line/line.component */ "./src/app/coms/line/line.component.ts");
/* harmony import */ var _coms_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../coms/link-list/link-list.component */ "./src/app/coms/link-list/link-list.component.ts");
/* harmony import */ var _coms_login_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../coms/login/login.component */ "./src/app/coms/login/login.component.ts");
/* harmony import */ var _coms_logo_call_logo_call_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../coms/logo-call/logo-call.component */ "./src/app/coms/logo-call/logo-call.component.ts");
/* harmony import */ var _coms_map_show_map_show_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../coms/map-show/map-show.component */ "./src/app/coms/map-show/map-show.component.ts");
/* harmony import */ var _coms_mine_list_mine_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../coms/mine-list/mine-list.component */ "./src/app/coms/mine-list/mine-list.component.ts");
/* harmony import */ var _coms_mine_mine_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../coms/mine/mine.component */ "./src/app/coms/mine/mine.component.ts");
/* harmony import */ var _coms_news_carousel_news_carousel_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../coms/news-carousel/news-carousel.component */ "./src/app/coms/news-carousel/news-carousel.component.ts");
/* harmony import */ var _coms_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../coms/news-list/news-list.component */ "./src/app/coms/news-list/news-list.component.ts");
/* harmony import */ var _coms_pay_fail_pay_fail_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../coms/pay-fail/pay-fail.component */ "./src/app/coms/pay-fail/pay-fail.component.ts");
/* harmony import */ var _coms_pay_success_pay_success_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../coms/pay-success/pay-success.component */ "./src/app/coms/pay-success/pay-success.component.ts");
/* harmony import */ var _coms_pay_way_pay_way_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../coms/pay-way/pay-way.component */ "./src/app/coms/pay-way/pay-way.component.ts");
/* harmony import */ var _coms_post_and_eitor_hiddenele_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../coms/post-and-eitor/hiddenele.component */ "./src/app/coms/post-and-eitor/hiddenele.component.ts");
/* harmony import */ var _coms_post_and_eitor_post_and_eitor_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../coms/post-and-eitor/post-and-eitor.component */ "./src/app/coms/post-and-eitor/post-and-eitor.component.ts");
/* harmony import */ var _coms_post_and_eitor_textArea_page__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../coms/post-and-eitor/textArea.page */ "./src/app/coms/post-and-eitor/textArea.page.ts");
/* harmony import */ var _coms_poster_call_poster_call_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../coms/poster-call/poster-call.component */ "./src/app/coms/poster-call/poster-call.component.ts");
/* harmony import */ var _coms_poster_poster_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../coms/poster/poster.component */ "./src/app/coms/poster/poster.component.ts");
/* harmony import */ var _coms_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../coms/project-list/project-list.component */ "./src/app/coms/project-list/project-list.component.ts");
/* harmony import */ var _coms_promotion_record_list_promotion_record_list_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../coms/promotion-record-list/promotion-record-list.component */ "./src/app/coms/promotion-record-list/promotion-record-list.component.ts");
/* harmony import */ var _coms_protocol_template_protocol_template_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../coms/protocol-template/protocol-template.component */ "./src/app/coms/protocol-template/protocol-template.component.ts");
/* harmony import */ var _coms_quotation_remark_quotation_remark_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../coms/quotation-remark/quotation-remark.component */ "./src/app/coms/quotation-remark/quotation-remark.component.ts");
/* harmony import */ var _coms_recommend_list_recommend_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../coms/recommend-list/recommend-list.component */ "./src/app/coms/recommend-list/recommend-list.component.ts");
/* harmony import */ var _coms_register_argument_page__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../coms/register/argument.page */ "./src/app/coms/register/argument.page.ts");
/* harmony import */ var _coms_register_register_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../coms/register/register.component */ "./src/app/coms/register/register.component.ts");
/* harmony import */ var _coms_search_search_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../coms/search/search.component */ "./src/app/coms/search/search.component.ts");
/* harmony import */ var _coms_service_agreement_checked_service_agreement_checked_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../coms/service-agreement-checked/service-agreement-checked.component */ "./src/app/coms/service-agreement-checked/service-agreement-checked.component.ts");
/* harmony import */ var _coms_service_brief_service_brief_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../coms/service-brief/service-brief.component */ "./src/app/coms/service-brief/service-brief.component.ts");
/* harmony import */ var _coms_service_evaluation_service_evaluation_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../coms/service-evaluation/service-evaluation.component */ "./src/app/coms/service-evaluation/service-evaluation.component.ts");
/* harmony import */ var _coms_service_quote_salesman_service_quote_salesman_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../coms/service-quote-salesman/service-quote-salesman.component */ "./src/app/coms/service-quote-salesman/service-quote-salesman.component.ts");
/* harmony import */ var _coms_service_quote_service_quote_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../coms/service-quote/service-quote.component */ "./src/app/coms/service-quote/service-quote.component.ts");
/* harmony import */ var _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../coms/settings-page/about-us.page */ "./src/app/coms/settings-page/about-us.page.ts");
/* harmony import */ var _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../coms/settings-page/settings.page */ "./src/app/coms/settings-page/settings.page.ts");
/* harmony import */ var _coms_show_list_show_list_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../coms/show-list/show-list.component */ "./src/app/coms/show-list/show-list.component.ts");
/* harmony import */ var _coms_sift_filter_sift_filter_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../coms/sift-filter/sift-filter.component */ "./src/app/coms/sift-filter/sift-filter.component.ts");
/* harmony import */ var _coms_sift_sift_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../coms/sift/sift.component */ "./src/app/coms/sift/sift.component.ts");
/* harmony import */ var _coms_slides_imgage_img_slide_page__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../coms/slides-imgage/img-slide.page */ "./src/app/coms/slides-imgage/img-slide.page.ts");
/* harmony import */ var _coms_slides_imgage_slides_imgage_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../coms/slides-imgage/slides-imgage.component */ "./src/app/coms/slides-imgage/slides-imgage.component.ts");
/* harmony import */ var _coms_store_consultant_store_consultant_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../coms/store-consultant/store-consultant.component */ "./src/app/coms/store-consultant/store-consultant.component.ts");
/* harmony import */ var _coms_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../coms/store-list/store-list.component */ "./src/app/coms/store-list/store-list.component.ts");
/* harmony import */ var _coms_support_facilities_facilty_page__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../coms/support-facilities/facilty.page */ "./src/app/coms/support-facilities/facilty.page.ts");
/* harmony import */ var _coms_system_news_system_news_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../coms/system-news/system-news.component */ "./src/app/coms/system-news/system-news.component.ts");
/* harmony import */ var _coms_tips_tips_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../coms/tips/tips.component */ "./src/app/coms/tips/tips.component.ts");
/* harmony import */ var _coms_title_title_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../coms/title/title.component */ "./src/app/coms/title/title.component.ts");
/* harmony import */ var _coms_top_tab_top_tab_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../coms/top-tab/top-tab.component */ "./src/app/coms/top-tab/top-tab.component.ts");
/* harmony import */ var _coms_fixed_tab_fixed_tab_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../coms/fixed-tab/fixed-tab.component */ "./src/app/coms/fixed-tab/fixed-tab.component.ts");
/* harmony import */ var _coms_top_tips_top_tips_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../coms/top-tips/top-tips.component */ "./src/app/coms/top-tips/top-tips.component.ts");
/* harmony import */ var _coms_transfer_detail_transfer_detail_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../coms/transfer-detail/transfer-detail.component */ "./src/app/coms/transfer-detail/transfer-detail.component.ts");
/* harmony import */ var _coms_upload_image_img_page__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../coms/upload-image/img.page */ "./src/app/coms/upload-image/img.page.ts");
/* harmony import */ var _coms_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../coms/upload-image/upload-image.component */ "./src/app/coms/upload-image/upload-image.component.ts");
/* harmony import */ var _coms_url_url_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../coms/url/url.component */ "./src/app/coms/url/url.component.ts");
/* harmony import */ var _coms_video_video_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../coms/video/video.component */ "./src/app/coms/video/video.component.ts");
/* harmony import */ var _coms_voice_voice_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../coms/voice/voice.component */ "./src/app/coms/voice/voice.component.ts");
/* harmony import */ var _coms_way_skills_way_skills_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../coms/way-skills/way-skills.component */ "./src/app/coms/way-skills/way-skills.component.ts");
/* harmony import */ var _coms_address_show_map_show_map_page__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../coms/address/show-map/show-map.page */ "./src/app/coms/address/show-map/show-map.page.ts");
/* harmony import */ var _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../route/entry/nav-one/nav-one.component */ "./src/app/route/entry/nav-one/nav-one.component.ts");
/* harmony import */ var src_app_coms_promotion_of_statistics_promotion_of_statistics_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! src/app/coms/promotion-of-statistics/promotion-of-statistics.component */ "./src/app/coms/promotion-of-statistics/promotion-of-statistics.component.ts");
/* harmony import */ var src_app_coms_member_status_member_status_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! src/app/coms/member-status/member-status.component */ "./src/app/coms/member-status/member-status.component.ts");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _coms_button_button_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../coms/button/button.component */ "./src/app/coms/button/button.component.ts");
/* harmony import */ var _coms_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ../coms/submit-form/submit-form.component */ "./src/app/coms/submit-form/submit-form.component.ts");
/* harmony import */ var src_app_coms_chatonline_chatonline_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! src/app/coms/chatonline/chatonline.component */ "./src/app/coms/chatonline/chatonline.component.ts");











































































































var routes = [
    {
        path: 'settingsPage',
        component: _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_77__["SettingsPage"]
    }, {
        path: 'aboutUsPage',
        component: _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_76__["AboutUsPage"]
    }, {
        path: 'navSearch',
        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_8__["SearchHistoryPage"]
    },
    {
        path: 'navUrl',
        component: _coms_url_url_component__WEBPACK_IMPORTED_MODULE_95__["UrlComponent"]
    },
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_103__["Tab2Page"]
    },
    {
        path: 'nav1',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav2',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav3',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav4',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav5',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav6',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav7',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav8',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav9',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav10',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav11',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav12',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav13',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav14',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav15',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav16',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav17',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav18',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav19',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav20',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: 'nav21',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    },
    {
        path: '**',
        component: _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_100__["NavOneComponent"]
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_7__["ComsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_7__["ComsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"].forRoot()
                // RouterModule.forChild([{ path: '', component: Tab1Page }])
            ],
            declarations: [
                _tab2_page__WEBPACK_IMPORTED_MODULE_103__["Tab2Page"],
            ],
            entryComponents: [
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
                _coms_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_54__["NewsListComponent"],
                _coms_icon_link_icon_link_component__WEBPACK_IMPORTED_MODULE_43__["IconLinkComponent"],
                _coms_sift_sift_component__WEBPACK_IMPORTED_MODULE_80__["SiftComponent"],
                _coms_mine_mine_component__WEBPACK_IMPORTED_MODULE_52__["MineComponent"],
                _coms_login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"],
                _coms_register_register_component__WEBPACK_IMPORTED_MODULE_69__["RegisterComponent"],
                _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_23__["ChooseCityComponent"],
                _coms_change_pwd_change_pwd_component__WEBPACK_IMPORTED_MODULE_21__["ChangePwdComponent"],
                _coms_detail_detail_component__WEBPACK_IMPORTED_MODULE_35__["DetailComponent"],
                _coms_show_list_show_list_component__WEBPACK_IMPORTED_MODULE_78__["ShowListComponent"],
                _coms_edit_edit_component__WEBPACK_IMPORTED_MODULE_36__["EditComponent"],
                _coms_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_63__["ProjectListComponent"],
                _coms_basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_14__["BasicListComponent"],
                _coms_detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_34__["DetailListComponent"],
                _coms_address_map_address_map_component__WEBPACK_IMPORTED_MODULE_10__["AddressMapComponent"],
                _coms_map_show_map_show_component__WEBPACK_IMPORTED_MODULE_50__["MapShowComponent"],
                _coms_edit_editnickname_page__WEBPACK_IMPORTED_MODULE_37__["EditNickNameComponent"],
                _coms_upload_image_img_page__WEBPACK_IMPORTED_MODULE_93__["ImgPage"],
                _coms_post_and_eitor_post_and_eitor_component__WEBPACK_IMPORTED_MODULE_59__["PostAndEitorComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_19__["CallComponent"],
                _coms_industry_modal_industry_modal_component__WEBPACK_IMPORTED_MODULE_44__["IndustryModalComponent"],
                _coms_city_modal_city_modal_component__WEBPACK_IMPORTED_MODULE_25__["CityModalComponent"],
                _coms_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_38__["ExampleListComponent"],
                _coms_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_84__["StoreListComponent"],
                _coms_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_24__["ChooseTypeComponent"],
                _coms_sift_filter_sift_filter_component__WEBPACK_IMPORTED_MODULE_79__["SiftFilterComponent"],
                _coms_column_tag_column_tag_component__WEBPACK_IMPORTED_MODULE_26__["ColumnTagComponent"],
                _coms_slides_imgage_img_slide_page__WEBPACK_IMPORTED_MODULE_81__["ImgSlidePage"],
                _coms_support_facilities_facilty_page__WEBPACK_IMPORTED_MODULE_85__["FaciltyPage"],
                _coms_slides_imgage_slides_imgage_component__WEBPACK_IMPORTED_MODULE_82__["SlidesImgageComponent"],
                _coms_logo_call_logo_call_component__WEBPACK_IMPORTED_MODULE_49__["LogoCallComponent"],
                _coms_block_link_block_link_component__WEBPACK_IMPORTED_MODULE_15__["BlockLinkComponent"],
                _coms_button_button_component__WEBPACK_IMPORTED_MODULE_104__["ButtonComponent"],
                _coms_bIcon_link_bIcon_link_component__WEBPACK_IMPORTED_MODULE_13__["BIconLinkComponent"],
                _coms_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_47__["LinkListComponent"],
                _coms_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_94__["UploadImageComponent"],
                _coms_post_and_eitor_hiddenele_component__WEBPACK_IMPORTED_MODULE_58__["hiddeneleComponent"],
                _coms_button_nav_button_nav_component__WEBPACK_IMPORTED_MODULE_18__["ButtonNavComponent"],
                _coms_address_address_page__WEBPACK_IMPORTED_MODULE_11__["AddressPage"],
                _coms_address_show_map_show_map_page__WEBPACK_IMPORTED_MODULE_99__["ShowMapPage"],
                _coms_transfer_detail_transfer_detail_component__WEBPACK_IMPORTED_MODULE_92__["TransferDetailComponent"],
                _coms_video_video_component__WEBPACK_IMPORTED_MODULE_96__["VideoComponent"],
                _coms_post_and_eitor_textArea_page__WEBPACK_IMPORTED_MODULE_60__["textAreaPage"],
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _coms_register_argument_page__WEBPACK_IMPORTED_MODULE_68__["ArgumentPage"],
                _coms_search_search_component__WEBPACK_IMPORTED_MODULE_70__["SearchComponent"],
                _coms_settings_page_settings_page__WEBPACK_IMPORTED_MODULE_77__["SettingsPage"],
                _coms_settings_page_about_us_page__WEBPACK_IMPORTED_MODULE_76__["AboutUsPage"],
                _coms_title_title_component__WEBPACK_IMPORTED_MODULE_88__["TitleComponent"],
                _coms_help_transfer_siting_help_transfer_siting_component__WEBPACK_IMPORTED_MODULE_42__["HelpTransferSitingComponent"],
                _coms_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_12__["ArticleListComponent"],
                _coms_recommend_list_recommend_list_component__WEBPACK_IMPORTED_MODULE_67__["RecommendListComponent"],
                _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_8__["SearchHistoryPage"],
                _coms_mine_list_mine_list_component__WEBPACK_IMPORTED_MODULE_51__["MineListComponent"],
                _coms_data_map_data_map_component__WEBPACK_IMPORTED_MODULE_33__["DataMapComponent"],
                _coms_poster_poster_component__WEBPACK_IMPORTED_MODULE_62__["PosterComponent"],
                _coms_poster_call_poster_call_component__WEBPACK_IMPORTED_MODULE_61__["PosterCallComponent"],
                _coms_case_case_component__WEBPACK_IMPORTED_MODULE_20__["CaseComponent"],
                _coms_counselor_list_counselor_list_component__WEBPACK_IMPORTED_MODULE_29__["CounselorListComponent"],
                _coms_store_consultant_store_consultant_component__WEBPACK_IMPORTED_MODULE_83__["StoreConsultantComponent"],
                _coms_news_carousel_news_carousel_component__WEBPACK_IMPORTED_MODULE_53__["NewsCarouselComponent"],
                _coms_brand_brand_component__WEBPACK_IMPORTED_MODULE_16__["BrandComponent"],
                _coms_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_28__["ConsultantListComponent"],
                _coms_counselor_counselor_component__WEBPACK_IMPORTED_MODULE_30__["CounselorComponent"],
                _coms_top_tab_top_tab_component__WEBPACK_IMPORTED_MODULE_89__["TopTabComponent"],
                _coms_fixed_tab_fixed_tab_component__WEBPACK_IMPORTED_MODULE_90__["FixedTabComponent"],
                _coms_service_evaluation_service_evaluation_component__WEBPACK_IMPORTED_MODULE_73__["ServiceEvaluationComponent"],
                _coms_tips_tips_component__WEBPACK_IMPORTED_MODULE_87__["TipsComponent"],
                _coms_way_skills_way_skills_component__WEBPACK_IMPORTED_MODULE_98__["WaySkillsComponent"],
                _coms_line_line_component__WEBPACK_IMPORTED_MODULE_46__["LineComponent"],
                _coms_voice_voice_component__WEBPACK_IMPORTED_MODULE_97__["VoiceComponent"],
                _coms_service_brief_service_brief_component__WEBPACK_IMPORTED_MODULE_72__["ServiceBriefComponent"],
                _coms_system_news_system_news_component__WEBPACK_IMPORTED_MODULE_86__["SystemNewsComponent"],
                _coms_service_quote_service_quote_component__WEBPACK_IMPORTED_MODULE_75__["ServiceQuoteComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_40__["FooterLogoComponent"],
                _coms_quotation_remark_quotation_remark_component__WEBPACK_IMPORTED_MODULE_66__["QuotationRemarkComponent"],
                _coms_service_quote_salesman_service_quote_salesman_component__WEBPACK_IMPORTED_MODULE_74__["ServiceQuoteSalesmanComponent"],
                _coms_common_btn_common_btn_component__WEBPACK_IMPORTED_MODULE_27__["CommonBtnComponent"],
                _coms_chat_invite_chat_invite_component__WEBPACK_IMPORTED_MODULE_22__["ChatInviteComponent"],
                _coms_top_tips_top_tips_component__WEBPACK_IMPORTED_MODULE_91__["TopTipsComponent"],
                _coms_pay_way_pay_way_component__WEBPACK_IMPORTED_MODULE_57__["PayWayComponent"],
                _coms_pay_success_pay_success_component__WEBPACK_IMPORTED_MODULE_56__["PaySuccessComponent"],
                _coms_pay_fail_pay_fail_component__WEBPACK_IMPORTED_MODULE_55__["PayFailComponent"],
                _coms_service_agreement_checked_service_agreement_checked_component__WEBPACK_IMPORTED_MODULE_71__["ServiceAgreementCheckedComponent"],
                _coms_invitation_to_shop_invitation_to_shop_component__WEBPACK_IMPORTED_MODULE_45__["InvitationToShopComponent"],
                _coms_footer_protocol_footer_protocol_component__WEBPACK_IMPORTED_MODULE_41__["FooterProtocolComponent"],
                src_app_coms_chatonline_chatonline_component__WEBPACK_IMPORTED_MODULE_106__["ChatonlineComponent"],
                _coms_customer_evaluation_customer_evaluation_component__WEBPACK_IMPORTED_MODULE_31__["CustomerEvaluationComponent"],
                _coms_protocol_template_protocol_template_component__WEBPACK_IMPORTED_MODULE_65__["ProtocolTemplateComponent"],
                _coms_promotion_record_list_promotion_record_list_component__WEBPACK_IMPORTED_MODULE_64__["PromotionRecordListComponent"],
                _coms_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_32__["CustomerServiceComponent"],
                _coms_exclusive_consultant_exclusive_consultant_component__WEBPACK_IMPORTED_MODULE_39__["ExclusiveConsultantComponent"],
                _coms_browsing_volume_browsing_volume_component__WEBPACK_IMPORTED_MODULE_17__["BrowsingVolumeComponent"],
                src_app_coms_promotion_of_statistics_promotion_of_statistics_component__WEBPACK_IMPORTED_MODULE_101__["PromotionOfStatisticsComponent"],
                _coms_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_105__["SubmitFormComponent"],
                src_app_coms_member_status_member_status_component__WEBPACK_IMPORTED_MODULE_102__["MemberStatusComponent"]
            ]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");
/* harmony import */ var _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");










var Tab2Page = /** @class */ (function () {
    function Tab2Page(http, route, router, appGlobalService, modalController, mapBaiduService, tabsService, eventService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.modalController = modalController;
        this.mapBaiduService = mapBaiduService;
        this.tabsService = tabsService;
        this.eventService = eventService;
        this.params = '';
        this.isGrayBg = false; // 默认背景为灰色
        this.showWaterImg = false;
        // 位置对象
        this.positionInfo = {};
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.positionInfo = JSON.parse(localStorage.getItem('position'));
        this.getViewData();
    };
    Tab2Page.prototype.getViewData = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.sessionId = localStorage.getItem('sessionId');
            var params = {
                sessionId: _this.sessionId,
                viewId: p.viewId,
                params: { code: _this.positionInfo.code }
            };
            console.log('get route params---->', p.viewId);
            /** 避免重复请求 */
            if (p.viewId === undefined) {
                return;
            }
            if (_this.viewId && _this.viewId === p.viewId && localStorage.getItem('needRefreshTab2') !== 'true') {
                return;
            }
            else {
            }
            _this.viewId = p.viewId;
            _this.netWork(params);
            localStorage.removeItem('needRefreshTab2');
        });
    };
    Tab2Page.prototype.netWork = function (params) {
        var _this = this;
        var newParams = {};
        if (params === undefined) {
            newParams = {
                sessionId: this.sessionId,
                viewId: this.viewId,
                params: { code: this.positionInfo.code }
            };
        }
        else {
            newParams = params;
        }
        this.http.post('application/part/', newParams, function (res) {
            // 请求数据成功
            if (res) {
                _this.tabsService.getPageData(res, function (pageData) {
                    _this.coms = pageData.coms;
                    _this.footerComs = pageData.footerComs;
                    _this.titleBar = pageData.titleBar;
                    _this.isGrayBg = pageData.isGrayBg;
                    _this.backgroundImg = pageData.backgroundImg;
                    _this.showWaterImg = pageData.showWaterImg;
                });
            }
            else {
                // 请求数据失败
                _this.viewId = undefined;
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
            }
        });
    };
    Tab2Page.prototype.buttonClick = function (obj) {
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
    Tab2Page.prototype.showCityModel = function (target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_5__["ChooseCityComponent"],
                                componentProps: { value: target, type: 1, modalTitle: '选择城市' } //    首页是1 默认不传或者0
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            that.positionInfo = JSON.parse(localStorage.getItem('position'));
                            that.sessionId = localStorage.getItem('sessionId');
                            var params = {
                                sessionId: that.sessionId,
                                viewId: that.viewId,
                                params: { code: that.positionInfo.code }
                            };
                            // 切换完城市后需要刷新tab1-3
                            localStorage.setItem('needRefreshTab1', 'true');
                            localStorage.setItem('needRefreshTab2', 'true');
                            localStorage.setItem('needRefreshTab3', 'true');
                            localStorage.setItem('needRefreshTab4', 'true');
                            localStorage.setItem('needRefreshTab5', 'true');
                            that.netWork(params);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab2Page.prototype.searchButtonClick = function (obj) {
        console.log('to search history');
        localStorage.removeItem('searchParams');
        var searchPath = localStorage.getItem('tabPath') + '/navSearch';
        this.router.navigate([searchPath], { queryParams: { obj: JSON.stringify(obj) } });
    };
    /**
     * 返回方法
     */
    Tab2Page.prototype.back = function () {
        window.history.back();
    };
    Tab2Page.prototype.close = function () {
        window.history.back();
    };
    /** 收藏 */
    Tab2Page.prototype.favorite = function (submit) {
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
    /** 分享 */
    Tab2Page.prototype.share = function (submit) {
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
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ../route/entry/entry.page.html */ "./src/app/route/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ../route/entry/entry.page.scss */ "./src/app/route/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_6__["AppGlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_8__["MapBaiduService"],
            _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_9__["TabsService"],
            src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map