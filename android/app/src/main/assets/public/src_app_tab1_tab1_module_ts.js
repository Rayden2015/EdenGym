"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 78165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ 19446);
/* harmony import */ var _shared_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utilities.service */ 55326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authentication.service */ 92851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);



/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */






let Tab1Page = class Tab1Page {
    constructor(firebaseService, utility, loadingController, auth, router) {
        this.firebaseService = firebaseService;
        this.utility = utility;
        this.loadingController = loadingController;
        this.auth = auth;
        this.router = router;
        this.profileList = [];
        this.profileData = {};
    }
    ngOnInit() {
        this.readLoginProfile();
    }
    readLoginProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //Loader
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Loading Profile'
                // duration: 2000
            });
            yield loading.present();
            //Getting User uid from Local Storage
            const userId = localStorage.getItem('user');
            console.log('User id', userId);
            //Loading Login Profile from Firebase
            this.firebaseService.readLoggedInProfile(userId).subscribe(data => {
                console.log('Login Profile :', data);
                this.profileData.company = data["company"];
                this.profileData.firstname = data["firstname"];
                this.profileData.surname = data["surname"];
                this.profileData.othernames = data["othernames"];
                this.profileData.date_of_birth = data["date_of_birth"];
                this.profileData.mobile_number = data["mobile_number"];
                this.profileData.whatsapp_number = data["whatsapp_number"];
                this.profileData.email_address = data["email_address"];
                this.profileData.profession = data["profession"];
                this.profileData.trained_in_gym = data["trained_in_gym"];
                this.profileData.fitness_goal = data["fitness_goal"];
            });
            loading.dismiss();
            console.log('Loading dismissed!');
        });
    }
    updateProfile() {
        try {
            this.firebaseService.updateProfile(this.profileData);
            this.utility.presentAlert('Proifle', 'Profile Updated Successfully');
        }
        catch (e) {
            this.utility.presentAlert('Profile', e.message);
        }
    }
    logout() {
        this.auth.SignOut();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _shared_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 78165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n\n<ion-list  *ngIf=\"profileData\">\n  <ion-item>\n    <ion-label position=\"floating\">Surname</ion-label>\n    <ion-input [(ngModel)]=\"this.profileData.surname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">First Name</ion-label>\n    <ion-input [(ngModel)]=\"this.profileData.firstname\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Other Names</ion-label>\n    <ion-input [(ngModel)]=\"this.profileData.othernames\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Date of Birth</ion-label>\n    <ion-datetime [(ngModel)]=\"this.profileData.date_of_birth\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Mobile Number</ion-label>\n    <ion-input type=\"tel\" [(ngModel)]=\"this.profileData.mobile_number\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Whatsapp Number</ion-label>\n    <ion-input type=\"tel\" [(ngModel)]=\"this.profileData.whatsapp_number\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Email Address</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"this.profileData.email_address\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Profession</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"this.profileData.profession\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Company</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"this.profileData.company\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <!-- <ion-label>Have you ever trained in a gym?</ion-label> -->\n    <ion-radio-group value=\"No\" [(ngModel)]=\"this.profileData.trained_in_gym\" position=\"floating\" >\n      <ion-list-header>\n      <ion-label>Have you ever trained in a gym?</ion-label>\n      </ion-list-header>\n      <ion-item>\n      <ion-label>Yes</ion-label>\n      <ion-radio slot=\"start\" color=\"success\" value=\"Yes\"></ion-radio>\n      </ion-item>\n      <ion-item>\n      <ion-label>No</ion-label>\n      <ion-radio slot=\"start\" color=\"danger\" value=\"No\"></ion-radio>\n      </ion-item>\n      </ion-radio-group>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">What is your fitness goal?</ion-label>\n    <ion-textarea [(ngModel)]=\"this.profileData.fitness_goal\"></ion-textarea>\n  </ion-item>\n</ion-list>\n\n\n  <ion-button expand=\"\" color=\"primary\" (click)=\"updateProfile()\">Update</ion-button>\n  <ion-button expand=\"\" color='danger' (click)=\"logout()\">Logout</ion-button>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map