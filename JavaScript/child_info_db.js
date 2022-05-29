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

var c_name = document.getElementById("c_name");
var c_birthplace = document.getElementById("c_birthplace");
var c_date = document.getElementById("c_date");
var c_month = document.getElementById("c_month");
var c_year = document.getElementById("c_year");
var c_time = document.getElementById("c_time");
var c_am_pm = document.querySelector('input[name="am_pm"]:checked');
var c_height = document.getElementById("c_height");
var c_weight = document.getElementById("c_weight");
var c_gender = document.querySelector('input[name="gender"]:checked');

var child_info = document.getElementById("child_form");
child_info.addEventListener("submit", function (e) {
  e.preventDefault();

  var c_name_val = c_name.value;
  var c_birthplace_val = c_birthplace.value;
  var c_dob_val = c_date + " - " + c_month + " - " + c_year;
  var c_time_val = c_time.value;
  var c_height_val = c_height.value;
  var c_weight_val = c_weight.value;
  var c_gender_Val = c_gender.value;

  var user = auth.currentUser;
  var databaseReference = database.ref();

  var child_data = {
    child_name: c_name_val,
    birthplace: c_birthplace_val,
    dob: c_dob_val,
    birth_time: c_time_val + " " + am_pm,
    height: c_height_val,
    weight: c_weight_val,
    gender: c_gender_Val,
  };
  databaseReference.child("users/" + user.uid + "/child_info").set(child_data);
  alert("Saved Successfully!");
});

//data retrieval
var current_user_id = JSON.parse(
  localStorage.getItem("currentUserData")
).user_id;

var data_ref_from_firebase = database
  .ref()
  .child("users/" + current_user_id + "/child_info");

data_ref_from_firebase.once("value", function (snapshot) {
  var retrieved_data = snapshot.val();

  if (retrieved_data) {
    c_name.value = retrieved_data.child_name;
    c_birthplace.value = retrieved_data.birthplace;
    const [cdate, cmonth, cyear] = retrieved_data.dob.split(" - ");
    c_date.value = cdate;
    c_month.value = cmonth;
    c_year.value = cyear;
    c_time.value = retrieved_data.birth_time;
    c_height.value = retrieved_data.height;
    c_weight.value = retrieved_data.weight;
    c_gender.value = retrieved_data.gender;
  }
});
