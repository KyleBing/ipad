#!/bin/bash
cd /var/www/html/tools/ &&
rm -Rf ipad/* &&
mv ../ipad-*.zip ./ipad &&
cd ipad &&
unzip ipad-* &&
rm -f ipad-*.zip
echo 'iPad deploy finished.'
