"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 99769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 77087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ 19446);





let Tab3Page = class Tab3Page {
    constructor(firebase) {
        this.firebase = firebase;
        this.assessment = {};
    }
    ngOnInit() {
        this.loadAssessments();
    }
    loadAssessments() {
        this.firebase.loadAssessments().subscribe((data) => {
            this.assessments = data;
            console.log('Tabs 3 Page | loadAssessments() | assessments laoded successfully', this.assessments);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 77087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 99769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    Assessments\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Assessments</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list *ngIf=\"assessments\">\n    <ion-card *ngFor=\"let assessment of this.assessments\">\n      <ion-card-header>\n        <ion-card-title>{{this.assessment.date | date}}</ion-card-title>\n      </ion-card-header>\n      <ion-item>\n        <ion-label position=\"floating\">Instructor</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.instructor\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Heart Rate (Before Training)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.heartRate\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Weight (kg)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.weight\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Body-Fat (%)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.bodyFat\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Body-Fat (kg)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.bodyFatKg\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Muscle Mass (%)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.muscleMass\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Resting Metabolism (RM)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.restingMetabolism\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Body Mass Index (BMI)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.bmi\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Visceral Fat</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.visceralFat\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Waistline (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.waistline\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Hip (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.hips\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Chest (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.chest\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Right Thigh (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.rightThigh\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Left Thigh (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.leftThigh\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Right Upper Arm (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.rightUppperArm\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Left Upper Arm (cm)</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.leftUpperArm\" readOnly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Waistline for WHR</ion-label>\n        <ion-input [(ngModel)]=\"this.assessment.waistlineWHR\" readOnly></ion-input>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/add-assessment']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map