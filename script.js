
const typedTxt = document.getElementById('titleText');


const cursorSpan = document.querySelector('.cursor');   

const sentences = ["Hello there, I'm Sat Arora!", "I'm a problem solver!", "I like making things!", "I like to talk to people!"];
const newDelay = 2500;
const funnyTypeDelay = 100;
const funnyEraseDelay = 50;

const contestScores = ["56/60","85/100", "37/75","9/15","1st","1st","138/150"];
const contestNames = ["Canadian Senior Mathematics Contest", 
"Euclid Mathematics Contest",
"Canadian Computing Competition",
"American Invitaitonal Mathematics Exam",
"University of Windsor Secondary School Programming Competition",
"University of Windsor Science Olympiad",
"Fermat Math Contest"]; 

let arrIdx = 0, charIdx = 0;
let score = 0;

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
/*thanks StackOverflow*/
function arrowScroll(targ){
    document.querySelector(targ).scrollIntoView({
        behavior: 'smooth'
    });
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
    setTimeout(funnyType,parseInt(newDelay/2));
     
    
    
    //document.getElementById('fermat').style.height = document.getElementById('fermat').style.width;
});


$(document).ready(function() {
    
    $("#fermat").height($("#fermat").width());
    $("#ccc").height($("#ccc").width());
    $("#csmc").height($("#csmc").width());
    $("#euclid").width($("#euclid").height());
    $("#aime").height($("#aime").width());
    $("#sspc").height($("#sspc").width());
    $("#comc").height($("#comc").width());
     
    
    
});
