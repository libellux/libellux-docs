---
title: Greenbone Vulnerability Manager
meta:
  - name: description
    content: OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.
noGlobalSocialShare: true
tags: ["vulnerability", "scanner", "security"]
---

# Greenbone Vulnerability Manager (OpenVAS)

<TagLinks />

OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.

[GVM website](https://www.greenbone.net/en/vulnerability-management/) [OpenVAS website](https://www.openvas.org/) [GitHub](https://github.com/greenbone/openvas)

Setup and configuration has been tested on the following operating systems:

* Ubuntu- 16.04, 18.04, 20.04, CentOS 8
* GVM 20.08 for Debian 10 visit [sadsloth.net](https://sadsloth.net/post/install-gvm-20_08-src-on-debian/).
* GVM-9 (OpenVAS-9), Atomicorp 20.08 (RHEL 8, CentOS 8, Fedora 32), GVM- 20.08, 20.08.1, 21.04

::: warning NOTE
GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.
:::

## Configuration files

::: tip INFO
The lines in the "script" below has been used for testing and successfully configure GVM 20.08.1.
You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 21.04.
:::

* [20.08.1](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/20_08_1.sh)

## Prerequisites

Dependencies required to install GVM 21.04 from source on Ubuntu 20.04:

* `build-essential`
* `cmake`
* `gnutls-bin`
* `pkg-config`
* `glib2.0`
* `libgnutls28-dev`
* `libssh-dev`
* `libssl-dev`
* `libhiredis-dev`
* `redis-server`
* `libxml2-dev`
* `doxygen`
* `xsltproc`
* `libldap2-dev`
* `libgcrypt-dev`
* `libpcap-dev`
* `libgpgme-dev`
* `libradcli-dev`
* `graphviz`
* `bison`
* `libksba-dev`
* `libical-dev`
* `libpq-dev`
* `postgresql`
* `postgresql-contrib`
* `postgresql-server-dev-all`
* `libopenvas-dev`
* `heimdal-dev`
* `libpopt-dev`
* `xmltoman`
* `gcc-mingw-w64`
* `nmap`
* `npm`
* `nodejs`
* `libpthread-stubs0-dev`
* `clang-format`
* `libmicrohttpd-dev`
* `yarn`
* `virtualenv`
* `python3-paramiko`
* `python3-lxml`
* `python3-defusedxml`
* `python3-pip`
* `python3-psutil`
* `libnet1-dev`

## Install GVM 21.04 from source <Badge text="Rev 5" type="default"/>

Before we will install the latest version of Greenbone Vulnerability Manager (GVM) 21.04 make sure your system is up-to-date.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get upgrade
```

Proceed to install all the dependencies for GVM 21.04 on Ubuntu 20.04.

```
server@ubuntu:~$ sudo apt-get install build-essential
server@ubuntu:~$ sudo apt-get install cmake pkg-config glib2.0 gcc-mingw-w64 gnutls-bin libgnutls28-dev libxml2-dev libssh-dev libssl-dev libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc graphviz bison postgresql postgresql-contrib postgresql-server-dev-all heimdal-dev xmltoman nmap npm nodejs virtualenv python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil libnet1-dev
```

Once we've installed all the dependencies update our package manager.

```
server@ubuntu:~$ sudo apt-get update
```

Continue to install yarn using npm with the specified installation path.

```
server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/
```

### Set up GVM user profile

Create the profile for the GVM (Greenbone Vulnerability Manager) user and set the export path.

```
server@ubuntu:~$ echo 'export PATH="$PATH:/opt/gvm/bin:/opt/gvm/sbin:/opt/gvm/.local/bin"' | sudo tee -a /etc/profile.d/gvm.sh
server@ubuntu:~$ sudo chmod 0755 /etc/profile.d/gvm.sh
server@ubuntu:~$ source /etc/profile.d/gvm.sh
```

### Create dynamic loader configuration file

Now create the `gvm.conf` for the dynamic loader and define the gvm-libs path.

```
server@ubuntu:~$ sudo nano /etc/ld.so.conf.d/gvm.conf
# gmv-libs location
/opt/gvm/lib
```

### Create the GVM user

Once saved, proceed to create and configure the GVM user.

```
server@ubuntu:~$ sudo mkdir /opt/gvm
server@ubuntu:~$ sudo adduser gvm --disabled-password --home /opt/gvm/ --no-create-home --gecos ''
server@ubuntu:~$ sudo usermod -aG redis gvm
server@ubuntu:~$ sudo chown gvm:gvm /opt/gvm/
server@ubuntu:~$ sudo su - gvm
```

### Create source build directory

Run the command `pwd` and you should now be in the `/opt/gvm/` directory. Create the source directory, where we will download and build all required packages and set the package configuration path.

```
gvm@ubuntu:~$ mkdir src
gvm@ubuntu:~$ cd src/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
```

### Build GVM Libraries

Download and build the [GVM Libraries](https://github.com/greenbone/gvm-libs) version 21.04.

```
gvm@ubuntu:~$ git clone -b gvm-libs-21.04 --single-branch https://github.com/greenbone/gvm-libs.git
gvm@ubuntu:~$ cd gvm-libs/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ cd /opt/gvm/src/
```

### Build the OpenVAS Scanner

Download and build the [openvas-scanner (OpenVAS)](https://github.com/greenbone/openvas) version 21.04.

```
gvm@ubuntu:~$ git clone -b openvas-21.04 --single-branch https://github.com/greenbone/openvas.git
gvm@ubuntu:~$ cd openvas/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ exit
```

### Configure Redis

Next configure redis for the default GVM installation.

```
server@ubuntu:~$ sudo su
root@ubuntu:~$ export LC_ALL="C"
root@ubuntu:~$ ldconfig
root@ubuntu:~$ cp /etc/redis/redis.conf /etc/redis/redis.orig
root@ubuntu:~$ cp /opt/gvm/src/openvas/config/redis-openvas.conf /etc/redis/
root@ubuntu:~$ chown redis:redis /etc/redis/redis-openvas.conf
root@ubuntu:~$ echo "db_address = /run/redis-openvas/redis.sock" > /opt/gvm/etc/openvas/openvas.conf
root@ubuntu:~$ systemctl enable redis-server@openvas.service
root@ubuntu:~$ systemctl start redis-server@openvas.service
```

### Set up GVM user permissions

OpenVAS will be launched from an ospd-openvas process. The process need to be executed using root. Update the secure path in the sudoers file accordingly.

```{12}
root@ubuntu:~$ visudo
#
# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults        env_reset
Defaults        mail_badpass
Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin:/opt/gvm/sbin"
```

Additionally in the sudoers file add the following lines to give the GVM user privileges to execute GVM and the greenbone security assistant (gsad) without password.

```{5,6}
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

### Allow gvm user to run ospd-openvas and launch GVM with root privileges
gvm ALL = NOPASSWD: /opt/gvm/sbin/openvas
gvm ALL = NOPASSWD: /opt/gvm/sbin/gsad
```

### Update Network Vulnerability Tests

Once the updated sudoers file is saved, update Network Vulnerability Tests (NVT) from Greenbone Community Feed (this might take awhile).

```{3}
root@ubuntu:~$ exit
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ greenbone-nvt-sync
```

### Build the Greenbone Vulnerability Manager

Next download and build the [Greenbone Vulnerability Manager (GVM)](https://github.com/greenbone/gvmd) version 21.04.

```
gvm@ubuntu:~$ cd /opt/gvm/src/
gvm@ubuntu:~$ git clone -b gvmd-21.04 --single-branch https://github.com/greenbone/gvmd.git
gvm@ubuntu:~$ cd gvmd/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ exit
```

### Configure PostgreSQL database

For additional information see reference greenbone/gvmd [INSTALL.md](https://github.com/greenbone/gvmd/blob/master/INSTALL.md).

First make sure that the required dependencies have been installed (see [Prerequisites](#prerequisites)). Proceed to create a Postgres user and database.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ export LC_ALL="C"
postgres@ubuntu:/home/server$ createuser -DRS gvm
postgres@ubuntu:/home/server$ createdb -O gvm gvmd
```

Setup correct permissions.

```
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create role dba with superuser noinherit;
gvmd=# grant dba to gvm;
```

Create database extensions.

```
gvmd=# create extension "uuid-ossp";
gvmd=# create extension "pgcrypto";
gvmd=# exit
postgres@ubuntu:/home/server$ exit
```

### Generate GVM certificates

Once the database has been configured proceed and create the certificates.

```{2}
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ gvm-manage-certs -a
```

### Create GVM admin

Create the GVM administration user. Do not forget to change the password later.

::: warning NOTE
Do not use special characters in the password.
:::

```
gvm@ubuntu:~$ /opt/gvm/sbin/gvmd --create-user=admin --password=admin
User created.
```

Next, lets retrieve our administrators uuid.

```{2}
gvm@ubuntu:~$ gvmd --get-users --verbose
gvm@ubuntu:~$ admin 129a1661-138b-4017-25x1-xc0231f91222
```

Use the administration uuid and modify the gvmd settings as written below.

```
gvm@ubuntu:~$ gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value 129a1661-138b-4017-25x1-xc0231f91222
```

### Update Greenbone Feed Sync

Update the Greenbone Feed Synchronisation one at the time (this might take awhile).

```
gvm@ubuntu:~$ greenbone-feed-sync --type GVMD_DATA
gvm@ubuntu:~$ greenbone-feed-sync --type SCAP
gvm@ubuntu:~$ greenbone-feed-sync --type CERT
```

### Build the Greenbone Security Assistant

Proceed to download and build the [Greenbone Security Assistant (GSA)](https://github.com/greenbone/gsa) version 21.04.

```
gvm@ubuntu:~$ cd src/
gvm@ubuntu:~$ git clone -b gsa-21.04 --single-branch https://github.com/greenbone/gsa.git
gvm@ubuntu:~$ cd gsa/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ touch /opt/gvm/var/log/gvm/gsad.log
```

### Set up the Virtual environment with Python

First check the version of Python. If the version is not 3.8, add the repository and install the required version.

```
gvm@ubuntu:~$ exit
server@ubuntu:~$ python3 --version
server@ubuntu:~$ sudo add-apt-repository ppa:deadsnakes/ppa
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install python3.8 python3.8-dev
```

Next install the virtual environment.

```
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ cd /opt/gvm/src
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ virtualenv --python python3.8 /opt/gvm/bin/ospd-scanner/
gvm@ubuntu:~$ source /opt/gvm/bin/ospd-scanner/bin/activate
```

### Download and install the base class ospd (21.04) for scanner wrappers

Proceed to download and install [ospd](https://github.com/greenbone/ospd).

```
(ospd-scanner) gvm@ubuntu:~$ git clone -b ospd-21.04 --single-branch https://github.com/greenbone/ospd.git
(ospd-scanner) gvm@ubuntu:~$ mkdir /opt/gvm/var/run/ospd/
(ospd-scanner) gvm@ubuntu:~$ cd ospd/
(ospd-scanner) gvm@ubuntu:~$ pip3 install .
(ospd-scanner) gvm@ubuntu:~$ cd /opt/gvm/src
```

### Download and install ospd-openvas (21.04) for remote control

Install the [ospd-openvas](https://github.com/greenbone/ospd-openvas) for remote access.

```
(ospd-scanner) gvm@ubuntu:~$ git clone -b ospd-openvas-21.04 --single-branch  https://github.com/greenbone/ospd-openvas.git
(ospd-scanner) gvm@ubuntu:~$ cd ospd-openvas/
(ospd-scanner) gvm@ubuntu:~$ pip3 install .
```

### Set up systemd

Next setup the startup scripts. First, configure the Greenbone Manager startup script.

```
gvm@ubuntu:~$ exit
server@ubuntu:~$ sudo -i
root@ubuntu:~$ nano /etc/systemd/system/gvmd.service
```

Paste the following settings to the startup script.

```bash
[Unit]
Description=Open Vulnerability Assessment System Manager Daemon
Documentation=man:gvmd(8) https://www.greenbone.net
Wants=postgresql.service ospd-openvas.service
After=postgresql.service ospd-openvas.service

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/opt/gvm/var/run/gvmd.pid
WorkingDirectory=/opt/gvm
ExecStart=/opt/gvm/sbin/gvmd --osp-vt-update=/opt/gvm/var/run/ospd.sock
ExecReload=/bin/kill -HUP $MAINPID
KillMode=mixed
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

Once the first startup script is saved, proceed to create the script for the Greenbone Security Assistant (GSA).

```
root@ubuntu:~$ nano /etc/systemd/system/gsad.service
```

Paste the following setup to the GSA startup script.

```bash
[Unit]
Description=Greenbone Security Assistant (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target
Wants=gvmd.service

[Service]
Type=forking
PIDFile=/opt/gvm/var/run/gsad.pid
WorkingDirectory=/opt/gvm
ExecStart=/opt/gvm/sbin/gsad --drop-privileges=gvm
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

Create the systemd service script for ospd-openvas.

```
root@ubuntu:~$ nano /etc/systemd/system/ospd-openvas.service
```

Paste the following settings to the ospd-openvas startup script.

```bash
[Unit]
Description=Job that runs the ospd-openvas daemon
Documentation=man:gvm
After=network.target redis-server@openvas.service
Wants=redis-server@openvas.service

[Service]
Environment=PATH=/opt/gvm/bin/ospd-scanner/bin:/opt/gvm/bin:/opt/gvm/sbin:/opt/gvm/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
Type=forking
User=gvm
Group=gvm
WorkingDirectory=/opt/gvm
PIDFile=/opt/gvm/var/run/ospd-openvas.pid
ExecStart=/opt/gvm/bin/ospd-scanner/bin/python /opt/gvm/bin/ospd-scanner/bin/ospd-openvas --pid-file /opt/gvm/var/run/ospd-openvas.pid --unix-socket=/opt/gvm/var/run/ospd.sock --log-file /opt/gvm/var/log/gvm/ospd-scanner.log --lock-file-dir /opt/gvm/var/run/ospd/
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

Reload the system daemon and enable the startup script.

```
root@ubuntu:~$ systemctl daemon-reload
root@ubuntu:~$ systemctl enable gvmd
root@ubuntu:~$ systemctl enable gsad
root@ubuntu:~$ systemctl enable ospd-openvas
root@ubuntu:~$ systemctl start gvmd
root@ubuntu:~$ systemctl start gsad
root@ubuntu:~$ systemctl start ospd-openvas
```

Next check that all the services are running.

```{1,5,9}
root@ubuntu:~$ systemctl status gvmd
● gvmd.service - Open Vulnerability Assessment System Manager Daemon
     Loaded: loaded (/etc/systemd/system/gvmd.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2020-09-29 21:04:47 UTC; 15s ago
root@ubuntu:~$ systemctl status gsad
● gsad.service - Greenbone Security Assistant (gsad)
     Loaded: loaded (/etc/systemd/system/gsad.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2020-09-29 21:04:51 UTC; 28s ago
root@ubuntu:~$ systemctl status ospd-openvas
● ospd-openvas.service - Job that runs the ospd-openvas daemon
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2020-09-29 21:04:45 UTC; 48s ago
```

### Modify scanner

Before running vulnerability scans, also known as tasks, you need to modify the default OpenVAS scanner. Start with switching to your GVM user.

```
server@ubuntu:~$ sudo su - gvm
```

Next get the pre-exisiting scanners by running command below. Copy the UUID from the OpenVAS Default Scanner.

```{3}
gvm@ubuntu:~$ cd /opt/gvm/src/
gvm@ubuntu:~$ gvmd --get-scanners
08b69003-5fc2-4037-a479-93b440211c73  OpenVAS  /var/run/ospd/ospd.sock  0  OpenVAS Default
6acd0832-df90-11e4-b9d5-28d24461215b  CVE    0  CVE
```

Next run the modification command and attach the UUID to the scanner host socket.

```{1}
gvm@ubuntu:~$ gvmd --modify-scanner=08b69003-5fc2-4037-a479-93b440211c73 --scanner-host=/opt/gvm/var/run/ospd.sock
Scanner modified.
```

Login at your localhost e.g. `https://192.168.0.1` with the username `admin` and the chosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_login-2.png')" alt="GSA login">

Once logged in, go to the *Administration* tab and select *Feed Status*. You'll see that the update is in progress (this might take awhile). When the status changed to *current*, go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">

To run basic vulnerability scans and get hands-on approach to get started with OpenVAS check the [Running vulnerability scans](#running-vulnerability-scans) section.

## Install GVM 20.08 CentOS

[Atomicorp GVM package](https://github.com/Atomicorp/openvas) <Badge text="non-sponsored" type="default"/>

Check if SELinux is enabled.

```{2,7}
server@centos:~$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
```

If enabled proceed to disable SELinux by running the command below and update the SELinux configuration file.

```{1,9}
server@centos:~$ sudo setenforce 0
server@centos:~$ sudo nano /etc/selinux/config

# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=disabled
```

Save and reboot the system.

```
server@centos:~$ sudo shutdown -r now
```

Once the system rebooted control that SELinux been disabled.

```
server@centos:~$ sestatus
SELinux status:                 disabled
```

Continue and download the Atomicorp installer.

```{7,8}
server@centos:~$ wget -q -O - https://updates.atomicorp.com/installers/atomic | sudo sh

For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
```

Enable PowerTools and install extra packages.

```
server@centos:~$ sudo yum config-manager --set-enabled PowerTools
server@centos:~$ sudo yum install epel-release
```

Proceed and install GVM.

```
server@centos:~$ sudo yum install gvm
```

Finally run the GVM configuration script to setup GVM (this might take awhile).

```
server@centos:~$ sudo gvm-setup
```

Once the GVM setup been complete proceed to set the administrator password.

::: warning NOTE
Do not use special characters in the password.
:::

```{9,10}
Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
```

Login at your localhost e.g. `https://192.168.0.1` with the username `admin` and the chosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">

## Running vulnerability scans

There is several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.

### Unauthenticated scan

<br/>
<p align="center">
  <video width="600" controls poster="/img/icons/video.png" style="witdth:100%;height:auto;">
    <source src="/vids/openvas/unauthenticated_scan.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

Login to the Greenbone Security Assistant (GSA) e.g. `https://192.168.0.1`. Once logged in we will add our first target. Go the the *Configuration* menu in the top navigation and select *Targets*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_targets.png')" alt="GSA targets">

In the top left corner of the *Targets* view there's a starred document icon, click and select to create a *New Target*. Fill in the name of the target server e.g. *Ubuntu Client* and its IP address `192.168.0.2`. Leave the rest of the settings in default.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_target.png')" alt="GSA target">

Next we will create a task for unauthenticated targets (scans without SSH access). Go the *Scans* in the top menu and select *Tasks*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_tasks.png')" alt="GSA tasks">

Click the starred document icon in the top left corner of the *Tasks* view.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_task.png')" alt="GSA task">

Select a descriptive name for your task e.g. Unauthenticated scan. In the *Scan Targets* dropdown menu select your target we created before (Ubuntu Client). Leave the default settings and click save.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_task.png')" alt="GSA noauth task">

You will then be redirected back to the *Tasks* overview and our new task will be listed in the table below the graphs. To start the scan press the start button on the right side of the table.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_scan.png')" alt="GSA noauth scan">

### Authenticated scan

First make sure that you've generated SSH keys for your GVM client user e.g. `client@ubuntu`. Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine known hosts. Once you've established a secure communication between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to *Configuration* and select *Credentials*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_credentials.png')" alt="GSA credentials">

Next click the starred document in the top left corner to create your new credentials. Give the credentials a desciptive name with an optional comment. In the dropdown menu *Type*, select *Username + SSH key* and disallow insecure use and auto-generation. Add the username of the target host user followed by the password and upload the private key (e.g. id_rsa). Click save.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_newcredentials.png')" alt="GSA new credentials">

Go to the *Targets* section and either edit your [unauthenticated scan](#unauthenticated-scan) or create a new target. Set the host IP address and in the dropdown menu, under the *Credentials for authentication checks*, select your newly created SSH credential.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_target.png')" alt="GSA auth target">

Finally create a new task and select the target that we attached our credentials to and leave the default settings.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_task.png')" alt="GSA auth task">

## Two-factor authentication w/ privacyIDEA

To enforce two-factor authentication for Greenbone Security Assistant with privacyIDEA and YubiKey read the [Two-factor authentication w/ privacyIDEA and YubiKey](../privacyidea/README.md) chapter.

## Install OpenVAS-9 community version <Badge text="deprecated" type="warning"/>

First add the OpenVAS PPA repository to your server.

```
server@ubuntu:~$ sudo add-apt-repository ppa:mrazavi/openvas
```

Next we need to update and install the main packages.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install openvas9
```

We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.

```
server@ubuntu:~$ sudo apt-get install libopenvas9-dev
server@ubuntu:~$ sudo greenbone-nvt-sync
server@ubuntu:~$ sudo greenbone-scapdata-sync
server@ubuntu:~$ sudo greenbone-certdata-sync
```

To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.

```
server@ubuntu:~$ sudo nano /usr/local/bin/openvas-update
```

Add the following content to the openvas-update file.

```bash
/usr/sbin/greenbone-nvt-sync
/usr/sbin/greenbone-certdata-sync
/usr/sbin/greenbone-scapdata-sync
/usr/sbin/openvasmd --update --verbose --progress
/etc/init.d/openvas-manager restart
/etc/init.d/openvas-scanner restart
```

Save the file and make it executable.

```
server@ubuntu:~$ sudo chmod a+x /usr/local/bin/openvas-update
```

We will add the update script to cron with a nightly frequency.

```
Nightly 0 0 * * * root /usr/local/bin/openvas-update
```

## GVM behind NGINX Proxy

```
server@ubuntu:~$ sudo nano /etc/default/openvas-gsa
```

```bash
# Defaults for Greenbone Security Assistant initscript
# sourced by /etc/init.d/openvas-gsa
# installed at /etc/default/openvas-gsa by the maintainer scripts

# To disable HTTPS:
#
#HTTP_ONLY=1

# To allow <host> as hostname/address part of a Host header:
#
ALLOW_HEADER_HOST=openvas.example.com

# To enable http redirection:
#
HTTP_REDIRECT=1

# To set listening address:
#
LISTEN_ADDRESS="127.0.0.1"

# To set listening port number:
#
PORT_NUMBER=4000
```

Restart openvas-gsa `sudo systemctl restart openvas-gsa`. Edit the NGINX configuration to fit the environment.

``` nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name openvas.example.com;

    # SSL CERTIFICATES
    ssl_certificate /etc/nginx/ssl/openvas.example.com/server.crt;
    ssl_certificate_key /etc/nginx/ssl/openvas.example.com/server.key;

    ssl_protocols TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        proxy_set_header   Host             $http_host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   REMOTE_HOST      $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   X-FORWARDED-PROTOCOL $scheme;  
        proxy_pass https://127.0.0.1:4000;
    }

   location = /favicon.ico { access_log off; log_not_found off; }
   location = /robots.txt  { access_log off; log_not_found off; }

   access_log off;
   error_log  /var/log/nginx/openvas.example.com-error.log error;

   location ~ /\.(?!well-known).* {
       deny all;
    }
}
```

```
server@ubuntu:~$ sudo systemctl reload nginx.service
```

## Scheduled jobs

To keep the community feed up-to-date, first login as your GVM user.

```
server@ubuntu:~$ sudo su - gvm
```

Create the file that we will populate with the required commands.

```
gvm@ubuntu:~$ touch /opt/gvm/bin/openvas-update
```

Make the file executable.

```
gvm@ubuntu:~$ chmod a+x /opt/gvm/bin/openvas-update
```

Enter the commands that we will run daily.

```
gvm@ubuntu:~$ nano /opt/gvm/bin/openvas-update
```

```
/opt/gvm/bin/greenbone-nvt-sync
/opt/gvm/sbin/greenbone-feed-sync --type GVMD_DATA
/opt/gvm/sbin/greenbone-feed-sync --type SCAP
/opt/gvm/sbin/greenbone-feed-sync --type CERT
```

Edit the GVM users crontab and add the script we created to check for daily updates.

```
gvm@ubuntu:~$ crontab -e
```

```bash{25}
# Edit this file to introduce tasks to be run by cron.
#
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
#
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').
#
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
#
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
#
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
#
# For more information see the manual pages of crontab(5) and cron(8)
#
# m h  dom mon dow   command

0 0 * * * /opt/gvm/bin/openvas-update
```

## Troubleshooting

If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful [community forum](https://community.greenbone.net/).

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

### SEC_ERROR_INADEQUATE_KEY_USAGE

If receiving `SEC_ERROR_INADEQUATE_KEY_USAGE` and the browser blocks access to the local GVM server, proceed with removing the certificate. For example, in Firefox go to `about:preferences#privacy` and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.

### Failed to find interpreter for Python 3.7

If receiving `RuntimeError: failed to find interpreter for Builtin discover of python_spec='python3.7'` make sure you've followed the instructions to install the required 3.7 packages.

```
server@ubuntu:~$ sudo add-apt-repository ppa:deadsnakes/ppa
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install python3.7 python3.7-dev
```

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### The Greenbone Security Manager

The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.

[Greenbone Security Manager](https://www.greenbone.net/en/product-comparison/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
