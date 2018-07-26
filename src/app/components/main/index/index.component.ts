import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';

import { IndexService } from '../../../services/index.service';
import { SharedService } from '../../../services/shared.service';

import { Course } from '../../../models/course';
import { TypeCourse } from '../../../models/typeCourse';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  public listTypeCourses: Array<TypeCourse> = new Array<TypeCourse>();
  public listCourses: Array<Course> = new Array<Course>();

  public typeCourseSelect: TypeCourse = new TypeCourse();

  public focusInputsRegister:
  {name: boolean, durationTotal: boolean, description: boolean, noRegisterMinE: boolean, noRegisterMil: boolean}
  = {name: false, durationTotal: false, description: false, noRegisterMinE: false, noRegisterMil: false};

  public courseActivated: Course = new Course();

  public stateModalView: boolean = false;


  constructor(
    private _indexService: IndexService,
    private _sharedService: SharedService,
  ) {
    this._sharedService.changeStateModalLoader(true);
    this.typeCourseSelect.name = 'Selecciona un tipo de curso';
  }




/*--------------------------------------------Angular Functions------------------------------- */

  ngOnInit() {
    this.getAllCourses();
  }


/*--------------------------------------------Local Functions------------------------------- */


  getAllCourses() {
    this._indexService.getAllTypeCourses().subscribe(
      data => {
        this.listTypeCourses = this._sharedService.fillDataListTypeCourses(data);
        this.listTypeCourses.forEach(async type => {
          await this._indexService.getAllCourses(type.id).subscribe(
            courses => {
              courses.forEach(c => {
                let course: Course = new Course(c);
                this.listCourses.push(course);
              });
            },
            err => {
              this._sharedService.changeStateModalMessage({typeMsm: 1, titleMsm: 'Error!', textMsm: 'No se pudo obtener la lista de Cursos Completa'});
            }
          );
        });
        this._sharedService.changeStateModalLoader(false);
      },
      err => {
        this._sharedService.changeStateModalMessage({typeMsm: 1, titleMsm: 'Error!', textMsm: 'No se pudo obtener la lista de Cursos'});
      }
    );
  }

  saveNewCourse(form: NgForm) {
    let data = form.value;
    data.IsMilitar = data.IsMilitar === '' ? false : data.IsMilitar;
    this._indexService.saveCourse(this.typeCourseSelect.id, data).subscribe(
      data => {
        this._sharedService.changeStateModalMessage({typeMsm: 0, titleMsm: 'OK!', textMsm: 'Curso Creado Correctamente'});
        let c: Course = new Course(data);
        this.listCourses.unshift(c);
        form.resetForm();
        this.scrollTop();
      },
      err => {
        this._sharedService.changeStateModalMessage({typeMsm: 1, titleMsm: 'Error!', textMsm: 'No se pudo crear el curso'});
      }
    );
  }


  scrollTop() {
    setTimeout( () => {
      const element = document.getElementById('top-list');
      element.scrollIntoView();
    }, 500);
  }


}
