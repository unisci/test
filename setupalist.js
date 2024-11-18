使用任意方式编辑 /usr/lib/systemd/system/alist.service 并添加如下内容，其中 path_alist 为 AList 所在的路径


[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist server
Restart=on-failure
 
[Install]
WantedBy=multi-user.target


然后，执行 systemctl daemon-reload 重载配置，现在你可以使用这些命令来管理程序：

启动: systemctl start alist
关闭: systemctl stop alist
配置开机自启: systemctl enable alist
取消开机自启: systemctl disable alist
状态: systemctl status alist
重启: systemctl restart alist