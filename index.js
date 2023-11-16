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

  let date = new Date();

  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let calMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  console.log(m2);
  console.log(d2);
  console.log(y2);

  if (day > d2) {
    d2 = d2 + calMonth[m2 - 1];
    m2 = m2 - 1;
  }
  if (month > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - day;
  let m = m2 - month;
  let y = y2 - year;
  console.log(d);
  console.log(m);
  console.log(y);

  yearNum.textContent = y;
  monthNum.textContent = m;
  dayNum.textContent = d;
  //   console.log(day);

  //   console.log(m2);
});

// yearNum.textContent = y;
// monthNum.textContent = m;
// dayNum.textContent = d;
// let d = d2 - day;
//   let m = m2 - month;
//   let y = y2 - year;
//   console.log(d);
//   console.log(m);
//   console.log(y);

// let mydate = new Date();
// console.log(mydate);

// let myMonth = 1 + mydate.getMonth();
// console.log(myMonth);
