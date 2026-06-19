
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        if (!baseUrl) {
          console.error('❌ Missing NEXT_PUBLIC_BASE_URL');
          setLoading(false);
          return;
        }

        const res = await fetch(`${baseUrl}/api/gallery`);

        if (!res.ok) {
          console.error('❌ API error:', res.status);
          setLoading(false);
          return;
        }

        const contentType = res.headers.get('content-type');

        // ❌ If backend returns HTML (your current issue)
        if (!contentType || !contentType.includes('application/json')) {
          const text = await res.text();
          console.error('❌ Expected JSON but got:', text);
          setLoading(false);
          return;
        }

        const data = await res.json();

        // ✅ Handle different backend shapes safely
        let imgArray: string[] = [];

        if (Array.isArray(data)) {
          imgArray = data.map((item: any) => item.image);
        } else if (Array.isArray(data?.data)) {
          imgArray = data.data.map((item: any) => item.image);
        } else if (Array.isArray(data?.images)) {
          imgArray = data.images;
        }

        setImages(imgArray);
      } catch (err) {
        console.error('❌ Fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-10">

      {/* HEADER */}
      <h1 className="text-center text-4xl font-bold mb-10">
        IRF Gallery
      </h1>

      {/* LOADING STATE */}
      {loading && (
        <p className="text-center text-gray-500">
          Loading images...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && images.length === 0 && (
        <p className="text-center text-red-500">
          No images found or API error.
        </p>
      )}

      {/* GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openImage(i)}
            className="mb-5 break-inside-avoid cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image
                src={img}
                alt={`gallery-${i}`}
                width={600}
                height={600}
                className="w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white"
          >
            <X />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 text-white"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt="preview"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 text-white"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
}