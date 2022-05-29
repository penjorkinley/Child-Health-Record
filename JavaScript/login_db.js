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

var login_form = document.getElementById("login_form");

login_form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      var databaseReference = database.ref();

      var user_data = {
        last_login: Date.now(),
      };
      databaseReference.child("users/" + user.uid).update(user_data);
      alert("Successfully Logged In!");

      var currentUserData = {
        user_id: user.uid,
      };

      localStorage.setItem("currentUserData", JSON.stringify(currentUserData));

      setTimeout(function () {
        login_form.reset();
        window.location.href = "/HTML/admin.html";
      }, 1000);
    })
    .catch(function (error) {
      var error_message = error.message;
      alert(error_message);
    });
});
