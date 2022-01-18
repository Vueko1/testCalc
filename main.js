const themeChanger = document.querySelector(".dot-box");
const dot = document.querySelector(".dot");
let themeCounter = 1;
let htmlAnch = document.querySelector("html");


themeChanger.addEventListener('click', () => {
    switch(themeCounter)
    {
        case 1: {
            themeCounter = 2;
            dot.classList.add("dotTwo");
            dot.classList.remove("dotThree");
            htmlAnch.setAttribute("data-theme", "two");
            break;
        }
        case 2: {
            themeCounter = 3;
            dot.classList.add("dotThree");
            dot.classList.remove("dotTwo");
            htmlAnch.setAttribute("data-theme", "three");
            break;
        }
        case 3: {
            themeCounter = 1;
            dot.classList.remove("dotThree");
            dot.classList.remove("dotTwo");
            htmlAnch.setAttribute("data-theme", "one");
            break;
        }
    }
})
