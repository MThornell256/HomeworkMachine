const liveServer = require("live-server");

// https://www.npmjs.com/package/live-server#usage-from-node

var params = {
    port: 8080,
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    mount: [['/auth', './index.html']], // Mount a directory to a route.
};

liveServer.start(params);