let fullstack = ["HTML", "CSS", "Javascript", "Python", "React", "Redux", "Node", "Express", "MongoDB", "Numpy"]

let stackSpan = document.querySelector('#stack');
let sliderDiv = document.querySelector('#sliderDiv')
let iconSpan = document.querySelector('#iconSpan')
let titleSpan = document.querySelector('#titleSpan')

let titles = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
  ];

setInterval(() => {
    let randomStack = Math.floor((Math.random()*fullstack.length))
    let randomSlider = Math.floor((Math.random()*titles.length))

    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

    stackSpan.innerText = fullstack[randomStack];
    stackSpan.style.color = `${randomColor}`;

    iconSpan.innerText = titles[randomSlider][0];
    titleSpan.innerText = titles[randomSlider][1]
    }, 3000);
