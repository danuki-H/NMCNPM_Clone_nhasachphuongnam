let btn_delete_cart = document.querySelector(".cart-info-delete");
let cart_info = document.querySelector(".cart-info");
let template_empty_cart_item = `
    <div>
        <div style="width:100%;
                    padding: 60px 0;
                    display:flex; 
                    align-items:center; 
                    justify-content:center;
                    background-color:#ffad9c;
                    font-size:16px;"
        >
            Giỏ hàng của bạn chưa có sản phẩm
        </div>
        <a href="index.html"
            style="
                display:block;
                width:max-content;
                padding:7px 10px;
                margin:30px 0 0 15px;
                text-transform:uppercase;
                font-weight:bold;
                color:#000;
                background-color:#f5a016; 
                font-size:12px;
                transition:all 0.3s ease; 
            "
            id="tieptucmuahang"
        >
            tiếp tục mua hàng
        </a>
    </div>
`;
btn_delete_cart.addEventListener("click", () => {
    cart_info.innerHTML = template_empty_cart_item;
})
