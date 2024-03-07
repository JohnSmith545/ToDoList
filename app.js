const form = document.getElementById("add-item");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("input-field").value;
  const body = document.querySelector("textarea").value;

  const card = document.createElement("div");
  card.classList.add("card", "mt-4");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = title;
  card.appendChild(cardHeader);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.textContent = body;
  card.appendChild(cardBody);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "float-end");
  deleteButton.textContent = "Delete";
  cardBody.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    card.parentNode.removeChild(card);
  });

  const cardContainer = document.querySelector(".row .col-md-12");
  cardContainer.appendChild(card);

  document.getElementById("input-field").value = "";
});