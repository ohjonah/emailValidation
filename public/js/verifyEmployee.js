var employees = {

  "Roos@gravitypayments.com": {
    "dScore": 41,
    "iScore": 45,
    "sScore": 65,
    "cScore": 61,
  },

  "Higgins@gravitypayments.com": {
    "dScore": 74,
    "iScore": 75,
    "sScore": 45,
    "cScore": 14,
  },

  "Chung@gravitypayments.com": {
    "dScore": 58,
    "iScore": 64,
    "sScore": 66,
    "cScore": 26,
  },

  "Strom@gravitypayments.com": {
    "dScore": 24,
    "iScore": 38,
    "sScore": 85,
    "cScore": 61,
  }
};

/*
console.log(Object.keys(employees).length);
console.log(Object.keys(employees)[0]);
console.log(Object.keys(Object.keys(employees)[0]));
*/

function verifyEmployee(email) {
  return employees.hasOwnProperties(email);
};
