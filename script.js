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


document.getElementById("question-1").addEventListener("click", function(){
    switchImage(document.getElementById("btn-one"), document.getElementById("plus-img-1"), document.getElementById("content-1"));
});

document.getElementById("question-2").addEventListener("click", function(){
    switchImage(document.getElementById("btn-two"), document.getElementById("plus-img-2"), document.getElementById("content-2"));
});

document.getElementById("question-3").addEventListener("click", function(){
    switchImage(document.getElementById("btn-three"), document.getElementById("plus-img-3"), document.getElementById("content-3"));
});

document.getElementById("question-4").addEventListener("click", function(){
    switchImage(document.getElementById("btn-four"), document.getElementById("plus-img-4"), document.getElementById("content-4"));
});





