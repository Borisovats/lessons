document.addEventListener("DOMContentLoaded", function(){
    let snow = document.getElementById('snow');
    let randomWidth = Math.random() * 100; // ширина 
    let randomHeight = randomWidth / 3 * 2;  // высота с учетом соотношения снежинки 3 к 2 
    let topPosition = 0; 
    randomLeft = Math.random() * window.innerWidth; // позиция слева 
    setInterval(() => {
        snow.style.left =  randomLeft + 'px';
        topPosition++;
        snow.style.width = randomWidth + 'px';
        snow.style.height = randomHeight + 'px';
        snow.style.top = topPosition + 'px';
        bottomWindow = window.innerHeight // конец страницы
        if (topPosition >= bottomWindow){
            topPosition = 0
        }
    }, 2); 
    }
);
