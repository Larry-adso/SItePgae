document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typewriter-text");
    const textToType = `
        <p>Descubre <strong>GENESIS</strong> de Agnus IT, la plataforma IT que revoluciona tu infraestructura de nube con una combinación perfecta de escalabilidad, flexibilidad y eficiencia de costos.</p>
        <p><strong>GENESIS</strong> permite a PYMES, grandes corporaciones y desarrolladores desplegar microservicios, máquinas virtuales y aplicaciones a un solo clic, gracias a su capacidad autoprovisionable y de fácil administración.</p>
    `;
    
    let index = 0;
    const speed = 50; // Velocidad del efecto de escritura

    function typeWriter() {
        if (index < textToType.length) {
            textElement.innerHTML = textToType.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
