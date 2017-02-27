"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by alica on 2017-02-10.
 */
var core_1 = require('@angular/core');
var ad_service_1 = require('../services/ad.service');
var ProductsComponent = (function () {
    function ProductsComponent(router, adService) {
        var _this = this;
        this.router = router;
        this.adService = adService;
        this.title = 'Products';
        this.adService.getAds().subscribe(function (ads) {
            console.log("getting ads");
            console.log(ads);
            _this.ads = ads;
        });
    }
    ProductsComponent.prototype.onSelect = function (ad) {
        this.selectedAd = ad;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products-root',
            templateUrl: './products.component.html',
            providers: [ad_service_1.AdService],
            styleUrls: ['../main.component.css'],
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
var Ad = (function () {
    function Ad() {
    }
    return Ad;
}());
exports.Ad = Ad;
