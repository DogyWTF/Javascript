(function calendar() {
    let date = new Date()
    let saturday = new Date(date.getFullYear(), date.getMonth(), 1).getDay()-1
    let dayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let browserX = window.outerWidth
    let browserY = window.outerHeight
    let arrMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    document.querySelector(".calendar_header").innerHTML = arrMonth[date.getMonth()]

    for (let i = 0; i < new Date(date.getFullYear(), date.getMonth()).getDay()-1; i++) {
        let skipDays = document.createElement("div")
        let calendarNum = document.querySelector(".calendar_num")
        skipDays.innerHTML = " "
        calendarNum.prepend(skipDays)
    } // Пропуск дней

    for (let i = 1; i < dayInMonth + 1; i++) {
        saturday++
        if(saturday === 8) {
            saturday = 1
        }

        let calendarNumItem = document.createElement("div")
        let calendarNum = document.querySelector(".calendar_num")
        calendarNumItem.className = "calendar_num-item"
        calendarNumItem.innerHTML = i

        if (i === date.getDate()) {
            calendarNumItem.style.backgroundColor = "#744646"
            calendarNum.appendChild(calendarNumItem)
        }
        else if(saturday%6 === 0) {
            calendarNumItem.style.backgroundColor = "#466297"
            calendarNum.appendChild(calendarNumItem)
        }
        else if(saturday%7 === 0) {
            calendarNumItem.style.backgroundColor = "#46A3A9"
            calendarNum.appendChild(calendarNumItem)
        }
        else {
            calendarNum.appendChild(calendarNumItem)
        }
    } // Заполнение дней в календарь

    let calendarNumItems = document.querySelectorAll(".calendar_num-item")
    let calendar = document.querySelector(".calendar")
    
    document.addEventListener("mousemove", (event) => {
        if (event.screenX <= browserX / 2 && event.screenY <= browserY / 2) {
            for (let i = 0; i < calendarNumItems.length; i++) {
                calendarNumItems[i].style.boxShadow = `-1px -1px 5px black`
            }
            calendar.style.boxShadow = `-1px -1px 5px black`
        }
        else if (event.screenX <= browserX / 2 && browserY / 2 <= event.screenY <= browserY) {
            for (let i = 0; i < calendarNumItems.length; i++) {
                calendarNumItems[i].style.boxShadow = `-1px 1px 5px black`
            }
            calendar.style.boxShadow = `-1px 1px 5px black`
        }
        else if (browserX / 2 <= event.screenX <= browserX && event.screenY <= browserY / 2) {
            for (let i = 0; i < calendarNumItems.length; i++) {
                calendarNumItems[i].style.boxShadow = `1px -1px 5px black`
            }
            calendar.style.boxShadow = `1px -1px 5px black`
        }
        else if (browserX / 2 <= event.screenX <= browserX && browserY / 2 <= event.screenY <= browserY) {
            for (let i = 0; i < calendarNumItems.length; i++) {
                calendarNumItems[i].style.boxShadow = `1px 1px 5px black`
            }
            calendar.style.boxShadow = `1px 1px 5px black`
        }
    }) // Тень

})()

