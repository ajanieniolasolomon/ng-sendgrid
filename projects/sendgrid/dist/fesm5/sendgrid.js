import { Injectable, Inject, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var url = 'https://rocky-peak-53437.herokuapp.com/mail';
var SendgridService = /** @class */ (function () {
    function SendgridService(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @param {?} to
     * @param {?} from
     * @param {?} subject
     * @param {?} content
     * @return {?}
     */
    SendgridService.prototype.BasicEmailToSingleUser = /**
     * @param {?} to
     * @param {?} from
     * @param {?} subject
     * @param {?} content
     * @return {?}
     */
    function (to, from, subject, content) {
        /** @type {?} */
        var header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        /** @type {?} */
        var params = new HttpParams()
            .set('id', this.config.token)
            .set('to', to)
            .set('from', from)
            .set('subject', subject)
            .set('content', content);
        return this.http.post(url, params, { headers: header });
    };
    SendgridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SendgridService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SendgridService.ngInjectableDef = defineInjectable({ factory: function SendgridService_Factory() { return new SendgridService(inject("config"), inject(HttpClient)); }, token: SendgridService, providedIn: "root" });
    return SendgridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SendgridComponent = /** @class */ (function () {
    function SendgridComponent() {
    }
    /**
     * @return {?}
     */
    SendgridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SendgridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sendgrid',
                    template: "\n    <p>\n      sendgrid works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SendgridComponent.ctorParameters = function () { return []; };
    return SendgridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SendgridModule = /** @class */ (function () {
    function SendgridModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    SendgridModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: SendgridModule,
            providers: [
                SendgridService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    SendgridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                    ],
                    declarations: [SendgridComponent],
                    exports: [SendgridComponent]
                },] }
    ];
    return SendgridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SendgridService, SendgridComponent, SendgridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NlbmRncmlkL2xpYi9zZW5kZ3JpZC5zZXJ2aWNlLnRzIiwibmc6Ly9zZW5kZ3JpZC9saWIvc2VuZGdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9zZW5kZ3JpZC9saWIvc2VuZGdyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9yb2NreS1wZWFrLTUzNDM3Lmhlcm9rdWFwcC5jb20vbWFpbCcgO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcbn1cbnB1YmxpYyBCYXNpY0VtYWlsVG9TaW5nbGVVc2VyKCB0bzogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG5cbiAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAuc2V0KCdpZCcsIHRoaXMuY29uZmlnLnRva2VuKVxuICAuc2V0KCd0bycsIHRvKVxuICAuc2V0KCdmcm9tJywgZnJvbSlcbiAgLnNldCgnc3ViamVjdCcsIHN1YmplY3QpXG4gIC5zZXQoJ2NvbnRlbnQnLCBjb250ZW50KTtcblxuICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLFxuICAgcGFyYW1zLCB7aGVhZGVyczogaGVhZGVyfSk7XG59XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZW5kZ3JpZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzZW5kZ3JpZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsICBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW5kZ3JpZENvbXBvbmVudCB9IGZyb20gJy4vc2VuZGdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNlbmRncmlkU2VydmljZSB9IGZyb20gJy4vc2VuZGdyaWQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZW5kZ3JpZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW5kZ3JpZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlIDogU2VuZGdyaWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU2VuZGdyaWRTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZSA6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gICAgICB9XG4gfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQUdNLEdBQUcsR0FBRyw2Q0FBNkM7QUFJekQ7SUFLRSx5QkFBc0MsTUFBTSxFQUFVLElBQWdCO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO0tBQ3ZFOzs7Ozs7OztJQUNNLGdEQUFzQjs7Ozs7OztJQUE3QixVQUErQixFQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxPQUFlOztZQUVqRixNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDL0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQzs7WUFDbkQsTUFBTSxHQUFJLElBQUksVUFBVSxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7YUFDYixHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQzthQUNqQixHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUN2QixHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDeEIsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7S0FDN0I7O2dCQXBCQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUdjLE1BQU0sU0FBQyxRQUFRO2dCQVhyQixVQUFVOzs7MEJBRG5CO0NBT0E7Ozs7OztBQ1BBO0lBYUU7S0FBaUI7Ozs7SUFFakIsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdEQUlUO2lCQUVGOzs7O0lBUUQsd0JBQUM7Q0FoQkQ7Ozs7OztBQ0ZBO0lBS0E7S0FpQkU7Ozs7O0lBVGMsc0JBQU87Ozs7SUFBckIsVUFBc0IsTUFBTTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFHLGNBQWM7WUFDekIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2YsRUFBQyxPQUFPLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDdkM7U0FDRixDQUFDO0tBQ0M7O2dCQWhCTixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFXQSxxQkFBQztDQWpCRjs7Ozs7Ozs7Ozs7Ozs7In0=