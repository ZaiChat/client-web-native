module.exports = {
  buildOptions: {
    out: "./target/build",
  },
  mount: {
    public: "/",
    "target/scala-2.13/zaichat-fastopt": "/",
    "src/main/resources": "/"
  },
}