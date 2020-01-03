---
layout: article
title: "Using a Raspberry Pi 4 as a Plex Server"
subtitle: How to install a Plex server on a Raspberry Pi 4
permalink: /articles/Plex-Media-Server-on-Raspberry-Pi-4
group: articles
date: 2020/01/02
author: Christan Fergus
published: true
major-category: How-To
parent: articles
overview: true
cs-objective: Bring design and feature clarity to a walkie-talkie app which addresses a user need.
---

# Parts & Hardware
## Required
*   Raspberry Pi 4 (4GB RAM recommended)
*   USBC power adapter
*   Mini HDMI to HDMI cable
*   External HDD
*   Micro SD Card (minimum 8GB)

## Optional
*   RP4 Case
*   RP4 Fans and heatsinks

### Recommended to make life easier
Get a Raspberry Pi kit with power cable, fans, HDMI micro cables, etc. ~$100

# Software
*   Noobs
*   Raspbian
*   Plex

# Installation Steps

1. Download [Noobs](https://www.raspberrypi.org/downloads/noobs/)
2. Format your SD to FAT
3. Transfer Noobs onto the SD card. Only transfer the files inside the downloaded folder. Noobs will not boot if you transfer the root folder over. 
4. Throw the SD card into the Pi and boot up. If the files were transferred correctly, the Pi will automatically boot up to a distro install screen. 
5. Choose “Raspbian” and install, either full or basic, it shouldn’t matter
6. After successful install and reboot, set up the OS following the prompts,
Change default pi password, set up wifi, download any updates, etc.
7. **Optional:** to make your life easier, enable SSH access (via Raspbian GUI):
Pi Menu>Preferences>Raspberry Pi Configuration>Interfaces>SSH=Enable
8. Ensure HTTPS transport package is installed (it most likely is for the latest versions of Noobs & Raspbian): 
```
sudo apt-get install apt-transport-https
```
9. ntfs-3g is probably installed by default as well, but just in case, add the NTFS disc package 
```
sudo apt-get install ntfs-3g 
```
10. Download Plex for your Linux distro:
    1. First, determine whether you need the ARMv7 or the ARMv8 package: 
    ```
    dpkg --print-architecture 
    ```
    2. `armhf `requires the ARMv7 package
    3. `arm64` requires ARMv8
    4. Once determined, download the correct package from the [plex site](https://www.plex.tv/media-server-downloads/) but do not attempt to extract it once downloaded.
11. Install the Plex server:
```
sudo dpkg -i [DOWNLOADED FILE, i.e /Downloads/plex_etc...] 
```
12. A quick way to ensure plex has been installed correctly and begin to access your server, go to [http://127.0.0.1:32400/web](http://127.0.0.1:32400/web) in your browser, you should see plex come up 
13. Attach your hard drive(s) if you haven’t already
14. Follow Plex’s setup steps and find out if you have more work ahead of you: 
    1. When it’s time to set up your libraries, navigate to your hard drive. If you can see the contents, you are all set and can skip the rest of these steps
    2. If you cannot see your hard drive contents, the external hard drive must be mapped to a new location so that plex can access its contents. If that's the case, continue on...
15. Change the plex user as the first step in enabling Plex to access your hard drive content: 
    1. open the PMS file
    ```
    sudo nano /etc/default/plexmediaserver 
    ```
    2. on the line, `PLEX_MEDIA_SERVER_USER=plex`, change the user from “`plex`” to “`YOURUSERNAME`” 
    3. Save the changes
16. Elevate to root
```
sudo -s
```
17. Obtain your harddrive’s UUID. This command will give IDs for all drives including internal drives:
```
blkid
```
18. For however many harddrives you are connecting to be accessed by Plex, you have to set up separate mounting points. If there is a way to bulk do this, I don’t know it, so you have to run through these next steps for each HDD. Create your mount point:
```
sudo mkdir -p /media/[CUSTOMFOLDER]
```
19. Edit your fstab file. WARNING! Don’t screw this up or you’ll basically brick your Raspbian installation and have to reinstall everything and start over! 
```
nano /etc/fstab
```
20. You will see something like this:
```
proc            /proc           proc    defaults          0       0
/dev/XXXXXXXXX  /boot           vfat    defaults          0       2
/dev/XXXXXXXXX  /               ext4    defaults,noatime  0       1
# a swapfile is not a swap partition, no line here
#   use  dphys-swapfile swap[on|off]  for that
```
At the very end of the file, create a line for each mapped hard drive like so:
```
UUID=XXXXXXXXXXXXXXXXX /media/[CUSTOMFOLDER1] ntfs-3g permissions,auto 0 0
UUID=XXXXXXXXXXXXXXXXX /media/[CUSTOMFOLDER2] ntfs-3g permissions,auto 0 0
```
21. You must now mount your hard drive locations. You must do this for each drive you have connected
```
sudo mount /media/[CUSTOMFOLDER]
```
22. Ensure plex can read the files: 
```
sudo chown -R [USER]:[USER] /media/[CUSTOMFOLDER]
```
23. Repeat steps as needed for each drive. Head back over to Plex in your browswer. The contents of each drive will now show up as available in Plex. From here, you can follow the intuitive steps in Plex to set up your library. 

You're all set up! Enjoy your Plex server on the cheap!