关闭文件资源管理器历史=gpedit\用户配置\管理模板\Windows组件\文件资源管理器\在文件资源管理器中关闭最近搜索条目的显示
关闭事件追踪器=gpedit\计算机配置\管理模板\系统\显示关闭事件追踪程序
删除此电脑的七个文件夹={
r = regedit
set ads ="计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace";
del  
{088e3905-0323-4b02-9826-5d99428e115f}
{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}
{24ad3ad4-a569-4530-98e1-ab02f9417aa8}
{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}
{d3162b92-9365-467a-956b-92703aca08af}
{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}
{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}
end process;
};
阻止edge浏览器自动登录：set://settings\帐户\电子邮件和账户\应用在使用此账户时需要询问我;
del settings\帐户\电子邮件和账户
删除并禁用运行窗口历史记录={
@regedit.exe://
del HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\*;
setting\隐私\允许Windows跟踪应用启动=OFF;
end;
};
Windows Server:
隐藏驱动器:
@regedit.exe://
计算机\HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
set {
"NoDrives REG_DWORD(32bits) 十进制"
A=1;
B=2;
C=4;
D=8;
E=16;
F=32;
G=64;
H=128;
I=256;
J=512;
K=1024;
L=2048;
M=4096;
N=8192;
O=16384;
P=32768;
Q=65536;
R=131072;
S=262144;
T=524288;
U=1048576;
V=2097152;
W=4194304;
X=8388608;
Y=16777216;
Z=33554432;
ALL=67108863;
shutdown -s -f -t 10;
finish};
end process;