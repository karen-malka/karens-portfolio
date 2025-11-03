let current = -1;
let sheets;
let nextBtn, prevBtn;

document.addEventListener("DOMContentLoaded", () => {
  sheets = Array.from(document.querySelectorAll(".book .sheet"));
  nextBtn = document.querySelector(".btn.next");
  prevBtn = document.querySelector(".btn.prev");

  // assign each sheet a base z-index
  sheets.forEach((sheet, i) => {
    sheet.dataset.baseZ = sheets.length - i; // save original stack
    sheet.style.zIndex = sheet.dataset.baseZ;
  });

  updateButtons();
});

function nextPage() {
  if (current < sheets.length - 1) {
    current++;
    const sheet = sheets[current];
    sheet.classList.add("flipped");

    // after flip, move behind unflipped sheets
    setTimeout(() => {
      sheet.style.zIndex = current; // send it behind
    }, 300); // matches CSS transition

    updateButtons();
  }
}

function prevPage() {
  if (current >= 0) {
    const sheet = sheets[current];
    sheet.classList.remove("flipped");

    // restore original z-index so it comes back to top
    setTimeout(() => {
      sheet.style.zIndex = sheet.dataset.baseZ;
    }, 300); // instant re-stack

    current--;
    updateButtons();
  }
}

function updateButtons() {
  nextBtn.disabled = current >= sheets.length - 1;
  prevBtn.disabled = current < 0;
}
