var employees = {

  "roos@gravitypayments.com": {
    "dScore": 41,
    "iScore": 45,
    "sScore": 65,
    "cScore": 61,
  },

  "higgins@gravitypayments.com": {
    "dScore": 74,
    "iScore": 75,
    "sScore": 45,
    "cScore": 14,
  },

  "chung@gravitypayments.com": {
    "dScore": 58,
    "iScore": 64,
    "sScore": 66,
    "cScore": 26,
  },

  "strom@gravitypayments.com": {
    "dScore": 24,
    "iScore": 38,
    "sScore": 85,
    "cScore": 61,
  }
};

    // console.log(Object.keys(employees).length);
    // console.log(Object.keys(employees)[0]);
    // console.log(Object.keys(Object.keys(employees)[0]));
    // S. use .hasOwnProperty function

function verifyEmployee(email) {

  loadSession();
  var data = sessionStorage.getItem('employees');
  data = JSON.parse(data);
  console.log(data);

  return data.hasOwnProperty(email);
};

  // function findUser() {
  //   var = verifyEmployee();
  //
  //   if()
  //   return true;
  // }


// checks for input

function emailChecker() {
  var emailInputField = document.getElementById('emailAddressInput').value;

    if (emailInputField.length == 0) {
      alert("Please type your email!");
    } else {
      emailRedirect();
    }
};

// redirects based on email input //

function emailRedirect() {
  var emailAddress = document.getElementById('emailAddressInput').value;
    // 2. Is argument passing through? S. lower case
    // console.log(verifyEmployee(emailAddress));

    //  1. Is email going through?
    //  console.log(emailAddress);

  if (verifyEmployee(emailAddress)) {
    console.log("i'm here")
    location.href = '/updateSuccess';
  } else {
    location.href = '/evInputForm';
    console.log("missing");
  }

};

// Thank you Lord Grady Barrett, Sr. Software Engineer, Liberty Mutual
function loadSession() {

  if (sessionStorage.getItem('employees') == null) {
    sessionStorage.setItem('employees', JSON.stringify(employees));
  }
};

// loadsession is making dataset accessible for document
// if key:value pair exists in the session hash, nothing happens


function saveRecord() {
  location.href = '/updateSuccess';

  // var storedScores = [];
  //
  // var emailAddress = document.getElementById('emailAddressInput').value;
  // var dScore = document.getElementById('dScore').value;
  // var iScore = document.getElementById('iScore').value;
  // var sScore = document.getElementById('sScore').value;
  // var cScore = document.getElementById('cScore').value;
  //
  // sessionStorage.setItem('employees', dScore);
  // sessionStorage.setItem('employees', iScore);
  // sessionStorage.setItem('employees', sScore);
  // sessionStorage.setItem('employees', cScore);
  //
  //
  // console.log("Your score is " + dScore + ", " + iScore+ ", " + sScore + ", " + cScore + "!");






};

function backToHome() {
  location.href = '/home';
};
