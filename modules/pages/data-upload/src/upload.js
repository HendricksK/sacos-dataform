import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit();

// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
octokit.rest.repos
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
  });