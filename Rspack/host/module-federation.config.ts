export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    remote: "remote@http://localhost:8081/remote.js",
  },
  shared: ["react", "react-dom"],
};
