export function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    employee.salary = +employee.salary;
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    return this.employees.filter(e => e.salary >= salaryFrom && e.salary < salaryTo )
}