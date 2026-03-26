import { useEffect, useState, useCallback } from "react";
import { fetchMetrics } from "../utils/api";

const useMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data
  const loadMetrics = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchMetrics();
      setMetrics(data);
      setError(null);
    } catch (err) {
      setError("Failed to load metrics");
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto refresh every 10 sec
  useEffect(() => {
    loadMetrics();
    const interval = setInterval(loadMetrics, 10000);
    return () => clearInterval(interval);
  }, [loadMetrics]);

  return { metrics, loading, error, refresh: loadMetrics };
};

export default useMetrics;
