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

The formatter produces very little output, though. You will most likely want to use another formatter together with this one.
There is a limitation in `cucumber-js` that only one formatter can output to stdout.
Use the following trick to work around that limitation by directing this formatter to a file descriptor of stdout:

```
$ cucumber-js -f @cucumber/pretty-formatter -f @ugzuzg/cucumber-github-actions-formatter:/proc/self/fd/1
```


## Example

![image](https://user-images.githubusercontent.com/1078004/179058332-f8fc7a8f-9ef7-4e6f-bd2f-6fdf3b136359.png)
