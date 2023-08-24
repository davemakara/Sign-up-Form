"use strict";

const mainHeading = document.getElementById("main-heading");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const page4 = document.getElementById("page-4");
const page5 = document.getElementById("page-5");

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const errorEmptyFirstName = document.getElementById("error-empty-first-name");
const errorInvFirstName = document.getElementById("error-invalid-first-name");
const errorEmptyLastName = document.getElementById("error-empty-last-name");
const errorInvalidLastName = document.getElementById("error-invalid-last-name");
const previousBtnPage1 = document.getElementById("previous-btn-page1");
const nextBtnPage1 = document.querySelector("#next-btn-page1");

const inputEmail = document.getElementById("email-address");
const inputPhone = document.getElementById("phone-number");
const errorEmptyEmail = document.getElementById("empty-email");
const errorInvEmail = document.getElementById("invalid-email");
const errorEmptyPhone = document.getElementById("empty-phone");
const previousBtnPage2 = document.getElementById("previous-btn-page2");
const nextBtnPage2 = document.getElementById("next-btn-page2");

const inputDate = document.getElementById("input-date");
const errorEmptyDate = document.getElementById("empty-date");
const inputGenderMale = document.getElementById("gender-male");
const inputGenderFemale = document.getElementById("gender-female");
const errorEmptyGender = document.getElementById("empty-gender");
const previousBtnPage3 = document.getElementById("previous-btn-page3");
const nextBtnPage3 = document.getElementById("next-btn-page3");

const inputPassword = document.getElementById("input-password");
const inputConfirmPassword = document.getElementById("verify-password");
const errorEmptyPassword = document.getElementById("empty-password");
const errorInvalidPassword = document.getElementById("invalid-password");
const errorEmptyConfirmPass = document.getElementById("empty-confirm-pass");
const errorInvConfirmPass = document.getElementById("invalid-confirm-pass");
const checkBox = document.getElementById("check-box");
const errorEmptyCheckBox = document.getElementById("error-checkbox");
const previousBtnPage4 = document.getElementById("previous-btn-page4");
const nextBtnPage4 = document.getElementById("next-btn-page4");

const errorBorder = (el) => {
  el.classList.add("error-border");
};

const noErrorBorder = (el) => {
  el.classList.remove("error-border");
};

const validatePage1 = () => {
  if (inputFirstName.value === "" && inputLastName.value !== "") {
    errorBorder(inputFirstName);
    noErrorBorder(inputLastName);
    errorEmptyFirstName.classList.remove("hidden");
    errorEmptyLastName.classList.add("hidden");
  } else if (inputFirstName.value !== "" && inputLastName.value === "") {
    errorBorder(inputLastName);
    noErrorBorder(inputFirstName);
    errorEmptyFirstName.classList.add("hidden");
    errorEmptyLastName.classList.remove("hidden");
  } else if (inputFirstName.value === "" && inputLastName.value === "") {
    errorBorder(inputFirstName);
    errorBorder(inputLastName);
    errorEmptyFirstName.classList.remove("hidden");
    errorEmptyLastName.classList.remove("hidden");
  } else {
    noErrorBorder(inputFirstName);
    noErrorBorder(inputLastName);
    errorEmptyFirstName.classList.add("hidden");
    errorEmptyLastName.classList.add("hidden");

    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  }
};

const validatePage2 = () => {
  if (inputEmail.value === "") {
    errorBorder(inputEmail);
    errorEmptyEmail.classList.remove("hidden");
  } else if (inputEmail.value !== "" && !inputEmail.value.includes("@")) {
    errorBorder(inputEmail);
    errorEmptyEmail.classList.add("hidden");
    errorInvEmail.classList.remove("hidden");
  } else if (inputEmail.value !== "" && inputEmail.value.includes("@")) {
    noErrorBorder(inputEmail);
    errorEmptyEmail.classList.add("hidden");
    errorInvEmail.classList.add("hidden");
  }

  if (inputPhone.value === "") {
    errorBorder(inputPhone);
    errorEmptyPhone.classList.remove("hidden");
  } else {
    noErrorBorder(inputPhone);
    errorEmptyPhone.classList.add("hidden");
  }

  if (
    inputEmail.value !== "" &&
    inputEmail.value.includes("@") &&
    inputPhone.value !== ""
  ) {
    noErrorBorder(inputEmail);
    noErrorBorder(inputPhone);
    errorEmptyEmail.classList.add("hidden");
    errorInvEmail.classList.add("hidden");
    errorEmptyPhone.classList.add("hidden");
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
  }
};

const validatePage3 = () => {
  if (inputDate.value === "") {
    errorBorder(inputDate);
    errorEmptyDate.classList.remove("hidden");
  } else {
    noErrorBorder(inputDate);
    errorEmptyDate.classList.add("hidden");
  }

  if (!inputGenderMale.checked && !inputGenderFemale.checked) {
    errorEmptyGender.classList.remove("hidden");
  } else {
    errorEmptyGender.classList.add("hidden");
  }

  if (
    (inputDate.value !== "" && inputGenderMale.checked) ||
    inputGenderFemale.checked
  ) {
    noErrorBorder(inputDate);
    errorEmptyDate.classList.add("hidden");
    errorEmptyGender.classList.add("hidden");
    page3.classList.add("hidden");
    page4.classList.remove("hidden");
  }
};

const validatePage4 = () => {
  if (inputPassword.value === "") {
    errorBorder(inputPassword);
    errorEmptyPassword.classList.remove("hidden");
  }

  if (inputPassword.value === "" && inputConfirmPassword.value === "") {
    errorBorder(inputPassword);
    errorBorder(inputConfirmPassword);
    errorEmptyPassword.classList.remove("hidden");
    errorEmptyConfirmPass.classList.remove("hidden");
  }

  if (inputPassword.value !== "" && inputPassword.value.length < 8) {
    errorBorder(inputPassword);
    errorEmptyPassword.classList.add("hidden");
    errorInvalidPassword.classList.remove("hidden");
  }

  if (inputConfirmPassword === "" && inputPassword !== "") {
    errorBorder(inputConfirmPassword);
    errorEmptyConfirmPass.classList.remove("hidden");
  }

  if (
    inputPassword.value !== "" &&
    inputPassword.value.length >= 8 &&
    inputConfirmPassword.value === ""
  ) {
    errorBorder(inputConfirmPassword);
    noErrorBorder(inputPassword);
    errorEmptyPassword.classList.add("hidden");
    errorInvalidPassword.classList.add("hidden");
    errorInvConfirmPass.classList.add("hidden");
    errorEmptyConfirmPass.classList.remove("hidden");
  }

  if (
    inputPassword.value !== "" &&
    inputPassword.value.length >= 8 &&
    inputConfirmPassword.value !== "" &&
    inputConfirmPassword.value !== inputPassword.value
  ) {
    noErrorBorder(inputPassword);
    errorBorder(inputConfirmPassword);
    errorEmptyPassword.classList.add("hidden");
    errorInvalidPassword.classList.add("hidden");
    errorEmptyConfirmPass.classList.add("hidden");
    errorInvConfirmPass.classList.remove("hidden");
  }

  if (
    inputPassword.value !== "" &&
    inputPassword.value.length >= 8 &&
    inputConfirmPassword.value !== "" &&
    inputConfirmPassword.value === inputPassword.value
  ) {
    noErrorBorder(inputPassword);
    noErrorBorder(inputConfirmPassword);
    errorEmptyPassword.classList.add("hidden");
    errorInvalidPassword.classList.add("hidden");
    errorEmptyConfirmPass.classList.add("hidden");
    errorInvConfirmPass.classList.add("hidden");
  }

  if (!checkBox.checked) {
    errorEmptyCheckBox.classList.remove("hidden");
  } else {
    errorEmptyCheckBox.classList.add("hidden");
  }

  if (
    inputPassword.value !== "" &&
    inputPassword.value.length >= 8 &&
    inputConfirmPassword.value !== "" &&
    inputConfirmPassword.value === inputPassword.value &&
    checkBox.checked
  ) {
    page5.classList.remove("hidden");
    page4.classList.add("hidden");
  }
};

nextBtnPage1.addEventListener("click", (e) => {
  e.preventDefault();

  validatePage1();
});

previousBtnPage2.addEventListener("click", () => {
  page2.classList.add("hidden");
  page1.classList.remove("hidden");
});

nextBtnPage2.addEventListener("click", (e) => {
  e.preventDefault();

  validatePage2();
});

previousBtnPage3.addEventListener("click", () => {
  page3.classList.add("hidden");
  page2.classList.remove("hidden");
});

nextBtnPage3.addEventListener("click", (e) => {
  // let today = new Date();
  e.preventDefault();

  validatePage3();
});

previousBtnPage4.addEventListener("click", () => {
  page4.classList.add("hidden");
  page3.classList.remove("hidden");
});

nextBtnPage4.addEventListener("click", (e) => {
  e.preventDefault();

  validatePage4();
  mainHeading.style.display = "none";
});
