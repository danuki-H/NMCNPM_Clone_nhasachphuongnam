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

let trs = document.querySelectorAll(".tbl tr");
let countTrs = trs.length;
let giatk = 19000
document.querySelector(".giatietkiem").innerHTML = giatk;
function update(){
    window.requestAnimationFrame(update);
    if(countTrs == 1){
        cart_info.innerHTML = template_empty_cart_item;
    }
    let list = document.querySelectorAll(".tonggia");
    let tonggia = 0;
    list.forEach(item => {
        tonggia+= parseInt(item.innerHTML);
    })
    document.querySelector(".giatamtinh").innerHTML = tonggia;
    document.querySelector(".tongcong").innerHTML = tonggia + giatk;
}
update();
trs.forEach(tr => {
    let delete_tr = tr.querySelector(".btn-item-delete");
    if(delete_tr){
        delete_tr.addEventListener("click", () => {
            tr.remove();
            countTrs--;
        })
    }
    let dongia = tr.querySelector(".dongia"),
        tonggia = tr.querySelector(".tonggia"),
        input = tr.querySelector("input"),
        upBtn = tr.querySelector(".up-btn"),
        downBtn = tr.querySelector(".down-btn");
    let sl = 1;
    if(input){
        input.addEventListener("change", () => {
            if(parseInt(input.value) > 1 && !isNaN(input.value)){
                sl = parseInt(input.value);
                tonggia.innerHTML = parseInt(dongia.innerHTML) * sl;
            }
            input.value = sl;
        });
    }
    if(upBtn){
        upBtn.addEventListener("click", () => {
            sl++;
            input.value = sl;
            tonggia.innerHTML = parseInt(dongia.innerHTML) * sl;
        })
    }
    if(downBtn){
        downBtn.addEventListener("click", () => {
            if(sl>1){
                sl--;
                input.value = sl;
                tonggia.innerHTML = parseInt(dongia.innerHTML) * sl;
            }
        })
    }
})
document.querySelector(".thaydoidiachigiaohang").addEventListener("click", () => {
    document.querySelector(".phivanchuyen").classList.add("active");
})
document.querySelector(".thoat").addEventListener("click", () => {
    document.querySelector(".phivanchuyen").classList.remove("active");
})