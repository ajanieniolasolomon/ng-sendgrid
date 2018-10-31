import { HttpClient } from '@angular/common/http';
export declare class SendgridService {
    private config;
    http: HttpClient;
    constructor(config: any, http: HttpClient);
    BasicEmailToSingleUser(to: string, from: string, subject: string, content: string): import("rxjs/internal/Observable").Observable<Object>;
}
