console.log("Hello from JavaScript!");

let name = "Duc";
let yearOfBirth = 2004;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + " năm nay mình " + age + " tuổi");
let score = 9;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

function calAvg(a, b, c)
{
    let avg = (a + b + c) / 3;
    return avg;
}

function xepLoai(avg)
{
    if (avg >= 8.5) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

function kiemTraTuoi(age)
{
    if (age >= 18) {
        return "Du 18 tuoi";
    }
    else
    {
        return "Chua du 18 tuoi";
    }
}