const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
// add () to employee
const alphaTechWithCompany = alphaTech.map((employee) => ({
  ...employee,
  company: "alphaTech"
}));

// add () to employee
const betaSoftWithCompany = betaSoft.map((employee) => ({
  ...employee,
  company: "betaSoft"
}));

// gammaDev is must also be included
const gammaDevtWithCompany = gammaDev.map((employee) => ({
  ...employee,
  company: "gammaDev"
}));

const allEmployees = [...alphaTechWithCompany, ...betaSoftWithCompany, ...gammaDevtWithCompany];

// correct word Engineering 
const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company // change '' to employee.company
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

