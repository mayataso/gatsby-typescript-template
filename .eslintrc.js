module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["regexp"],
  extends: ["plugin:regexp/recommended", "prettier"],
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: ["builtin", "external"],
        alphabetize: { order: "asc", caseInsensitive: true },
        warnOnUnassignedImports: true,
      },
    ],
  },
}
