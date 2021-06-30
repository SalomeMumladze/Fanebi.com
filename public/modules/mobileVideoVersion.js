let mobiles = [
  {
    id: 1,
    img: "../img/Rectangle20.png",
    time: "00:24",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 2,
    img: "../img/team.png",
    time: "02:23",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 3,
    img: "../img/video/Rectangle1.png",
    time: "01:24",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 4,
    img: "../img/video/Rectangle2.png",
    time: "02:23",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
];

document.getElementById("mobVideos").innerHTML = mobiles
  .map(
    (mobile) => `  
     <a class="m-auto h-36 cursor-pointer relative w-40">
        <img src=${mobile.img} />
        <img class="absolute top-7 right-40" src="../svg/PlayRed.svg"/>
        <span class="absolute left-1.5 top-16 text-white text-tiny bg-dark rounded text-center h-4 w-8">${mobile.time}</span>
        <h2 class="text-tiny leading-4 text-black font-semibold mt-2.5">${mobile.title}</h2>
    </a>`
  )
  .join("");
