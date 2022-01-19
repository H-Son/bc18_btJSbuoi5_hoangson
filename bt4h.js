// function tinhKhoangCach() {
//   // Get the value of the input field with id="numb"
//   var toaDoTruongx = document.getElementById("truongx").value * 1;

//   var hoTenSV3Value = document.getElementById("hoTenSV3").value;
//   var sinhvien1 =
//     Math.pow(toaDoTruongx - toaDoSV1x, 2) +
//     Math.pow(toaDoTruongy - toaDoSV1y, 2);
//   var tinhKhoangCachSV1 = Math.sqrt(sinhvien1);
//   var sinhvien2 =
//     Math.pow(toaDoTruongx - toaDoSV2x, 2) +
//     Math.pow(toaDoTruongy - toaDoSV2y, 2);
//   var tinhKhoangCachSV2 = Math.sqrt(sinhvien2);
//   var sinhvien3 =
//     Math.pow(toaDoTruongx - toaDoSV3x, 2) +
//     Math.pow(toaDoTruongy - toaDoSV3y, 2);
//   var tinhKhoangCachSV3 = Math.sqrt(sinhvien3);
//   // document.getElementById("xuatKetQua").innerText =
//   //   "Số Chẵn Là : " +
//   //   tinhKhoangCachSV1 +
//   //   "  " +
//   //   tinhKhoangCachSV2 +
//   //   "  " +
//   //   tinhKhoangCachSV3;
//   // document.getElementById("xuatHoTen").innerText = hoTenSV1Value;
//   if (
//     tinhKhoangCachSV1 > tinhKhoangCachSV2 &&
//     tinhKhoangCachSV1 > tinhKhoangCachSV3

//   } else if (
//     tinhKhoangCachSV3 > tinhKhoangCachSV1 &&
//     tinhKhoangCachSV3 > tinhKhoangCachSV2
//   ) {
//     document.getElementById("xuatKetQua").innerText =
//       "Sinh viên xa trường nhất là: " + hoTenSV3Value;
//   }
// }
function laydiemkhuvuc(khuvuc) {
  if (khuvuc === "a") {
    return 2;
  } else if (khuvuc === "b") {
    return 1;
  } else if (khuvuc === "c") {
    return 0.5;
  } else {
    return 0;
  }
}
function laydiemdoituong(doituong) {
  if (doituong == 1) {
    return 2.5;
  } else if (doituong == 2) {
    return 1.5;
  } else if (doituong == 3) {
    return 1;
  } else {
    return 0;
  }
}
function ketqua() {
  var diem1Value = document.getElementById("diem1").value * 1;
  var diem2Value = document.getElementById("diem2").value * 1;
  var diem3Value = document.getElementById("diem3").value * 1;
  var diemchuanValue = document.getElementById("diemchuan").value * 1;
  var khuvucEl = document.getElementById("khuvucuutien").value;
  var doituongEl = document.getElementById("doituonguutien").value * 1;
  var khuvucValue = laydiemkhuvuc(khuvucEl);
  var doituongValue = laydiemdoituong(doituongEl);
  var diem3mon = diem1Value + diem2Value + diem3Value;
  var tongdiem = diem3mon + khuvucValue + doituongValue;
  if (diem1Value * diem2Value * diem3Value != 0) {
    if (tongdiem > diemchuanValue) {
      document.getElementById("result_bt1").innerText = "Bạn Đã Thi Đậu";
    } else {
      document.getElementById("result_bt1").innerText = "Bạn Thi Chưa Đậu";
    }
  } else {
    document.getElementById("result_bt1").innerText = "Bạn Thi Chưa Đậu";
  }
  console.log({ diem3mon, tongdiem, doituongValue, khuvucValue });
}
