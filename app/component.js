"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RedditAppComponent = (function () {
    function RedditAppComponent() {
    }
    RedditAppComponent.prototype.addArticle = function (newtitle, newlink) {
        console.log("Pavadinimas: " + newtitle.value);
        console.log("Nuoroda: " + newlink.value);
        return false;
    };
    return RedditAppComponent;
}());
RedditAppComponent = __decorate([
    core_1.Component({
        selector: 'reddit',
        styleUrls: ["./reddit.css"],
        template: "\n    <form class=\"ui large form segment\">\n     <h3 class=\"ui header\">Prideti dar viena nuoroda</h3>\n\n     <div class=\"field\">\n      <label for=\"title\">Pavadinimas</label>\n      <input type=\"text\" name=\"title\" #newtitle>\n     </div>\n     <div class=\"field\">\n      <label for=\"link\">Nuoroda</label>\n      <input type=\"text\" name=\"link\" #newlink>\n     </div>\n     <button class=\"ui positive right floated button\" (click)=\"addArticle(newtitle, newlink)\">\n     Siusti\n     </button>\n    </form>\n   "
    })
], RedditAppComponent);
exports.RedditAppComponent = RedditAppComponent;
//# sourceMappingURL=component.js.map