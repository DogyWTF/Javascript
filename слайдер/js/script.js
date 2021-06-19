
const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
const btn_3 = document.querySelector(".btn_3");
const btn_4 = document.querySelector(".btn_4");
const btn_5 = document.querySelector(".btn_5");
const slider = document.querySelector(".slider_img-item");

let col1 = "#3a52dd";
let col2 = "#dd3a3a";

let click = {
    btn_1,
    btn_2,
    btn_3,
    btn_4,
    btn_5,
};

btn_1.addEventListener("click", e =>{
    for (let i in click){
        click[i].style.background = col2;
        i++;
    }
    
    btn_1.style.background = col1;
    slider.style.top = 0 + "px";
});

btn_2.addEventListener("click", e =>{
    for (let i in click){
        click[i].style.background = col2;
        i++;
    }

    btn_2.style.background = col1;
    slider.style.top = -540 + "px";
});

btn_3.addEventListener("click", e =>{
    for (let i in click){
        click[i].style.background = col2;
        i++;
    }

    btn_3.style.background = col1;
    slider.style.top = -1080 + "px";
});

btn_4.addEventListener("click", e =>{
    for (let i in click){
        click[i].style.background = col2;
        i++;
    }

    btn_4.style.background = col1;
    slider.style.top = -1620 + "px";
});

btn_5.addEventListener("click", e =>{
    for (let i in click){
        click[i].style.background = col2;
        i++;
    }

    btn_5.style.background = col1;
    slider.style.top = -2160 + "px";
});