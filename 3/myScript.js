document.addEventListener("DOMContentLoaded", function () {
  for (let s = 0; s < 40; s++) {
    createSnow();
  }
});

document.addEventListener("click", function (event) {
  // новыя снежинка
  if (!event.target.closest(".snow")) {
    // если клик не по снежинке
    createSnow(event);
  }
});

function createSnow(event) {
  // создаст snowFlake
  let snowFlake = document.createElement("img"); // создаст картинку
  snowFlake.src = "snow.png"; // по адресу
  snowFlake.className = "snow"; // присвоит имя класса
  let randomWidth = Math.random() * 40; // ширина
  let randomHeight = (randomWidth / 3) * 2; // высота с учетом соотношения картинки 3 к 2
  if (event) {
    // если был event snowFlart создастся на месте клика
    snowFlake.style.left = event.clientX + "px";
    snowFlake.style.top = event.clientY + "px";
  } else {
    let randomLeft = Math.random() * window.innerWidth; // позиция слева
    snowFlake.style.left = randomLeft + "px";
    snowFlake.style.top = "-50px";
  }

  snowFlake.style.width = randomWidth + "px";
  snowFlake.style.height = randomHeight + "px";
  document.body.appendChild(snowFlake); // добавит на стрпницу

  let topPosition;
  if (event) {
    topPosition = event.clientY;
  } else {
    topPosition = -50;
  }
  let speed = Math.random() * 40; // скорость падения, если одинаковая они все вместе падают сугробом =)
  snowFlake.addEventListener("click", function () {
    // удалит через сек при клике
    setTimeout(() => {
      snowFlake.remove();
    }, 1000);
  });
  snowFlake.addEventListener("mouseenter", function () {
    snowFlake.src = "orangesnow.png";
  });
  snowFlake.addEventListener("mouseleave", function () {
    snowFlake.src = "snow.png";
  });
  setInterval(() => {
    topPosition++;
    snowFlake.style.top = topPosition + "px";
    let bottomWindow = window.innerHeight; // конец страницы
    if (topPosition >= bottomWindow) {
      topPosition = -50;
      let randomLeft = Math.random() * window.innerWidth;
      snowFlake.style.left = randomLeft + "px"; // позиция слева меняется
    }
  }, speed);
}
