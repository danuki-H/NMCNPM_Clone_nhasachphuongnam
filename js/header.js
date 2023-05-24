let header = document.getElementById("header");

header.innerHTML = `<div class="top-panel">
    <div class="container">
        <div class="row">
            <a href="#"><img src="./assets/images/Banner_PQT_1170x110px-01.jpg" alt=""></a>
        </div>
        <div class="row link-panel">
            <a href="#">BOOKISH.VN</a>
            <a href="#">APP KOMO+</a>
            <a href="#">PHIẾU QUÀ TẶNG PHƯƠNG NAM</a>
        </div>
    </div>
</div>
<div class="nav-header">
    <div class="container">
        <div class="row">
            <div class="logo">
                <img src="./assets/images/logo_hè_290x56.png" alt="">
            </div>
            <div class="hotline">
                <div class="p-left">Hotline:</div>
                <div class="p-right">
                    <p>
                        1900 6656
                        <br>
                        094.985.4605
                    </p>
                    <p>(giờ hành chính)</p>
                </div>
            </div>
            <div class="search">
                <input type="text" placeholder="Tìm kiếm...">
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div class="icon-header">
                <span class="btn-loved">
                    <i class="fa-solid fa-heart"></i>
                </span>
                <span class="btn-user">
                    <i class="fa-solid fa-user" id="btn-user-toggle"></i>
                    <div class="user-infor">
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đơn hàng của tôi</a></li>
                            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Danh sách yêu thích</a></li>
                        </ul>
                        <div class="user-infor-input">
                            <label for="user-infor-input">Theo dõi đơn hàng của tôi</label>
                            <div>
                                <input type="text" id="user-infor-input" placeholder="ID đơn hàng/E-mail"/>
                                <button><i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                        <div class="user-infor-signin">
                            <button>
                                <img src="./assets/images/g-logo.png" alt="" />
                                <span>Login with Google</span>
                            </button>
                            <div>
                                <a href="#signin" id="signin">Đăng nhập</a>
                                <p>hoặc</p>
                                <a href="./register.html">ĐĂNG KÝ</a>
                            </div>
                        </div>
                        
                    </div>
                </span>
                <span class="btn-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div>
                        <p>Giỏ hàng</p>
                        <p>
                            <span id="quantity">0</span>&nbsp;sản phẩm
                        </p>
                    </div>
                </span>
            </div>
        </div>
        <div class="row"></div>
        <div class="row header-navigation">
            <div class="container">
                <ul>
                    <li><a href="#">Sách tiếng </a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>Theo thể loại</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Sách Giáo Khoa</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Văn Học</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Kinh Tế/Kinh Doanh</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Ký Năng/Sống Đẹp</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thiếu Nhi</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Teen</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>Theo nhà phát hành</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phương nam</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Alfred music</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>NXB Trẻ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>NXB Kim Đồng</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Alpha Books</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>AZ Việt Nam</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>THEO TÁC GIẢ</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thích Nhất Hạnh</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phạm Công Luận</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tô Hoài</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nguyễn Nhật Ánh</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nguyễn Ngọc Tư</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đỗ Hồng Ngọc</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>THEO GIẢI THƯỞNG</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Giải Sách Hay</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Pulitzer</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nobel</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>THEO TỦ SÁCH</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phương Nam Book Ưu Đãi</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Chúc Mừng Ngày Của Mẹ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Văn Học - Văn Hóa Nhật Bản</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tủ Sách Kinh Tế Trẻ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Sống Xanh - Sống Lành</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thay Đổi Để Thành Công</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">English books</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>BY CATEGORIES</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Fiction</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Business & Economics</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Self-help & Psychology</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Children’s Books</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Jigsaw Puzzles</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Teen & Young Adult</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>BY PUBLISHERS</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Helen Exley</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Penguin Random House</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>HarperCollins</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Simon & Schuster</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Scholastic</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Macmillan</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>PHƯƠNG NAM'S PICK</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Best Fiction</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Movie Tie-In Collection</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Classic Booklovers</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Business Corner</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Self-Improvement</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Designing Your Dream Houses</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>NEW RELEASES</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Children</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Adults</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>BESTSELLERS</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Children</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Adults</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">vpp & học vụ</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>VĂN PHÒNG PHẨM</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Sổ Tay</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Giấy Note</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Kẹp Giấy</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bìa nhựa/ Bìa còng</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bấm Kim / Kim Bấm</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Băng Keo</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>HỌC CỤ</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Máy Tính</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bút Viết Các Loại</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Gôm Tẩy</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thước Kẻ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bóp Viết</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Chuốt Chì</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>DỤNG CỤ VẼ</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bút Màu</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Màu Nước/ Acrylic</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Cọ Vẽ/Dụng Cụ Pha Màu</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tập Vẽ/Giấy Vẽ/Tập Tô màu</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bảng,Phụ Kiện Bảng, Giá Vẽ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bút Vẽ</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>BALO/TÚI XÁCH</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Balo Mẫu Giáo</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Balo Cấp 1</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Balo Teen</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Túi Đeo Vải</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>THƯƠNG HIỆU UY TÍN</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Deli (Kết Hợp Sơn Tùng MTP)</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thiên Long (Việt Nam)</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bitex (Việt Nam)</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Milan (Tây Ban Nha)</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Faber-Castell (Đức)</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Schneider Pens (Đức)</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">đồ chơi</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>ĐỒ CHƠI THEO PHÂN NHÓM</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Xếp Hình/Jigsaw</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Giáo Dục</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Lắp Ráp</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Mô Hình</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Sáng Tạo</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Nhà Bếp/Búp Bê</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>ĐỒ CHƠI THEO NHÀ CUNG CẤP</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Pinkfong</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Masen-Toys</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>CXL</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Búp Bê Anlily</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Việt Tinh Anh</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tân Lực Miền Nam</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>ĐỒ CHƠI THEO THƯƠNG HIỆU</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>LEGO</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Dickie Toys</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thế Giới Tí Hon</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tomica</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Búp Bê Barbie</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">lưu niệm</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>PHỤ KIỆN CÁ NHÂN</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phụ Kiện Lớp Học Mật Ngữ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phụ Kiện Thỏ Bảy Màu</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thiết Bị Số</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Bóp/Ví Đeo Chéo</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Quạt Cầm Tay</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Hộp Đựng Kính</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>PHỤ KIỆN THEO CÁC DỊP</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Trang Trí Noel</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Lịch Xuân 2023</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>QUÀ LƯU NIỆM</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồng hồ/Mắt kiếng</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Móc Khóa</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Hoa Hộp</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>SẢN PHẨM PHÒNG COVID-19</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Khẩu Trang</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Khăn Giấy</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nước Rửa Tay</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tinh Dầu Nguyên Chất</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>PHIẾU/THẺ QUÀ TẶNG</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phiếu Quà Tặng Phương Nam</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">băng đĩa</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>ĐĨA NHẠC</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Trẻ</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Trữ Tình</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Hòa Tấu/Cổ Điển</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Thiếu Nhi</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Cách Mạng</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nhạc Quê Hương</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>ĐĨA PHIM</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Nhiều Tập</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Truyện Việt Nam</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Tâm lý/Hài</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Hành Động/Võ Thuật</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Kinh Dị/Kỳ Ảo</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phim Thiếu Nhi/Hoạt Hình</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>THỂ LOẠI KHÁC</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tài Liệu/Ký Sự</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Khoa Học/Giáo Dục</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Sân Khấu/Hài</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Trang Điểm/Nấu Ăn</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thể Dục/Khiêu Vũ</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">ưu đãi hot</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>KHUYẾN MÃI HÈ - SUMMER BIG SALE 2023</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Sách Giảm Đến 20%</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>English Books Sale Up To 20%</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Balo & Học Cụ/Văn Phòng Phẩm</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tập Vở</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Phụ Kiện Điện Tử</a></li>
                                </ul>
                            </div>
                            <div class="sub-menu-item">
                                <p>ĐỒ CHƠI XỊN SALE HỜI</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Simba</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Happy Time</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi An sinh</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Đồ Chơi Việt Tinh Anh</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">outlet sales</a>
                        <div class="sub-menu">
                            <div class="sub-menu-item">
                                <p>SÁCH QUỐC VĂN</p>
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Văn Học</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Kinh Tế</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Kỹ Năng Sống</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Thiếu Nhi</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Tuổi Mới Lớn</a></li>
                                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Nữ Công Gia Chánh</a></li>
                                </ul>
                                <div class="more">Xem thêm<i class="fa-solid fa-chevron-right"></i></div>
                            </div>
                            <div class="sub-menu-item">
                                <p>SÁCH NGOẠI VĂN</p>
                            </div>
                            <div class="sub-menu-item">
                                <p>VĂN PHÒNG PHẨM - HỌC CỤ</p>
                            </div>
                            <div class="sub-menu-item">
                                <p>BĂNG ĐĨA</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="signin-form" id="signin">
    <div class="signin-form-control">
        <div class="signin-title-bar">
            <p>Đăng nhập</p>
            <button class="exit-signin-form"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="signin-form-control-inner">
            <form action="">
                <div class="signin-input">
                    <div class="signin-label">
                        <label for="signInEmail">e-mail<span>*</span></label>
                    </div>
                    <input type="email" id="signInEmail" name="signInEmail"/>
                </div>
                <div class="signin-input">
                    <div class="signin-label">
                        <label for="signInPassword">MẬT KHẨU<span>*</span></label>
                        <a>Quên mật khẩu?</a>
                    </div>
                    <input type="password" id="signInPassword" name="signInPassword"/>
                </div>
                <div class="social-signin">
                    <p>Hoặc đăng nhập với nhận dạng nhà cung cấp khác</p>
                    <button>
                        <img src="./assets/images/g-logo.png" alt="" />
                        <span>Login with Google</span>
                    </button>
                </div>
                <a href="./register.html" class="signup-link">Đăng ký tài khoản mới</a>
                <div class="footer-form-control">
                    <div class="footer-form-control-checkbox">
                        <input type="checkbox" id="nhoMK"/>
                        <label for="nhoMK">Nhớ mật khẩu</label>
                    </div>
                    <button>Đăng nhập</button>
                </div>
            </form>
        </div>
    </div>
</div>`;
window.addEventListener("scroll", () => {
    if(window.scrollY > 220){
        document.querySelector(".header-navigation").classList.add("active");
    }else{
        document.querySelector(".header-navigation").classList.remove("active");
    }
});

document.getElementById("signin").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".signin-form").classList.add("active");
});
document.querySelector(".exit-signin-form").addEventListener("click", () => {
    document.querySelector(".signin-form").classList.remove("active");
})
let userToggle = true;
document.getElementById("btn-user-toggle").addEventListener("click", () => {
    if(userToggle){
        document.querySelector(".user-infor").classList.add("active");
    }else{
        document.querySelector(".user-infor").classList.remove("active");
    }
    userToggle = !userToggle;
})