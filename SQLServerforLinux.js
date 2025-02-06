#SYSTEM ENV = CentOS Linux
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2019.repo

sudo yum install -y mssql-server

sudo /opt/mssql/bin/mssql-conf setup

2

SA_PWD="sa_pwd"

systemctl status mssql-server

curl https://packages.microsoft.com/config/rhel/7/prod.repo | sudo tee /etc/yum.repos.d/mssql-release.repo

sudo yum install -y mssql-tools18 unixODBC-devel

sqlcmd -S localhost -U sa -P 'sa_pwd'