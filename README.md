# grunt-local-typescript

> Compile ts files with local installed TypeScript

You can pass Compiler Options to TypeScript (TSC) CLI
https://www.typescriptlang.org/docs/handbook/compiler-options.html

```js
grunt.initConfig({
  local_typescript: {
    options: {
      typescript: 'node_modules/.bin/tsc',
    },
    dev: {
      options: {
        'project': 'path/to/tscondig.json'
      }
    }
  }
},
});
```
