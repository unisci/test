setup aapanel
cd /www/server/panel/vhost/nginx
mkdir aname.cond
vim
server {              
    listen 80;    
    server_name <example.com.local>; 
    
    location / {        
        proxy_pass http://ip:port;
    } 
}