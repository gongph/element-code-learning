# build:utils

```js
{
  "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js"
}
```
这个命令的意思是，将 `src` 目录下除 `src/index.js` 之外的所有文件编译后输出到根目录下的 `lib` 文件夹下。

我们来把这条命令拆分下：

- [cross-env](https://www.npmjs.com/package/cross-env) 是一个跨平台用于定义环境变量的工具，`BABEL_ENV=utils` 就是它定义的一个环境变量（后面会讲到这个变量的用处）

使用之前需要先安装：

```bash
npm i cross-env -D # 或 yarn add cross-env -D
```

- [babel](https://www.npmjs.com/package/babel-cli) 是一个命令行工具，用于将 ES6+ 语法编译成 ES5。更多用法可以参考[Babel中文网](https://www.babeljs.cn/docs/usage/cli/)

使用之前需要先安装：

```bash
npm i babel-cli -D # 或 yarn add babel-cli -D
```

- `babel src --out-dir lib` 把 `src` 的所有文件编译后输出到 `lib` 下，注意路径都是相对根路径
- `--ignore src/index.js` 忽略 `src/index.js` 文件
- `--out-dir` 输出文件夹
- `--ignore` 忽略某个文件或文件夹

## BABEL_ENV

通过 `BABEL_ENV` 定义的变量可以在 `.babelrc` 文件中找到，打开这个文件：

```js{5}
{
  "presets": [["es2015", { "loose": true }]],
  "plugins": ["transform-vue-jsx"],
  "env": {
    "utils": {
      "plugins": [
        ["module-resolver", {
          "root": ["element-ui"],
          "alias": {
            "element-ui/src": "element-ui/lib"
          }
        }]
      ]
    }
  }
}
```

[这里](https://www.babeljs.cn/docs/usage/api/#options)有 `.babelrc` 所有的配置项，这里先说下 `env` 属性:

::: tip
`env` 表示不同环境的键的对象。例如，当环境变量 `BABEL_ENV` 设置为 `"production"` 时，可以像这样设置 `{ env: { production: { /* specific options */ } } }`。如果 `BABEL_ENV` 未设置，那么 `NODE_ENV` 将被启用，如果 `NODE_ENV` 也未被设置，则默认为 `"development"` 环境。
:::

因此，我们通过上面的 `cross-env` 在 `env` 中我们设置了一个 `utils` 变量。 并且在变量里我们还用到了一个插件 [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver):

```bash
npm i babel-plugin-module-resolver -D
# or
yarn i babel-plugin-module-resolver -D
```
关于这个插件的文档介绍，可以[移步这里](https://github.com/tleunen/babel-plugin-module-resolver/blob/HEAD/DOCS.md#root)。我们来看下上面插件的两个配置是干嘛的：

- `root` 设置根目录，这里设置的是 `element-ui` 因为发布后的包名就是 `element-ui`
- `alias` 设置别名，意思就是把文件中用到的 `element-ui/src` 路径统统替换成 `element-ui/lib` ，将来可以提供给用户使用，比如我们在自己项目中使用的国际化配置：

```js
import locale from 'element-ui/lib/locale/lang/en'
```
就是这么来的。

## 总结

这条命令的目的其实就一个，即对外暴露工具给用户使用。