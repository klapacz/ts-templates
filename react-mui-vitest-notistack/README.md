# Resources

- [`pnpm`](https://pnpm.io/installation)
- node ([`pnpm env use --global lts`](https://pnpm.io/cli/env))
- [`ni`, `nr`, `nx` utils (`pnpm i -g @antfu/ni`)](https://github.com/antfu/ni)

## Start development

```sh
ni     # install deps
nr dev # start vite dev server
```

## Lint code

```sh
nr lint           # run all linters
nr lint:something # checkout package.json['scripts'] for current list of linters
```

## Tests

```sh
nr test                   # run all tests once
nr test:dev               # run all tests and watch for changes
nr test:dev -t "TestName" # run tests witch label "TestName" and watch for changes
nr test:coverage          # run all tests once and collect coverage (it takes some time)
```