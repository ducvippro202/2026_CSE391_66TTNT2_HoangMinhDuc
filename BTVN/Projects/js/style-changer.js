// Kịch bản:
// - Có một khung nội dung mẫu (preview box)
// - Nhấn các nút màu → thay đổi màu nền của khung nội dung
// - Nhấn nút cỡ chữ (Nhỏ/Vừa/Lớn) → thay đổi cỡ chữ trong khung
// - Nhấn nút "Ẩn / Hiện" → ẩn hoặc hiện khung nội dung

// Bước 1: Truy xuất các phần tử DOM cần tác động
const previewBox = document.getElementById("previewBox");
const btnToggleVisibility = document.getElementById("btnToggleVisibility");

// Các nút thay đổi cỡ chữ
const btnSizeSmall = document.getElementById("btnSizeSmall");
const btnSizeNormal = document.getElementById("btnSizeNormal");
const btnSizeLarge = document.getElementById("btnSizeLarge");

// Lấy tất cả các nút màu
const allColorButtons = document.querySelectorAll(".btn-color");

// Bước 2: Gắn sự kiện click cho từng nút màu (dùng vòng lặp)
// Gợi ý: Duyệt qua allColorButtons, mỗi nút lấy data-color rồi gán cho previewBox
for (let i = 0; i < allColorButtons.length; i++) {
    allColorButtons[i].addEventListener("click", function () {
        const selectedColor = this.getAttribute("data-color");
        previewBox.style.backgroundColor = selectedColor;
    });
}

// Bước 3: Gắn sự kiện click cho nút "Nhỏ"
btnSizeSmall.addEventListener("click", function () {
    previewBox.style.fontSize = "12px";
});

// Bước 4: Gắn sự kiện click cho nút "Vừa"
btnSizeNormal.addEventListener("click", function () {
    previewBox.style.fontSize = "16px";
});

// Bước 5: Gắn sự kiện click cho nút "Lớn"
btnSizeLarge.addEventListener("click", function () {
    previewBox.style.fontSize = "22px";
});

// Bước 6: Gắn sự kiện click cho nút "Ẩn / Hiện"
btnToggleVisibility.addEventListener("click", function () {
    if (previewBox.style.display !== "none") {
        previewBox.style.display = "none";
    } else {
        previewBox.style.display = "block";
    }
});
