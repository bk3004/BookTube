import type { ReactNode } from "react";
import type { BookId } from "@/lib/data";

type BookCoverProps = {
  bookId: BookId;
  title: string;
};

export function BookCover({ bookId, title }: BookCoverProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-[#111]">
      <div className="relative aspect-[3/4] h-[88%]">
        <CoverArt bookId={bookId} />
        <span className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 text-center text-[9px] font-medium tracking-[0.16em] text-white/90">
          {title}
        </span>
      </div>
    </div>
  );
}

function CoverArt({ bookId }: { bookId: BookId }) {
  switch (bookId) {
    case "moby-dick":
      return (
        <FaceCover background="#3d8fd4">
          <rect x="54" y="58" width="18" height="18" rx="3" fill="white" />
          <rect x="108" y="58" width="18" height="18" rx="3" fill="white" />
          <path d="M78 108c8 8 26 8 34 0" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "1984":
      return (
        <FaceCover background="#111111">
          <circle cx="90" cy="72" r="22" fill="#e10600" />
          <circle cx="90" cy="72" r="11" fill="white" />
          <circle cx="90" cy="72" r="5" fill="#111" />
          <text
            x="90"
            y="122"
            textAnchor="middle"
            fill="#e10600"
            fontSize="16"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            1984
          </text>
        </FaceCover>
      );
    case "dracula":
      return (
        <FaceCover background="#8b1e3a">
          <path d="M72 88 L78 108 L66 108 Z" fill="white" />
          <path d="M108 88 L114 108 L102 108 Z" fill="white" />
        </FaceCover>
      );
    case "frankenstein":
      return (
        <FaceCover background="#2f9a3a">
          <rect x="34" y="78" width="14" height="8" rx="2" fill="#1d6b24" />
          <rect x="132" y="78" width="14" height="8" rx="2" fill="#1d6b24" />
          <circle cx="72" cy="74" r="7" fill="white" />
          <circle cx="108" cy="74" r="7" fill="white" />
          <path d="M74 118c10-8 22-8 32 0" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "alice":
      return (
        <FaceCover background="#c9b6f5">
          <circle cx="72" cy="74" r="8" fill="white" />
          <circle cx="108" cy="74" r="8" fill="white" />
          <path d="M70 112c12 14 28 14 40 0" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "dune":
      return (
        <FaceCover background="#e07a45">
          <circle cx="72" cy="72" r="8" fill="white" />
          <circle cx="108" cy="72" r="8" fill="white" />
          <path d="M72 112c10 12 26 12 36 0" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "gatsby":
      return (
        <FaceCover background="#16243f">
          <circle cx="70" cy="82" r="7" fill="#f2c14e" />
          <circle cx="110" cy="82" r="7" fill="#f2c14e" />
        </FaceCover>
      );
    case "hobbit":
      return (
        <FaceCover background="#2f9a3a">
          <circle cx="72" cy="74" r="8" fill="white" />
          <circle cx="108" cy="74" r="8" fill="white" />
          <path d="M72 112c10 12 26 12 36 0" stroke="#8b5a2b" strokeWidth="5" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "pride":
      return (
        <FaceCover background="#f48aa0">
          <circle cx="72" cy="74" r="7" fill="white" />
          <circle cx="108" cy="74" r="7" fill="white" />
          <path d="M82 112c6 8 16 8 22 0" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
    case "the-martian":
      return (
        <FaceCover background="#c45a27">
          <circle cx="90" cy="88" r="46" fill="#f0d2b0" />
          <ellipse cx="90" cy="92" rx="34" ry="26" fill="#1b2430" />
          <ellipse cx="78" cy="86" rx="8" ry="5" fill="#7ecbff" opacity="0.7" />
        </FaceCover>
      );
    case "project-hail-mary":
      return (
        <FaceCover background="#e3b341">
          <circle cx="70" cy="78" r="9" fill="#1b2430" />
          <circle cx="110" cy="78" r="9" fill="#1b2430" />
          <circle cx="73" cy="76" r="3" fill="white" />
          <circle cx="113" cy="76" r="3" fill="white" />
          <path d="M70 118c12 16 28 16 40 0" stroke="#1b2430" strokeWidth="5" fill="none" strokeLinecap="round" />
        </FaceCover>
      );
  }
}

function FaceCover({
  background,
  children,
}: {
  background: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox="0 0 180 240" className="h-full w-full" aria-hidden="true">
      <rect width="180" height="240" rx="16" fill={background} />
      {children}
    </svg>
  );
}
