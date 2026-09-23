export const mfConfig = {
  name: "remote",
  exposes: { "./Counter": "./src/Counter" },
  shared: ["react", "react-dom"],
};
