document.addEventListener("DOMContentLoaded", function(){
    let snow = document.getElementById('snow');
    let topPosition = 0;
    setInterval(() => {
        topPosition++;
        snow.style.top = topPosition + 'px';
        bottomWindow = window.innerHeight
        if (topPosition >= bottomWindow){
            topPosition = 0
        }
    }, 30);

});
