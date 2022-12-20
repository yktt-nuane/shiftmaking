import GithubActionsReporter from 'vitest-github-actions-reporter'

export default {
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? new GithubActionsReporter()
      : 'default',
  },
}
