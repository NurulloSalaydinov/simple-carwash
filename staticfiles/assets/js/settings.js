let sidebar = document.querySelector('.header-side_bar'),
    header_title = document.querySelector(".main-header_title"),
    nav_items = document.querySelectorAll(".nav_item"),
    nav_item_helper = document.querySelector(".nav_item_helper"),
    time_info = document.querySelector(".header-time_info"),
    date_info = document.querySelector(".header-date_info"),
    hero_information_form = document.querySelector(".settings-hero_information_form"),
    hero_workers_btn = document.querySelectorAll(".settings-hero_workers_btn"),
    settings_form_bg = document.querySelector(".settings_form_bg"),
    form_inputs = document.querySelectorAll(".settings-form_inputs"),
    hero_form_opener_give_salary = document.querySelectorAll(".settings-hero_form_opener.give_salary"),
    hero_form_opener_edit = document.querySelectorAll(".settings-hero_form_opener.edit"),
    hero_form_opener_delete = document.querySelectorAll(".settings-hero_form_opener.delete"),
    hero_worker_add_wrapper_delete = document.querySelector(".settings-hero_worker_add_wrapper.delete")


window.addEventListener("load", () => {
    sidebar.style.top = header_title.getBoundingClientRect().bottom
})

settings_form_bg.addEventListener("click", () => {
    hero_information_form.classList.remove("opened")
    settings_form_bg.classList.remove("opened")
})

hero_form_opener_give_salary.forEach((el) => {
    el.addEventListener("click", () => {
        hero_information_form.classList.add("opened")
        hero_information_form.firstElementChild.innerHTML = "Oylik berish"
        hero_information_form.lastElementChild.innerHTML = "berish"
        form_inputs.forEach(element => {
            element.removeAttribute('required');
            element.classList.add("closed")
        });
        let inputs = document.querySelectorAll(`.oylik`)
        inputs.forEach(element => {
            element.classList.remove("closed")
            element.setAttribute('required', '');
        });

        settings_form_bg.classList.add("opened")
        hero_worker_add_wrapper_delete.classList.add("closed")
    })
})

hero_form_opener_delete.forEach((el) => {
    el.addEventListener("click", () => {
        hero_information_form.classList.add("opened")
        hero_information_form.firstElementChild.innerHTML = "Ochirish"
        hero_information_form.lastElementChild.innerHTML = "ochirish"
        hero_worker_add_wrapper_delete.firstElementChild.value = el.parentElement.parentElement.firstElementChild.innerHTML.toLocaleLowerCase().replace(" ", "-")
        hero_worker_add_wrapper_delete.lastElementChild.innerHTML = `"${el.parentElement.parentElement.firstElementChild.innerHTML}" ni ochirish`
        form_inputs.forEach(element => {
            element.removeAttribute('required');
            element.classList.add("closed")
        });
        hero_worker_add_wrapper_delete.classList.remove("closed")
        settings_form_bg.classList.add("opened")
    })
})

hero_form_opener_edit.forEach((el) => {
    el.addEventListener("click", () => {
        hero_information_form.classList.add("opened")
        hero_information_form.firstElementChild.innerHTML = "O`zgartirish"
        hero_information_form.lastElementChild.innerHTML = "o`zgartirish"
        hero_information_form.firstElementChild.nextElementSibling.firstElementChild.value = el.parentElement.parentElement.firstElementChild.innerHTML
        form_inputs.forEach(element => {
            element.removeAttribute('required');
            element.classList.add("closed")
        });
        hero_worker_add_wrapper_delete.classList.add("closed")

        let inputs = document.querySelectorAll(`.edit`)
        let foiz = document.querySelectorAll(".foiz")
        inputs.forEach(element => {
            element.classList.remove("closed")
            element.setAttribute('required', '');
        });

        let kunlik = document.querySelectorAll(".kunlik")
        kunlik.forEach(element => {
            element.value = Number(el.parentElement.previousElementSibling.innerHTML.toLocaleLowerCase().replace(" uzs", "").replace(" ", ""))
        });

        foiz.forEach(element => {
            element.value = Number(el.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("%", ""))
        });

        settings_form_bg.classList.add("opened")
    })
})


hero_workers_btn.forEach((el) => {
    el.addEventListener("click", () => {
        hero_information_form.classList.add("opened")
        hero_information_form.firstElementChild.innerHTML = el.lastElementChild.innerHTML
        form_inputs.forEach(element => {
            element.removeAttribute('required');
            element.classList.add("closed")
        });
        hero_worker_add_wrapper_delete.classList.add("closed")

        let inputs = document.querySelectorAll(`.${el.lastElementChild.innerHTML.replace(" qo‘shish", "").replace("‘", "")}`)
        inputs.forEach(element => {
            element.classList.remove("closed")
            element.setAttribute('required', '');
            oylik = document.querySelectorAll(`.oylik`)
            oylik.forEach(element => {
                element.classList.add("closed")
                element.removeAttribute('required');
            });
        });

        settings_form_bg.classList.add("opened")
    })
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