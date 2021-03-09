class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greeter(user);
