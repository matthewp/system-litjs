# system-litjs

A SystemJS (and [StealJS](http://stealjs.com)) extension for loading literate JavaScript
files, written as Markdown. This allows you to write your code as documentation first, while
still having the advantage of being able to load dynamically.

## Install

```
bower install system-litjs --save-dev
```

## Use

You can now import any markdown file and it's JavaScript source will be converted into
a module.

```js
import foo from 'bar.md!litjs';

foo()
```

## License

MIT
