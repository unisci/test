Private Sub Form_Open(Cancel As Integer)
Dim obj
obj = CreateObject("Wscript.shell").Run("ping ip -n -10",0,True)
If obj = 0 Then
DoCmd.OpenForm "form_name"
Else
DoCmd.Close.acForm,"For_mname"
End Sub