import { useCallback, useEffect } from 'react';
import "../assets/sass/_multiLayout.scss"

function MultiLayout() {
  const basicMasonry = useCallback(() => {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);

    const container = document.querySelector('#masonry-with-columns') as HTMLDivElement | null;
    if (!container) return; // evitamos null

    Array.from(container.children).forEach((child, i) => {
      if (child instanceof HTMLElement) { // 👈 aseguramos que es HTMLElement
        const order = i % numCols;
        child.style.order = `${order}`;
        colHeights[order] += child.clientHeight;
      }
    });

    container.style.height = Math.max(...colHeights) + 'px';
  }, []);

  useEffect(() => {
    basicMasonry();
  }, [basicMasonry]);

  return (
    <>
    {/*  
     <div className='masonry-with-columns' id='masonry-with-columns'>
      <div style={{ order: '0' }}>1</div>
      <div style={{ order: '1' }}>2</div>
      <div style={{ order: '2' }}>3</div>
      <div style={{ order: '0' }}>4</div>
      <div style={{ order: '1' }}>5</div>
      <div style={{ order: '2' }}>6</div>
      <div style={{ order: '0' }}>7</div>
      <div style={{ order: '1' }}>8</div>
      <div style={{ order: '2' }}>9</div>
      <div style={{ order: '0' }}>10</div>
      <div style={{ order: '1' }}>11</div>
      <div style={{ order: '2' }}>12</div>
      <div style={{ order: '0' }}>13</div>
      <div style={{ order: '1' }}>14</div>
      <div style={{ order: '2' }}>15</div>
    </div>  */}
    <div className='masonry-with-columns-2' id='masonry-with-columns-2'>
      <div>1</div>
      <div>2</div>
    </div>
    </>
  );
}

export default MultiLayout;
