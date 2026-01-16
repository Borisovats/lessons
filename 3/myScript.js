document.addEventListener("DOMContentLoaded", function () {
  for (let s = 0; s <= 40; s++) {
    let flake = createSnow();
    fall(flake);
  }


  function createSnow() {
    // создаст  и вернет snowFlake
    let snowFlake = document.createElement("img"); // создаст картинку
    snowFlake.src = "snow.png"; // по адресу
    snowFlake.className = "snow"; // присвоит имя класса
    let randomWidth = Math.random() * 40; // ширина
    let randomHeight = (randomWidth / 3) * 2; // высота с учетом соотношения картинки 3 к 2
    let randomLeft = Math.random() * window.innerWidth; // позиция слева
    snowFlake.style.left = randomLeft + "px";
    snowFlake.style.width = randomWidth + "px";
    snowFlake.style.height = randomHeight + "px";
    document.body.appendChild(snowFlake); // добавит на стрпницу
    return snowFlake;
  }


  function fall(flake) {
    // flake падает
    let topPosition = -50; //чтобы было не видно начала
    let speed = Math.random() * 40; // скорость падения, если одинаковая они все вместе падают сугробом =)
    setInterval(() => {
      topPosition++;
      flake.style.top = topPosition + "px";
      let bottomWindow = window.innerHeight; // конец страницы
      if (topPosition >= bottomWindow) {
        topPosition = -50;
        let randomLeft = Math.random() * window.innerWidth; 
        flake.style.left = randomLeft + "px";// позиция слева меняется
      }
    }, speed);
  }
});
