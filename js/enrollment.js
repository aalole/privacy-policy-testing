const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.forEach((select, index) => {
  select.addEventListener("click", () => {
    optionsContainer[index].classList.toggle("active");
  });
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    if (o.parentElement.classList.contains("1")) {
      selected[0].innerHTML = o.querySelector("label").innerHTML;
      optionsContainer[0].classList.remove("active");
    }
    if (o.parentElement.classList.contains("2")) {
      selected[1].innerHTML = o.querySelector("label").innerHTML;
      optionsContainer[1].classList.remove("active");
    }
  });
});

// Navigation
const backdrop = document.querySelector(".backdrop");

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  backdrop.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  backdrop.style.display = "none";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields


(function () {
  "use strict";

  // jQuery document ready fn
  $(function () {
    // Bootstrap form validation
    // Fetch the form to apply custom Bootstrap validation style to
    var forms = document.getElementsByClassName("cert-request");

    // Loop over it and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }); // jQuery document ready function
})(); // Immediately Invoked Function Expression (IIFE)
