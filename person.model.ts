export class Person {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(data?: any) {
    this.firstName = data.firstName || 'Jude';
    this.lastName = data.lastName || 'John';
    this.middleName = data.middleName || 'Boys';
  }

}
