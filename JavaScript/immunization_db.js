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
var immu_info = document.getElementById("immu_table");

//bcg
var bcg_date_atBirth = document.getElementById("bcg_date");

//hepB
var hepB_date_atBirth = document.getElementById("hepB_date");

//opv
var opv_date_atBirth = document.getElementById("opv_date1");
var opv_date_at6Weeks = document.getElementById("opv_date2");
var opv_date_at10Weeks = document.getElementById("opv_date3");
var opv_date_at14Weeks = document.getElementById("opv_date4");
var opv_date_at9Months = document.getElementById("opv_date5");

//ipv
var ipv_date_at14Weeks = document.getElementById("ipv_date");

//pentavalent
var pent_date_at6Weeks = document.getElementById("pent_date1");
var pent_date_at10Weeks = document.getElementById("pent_date2");
var pent_date_at14Weeks = document.getElementById("pent_date3");

//rota
var rota_date_at6Weeks = document.getElementById("rota_date1");
var rota_date_at10Weeks = document.getElementById("rota_date2");
var rota_date_at14Weeks = document.getElementById("rota_date3");

//pcv
var pcv_date_at6Weeks = document.getElementById("pcv_date1");
var pcv_date_at10Weeks = document.getElementById("pcv_date2");
var pcv_date_at9Months = document.getElementById("pcv_date3");

//mmr
var mmr_date_at9Months = document.getElementById("mmr_date1");
var mmr_date_at2Years = document.getElementById("mmr_date2");

//dtp
var dtp_date_at2Years = document.getElementById("dtp_date1");
var dtp_date_at6Years = document.getElementById("dtp_date2");

//data retrieval
var current_user_id = JSON.parse(
  localStorage.getItem("currentUserData")
).user_id;

var data_ref_from_firebase = database
  .ref()
  .child("users/" + current_user_id + "/child_info/vaccination_info");

data_ref_from_firebase.once("value", function (snapshot) {
  var retrieved_data = snapshot.val();

  //bcg
  if (retrieved_data.bcg) {
    bcg_date_atBirth.value = retrieved_data.bcg.date;
  }

  //hepB
  if (retrieved_data.hepB) {
    hepB_date_atBirth.value = retrieved_data.hepB.date;
  }

  //opv
  if (retrieved_data.opv) {
    if (retrieved_data.opv.At_birth) {
      opv_date_atBirth.value = retrieved_data.opv.At_birth.date;
    }

    if (retrieved_data.opv.At_6Weeks) {
      opv_date_at6Weeks.value = retrieved_data.opv.At_6Weeks.date;
    }

    if (retrieved_data.opv.At_10Weeks) {
      opv_date_at10Weeks.value = retrieved_data.opv.At_10Weeks.date;
    }
    if (retrieved_data.opv.At_14Weeks) {
      opv_date_at14Weeks.value = retrieved_data.opv.At_14Weeks.date;
    }
    if (retrieved_data.opv.At_9Months) {
      opv_date_at9Months.value = retrieved_data.opv.At_9Months.date;
    }
  }

  //ipv
  if (retrieved_data.ipv) {
    ipv_date_at14Weeks.value = retrieved_data.ipv.date;
  }

  //pentavalent
  if (retrieved_data.pentavalent) {
    if (retrieved_data.pentavalent.At_6Weeks) {
      pent_date_at6Weeks.value = retrieved_data.pentavalent.At_6Weeks.date;
    }
    if (retrieved_data.pentavalent.At_10Weeks) {
      pent_date_at10Weeks.value = retrieved_data.pentavalent.At_10Weeks.date;
    }
    if (retrieved_data.pentavalent.At_14Weeks) {
      pent_date_at14Weeks.value = retrieved_data.pentavalent.At_14Weeks.date;
    }
  }

  //rota
  if (retrieved_data.rota) {
    if (retrieved_data.rota.At_6Weeks) {
      rota_date_at6Weeks.value = retrieved_data.rota.At_6Weeks.date;
    }
    if (retrieved_data.rota.At_10Weeks) {
      rota_date_at10Weeks.value = retrieved_data.rota.At_10Weeks.date;
    }
    if (retrieved_data.rota.At_14Weeks) {
      rota_date_at14Weeks.value = retrieved_data.rota.At_14Weeks.date;
    }
  }

  //PCV
  if (retrieved_data.pcv) {
    if (retrieved_data.pcv.At_6Weeks) {
      pcv_date_at6Weeks.value = retrieved_data.pcv.At_6Weeks.date;
    }
    if (retrieved_data.pcv.At_10Weeks) {
      pcv_date_at10Weeks.value = retrieved_data.pcv.At_10Weeks.date;
    }
    if (retrieved_data.pcv.At_14Weeks) {
      pcv_date_at14Weeks.value = retrieved_data.pcv.At_14Weeks.date;
    }
  }

  //mmr
  if (retrieved_data.mmr) {
    if (retrieved_data.mmr.At_9Months) {
      mmr_date_at9Months.value = retrieved_data.mmr.At_9Months.date;
    }
    if (retrieved_data.mmr.At_2Years) {
      mmr_date_at2Years.value = retrieved_data.mmr.At_2Years.date;
    }
  }

  //dtp
  if (retrieved_data.dtp) {
    if (retrieved_data.dtp.At_2Years) {
      dtp_date_at2Years.value = retrieved_data.dtp.At_2Years.date;
    }
    if (retrieved_data.dtp.At_6Years) {
      dtp_date_at6Years.value = retrieved_data.dtp.At_6Years.date;
    }
  }
});

immu_info.addEventListener("submit", function (e) {
  e.preventDefault();

  var bcg_date_atBirth_value = bcg_date_atBirth.value;

  var hepB_date_atBirth_value = hepB_date_atBirth.value;

  var opv_date_atBirth_value = opv_date_atBirth.value;
  var opv_date_at6Weeks_value = opv_date_at6Weeks.value;
  var opv_date_at10Weeks_value = opv_date_at10Weeks.value;
  var opv_date_at14Weeks_value = opv_date_at14Weeks.value;
  var opv_date_at9Months_value = opv_date_at9Months.value;

  var ipv_date_at14Weeks_value = ipv_date_at14Weeks.value;

  var pent_date_at6Weeks_value = pent_date_at6Weeks.value;
  var pent_date_at10Weeks_value = pent_date_at10Weeks.value;
  var pent_date_at14Weeks_value = pent_date_at14Weeks.value;

  var rota_date_at6Weeks_value = rota_date_at6Weeks.value;
  var rota_date_at10Weeks_value = rota_date_at10Weeks.value;
  var rota_date_at14Weeks_value = rota_date_at14Weeks.value;

  var pcv_date_at6Weeks_value = pcv_date_at6Weeks.value;
  var pcv_date_at10Weeks_value = pcv_date_at10Weeks.value;
  var pcv_date_at9Months_value = pcv_date_at9Months.value;

  var mmr_date_at9Months_value = mmr_date_at9Months.value;
  var mmr_date_at2Years_value = mmr_date_at2Years.value;

  var dtp_date_at2Years_value = dtp_date_at2Years.value;
  var dtp_date_at6Years_value = dtp_date_at6Years.value;

  var databaseReference = database.ref();
  const user = auth.currentUser;

  //BCG VACCINATION
  if (bcg_date_atBirth_value != "") {
    var bcg_immunization = {
      date: bcg_date_atBirth_value,
      age: "At Birth",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/bcg")
      .set(bcg_immunization);
  }

  //HepB VACCINATION
  if (hepB_date_atBirth_value != "") {
    var hepB_immunization = {
      date: hepB_date_atBirth_value,
      age: "At Birth",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/hepB")
      .set(hepB_immunization);
  }

  //OPV VACCINATION

  if (opv_date_atBirth_value != "") {
    var opv_immunization = {
      date: opv_date_atBirth_value,
      age: "At Birth",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/opv/At_birth")
      .set(opv_immunization);
  }

  if (opv_date_at6Weeks_value != "") {
    var opv_immunization = {
      date: opv_date_at6Weeks_value,
      age: "At 6 Weeks",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/opv/At_6Weeks")
      .set(opv_immunization);
  }

  if (opv_date_at10Weeks_value != "") {
    var opv_immunization = {
      date: opv_date_at10Weeks_value,
      age: "At 10 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/opv/At_10Weeks"
      )
      .set(opv_immunization);
  }

  if (opv_date_at14Weeks_value != "") {
    var opv_immunization = {
      date: opv_date_at14Weeks_value,
      age: "At 14 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/opv/At_14Weeks"
      )
      .set(opv_immunization);
  }

  if (opv_date_at9Months_value != "") {
    var opv_immunization = {
      date: opv_date_at9Months_value,
      age: "At 9 Months",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/opv/At_9months"
      )
      .set(opv_immunization);
  }

  //IPV VACCINATION
  if (ipv_date_at14Weeks_value != "") {
    var ipv_immunization = {
      date: ipv_date_at14Weeks_value,
      age: "At 14 Weeks",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/ipv")
      .set(ipv_immunization);
  }

  //PENTAVALENT VACCINATION

  if (pent_date_at6Weeks_value != "") {
    var pentavalent_immunization = {
      date: pent_date_at6Weeks_value,
      age: "At 6 Weeks",
    };
    databaseReference
      .child(
        "users/" +
          user.uid +
          "/child_info/vaccination_info/pentavalent/At_6Weeks"
      )
      .set(pentavalent_immunization);
  }

  if (pent_date_at10Weeks_value != "") {
    var pentavalent_immunization = {
      date: pent_date_at10Weeks_value,
      age: "At 10 Weeks",
    };
    databaseReference
      .child(
        "users/" +
          user.uid +
          "/child_info/vaccination_info/pentavalent/At_10Weeks"
      )
      .set(pentavalent_immunization);
  }

  if (pent_date_at14Weeks_value != "") {
    var pentavalent_immunization = {
      date: pent_date_at14Weeks_value,
      age: "At 14 Weeks",
    };
    databaseReference
      .child(
        "users/" +
          user.uid +
          "/child_info/vaccination_info/pentavalent/At_14Weeks"
      )
      .set(pentavalent_immunization);
  }

  //ROTA VACCINATION

  if (rota_date_at6Weeks_value != "") {
    var rota_immunization = {
      date: rota_date_at6Weeks_value,
      age: "At 6 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/rota/At_6Weeks"
      )
      .set(rota_immunization);
  }

  if (rota_date_at10Weeks_value != "") {
    var rota_immunization = {
      date: rota_date_at10Weeks_value,
      age: "At 10 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/rota/At_10Weeks"
      )
      .set(rota_immunization);
  }

  if (rota_date_at14Weeks_value != "") {
    var rota_immunization = {
      date: rota_date_at14Weeks_value,
      age: "At 14 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/rota/At_14Weeks"
      )
      .set(rota_immunization);
  }

  //PCV VACCINATION
  if (pcv_date_at6Weeks_value != "") {
    var pcv_immunization = {
      date: pcv_date_at6Weeks_value,
      age: "At 6 Weeks",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/pcv/At_6Weeks")
      .set(pcv_immunization);
  }

  if (pcv_date_at10Weeks_value != "") {
    var pcv_immunization = {
      date: pcv_date_at10Weeks_value,
      age: "At 10 Weeks",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/pcv/At_10Weeks"
      )
      .set(pcv_immunization);
  }

  if (pcv_date_at9Months_value != "") {
    var pcv_immunization = {
      date: pcv_date_at9Months_value,
      age: "At 9 Months",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/pcv/At_9Months"
      )
      .set(pcv_immunization);
  }

  //MMR VACCINATION

  if (mmr_date_at9Months_value != "") {
    var mmr_immunization = {
      date: mmr_date_at9Months_value,
      age: "At 9 Months",
    };
    databaseReference
      .child(
        "users/" + user.uid + "/child_info/vaccination_info/mmr/At_9Months"
      )
      .set(mmr_immunization);
  }

  if (mmr_date_at2Years_value != "") {
    var mmr_immunization = {
      date: mmr_date_at2Years_value,
      age: "At 2 Years",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/mmr/AT_2Years")
      .set(mmr_immunization);
  }

  //DTP VACCINATION

  if (dtp_date_at2Years_value != "") {
    var dtp_immunization = {
      date: dtp_date_at2Years_value,
      age: "At 2 Years",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/dtp/AT_2Years")
      .set(dtp_immunization);
  }
  if (dtp_date_at6Years_value != "") {
    var dtp_immunization = {
      date: dtp_date_at6Years_value,
      age: "At 6 Years",
    };
    databaseReference
      .child("users/" + user.uid + "/child_info/vaccination_info/dtp/AT_6Years")
      .set(dtp_immunization);
  }

  alert("Updated Successfully!");
});
