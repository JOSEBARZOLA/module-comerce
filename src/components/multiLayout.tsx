// File: MultiLayout.tsx
import "@/assets/sass/_multiLayout.scss";

function MultiLayout() {
  return (
    <div className="masonry-grid">
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i} className="masonry-item">
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default MultiLayout;
