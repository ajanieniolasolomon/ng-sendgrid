/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ SendgridService.ngInjectableDef = i0.defineInjectable({ factory: function SendgridService_Factory() { return new SendgridService(i0.inject("config"), i0.inject(i1.HttpClient)); }, token: SendgridService, providedIn: "root" });
    return SendgridService;
}());
export { SendgridService };
if (false) {
    /** @type {?} */
    SendgridService.prototype.config;
    /** @type {?} */
    SendgridService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbmRncmlkLyIsInNvdXJjZXMiOlsibGliL3NlbmRncmlkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O0lBRXBFLEdBQUcsR0FBRyw2Q0FBNkM7QUFJekQ7SUFLRSx5QkFBc0MsTUFBTSxFQUFVLElBQWdCO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQUE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hFLENBQUM7Ozs7Ozs7O0lBQ00sZ0RBQXNCOzs7Ozs7O0lBQTdCLFVBQStCLEVBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWU7O1lBRWpGLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUMvQixHQUFHLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDOztZQUNuRCxNQUFNLEdBQUksSUFBSSxVQUFVLEVBQUU7YUFDL0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUM1QixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNiLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN4QixNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFwQkEsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFHYyxNQUFNLFNBQUMsUUFBUTtnQkFYckIsVUFBVTs7OzBCQURuQjtDQTRCQyxBQXJCRCxJQXFCQztTQWxCWSxlQUFlOzs7SUFFZCxpQ0FBZ0M7O0lBQUcsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL3JvY2t5LXBlYWstNTM0MzcuaGVyb2t1YXBwLmNvbS9tYWlsJyA7XG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW5kZ3JpZFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsICkge1xufVxucHVibGljIEJhc2ljRW1haWxUb1NpbmdsZVVzZXIoIHRvOiBzdHJpbmcsIGZyb206IHN0cmluZywgc3ViamVjdDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcblxuICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGNvbnN0IHBhcmFtcyA9ICBuZXcgSHR0cFBhcmFtcygpXG4gIC5zZXQoJ2lkJywgdGhpcy5jb25maWcudG9rZW4pXG4gIC5zZXQoJ3RvJywgdG8pXG4gIC5zZXQoJ2Zyb20nLCBmcm9tKVxuICAuc2V0KCdzdWJqZWN0Jywgc3ViamVjdClcbiAgLnNldCgnY29udGVudCcsIGNvbnRlbnQpO1xuXG4gIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsXG4gICBwYXJhbXMsIHtoZWFkZXJzOiBoZWFkZXJ9KTtcbn1cbn1cblxuIl19