

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

/*
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
