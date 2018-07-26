import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private _httpService: HttpService,
    private _sharedService: SharedService
  ) { }

  getAllTypeCourses() {
    let url = '/TypeCourse';
    return this._httpService.httpGet(url);
  }

  getAllCourses(id) {
    let url = `/TypeCourse/${id}/Course`;
    return this._httpService.httpGet(url);
  }

  saveCourse(id, data) {
    let url = `/TypeCourse/${id}/Course`;
    return this._httpService.httpPost(url,data);
  }

}
