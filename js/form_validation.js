const presentPageBody = document.querySelector("body");

const validateFormFields = () => {
  const validValuesObj = {
    text: {
      expected: () => /^[A-z ]{6,20}$/,
      failureResponse:
        "must be six letters at least and must not contain digits",
    },
    number: {
      expected: () => /^[0-9]{15}$/,
      failureResponse: "must contain a valid phone number",
    },
    email: {
      expected: () => /([A-z0-9.-_]+)@([A-z]+)\.([A-z]){2,5}$/,
      failureResponse: "provide a valid email address",
    },
    id: {
      expected: () => /[a-zA-Z0-9\w!@#$%^&*()_+|]{5,9}$/,
      failureResponse: "must be a valid id",
    },
    track: {
      expected: () => /^[A-z ]{4, 50}$/,
      failureResponse: "required. please choose your track",
    },
    yearOfCompletion: {
      expected: () => /^[0-9]{4}$/,
      failureResponse: "required. please choose your track",
    },
  };

  const fieldsToBeValidated = document.querySelectorAll("input");
  const formSubmitBtn = document.querySelector(".enrollBtn");
  // console.log(formSubmitBtn);
  fieldsToBeValidated.forEach((element) => {
    // console.log(element.parentElement.children[1]);
    const elementToDisplayError = document.querySelectorAll(".invalid-feedback")
    console.log(elementToDisplayError);
    this.elementToDisplayError.classList.add("error");
    element.addEventListener("keyup", validate, false);
  });
  function validate() {
    const valTypeStore = validValuesObj[this.dataset.valType || this.type];
    if (valTypeStore.expected().test(this.value)) {
      this.parentElement.children[1].textContent = "";
      formSubmitBtn.removeAttribute("disabled");
    } else {
      this.parentElement.children[1].textContent = ` ${valTypeStore.failureResponse}`;
      formSubmitBtn.setAttribute("disabled", "disabled");
    }
  }
  validate();
};

if (
  presentPageBody.classList.contains("enroll") ||
  presentPageBody.classList.contains("certificate")
) {
  validateFormFields();
}
if (validateFormFields) {
  window.location.assign("success.html");
}
