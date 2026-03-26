const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Generic fetch handler
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "API Error");
  }
  return response.json();
};

// Get all metrics
export const fetchMetrics = async () => {
  try {
    const res = await fetch(`${BASE_URL}/metrics`);
    return await handleResponse(res);
  } catch (error) {
    console.error("Fetch Metrics Error:", error);
    return [];
  }
};

// Get system health
export const fetchHealth = async () => {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    return await handleResponse(res);
  } catch (error) {
    console.error("Health Check Error:", error);
    return { status: "unknown" };
  }
};

// Post new metric (future-ready)
export const postMetric = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/metrics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await handleResponse(res);
  } catch (error) {
    console.error("Post Metric Error:", error);
    return null;
  }
};
