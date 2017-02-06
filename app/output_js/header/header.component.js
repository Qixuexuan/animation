"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var animations_1 = require("../animations/animations");
var Hero = (function () {
    function Hero(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
    }
    Hero.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return Hero;
}());
;
var ALL_HEROES = [
    '菲尔·科尔森',
    '梅琳达·梅',
    '里奥·菲茨',
    '珍玛·西蒙斯',
    '斯凯Skye',
    '格兰特·沃德',
    '尼克·弗瑞',
    '玛丽亚·希尔',
    '布莱克',
    '布雷特·道顿',
    '温明娜'
].map(function (name) { return new Hero(name); });
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.heros = ALL_HEROES;
    }
    HeaderComponent.prototype.fn_showHero = function () {
        // this.heros=this.heros==null?ALL_HEROES:null;
        this.isShowHero = this.isShowHero == true ? false : true;
    };
    HeaderComponent.prototype.clicked = function () {
        this.btnState = (this.btnState === 'btn_in' ? 'btn_out' : 'btn_in');
    };
    HeaderComponent.prototype.inoutToggleState = function () {
        this.myState = (this.myState === 'in' ? 'void' : 'in');
    };
    return HeaderComponent;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", Array)
], HeaderComponent.prototype, "heros", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: "c_header",
        templateUrl: 'app/src/header/header.html',
        styleUrls: ['app/src/header/header.css'],
        animations: [animations_1.flyIn, animations_1.rotate, animations_1.heroState, animations_1.myKeyFrame, animations_1.buttonState, animations_1.inoutState, animations_1.shrinkout, animations_1.shining, animations_1.groupA]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
