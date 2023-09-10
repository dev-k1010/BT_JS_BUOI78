// Khai báo mảng
var numberArray = [];

function nhapSo() {
  var number = document.querySelector("#number").value * 1;
  numberArray.push(number);
  document.getElementById("xuatMang").innerHTML = numberArray;
  // Các biến
  var sortUp = [];
  var smallestNumber = [];
  var tongSoChan = 0;
  var demSoDuong = 0;
  var soChanCuoiCung = 0;
  var soAm = 0;
  var soDuong = 0;
  var soSanh = 0;
  var demSoNguyen = 0;
  var soNguyenToDauTien = 0;

  //   Tìm số nhỏ nhất
  var minArray = Math.min.apply(Math, numberArray);
  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > 0) {
      // Đếm số dương
      demSoDuong++;
      // Tổng số chẵn
      tongSoChan += numberArray[i];
      // Số dương nhỏ nhất
      smallestNumber.sort();
      smallestNumber.push(numberArray[i]);
    }
    // Tìm số chẵn cuối cùng
    if (numberArray[i] % 2 == 0) {
      soChanCuoiCung = numberArray[i];
    }
    // Số nguyên tố đầu tiên

    function ktSoNguyenTo(numberArray) {
      if (numberArray <= 1) {
        return false;
      }

      if (numberArray <= 3) {
        return true;
      }

      if (numberArray % 2 === 0 || numberArray % 3 === 0) {
        return false;
      }

      for (let i = 5; i * i <= number; i += 6) {
        if (numberArray % i === 0 || numberArray % (i + 2) === 0) {
          return false;
        }
      }

      return true;
    }
    function traVeSoNguyenToDauTien(arr) {
      for (const numberArray of arr) {
        if (ktSoNguyenTo(numberArray)) {
          return numberArray;
        }
      }
      return undefined;
    }
    if (soNguyenToDauTien !== undefined) {
      soNguyenToDauTien = traVeSoNguyenToDauTien(numberArray);
    }
    // Sắp xếp mảng tăng dần
    sortUp.sort(function (a, b) {
      return a - b;
    });
    sortUp.push(numberArray[i]);
    // Đếm số nguyên
    if (numberArray[i] >= 0) {
      demSoNguyen++;
    }
    // So sánh số lượng số âm và số nguyên
    if (numberArray[i] > 0) {
      soDuong++;
    } else if (numberArray[i] < 0) {
      soAm++;
    }
    if (soDuong > soAm) {
      soSanh = "Số dương > Số âm";
    }
    if (soDuong < soAm) {
      soSanh = "Số dương < Số âm";
    }
    if ((soDuong = soAm)) {
      soSanh = "Số dương = Số âm";
    }
    document.getElementById("sumArray").innerHTML = tongSoChan;
    document.getElementById("demSoChan").innerHTML = `${demSoDuong} số dương`;
    document.getElementById("timSoNhoNhat").innerHTML = minArray;
    document.getElementById("soDuongNhoNhat").innerHTML = Math.min(
      ...smallestNumber
    );
    document.getElementById("soChanCuoi").innerHTML = soChanCuoiCung;
    document.getElementById("soDauTien").innerHTML = soNguyenToDauTien;
    document.getElementById("sapXepTangDan").innerHTML = sortUp;
    document.getElementById("soNguyen").innerHTML = ` ${demSoNguyen} số nguyên`;
    document.getElementById("soSanhSo").innerHTML = soSanh;
  }
}
// Đổi chỗ
function doiCho() {
  var soThuNhat = document.getElementById("numberOne").value * 1;
  var soThuHai = document.getElementById("numberTwo").value * 1;
  var index1 = soThuNhat;
  var index2 = soThuHai;
  for (var i = 0; i <= numberArray.length; i++) {
    if (
      index1 < 0 ||
      index1 >= numberArray.length ||
      index2 < 0 ||
      index2 >= numberArray.length
    ) {
      document.getElementById("mangDoiCho").innerHTML =
        "vị trí không hợp lệ, không thể đổi chỗ";
      return;
    }

    // gán gtri index1 vào biến tạm
    var temp = numberArray[index1];

    // thay thế index1 bằng index2
    numberArray[index1] = numberArray[index2];

    // thay thế index2 bằng biến tạm
    numberArray[index2] = temp;
  }
  document.getElementById("mangDoiCho").innerHTML = numberArray;
}
