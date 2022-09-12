//========selecting element=========//
const qContainer = document.querySelectorAll(".Q__container");
const allPlus = document.querySelectorAll(".plus i");
const toTopBtn = document.querySelector(".toTop");

//======Question & Answer
qContainer.forEach((question, qI) =>
  question.addEventListener("click", function () {
    // calc maxHeight
    const headHeight =
      this.querySelector(".Q__head").getBoundingClientRect().height;
    const answerHeight =
      this.querySelector(".Q__answer").getBoundingClientRect().height;

    // plus icon change
    const headPlus = this.querySelector(".Q__head .plus");
    const plusIcon = headPlus.querySelector("i");
    // make Q open and close

    if (question.classList.contains("Q--select")) {
      question.style.maxHeight = `${headHeight}px`;
      question.classList.remove("Q--select");
      headPlus.style.backgroundColor = "var(--main-color)";
      plusIcon.className = "fa-solid fa-plus";
    } else {
      question.style.maxHeight = `${headHeight + answerHeight}px`;
      question.classList.add("Q--select");
      headPlus.style.backgroundColor = "transparent";
      plusIcon.className = "fa-solid fa-minus";
    }
  })
);

//======To Top Button
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTopBtn.style.bottom = "40px";
    toTopBtn.style.opacity = 100;
  } else {
    toTopBtn.style.bottom = "-50px";
    toTopBtn.style.opacity = 0;
  }
});

//=====form {nothing important}
document
  .querySelector("form")
  .addEventListener("click", (e) => e.preventDefault());
