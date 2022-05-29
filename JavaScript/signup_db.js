const firebaseConfig = {
  apiKey: "AIzaSyDXrcj-Ty7pxffy5fUrXY0X2KocGturHe4",
  authDomain: "mini-project-d5118.firebaseapp.com",
  databaseURL:
    "https://mini-project-d5118-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-project-d5118",
  storageBucket: "mini-project-d5118.appspot.com",
  messagingSenderId: "373812769767",
  appId: "1:373812769767:web:94f828bfec35986c668342",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

var signup = document.getElementById("signup_form");

signup.addEventListener("submit", function (e) {
  e.preventDefault();

  var fname = document.getElementById("Fname").value;
  var mname = document.getElementById("Mname").value;
  var lname = document.getElementById("Lname").value;
  var cid_no = document.getElementById("cid_no").value;
  var sign_date = document.getElementById("sign_date").value;
  var sign_month = document.getElementById("sign_month").value;
  var sign_year = document.getElementById("sign_year").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("pword").value;
  var confirm_pw = document.getElementById("confirm_pw").value;

  if (validate_pw(password, confirm_pw) == false) {
    alert("Password does not match!!");
    return;
  }

  if (validate_number(number) == false) {
    alert("Phone number is not 8 digits");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      var databaseReference = database.ref();

      var user_data = {
        user_id: user.uid,
        first_name: fname,
        middle_name: mname,
        last_name: lname,
        email: email,
        password: password,
        phone_number: number,
        cid_no: cid_no,
        dob: sign_date + " - " + sign_month + " - " + sign_year,
        gender: gender,
        last_login: Date.now(),
      };
      databaseReference
        .child("users/" + user.uid + "/signup_info")
        .update(user_data);
      alert("Successfully Registered!");

      var currentUserData = {
        user_id: user.uid,
      };

      localStorage.setItem("currentUserData", JSON.stringify(currentUserData));

      setTimeout(function () {
        signup.reset();
        window.location.href = "/HTML/dashboard_menu.html";
      }, 1000);
    })
    .catch(function (error) {
      var error_message = error.message;
      alert(error_message);
    });
});

function validate_pw(pw1, pw2) {
  return pw1 == pw2 ? true : false;
}
function validate_number(number) {
  return number.length == 8 ? true : false;
}
