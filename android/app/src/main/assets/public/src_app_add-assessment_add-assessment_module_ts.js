"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-assessment_add-assessment_module_ts"],{

/***/ 48120:
/*!*****************************************************************!*\
  !*** ./src/app/add-assessment/add-assessment-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAssessmentPageRoutingModule": () => (/* binding */ AddAssessmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_assessment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-assessment.page */ 275);




const routes = [
    {
        path: '',
        component: _add_assessment_page__WEBPACK_IMPORTED_MODULE_0__.AddAssessmentPage
    }
];
let AddAssessmentPageRoutingModule = class AddAssessmentPageRoutingModule {
};
AddAssessmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddAssessmentPageRoutingModule);



/***/ }),

/***/ 21770:
/*!*********************************************************!*\
  !*** ./src/app/add-assessment/add-assessment.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAssessmentPageModule": () => (/* binding */ AddAssessmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _add_assessment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-assessment-routing.module */ 48120);
/* harmony import */ var _add_assessment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-assessment.page */ 275);







let AddAssessmentPageModule = class AddAssessmentPageModule {
};
AddAssessmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_assessment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddAssessmentPageRoutingModule
        ],
        declarations: [_add_assessment_page__WEBPACK_IMPORTED_MODULE_1__.AddAssessmentPage]
    })
], AddAssessmentPageModule);



/***/ }),

/***/ 275:
/*!*******************************************************!*\
  !*** ./src/app/add-assessment/add-assessment.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAssessmentPage": () => (/* binding */ AddAssessmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_assessment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-assessment.page.html?ngResource */ 42434);
/* harmony import */ var _add_assessment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-assessment.page.scss?ngResource */ 89824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ 19446);






let AddAssessmentPage = class AddAssessmentPage {
    constructor(firebase, router) {
        this.firebase = firebase;
        this.router = router;
        this.assessment = {};
    }
    ngOnInit() {
        this.loadInstructors();
    }
    addAssessment() {
        this.firebase.addAssessment(this.assessment).then(() => {
            console.log('Assessment | Saved Succesfully');
            this.router.navigateByUrl('/tabs/tabs/tab3');
        }).catch((e) => console.error(e.message));
    }
    loadInstructors() {
        this.firebase.loadInstructors().subscribe((data) => {
            console.log('Add Assessment Page | loadInstructors() | ', data);
            this.instructorNames = data;
        });
    }
};
AddAssessmentPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AddAssessmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-assessment',
        template: _add_assessment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_assessment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAssessmentPage);



/***/ }),

/***/ 89824:
/*!********************************************************************!*\
  !*** ./src/app/add-assessment/add-assessment.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXNzZXNzbWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 42434:
/*!********************************************************************!*\
  !*** ./src/app/add-assessment/add-assessment.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Assessment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Date</ion-label>\n      <ion-datetime [(ngModel)]=\"this.assessment.date\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Instructor</ion-label>\n      <ion-select [(ngModel)]=\"this.assessment.instructor\">\n        <ion-select-option *ngFor=\"let instructor of this.instructorNames\"  value=\"{{this.instructor.firstName}} {{this.instructor.lastName}}\">{{this.instructor.firstName + \" \"+ this.instructor.lastName}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Heart Rate (Before Training)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.heartRate\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Weight (kg)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.weight\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Body-Fat (%)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.bodyFat\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Body-Fat (kg)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.bodyFatKg\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Muscle Mass (%)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.muscleMass\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Resting Metabolism (RM)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.restingMetabolism\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Body Mass Index (BMI)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.bmi\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Visceral Fat</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.visceralFat\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Waistline (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.waistline\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Hip (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.hips\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Chest (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.chest\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Right Thigh (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.rightThigh\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Left Thigh (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.leftThigh\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Right Upper Arm (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.rightUppperArm\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Left Upper Arm (cm)</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.leftUpperArm\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Waistline for WHR</ion-label>\n      <ion-input [(ngModel)]=\"this.assessment.waistlineWHR\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n   <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/tabs/tabs/tab3']\" color=\"danger\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addAssessment()\" color=\"primary\">\n      <ion-icon name=\"save-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_add-assessment_add-assessment_module_ts.js.map