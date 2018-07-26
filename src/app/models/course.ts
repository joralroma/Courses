export class Course {

  /*1*/   public id: any;
  /*2*/   public name: string;
  /*3*/   public typeCourse: number;
  /*4*/   public durationTotal: number;
  /*5*/   public description: string;
  /*6*/   public noRegisterMinE: string;
  /*7*/   public noRegisterMil: string;
  /*8*/   public isMilitar: boolean;


  constructor(course?: any) {
    this.id = course? (course._id || course.id) : null;
    this.name = course? course.NameCourse : null;
    this.typeCourse = course? course.TypeCourseId : null;
    this.durationTotal = course? course.DurationTotal : null;
    this.description = course? course.Description : null;
    this.noRegisterMinE = course? course.NoRegisterMinE : null;
    this.noRegisterMil = course? course.NoRegisterMIL : null;
    this.isMilitar = course? course.IsMilitar : null;
  }
}
