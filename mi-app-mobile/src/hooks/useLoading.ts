import { useCallback, useEffect, useState } from 'react';

export function useLoading(initial = false) {
  const [loading, setLoading] = useState(initial);

  const startLoading = useCallback((delay = 900) => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!initial) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timeoutId);
  }, [initial]);

  return { loading, setLoading, startLoading };
}
