export default {
  async fetch(request, env) {
    const auth = request.headers.get("Authorization");

  if (!auth || !auth.startsWith("Basic ")) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="ORID Preview"',
      },
    });
  }

  const encoded = auth.split(" ")[1];
  const decoded = atob(encoded);
  const [username, password] = decoded.split(":");

  if (username !== "orid" || password !== env.ORID_PASSWORD) {
    return new Response("Incorrect username or password", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="ORID Preview"'
      },
    });
  }

  return env.ASSETS.fetch(request);
  },
};
