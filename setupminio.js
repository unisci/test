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
systemctl daemon-reload ��������
����: systemctl start minio
�ر�: systemctl stop minio
���ÿ�������: systemctl enable minio
ȡ����������: systemctl disable minio
״̬: systemctl status minio
����: systemctl restart minio