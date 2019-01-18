(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"构建命令行总览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建命令行总览","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建命令行总览")]),s._v(" "),n("p",[s._v("弄清楚 Element 各个目录结构的作用之后，接下来就是来大概了解下 "),n("code",[s._v("package.json")]),s._v(" 中的构建命令了。")]),s._v(" "),n("p",[s._v("打开根目录下的 "),n("code",[s._v("package.json")]),s._v(" ，找到 "),n("code",[s._v("scripts")]),s._v(" :")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装项目依赖")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bootstrap"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn || npm i"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件相关的构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:file"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主题相关的构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:theme"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 工具文件的相关构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:utils"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 umd 文件")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:umd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node build/bin/build-locale.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除目录")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clean"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 官网构建打包")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy:build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev:play"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 国际化构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i18n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node build/bin/i18n.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lint"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint src/**/* test/**/* packages/**/* build/**/* --quiet"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发布到 github")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pub"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js && sh build/deploy-faas.sh"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ karma start test/unit/karma.conf.js --single-run"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动化测试构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test:watch"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build:theme && karma start test/unit/karma.conf.js"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("接下来让我们一一说起，哦不，让我们从第二个命令开始学习，因为第一个没啥可说的。")])])}],!1,null,null,null);e.options.__file="command-line.md";t.default=e.exports}}]);