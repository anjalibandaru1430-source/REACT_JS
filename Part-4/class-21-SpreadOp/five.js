// Employee object
const emp = {
  eid: 101,
  ename: "John Doe",
  "email": "jd@gmail.com"
};

// Details object
const details = {
  email: "jb@tcs.com",
  esal: 50000,
  loc: "New York"
};

// Merge emp and details objects using spread operator
const emp_Details = {
  ...emp,
  ...details
};

console.log("Merged Employee Object:");
console.log(emp_Details);