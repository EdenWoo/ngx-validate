#!/usr/bin/env bash

cd projects/ngx-validate

npm --no-git-tag-version version patch

ng build ngx-validate --prod

cd ../../dist/ngx-validate

npm publish

cd ../../

git add .

git commit -m "new version published"

git push
