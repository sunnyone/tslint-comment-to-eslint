# README
[DEPRECATED]
Now [tslint-to-eslint-config](https://github.com/typescript-eslint/tslint-to-eslint-config) has a --comments option. This tool is not nesessary.
```sh
npx tslint-to-eslint-config --comments 'src/**/*.ts'
```

Replace tslint comments (like tslint:disable-nextline) to eslint comments.

CAUTION: This tool does not check lines are comments. Check diff carefully!

## Usage
```sh
$ yarn global add tslint-comment-to-eslint
```

```sh
$ tslint-comment-to-eslint 'src/**/*.ts'
```

## Example
```diff
-   // tslint:disable-next-line:no-floating-promises
+   // eslint-disable-next-line @typescript-eslint/no-floating-promises
```
