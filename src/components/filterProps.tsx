import { useState, useRef, useEffect} from "react";
import type { ReactNode } from "react";
interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);
  return (
    <div className="py-2 border-bottom ms-3">
      <h6
        className="nav-link-text fw-bold"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        {title}
      </h6>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterSection;
