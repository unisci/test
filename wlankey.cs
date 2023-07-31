>>>start wlan net pwd putout
{
    su administrator;
    cmd{
        netsh wlan shlw profiles;
        netsh wlan show profiles <nameid> key = clear;
    };
};
end process;
end all;
end;