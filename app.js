//                  gsap

const black = document.querySelector('.black');
const white = document.querySelector('.white');
const menu = document.querySelector('.menu');
const bleach = document.querySelector('.bleach');
const B = document.querySelector('.B');

const tl = gsap.timeline();

tl.fromTo(
    black,
    1.5,
    { y: '0%' },
    { y: '-100%', ease: Power2.easeOut }
).fromTo(
    white,
    1.5,
    { y: '0%' },
    { y: '-100%', ease: Power2.easeOut },
    '-=1'
).fromTo(
    menu,
    1,
    { y: '-150%' },
    { y: '0%', ease: Power2.easeOut },
    '-=.7'
).fromTo(
    bleach,
    1.3,
    { width: '0%' },
    { width: '100%', ease: Power2.easeOut },
    '-=.7'
).fromTo(
    B,
    1.3,
    { opacity: '0' },
    { opacity: '1', ease: Power2.easeOut },
    '-=.7'
);


//                        music


let mysong = document.getElementById('mysong');
let sicon = document.getElementById('sicon');
let characters = document.querySelector('.characters');
sicon.onclick = function () {
    if(mysong.paused) {
        mysong.play();
        sicon.src = '../img/pause.png';
        characters.style.background = '#b61361';
    }
    else{
        mysong.pause();
        sicon.src = '../img/play.png';
        characters.style.background = '#fff';
    }
    mysong2.pause();
    mysong3.pause();
    aicon.src = '../img/play.png';
    kicon.src = '../img/play.png';
};

let mysong2 = document.getElementById('mysong2');
let aicon = document.getElementById('aicon');
aicon.onclick = function () {
    if(mysong2.paused) {
        mysong2.play();
        aicon.src = '../img/pause.png';
        characters.style.background = '#5d0092';
    }
    else{
        mysong2.pause();
        aicon.src = '../img/play.png';
        characters.style.background = '#fff';
    }
    mysong.pause();
    mysong3.pause();
    sicon.src = '../img/play.png';
    kicon.src = '../img/play.png';
};

let mysong3 = document.getElementById('mysong3');
let kicon = document.getElementById('kicon');
kicon.onclick = function () {
    if(mysong3.paused) {
        mysong3.play();
        kicon.src = '../img/pause.png';
        characters.style.background = '#dc0981b4';
    }
    else{   
        mysong3.pause();
        kicon.src = '../img/play.png';
        characters.style.background = '#fff';
    }
    mysong.pause();
    mysong2.pause();
    sicon.src = '../img/play.png';
    aicon.src = '../img/play.png';
};


//                         scroll



let sectitle = document.querySelector('.sec-title');
let scrolls = [...document.querySelectorAll('.scrolls')];

let setItemactive = (entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
};


let options = {};

let observer = new IntersectionObserver(setItemactive, options);
observer.observe(sectitle);

scrolls.map((item) => {
    observer.observe(item);
});




// menu-bar
const menuIcon = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');

menuIcon.onclick = function() {
    menuIcon.classList.toggle('active');
    menuBar.classList.toggle('active');
};
