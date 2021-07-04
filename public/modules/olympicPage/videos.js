let videos = [
  {
    id: 1,
    img: "../../img/video/1.png",
    time: "00:24",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 2,
    img: "../../img/video/2.png",
    time: "02:23",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 3,
    img: "../../img/video/3.png",
    time: "01:24",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 4,
    img: "../../img/video/4.png",
    time: "02:23",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 5,
    img: "../../img/video/5.png",
    time: "00:24",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 6,
    img: "../../img/video/6.png",
    time: "02:23",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 7,
    img: "../../img/video/7.png",
    time: "01:24",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 8,
    img: "../../img/video/8.png",
    time: "02:23",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 9,
    img: "../../img/video/9.png",
    time: "00:24",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
  {
    id: 10,
    img: "../../img/video/10.png",
    time: "02:23",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 11,
    img: "../../img/video/11.png",
    time: "01:24",
    title: "მშვენიერი კომბინაცია და გოლი - რუმინეთს აბურჯანიამაც გაუტანა",
  },
  {
    id: 12,
    img: "../../img/video/12.png",
    time: "02:23",
    title: "ტალახაძის მორიგი სიგიჟე - 300 კგ. ვარჯიშზე",
  },
];

document.getElementById("videos").innerHTML = videos
  .map(
    (video) => `  
      <a class="m-auto h-36 cursor-pointer relative w-40">
      <img src=${video.img} />
      <img class="absolute top-7 right-40" src="../../svg/PlayRed.svg"/>
      <span class="absolute left-1.5 top-16 text-white text-tiny bg-dark rounded text-center h-4 w-8">${video.time}</span>
      <h2 class="text-tiny leading-4 text-black font-semibold mt-2.5">${video.title}</h2>
    </a>`
  )
  .join("");
