#!/bin/bash

#MySQL Server Connection Details
MYSQL_USER="group5"
MYSQL_PASSWORD="MyriadsRumorsMuffing"
MYSQL_HOST="localhost"
MYSQL_DATABASE="temp"

# New User Details
NEW_USER="NEW_USER_USERNAME"
NEW_PASSWORD="NEW_USER_PASS"

# MySQL commands
MYSQL_COMMAND="mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} -h${MYSQL_HOST} -D${MYSQL_DATABASE}"

# Create MySQL User
${MYSQL_COMMAND} <<EOF
CREATE USER '${NEW_USER}'@'localhost' IDENTIFIED BY '${NEW_PASSWORD}';
GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${NEW_USER}'@'localhost';
FLUSH PRIVILEGES;
EOF

echo "MySQL user '${NEW_USER}' created with all privileges on database '${MYSQL_DATABASE}'."