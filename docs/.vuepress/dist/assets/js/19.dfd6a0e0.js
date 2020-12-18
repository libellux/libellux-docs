(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{391:function(t,e,a){"use strict";a.r(e);var s=a(12),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"privacyidea-authentication-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacyidea-authentication-server"}},[t._v("#")]),t._v(" privacyIDEA Authentication Server "),a("Badge",{attrs:{text:"In development",type:"warning"}})],1),t._v(" "),a("TagLinks"),t._v(" "),a("p",[t._v("privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two factor authentication.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.privacyidea.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("privacyIDEA website"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/privacyidea/privacyidea",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Setup and configuration has been tested on the following operating systems:")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu 18.04")]),t._v(" "),a("li",[t._v("PrivacyIDEA 3.0")])]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("h2",{attrs:{id:"install-community-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-community-edition"}},[t._v("#")]),t._v(" Install community edition "),a("Badge",{attrs:{text:"Rev 1",type:"default"}})],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ wget https://lancelot.netknights.it/NetKnights-Release.asc\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo gpg --import --import-options show-only --with-fingerprint NetKnights-Release.asc\npub rsa4096 2017-05-16  NetKnights GmbH <release@netknights.it>\nKey fingerprint = 0940 4ABB EDB3 586D EDE4  AD22 00F7 0D62 AE25 0082                   \n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo apt-key add NetKnights-Release.asc\nOK\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/bionic/stable\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),a("p",[t._v("If you prefer to use the Apache version you can install "),a("code",[t._v("apt-get privacyidea-apache2")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo apt-get update\nserver@ubuntu:~$ sudo apt-get install privacyidea-nginx\n             _                    _______  _______\n   ___  ____(_)  _____ _______ __/  _/ _ \\/ __/ _ |\n  / _ \\/ __/ / |/ / _ `/ __/ // // // // / _// __ |\n / .__/_/ /_/|___/\\_,_/\\__/\\_, /___/____/___/_/ |_|\n/_/                       /___/\n\nRunning online\n")])])]),a("h3",{attrs:{id:"administrator-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#administrator-account"}},[t._v("#")]),t._v(" Administrator account")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost\nAdmin admin was registered successfully.\n")])])]),a("p",[t._v("Once you've added the administrator account and followed the "),a("a",{attrs:{href:"#firewall-settings"}},[t._v("firewall settings")]),t._v(" you should be able to reach the web interface from "),a("code",[t._v("https://192.168.0.1")]),t._v(" and login as the admin user with your password.")]),t._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea_login.png",alt:"PrivacyIDEA login"}}),t._v(" "),a("h3",{attrs:{id:"create-first-realm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-first-realm"}},[t._v("#")]),t._v(" Create first realm")]),t._v(" "),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[t._v("#")]),t._v(" Firewall settings")]),t._v(" "),a("p",[t._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),a("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("UFW Settings")]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server@ubuntu:~$ sudo ufw allow 443 comment "PrivacyIDEA"\n')])])]),a("h2",{attrs:{id:"enterprise-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[t._v("#")]),t._v(" Enterprise solutions "),a("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),t._v(" "),a("h3",{attrs:{id:"privacyidea-enterprise-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacyidea-enterprise-edition"}},[t._v("#")]),t._v(" privacyIDEA Enterprise Edition")]),t._v(" "),a("p",[t._v("privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://netknights.it/en/produkte/privacyidea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NetKnights"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}}),a("OutboundLink")],1)]),t._v(" "),a("social-share")],1)}),[],!1,null,null,null);e.default=r.exports}}]);