ʹ�����ⷽʽ�༭ /usr/lib/systemd/system/wikijs.service ������������ݣ�


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


Ȼ��ִ�� systemctl daemon-reload �������ã����������ʹ����Щ�������������

����: systemctl start wikijs
�ر�: systemctl stop wikijs
���ÿ�������: systemctl enable wikijs
ȡ����������: systemctl disable wikijs
״̬: systemctl status wikijs
����: systemctl restart wikijs