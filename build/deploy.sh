#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git config user.name 'gongph'
git config user.email 'gongph@foxmail.com'
git add -A
git commit -m 'deploy'

git push -f https://github.com/gongph/element-code-learning.git master:gh-pages

cd -