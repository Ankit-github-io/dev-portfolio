import { useState, useEffect } from 'react';

/**
 * useHydration Hook
 * 
 * Custom hook to handle hydration issues in Next.js applications
 * Ensures components render properly on both server and client side
 * 
 * @returns {boolean} isHydrated - Whether the component has mounted on client
 * 
 * @example
 * ```tsx
 * const isHydrated = useHydration();
 * if (!isHydrated) return <LoadingSpinner />;
 * ```
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
} 