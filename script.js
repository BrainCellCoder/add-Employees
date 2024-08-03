const empForm = document.getElementById("employeeForm");
let employees = [];
let employeeId = 1;

if (employees.length == 0) {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "You have 0 employees";
}

empForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addEmployee();
});

function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;

  if (!name || !profession || !age) {
    displayMessage(
      "Error : Please Make sure All the fields are filled before adding in an employee !",
      "error"
    );
    return;
  }

  const newEmployee = {
    id: employeeId++,
    name: name,
    profession: profession,
    age: parseInt(age),
  };

  employees.push(newEmployee);
  displayEmployees();
  displayMessage("Success: Employee Added!", "success");
  document.getElementById("employeeForm").reset();
}

function displayEmployees() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  if (employees.length == 0) {
    employeeList.innerHTML = "You have 0 employees";
  }

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
    employeeDiv.innerHTML = `
      <p><span id="empId">${employee.id}</span> <span><span id="empLeft">Name</span><span id="empRight">${employee.name}</span></span> <span><span id="empLeft">Profession</span><span id="empRight">${employee.profession}</span></span>  <span><span id="empLeft">Age</span><span id="empRight">${employee.age}</span></span> </p>
      <button id="delbtn" onclick="deleteEmployee(${employee.id})">Delete User</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  if (employees.length == 0) {
    employeeId = 1;
  }
  displayEmployees();
}

function displayMessage(message, type) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.className = type;
}
