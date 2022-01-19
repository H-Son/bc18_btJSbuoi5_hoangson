const nd = "nd";
const dn = "dn";
function phiXuLyHoaDon(kh) {
  if (kh === nd) {
    return 4.5;
  } else {
    return 15;
  }
}
function phiDichVuCoBan(kh, x) {
  if (kh === nd) {
    return 20.5;
  } else {
    if (x <= 10) {
      return 75;
    } else {
      return 75 + (x - 10) * 5;
    }
  }
}
// var a = phiDichVuCoBan(dn, 12);
// console.log(a);
function thueKenhCaoCap(kh) {
  if (kh === nd) {
    return 7.5;
  } else {
    return 50;
  }
}
document.getElementById("khachHang").onchange = function () {
  var khachHangValue = document.getElementById("khachHang").value;
  if (khachHangValue === nd) {
    document.getElementById("congKetNoi").disabled = true;
  } else {
    document.getElementById("congKetNoi").disabled = false;
  }
};
function tinhCap() {
  var khachHangValue = document.getElementById("khachHang").value;
  var congKetNoiValue = document.getElementById("congKetNoi").value * 1;
  var kenhCaoCapValue = document.getElementById("kenhCaoCap").value * 1;
  var tienXLHD = phiXuLyHoaDon(khachHangValue);
  var tienPDVCB = phiDichVuCoBan(khachHangValue, congKetNoiValue);
  var tienTKCC = thueKenhCaoCap(khachHangValue) * kenhCaoCapValue;
  var tongTienCap = tienXLHD + tienPDVCB + tienTKCC;
  document.getElementById("result_bt4").innerText =
    "Tổng Tiền Cáp Là " + tongTienCap.toLocaleString() + "$";
}
