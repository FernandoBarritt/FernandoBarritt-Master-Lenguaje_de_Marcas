// Actualizar año del footer dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lógica de Animaciones al hacer scroll (Intersection Observer)
    const reveals = document.querySelectorAll(".reveal");

    const observerOptions = {
        threshold: 0.1, // El elemento aparece cuando el 10% es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Opcional: Descomentar la siguiente línea si quieres que la animación ocurra solo una vez
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});

// Lógica para el botón del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría tu lógica real para enviar el form (ej. Formspree o tu backend)
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    
    // Estado de carga
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    btn.style.opacity = '0.7';
    
    // Simular un envío (1.5 segundos)
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje Enviado!';
        btn.style.background = '#10b981'; // Verde éxito
        btn.style.opacity = '1';
        this.reset();
        
        // Volver a la normalidad después de 3 segundos
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = ''; // Vuelve al gradiente original
        }, 3000);
    }, 1500);
});