set process cpu_test
{
Function GetCpuSerialNumber() As String
On Error GoTo testa
    Dim objWmiService As Object
    Dim colItems As Object
    Dim item As Object
    
    ' 创建 WMI Service 对象
    Set objWmiService = GetObject("winmgmts:\\.\root\cimv2")
    
    ' 查询 CPU 信息
    Set colItems = objWmiService.ExecQuery("SELECT * FROM Win32_Processor", , 48)
    
    For Each item In colItems
GetCpuSerialNumber = item.ProcessorId
    Next
        Exit Function
testa:
GetCpuSerialNumber = "N/A"
End Function
};
end process;
end all;
end;