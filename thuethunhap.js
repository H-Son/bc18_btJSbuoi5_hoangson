function tinhThue() {
  var thuNhapValue = document.getElementById("thuNhap").value * 1;
  var nguoiPhuThuocValue = document.getElementById("nguoiPhuThuoc").value * 1;
  console.log(thuNhapValue, nguoiPhuThuocValue);
  var thuNhapChiuThue = thuNhapValue - 4000000 - nguoiPhuThuocValue * 1600000;
  var thuethunhap;
  if (thuNhapChiuThue < 0) {
    thuethunhap = 0;
  } else if (thuNhapChiuThue <= 60000000) {
    thuethunhap = (thuNhapChiuThue * 5) / 100;
  } else if (thuNhapChiuThue <= 120000000) {
    thuethunhap = (thuNhapChiuThue * 10) / 100;
  } else if (thuNhapChiuThue <= 210000000) {
    thuethunhap = (thuNhapChiuThue * 15) / 100;
  } else if (thuNhapChiuThue <= 384000000) {
    thuethunhap = (thuNhapChiuThue * 20) / 100;
  } else if (thuNhapChiuThue <= 624000000) {
    thuethunhap = (thuNhapChiuThue * 25) / 100;
  } else if (thuNhapChiuThue <= 960000000) {
    thuethunhap = (thuNhapChiuThue * 30) / 100;
  } else {
    thuethunhap = (thuNhapChiuThue * 35) / 100;
  }
  document.getElementById("result_bt3").innerText =
    "so tien " + thuethunhap.toLocaleString();
}
