#!/bin/bash

function pac_mysql {
   local conn_string=$(kubectl get secrets aurora-rw -ojson | jq -r '.data."db.connection.string"'  | base64 -D)

   local auth_section=$(echo ${conn_string} | cut -d'@' -f1)
   local user=$(echo ${auth_section} | cut -d':' -f1)
   local pass=$(echo ${auth_section} | cut -d':' -f2)

   local host_and_port=$(echo $conn_string | sed 's/.*(\(.*\)).*/\1/')
   local host=$(echo ${host_and_port} | cut -d':' -f1)
   local port=$(echo ${host_and_port} | cut -d':' -f2)

   mysql -h ${host} -D pac -u ${user} -P $port --password=${pass}
}
