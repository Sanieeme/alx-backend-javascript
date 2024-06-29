export default function createReportObject(employeesList) {
  if (!Array.isArray(employeesList)) {
    throw new Error('Invalid input: employeesList must be an array.');
  }

  const allEmployees = {};

  employeesList.forEach((employee) => {
    const { name, department } = employee;
    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }
    allEmployees[department].push(name);
  });

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees: { ...allEmployees },
    getNumberOfDepartments,
  };
}
