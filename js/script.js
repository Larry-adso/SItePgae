document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typewriter-text");
    const textToType = `
        <p>Descubre <strong>GENESIS</strong> de Agnus IT, la plataforma IT que revoluciona tu infraestructura de nube con una combinación perfecta de escalabilidad, flexibilidad y eficiencia de costos.</p>
        <p><strong>GENESIS</strong> permite a PYMES, grandes corporaciones y desarrolladores desplegar microservicios, máquinas virtuales y aplicaciones a un solo clic, gracias a su capacidad autoprovisionable y de fácil administración.</p>
    `;
    
    // Configurar el texto para que aparezca como en una máquina de escribir
    textElement.innerHTML = textToType;
});
