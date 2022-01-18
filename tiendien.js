function tinhTienDien() {
  var soKwValue = document.getElementById("sokw").value * 1;
  var tongtien;
  if (soKwValue <= 50) {
    tongtien = soKwValue * 500;
  } else if (soKwValue <= 100) {
    tongtien = 50 * 500 + (soKwValue - 50) * 650;
  } else if (soKwValue <= 200) {
    tongtien = 50 * 500 + 50 * 650 + (soKwValue - 100) * 850;
  } else if (soKwValue <= 350) {
    tongtien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwValue - 200) * 1100;
  } else {
    tongtien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwValue - 350) * 1300;
  }
  document.getElementById("result_bt2").innerText =
    "so tien " + tongtien.toLocaleString();
}
