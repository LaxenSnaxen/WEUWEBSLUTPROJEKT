document.addEventListener("DOMContentLoaded", function () {
    // === SLIDE-IN FOOTER ===
    const footer = document.getElementById("bottom-footer");
  
    if (footer) {
      // Desktop hover near bottom
      document.addEventListener("mousemove", (e) => {
        const threshold = window.innerHeight - 50;
        if (e.clientY >= threshold) {
          footer.classList.add("visible");
        } else {
          footer.classList.remove("visible");
        }
      });
  
      // Mobile tap near bottom
      document.addEventListener("touchstart", (e) => {
        const touchY = e.touches[0].clientY;
        const threshold = window.innerHeight - 100;
        if (touchY >= threshold) {
          footer.classList.add("visible");
          setTimeout(() => {
            footer.classList.remove("visible");
          }, 3000);
        }
      });
    }
  
    // === POPUP MODAL (Only if modal HTML is present) ===
    const modal = document.getElementById("popup-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeBtn = document.getElementById("close-btn");
  
    if (modal && modalTitle && modalDesc && closeBtn) {
      document.querySelectorAll(".image-list li").forEach((item) => {
        item.addEventListener("click", () => {
          const title = item.getAttribute("data-title");
          const desc = item.getAttribute("data-description");
  
          modalTitle.textContent = title || "Ingen titel";
          modalDesc.textContent = desc || "Ingen beskrivning";
          modal.style.display = "block";
        });
      });
  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  });
  