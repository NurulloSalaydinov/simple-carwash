let header_title = document.querySelector(".main-header_title"),
    nav_items = document.querySelectorAll(".nav_item"),
    nav_item_helper = document.querySelector(".nav_item_helper"),
    time_info = document.querySelector(".header-time_info"),
    date_info = document.querySelector(".header-date_info")

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