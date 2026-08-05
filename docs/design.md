# Design System: LUNA Resort & Hotel

**Dự án giả định:** LUNA Wellness Resort (Landing Page)
**Định vị:** Khu nghỉ dưỡng cao cấp, thiên hướng "Wellness" nhưng với vỏ bọc kiến trúc siêu hiện đại (Hyper-Modern), mạnh mẽ và sang trọng.

## 1. Core Principles
- **Massive Typography:** Điểm nhấn chính của thiết kế là những mảng Typography khổng lồ, dày dặn (Black weight), sử dụng như một phần của kiến trúc (kiểu Brutalism/Modernism).
- **Geometric & Architectural:** Sử dụng các đường cắt sắc nét, khối vuông vức (`rounded-none`, `rounded-sm`) và khối vòm (Arch) lớn để tạo ấn tượng thị giác mạnh mẽ. Không sử dụng kiểu dáng bo tròn viên thuốc (Pill-shape) mềm mại.
- **High Contrast:** Đen tuyền và Trắng/Xám nhạt đan xen liên tục tạo sự sang trọng tuyệt đối.

## 2. Typography
- **Font chữ DUY NHẤT:** `Inter` (hoặc font Sans-serif tương đương có các weight cực dày). Không dùng Serif.
- **Headings (Tiêu đề):**
  - Font Weight: Siêu dày (`font-black` - 900).
  - Transformation: `uppercase`.
  - Tracking: `tracking-tighter` (Khoảng cách chữ hẹp) để tạo độ nén và sức nặng.
- **Body Text:**
  - Font Weight: `font-light` hoặc `font-normal`.
  - Tracking: Bình thường.
- **Watermarks/Decorative Text:** Chữ LUNA hoặc các con số (01, 02) siêu lớn, làm mờ (opacity thấp) để làm nền (Background text).

## 3. Color Palette
- **Primary Background (Light):** `#F5F5F5` (Xám rất nhạt) và `#FFFFFF` (Trắng tinh).
- **Primary Background (Dark):** `#111111` (Đen tuyền / Charcoal Black) thay vì xanh rêu.
- **Accent Color:** `#F6C49F` (Màu Cam Đào / Light Peach) - Dùng giới hạn cho mũi tên (arrows), một số từ nhấn mạnh. Không dùng làm nền mảng lớn.

## 4. UI Elements
- **Buttons:**
  - Hình chữ nhật sắc nét hoặc bo góc cực nhỏ (`rounded-sm`).
  - Màu nền Đen chữ Trắng. Thường kết hợp với một khối vuông nhỏ màu Cam Đào chứa biểu tượng mũi tên (Arrow) nằm kề bên.
- **Cards (Thẻ nội dung):**
  - Vuông vức hoặc chỉ bo góc rất ít. Không dùng viền bóng đổ (shadow) lòe loẹt. Dùng sự tương phản màu sắc để phân tách.
- **Booking Bar:**
  - Một thanh hình chữ nhật màu trắng kéo ngang chứa các input có gạch chân hoặc chia cột dọc mỏng.
- **Hình ảnh (Imagery):**
  - Cắt xén (Crop) theo các mảng lớn. Có khối kiến trúc vòm cung (Arch) rất đặc trưng ở phần Hero.

## 5. Responsive Strategy
- **Mobile First:** Mọi cấu trúc phức tạp (như khối vòm) sẽ được chuyển về dạng hình vuông/chữ nhật đơn giản trên mobile.
- **Typography Scaling:** Chữ khổng lồ trên Desktop sẽ được scale xuống vừa vặn nhưng vẫn giữ nguyên Weight Black để bảo toàn phong cách.
