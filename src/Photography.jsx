import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const photos = [
  { src: "/photos/Img1.JPG" },
  { src: "/photos/Img2.JPG" },
  { src: "/photos/Img3.JPG" },
  { src: "/photos/Img4.jpg" },
  { src: "/photos/Img5.JPG" },
  { src: "/photos/Img6.JPG" },
  { src: "/photos/Img7.JPG" },
  { src: "/photos/Img8.JPG" },
  { src: "/photos/Img9.JPG" },
  { src: "/photos/Img10.jpeg" },
  { src: "/photos/Img11.JPG" },
  { src: "/photos/Img12.jpg" },
  { src: "/photos/Img13.jpeg" },
  { src: "/photos/Img14.jpeg" },
  { src: "/photos/Img15.jpeg" },
  { src: "/photos/Img16.jpeg" },
  { src: "/photos/Img17.jpeg" },
  { src: "/photos/Img18.jpeg" },
  { src: "/photos/Img19.jpeg" },
  { src: "/photos/Img20.JPG" },
  { src: "/photos/Img21.jpeg" },
  { src: "/photos/Img22.jpeg" },
  { src: "/photos/Img23.jpeg" },
  { src: "/photos/Img24.jpeg" },
  { src: "/photos/Img25.JPG" },
  { src: "/photos/Img26.JPG" },
  { src: "/photos/Img27.JPG" },
  { src: "/photos/Img28.JPG" },
  { src: "/photos/Img29.JPG" },
  { src: "/photos/Img30.jpg" },
  { src: "/photos/Img31.jpeg" },
  { src: "/photos/Img32.jpeg" },
  { src: "/photos/Img33.JPG" },
  { src: "/photos/Img34.jpeg" },
  { src: "/photos/Img35.jpeg" },
  { src: "/photos/Img36.JPG" },
  { src: "/photos/Img37.jpeg" },
  { src: "/photos/Img38.JPG" },
  { src: "/photos/Img39.jpeg" },
  { src: "/photos/Img40.JPG" },
  { src: "/photos/Img41.JPEG" },
  { src: "/photos/Img42.JPG" },
  { src: "/photos/Img43.jpeg" },
  { src: "/photos/Img44.JPEG" },
  { src: "/photos/Img45.JPEG" },
  { src: "/photos/Img46.JPEG" },
  { src: "/photos/Img47.JPEG" },
  { src: "/photos/Img48.JPEG" },
  { src: "/photos/Img49.JPEG" },
  { src: "/photos/Img50.JPG" },
  { src: "/photos/Img51.jpg" },
  { src: "/photos/Img52.jpg" },
  { src: "/photos/Img53.jpg" },
  { src: "/photos/Img54.jpg" },
  { src: "/photos/Img55.JPG" },
  { src: "/photos/Img56.JPG" },
  { src: "/photos/Img57.JPEG" },
  { src: "/photos/Img58.JPEG" },
];

const NUM_COLS = 3;

export default function Photography() {
  const [lightbox, setLightbox] = useState(null);
  const [columns, setColumns] = useState(() => Array.from({ length: NUM_COLS }, () => []));
  const colHeights = useRef(Array(NUM_COLS).fill(0));
  const assigned = useRef(new Set());

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);

  const prev = useCallback(() =>
    setLightbox((i) => (i - 1 + photos.length) % photos.length), []);
  const next = useCallback(() =>
    setLightbox((i) => (i + 1) % photos.length), []);

  const handleKey = useCallback((e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  }, [prev, next]);

  // When an image loads, assign it to the shortest column
  const onImageLoad = useCallback((index, e) => {
    if (assigned.current.has(index)) return;
    assigned.current.add(index);
    const { naturalWidth, naturalHeight } = e.target;
    const ratio = naturalHeight / naturalWidth;
    const shortest = colHeights.current.indexOf(Math.min(...colHeights.current));
    colHeights.current[shortest] += ratio;
    setColumns((prev) => {
      const next = prev.map((col) => [...col]);
      next[shortest] = [...next[shortest], { ...photos[index], index }].sort((a, b) => a.index - b.index);
      return next;
    });
  }, []);

  // Preload all images to get dimensions
  useEffect(() => {
    photos.forEach((p, i) => {
      const img = new Image();
      img.onload = (e) => onImageLoad(i, { target: img });
      img.src = p.src;
    });
  }, [onImageLoad]);

  return (
    <div className="min-h-screen bg-black text-white" onKeyDown={handleKey} tabIndex={-1}>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-cyan-300 transition text-sm">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <h1 className="text-lg font-semibold tracking-wide">Photography</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-3">Visual Work</p>
          <h2 className="text-4xl font-bold">📸 Through the Lens</h2>
          <p className="text-white/50 mt-3 max-w-xl text-sm leading-relaxed">
            A selection of photographs from campus, adventures and everyday moments.
          </p>
        </motion.div>

        {photos.length === 0 ? (
          <div className="border border-white/10 rounded-3xl p-16 text-center text-white/30">
            <p className="text-4xl mb-4">📷</p>
            <p className="text-sm">Photos coming soon — drop them in <code className="text-cyan-400">public/photos/</code></p>
          </div>
        ) : (
          /* Masonry grid — height-aware JS columns */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-start">
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3">
                {col.map(({ src, alt, index }) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => open(index)}
                  >
                    <img
                      src={src}
                      alt={alt || ""}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {alt && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm">{alt}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition"
              onClick={close}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-5 text-white/60 hover:text-white transition"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt || ""}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-5 text-white/60 hover:text-white transition"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>

            {/* Counter */}
            <p className="absolute bottom-5 text-white/40 text-sm">
              {lightbox + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
