let header_title = document.querySelector(".main-header_title"),
    nav_items = document.querySelectorAll(".nav_item"),
    nav_item_helper = document.querySelector(".nav_item_helper"),
    time_info = document.querySelector(".header-time_info"),
    date_info = document.querySelector(".header-date_info"),
    detail_item_label = document.querySelectorAll(".order-detail_item label"),
    car_wash_type = document.querySelector(".order-car_wash_type"),
    detail_total_qty = document.querySelector(".order-detail_total_qty"),
    detail_info_wrapp = document.querySelector(".order-detail_info_wrapp"),
    detail_checkboxes = document.querySelector(".order-detail_checkboxes")

let car_number = document.querySelector(".order-car_number"),
    detail_car_number_info = document.querySelector(".order-detail_car_number_info"),
    detail_customer_number = document.querySelector(".order-detail_customer_number"),
    tel_number = document.querySelector(".order-tel_number"),
    car_comment = document.querySelector(".order-car_comment"),
    detail_comment = document.querySelector(".order-detail_comment")

car_wash_type.addEventListener("change", function () {
    if (car_wash_type.value == "premium") {
        addActivityItem(myBool = true);
    } else {
        addActivityItem(myBool = false);
    }
});

function addActivityItem(myBool) {
    if (myBool) {
        detail_total_qty.innerHTML = "Narxi: 80 000 UZS"
    } else {
        detail_total_qty.innerHTML = "Narxi: 40 000 UZS"
    }
}

car_number.addEventListener("keyup", (el) => {
    detail_car_number_info.innerHTML = car_number.value
})

car_comment.addEventListener("keyup", (el) => {
    detail_comment.innerHTML = car_comment.value
})

tel_number.addEventListener("keyup", (el) => {
    detail_customer_number.innerHTML = tel_number.value
})

detail_service_type = document.querySelector(".order-detail_service_heading")


detail_item_label.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("selected")
    })
});

nav_items.forEach((item) => {
    item.addEventListener("click", () => {
        nav_items.forEach((inner_item) => {
            inner_item.classList.remove("selected")
        })
        item.classList.add("selected")
    })
});

var x = setInterval(function () {
    var now = new Date()
    var days = now.getDate()
    var month = now.getMonth()
    index = month
    if (month < 10) {
        month = `0${month}`
    }
    var year = now.getFullYear()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    months_arr = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"]
    time_info.innerHTML = `${hours}:${minutes}:${seconds}`
    date_info.innerHTML = `${days}.${month}.${year}`
}, 1000);