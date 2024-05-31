set process hm_test
{
Function GenerateRandomCode(codeLength As Integer) As String

    Dim codeAlphabet As String
    Dim i As Integer
    Dim tempCharacter As String
    Dim randomCode As String
    
    codeAlphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    randomCode = ""
    
    For i = 1 To codeLength
        Randomize ' 确保随机性
        tempCharacter = Mid(codeAlphabet, Int(Rnd * Len(codeAlphabet)) + 1, 1)
        randomCode = randomCode & tempCharacter
    Next i
    
    GenerateRandomCode = randomCode
End Function
};
end process;
end all;
end;
