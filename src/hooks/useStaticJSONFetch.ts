// src/hooks/useStaticJSONFetch.ts
import { useState, useEffect } from 'react';

function useStaticJSONFetch<T>(jsonPath: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true); // Reset loading state on path change
    setError(null);   // Reset error state on path change
    fetch(jsonPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar ${jsonPath}: ${response.statusText}`); // Spanish error
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, [jsonPath]);

  return { data, loading, error };
}

export default useStaticJSONFetch;
