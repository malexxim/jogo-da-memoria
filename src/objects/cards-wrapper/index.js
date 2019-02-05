function createCardsWrapper() {
  let qtdActiveMemoryCard = 0;
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
      width: 100vw;
    }

      .cards-wrapper > div {
      margin-bottom: 10px;
    }
  `;
  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", event => {
    const $origin = event.target;

    console.log("Origin:", event.target);
    console.log("closest:", $origin.closest(".memory-card.-active"));

    if ($origin.closest(".memory-card.-active")) {
      qtdActiveMemoryCard = qtdActiveMemoryCard + 1;
    } else if ($origin.closest(".memory-card")) {
      qtdActiveMemoryCard = qtdActiveMemoryCard - 1;
    }

    console.log("qtd:", qtdActiveMemoryCard);
  });

  return $cardsWrapper;
}
