var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName;
}
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
