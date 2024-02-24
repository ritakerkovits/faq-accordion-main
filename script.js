
/*
const plusButton = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plusButton.length; i++){
    const button = plusButton[i];
    const plusImage = document.querySelector(".plus");
    let isPlusImage = true;

    button.addEventListener("click", function(){
        if (isPlusImage){
            plusImage.src = "./assets/images/icon-minus.svg"
        } else{
            plusImage.src = "./assets/images/icon-plus.svg"
        }
        isPlusImage = !isPlusImage;
    });
    
};


plusButton.forEach(function(button){
    const plusImage = document.querySelector(".plus");
    let isPlusImage = true;
    console.log(plusButton);
    button.addEventListener("click", function(){
        if (isPlusImage){
            plusImage.src = "./assets/images/icon-minus.svg"
        } else{
            plusImage.src = "./assets/images/icon-plus.svg"
        }
        isPlusImage = !isPlusImage;
    });
});
*/

/*
const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const plusImgOne = document.getElementById("plus-img-1");
const plusImgTwo = document.getElementById("plus-img-2");
let isPlusImgOne = true;
let isPlusImgTwo = true;


buttonOne.addEventListener("click", function(){
    if(isPlusImgOne){
        plusImgOne.src = "./assets/images/icon-minus.svg";
    }else{
        plusImgOne.src = "./assets/images/icon-plus.svg";
    }
    isPlusImgOne = !isPlusImgOne;
});

buttonTwo.addEventListener("click", function(){
    if(isPlusImgTwo){
        plusImgTwo.src = "./assets/images/icon-minus.svg";
    }else{
        plusImgTwo.src = "./assets/images/icon-plus.svg";
    }
    isPlusImgTwo = !isPlusImgTwo;
});

*/

function switchImage(button, image, content) {
    const plusImg = image.src.includes("icon-plus");
    
    if(image.src = plusImg){
        image.src = "./assets/images/icon-minus.svg";
        content.style.display = "block";
    }else{
        image.src = "./assets/images/icon-plus.svg";
        content.style.display = "none";
    }
}




document.getElementById("btn-one").addEventListener("click", function(){
    switchImage(document.getElementById("btn-one"), document.getElementById("plus-img-1"), document.getElementById("content-1"));
});

document.getElementById("btn-two").addEventListener("click", function(){
    switchImage(document.getElementById("btn-two"), document.getElementById("plus-img-2"), document.getElementById("content-2"));
});

document.getElementById("btn-three").addEventListener("click", function(){
    switchImage(document.getElementById("btn-three"), document.getElementById("plus-img-3"), document.getElementById("content-3"));
});

document.getElementById("btn-four").addEventListener("click", function(){
    switchImage(document.getElementById("btn-four"), document.getElementById("plus-img-4"), document.getElementById("content-4"));
});






