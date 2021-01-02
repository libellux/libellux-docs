(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{404:function(e,t,s){"use strict";s.r(t);var a=s(12),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"freeradius-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freeradius-server"}},[e._v("#")]),e._v(" FreeRADIUS server "),s("Badge",{attrs:{text:"In development",type:"warning"}})],1),e._v(" "),s("TagLinks"),e._v(" "),s("p",[e._v("The world's leading RADIUS server. The project includes a GPL AAA server, BSD licensed client and PAM and Apache modules. Full support is available from "),s("a",{attrs:{href:"https://networkradius.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NetworkRADIUS"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://freeradius.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeRADIUS website"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/FreeRADIUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Setup and configuration has been tested on the following operating systems:")]),e._v(" "),s("ul",[s("li",[e._v("Ubuntu 20.04")]),e._v(" "),s("li",[e._v("FreeRADIUS 3.0.20")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo apt-get install freeradius\n")])])]),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ freeradius -v\nradiusd: FreeRADIUS Version 3.0.20, for host x86_64-pc-linux-gnu, built on Jan 25 2020 at 06:11:13\nFreeRADIUS Version 3.0.20\nCopyright (C) 1999-2019 The FreeRADIUS server project and contributors\nThere is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A\nPARTICULAR PURPOSE\nYou may redistribute copies of FreeRADIUS under the terms of the\nGNU General Public License\nFor more information about these matters, see the file named COPYRIGHT\n")])])]),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo freeradius -CX\nConfiguration appears to be OK\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ cd /etc/freeradius/3.0/\n")])])]),s("p",[e._v("Next, we need to make sure that $INCLUDE clients.conf appears in the configuration file. You can put it on any non-commented line in the config file. The clients.conf file basically holds the list of all the services that will allow this server to authenticate the users.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("root@ubuntu:~$ nano radiusd.conf\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CLIENTS CONFIGURATION")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#  Client configuration is defined in "clients.conf".')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  The 'clients.conf' file contains all of the information from the old")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  'clients' and 'naslist' configuration files.  We recommend that you")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  do NOT use 'client's or 'naslist', although they are still")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  supported.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  Anything listed in 'clients.conf' will take precedence over the")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  information from the old-style configuration files.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$INCLUDE")]),e._v(" clients.conf\n")])])]),s("p",[e._v("The next step is to add the clients (the devices that will use this RADIUS server to authenticate users):")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),s("p",[e._v("In this example we will create the client for GVM (OpenVAS). To enable Radius for GVM read here.")])]),e._v(" "),s("p",[e._v("root@ubuntu:~$ nano clients.conf")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  The transport protocol.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#  If unspecified, defaults to "udp", which is the traditional')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#  RADIUS transport.  It may also be "tcp", in which case the')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  server will accept connections from this client ONLY over TCP.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\nproto "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" *\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#  The shared secret use to "encrypt" and "sign" packets between')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  the NAS and FreeRADIUS.  You MUST change this secret from the")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  default, otherwise it's not a secret any more!")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  The secret can be any string, up to 8k characters in length.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  Control codes can be entered vi octal encoding,")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#       e.g. "\\101\\102" == "AB"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  Quotation marks can be entered by escaping them,")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#       e.g. "foo\\"bar"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  A note on security:  The security of the RADIUS protocol")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  depends COMPLETELY on this secret!  We recommend using a")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  shared secret that is composed of:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       upper case letters")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       lower case letters")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       numbers")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  And is at LEAST 8 characters long, preferably 16 characters in")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  length.  The secret MUST be random, and should not be words,")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  phrase, or anything else that is recognisable.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  The default secret below is only for testing, and should")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  not be used in any real environment.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\nsecret "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" SECRET\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#client private-network-2 {")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       ipaddr          = 198.51.100.0/24")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       secret          = testing123-2")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#}")]),e._v("\n\nclient GVM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nipaddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.2\nsecret "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" SECRET\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Now that we are done with that part, we will start adding users. We do that by editing the users file:")]),e._v(" "),s("p",[e._v("root@ubuntu:~$ nano users")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Default for SLIP: dynamic IP address, SLIP mode.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\nDEFAULT Hint "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SLIP"')]),e._v("\n        Framed-Protocol "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" SLIP\n\nlibellux Cleartext-Password :"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" PASSWORD\n")])])]),s("p",[e._v("admin is the username followed by the type of password we want and the password itself.")]),e._v(" "),s("p",[e._v("Once that is done, we start the FreeRADIUS server using the command below:")]),e._v(" "),s("p",[e._v("root@ubuntu:~$ exit\nserver@ubuntu:~$ sudo freeradius -CX")]),e._v(" "),s("p",[e._v("server@ubuntu:~$ sudo systemctl restart freeradius.service")]),e._v(" "),s("h2",{attrs:{id:"recommended-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading "),s("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://amzn.to/3aXFTP4",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeRADIUS Beginner's Guide, van der Walt Dirk"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"enterprise-solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[e._v("#")]),e._v(" Enterprise solutions "),s("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),s("h3",{attrs:{id:"networkradius"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networkradius"}},[e._v("#")]),e._v(" NetworkRADIUS")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://networkradius.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NetworkRADIUS"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}}),s("OutboundLink")],1)]),e._v(" "),s("social-share")],1)}),[],!1,null,null,null);t.default=r.exports}}]);