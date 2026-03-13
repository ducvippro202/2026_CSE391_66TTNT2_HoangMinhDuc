// Kịch bản:
// - Có bảng danh sách sinh viên với 2 dòng mẫu
// - Người dùng nhập Họ tên + Email → nhấn "Thêm sinh viên" → thêm dòng mới vào bảng
// - Mỗi dòng có nút "Xoá" → xoá dòng đó khỏi bảng
// - Sau mỗi lần thêm/xoá → cập nhật lại cột STT cho đúng thứ tự

// Bước 1: Truy xuất các phần tử DOM cần tác động
const inputStudentName = document.getElementById("inputStudentName");
const inputStudentEmail = document.getElementById("inputStudentEmail");
const btnAddStudent = document.getElementById("btnAddStudent");
const studentTableBody = document.getElementById("studentTableBody");

// Bước 2: Gắn sự kiện xoá cho các nút "Xoá" có sẵn trong bảng
// Gợi ý: Dùng querySelectorAll để lấy tất cả nút .btn-delete hiện tại
const existingDeleteButtons = studentTableBody.querySelectorAll(".btn-delete");
for (let i = 0; i < existingDeleteButtons.length; i++) {
    existingDeleteButtons[i].addEventListener("click", function () {
        const row = this.closest("tr");
        studentTableBody.removeChild(row);
        updateStudentOrder();
    });
}

// Bước 3: Gắn sự kiện click cho nút "Thêm sinh viên"
btnAddStudent.addEventListener("click", function () {
    // Bước 3.1: Lấy giá trị từ các ô input
    const studentName = inputStudentName.value.trim();
    const studentEmail = inputStudentEmail.value.trim();

    // Bước 3.2: Kiểm tra dữ liệu nhập
    if (!studentName || !studentEmail) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Bước 3.3: Tạo dòng <tr> mới
    const newRow = document.createElement("tr");

    // Bước 3.4: Tạo các ô <td> cho STT, Họ tên, Email, Hành động
    const orderCell = document.createElement("td");
    orderCell.textContent = "";

    const nameCell = document.createElement("td");
    nameCell.textContent = studentName;

    const emailCell = document.createElement("td");
    emailCell.textContent = studentEmail;

    const actionCell = document.createElement("td");

    // Bước 3.5: Tạo nút "Xoá" trong ô Hành động
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-delete");
    deleteButton.textContent = "Xoá";
    deleteButton.addEventListener("click", function () {
        studentTableBody.removeChild(newRow);
        updateStudentOrder();
    });
    actionCell.appendChild(deleteButton);

    // Bước 3.6: Ghép các <td> vào <tr>, rồi thêm <tr> vào <tbody>
    newRow.appendChild(orderCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(actionCell);
    studentTableBody.appendChild(newRow);

    // Bước 3.7: Xoá giá trị ô input và cập nhật STT
    inputStudentName.value = "";
    inputStudentEmail.value = "";
    updateStudentOrder();
});

// Bước 4: Hàm cập nhật lại số thứ tự
function updateStudentOrder() {
    const allRows = studentTableBody.querySelectorAll("tr");
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].cells[0].textContent = i + 1;
    }
}

updateStudentOrder();
