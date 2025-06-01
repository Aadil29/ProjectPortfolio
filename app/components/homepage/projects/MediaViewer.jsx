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
import { isVideo } from "./utils"; // Assuming this utility function exists and correctly identifies video files

// Get the public base path. This needs to be imported here to be used in the component.
// It will be '/ProjectPortfolio' in production on GitHub Pages, and '' in local development.
// This relies on the NEXT_PUBLIC_BASE_PATH being correctly set in next.config.js
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MediaViewer({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [isModalVideoPlaying, setIsModalVideoPlaying] = React.useState(false);

  const videoRef = React.useRef(null);
  const modalVideoRef = React.useRef(null);

  // Function to reset video states when changing main image
  const resetVideoState = (videoElementRef, setIsPlayingState) => {
    if (videoElementRef.current) {
      videoElementRef.current.pause();
      setIsPlayingState(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = prev === images.length - 1 ? 0 : prev + 1;
      resetVideoState(videoRef, setIsVideoPlaying);
      return nextIdx;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = prev === 0 ? images.length - 1 : prev - 1;
      resetVideoState(videoRef, setIsVideoPlaying);
      return nextIdx;
    });
  };

  const openModal = (index) => {
    resetVideoState(videoRef, setIsVideoPlaying); // Pause main video if playing
    setModalImageIndex(index);
    setIsModalOpen(true);
    setIsModalVideoPlaying(false); // Ensure modal video starts paused
  };

  const closeModal = () => {
    resetVideoState(modalVideoRef, setIsModalVideoPlaying); // Pause modal video if playing
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIdx = prev === images.length - 1 ? 0 : prev + 1;
      resetVideoState(modalVideoRef, setIsModalVideoPlaying); // Pause modal video if changing
      return nextIdx;
    });
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIdx = prev === 0 ? images.length - 1 : prev - 1;
      resetVideoState(modalVideoRef, setIsModalVideoPlaying); // Pause modal video if changing
      return nextIdx;
    });
  };

  const renderMedia = (mediaItem, isModal = false) => {
    const currentVideoRef = isModal ? modalVideoRef : videoRef;
    const objectFitClass = "object-contain";

    if (isVideo(mediaItem.src)) {
      return (
        <div className="relative w-full h-full">
          <video
            ref={currentVideoRef}
            className={`w-full h-full ${objectFitClass}`}
            onPlay={() =>
              isModal ? setIsModalVideoPlaying(true) : setIsVideoPlaying(true)
            }
            onPause={() =>
              isModal ? setIsModalVideoPlaying(false) : setIsVideoPlaying(false)
            }
            onEnded={() =>
              isModal ? setIsModalVideoPlaying(false) : setIsVideoPlaying(false)
            }
            controls
            loop={!isModal} // Loop main viewer video, not modal
          >
            {/* IMPORTANT FIX: Prepend BASE_PATH to video src */}
            <source src={`${BASE_PATH}${mediaItem.src}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      // For images, using a standard <img> tag, so explicitly prepend BASE_PATH
      // If you were using next/image here, it would generally handle BASE_PATH automatically,
      // but for consistency with video and robustness, this explicit prefix is fine.
      return (
        <img
          // IMPORTANT FIX: Prepend BASE_PATH to image src
          src={`${BASE_PATH}${mediaItem.src}`}
          alt={mediaItem.alt}
          className={`w-full h-full ${objectFitClass} transition-transform duration-300`}
        />
      );
    }
  };

  const renderThumbnail = (mediaItem) => {
    if (isVideo(mediaItem.src)) {
      return (
        <div className="relative w-12 h-8 bg-gray-800 rounded overflow-hidden">
          {/* IMPORTANT FIX: Prepend BASE_PATH to thumbnail video src */}
          <video className="w-full h-full object-cover">
            <source src={`${BASE_PATH}${mediaItem.src}`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-3 h-3 text-white" />
          </div>
        </div>
      );
    } else {
      return (
        <img
          // IMPORTANT FIX: Prepend BASE_PATH to thumbnail image src
          src={`${BASE_PATH}${mediaItem.src}`}
          alt={mediaItem.alt}
          className="w-12 h-8 object-cover"
        />
      );
    }
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
            {renderMedia(images[currentImageIndex])}

            <button
              onClick={() => openModal(currentImageIndex)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Open media in modal"
            >
              {/* Using a simple full-screen icon for both image and video for consistency */}
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
                    resetVideoState(videoRef, setIsVideoPlaying); // Pause main video if changing via thumbnail
                  }}
                  className={`flex-shrink-0 relative overflow-hidden rounded transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-[#16f2b3]"
                      : "hover:ring-2 hover:ring-gray-400"
                  }`}
                  aria-label={`View media ${index + 1}`}
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

      {isModalOpen && ( // Only render modal if there are images
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
              {renderMedia(images[modalImageIndex], true)}

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
