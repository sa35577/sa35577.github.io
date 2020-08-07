
const typedTxt = document.getElementById('titleText');


const cursorSpan = document.querySelector('.cursor');   

const sentences = ["Hello there, I'm Sat Arora!", "I'm a problem solver!", "I like making things!", "I like to talk to people!"];
const newDelay = 2500;
const funnyTypeDelay = 100;
const funnyEraseDelay = 50;

let arrIdx = 0, charIdx = 0;

function funnyType() {
    if (charIdx < sentences[arrIdx].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTxt.textContent += sentences[arrIdx].charAt(charIdx);
        ++charIdx;
        setTimeout(funnyType,funnyTypeDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(funnyErase,newDelay);

    }
}


function funnyErase() {
    if (charIdx > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTxt.textContent = sentences[arrIdx].substr(0,charIdx-1);
        --charIdx;
        setTimeout(funnyErase,funnyEraseDelay); 
    }
    else {
        cursorSpan.classList.remove('typing');
        ++arrIdx;
        arrIdx %= sentences.length;
        setTimeout(funnyType,parseInt(newDelay/5));
    }
}  

document.addEventListener("DOMContentLoaded", function(e) {
    setTimeout(funnyType,parseInt(newDelay/5));

    
});
$(document).ready(function() {
    
    
    
});
