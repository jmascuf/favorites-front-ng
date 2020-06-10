import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Utilities as FavoriteUtilities } from '../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient, private fU: FavoriteUtilities) { }

  assessmentUrl = this.fU.backendUrl + '/assessments';

  user(userId): Observable<any> {
    return this.http.get(this.assessmentUrl + '/user/' + userId)
  }

  media(media): Observable<any> {
    return this.http.get(this.assessmentUrl + "/media/" + media);
  }

  userMedia(userId, media): Observable<any> {
    return this.http.get(this.assessmentUrl + "/user/"+userId+ "/" + media);
  }


}
