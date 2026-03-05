## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1\. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.  
- Viết được các đoạn JS đơn giản với:  
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),  
  - Cú pháp lệnh, toán tử đơn giản,  
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,  
  - Hàm (function) có tham số và giá trị trả về.  
- Thao tác được với DOM:  
  - Lấy phần tử bằng `document.getElementById`,  
  - Thay đổi nội dung văn bản, kiểu dáng (style),  
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.  
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2\. CẤU TRÚC THỜI GIAN BUỔI LAB

- 03 tiết thực hành.

---

## 3\. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

\<\!DOCTYPE html\>

\<html lang="vi"\>

\<head\>

  \<meta charset="UTF-8"\>

  \<title\>Lab JS Cơ bản\</title\>

\</head\>

\<body\>

  \<h1\>Khám phá JavaScript\</h1\>

  \<p id="welcome"\>Chưa có JavaScript...\</p\>

  \<button id="runBtn"\>Nhấn để chạy JS\</button\>

  \<script src="main.js"\>\</script\>

\</body\>

\</html\>

Tạo file `main.js`:

console.log("Hello from JavaScript\!");

---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file & Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).  
2. Mở DevTools → tab **Console**.  
3. Quan sát thông báo xuất hiện.

Câu hỏi:

- Em thấy dòng thông báo nào trong console? \-\> Hello from JavaScript  
- Điều này cho em biết JavaScript đang làm gì khi trang web được tải? \-\> in ra cửa sổ console dòng "Hello from JavaScript"

---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

a) JavaScript chạy ở đâu? (Cả hai \- server và trình duyệt) b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?

- HTML: cấu trúc nội dung  
- CSS: giao diện, màu sắc, bố cục  
- JavaScript: tương tác, xử lý sự kiện

---

#### Bước 3: Thử nghiệm biến & kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

let age \= 20;

const name \= "An";

let isStudent \= true;

typeof age;

typeof name;

typeof isStudent;

1 \+ 2 \* 3;

"Hello " \+ "world";

Câu hỏi:

- Kết quả `typeof age` là gì? \-\> number  
- Kết quả `typeof name` là gì? \-\> string  
- Kết quả `typeof isStudent` là gì? \-\> boolean  
- Em hãy tự mô tả ngắn gọn:  
  - `number` là: kiểu dữ liệu số  
  - `string` là: kiểu dữ liệu chuỗi ký tự  
  - `boolean` là: kiểu dữ đúng/sai

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

let name \= "An";

let yearOfBirth \= 2005;

let currentYear \= 2026;

let age \= currentYear \- yearOfBirth;

console.log("Xin chào, mình là " \+ name \+ ", năm nay mình " \+ age \+ " tuổi.");

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.  
2. Reload trang & quan sát console.

Câu hỏi:

- Dòng log hiển thị gì sau khi em sửa thông tin? \-\> Xin chào, mình là Duc, năm nay mình 22 tuổi  
- Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào? \-\> Quên ';' code vẫn có thể chạy, cửa sổ console không báo lỗi. Quên dấu '+' cửa sổ console trình duyệt báo lỗi đỏ ở dòng thiếu

---

#### Bước 5: Phản tư nhanh (Reflection)

- Điều thú vị nhất em vừa khám phá được về console là gì? \-\> không nhất thiết phải dùng ';' kết thúc câu lệnh. Sai logic code \= Code chết  
- Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)? \-\> Không có

---

## 4\. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN & HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

// TODO: Đổi giá trị score và quan sát kết quả

let score \= 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử

if (score \>= 8\) {

  console.log("Giỏi");

} else if (score \>= 6.5) {

  console.log("Khá");

} else if (score \>= 5\) {

  console.log("Trung bình");

} else {

  console.log("Yếu");

}

// TODO: Viết hàm tính điểm trung bình 3 môn

function tinhDiemTrungBinh(m1, m2, m3) {

  let avg \= (m1 \+ m2 \+ m3) / 3;

  return avg;

}

// Gợi ý dùng thử hàm trong console:

// tinhDiemTrungBinh(8, 7, 9);

---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi b) Nếu `score = 6`, em dự đoán console sẽ in: Trung bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.  
2. Thay `score = 6`, kiểm tra lại.

So sánh dự đoán và kết quả thực tế:

- Trường hợp `score = 9`: Dự đoán vs Thực tế: Đúng  
- Trường hợp `score = 6`: Dự đoán vs Thực tế: Đúng

---

#### Bước 2: Mô tả lại if/else bằng lời

- Khi nào chương trình in `"Giỏi"`? \-\> Khi điểm (score) lớn hơn hoặc bằng 8  
- Khi nào chương trình in `"Yếu"`? \-\> Khi điểm (score) không lớn hơn hoặc bằng 8; 6.5; 5  
- Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống): \-\> Trong 1 đoạn code if/else code sẽ chạy từng dòng từ trên xuống dưới. Nếu không thỏa mãn những điều kiện mà if đặt ra thì sẽ thực hiện else. Else if là nếu không thỏa mãn if (điều kiện trước đó) thì đối chiếu với điều kiện if của else.

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:

tinhDiemTrungBinh(8, 7, 9);

Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:

function xepLoai(avg) {

  // TODO: Dùng if/else để:

  // avg \>= 8  \-\> "Giỏi"

  // avg \>= 6.5 \-\> "Khá"

  // avg \>= 5  \-\> "Trung bình"

  // còn lại   \-\> "Yếu"

}

3. Gọi thử trong console:

let avg \= tinhDiemTrungBinh(8, 7, 9);

let loai \= xepLoai(avg);

console.log("Điểm TB:", avg, " \- Xếp loại:", loai);

Câu hỏi:

- Một hàm gồm những phần chính nào?  
  - Tên hàm: tinhDiemTrungBinh, xepLoai  
  - Tham số (parameters): m1, m2, m3  
  - Thân hàm (body): let avg \= (m1 \+ m2 \+ m3)/3  
  - Giá trị trả về (return): avg  
- Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì? \-\> Có thể sử dụng lại đoạn code mà không lặp lại cùng 1 đoạn nhiều lần với những phần cần có code giống nhau

---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

function kiemTraTuoi(age) {

  // TODO:

  // Nếu age \>= 18 \-\> console.log("Đủ 18 tuổi");

  // Ngược lại \-\> console.log("Chưa đủ 18 tuổi");

}

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

- Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất? \-\> Không có  
- Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)? \-\> Không có

---

## 5\. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM & SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

\<section\>

  \<h2\>DOM & Sự kiện\</h2\>

  \<p id="status"\>Chưa có tương tác...\</p\>

  \<button id="btnHello"\>Chào\</button\>

  \<button id="btnRed"\>Đổi màu nền thành đỏ\</button\>

  \<div style="margin-top: 20px;"\>

    \<label\>Nhập tên: \</label\>

    \<input id="nameInput" type="text" /\>

    \<p id="greeting"\>\</p\>

  \</div\>

\</section\>

\<script src="dom.js"\>\</script\>

Tạo file `dom.js`:

const statusEl \= document.getElementById("status");

const btnHello \= document.getElementById("btnHello");

btnHello.addEventListener("click", function () {

  statusEl.textContent \= "Xin chào\! Đây là nội dung được thay đổi bằng JavaScript.";

});

---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc & giải thích

Câu hỏi:

- `document.getElementById("status")` đang làm gì? \-\> Lấy phần tử có Id \= status  
- Sự kiện `"click"` xảy ra khi nào? \-\> Xảy rả khi nhấp con trỏ chuột và nút đã gọi sự kiện này  
- Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang? \-\> Dòng chữ "Chưa có tương tác..." thay đổi thành "Xin chào\! Đây là nội dung được thay đổi bằng JavaScript."

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

const btnRed \= document.getElementById("btnRed");

btnRed.addEventListener("click", function () {

  // TODO: Đổi màu nền trang thành đỏ

  document.body.style.backgroundColor \= "red";

});

Câu hỏi:

- Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử. \-\> Được  
- Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`. \-\>  const btnRed \= document.getElementById("btnRed");

btnRed.addEventListener("click", function ()

  {

    document.body.style.backgroundImage \= "url('wallpaperflare.com\_wallpaper.jpg')";

  });

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

const nameInput \= document.getElementById("nameInput");

const greeting \= document.getElementById("greeting");

nameInput.addEventListener("input", function () {

  const value \= nameInput.value;

  greeting.textContent \= "Xin chào, " \+ value \+ "\!";

});

Câu hỏi:

- Sự kiện `"input"` khác gì so với `"click"`? \-\> Mỗi khi nhập (gõ bàn phím) vào phần gọi sự kiện "input" sẽ kích hoạt sự kiện còn khi nhấp chuột vào phần gọi sự kiện "click" mới kích hoạt sự kiện  
- Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì? \-\> Xin chào,\!

---

#### Bước 4: Liên hệ khái niệm DOM

DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.

Em hãy:

- Tự mô tả DOM bằng lời của em: \-\> DOM là cách để js có thể truy cập vào các phần tử trong html  
- Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể). \-\> statusEl.textContent \= "Xin chào\! Đây là nội dung được thay đổi bằng JavaScript.";

---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).  
   ![][image1]  
     
2. Sau khi nhấn “Chào”.  
   ![][image2]  
     
3. Sau khi đổi nền sang màu đỏ.  
   ![][image3]  
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.  
   ![][image4]

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6\. KẾT THÚC (15’): GIỚI THIỆU JQUERY & PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

// JS thuần

document.getElementById("btnHello").addEventListener("click", function () {

  alert("Hello from JS\!");

});

// jQuery (giả sử đã import jQuery)

$("\#btnHello").on("click", function () {

  alert("Hello from jQuery\!");

});

Câu hỏi:

- Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?  
  	\-\> đều xử lý sự kiện cick   
- Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?  
  	\-\> \-\> JS thuần dùng document.getElementById để chọn phần tử và addEventListener để gắn sự kiện; jQuery dùng $() selector ngắn gọn hơn và method .on() để xử lý sự kiện  
- Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:

  \>   1\. Đơn giản hóa thao tác DOM, xử lý sự kiện và tạo hiệu ứng với cú pháp ngắn gọn, dễ sử dụng

  \>   2\. Đảm bảo tương thích đa trình duyệt (cross-browser) và hỗ trợ AJAX, animate dễ dàng hơn

---

### 6.2. Tự đánh giá & định hướng

1. Sau buổi lab, em tò mò nhất về các phần xử lý sự kiện khác của JavaScript/DOM như làm animation… .  
2. Em muốn tự làm thêm tính năng minigame như game khủng long (dinosaur) của google khi bị mất kết nối trên trang web  
3. Em đánh giá mức độ hiểu của mình về:  
   - Biến & kiểu dữ liệu: \[ \] Chưa hiểu  \[ \] Tạm ổn  \[x\] Khá rõ  
   - If/else & hàm:       \[ \] Chưa hiểu  \[ \] Tạm ổn  \[x\] Khá rõ  
   - DOM & sự kiện:       \[ \] Chưa hiểu  \[x\] Tạm ổn  \[ \] Khá rõ

---

## 7\. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.  
- Tùy thời lượng thực tế, có thể:  
  - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).  
  - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).  
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

\---\`\`\`

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAFvCAYAAADKe/ZwAAAuWklEQVR4Xu3dD5hUZf338VOX5V51Jds/2oxSrJT1D7oFCgmU64+SDf+A+KhrK+aCqRsKgX/6rcovRNRlUcRVEUiTfpAXBiX+VtPCRA1dVMCoJSI3DHXt4ekZBZ9WRb2f+Z4z95n73OfM7uw/dm54v67r48y5z33O/NmB+XjOzOJ5nqcIIYQQQohTiQ0QQgghhJDCTnTgkEMOyTuf+cxn7J35+cIXvqC+/vWvE4dzxBFHxH6uhBBCCCmYZBfsgpZvzH3YRYC4nYQXDCGEEEL6PsEVu5R1Jh/5yEfCHdoFgLidAQMG2C8YQgghhPR9git2KetMzDd5uwAQ95PwoiGEEEJI3ya4Ypeyzkbvx37zl6xevVqJBx54wL8855xzYnNI4SbhRROL/IztMUIIIYT0WoIrdiHrbPR+7Df/tWvXqjFjxoTLt956q3/5zjvvxOaSvsuECRNiYzoJL5pYnnjiidgYIYQQsq9Fq6+vj63ral555ZXwunQqc7mdZDfIJ8uXL4+NSfR+zDf+u+66S11wwQVqx44dauLEiX4mTZrkX1599dWxovDII4/ExiS7d++OjUlmzZoVrtu6dWtsfWdy3333xcb29Qi5fPDBB2PrzCS8aGKhwBFCCNnXo+nr9vqu5rDDDvNLm/SpPMubJLhiFzLJ+vXrI8vvvvtubI6O3o9dEE444YTwUo8PHTo0VhIkZoGT60KuS0kTr732WmS+FDg9x0xTU1NkWcqdZo7r5aTbylUm97XYz0lSEl406tOf/rRf2nTeeOONyLI9nxBCCNkbSWLP6UrM/fTkfnVGjhyp9uzZExtvJ8EVu5DpbNy40b9sr7xJ9H7MN/7m5mb/MpVKxUpBUuzSJKSMtXcETi7l6Jl5BC3X0bSk/egjd/Zt2WVxX4w+8ibsdWYSXjSxUNoIIYTsyzELW0+XN+lRcuRNH4mz1+dIduNc0SWuvej9mG/8xx9/vLriiiv888RyKlVOnV533XX+9ffffz9WFMwCpwuUWarsI2tmzBKSq5CYp1nN8pd0W/t6gbM/8yYvGHuOTsKLJhYKHCGEkH05d9xxh98vhFy313cnZmnrRIkLrtiFrLPR+7Hf/OfOnatGjBihbrvtNr/QffDBB34htOeRwk3CiyYWChwhhBCyVxNcsQtZZ6P3Y7/568jn6cTtt98eW0cKOwkvmlg++clPxsYIIYQQ0msJrtiFrDP53Oc+F+7QfvMn7ifhRUMIIYSQvk1wRf5heruY5Rtzh/abP3E/CS8aQgghhPRtsgt2Mcsn/fr1C7cvKiqKvfkT95PwoiGEEEJI3yY6IP8wvfzbpnZRs2OeNtX52te+FnvzJ+7H/jkTQgghpM8TG+hSDjzwwNgbP9l3Yv+8CSGEENKniQ10OkcccUTsDZ/se7F/7oQQQgjpo9hv0oQQQgghpLDjVIEbN26cuuiii9TFF19MCCGEkL0ceQ+W92L7/Xl/jnz+/7jjjuvR5POdAicKnLxoBg8eTAghhJACibw32+/X+1Pk42N7I/bt6hR0gfvud7+rhgwZEnvREEIIIaTvI+/R8l5tv3/3ZuQ25fLEb3wjMv70c8+rH/zgB7H5vRG7ZPV25Lm270PBFrhRo0bFXiiEEEIIKbzIe7b9Pt4b+da3vqVe/vvf1KYNz/nZ8HyT+kvzZvXPnf9Hvb38HvXuzxaqiyZfFNuuJ2MWq2NmLVNff2y3Ou6RN9Xg/3lTffE/t6pPHf/TWAHricipVfN+FGyBO/PMM2MvEEIIIWRfyJtvvun/++BaRUVFbE5v5aqrrlKzZs2KjecT+fybPSaR92z7fbynM23aVLXxhfXqj5teUM1/elGtuH+ZWvfUWvXixudVav069U66wEmJe+KZZ2Pb9lTMQnVw9W3qk3f+b1V8xz9VccPrqt9d/1QHfWudGjj+efXVo4bEClhPxLwvHRa48vJyNXz48Nh4Z5JKpdStt97qN+ennnpKXXjhhbE5ZuRwrP3ikCxevFidccYZfrr64iOEEEL6Mu+99154Xd4P5fKxxx6LzWsvc+fOVXfccUdsvL3IEZxJkyaFyyeddJL69re/HZuXK+eff74aO3ZsbFwn31Opmj3eUV547lm1+cUN6rmmdWpe3U1q7k1z/Cy4dZ7661+3qnd/vkj931+viG3XUykrK4uUqU8u3KE+fXuz6n/Hi6rkzudVyQ3PqEPHPacOvuQvqmTK02rQoCPVoCMGxUpYd3LUUUeF96fdAidNW59r7mpee+21yPLWrVs7/MElfWlh4cKFsbHZs2fHxnTeTt+Gvq7e26We/NNO1XTLGLVp20vqJT+vqEVjs/Nlzku7lBpj7OOl9E4aH22KjA0eO8m//5Hbm1qn6m4KIssN6aKprw8efJpqmDfLL5+yPHFmg5p51Qy1eKFeP1hVXDEv2G5uXThPtpfrcnnW1Fn+5cJb9W1Mjd5+OvNvn6dmXDNLNcycGI5dOEues4lqqjW365moJsbGOhd5/JGx82fE5rQ7nxBCOpux9Urt2un/3R9bt5dz7LHHRpbFXXfd5Wfjxo2x+R1Fv2fkk6S51157bWwsV26++Wb/8pZbbomtk+TzpYbjjz/e7xUSuW6vz5V1T6/1y5ucNr1x9iy/uNXffKN/WXfjDWrLn//or//947+NbdtTMYvU4UceqY5b+gv1tZ8vVUP/+x51wrK71WEnnOWve2LS8+r3P/iHenTK2+rXP3gjPRYtcUIum5ub1UMPPRQraTq7du2KjUn0/clZ4IYOHRob60quvvrq2FhHsU+fyn2xXyiSs846KzYW5lfxP6hKZcciJeyXxvjLjeH1Vx4aExuTvKS3Pb/WLzR2yTD/kNSF10eoGaPS6xpm+svmNovvnuNfzjw/vVydPbK4eHF0v3XT9PV4gUvaZvH8WhUWuFFn+fdr5iWnBev/43v+8mn2PqYFxfJ7l2VLZzbpApfZz/dGBWN1ty9M3//MbZ5+ob/uQhnX22bm633I4/7e9DnpbYJCLuv0+pnnnxxeNwtv9D4QQkjnsqol+j/du9bXB5eZv8tf+tUY/z1B/mdd3DclmKdaVgXvFWPnRN4zdqX/5/7tVPC+IV55W9atUvWZZbFlaXru2Kv96/ddFbyXSLZt2xa5L7fddpt66623wmXzdnJFPm929tln+++NixYt8s9Kyd+Zd999d2yumcmTJ/uX+u/dE0880f91FfY8O1OnTlUjR46MjMmyjJtj7Z1G/ec//6l++MMfxsbzjXzuTQqanC696Ybrw6NvfoGbc4N/SlXW79j+UmzbnopZok6+ZZI6/cEZ6syHpqqz/+eHauKjNeG6Z8Y9rB47/Vn169M2qwfGbo4VMDNS4F599VX/5y7LWm1tbThmR9+fnAXuiiuu8H/YSTnnnHNi83NFfsj2mETYYzr2Idpzzz039oKSDBs2LDYWxipwVz/0kqoJlyepXxhH38w/3GbJW5UwJgkLXCYX/rhOXT1zTlie6mbVxoqIP54uYOERskxRGjz4QlWRWW8egQu2zV3g9B/AcP606LaDx+ojW9EjcLpYTckUsIXmNpn9+Ld9Z1Aqo5moas8Jrs+ztpPbiDxW/fhvnBKZZxaymRdkb8/f51XBZ0AW3xmUWCm0FDhCSE9EzrC8sv4+/7pd4N5+cZF/mZ6RuQzG1f/b5F++8mhw2lEKXbjPuU2RubrAyfX69bsi85/cab7HZK/r8vT0008nrs8V8+9aXdr0+0F774tJp1wvueSS2Jida665JjaWNC7v3fb7uc4JJ5zgH+2ze4Bmz7fT8retfkGT/GnzxvDom1wuW/oz/3Nxsk7m2dsmRUifkevPP/98OGbPM2OWqLm/P13Ne2yMWvC70equ35WrJb8b5Y/Xf2ui+ttZ96mNZ/5KPTvuN2rd+DWR7aSY2QVOLuVnJ5fr1q3z74dc7/IROEl7bTrf/OEPf4iNSeRUqj2mc95558VeKHLu2R6bNy849ZgYo8DJqVBzXdOu6PKkR4M/tBK1bVV2u1/Gx/xxlfwHzC4bUriyRWdEUHJunxmZO9/4g+gfgctsJ5ftFThz3Iy+vewf8KDA6eXsEcEg5u37MQpVXcNiNSKy/+wp1Dl3p7cbNUVd+B/Bsr7vV98w3y95+nbm1ETvn/kc+Y/HuD29j8V1weOjwBFCejY1/qVd4F76VbBe7YqWMl3AmuZm1qeXZz61M/hYTc4CN0ZtWZo5e2O9d0g++OCD8Lqw3+/mz58f2yYp8ne6HH2TAmf+D/03vvGN2Fwd+Uy7FClzLOkjS0lpaIj+XWwvS+Sx2O/nZrrzkawd21vCAidlbdvWZtX0zNP+pRyV0+t2vNwS27anYpaoZ5uOVE8/8VXV9ORh6oW1X1IXnPdldWR6vO0Hs9Ub596sXvtfd6i/n7VEvXz2f6tS6xSqlLRcBc5c360CJ6muro6NdSZVVVX+lxfMsZaW9p/gpBeU/Rk4eSG290I1C9yul/Xn3vQhb6OwqbeDy8xn4OS6/r8l+cMtn4EzxyT2KdS6hQ1qxlUzw8+1za+bkz2yNWqiaqibGRaoqXULVe30GWGRm1Wdvc+dOQJnjvtz717oHwVcmCk/M8IjjEGBk8/lyX3UhW1euoBdPbMuvc/TovvKFCr5vN2seQ2xAjcvXepmXDMncyQxeGwL757vly05lSr7nHp6tsDNvzu4XX+fN02NF7h0Cay7JjhaSIEjhPRG5H/aX9kmf3Nnipn83f7Uli4VuEm/fElteapRvb1zZ2SueQq18aFGtei64OBB06ON6ZHgiJyZPXv2+Jdr166Nrets5HefXXnllf6XFOSLCfZ6M3IwRJc9OUgzbdq02Jyk6PemESNGRJbNdPQZuBtvvDE2lm8W3HZrWN5uu6Xe/9ybfJFBjsDN/sl/hZ+Bm3/rvNi2PZXS0tJIkVp920FKrf2ievOBAeqykYNV/deOU29ddYV664fXqN2TfqJ2n3+Dunf0BbEC1t3o+9NhgZPIIVZ7rDORAqfJeXB7vR37/xB05Ns6+oVnfxDUxUy5Mf4HoCdSO7/r+624qp2jmoQQQnok999/v3/58ssvh2MvvRT/7HY+keImlxMmTFCjR4+Ore8ol156aWzMzowZM1RNTXAEU476ybI9R9677fdzM/IbKd55552cH61qL3L07q9/+XO6rM2MfP7NPJUqR+O6c5Qvn9hlqnTQEeqD2acoddEo9dcxJ6m3516s2mZdrv79nzPUrhlXxuZ3N+bvgsurwPVFko7Ckd7NrDsXq7rp34uNE0IIIe2lo6NvPZX58+ZGypsucPLFBntub8QuVHLa9P1Lv6X+NW6kemfpmWrPz85T7975ffXO/Mlqw1XnxeZ3N+Z9KdgCJ7G/jUoIIYSQwkpPfF6+M7n04ovUnQvm+6dS70hfXv9f18Xm9GbsUiU5ZtAgNfiodI4OLo9JR47O2fO6E/t+FHSBk8hn6OR3xdgvGEIIIYT0XeS9Wd6j7fft/SH25+F6M0cffXTs9iUFX+B05EUiX/k97bTT/N/2TAghhJC9G3kPlvfi/bW42TnmmGNihaunkqu46ThT4AghhBBCSJDEAie/5Vn+fTRCCCGEENJ3kW8WJ/3rWJECN378eP/f5gIAAEDhuOyyyyJFLixwUt4AAABQmOrr6+MFTn7BLgAAAAqXfJkkLHDymbf333/fngMAAIACMm7cuGyBkw/IAQAAoLCdccYZFDgAAACXUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxTUAXO8zw/J598sr2qoD3//PPhfXfNRz7yEfXhD39YPfroo/5yTU2NNaPrTjnlFD8AAKBn5V3gdEHJVVKS1ukxKTj5kLlf/epX7eG97kMf+lDi48nlU5/6lD/3gw8+sFfl9PnPfz68jWeffdZe3et++ctfRh7fv//970495o68/vrr4f5ee+01ezUAAOiGHilwzc3N6mMf+5g93OkCV1xcbA/1iS996Us5H2sSmffuu+/aw+06//zzw9vYvXu3vbrXye3KfbDl+5jz0Znn0CZl+Jvf/KY9DAAAVA8UuAsuuEBdf/31kTGtswWuUHS2wHVFXxY4ub1cj+873/mOPdQn5L5R4AAASNatAiefnXrrrbeMWVFmgdOn6CZNmmRP81133XX++jPPPNNeFXPUUUf5n93SpyzlFKRsK/vojBNPPFF9/OMfV++9915k3C5wMk9uL8mKFSv850Hyj3/8w16dU0cF7tBDD+3SYzKdfvrp/j5OOOEEe1Xk59nRqd+bb77Zn3fsscfaqyKkzB988MH2cE6HHHJI4nx9vyhwAAAk63KBk8uOTnnq+Q0NDZHtBw0aFM5pamoK95nrc1jmG7q5H4l8Zs5cbu9D+Dt37gznffGLX/TLp17esWNHOM8scGbMxyunTGVMlx/9ubnLL788nNOeXAVu8uTJ/ph45JFHwjnaYYcdFhsTcp81+RKIuT5pvhRO+/ElkXEpZvp60n7tn4swn2vN/GzhaaedplpaWsLlPXv2RPZp7w8AAGR1qcCZmTNnjj01pOfcdddd/rJZWuw51dXVkWWz1OgxKR32mC5QX/jCF/xlKQntsW+/oqIiNmYfgRP2sp7ziU98wl82S0w+chU4cx+5TnXqMSl45pi9Xr5IYC7bp7LlqKJepyNHFLXPfOYz/ph+ju37Ym4ntm7dqj772c/G1mtJz6v+AshHP/rRcEzP4QgcAADJulTg7OXt27dbswN6vS4ON910U+wN/M033/SXpSSYR2TMby4mvaHb+0kqB0nsOb/97W9jY0n7spfl/spya2urv6zLTke3r+UqcGvWrAmL6vLlyxP3qcuqHpcjl5s3bw7Xy3b6lK95lHH16tXhHO2nP/1puF5HfyEj6bZNev0BBxxgr/LZ2yc9r1OmTImN6WUKHAAAybpc4N54443YmE2va6/AaTKmT0tK9laBS/odbkn7spe1L3/5y/4p4e4cgbM/gyafyZPxXEfg5HSjHpfSK4XOpk9HS8HUc3WBS/q1Hpdcckk4r7Ky0h/Ty7k+56jX5ypa9n1Pel6TXhMd7RcAgP1dlwuc+PnPf544runx9gqcHL2T5bFjx0a2KfQCp4/A6aNlHRW4H/3oR5H1SaeThf7CgMhV4IT5ebLbb789sk5/ju5Pf/qTv6znmQVOn141yWlsmae/SKK3y/W5Qr1+xIgR9iqffd+Tntek14RepsABAJCsWwVO3H///TnX6bH2CpxeXrlyZeSo3t4qcPIBfVk2v6CQtK9cy/o+mV8KSLJw4UJ/3cUXX+wv5yp85pj+Zbv2HC1pXVtbWzguR+p00ZSYBU6W7d9dJ0XQ3J9821dvK7/rT5hHC/U68wsUJvv+JT2v8k1UWTZ/fYmec+SRR8buIwAAyLPAPf300+GbqkTKlvb73/8+sk7yxz/+Uf3mN78Jl4877jh/rjnH/oC95F//+ldkWZiFRCIFYuPGjeHyk08+GZ5y1JFtctFz5BcPm9tp9r6kQCxatChc3rZtmz/P/Myb7Mssp3IULYmURDndat6G/StMzNs2y5fEJvuTo6A2c5v169fH9qELnESKpZg2bZq/bBcmc1uJ/mfO7J+LvZ15SlauC7PAyWvC/HyeSR+FlBTCv8wBAEChyavA7UuSCgP2jqQjcAAAoPMocNhrKHAAAPSM/arAmacksffZv/4EAAB0zX5V4HR5oETsfeY3ann+AQDonv2qwAEAAOwLKHAAAACOocABAAA4hgIHAADgGAocAACAYyhwAAAAjqHAAQAAOIYCBwAA4BgKHAAAgGMocAAAAI6hwAEAADiGAgcAAOAYChwAAIBjKHAAAACOya/A7VipSic3+FdLD/DUktb0lb/Xq8borG5pqSu1h3xt25Yoz0te15Eyz/MvK0q8ju/rnmbVmLIHAQAACk9eBc47tDayXLla/tvYcSnqId7R9fZQXrzimvB6d+6rlymCAAAAhSCvAjd7iz0iGlVpVXBUzjtpSXCZOVJWmS48njdeFWWKj12AGr9f7F8uO9VTLenLlecW+cuVRclFSRc4z6sMLouCYqb3u+aSYH/hvMz9aZwy0J+T2uMv+iqWB4fZ6v+uVOuicjW+rllVT1um1J6Vqn5bMKdkSIV/qfcvjwcAAKBQ5FXgqh+2R0T2CFxYrIwCpxUVlcUKXO7lRlW+SM7PRoVH4HZuUOXT5JRqcHtqR1Agl+0OFtu2NarKusbYEbuS9P7LbklXxadq/MIYWp3Zj68xLHCldcGsledS4AAAQOHJq8DZhavmzmaVT4HT29nbDzSWpa7pI3Vq9zIle7YVTVnnX5bOCdaGBS5teFX2euWq4FIXuDXGkbfgqF2z8oYE6xp2qNwFLnM7tSUUOAAAUHjyKnCifFCJX8Qat7X5y3JdEpwuDQrOysllqnhIdXosOCW6ZlqZGjiuXtV+xVPBVlnFB3hq+ors8bDSYk8t2Rj9FkHrqmrlFZeFyyXpbVbukNsO9i+GL8gesZMiuC69C++AkmBgd8q/nZIh2aLWsiK9z6KB/nX9GOzrpbNW+tf1qdfUM7WqbNoa1TBMF81G1aBPt07uzqfrAAAAOi/vArc/0adQAQAAChEFzmIeiQMAAChEFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDF5Fbgrr7xyv8vcuXPtpwEAAKAgdFjgpMykUqn9MgAAAIWoVwvcpAO92FheeX2Tuv6FhPG9HAAAgELUpQLneYPD6xO8oKTJvx8anxcfy5VNPzk8/+1euD4+1ono/S+4dJR/fcGT22NzJAAAAIWoawWuXz+14M/B9fYKXGdiFrgO0xMF7oEq9XpmefuS0WpTwjwAAIBC1LUCd/YK1S9T2OwCt/TMA4PlfhP8y8Ot9Xo53FdmWe/P63dqZDw7Lzjq54+nC9zhlz3mLzeljFO125eqxa+k1PT+meX0PF3S4rf5un8594G1sfU6AAAAhajLBU4XIbvASWmSo1me119t2ro9u740OGq24uxoMes/LVOgfjHB31b2o5OdZ30mzjgCJ+OjpIjd+2Bk3tCbt6b3cUjktnTscpjauUmNmr81Ng8AAKAQdavApVLbwzJkF7jDr2uKjOcqcLEjcGXX+JeDrZJlH4HT41LY9D6uKfPCAidjcjQuuo/gNK134CT1+gNVatQVweNYet4h6rGd0bkSAACAQtSlAudCFo+1jrJ1IQAAAIVonyxwc4d5asH6+HhnAwAAUIj2yQLXUwEAAChEHRY4Yf8zU/tD+Ke0AABAocqrwAEAAKBwUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADH5FHgGpXneZGUDChTrbvteVnTTy3z5xUPKFWpNnNNS2Q/DTvMdYHIbVU12qsj6ieXK++AYhW5iXbUZu5X/cPN6aUN9uoOVRr3LUnrqmpVdNz0yFh78wEAALoijwKX9nB1poiUBst7WhOLSfOicn+sfIEUpEAwr9iYpVRRUVHi9m3Lx4fjHdUrmePXu231sf0kkTmte6LLXZF0vzV7XWp5hVqXSj8vC8pV8ZR1xkwAAICuy6/AZUpSWODSNvx4YDBWVJkZyR5dM7UuGB6MD6kPx0rrkud6R+vb8dJ7a5/MGb6gNX2tObafmD0rY3PWXFIUWc5X0v0GAADYm7pc4IRZZsoz15NOe9qlRwpc7aGZ+YfWGjOzc/MpcH4OKLFXJcgeMaxcsCayxj4tmr39YBtb0lx/fl1pZJ05v6wqW171HHmWygeVpAvwwOxkAACAPPRYgdPXK5bHP5FmFxspcLHxPUGxCguRnpyg9fGG2D7btgRH2ZY8J0fl4uqHZcuWxLyX5r7qj87evrl/zZzbtnm2ajZ2ZN8nfX3ZqTIeFLXGKn0fipXaGdxnr6gm3AYAAKAjPV7gdDkz2cVGzynKjI9Pl76BmYKj58b3EpB105/JXjf3W5Rw9C+qLdzG3M5cNgtcEj039XiN8oqrE9eJdVOCz/kJfXRO6AKn72mwTfR5BQAAaE83Clz0c2zLxmWK0aDZxhyxITJPhCVv97Jw3ZrMFwz0cmKBWl3pr6t5Klhsrgu+VSpHs0qN/cdsy57CDKT87cpuiR8JzLfA6VPG5jxzP/rUrC25wMXnAQAA5NLlAqeLTsXyVDiWVEZqioOxdcY3QM2jdPY2ejmpQCV9zkwvZ8fip3Dl/pv3U8j8ZZlfhWJuP3tQ7tsX5txc90WYR90Cwe1T4AAAQHflVeDalldEikbtmBL/ekVd/FdjJM1baf2+N29YQ3hdis7Aa+1fO5ItVza9Xqd0cuZzZJmU1WX3FdIFtKjMX9xwT7XyivW3Z6P7LC4KLvMpcOqpmmA58w3byDpjWVK/JRijwAEAgO7Kq8ABAACgcFDgtNYlvXI0rDf2CQAA9m8UOIN8K1b+5YSeJPts3GmPAgAAdB0FDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBQ7d4nmcPtat+mKda7UEAANApFDh0y5I5y+yhDtWcVW8PAQCATui4wG2r94+y6CMt5vXSTh59qRkzUNVvs0fT+zw69xt6anW1SkVGGsP7IGnc0masa1OVY0qM5WRr6iqz9yO1RjXuiazOqbKqVIW3ln5eKleba7OKO/m85NbWg/sSzZ0+YmbbsLQ++9ztblQVJdn9NVZ5qiVcUqq2qjL2s62+Z4NqSzVnn8dO0D9z8zby1bJiur/thtaOb9l+HAAAFJqOC5xIpUtTcaV/dfaQ7hSAlsQC1551U4rUOmuseU5p9g12S7pgDsldAHPp7P3oDCkAPaX+6J7ZV2ld8IxVdrPAic48d3aB65Z2SnP7zNdd9H8HOqu8B54/AAC6K78Cl7bkJE9Vf7/MGEmFR3OGF3uqdfl4VXFckVqyw5iS5g2pVW0bZ6ffeOWNM/1GurlZVZ87XBVPCWqZ55WpttY1quyWoGCU/XiNal5Rrar9+WnP1Wb2lNVSZxQ4lf0cln+0ak9bumxWKzl6ZR5tqlwVfeMO3tDb1Ph7WtSSccWRI0LLplSnt61UZafKZbCP1DO1wb694Ahf5YiSWJFZMjrYj95Gl93ZmRKW9Dz5c9ta/UuznFRnjmzpfbU9XK0aM+vkvkmkvDbvTj9n6TnN1w70142/p1mtrCpWzdZRRbPAVQ4oCfcr2wbPlfxs23/OvK9Uq7YtS8LH7RWP93923rCgpJUeEC833tGzVYlxe/J6aH281t9H4vO8utJ/TPKzjB0tNAqcuR/V1hL+XNSe4HVVPG6Jar5nvGrcnZmf3tfKyNHaYE7rikpVvyU4Ojy+pNgvnPpxVAyQbepVSZEX/k9C7D4BANAH8i5wqi1++i08mrM6ODonvCpdM9JF6xaz8Pkj2Td/rzQcXXJthf/GWWucjsveVnM4puUqcP66h4NTvkJKjV9BEkqgWb7K02/U2Xsd8AuSyp4m9rwi/1KO/gVzG2MFrihTSvUROLmf5nLS86SPUMWe21XBZXgELl1ezAIXXBrP17hlqrqdchE7AmfsL7VxSYfP2bJTs/uWx922vCL8MoLep368Jv34WhcMD8dqTy0L74/9PJcYr6nYaUzrCJy5H31krObQ7HNcfVJJZH79uGyRbPy+/Vxlby37OBqN51y/DuztAADY+/IucPqITuQIjfFmq9kFbk1mu9RyeSOPF7iiS9YEy+k3erOAtPdGGS9wQbnyvKAkRIqNN9AvNzb/fqQLgV9CjDKj2cUi3GdYLOwC16a8U4Pb6UyBWzetzN93i/XRrNI5QXHNu8Clx8znr35B9MRzrgKXfe7af85qiox9bwt+tiszP1t9H9srcMFjb1M1jweLuQqcGJi+rbKqhnA5lL7P1Q/Llfh+0hVRDbxWf7auRTX4RzhbEk65bvC3kQKnC+iGW+S22i9wsdcBAAB9KK8CZx4tq0i/gXnF5f71genr8oa58twitXKnCk4FHjo9nCvkDU8iR3XkVGrprA3huL4sKR6evizOLA/09yOntcSS0fGjY5XFnlq3sy1zStMsHp6qOK7Yv2zMnP1rrAoKiq1MCtJTNcobUK7G3zlbDRxTEVlvFxv5MkVburB4BwQlse2Z6enHEj06KKf9pt+5UpWlC03F5Gqldi9TlZMr1cp0gRt+6vjE50k/PyUDokcrZax+aXpfJel9nRUcDSuuWqkafxw9rVtet05tWBD8PPR2SSVDnt+V6eekKPMza11UoaY/Ezx/lScFR6b0c57rOZM5y+rSt18cLcol3w9+QktO9YLHZ9BzikcvUVKy5HktHlZr7CP6PMuRNLlePKBENRtncGUstUoX4Ph+9BzfnnXpn1OJKjmrQXlfCX6u+hRr9Veirxe9jbw29fcbso9DPvs5Pv1zbA5P6cv84YPS9+Ph6vC0PwAAe1teBc5lDcOSy0ghsk/J9pW+fM6Kh2WPvG34ccffKO5d2SNwAAAUkn26wMnRkoI+RrIn+Fxh9eRqVVwUfAmhr/X1cya3L0cvq88t79KvGulJrcsrVeVyfu0wAKDw7NMFDgAAYF9EgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHNNhgXv00UfVq6++2qu59NJLw9vbvHmzSqVSpJNpamoyfmoAAGBf1mGBO/3002OFqzei2cWkvfj/wHnCeG/E8w6JjRVSrrzySuOnBgAA9mVOF7j9MblKKwUOAID9R5cK3NHyD55nrkuhMC/NjDsoPpYrml1MUr+YoDZlrj94xVA16ZHg+oqz+6Uvt8bnd5SdTeH+OhPvS9OVd8ri2LiZwzPlKqlkTegXH9PxvMNjYzpL713q76/plcx+0te3J8yjwAEAsP/oUoHrPyX+uTgpGQcdWx4pdOeed264LKUvWD4otm2+BU6iy5FcVk0crZp2psdfuD6yjRQp7+BR/hzJ4AM99Xp6fHt6X4NPqVL9DtD7CIrTpp9EC5SM9x85Ibyt7asnqQOPGa28fhOC9UNOVaMnVsWK2oFyn+av9cf7lY227mt2vr295x2oDjFuL3s/PDVhZP9wvF+4n8GReRIKHAAA+48uFLhn1LifxQuYLmqv/uG68Ojc4rtvCMfHLcnMXXuVesbatr0Ct/SyoWruvUvV0nsfDEtN6sXrVZNRcpIKnFyaxez6F4LLrS+uVaO+2i+zba4ClylSmf3q5abrgnmeV+Vfrjg7WrhiR+CM+7X03rlGYYtuH87/RVAQ/RiPUYphKrVJXbM+s+7nxrxMKHAAAOw/ulDg0mXti5eF15+Y+iW/sJkFTgpa+S1bguJmF7iHL+tUgYsfgTukywUue4RrU2bbfAuctb40GM+vwL2uRjds95fl9GfS9uH+cxS4YL/ZAvf6ktGR25VQ4AAA2H90qcBteeAC5R3YX5Ufe5A6aFR9UOqsAifL477RX11wfPdPofY/uL+fbAELSpKcQn1suy5K2W1yFbjB6fEJcgqy/6n+2KjM8uCzo0e07AK3/RdV0VOiOQqcFLSqecEpVHN7WZZToZOGJW+fWOAy21WdMlj1z+yPU6gAAEB0qcD1RjS7mJD8QoEDAGD/QYHbR0KBAwBg/9FhgZN/JcEuWz2dJ598Mrw9u5iQ/DJ37lzjpwYAAPZlHRY4AAAAFBYKHAAAgGMocAAAAI6hwAEAADiGAgcAAOAYChwAAIBjKHAAAACOocABAAA4hgIHAADgGAocAACAYyhwAAAAjnGywMk/3E56PwAAoDA5WeAAAAD2Z90qcOUDPHtIeV58rCNd2QYAAGB/lVeBk4KVMpYrV2fHI7Ys8S+aF1RGxxPUbwsuU6tr/cvGaR1vAwAAgDwLXGldS6SsmQWudVW18gaMz6xJ+WPl01b6S3KEbuXkMlU8pDqzPiBzJC2y0Bbse126Iba1bvCLXckBnmreE8ytLuHoHAAAgCnvAid0ibOPwK08N7icnilbpZlxvb51wfDwiFugJVyevSW4DOY2G8vlwRUAAABEdKrAqT3N6WJVFitwjVXBZerxGtXSFi9wUtgqV2WuZpZ1gat9Lnnc80rNFQAAAMjIr8DNaQ6vp1ZX5ixwerkoc3o0PAK3yD6a1qJqHldqTSpzGna3UjVDStLjwSlUoQvcdH8cAAAAWl4FrqvMz80BAACgZ/R4gZMvIGgUOAAAgJ7X4wUOAAAAvcvJAmf/k0+kdwIAAAqTkwUOAABgf0aBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdQ4AAAABxDgQMAAHAMBQ4AAMAxFDgAAADHUOAAAAAcQ4EDAABwDAUOAADAMRQ4AAAAx1DgAAAAHEOBAwAAcAwFDgAAwDEUOAAAAMdECtzJJ59srwcAAECBiRS4oUOHqlQqZc8BAABAAZkwYUK2wEkuv/xyew4AAAAKxHvvvaeGDBkSLXByFK6+vt6eCwAAgD729ttvqzFjxvidLVLgJNLqysvL1Te/+U114oknEkIIIYSQPszIkSP97yqMGjUq7GuxAkcIIYQQQgo//x87UOGybf915wAAAABJRU5ErkJggg==>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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AAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACAwBDgAAIDAEOAAAgMAQ4AAAAAJDgAMAAAgMAQ4AACAwBDgAAIDAEOAAAAACQ4ADAAAIDAEOAAAgMAQ4AACAwBDgAAAAAkOAAwAACExJgBs9enSuAwAAAOpLSYAbPHiwafnIR3KdAAAAUD+ampqKAU58e8iQXCcAAADUh/djRx55ZGmAk1m4FQMH5joDAACge70dGzdmTJLZSgKckFQ3atQo09jYaIYNGwYAAIBuNGLEiOS7Cg0NDYW8lgtwAAAAqH/RqHGTzbGxkWMnlSylXtZtWq/9Ro6VZUrq0nrpM8WMlPVYY6G9KS5PSctJe2ysLJviOl1KW7GcrqdGjpuaLBuOlzHSpa6nphb6FPum9e669i9uMzVpF1ou7NfScJw8n7j+eDn29Pi0LTnmWPI8s/XiudH1Sck5KT2HqeL5Pilel7KQ9ZPM6PG6fmJ5YyfGy9jYr5rR8VKNGheXx8u61E8oNdYtn2C+Yi/HyfIEMyZeHzN+QrKUsrQX6sZLnfZNl7p9Wi5HjuerZswJcsxWXeFY0+ehz0kcm5iYkOcsy5GZY+PyyLGpY8fJeTwxfp2knJ7fxkzD8bJM35fymo2Ilw3y2mZGyFLeA+O+lqyPiN8LI+L14cdn61qOlypXHiv9pX5asp6UrbakPiP9hmud0zZibNouy2Q9GUfGS8u+Olkfdly2TTZGsp+sj+6vsJTjStad43fW0zG0rvi8db0wTnK86TZDj5tSOl58DmU57Lh0aY81PK6T/tKm50/Wh2b10p5sL45LXzNZDh8zKVmOkHVdJnWpEcdPTmVtqUkWt61IxhsWj5W8L+QYxkh9/J5JjkFMyY5Hj6spOeYiPbfp85HnInVq+PFSn75ew5PXJi0PlXL2Ghbaszapt1+/dFv79czW9XXIzmOyjI9R2Ode37vpMn0e6WuSPSdZZkaMU9Jf6uT1nZL8vCT12c9PsZ/0ic/ZOOkny/hna3zWNzElWTYmdTJOWifLxvEx6S/XELluJOV4mZQz2c9wQraxjBwvP8Nanpoco0ret9l71/0ZS30t7pf9PGa0rOe18HOdbVscQ9vSugatS9a/Fh/LtISsy/51mbYX6b81ybrTJtvLe03qC2O46/L+Sd5H8t5N16Utef94JMd7XOn7cvjx0+Jy9n48Xp6PTzpm4d+fbHtZT8fK+h1Xuu9i38zY4r9bpe9jWbdfGx03O8dOW8nPU1bWMcrWWWV7TK3T/eV+ZnU7HctZT5/j11LZOSg5J4Xzou+XaWboGPm507L0T8creQ0KbVPN/wf3eWkcGpjRDQAAAABJRU5ErkJggg==>