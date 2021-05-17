const sliderP = document.querySelector(".sliderP");
const pageViews = document.querySelector("#PageViews");
const price = document.querySelector("#price");
let promoSwitch = document.querySelector("#switch");

//modification price and views

function printPageViews (){
    if(sliderP.value == "0"){
        pageViews.textContent = "10K";
        price.textContent = "8";
    }else if(sliderP.value == "25"){
        pageViews.textContent = "50K";
        price.textContent = "12";
    }else if(sliderP.value == "50"){
        pageViews.textContent = "100K";
        price.textContent = "16";
    }else if(sliderP.value == "75"){
        pageViews.textContent = "500K";
        price.textContent = "24";
    }else if(sliderP.value == "100"){
        pageViews.textContent = "1M";
        price.textContent = "36";
    };
};


//Slider animation

sliderP.addEventListener("input",function (){
    let x = sliderP.value;
    let color = `linear-gradient(90deg, rgb(184, 250, 243) ${x}%, silver ${x}%)`;
    sliderP.style.background = color;

    printPageViews ();
    
    if (promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent -x;
        console.log(x);
    }else{
        printPageViews ();
    };
});

//promo checkbox

promoSwitch.addEventListener("input",function (){
    if (promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent -x;
        console.log(x);
    }else{
        printPageViews ();
    };
})