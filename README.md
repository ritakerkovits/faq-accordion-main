# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Solution of the challenge](./solution/screenshot.png)


### Links

- Solution URL: ( https://ritakerkovits.github.io/faq-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

- Managed to refactor my first JavaScript code, and create a function to execute the show/hide function.

Here is a snippet of the function:

```js
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
```

- Managed to change the image depending on the browser width

Utilized the code from the W3Schools website:

```html
  <picture>
    <source srcset="./assets/images/background-pattern-desktop.svg" media="(min-width: 400px)">
    <img src="./assets/images/background-pattern-mobile.svg" alt="Background Pattern" style="max-width: 100%;">
  </picture>
```


- Managed to set colors as variable in CSS with the help of the W3Schools website:
  
```css
:root{
    --clr-dark-purple: hsl(292, 42%, 14%);
    --clr-grayish-purple: hsl(292, 16%, 49%);
    --clr-light-pink: hsl(275, 100%, 97%);
    --clr-white: hsl(0, 0%, 100%);
    --clr-plus-icon: #AD28EB;
    --clr-blue: hsl(228, 45%, 44%);
     
}

body{
    background-color: var(--clr-light-pink);
    margin: 0;
}
```


### Useful resources

- **[Different Images Depending on Browser Width]** _(https://www.w3schools.com/html/html_responsive.asp)_ - This helped in the changing of an image depending on the width
- **[Set variables in CSS]** _(https://www.w3schools.com/css/css3_variables.asp)_ - Great feature to set the colors as variables in CSS, easier to utilize the colors by its custom variable name



## Author

- Frontend Mentor - [@ritakerkovits](https://www.frontendmentor.io/profile/ritakerkovits)


