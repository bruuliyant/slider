let doc = document;
let fof = 0;

let slider = doc.querySelector('.slider');
let slider_line = doc.querySelector('.slider_line');
let a = doc.querySelector('.a');
let b = doc.querySelector('.b');

a.addEventListener('click', function (){
    fof = fof + 256;
    if (fof > 768) {
        fof = 0
    }
    slider_line.style.top = -fof + 'px' ;
});

b.addEventListener('click', function (){
    fof = fof - 256;
    if (fof < 0) {
        fof = 768
    }
    slider_line.style.top = -fof + 'px' ;
});

console.log(fof);