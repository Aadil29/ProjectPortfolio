"use client";

// app/components/helper/animation-lottie.jsx
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

// Dynamically import Lottie, disabling SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // This is the key: tells Next.js NOT to render it on the server
});

function AnimationLottie({ animationPath }) {
  // You might want to add a loading state or a fallback if Lottie takes time to load
  // For now, we'll keep it simple, but for production, consider a `loading` option in dynamic
  return <Lottie animationData={animationPath} loop={true} autoplay={true} />;
}

export default AnimationLottie;
