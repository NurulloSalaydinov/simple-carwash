let sidebar = document.querySelector('.header-side_bar'),
    header_title = document.querySelector(".main-header_title"),
    nav_items = document.querySelectorAll(".nav_item"),
    nav_item_helper = document.querySelector(".nav_item_helper"),
    time_info = document.querySelector(".header-time_info"),
    date_info = document.querySelector(".header-date_info"),
    more = document.querySelectorAll(".stats-hero_info_item.more"),
    hero_info_item_delete_btn = document.querySelectorAll(".stats-hero_info_item_delete_btn"),
    hero_info_item_reset_btn = document.querySelectorAll(".stats-hero_info_item_reset_btn")



more.forEach((el) => {
    el.addEventListener("click", () => {
        el.nextElementSibling.style.display = "block"
    })
});


hero_info_item_delete_btn.forEach((el) => {
    el.addEventListener("click", () => {
        ul = el.parentElement.parentElement.classList.add("deleted")
        setTimeout(() => {
            ul = el.parentElement.parentElement.classList.remove("deleted")
            ul = el.parentElement.parentElement.classList.add("completely_deleted")
        }, 1000)
    })
});

hero_info_item_reset_btn.forEach((el) => {
    el.addEventListener("click", () => {
        ul = el.parentElement.style.display = "none"
    })
});


window.addEventListener("load", () => {
    sidebar.style.top = header_title.getBoundingClientRect().bottom
})


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