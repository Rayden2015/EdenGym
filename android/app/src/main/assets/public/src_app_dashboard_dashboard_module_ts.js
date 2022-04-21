"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3957);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ 9446);
/* harmony import */ var _shared_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utilities.service */ 5326);








let DashboardPage = class DashboardPage {
    constructor(modalController, firebase, router, utilities) {
        this.modalController = modalController;
        this.firebase = firebase;
        this.router = router;
        this.utilities = utilities;
        //workout:'Pilatest Tets'
        this.workoutLog = {};
        this.workoutLog.sets = 1;
    }
    ngOnInit() {
        this.loadWorkoutNames();
        this.loadInstructors();
    }
    closeModal() {
        this.modalController.dismiss();
    }
    addWorkoutLog() {
        console.log('AddWotkoutPage | addworkoutLog() | WorkoutLog', this.workoutLog);
        this.firebase.addWorkoutLog(this.workoutLog).then(() => {
            this.utilities.presentAlert('Workout', 'Wourkout Saved Successfully');
            this.router.navigateByUrl('/tabs/tabs/tab2', { replaceUrl: true });
        }).catch((e) => {
            this.utilities.presentAlert('Save Wrokout Error', e.message);
            console.error('Add Workout Page | addWorkoutLog : ', e.message);
        });
    }
    loadWorkoutNames() {
        this.firebase.loadWorkoutNames().subscribe((data) => {
            console.log('WorkoutNames', data);
            this.workoutNames = data;
        });
    }
    loadInstructors() {
        this.firebase.loadInstructors().subscribe((data) => {
            console.log('Add Workout page | loadInstructors() | ', data);
            this.instructorNames = data;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 5065:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3957:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Log Workout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime [(ngModel)]=\"this.workoutLog.date\" [value]=\"this.workoutLog.date\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Time</ion-label>\n      <ion-datetime [(ngModel)]=\"this.workoutLog.startTime\" display-format=\"HH:mm:ss\" picker-format=\"HH:mm\" ></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Workout</ion-label>\n      <ion-select [(ngModel)]=\"this.workoutLog.workout\">\n        <ion-select-option *ngFor=\"let workoutName of this.workoutNames\"  value=\"{{this.workoutName.name}}\">{{this.workoutName.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Weight (kg)</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"this.workoutLog.weight\" [min]=\"5\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Repitions</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"this.workoutLog.repititions\" [min]=\"1\" [value]=\"1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sets</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"this.workoutLog.sets\" value=\"1\" [min]=\"1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Instructor</ion-label>\n      <ion-select [(ngModel)]=\"this.workoutLog.instructor\">\n        <ion-select-option *ngFor=\"let instructor of this.instructorNames\"  value=\"{{this.instructor.firstName}} {{this.instructor.lastName}}\">{{this.instructor.firstName + \" \"+ this.instructor.lastName}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">How Difficult was the workout?</ion-label>\n          <ion-select [(ngModel)]=\"this.workoutLog.howDifficult\">\n            <ion-select-option>Very Easy</ion-select-option>\n            <ion-select-option>Easy</ion-select-option>\n            <ion-select-option>Normal</ion-select-option>\n            <ion-select-option>Difficult</ion-select-option>\n            <ion-select-option>Very Difficult</ion-select-option>\n          </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Comments</ion-label>\n      <ion-textarea [(ngModel)]=\"this.workoutLog.comments\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n\n    <ion-fab-list vertical=\"center\" horizontal=\"end\">\n      <ion-fab-button (click)=\"addWorkoutLog()\" color=\"primary\">\n        <ion-icon name=\"save-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button [routerLink]=\"['/tabs/tabs/tab2']\" color=\"danger\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab-list>\n\n\n\n\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addWorkoutLog()\" color=\"primary\">\n      <ion-icon name=\"save-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" >\n    <ion-fab-button [routerLink]=\"['/tabs/tabs/tab2']\" color=\"danger\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map