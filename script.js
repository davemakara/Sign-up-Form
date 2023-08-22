const nextBtnPage1 = document.querySelector("#next-btn-page1");

nextBtnPage1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".page1").classList.add("hidden");
  document.querySelector(".page2").classList.remove("hidden");
});
