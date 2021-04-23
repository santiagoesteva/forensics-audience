require("code-forensics").configure({
  repository: {
    rootPath: "../fulcrum-next",
    includePaths: ["src"],
    excludePaths: ["node_modules", "src/**/__tests__"],
  },
});
