import { Injectable, Inject, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const url = 'https://rocky-peak-53437.herokuapp.com/mail';
class SendgridService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
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
    BasicEmailToSingleUser(to, from, subject, content) {
        /** @type {?} */
        const header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        /** @type {?} */
        const params = new HttpParams()
            .set('id', this.config.token)
            .set('to', to)
            .set('from', from)
            .set('subject', subject)
            .set('content', content);
        return this.http.post(url, params, { headers: header });
    }
}
SendgridService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SendgridService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: HttpClient }
];
/** @nocollapse */ SendgridService.ngInjectableDef = defineInjectable({ factory: function SendgridService_Factory() { return new SendgridService(inject("config"), inject(HttpClient)); }, token: SendgridService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SendgridComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SendgridComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sendgrid',
                template: `
    <p>
      sendgrid works!
    </p>
  `
            }] }
];
/** @nocollapse */
SendgridComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SendgridModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: SendgridModule,
            providers: [
                SendgridService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
SendgridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                ],
                declarations: [SendgridComponent],
                exports: [SendgridComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SendgridService, SendgridComponent, SendgridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NlbmRncmlkL2xpYi9zZW5kZ3JpZC5zZXJ2aWNlLnRzIiwibmc6Ly9zZW5kZ3JpZC9saWIvc2VuZGdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9zZW5kZ3JpZC9saWIvc2VuZGdyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9yb2NreS1wZWFrLTUzNDM3Lmhlcm9rdWFwcC5jb20vbWFpbCcgO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcbn1cbnB1YmxpYyBCYXNpY0VtYWlsVG9TaW5nbGVVc2VyKCB0bzogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG5cbiAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAuc2V0KCdpZCcsIHRoaXMuY29uZmlnLnRva2VuKVxuICAuc2V0KCd0bycsIHRvKVxuICAuc2V0KCdmcm9tJywgZnJvbSlcbiAgLnNldCgnc3ViamVjdCcsIHN1YmplY3QpXG4gIC5zZXQoJ2NvbnRlbnQnLCBjb250ZW50KTtcblxuICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLFxuICAgcGFyYW1zLCB7aGVhZGVyczogaGVhZGVyfSk7XG59XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZW5kZ3JpZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzZW5kZ3JpZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsICBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW5kZ3JpZENvbXBvbmVudCB9IGZyb20gJy4vc2VuZGdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNlbmRncmlkU2VydmljZSB9IGZyb20gJy4vc2VuZGdyaWQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZW5kZ3JpZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW5kZ3JpZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlIDogU2VuZGdyaWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU2VuZGdyaWRTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZSA6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gICAgICB9XG4gfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtNQUdNLEdBQUcsR0FBRyw2Q0FBNkM7QUFPekQsTUFBYSxlQUFlOzs7OztJQUUxQixZQUFzQyxNQUFNLEVBQVUsSUFBZ0I7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7S0FDdkU7Ozs7Ozs7O0lBQ00sc0JBQXNCLENBQUUsRUFBVSxFQUFFLElBQVksRUFBRSxPQUFlLEVBQUUsT0FBZTs7Y0FFakYsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUM7O2NBQ25ELE1BQU0sR0FBSSxJQUFJLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2FBQ2IsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7YUFDakIsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7YUFDdkIsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3hCLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0tBQzdCOzs7WUFwQkEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUdjLE1BQU0sU0FBQyxRQUFRO1lBWHJCLFVBQVU7Ozs7Ozs7O0FDRG5CLE1BV2EsaUJBQWlCO0lBRTVCLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFFRjs7Ozs7Ozs7O0FDVkQsTUFZYSxjQUFjOzs7OztJQUNsQixPQUFPLE9BQU8sQ0FBQyxNQUFNO1FBQzFCLE9BQU87WUFDTCxRQUFRLEVBQUcsY0FBYztZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixFQUFDLE9BQU8sRUFBRyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQzthQUN2QztTQUNGLENBQUM7S0FDQzs7O1lBaEJOLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==