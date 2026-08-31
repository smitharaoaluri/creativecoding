const modal = document.getElementById("sketchModal");
const frame = document.getElementById("sketchFrame");
const modalTitle = document.getElementById("modalTitle");
const openSketch = document.getElementById("openSketch");
const closeModal = document.getElementById("closeModal");

function openSketchModal(button) {
  const sketch = button.dataset.sketch;
  const title = button.dataset.title;
  const meta = button.dataset.meta || "";

  modalTitle.textContent = title;
  frame.title = `${title} — ${meta}`;
  frame.src = sketch;
  openSketch.href = sketch;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModal.focus();
}

function closeSketchModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  frame.src = "about:blank";
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-button").forEach(button => {
  button.addEventListener("click", () => openSketchModal(button));
});

closeModal.addEventListener("click", closeSketchModal);

modal.addEventListener("click", event => {
  if (event.target.dataset.close === "true") closeSketchModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeSketchModal();
  }
});
