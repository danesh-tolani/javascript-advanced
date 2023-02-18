const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function expensive() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}


// throttle Method
const throttle = (func, limit) => {
    let flag = true;
     let counter = 0;
    return function () {
        if(flag) {
            func()
            console.log("Triggered: ", counter++)
            flag = false;
            setTimeout(() => {
                flag=true
            }, limit)
        }
    }
}


// throttled expensive function
const betterExpensiveFunction = throttle(expensive, 1000)


// window.addEventListener("resize", expensive);
window.addEventListener("resize", betterExpensiveFunction);
