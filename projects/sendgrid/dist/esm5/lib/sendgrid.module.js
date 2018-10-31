/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SendgridComponent } from './sendgrid.component';
import { HttpClientModule } from '@angular/common/http';
import { SendgridService } from './sendgrid.service';
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
export { SendgridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VuZGdyaWQvIiwic291cmNlcyI6WyJsaWIvc2VuZGdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFBQTtJQWlCQyxDQUFDOzs7OztJQVRjLHNCQUFPOzs7O0lBQXJCLFVBQXNCLE1BQU07UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRyxjQUFjO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLEVBQUMsT0FBTyxFQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQ3ZDO1NBQ0YsQ0FBQztJQUNBLENBQUM7O2dCQWhCTixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFXQSxxQkFBQztDQUFBLEFBakJGLElBaUJFO1NBVlcsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCAgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VuZGdyaWRDb21wb25lbnQgfSBmcm9tICcuL3NlbmRncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZW5kZ3JpZFNlcnZpY2UgfSBmcm9tICcuL3NlbmRncmlkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VuZGdyaWRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VuZGdyaWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRncmlkTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZSA6IFNlbmRncmlkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNlbmRncmlkU2VydmljZSxcbiAgICAgICAge3Byb3ZpZGUgOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICAgICAgfVxuIH1cbiJdfQ==