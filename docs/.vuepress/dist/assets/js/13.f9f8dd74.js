(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{375:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"openvas-vulnerability-assessment-scanner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openvas-vulnerability-assessment-scanner"}},[t._v("#")]),t._v(" OpenVAS Vulnerability Assessment Scanner")]),t._v(" "),a("TagLinks"),t._v(" "),a("p",[t._v("OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenVAS website"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/greenbone/openvas",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Setup and configuration has been tested on following OS with version:")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu- 16.04, 18.04, 20.04, VMware ESXi 6.7.0")]),t._v(" "),a("li",[t._v("GVM-9 (OpenVAS-9), OpenVAS 20.8.0 (source edition), GCE 6.0.7 (Virtual Appliance)")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("h2",{attrs:{id:"virtual-appliance-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-appliance-installation"}},[t._v("#")]),t._v(" Virtual Appliance installation")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.greenbone.net/en/install_use_gce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download the latest version"),a("OutboundLink")],1),t._v(" of GCE (Greenbone Community Edition).")]),t._v(" "),a("h3",{attrs:{id:"minimum-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[t._v("#")]),t._v(" Minimum requirements")]),t._v(" "),a("ul",[a("li",[t._v("2 CPU")]),t._v(" "),a("li",[t._v("4096 MB memory")]),t._v(" "),a("li",[t._v("18 GB storage")]),t._v(" "),a("li",[t._v("Guest OS: Other 3.x Linux (64-bit)")])]),t._v(" "),a("h2",{attrs:{id:"install-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-from-source"}},[t._v("#")]),t._v(" Install from source")]),t._v(" "),a("h2",{attrs:{id:"install-from-repo-deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-from-repo-deprecated"}},[t._v("#")]),t._v(" Install from repo (deprecated)")]),t._v(" "),a("p",[t._v("First add the OpenVAS PPA repository to our server.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo add-apt-repository ppa:mrazavi/openvas\n")])])]),a("p",[t._v("Next we need to update and install the main packages.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo apt-get update\n$ sudo apt-get install openvas9\n")])])]),a("p",[t._v("We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo apt-get install libopenvas9-dev\n$ sudo greenbone-nvt-sync\n$ sudo greenbone-scapdata-sync\n$ sudo greenbone-certdata-sync\n")])])]),a("p",[t._v("To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo nano /usr/local/bin/openvas-update\n")])])]),a("p",[t._v("Add the following content to the file.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("/usr/sbin/greenbone-nvt-sync\n/usr/sbin/greenbone-certdata-sync\n/usr/sbin/greenbone-scapdata-sync\n/usr/sbin/openvasmd --update --verbose --progress\n/etc/init.d/openvas-manager restart\n/etc/init.d/openvas-scanner restart\n")])])]),a("p",[t._v("Save the file and make it executable.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo chmod a+x /usr/local/bin/openvas-update\n")])])]),a("p",[t._v("We will add the update script to cron with a nightly frequency.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Nightly 0 0 * * * root /usr/local/bin/openvas-update\n")])])]),a("h2",{attrs:{id:"openvas-behind-nginx-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openvas-behind-nginx-proxy"}},[t._v("#")]),t._v(" OpenVAS behind NGINX Proxy")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('$ sudo nano /etc/default/openvas-gsa\n\n# Defaults for Greenbone Security Assistant initscript\n# sourced by /etc/init.d/openvas-gsa\n# installed at /etc/default/openvas-gsa by the maintainer scripts\n\n# To disable HTTPS:\n#\n#HTTP_ONLY=1\n\n# To allow <host> as hostname/address part of a Host header:\n#\nALLOW_HEADER_HOST=openvas.example.com\n\n# To enable http redirection:\n#\nHTTP_REDIRECT=1\n\n# To set listening address:\n#\nLISTEN_ADDRESS="127.0.0.1"\n\n# To set listening port number:\n#\nPORT_NUMBER=4000\n')])])]),a("p",[t._v("Restart openvas-gsa "),a("code",[t._v("sudo systemctl restart openvas-gsa")]),t._v(". Edit the NGINX configuration to fit the environment.")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" openvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL CERTIFICATES")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA512"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA512"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_dhparam")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dhparams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Frame"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMEORIGIN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("XSS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Protection "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1; mode=block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nosniff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("charset")]),t._v(" utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   REMOTE_HOST      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("FORWARDED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROTOCOL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ico "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_not_found")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("robots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_not_found")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("well"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("known"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo systemctl reload nginx.service\n")])])]),a("social-share")],1)}),[],!1,null,null,null);s.default=n.exports}}]);