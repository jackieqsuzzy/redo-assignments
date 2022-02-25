var empolyees = []

function Employee (name, job, salary, status = "full-time"){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
    this.printEmployeeForm = this.name + " works as a " + this.job
    // this.printEmployeeForm = function(){
    //     return this.name + " is an employee at " + this.job
    // }
}

var newP = new Employee('Jackie', "Specialist", "$21", "part-time")
newP.status = "part-time"
console.log(newP)


var newP2 = new Employee("Rob", "Engineer", "$50", "full-time")
console.log(newP2)

var newP3 = new Employee("Jenna", "Manager", "$40", "full-time")
console.log(newP3)

empolyees.push(newP, newP2, newP3)
