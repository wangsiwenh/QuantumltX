/*
**********************
QuantumultX :
**********************
[rewrite_local]
# Remove ADs
^(http|https):\/\/[\w-]+\.fengread\.com\/tuwen\/appads\/ url reject-200
https?:\/\/www\.fengread\.com\/(tuwen\/apktw\/bookv5|ebookreader\/fyhuserv5\/userinfo) url script-response-body https://raw.githubusercontent.com/wangsiwenh/QuantumltX/master/script/duzhe.js
[mitm] 
hostname= www.fengread.com

**********************
Surge 4.2.0+ :
**********************
[URL Rewrite]
# Remove ADs
^(http|https):\/\/[\w-]+\.fengread\.com\/tuwen\/appads\/ - reject
[Script]
duzhe = type=http-response,pattern=https?:\/\/www\.fengread\.com\/(tuwen\/apktw\/bookv5|ebookreader\/fyhuserv5\/userinfo),script-path=https://raw.githubusercontent.com/wangsiwenh/QuantumltX/master/script/duzhe.js, requires-body=true, timeout=10
[mitm] 
hostname= www.fengread.com

************************
Loon 2.1.0+ :
************************
[URL Rewrite]
# Remove ADs
^(http|https):\/\/[\w-]+\.fengread\.com\/tuwen\/appads\/ - reject
[Script]
http-response https?:\/\/www\.fengread\.com\/(tuwen\/apktw\/bookv5|ebookreader\/fyhuserv5\/userinfo) script-path=https://raw.githubusercontent.com/wangsiwenh/QuantumltX/master/script/duzhe.js, requires-body=true, timeout=10, tag=duzhe
[mitm] 
hostname= www.fengread.com

*/
var body = $response.body;
body=body.replace(/price\":\"(.*?)\"/g,'price":\"0\"').replace(/isvip\":\"(.*?)\"/g,'isvip":\"1\"').replace(/vip\_type\":\"(.*?)\"/g,'vip\_type":\"1\"');
$done({body});
