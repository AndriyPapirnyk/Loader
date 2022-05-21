// remember SSSSSTOOOOOP WATCHHHHHHHHHH
let n = 0;
let blur = 10;
picture.style.filter = 'blur('+blur+'px)';
let op = 1;

setInterval(function(){
if(n<100) {
    n++;
    progress.innerText = n + '%';
    row.style.width = n+'%';
    blur = blur - 0.1;
    picture.style.filter = 'blur('+blur+'px)'
op = op - 0.008;
progress.style.opacity = op;
} else {

}
},100);