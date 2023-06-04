let cards = document.querySelectorAll(".block-illumination");
for (let i = 0; i < cards.length; i++) {
  cards[i].onmousemove = e => {
    for (const card of document.getElementsByClassName("block-illumination")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
}
