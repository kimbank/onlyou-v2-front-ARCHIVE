import React, { useRef, useEffect } from 'react';

const WatermarkedImage = ({ src, watermarkText }) => {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
      const parentWidth = parentRef.current.clientWidth;
      const ratio = image.height / image.width;
      const height = parentWidth * ratio;

      canvas.width = parentWidth;
      canvas.height = height;

      ctx.drawImage(image, 0, 0, parentWidth, height);
      addWatermark(ctx, watermarkText, parentWidth, height);
    };

    image.src = src;
  }, [src, watermarkText]);

  const addWatermark = (ctx, text, width, height) => {
    if (!ctx) return;

    ctx.font = 'bold 10px Pretendard';
    ctx.fillStyle = 'rgba(200, 200, 200, 0.1)';
    ctx.save();
    ctx.rotate(-45 * Math.PI / 180);

    const diagonal = Math.sqrt(width * width + height * height);
    for (let y = -diagonal; y < diagonal; y += 30) {
      for (let x = -diagonal; x < diagonal; x += 133) {
        ctx.fillText(text, x, y);
      }
    }

    ctx.restore();
  };

  return (
    <div ref={parentRef} style={{ width: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: 'auto', borderRadius: '6px', userSelect: 'none', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default WatermarkedImage;
