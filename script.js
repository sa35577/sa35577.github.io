
const typedTxt = document.getElementById('titleTextDesktop');
//const typedTxtMobile = document.getElementById('titleTextMobile');



const cursorSpan = document.getElementById('cursorDesktop');
const cursorSpanMobile = document.getElementById('cursorMobile');


const sentences = ["to problem-solve!", "making things. :D", "to talk to people!", "to go bike riding."];
const newDelay = 2500;
const funnyTypeDelay = 100;
const funnyEraseDelay = 50;

//const contestScores = ["56/60","85/100", "37/75","9/15","1st","1st","138/150"];
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
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
            cursorSpanMobile.classList.add('typing');
        }
        document.getElementById('titleTextDesktop').innerHTML = sentences[arrIdx].substr(0,charIdx+1);
        document.getElementById('titleTextMobile').innerHTML = sentences[arrIdx].substr(0,charIdx+1);
        ++charIdx;

        setTimeout(funnyType,funnyTypeDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        cursorSpanMobile.classList.remove('typing');
        setTimeout(funnyErase,newDelay);

    }
}

function arrowScroll(targ){
    document.querySelector(targ).scrollIntoView({
        behavior: 'smooth'
    });
}

function funnyErase() {
    if (charIdx > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
            cursorSpanMobile.classList.add('typing');
        }
        document.getElementById('titleTextDesktop').innerHTML = sentences[arrIdx].substr(0,charIdx-1);
        document.getElementById('titleTextMobile').innerHTML = sentences[arrIdx].substr(0,charIdx-1);
        --charIdx;

        setTimeout(funnyErase,funnyEraseDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        cursorSpanMobile.classList.remove('typing');
        ++arrIdx;
        arrIdx %= sentences.length;
        setTimeout(funnyType,parseInt(funnyTypeDelay));
    }
}

function experienceShowMore() {
    if (document.getElementById('experienceshowbtn').innerHTML == "Show More") {
        document.getElementById('experienceshowbtn').innerHTML = "Show Less"
    }
    else document.getElementById('experienceshowbtn').innerHTML = "Show More"
    document.getElementById('experienceshowbtn').blur();
}




document.addEventListener("DOMContentLoaded", function(e) {
    setTimeout(funnyType,parseInt(funnyTypeDelay));
});


$(document).ready(function() {
    
    // $("#fermat").height($("#fermat").width());
    // $("#ccc").height($("#ccc").width());
    // $("#csmc").height($("#csmc").width());
    // $("#euclid").width($("#euclid").height());
    // $("#aime").height($("#aime").width());
    // $("#sspc").height($("#sspc").width());
    // $("#comc").height($("#comc").width());
    //
    // document.getElementById('experienceshowbtn').innerHTML = "Show More"
     
    
    
});
