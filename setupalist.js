ʹ�����ⷽʽ�༭ /usr/lib/systemd/system/alist.service ������������ݣ����� path_alist Ϊ AList ���ڵ�·��


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


Ȼ��ִ�� systemctl daemon-reload �������ã����������ʹ����Щ�������������

����: systemctl start alist
�ر�: systemctl stop alist
���ÿ�������: systemctl enable alist
ȡ����������: systemctl disable alist
״̬: systemctl status alist
����: systemctl restart alist