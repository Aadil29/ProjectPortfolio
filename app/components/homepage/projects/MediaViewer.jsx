// MediaViewer.jsx
"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Play,
  Pause,
} from "lucide-react";

// Get the public base path. This needs to be imported here to be used in the component.
// It will be '/ProjectPortfolio' in production on GitHub Pages, and '' in local development.
// This relies on the NEXT_PUBLIC_BASE_PATH being correctly set in next.config.js
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MediaViewer({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = prev === images.length - 1 ? 0 : prev + 1;
      return nextIdx;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = prev === 0 ? images.length - 1 : prev - 1;
      return nextIdx;
    });
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIdx = prev === images.length - 1 ? 0 : prev + 1;
      return nextIdx;
    });
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIdx = prev === 0 ? images.length - 1 : prev - 1;
      return nextIdx;
    });
  };

  const renderImage = (imageItem, isModal = false) => {
    const objectFitClass = "object-contain";

    return (
      <img
        src={`${BASE_PATH}${imageItem.src}`}
        alt={imageItem.alt}
        className={`w-full h-full ${objectFitClass} transition-transform duration-300`}
      />
    );
  };

  const renderThumbnail = (imageItem) => {
    return (
      <img
        src={`${BASE_PATH}${imageItem.src}`}
        alt={imageItem.alt}
        className="w-12 h-8 object-cover"
      />
    );
  };

  // If no images are provided, render nothing or a placeholder
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full relative group">
          {/* Fixed height container - change h-64 to your preferred height */}
          <div className="relative overflow-hidden rounded-lg bg-[#1a1443] border border-violet-600/30 h-64 w-full">
            {renderImage(images[currentImageIndex])}

            <button
              onClick={() => openModal(currentImageIndex)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Open image in modal"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          <p className="text-gray-400 text-xs text-center mt-2 max-h-24 overflow-y-auto custom-scrollbar">
            {images[currentImageIndex].caption}
          </p>

          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs z-10">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}

          {images.length > 1 && (
            <div className="flex justify-center mt-2 gap-1 overflow-x-auto custom-scrollbar">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                  }}
                  className={`flex-shrink-0 relative overflow-hidden rounded transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-[#16f2b3]"
                      : "hover:ring-2 hover:ring-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  {renderThumbnail(image)}
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-[#16f2b3]/20"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-20"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full flex-grow flex items-center justify-center relative bg-gray-900 rounded-lg overflow-hidden">
              {renderImage(images[modalImageIndex], true)}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
                    aria-label="Previous modal image"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
                    aria-label="Next modal image"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded text-sm z-10">
                  {modalImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            <div className="w-full max-w-6xl bg-gray-800 text-white px-4 py-3 rounded-b-lg mt-2">
              <p className="text-center text-sm lg:text-base max-h-24 overflow-y-auto custom-scrollbar">
                {images[modalImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MediaViewer;
