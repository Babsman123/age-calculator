// const day = document.querySelector(".day").value;
// const month = document.querySelector(".month").value;
// const year = document.querySelector(".year").value;

const yearNum = document.querySelector(".yearNum");
const monthNum = document.querySelector(".monthNum");
const dayNum = document.querySelector(".dayNum");

const btnSubmit = document.querySelector(".btn");

btnSubmit.addEventListener("click", () => {
  const day = Number(document.querySelector(".day").value);
  const month = document.querySelector(".month").value;
  const year = document.querySelector(".year").value;

  if (typeof (day && month && year) === String) {
    // console.log("error");
  } else {
    let date = new Date();

    let d2 = date.getDate();
    let m2 = date.getMonth();
    let y2 = date.getFullYear();

    let d = d2 - day;
    let m = m2 - month;
    let y = y2 - year;
    console.log(d);
    console.log(m);
    console.log(y);
    yearNum.textContent = y;
    monthNum.textContent = m;
    dayNum.textContent = d;
  }

  //   console.log(day);

  //   console.log(m2);
});

// console.log(date);

// let d2 = date.getDate();
// let m2 = 1 + date.getMonth();
// let y2 = date.getFullYear();
// // console.log(d2);
// console.log(m2);
// console.log(y2);
