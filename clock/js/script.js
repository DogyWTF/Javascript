let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let input = document.querySelector("input")
let cloc = document.querySelector(".clock")
let pmam = document.querySelector(".pmam")
let val;
let timeDate;

(function clock() {
    input.addEventListener("keyup", (event) => {
        if(event.key === "Enter") {
            val = input.value
            timeDate = new Date('20'+val.slice(6, 8), val.slice(3, 5)-1, val.slice(0, 2), val.slice(9, 11), val.slice(12, 14), 0)
            input.value = ""
            cloc.style.boxShadow = `0 -15px 15px rgba(255, 255, 255, 0.05),
                inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
                inset 0 15px 15px rgba(0, 0, 0, 0.3)`
    }})
    
    setInterval(()=> {
        let date = new Date()
        hour.style.transform = `rotate(${date.getHours()*30}deg)`
        min.style.transform = `rotate(${date.getMinutes()*6}deg)`
        sec.style.transform = `rotate(${date.getSeconds()*6}deg)`
        if(date.getHours() >= 12) {
            pmam.innerHTML = "PM"
        }
        else {
            pmam.innerHTML = "AM"
        }
        if((+date) >= (+timeDate)) {
            cloc.style.boxShadow = `0 -15px 15px rgba(255, 0, 0, 0.05),
            inset 0 -15px 15px rgba(255, 255, 255, 0.05),
            0 15px 15px rgba(255, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3)`
        }
    },0)
})()