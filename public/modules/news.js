let newthings = [
  {
    id: 1,
    img: "../img/1.png",
    title: "სკანდალი ჩოგბურთში - რუსი იანა სიზიკოვა საფრანგეთში დააკავეს",
    caption: "3 საათის წინ",
  },
  {
    id: 2,
    img: "../img/Rectangle28.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 3,
    img: "../img/Rectangle29.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 4,
    img: "../img/Rectangle30.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 5,
    img: "../img/Rectangle31.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 6,
    img: "../img/Rectangle32.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 7,
    img: "../img/Rectangle33.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 5,
    img: "../img/Rectangle34.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
  {
    id: 6,
    img: "../img/Rectangle35.png",
    title: "კოუტინიო ვალის სანაცვლოდ - ბარსელონას უცნაური სქემა",
    caption: "3 საათის წინ",
  },
];

document.getElementById("all").innerHTML = newthings
  .map(
    (newthing) => ` <a href="#" class="xxs:flex items-center xxs:my-5">
    <img class="w-full rounded xxs:w-52 mr-5" src=${newthing.img}>
    <div>
        <h2 class="text-black my-2.5 font-semibold leading-5 text-13 m-auto flex items-center">${newthing.title}</h2>
        <div class="flex items-center">
            <img class="mr-1.5" src="../img/Clock.png"/>
            <h2 class="caption" style="color: #B2B2B2">3 საათის წინ</h2>
        </div>
    </div>
</a>`
  )
  .join("");
