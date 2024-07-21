/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["master"],
  plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      ["@semantic-release/changelog", {
          "changelogFile": "CHANGELOG.md"
      }],
      ["@semantic-release/git", {
        "assets": ["test.adoc", "file2.md","app/build.gradle", "CHANGELOG.md"],
        "message": "Release <%= nextRelease.version %> - <%= new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip ci]\n\n<%= nextRelease.notes %>"
      }],
    "@semantic-release/github",
  ],
};
