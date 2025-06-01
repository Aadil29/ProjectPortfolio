// Helper function to check if media item is a video
export const isVideo = (src) => {
  return (
    src.toLowerCase().endsWith(".mp4") ||
    src.toLowerCase().endsWith(".webm") ||
    src.toLowerCase().endsWith(".mov") ||
    src.toLowerCase().endsWith(".avi")
  );
};
