/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SendgridComponent } from './sendgrid.component';
import { HttpClientModule } from '@angular/common/http';
import { SendgridService } from './sendgrid.service';
export class SendgridModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VuZGdyaWQvIiwic291cmNlcyI6WyJsaWIvc2VuZGdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTckQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFHLGNBQWM7WUFDekIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2YsRUFBQyxPQUFPLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDdkM7U0FDRixDQUFDO0lBQ0EsQ0FBQzs7O1lBaEJOLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbmRncmlkQ29tcG9uZW50IH0gZnJvbSAnLi9zZW5kZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VuZGdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9zZW5kZ3JpZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlbmRncmlkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlbmRncmlkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW5kZ3JpZE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGUgOiBTZW5kZ3JpZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTZW5kZ3JpZFNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlIDogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9XG4gICAgICBdXG4gICAgfTtcbiAgICAgIH1cbiB9XG4iXX0=