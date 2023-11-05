import React, { useEffect } from "react";

function Triangle() {

    useEffect(() => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        // Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar el triángulo
        ctx.beginPath();
        ctx.moveTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(canvas.width / 2, 0);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
    }, [])

    return (
        <div style={{ backgroundColor: 'transparent', margin: 0, padding: 0, height: '17px' }} >
            <canvas style={{}} width="23" height="18" id="canvas"></canvas>
        </div>
    );
}

export default Triangle;
