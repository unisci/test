start setup minio
mkdir /web/minio/data

# set env
/etc/profile

export MINIO_ROOT_USER=<user>
export MINIO_ROOT_PASSWORD=<pwd>

#bash:
# source etc/profile
./minio server /web/minio/data --console-address ":<port>"

/usr/lib/systemd/system/minio.service

[Unit]
Description=minio
After=network.target
AssertFileIsExecutable=/web/minio/minio
 
[Service]
Type=simple
Environment="MINIO_ROOT_USER=<user>" "MINIO_ROOT_PASSWORD=<pwd>"
WorkingDirectory=/web/minio/
ExecStart=/web/minio/minio server /web/minio/data/ --console-address ":<port>"
Restart=on-failure
 
[Install]
WantedBy=multi-user.target

#bash:
systemctl daemon-reload 重载配置
启动: systemctl start minio
关闭: systemctl stop minio
配置开机自启: systemctl enable minio
取消开机自启: systemctl disable minio
状态: systemctl status minio
重启: systemctl restart minio