"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); // importuojame komponent� ir modul�
var platform_browser_1 = require("@angular/platform-browser"); // naudosime brauseryje
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // dinami�kai paleisime brauseryje
var HelloAngular = (function () {
    function HelloAngular() {
    }
    return HelloAngular;
}()); // klas�s pavadinimas
HelloAngular = __decorate([
    core_1.Component({
        selector: 'hello-angular',
        template: "\n      <div>\n        Hello Angular 2\n      </div>\n    "
    })
], HelloAngular);
var HelloAngularAppModule = (function () {
    function HelloAngularAppModule() {
    }
    return HelloAngularAppModule;
}());
HelloAngularAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [HelloAngular],
        bootstrap: [HelloAngular] // paleid�iame bootstrape
    })
], HelloAngularAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
//# sourceMappingURL=main.js.map