
var employee_salary, newsalary, percent;
percent = prompt ("Enter the percentual tax. Ex.: 25% = type 25 ")
employee_salary = prompt ("Enter actual emploee salary, please ")
newsalary = employee_salary * (1.0 + percent/100);
console.log(newsalary)