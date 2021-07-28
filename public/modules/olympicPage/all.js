let newthings = [
  {
    id: 1,
    img: "../../img/olympic(1).png",
    title: "სკანდალი ჩოგბურთში - რუსი იანა სიზიკოვა საფრანგეთში დააკავეს",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 2,
    img: "../../img/olympic(2).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 3,
    img: "../../img/olympic(3).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 4,
    img: "../../img/olympic(4).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 5,
    img: "../../img/olympic(5).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 6,
    img: "../../img/olympic(6).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 7,
    img: "../../img/olympic(7).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 6,
    img: "../../img/olympic(8).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
  {
    id: 7,
    img: "../../img/olympic(9).png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    desc: "ჟურნალისტი კრის ბრიუსარი მიიჩნევს, რომ სკოტი პიპენმა მაიკლ ჯორდანის მიმართ უპატივცემულობა გამოიჩინა. პიპენის ავტობიოგრაფიული წიგნი 2021 წლის ნოემბრიდა...",
    caption: "3 საათის წინ",
  },
];

document.getElementById("all").innerHTML = newthings
  .map(
    (newthing) => ` <a class="flex items-center mt-8 cursor-pointer">
      <img class="h-38 max-w-sm rounded-4 md:w-60 xxs:w-32" 
      src=${newthing.img}
    />
  <div class="h-auto grid items-center justify-center ml-6 gap-2">
    <h2 class="text-black font-semibold text-base ">${newthing.title}</h2>
    <h2 class="desc">${newthing.desc}</h2>
    <div class="flex items-center">
      <img class="mr-1.5 " src="../../img/Clock.png"/>
      <h2 class="caption" style="color: #B2B2B2">${newthing.caption}</h2>
    </div>                                                                    
  </div>
  </a>`
  )
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch);
  }

  function tabSwitch() {
    document
      .getElementsByClassName("text-gray-900")[0]
      .classList.remove("text-gray-900");
    this.classList.add("text-gray-900");
    document.getElementsByClassName("is-show")[0].classList.remove("is-show");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("panel")[index].classList.add("is-show");
  }
});

