(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sendgrid', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global.sendgrid = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

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
                var header = new i1.HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded');
                /** @type {?} */
                var params = new i1.HttpParams()
                    .set('id', this.config.token)
                    .set('to', to)
                    .set('from', from)
                    .set('subject', subject)
                    .set('content', content);
                return this.http.post(url, params, { headers: header });
            };
        SendgridService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SendgridService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] },
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SendgridService.ngInjectableDef = i0.defineInjectable({ factory: function SendgridService_Factory() { return new SendgridService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: SendgridService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
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

    exports.SendgridService = SendgridService;
    exports.SendgridComponent = SendgridComponent;
    exports.SendgridModule = SendgridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZW5kZ3JpZC9saWIvc2VuZGdyaWQuc2VydmljZS50cyIsIm5nOi8vc2VuZGdyaWQvbGliL3NlbmRncmlkLmNvbXBvbmVudC50cyIsIm5nOi8vc2VuZGdyaWQvbGliL3NlbmRncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vcm9ja3ktcGVhay01MzQzNy5oZXJva3VhcHAuY29tL21haWwnIDtcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRncmlkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgKSB7XG59XG5wdWJsaWMgQmFzaWNFbWFpbFRvU2luZ2xlVXNlciggdG86IHN0cmluZywgZnJvbTogc3RyaW5nLCBzdWJqZWN0OiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuXG4gIGNvbnN0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycygpXG4gIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgY29uc3QgcGFyYW1zID0gIG5ldyBIdHRwUGFyYW1zKClcbiAgLnNldCgnaWQnLCB0aGlzLmNvbmZpZy50b2tlbilcbiAgLnNldCgndG8nLCB0bylcbiAgLnNldCgnZnJvbScsIGZyb20pXG4gIC5zZXQoJ3N1YmplY3QnLCBzdWJqZWN0KVxuICAuc2V0KCdjb250ZW50JywgY29udGVudCk7XG5cbiAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCxcbiAgIHBhcmFtcywge2hlYWRlcnM6IGhlYWRlcn0pO1xufVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VuZGdyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgc2VuZGdyaWQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRncmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCAgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VuZGdyaWRDb21wb25lbnQgfSBmcm9tICcuL3NlbmRncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZW5kZ3JpZFNlcnZpY2UgfSBmcm9tICcuL3NlbmRncmlkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VuZGdyaWRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VuZGdyaWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRncmlkTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZSA6IFNlbmRncmlkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNlbmRncmlkU2VydmljZSxcbiAgICAgICAge3Byb3ZpZGUgOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICAgICAgfVxuIH1cbiJdLCJuYW1lcyI6WyJIdHRwSGVhZGVycyIsIkh0dHBQYXJhbXMiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiSHR0cENsaWVudCIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBR00sR0FBRyxHQUFHLDZDQUE2QztBQUl6RDtRQUtFLHlCQUFzQyxNQUFNLEVBQVUsSUFBZ0I7WUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtZQUFVLFNBQUksR0FBSixJQUFJLENBQVk7U0FDdkU7Ozs7Ozs7O1FBQ00sZ0RBQXNCOzs7Ozs7O1lBQTdCLFVBQStCLEVBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWU7O29CQUVqRixNQUFNLEdBQUcsSUFBSUEsY0FBVyxFQUFFO3FCQUMvQixHQUFHLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDOztvQkFDbkQsTUFBTSxHQUFJLElBQUlDLGFBQVUsRUFBRTtxQkFDL0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7cUJBQ2IsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7cUJBQ2pCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3FCQUN2QixHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztnQkFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3hCLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2FBQzdCOztvQkFwQkFDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dEQUdjQyxTQUFNLFNBQUMsUUFBUTt3QkFYckJDLGFBQVU7Ozs7OEJBRG5CO0tBT0E7Ozs7OztBQ1BBO1FBYUU7U0FBaUI7Ozs7UUFFakIsb0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnREFJVDtxQkFFRjs7OztRQVFELHdCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQUtBO1NBaUJFOzs7OztRQVRjLHNCQUFPOzs7O1lBQXJCLFVBQXNCLE1BQU07Z0JBQzFCLE9BQU87b0JBQ0wsUUFBUSxFQUFHLGNBQWM7b0JBQ3pCLFNBQVMsRUFBRTt3QkFDVCxlQUFlO3dCQUNmLEVBQUMsT0FBTyxFQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO3FCQUN2QztpQkFDRixDQUFDO2FBQ0M7O29CQWhCTkMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQWdCO3lCQUNqQjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOztRQVdBLHFCQUFDO0tBakJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=