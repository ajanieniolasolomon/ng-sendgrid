/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
const url = 'https://rocky-peak-53437.herokuapp.com/mail';
export class SendgridService {
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
/** @nocollapse */ SendgridService.ngInjectableDef = i0.defineInjectable({ factory: function SendgridService_Factory() { return new SendgridService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: SendgridService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SendgridService.prototype.config;
    /** @type {?} */
    SendgridService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbmRncmlkLyIsInNvdXJjZXMiOlsibGliL3NlbmRncmlkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O01BRXBFLEdBQUcsR0FBRyw2Q0FBNkM7QUFPekQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRTFCLFlBQXNDLE1BQU0sRUFBVSxJQUFnQjtRQUFoQyxXQUFNLEdBQU4sTUFBTSxDQUFBO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUN4RSxDQUFDOzs7Ozs7OztJQUNNLHNCQUFzQixDQUFFLEVBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWU7O2NBRWpGLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUMvQixHQUFHLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDOztjQUNuRCxNQUFNLEdBQUksSUFBSSxVQUFVLEVBQUU7YUFDL0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUM1QixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNiLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN4QixNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFwQkEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUdjLE1BQU0sU0FBQyxRQUFRO1lBWHJCLFVBQVU7Ozs7O0lBV0wsaUNBQWdDOztJQUFHLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9yb2NreS1wZWFrLTUzNDM3Lmhlcm9rdWFwcC5jb20vbWFpbCcgO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VuZGdyaWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyAsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCApIHtcbn1cbnB1YmxpYyBCYXNpY0VtYWlsVG9TaW5nbGVVc2VyKCB0bzogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG5cbiAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBjb25zdCBwYXJhbXMgPSAgbmV3IEh0dHBQYXJhbXMoKVxuICAuc2V0KCdpZCcsIHRoaXMuY29uZmlnLnRva2VuKVxuICAuc2V0KCd0bycsIHRvKVxuICAuc2V0KCdmcm9tJywgZnJvbSlcbiAgLnNldCgnc3ViamVjdCcsIHN1YmplY3QpXG4gIC5zZXQoJ2NvbnRlbnQnLCBjb250ZW50KTtcblxuICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLFxuICAgcGFyYW1zLCB7aGVhZGVyczogaGVhZGVyfSk7XG59XG59XG5cbiJdfQ==