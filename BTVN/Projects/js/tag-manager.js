// Kịch bản:
// - Có danh sách các thẻ (tags) hiển thị sẵn: HTML, CSS, JavaScript
// - Nhập tên thẻ mới → nhấn "Thêm" → thêm thẻ mới vào danh sách
// - Mỗi thẻ có nút "×" để xoá thẻ đó
// - Nút "Xoá tất cả" → xoá toàn bộ thẻ trong danh sách
// - Không cho thêm thẻ trùng tên (không phân biệt hoa/thường)
// - Cập nhật số lượng thẻ sau mỗi thay đổi

// Bước 1: Truy xuất các phần tử DOM cần tác động
const inputTagName = document.getElementById("inputTagName");
const btnAddTag = document.getElementById("btnAddTag");
const tagContainer = document.getElementById("tagContainer");
const btnRemoveAll = document.getElementById("btnRemoveAll");
const tagCountInfo = document.getElementById("tagCountInfo");

// Bước 2: Gắn sự kiện xoá cho các nút "×" có sẵn
const existingRemoveButtons = tagContainer.querySelectorAll(".tag-remove");
for (let i = 0; i < existingRemoveButtons.length; i++) {
    existingRemoveButtons[i].addEventListener("click", function () {
        const tagItem = this.parentElement;
        tagContainer.removeChild(tagItem);
        updateTagCount();
    });
}

// Bước 3: Gắn sự kiện click cho nút "Thêm"
btnAddTag.addEventListener("click", function () {
    // Bước 3.1: Lấy giá trị nhập vào
    const tagName = inputTagName.value.trim();

    // Bước 3.2: Kiểm tra ô input trống
    if (!tagName) {
        alert("Vui lòng nhập tên thẻ!");
        return;
    }

    // Bước 3.3: Kiểm tra thẻ trùng lặp
    const existingTags = tagContainer.querySelectorAll(".tag-item");
    for (let i = 0; i < existingTags.length; i++) {
        const existingTagName = existingTags[i].textContent.replace("×", "").trim().toLowerCase();
        if (existingTagName === tagName.toLowerCase()) {
            alert("Thẻ này đã tồn tại!");
            return;
        }
    }

    // Bước 3.4: Tạo thẻ mới
    const newTag = document.createElement("span");
    newTag.classList.add("tag-item");
    newTag.innerHTML = tagName + ' <button class="tag-remove">×</button>';

    // Bước 3.5: Gắn sự kiện xoá cho nút "×" trong thẻ mới
    const removeButton = newTag.querySelector(".tag-remove");
    removeButton.addEventListener("click", function () {
        tagContainer.removeChild(newTag);
        updateTagCount();
    });

    // Bước 3.6: Thêm thẻ vào container và cập nhật
    tagContainer.appendChild(newTag);
    inputTagName.value = "";
    updateTagCount();
});

// Bước 4: Gắn sự kiện click cho nút "Xoá tất cả"
btnRemoveAll.addEventListener("click", function () {
    tagContainer.innerHTML = "";
    updateTagCount();
});

// Bước 5: Hàm cập nhật số lượng thẻ
function updateTagCount() {
    const count = tagContainer.querySelectorAll(".tag-item").length;
    tagCountInfo.textContent = "Số thẻ: " + count;
}

updateTagCount();
