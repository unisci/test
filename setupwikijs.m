使用任意方式编辑 /usr/lib/systemd/system/wikijs.service 并添加如下内容，


[Unit]
Description=Wiki.js
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/node server
Restart=always
# Consider creating a dedicated user for Wiki.js here:
User=nobody
Environment=NODE_ENV=production
WorkingDirectory=/web/wikijs

[Install]
WantedBy=multi-user.target


然后，执行 systemctl daemon-reload 重载配置，现在你可以使用这些命令来管理程序：

启动: systemctl start wikijs
关闭: systemctl stop wikijs
配置开机自启: systemctl enable wikijs
取消开机自启: systemctl disable wikijs
状态: systemctl status wikijs
重启: systemctl restart wikijs
