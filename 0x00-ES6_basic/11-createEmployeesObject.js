export default function createEmployeesObject(departmentName, employees) {
  const employeesObjects = {
    [departmentName]: employees,
  };
  return employeesObjects;
}
