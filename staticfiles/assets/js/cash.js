let form_opener = document.querySelector(".cash-hero_form_opener"),
    form = document.querySelector(".cash-hero_form"),
    closer_bg = document.querySelector(".cash-hero_form_bg"),
    closers = document.querySelector(".cash-hero_form_closers"),
    hero_output_wrapper = document.querySelector(".cash-hero_output_wrapper"),
    hero_salary_wrapper = document.querySelector(".cash-hero_salary_wrapper"),
    form_salary_opener = document.querySelectorAll('.cash-form_salary_opener'),
    hero_form_heading = document.querySelector(".cash-hero_form_heading"),
    hero_form_center = document.querySelector(".cash-hero_form_center button")


form_opener.addEventListener("click", () => {
    form.classList.add("opened")
    closer_bg.classList.add("opened")
    hero_output_wrapper.classList.remove("closed")
    hero_salary_wrapper.classList.add("closed")
    hero_form_heading.innerHTML = "Chiqim qo‘shish"
    hero_form_center.innerHTML = "Qo‘shish"
})

form_salary_opener.forEach((el) => {
    el.addEventListener("click", () => {
        form.classList.add("opened")
        closer_bg.classList.add("opened")
        hero_output_wrapper.classList.add("closed")
        hero_salary_wrapper.classList.remove("closed")
        hero_form_heading.innerHTML = "Oylik berish"
        hero_form_center.innerHTML = "Berish"
    })
});



closer_bg.addEventListener("click", () => {
    form.classList.remove("opened")
    closer_bg.classList.remove("opened")
})

closers.addEventListener("click", () => {
    form.classList.remove("opened")
    closer_bg.classList.remove("opened")
})

let sidebar = document.querySelector('.header-side_bar'),
    header_title = document.querySelector(".main-header_title"),
    nav_items = document.querySelectorAll(".nav_item"),
    nav_item_helper = document.querySelector(".nav_item_helper"),
    time_info = document.querySelector(".header-time_info"),
    date_info = document.querySelector(".header-date_info")

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