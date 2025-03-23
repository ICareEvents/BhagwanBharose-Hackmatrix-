const api = {
    get: async (url) => {
      const response = await fetch(`http://localhost:8080${url}`);
      return response.json();
    },
    post: async (url, data) => {
      const response = await fetch(`http://localhost:8080${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };
  export default api;  