export class TypeCourse {

  /*1*/   public id: any;
  /*2*/   public name: string;

  constructor(typeCourse?: any) {
    this.id = typeCourse? (typeCourse._id || typeCourse.id) : null;
    this.name = typeCourse? typeCourse.NameTypeCourse : null;

  }
}
