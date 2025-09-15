import { useEffect, useRef } from "react";

const NODE_COUNT = 32;
const EDGE_DISTANCE = 140;

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export const LightBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodes = useRef(
        Array.from({ length: NODE_COUNT }, () => ({
            x: random(0, window.innerWidth),
            y: random(0, window.innerHeight),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5),
            r: random(2, 5),
        }))
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationId: number;

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        function animate() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            for (const node of nodes.current) {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            }

            for (let i = 0; i < nodes.current.length; i++) {
                for (let j = i + 1; j < nodes.current.length; j++) {
                    const a = nodes.current[i];
                    const b = nodes.current[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < EDGE_DISTANCE) {
                        ctx.save();
                        ctx.globalAlpha = 1 - dist / EDGE_DISTANCE;
                        ctx.strokeStyle = "#a3a3a3";
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            for (const node of nodes.current) {
                ctx.save();
                ctx.shadowColor = "#bdbdbd";
                ctx.shadowBlur = 8;
                ctx.fillStyle = "#e0e7ef";
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
};