const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const count = document.querySelector(".count");

let number = 0;
count.innerText = number;

const updateCount = () => {
  count.innerText = number;
};

const handleClickPlus = () => {
  console.log("ddd");
  number++;
  updateCount();
};
const handleClickMinus = () => {
  number--;
  updateCount();
};

plus.addEventListener("click", handleClickPlus);
minus.addEventListener("click", handleClickMinus);
