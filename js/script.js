
/* let count = 0;

const value = document.querySelector("#result");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
    item.addEventListener("click", function(e){
        console.log(e.currentTarget);
    });
}); */
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var num = 0;


decrease.addEventListener("click", function(){
    num -= 1;
    result.innerHTML = num;
    if (num < 0){
        result.style.color = "red";
    }
    else if (num > 0){
        result.style.color = "green";
        }
        else{
            result.style.color = "black";
        }
});
increase.addEventListener("click", function(){
    num += 1;
    result.innerHTML = num;
    if (num < 0){
        result.style.color = "red";
    }
    else if (num > 0){
        result.style.color = "green";
        }
    else{
        result.style.color = "black";
    }
});

reset.addEventListener("click", function(){
    num = 0;
    result.innerHTML = num;
    if (num < 0){
        result.style.color = "red";
    }
    else if (num > 0){
        result.style.color = "green";
        }
    else{
        result.style.color = "black";
    }
});

