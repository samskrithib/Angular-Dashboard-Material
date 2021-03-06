"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MDemoButtonComponent = (function () {
    function MDemoButtonComponent() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        this.test = 'test';
        this.checked = true;
        this.align = 'start';
        this.disabled = false;
        this.indeterminate = false;
        this.inputtxt = 'vvv';
        this.inputtxt2 = '';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    MDemoButtonComponent.prototype.clickTest = function () {
        this.test = 'clicked test !';
    };
    return MDemoButtonComponent;
}());
MDemoButtonComponent = __decorate([
    core_1.Component({
        selector: 'mdemo-button',
        // template: `<h1>This is test page! {{test}}</h1>`,
        templateUrl: './mdemo-button.html',
    })
], MDemoButtonComponent);
exports.MDemoButtonComponent = MDemoButtonComponent;
//# sourceMappingURL=mdemo-button.component.js.map