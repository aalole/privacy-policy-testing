const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach(accordionItem => {
  accordionItem.addEventListener("click", event => {
    accordionItem.classList.toggle("active");
  })
})

// header
const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.forEach((select,index) => {
  select.addEventListener("click", () => {
    optionsContainer[index].classList.toggle("active");
  })
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    if(o.parentElement.classList.contains('1')) {
      selected[0].innerHTML = o.querySelector("label").innerHTML;
      optionsContainer[0].classList.remove("active");
    } if(o.parentElement.classList.contains('2')) {
      selected[1].innerHTML = o.querySelector("label").innerHTML;
      optionsContainer[1].classList.remove("active");
    }
  });
});

// Navigation
const backdrop = document.querySelector('.backdrop');

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  backdrop.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  backdrop.style.display = "none";
}