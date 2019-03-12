
#!/usr/bin/env bash

ng build --prod --base-href "https://github.io/EdenWoo/ngx-validate/"

sudo ngh --dir dist/ngx-validate-lib --no-silent
