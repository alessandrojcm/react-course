module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'pics',
        'seasons',
        'monorepo',
        'youtube-explorer',
        'songs',
        'posts',
        'streamy',
        'translate',
        'todos',
      ],
    ],
    'subject-case': [2, 'always', 'lowerCase'],
  },
};
