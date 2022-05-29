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
var growth_info = document.getElementById("growth_form");

//1st month
var m_height = document.getElementById("m_height");
var m_weight = document.getElementById("m_weight");
var m_remark = document.getElementById("m_remark");

//2nd month
var m2_height = document.getElementById("m2_height");
var m2_weight = document.getElementById("m2_weight");
var m2_remark = document.getElementById("m2_remark");

// 3rd month
var m3_height = document.getElementById("m3_height");
var m3_weight = document.getElementById("m3_weight");
var m3_remark = document.getElementById("m3_remark");

// 4th month
var m4_height = document.getElementById("m4_height");
var m4_weight = document.getElementById("m4_weight");
var m4_remark = document.getElementById("m4_remark");

// 5th month
var m5_height = document.getElementById("m5_height");
var m5_weight = document.getElementById("m5_weight");
var m5_remark = document.getElementById("m5_remark");

// 6th month
var m6_height = document.getElementById("m6_height");
var m6_weight = document.getElementById("m6_weight");
var m6_remark = document.getElementById("m6_remark");

// 7th month
var m7_height = document.getElementById("m7_height");
var m7_weight = document.getElementById("m7_weight");
var m7_remark = document.getElementById("m7_remark");

// 8th month
var m8_height = document.getElementById("m8_height");
var m8_weight = document.getElementById("m8_weight");
var m8_remark = document.getElementById("m8_remark");

// 9th month
var m9_height = document.getElementById("m9_height");
var m9_weight = document.getElementById("m9_weight");
var m9_remark = document.getElementById("m9_remark");

// 10th month
var m10_height = document.getElementById("m10_height");
var m10_weight = document.getElementById("m10_weight");
var m10_remark = document.getElementById("m10_remark");

// 11th month
var m11_height = document.getElementById("m11_height");
var m11_weight = document.getElementById("m11_weight");
var m11_remark = document.getElementById("m11_remark");

// 12th month
var m12_height = document.getElementById("m12_height");
var m12_weight = document.getElementById("m12_weight");
var m12_remark = document.getElementById("m12_remark");

// 15th month
var m15_height = document.getElementById("m15_height");
var m15_weight = document.getElementById("m15_weight");
var m15_remark = document.getElementById("m15_remark");

// 18th month
var m18_height = document.getElementById("m18_height");
var m18_weight = document.getElementById("m18_weight");
var m18_remark = document.getElementById("m18_remark");

// 21st month
var m21_height = document.getElementById("m21_height");
var m21_weight = document.getElementById("m21_weight");
var m21_remark = document.getElementById("m21_remark");

// 24th month
var m24_height = document.getElementById("m24_height");
var m24_weight = document.getElementById("m24_weight");
var m24_remark = document.getElementById("m24_remark");

// 27th month
var m27_height = document.getElementById("m27_height");
var m27_weight = document.getElementById("m27_weight");
var m27_remark = document.getElementById("m27_remark");

// 30th month
var m30_height = document.getElementById("m30_height");
var m30_weight = document.getElementById("m30_weight");
var m30_remark = document.getElementById("m30_remark");

// 33rd month
var m33_height = document.getElementById("m33_height");
var m33_weight = document.getElementById("m33_weight");
var m33_remark = document.getElementById("m33_remark");

// 36th month
var m36_height = document.getElementById("m36_height");
var m36_weight = document.getElementById("m36_weight");
var m36_remark = document.getElementById("m36_remark");

//data retrieval
var current_user_id = JSON.parse(
  localStorage.getItem("currentUserData")
).user_id;

var data_ref_from_firebase = database
  .ref()
  .child("users/" + current_user_id + "/growth_info");

data_ref_from_firebase.once("value", function (snapshot) {
  var retrieved_data = snapshot.val();

  //1st month
  if (retrieved_data.month1) {
    m_height.value = retrieved_data.month1.height;
    m_weight.value = retrieved_data.month1.weight;
    m_remark.value = retrieved_data.month1.remark;
  }

  //2nd month
  if (retrieved_data.month2) {
    if (retrieved_data.month2.height) {
      m2_height.value = retrieved_data.month2.height;
    }
    if (retrieved_data.month2.weight) {
      m2_weight.value = retrieved_data.month2.weight;
    }
    if (retrieved_data.month2.remark) {
      m2_remark.value = retrieved_data.month2.remark;
    }
  }
  //3rd month
  if (retrieved_data.month3) {
    if (retrieved_data.month3.height) {
      m3_height.value = retrieved_data.month3.height;
    }
    if (retrieved_data.month3.weight) {
      m3_weight.value = retrieved_data.month3.weight;
    }
    if (retrieved_data.month3.remark) {
      m3_remark.value = retrieved_data.month3.remark;
    }
  }

  //4th month
  if (retrieved_data.month4) {
    if (retrieved_data.month4.height) {
      m4_height.value = retrieved_data.month4.height;
    }
    if (retrieved_data.month4.weight) {
      m4_weight.value = retrieved_data.month4.weight;
    }
    if (retrieved_data.month4.remark) {
      m4_remark.value = retrieved_data.month4.remark;
    }
  }

  //5th month
  if (retrieved_data.month5) {
    if (retrieved_data.month5.height) {
      m5_height.value = retrieved_data.month5.height;
    }
    if (retrieved_data.month5.weight) {
      m5_weight.value = retrieved_data.month5.weight;
    }
    if (retrieved_data.month5.remark) {
      m5_remark.value = retrieved_data.month5.remark;
    }
  }

  //6th month
  if (retrieved_data.month6) {
    if (retrieved_data.month6.height) {
      m6_height.value = retrieved_data.month6.height;
    }
    if (retrieved_data.month6.weight) {
      m6_weight.value = retrieved_data.month6.weight;
    }
    if (retrieved_data.month6.remark) {
      m6_remark.value = retrieved_data.month6.remark;
    }
  }

  //7th month
  if (retrieved_data.month7) {
    if (retrieved_data.month7.height) {
      m7_height.value = retrieved_data.month7.height;
    }
    if (retrieved_data.month7.weight) {
      m7_weight.value = retrieved_data.month7.weight;
    }
    if (retrieved_data.month7.remark) {
      m7_remark.value = retrieved_data.month7.remark;
    }
  }

  //8th month
  if (retrieved_data.month8) {
    if (retrieved_data.month8.height) {
      m8_height.value = retrieved_data.month8.height;
    }
    if (retrieved_data.month8.weight) {
      m8_weight.value = retrieved_data.month8.weight;
    }
    if (retrieved_data.month8.remark) {
      m8_remark.value = retrieved_data.month8.remark;
    }
  }

  //9th month
  if (retrieved_data.month9) {
    if (retrieved_data.month9.height) {
      m9_height.value = retrieved_data.month9.height;
    }
    if (retrieved_data.month9.weight) {
      m9_weight.value = retrieved_data.month9.weight;
    }
    if (retrieved_data.month9.remark) {
      m9_remark.value = retrieved_data.month9.remark;
    }
  }

  //10th month
  if (retrieved_data.month10) {
    if (retrieved_data.month10.height) {
      m10_height.value = retrieved_data.month10.height;
    }
    if (retrieved_data.month10.weight) {
      m10_weight.value = retrieved_data.month10.weight;
    }
    if (retrieved_data.month10.remark) {
      m10_remark.value = retrieved_data.month10.remark;
    }
  }

  //11th month
  if (retrieved_data.month11) {
    if (retrieved_data.month11.height) {
      m11_height.value = retrieved_data.month11.height;
    }
    if (retrieved_data.month11.weight) {
      m11_weight.value = retrieved_data.month11.weight;
    }
    if (retrieved_data.month11.remark) {
      m11_remark.value = retrieved_data.month11.remark;
    }
  }

  //12th month
  if (retrieved_data.month12) {
    if (retrieved_data.month12.height) {
      m12_height.value = retrieved_data.month12.height;
    }
    if (retrieved_data.month12.weight) {
      m12_weight.value = retrieved_data.month12.weight;
    }
    if (retrieved_data.month12.remark) {
      m12_remark.value = retrieved_data.month12.remark;
    }
  }

  //15th month
  if (retrieved_data.month15) {
    if (retrieved_data.month15.height) {
      m15_height.value = retrieved_data.month15.height;
    }
    if (retrieved_data.month15.weight) {
      m15_weight.value = retrieved_data.month15.weight;
    }
    if (retrieved_data.month15.remark) {
      m15_remark.value = retrieved_data.month15.remark;
    }
  }

  //18th month
  if (retrieved_data.month18) {
    if (retrieved_data.month18.height) {
      m18_height.value = retrieved_data.month18.height;
    }
    if (retrieved_data.month18.weight) {
      m18_weight.value = retrieved_data.month18.weight;
    }
    if (retrieved_data.month18.remark) {
      m18_remark.value = retrieved_data.month18.remark;
    }
  }

  //21th month
  if (retrieved_data.month21) {
    if (retrieved_data.month21.height) {
      m21_height.value = retrieved_data.month21.height;
    }
    if (retrieved_data.month21.weight) {
      m21_weight.value = retrieved_data.month21.weight;
    }
    if (retrieved_data.month21.remark) {
      m21_remark.value = retrieved_data.month21.remark;
    }
  }

  //24th month
  if (retrieved_data.month24) {
    if (retrieved_data.month24.height) {
      m24_height.value = retrieved_data.month24.height;
    }
    if (retrieved_data.month24.weight) {
      m24_weight.value = retrieved_data.month24.weight;
    }
    if (retrieved_data.month24.remark) {
      m24_remark.value = retrieved_data.month24.remark;
    }
  }

  //27th month
  if (retrieved_data.month27) {
    if (retrieved_data.month27.height) {
      m27_height.value = retrieved_data.month27.height;
    }
    if (retrieved_data.month27.weight) {
      m27_weight.value = retrieved_data.month27.weight;
    }
    if (retrieved_data.month27.remark) {
      m27_remark.value = retrieved_data.month27.remark;
    }
  }

  //30th month
  if (retrieved_data.month30) {
    if (retrieved_data.month30.height) {
      m30_height.value = retrieved_data.month30.height;
    }
    if (retrieved_data.month30.weight) {
      m30_weight.value = retrieved_data.month30.weight;
    }
    if (retrieved_data.month30.remark) {
      m30_remark.value = retrieved_data.month30.remark;
    }
  }

  //33th month
  if (retrieved_data.month33) {
    if (retrieved_data.month33.height) {
      m33_height.value = retrieved_data.month33.height;
    }
    if (retrieved_data.month33.weight) {
      m33_weight.value = retrieved_data.month33.weight;
    }
    if (retrieved_data.month33.remark) {
      m33_remark.value = retrieved_data.month33.remark;
    }
  }

  //36th month
  if (retrieved_data.month36) {
    if (retrieved_data.month36.height) {
      m36_height.value = retrieved_data.month36.height;
    }
    if (retrieved_data.month36.weight) {
      m36_weight.value = retrieved_data.month36.weight;
    }
    if (retrieved_data.month36.remark) {
      m36_remark.value = retrieved_data.month36.remark;
    }
  }
});

growth_info.addEventListener("submit", function (e) {
  e.preventDefault();

  //1st month
  var m_height_value = m_height.value;
  var m_weight_value = m_weight.value;
  var m_remark_value = m_remark.value;

  //2nd month
  var m2_height_value = m2_height.value;
  var m2_weight_value = m2_weight.value;
  var m2_remark_value = m2_remark.value;

  //3rd month
  var m3_height_value = m3_height.value;
  var m3_weight_value = m3_weight.value;
  var m3_remark_value = m3_remark.value;

  //4th month
  var m4_height_value = m4_height.value;
  var m4_weight_value = m4_weight.value;
  var m4_remark_value = m4_remark.value;

  //5th month
  var m5_height_value = m5_height.value;
  var m5_weight_value = m5_weight.value;
  var m5_remark_value = m5_remark.value;

  //6th month
  var m6_height_value = m6_height.value;
  var m6_weight_value = m6_weight.value;
  var m6_remark_value = m6_remark.value;

  //7thmonth
  var m7_height_value = m7_height.value;
  var m7_weight_value = m7_weight.value;
  var m7_remark_value = m7_remark.value;

  //8th month
  var m8_height_value = m8_height.value;
  var m8_weight_value = m8_weight.value;
  var m8_remark_value = m8_remark.value;

  //9th month
  var m9_height_value = m9_height.value;
  var m9_weight_value = m9_weight.value;
  var m9_remark_value = m9_remark.value;

  //10th month
  var m10_height_value = m10_height.value;
  var m10_weight_value = m10_weight.value;
  var m10_remark_value = m10_remark.value;

  //11th month
  var m11_height_value = m11_height.value;
  var m11_weight_value = m11_weight.value;
  var m11_remark_value = m11_remark.value;

  //12th month
  var m12_height_value = m12_height.value;
  var m12_weight_value = m12_weight.value;
  var m12_remark_value = m12_remark.value;

  //15 month
  var m15_height_value = m15_height.value;
  var m15_weight_value = m15_weight.value;
  var m15_remark_value = m15_remark.value;

  //18th month
  var m18_height_value = m18_height.value;
  var m18_weight_value = m18_weight.value;
  var m18_remark_value = m18_remark.value;

  //21st month
  var m21_height_value = m21_height.value;
  var m21_weight_value = m21_weight.value;
  var m21_remark_value = m21_remark.value;

  //24th month
  var m24_height_value = m24_height.value;
  var m24_weight_value = m24_weight.value;
  var m24_remark_value = m24_remark.value;

  //27th month
  var m27_height_value = m27_height.value;
  var m27_weight_value = m27_weight.value;
  var m27_remark_value = m27_remark.value;

  //30th month
  var m30_height_value = m30_height.value;
  var m30_weight_value = m30_weight.value;
  var m30_remark_value = m30_remark.value;

  //33rd month
  var m33_height_value = m33_height.value;
  var m33_weight_value = m33_weight.value;
  var m33_remark_value = m33_remark.value;

  //36th month
  var m36_height_value = m36_height.value;
  var m36_weight_value = m36_weight.value;
  var m36_remark_value = m36_remark.value;

  var databaseReference = database.ref();
  const user = auth.currentUser;

  //1st month
  if (m_height_value != "") {
    var month_1 = {
      height: m_height_value,
      weight: m_weight_value,
      remark: m_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month1")
      .set(month_1);
  }
  //2nd month
  if (m2_height_value != "") {
    var month_2 = {
      height: m2_height_value,
      weight: m2_weight_value,
      remark: m2_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month2")
      .set(month_2);
  }

  //3rd month
  if (m3_height_value != "") {
    var month_3 = {
      height: m3_height_value,
      weight: m3_weight_value,
      remark: m3_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month3")
      .set(month_3);
  }

  //4th month
  if (m4_height_value != "") {
    var month_4 = {
      height: m4_height_value,
      weight: m4_weight_value,
      remark: m4_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month4")
      .set(month_4);
  }

  //5th month
  if (m5_height_value != "") {
    var month_5 = {
      height: m5_height_value,
      weight: m5_weight_value,
      remark: m5_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month5")
      .set(month_5);
  }

  //6th month
  if (m6_height_value != "") {
    var month_6 = {
      height: m6_height_value,
      weight: m6_weight_value,
      remark: m6_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month6")
      .set(month_6);
  }
  //7th month
  if (m7_height_value != "") {
    var month_7 = {
      height: m7_height_value,
      weight: m7_weight_value,
      remark: m7_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month7")
      .set(month_7);
  }

  //8th month
  if (m8_height_value != "") {
    var month_8 = {
      height: m8_height_value,
      weight: m8_weight_value,
      remark: m8_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month8")
      .set(month_8);
  }

  //9th month
  if (m9_height_value != "") {
    var month_9 = {
      height: m9_height_value,
      weight: m9_weight_value,
      remark: m9_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month9")
      .set(month_9);
  }

  //10th month
  if (m10_height_value != "") {
    var month_10 = {
      height: m10_height_value,
      weight: m10_weight_value,
      remark: m10_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month10")
      .set(month_10);
  }
  //11th month
  if (m11_height_value != "") {
    var month_11 = {
      height: m11_height_value,
      weight: m11_weight_value,
      remark: m11_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month11")
      .set(month_11);
  }

  //12th month
  if (m12_height_value != "") {
    var month_12 = {
      height: m12_height_value,
      weight: m12_weight_value,
      remark: m12_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month12")
      .set(month_12);
  }

  //15th month
  if (m15_height_value != "") {
    var month_15 = {
      height: m15_height_value,
      weight: m15_weight_value,
      remark: m15_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month15")
      .set(month_15);
  }

  //18th month
  if (m18_height_value != "") {
    var month_18 = {
      height: m18_height_value,
      weight: m18_weight_value,
      remark: m18_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month18")
      .set(month_18);
  }

  //21th month
  if (m21_height_value != "") {
    var month_21 = {
      height: m21_height_value,
      weight: m21_weight_value,
      remark: m21_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month21")
      .set(month_21);
  }
  //24th month
  if (m24_height_value != "") {
    var month_24 = {
      height: m24_height_value,
      weight: m24_weight_value,
      remark: m24_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month24")
      .set(month_24);
  }
  //27th month
  if (m27_height_value != "") {
    var month_27 = {
      height: m27_height_value,
      weight: m27_weight_value,
      remark: m27_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month27")
      .set(month_27);
  }
  //30th month
  if (m30_height_value != "") {
    var month_30 = {
      height: m30_height_value,
      weight: m30_weight_value,
      remark: m30_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month30")
      .set(month_30);
  }

  //33th month
  if (m33_height_value != "") {
    var month_33 = {
      height: m33_height_value,
      weight: m33_weight_value,
      remark: m33_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month33")
      .set(month_33);
  }

  //36th month
  if (m36_height_value != "") {
    var month_36 = {
      height: m36_height_value,
      weight: m36_weight_value,
      remark: m36_remark_value,
    };
    databaseReference
      .child("users/" + user.uid + "/growth_info/month36")
      .set(month_36);
  }
  alert("Updated Successfully!");
});
