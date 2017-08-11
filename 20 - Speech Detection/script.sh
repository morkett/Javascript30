#!/bin/bash

#chmod +x script.sh
#    ./script.sh

echo "Coping package.json..."

cp ../package.json package.json
echo "Coping gulpfile.js"

cp ../gulpfile.js gulpfile.js

echo "renaming index"

mv index-START.html index.html

echo "npm install"

npm install

gulp


# chmod +x script.sh ./script.sh
