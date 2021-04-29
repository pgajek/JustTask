const listItems = document.querySelectorAll(".competences__competence");

let position = 1;

listItems.forEach((item) => {
  item.dataset.position = position;
  position++;
});

const wheelSpin = () => {
  for (i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove(
      `competences__competence--${listItems[i].dataset.position}`
    );
    if (listItems[i].dataset.position === "12") {
      listItems[i].dataset.position = 1;
    } else {
      listItems[i].dataset.position =
        parseInt(listItems[i].dataset.position) + 1;
    }
    listItems[i].classList.add(
      `competences__competence--${listItems[i].dataset.position}`
    );
  }
};
