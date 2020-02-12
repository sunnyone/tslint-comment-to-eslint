# README
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
