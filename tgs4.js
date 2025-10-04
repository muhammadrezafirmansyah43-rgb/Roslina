// Animasi scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          sec.classList.add("show");
        }
      });
    });

    // Form interaktif
    const form = document.getElementById("formRelawan");
    const hasil = document.getElementById("hasil");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      hasil.innerText = `Terima kasih ${nama}, kamu sudah terdaftar sebagai relawan! 🌿`;
      form.reset();
    });