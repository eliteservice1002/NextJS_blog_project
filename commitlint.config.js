module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", ["lower-case", "pascal-case"]],
    "subject-case": [2, "always", ["sentence-case"]],
  },
};
