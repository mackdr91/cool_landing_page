import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  fps?: number;
  fontSize?: number;
  opacity?: number;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({
  className = '',
  fps = 30,
  fontSize = 15,
  opacity = 0.95,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 1000 / fps;

    // Classic Matrix characters: Half-width Katakana + Numerals + Latin + Math
    const katakana = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ1234567890ABCDEFXYZ@#$%&*+-=<>';
    const characters = katakana.split('');

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let columns = Math.floor(width / fontSize);
    // drops stores current y coordinate (in character rows)
    let drops: number[] = [];
    // speeds stores relative velocity multiplier
    let speeds: number[] = [];
    // brightness factors
    let leadingGlyphs: string[] = [];

    const initGrid = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      speeds = [];
      leadingGlyphs = [];

      for (let i = 0; i < columns; i++) {
        // Random starting positions spread above and across the viewport
        drops[i] = Math.floor(Math.random() * -50);
        speeds[i] = 0.8 + Math.random() * 0.9;
        leadingGlyphs[i] = characters[Math.floor(Math.random() * characters.length)];
      }
    };

    initGrid();

    const handleResize = () => {
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Semi-transparent black overlay creates the trailing fade effect
      ctx.fillStyle = 'rgba(5, 8, 7, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px "Fira Code", monospace`;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Pick a random glyph
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Distance from mouse for interactive ripple
        const distToMouse = Math.hypot(x - mouseX, y - mouseY);
        const isNearMouse = distToMouse < 90;

        if (y > 0 && y < height + 40) {
          // Draw bright leading head glyph
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#bef264'; // vibrant lime glow

          if (isNearMouse) {
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 18;
            ctx.shadowColor = '#a3e635';
          } else {
            // Bright tip of the stream
            ctx.fillStyle = '#ecfccb';
          }

          ctx.fillText(leadingGlyphs[i] || char, x, y);

          // Draw the preceding character in glowing lime green
          const prevY = y - fontSize;
          if (prevY > 0) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#65a30d';
            ctx.fillStyle = isNearMouse ? '#d9f99d' : '#84cc16';
            ctx.fillText(char, x, prevY);
          }

          // Reset shadow for performance
          ctx.shadowBlur = 0;
        }

        // Randomly morph the leading glyph
        if (Math.random() > 0.85) {
          leadingGlyphs[i] = characters[Math.floor(Math.random() * characters.length)];
        }

        // Increment drop
        drops[i] += speeds[i];

        // Reset column when it passes the bottom with randomized respawn delay
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = 0.8 + Math.random() * 0.9;
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [fps, fontSize, opacity]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full pointer-events-auto"
        style={{ opacity }}
      />
      {/* Subtle radial vignette gradient to blend matrix rain naturally */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050807]/50 to-[#050807] pointer-events-none" />
      {/* Bottom fade out into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050807] via-[#050807]/80 to-transparent pointer-events-none" />
      {/* Scanline overlay effect */}
      <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />
    </div>
  );
};
