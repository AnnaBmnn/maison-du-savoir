const toggleAccordeons = document.querySelectorAll(".js-toggle-accordeon");

if (toggleAccordeons) {
  toggleAccordeons.forEach((_btn) => {
    _btn.addEventListener("click", () => {
      let _btnName = _btn.dataset.toggle;
      if (_btn.classList.contains("is-open")) {
        _btn.classList.remove("is-open");
      } else {
        _btn.classList.add("is-open");
      }
    });
  });
}
