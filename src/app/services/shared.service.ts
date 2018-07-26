import { Injectable, EventEmitter } from '@angular/core';

import { TypeCourse } from './../models/typeCourse';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  static secretKey: string = 'socialNetwork';

  static changeStateModalLoaderEmitter = new EventEmitter<any>();
  static changeStateModalMessageEmitter = new EventEmitter<any>();


  constructor() { }





/*---------------------------------Start Of Functions Emitter------------------*/
changeStateModalLoader(data){
  SharedService.changeStateModalLoaderEmitter.emit(data);
}

changeStateModalMessage(data){
  SharedService.changeStateModalMessageEmitter.emit(data);
}
/*---------------------------------End Of Functions Emitter------------------*/


/*---------------------------Start Of Shared Functions ---------------------------*/
fillDataListTypeCourses(list: any): Array<TypeCourse>{
  let typeCourses: Array<TypeCourse> = new Array<TypeCourse>();
  list.forEach(t => {
    let type: TypeCourse = new TypeCourse(t);
    typeCourses.push(type);
  });
  return typeCourses;
}
/*---------------------------End Of Shared Functions ---------------------------*/







}
