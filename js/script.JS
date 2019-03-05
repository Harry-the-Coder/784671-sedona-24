var formBtn = document.querySelector(".hotel-btn");
var hiddenForm = document.querySelector(".hidden-form");

if (hiddenForm) {
  var visitDate = hiddenForm.querySelector("[name=visit-date]");
  var moveoutDate = hiddenForm.querySelector("[name=moveout-date]");
  var adultsNumber = hiddenForm.querySelector("[name=adults]");
  var childrenNumber = hiddenForm.querySelector("[name=children]");

  hiddenForm.classList.add("hidden-search-form");

  formBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    hiddenForm.classList.toggle("hidden-search-form");
    hiddenForm.classList.remove("sign-in-error");
    visitDate.focus();
    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (!hiddenForm.classList.contains("hidden-search-form")) {
          evt.preventDefault();
          hiddenForm.classList.add("hidden-search-form");
          hiddenForm.classList.remove("sign-in-error");
        }
        }})});

  hiddenForm.addEventListener("submit", function (evt) {
    if (!visitDate.value || !moveoutDate.value || !adultsNumber.value) {
    evt.preventDefault();
    hiddenForm.classList.remove("sign-in-error");
    hiddenForm.offsetWidth = hiddenForm.offsetWidth;
    hiddenForm.classList.add("sign-in-error");
    }})
};
