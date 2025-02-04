import { useState, useEffect } from 'react';

export const useModelViewer = (modelUrl) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!modelUrl) return;

    const modelViewer = document.querySelector('model-viewer');
    if (!modelViewer) return;

    const handleLoad = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleError = () => {
      setIsLoading(false);
      setError('Failed to load 3D model');
    };

    modelViewer.addEventListener('load', handleLoad);
    modelViewer.addEventListener('error', handleError);

    return () => {
      modelViewer.removeEventListener('load', handleLoad);
      modelViewer.removeEventListener('error', handleError);
    };
  }, [modelUrl]);

  return { isLoading, error };
}; 