// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "10th Avenue",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
 
function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key]; // need to delete from new obj, specifies that it deletes from clone
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
