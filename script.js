// Tabs Proyectos
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(this.dataset.tab).classList.add('active');
    });
  });
  
  // GSAP Animaciones en proyectos web
  if (window.gsap) {
    gsap.to("#gsap1", {
      duration: 1.5,
      scale: 1.3,
      yoyo: true,
      repeat: -1,
      background: "#6C0020",
      boxShadow: "0 0 25px #6C0020",
      ease: "power1.inOut"
    });
    gsap.to("#gsap2", {
      duration: 1.2,
      scale: 1.18,
      yoyo: true,
      repeat: -1,
      background: "#24558E",
      boxShadow: "0 0 18px #24558E",
      ease: "power1.inOut"
    });
  }

  // Botón para alternar modo demo (claro/oscuro)
document.addEventListener('DOMContentLoaded', function () {
    const demoBtn = document.getElementById('demo-mode-toggle');
    if (demoBtn) {
        demoBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }
});