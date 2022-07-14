# Cucumber.js GitHub Actions Formatter

This formatter logs errors in a way that is recognised by GitHub Actions as [annotations](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks#types-of-status-checks-on-github).

## Install

The build targets Node 16.

```
$ npm i @ugzuzg/cucumber-github-actions-formatter
```

## Usage

```
$ cucumber-js -f @ugzuzg/cucumber-github-actions-formatter
```

Or use [Profiles](https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md)
