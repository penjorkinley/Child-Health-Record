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

var f_name = document.getElementById("f_name");
var f_email = document.getElementById("f_email");
var f_pno = document.getElementById("f_pno");
var f_date = document.getElementById("f_date");
var f_month = document.getElementById("f_month");
var f_year = document.getElementById("f_year");
var f_cidNo = document.getElementById("f_cid_no");
var f_country = document.getElementById("f_country");
var f_occupation = document.getElementById("f_occupation");
var f_village = document.getElementById("f_village");
var f_gewog = document.getElementById("f_gewog");
var f_dzongkhag = document.getElementById("f_dzongkhag");

var m_name = document.getElementById("m_name");
var m_email = document.getElementById("m_email");
var m_pno = document.getElementById("m_pno");
var m_date = document.getElementById("m_date");
var m_month = document.getElementById("m_month");
var m_year = document.getElementById("m_year");
var m_cidNo = document.getElementById("m_cid_no");
var m_country = document.getElementById("m_country");
var m_occupation = document.getElementById("m_occupation");
var m_village = document.getElementById("m_village");
var m_gewog = document.getElementById("m_gewog");
var m_dzongkhag = document.getElementById("m_dzongkhag").value;

//father info
var father_info = document.getElementById("father_form");
father_info.addEventListener("submit", function (e) {
  e.preventDefault();

  var father_name_val = f_name.value;
  var father_email_val = f_email.value;
  var father_pno_val = f_pno.value;
  var father_dob_val = f_date + " - " + f_month + " - " + f_year;
  var father_cidNo_val = f_cidNo.value;
  var father_country_val = f_country.value;
  var father_occupation_val = f_occupation.value;
  var father_village_val = f_village.value;
  var father_gewog_val = f_gewog.value;
  var father_dzongkhag_val = f_dzongkhag.value;

  var databaseReference = database.ref();
  var user = auth.currentUser;

  var father_data = {
    father_name: father_name_val,
    email: father_email_val,
    phone_no: father_pno_val,
    dob: father_dob_val,
    cid_no: father_cidNo_val,
    country: father_country_val,
    occupation: father_occupation_val,
    village: father_village_val,
    gewog: father_gewog_val,
    dzongkhag: father_dzongkhag_val,
  };

  databaseReference
    .child("users/" + user.uid + "/parents_info" + "/father_info")
    .set(father_data);
  alert("Saved Successfully!");
});

var mother_info = document.getElementById("mother_form");
mother_info.addEventListener("submit", function (e) {
  e.preventDefault();

  var mother_name_val = m_name.value;
  var mother_email_val = m_email.value;
  var mother_pno_val = m_pno.value;
  var mother_dob_val = m_date + " - " + m_month + " - " + m_year;
  var mother_cidNo_val = m_cidNo.value;
  var mother_country_val = m_country.value;
  var mother_occupation_val = m_occupation.value;
  var mother_village_val = m_village.value;
  var mother_gewog_val = m_gewog.value;
  var mother_dzongkhag_val = m_dzongkhag.value;

  var user = auth.currentUser;
  var databaseReference = database.ref();

  var mother_data = {
    mother_name: mother_name_val,
    email: mother_email_val,
    phone_no: mother_pno_val,
    dob: mother_dob_val,
    cid_no: mother_cidNo_val,
    country: mother_country_val,
    occupation: mother_occupation_val,
    village: mother_village_val,
    gewog: mother_gewog_val,
    dzongkhag: mother_dzongkhag_val,
  };

  databaseReference
    .child("users/" + user.uid + "/parents_info" + "/mother_info")
    .set(mother_data);
  alert("Saved Successfully!");
});

//data retrieval
var current_user_id = JSON.parse(
  localStorage.getItem("currentUserData")
).user_id;

var data_ref_from_firebase = database
  .ref()
  .child("users/" + current_user_id + "/parents_info/");

data_ref_from_firebase.once("value", function (snapshot) {
  var retrieved_data = snapshot.val();

  if (retrieved_data.father_info) {
    f_name.value = retrieved_data.father_info.father_name;
    f_email.value = retrieved_data.father_info.email;
    f_pno.value = retrieved_data.father_info.phone_no;
    const [fdate, fmonth, fyear] = retrieved_data.father_info.dob.split(" - ");
    f_date.value = fdate;
    f_month.value = fmonth;
    f_year.value = fyear;
    f_cidNo.value = retrieved_data.father_info.cid;
    f_country.value = retrieved_data.father_info.country;
    f_occupation.value = retrieved_data.father_info.occupation;
    f_village.value = retrieved_data.father_info.village;
    f_gewog.value = retrieved_data.father_info.gewog;
    f_dzongkhag.value = retrieved_data.father_info.dzongkhang;
  }

  if (retrieved_data.mother_info) {
    m_name.value = retrieved_data.mother_info.mother_name;
    m_email.value = retrieved_data.mother_info.email;
    m_pno.value = retrieved_data.mother_info.phone_no;
    const [mdate, mmonth, myear] = retrieved_data.mother_info.dob.split(" - ");
    m_date.value = mdate;
    m_month.value = mmonth;
    m_year.value = myear;
    m_cidNo.value = retrieved_data.mother_info.cid;
    m_country.value = retrieved_data.mother_info.country;
    m_occupation.value = retrieved_data.mother_info.occupation;
    m_village.value = retrieved_data.mother_info.village;
    m_gewog.value = retrieved_data.mother_info.gewog;
    m_dzongkhag.value = retrieved_data.mother_info.dzongkhag;
  }
});
