var relearn_searchindex = [
  {
    "breadcrumb": "DOCS \u003e BGP",
    "content": "",
    "description": "21 Day",
    "tags": [],
    "title": "Day 21",
    "uri": "/bgp/first-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hugo Site Builder",
    "content": "",
    "description": "21 Day",
    "tags": [],
    "title": "Day 21",
    "uri": "/hugo/first-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Github",
    "content": "",
    "description": "41 Day",
    "tags": [],
    "title": "Day 41",
    "uri": "/gh_pages/first-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship",
    "content": "The highest point of our mighty vessel! Up here, the crow’s nest scout shouts coordinates to our helmsman below, though sometimes they’re just playing an elaborate game of maritime telephone. The crow’s nest offers the best views in the house (or ship), perfect for spotting incoming weather, distant lands, or that seagull that keeps stealing the captain’s lunch.\nCrow's Nest Where our lookout pretends to spot land while actually napping\nThe Helm Home to our steering wheel, which may or may not be connected to anything {class=“children children-type-list children-sort-”}",
    "description": "Where seagulls dare to land and captains steer with flair",
    "tags": [],
    "title": "Policy",
    "uri": "/ship/policy/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hardware and OpenWRT",
    "content": "RouterOS must be configured to install OpenWRT via netboot. Grab the proper version’s files here\nWe are using Version 6.49.10, extract all files from the .zip you downloaded from the above step.\nLog into the RouterOS gateway https://192.168.88.1 and go to FILE and upload everything from the netboot zip file.\nGo to SYSTEM\u003ePACKAGE and click on DOWNGRADE to downgrade the OS.\nBackup your RouterOS License Key by going to SYSTEM\u003eLICENSE\u003eEXPORT KEY\nPrepare the device for netboot by going to SYSTEM\u003eROUTERBOARD\u003eSETTINGS and configuring the following.\nPower off the Router until ready to netboot. In the last step we downgraded RouterOS to a version that will accept OpenWRT netbooting.\nNow we prepare our computer/workstation to be the server that Net installs the router with OpenWRT.\nDownload the proper image version for netbooting.\nDownload the sysupgrade image to finish the installation.\nCreate a directory on your home Directory called tftp and go to that Directory.\ncd ~ mkdir tftp cd /tftp create a .sh file named “loader” nano loader.sh copy and paste the following into loader.sh, ensure USER= the user home directory and IFNAME= the name of your ethernet interface. #!/bin/bash USER=\"name\" IFNAME=\"enp0***\" /sbin/ip addr replace 192.168.1.10/24 dev $IFNAME /sbin/ip link set dev $IFNAME up /usr/sbin/dnsmasq --user=$USER \\ --no-daemon \\ --listen-address 192.168.1.10 \\ --bind-interfaces \\ -p0 \\ --dhcp-authoritative \\ --dhcp-range=192.168.1.100,192.168.1.200 \\ --bootp-dynamic \\ --dhcp-boot=openwrt-23.05.0-rc3-ramips-mt7621-mikrotik_routerboard-750gr3-initramfs-kernel.bin \\ --log-dhcp \\ --enable-tftp \\ --tftp-root=$(pwd) IMPORTANT: ensure the initramfs-kernel.bin file is located in the tftp directory. this script is counting on it being there.\nMake the script executable:\nchmod +x loader.sh We can run the script when ready to turn on the server. ./loader.sh Navigate to /tftp and run loader.sh\nConnect your computer/workstation/TFTP server to the WAN port of the router with an ethernet cable.\nHold reset button when powering on, do not let go until the router beeps once, you should also see activity in the terminal window.\nShut down loader.sh with ctrl+c.\nDisconnect Ethernet from WAN and connect to port 2,3,4, or 5.\nConfirm OpenWRT installed sucessfully by navigating to the gateway at https://192.168.1.1\nDo not create a password yet, OpenWRT is currently running in memory, we need to upgrade the firmware with the sysupgrade image we downloaded earlier. Click on SYSTEM\u003eBACKUP/FLASH FIRMWARE.\nClick Flash New Firmware Image and upload the syspugrade file from earlier steps. Continue Wait for a few moments for the system to upgrade, OpenWRT will now be flashed to storage and you can restart the router to make sure it boots OpenWRT normally.\nlog into https://192.168.1.1 and change your password.",
    "description": "OpenWRT Install",
    "tags": [],
    "title": "RB750Gr3",
    "uri": "/openwrt/first-day/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "Overview The Test Intangible Token System will be used for organization until “training” is complete.\nMap #ScottIsAlwaysRight Legal is the Law of Surtey and Accounting Computer Science is the answer to everything Accounting is the mechanism by which the story of the transfer of surety is told The accounting never changes",
    "description": "Overview of the ship",
    "tags": [],
    "title": "Ship",
    "uri": "/ship/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "BGP\nGo to SYSTEM\u003eSYSTEM and then enable SSH on port 222 While connected to the router’s LAN, open a terminal and run the following command:\nssh root@192.168.1.1 -p 222 and enter the password. Day 21 21 Day\nDay 2 At Sea\nDay 3 Island Arrival {class=“children children-type-list children-sort-”}",
    "description": "BGP",
    "tags": [],
    "title": "BGP",
    "uri": "/bgp/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e BGP",
    "content": "At Sea Captain’s Log, 0545 hours\n“A little sea spray can’t break our spirit—nor our appetite!”\n– The Chef, after a minor sauce-spill incident\nThe waves crash and the crew awakens to the salty sea breeze. Our beloved ship, The Purple Pulpo, plows forward, determined to complete our “Operation Squid Spaghetti.”\nStatus Weather: Slightly stormy with a touch of dramatic sea mist Crew Morale: Excitement level: High Hunger level: Astronomical Willingness to sing shanties: ∞ Culinary Update The kitchen rattles with every wave, saucepans clanging like a symphony of disorganized percussion. Marinara overboard? Twice. But fear not, the crew valiantly rescued the floating ladle, dubbing it Sir Stir-a-Lot.\nStay tuned for the next thrilling entry: How fresh noodles fare in gale-force winds… and whether the sauce can hold up against the unstoppable appetite of seafaring sailors!",
    "description": "At Sea",
    "tags": [],
    "title": "Day 2",
    "uri": "/bgp/second-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Github",
    "content": "At Sea Captain’s Log, 0545 hours\n“A little sea spray can’t break our spirit—nor our appetite!”\n– The Chef, after a minor sauce-spill incident\nThe waves crash and the crew awakens to the salty sea breeze. Our beloved ship, The Purple Pulpo, plows forward, determined to complete our “Operation Squid Spaghetti.”\nStatus Weather: Slightly stormy with a touch of dramatic sea mist Crew Morale: Excitement level: High Hunger level: Astronomical Willingness to sing shanties: ∞ Culinary Update The kitchen rattles with every wave, saucepans clanging like a symphony of disorganized percussion. Marinara overboard? Twice. But fear not, the crew valiantly rescued the floating ladle, dubbing it Sir Stir-a-Lot.\nStay tuned for the next thrilling entry: How fresh noodles fare in gale-force winds… and whether the sauce can hold up against the unstoppable appetite of seafaring sailors!",
    "description": "At Sea",
    "tags": [],
    "title": "Day 2",
    "uri": "/gh_pages/second-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hugo Site Builder",
    "content": "At Sea Captain’s Log, 0545 hours\n“A little sea spray can’t break our spirit—nor our appetite!”\n– The Chef, after a minor sauce-spill incident\nThe waves crash and the crew awakens to the salty sea breeze. Our beloved ship, The Purple Pulpo, plows forward, determined to complete our “Operation Squid Spaghetti.”\nStatus Weather: Slightly stormy with a touch of dramatic sea mist Crew Morale: Excitement level: High Hunger level: Astronomical Willingness to sing shanties: ∞ Culinary Update The kitchen rattles with every wave, saucepans clanging like a symphony of disorganized percussion. Marinara overboard? Twice. But fear not, the crew valiantly rescued the floating ladle, dubbing it Sir Stir-a-Lot.\nStay tuned for the next thrilling entry: How fresh noodles fare in gale-force winds… and whether the sauce can hold up against the unstoppable appetite of seafaring sailors!",
    "description": "At Sea",
    "tags": [],
    "title": "Day 2",
    "uri": "/hugo/second-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hardware and OpenWRT",
    "content": "https://openwrt.org/toh/tp-link/eap615-wall\nThis device is rather easy to flash openWRT to, we used a POE switch connected to our router to power the EAP615, NO TFTP SERVER NEEDED.\nUse your router to find out what IP address is being used by the EAP615, log into the device an enable SSH in the MANAGMENT tab.\nThe first thing we need to do to the device is turn off certificate verification using SSH.\nChange the IP address in the command below to the EAP615 IP address.\nssh -o HostKeyAlgorithms=+ssh-rsa -o ConnectTimeout=30 admin@192.168.0.254 'cliclientd stopcs' Full OpenWRT Documentation for EAP615\nOn some devices, for the SSH connection to work, you need to add\n-o PubkeyAcceptedAlgorithms=+ssh-rsa -o RSAMinSize=1024 Rename the OpenWrt …squashfs-factory.bin binary to factory.bin (The GUI has a limit on the file name length, shortening to e.g. factory.bin works.)\nUpload the firmware on the firmware update page on the TP-link web GUI.\nReconfigure your static IP to talk to OpenWrt on 192.168.1.1 (the OpenWrt default).\nConnect your workstation to ETH1 on the EAP615, disconnect internet (but not power) from the EAP615, and connect to the LUCi WEBUI.\nGo to NETWORK then INTERFACES and select the ETH0 or (br-lan) interface and add another IPv4 address that is not being used on your current network.\nAP only or AP/Gateway Videos\nafter setting up AP only or AP/Gateway, use open WRT’s backup function to create an image that can be easily added to other nodes on the same harware.",
    "description": "Install OpenWRT",
    "tags": [],
    "title": "EAP615",
    "uri": "/openwrt/second-day/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "Captain Hugo reporting from the quarterdeck of the magnificent The Purple Pulpo. The seas are fair, and our hold is brimming with exotic cargo bound for distant ports. Our seasoned crew stands ready for another adventure across the Seven Seas.\nOperation Push to Github git init git add . git commit -m \"no comment\" git branch -M main git push -u orgin main git remote add origin https://github.com/SFcommunications/SFcommunications.github.io Day 41 41 Day\nDay 2 At Sea\nDay 3 Island Arrival {class=“children children-type-list children-sort-”}",
    "description": "Create a Repository and push the/ /public directory to main",
    "tags": [],
    "title": "Github",
    "uri": "/gh_pages/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "Hardware Datasheets\nHardware table\nOpenWRT Common Installs\nVideo tutorial\nRB750Gr3 OpenWRT Install\nEAP615 Install OpenWRT\nEAP225 V3 or V4 OpenWRT Installation {class=“children children-type-list children-sort-”}",
    "description": "Resources",
    "tags": [],
    "title": "Hardware and OpenWRT",
    "uri": "/openwrt/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "Captain Hugo reporting from the quarterdeck of the magnificent The Purple Pulpo. The seas are fair, and our hold is brimming with exotic cargo bound for distant ports. Our seasoned crew stands ready for another adventure across the Seven Seas.\nOperation Squid Spaghetti Our midnight run involved top-secret pasta flour and premium marinara crucial for the realm’s spiciest mission. The crew was amped!\nDay 21 21 Day\nDay 2 At Sea\nDay 3 Island Arrival {class=“children children-type-list children-sort-”}",
    "description": "Create a Simple Site With a Theme",
    "tags": [],
    "title": "Hugo Site Builder",
    "uri": "/hugo/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship",
    "content": "The heart of shipboard shenanigans, where the captain’s dignified stride from their cabin inevitably collides with sailors rolling barrels across the deck.\nCoffee aromas from the Captain’s cabin wage a constant battle with the hearty snores echoing from the crew bunks. It’s that magical space where formal reports mysteriously acquire coffee rings, and the crew’s sea shanties somehow find their way through the captain’s supposedly soundproof door.\nA daily theater of nautical life where rank meets reality, and everyone pretends not to notice the first mate sleepwalking in their pajamas.\nCaptain's Cabin A luxurious 4x4 room, home to our beloved Captain Hugo, with a genuine fake window\nCrew Quarters Where dreams of mutiny and tales of sea monsters are equally shared {class=“children children-type-list children-sort-”}",
    "description": "Where captains and crew collide in organized chaos",
    "tags": [],
    "title": "Network",
    "uri": "/ship/network/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "Face it This is an example site for the Relearn theme of the Hugo static site generator.\nIt displays content about the fictional ship The Purple Pulpo in English and a crude Piratish accent. Don’t take it too serious.\nThe goal with this site is to showcase a minimal example with as less configuration as possible. It is meant to be a starting point for your own website. The configuration files are documented to help you understand the reason behind certain settings.\nRun it The source code for this website is contained in the Relearn repository. After the installation of Hugo you can build the site locally from inside the exampleSite directory with\nhugo server Then you can access the site by navigating to http://localhost:1313 in your browser.\nFor a detailed installation guide, see the Relearn documentation.\nModify it While minimal in configuration, this showcase contains an auto translation into the Piratish language. This required some additional files and directories, totally unnecessary for a simple site. You can delete them if you use this site as a starting template. Namely these are:\ncontent/pir/ i18n/ layouts/partials/shortcodes/piratify.html layouts/partials/toc.html layouts/shortcodes/piratify.html You will also have to add this to the hugo.toml to deactivate the translation:\n​ hugo.toml disableLanguages = ['pir'] or remove all references to the Piratish language.",
    "description": "About this Website",
    "tags": [],
    "title": "About",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship",
    "content": "Where organization meets chaos and inventory management is more of a suggestion than a rule. Our state-of-the-art cargo facilities are divided into three distinctly disorganized bays.\nThe daily operations in our cargo bays resemble an interpretive dance of logistics, where inventory lists are more like creative writing exercises. Our automated sorting system, powered by quantum probability and caffeinated algorithms, occasionally decides to reorganize items based on their cosmic aura rather than traditional categories. This has led to fascinating discoveries, like finding out that rubber ducks and miniature black holes share remarkably similar energy signatures.\nThe deck crew has developed their own unique navigation system through the chaos, using a combination of intuition, lucky guesses, and the occasional guidance from our resident AI, which has developed a peculiar fondness for storing items in patterns that resemble abstract art. The resulting arrangement has been praised by visiting space artists as “a masterpiece of organized entropy” and “the most innovative storage solution since the invention of pocket dimensions.”\n​ Cargo Bay Alpha Cargo Bay Beta Cargo Bay Gamma 3,721 rubber ducks in spacesuits One very large tea cozy (planet-sized) Collection of anti-gravity hamster wheels Emergency supply of digital cookies Quantum-entangled sock pairs Library of dehydrated books Self-folding origami robots Tank of compressed rainbow matter Zero-gravity bubble wrap (extra bouncy) Time-traveling toast machine Collection of miniature black holes (safely contained) Spare parts for the ship’s interpretive dance module",
    "description": "Where organization meets chaos",
    "tags": [],
    "title": "Corporation",
    "uri": "/ship/corporation/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e BGP",
    "content": "Island Arrival Captain’s Log, 1140 hours\n“Ahoy, pasta-lovers! Our mission is finally a sauce-cess!”\n– The Enthused Quartermaster\nThe sun blazes overhead, revealing an island coastline shaped like a questionable noodle bowl — the perfect destination for our midnight pasta cargo.\nStatus Purple sails flutter in the island breeze The octopus figurehead is oddly shining—some claim the wooden tentacles are still dancing to an unseen rhythm Slight tang of marinara lingers across the entire deck Incident in the Crow’s Nest Upon our arrival in the harbor, the lookout nearly toppled from his perch in a fit of excitement. A mysterious figure on the dock signaled with a lantern three times—followed by a deafening call of a heron in flight.\nThe lookout swears the bird cawed in perfect Morse code, as if warning us of impending calamity. Moments later, a sudden gust toppled the spyglass stand, sending it clattering down to the quarterdeck, just as the heron sped off with a triumphant whistle.\nMission Debriefing Crates of sauce offloaded with care (and the occasional accidental slosh) Crowds of locals, excited for fresh spaghetti Squid ink banner hoisted high to announce “Operation Squid Spaghetti Complete”",
    "description": "Island Arrival",
    "tags": [],
    "title": "Day 3",
    "uri": "/bgp/third-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Github",
    "content": "Island Arrival Captain’s Log, 1140 hours\n“Ahoy, pasta-lovers! Our mission is finally a sauce-cess!”\n– The Enthused Quartermaster\nThe sun blazes overhead, revealing an island coastline shaped like a questionable noodle bowl — the perfect destination for our midnight pasta cargo.\nStatus Purple sails flutter in the island breeze The octopus figurehead is oddly shining—some claim the wooden tentacles are still dancing to an unseen rhythm Slight tang of marinara lingers across the entire deck Incident in the Crow’s Nest Upon our arrival in the harbor, the lookout nearly toppled from his perch in a fit of excitement. A mysterious figure on the dock signaled with a lantern three times—followed by a deafening call of a heron in flight.\nThe lookout swears the bird cawed in perfect Morse code, as if warning us of impending calamity. Moments later, a sudden gust toppled the spyglass stand, sending it clattering down to the quarterdeck, just as the heron sped off with a triumphant whistle.\nMission Debriefing Crates of sauce offloaded with care (and the occasional accidental slosh) Crowds of locals, excited for fresh spaghetti Squid ink banner hoisted high to announce “Operation Squid Spaghetti Complete”",
    "description": "Island Arrival",
    "tags": [],
    "title": "Day 3",
    "uri": "/gh_pages/third-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hugo Site Builder",
    "content": "Island Arrival Captain’s Log, 1140 hours\n“Ahoy, pasta-lovers! Our mission is finally a sauce-cess!”\n– The Enthused Quartermaster\nThe sun blazes overhead, revealing an island coastline shaped like a questionable noodle bowl — the perfect destination for our midnight pasta cargo.\nStatus Purple sails flutter in the island breeze The octopus figurehead is oddly shining—some claim the wooden tentacles are still dancing to an unseen rhythm Slight tang of marinara lingers across the entire deck Incident in the Crow’s Nest Upon our arrival in the harbor, the lookout nearly toppled from his perch in a fit of excitement. A mysterious figure on the dock signaled with a lantern three times—followed by a deafening call of a heron in flight.\nThe lookout swears the bird cawed in perfect Morse code, as if warning us of impending calamity. Moments later, a sudden gust toppled the spyglass stand, sending it clattering down to the quarterdeck, just as the heron sped off with a triumphant whistle.\nMission Debriefing Crates of sauce offloaded with care (and the occasional accidental slosh) Crowds of locals, excited for fresh spaghetti Squid ink banner hoisted high to announce “Operation Squid Spaghetti Complete”",
    "description": "Island Arrival",
    "tags": [],
    "title": "Day 3",
    "uri": "/hugo/third-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Hardware and OpenWRT",
    "content": "https://forum.openwrt.org/t/anyone-working-on-tp-link-eap225/33956\nLike the EAP615, The EAP225 (v3 or v4) is rather easy to flash openWRT to. In this case, there is only one Ethernet port on the EAP225.\nUse your router to find out what IP address is being used by the EAP225. Login to the WEBUI with admin/admin. Ignore the following error, go to advanced and PROCEED.\nYou may have to complete TPlinks initial setup to access the GUI.\nEnable SSH in the MANAGMENT tab.\nNext we need to do to the device is turn off certificate verification using SSH. open a terminal and SSH into the EAP225 Change the IP address in the command below to the EAP225 IP address.\nssh -oPubkeyAcceptedAlgorithms=+ssh-rsa -o HostKeyAlgorithms=ssh-rsa -oKexAlgorithms=+diffie-hellman-group1-sha1 admin@192.168.0.254 Then stop the cert verification daemon\ncliclientd stopcs Full OpenWRT Documentation for EAP225\nRename the OpenWrt …squashfs-factory.bin binary to factory.bin (The GUI has a limit on the file name length, shortening to e.g. factory.bin works.)\nUpload the firmware on the firmware update page on the TP-link web GUI.\nWARNING Failing to use the correct image for your device may cause it to brick. We used this factory image for our V3 outdoor model. Reconfigure your static IP to talk to OpenWrt on 192.168.1.1 (the OpenWrt default).\nConnect your workstation to a POE switch or connect your workstation directly to the EAP225\nGo to NETWORK then INTERFACES and select the ETH0 or (br-lan) interface and add another IPv4 address that is not being used on your current network. Set Gateway and subnet information.\nGo to ADVANCED SETTINGS and add at least on DNS server, we added 3.\nSAVE AND APPLY the changes, and reboot the router.\nGo to NETWORK\u003e DIAGNOSTICS and PING 8.8.8.8 to ensure internet connectivity. If you’re getting this error, try looing at DNS\nAP only or AP/Gateway Videos\nafter setting up AP only or AP/Gateway, use open WRT’s backup function to create an image that can be easily added to other nodes on the same harware.\nGateway Setup Go to SYSTEM\u003e SOFTWARE and",
    "description": "OpenWRT Installation",
    "tags": [],
    "title": "EAP225 V3 or V4",
    "uri": "/openwrt/third-day/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship \u003e Network",
    "content": "Welcome to the legendary 4x4 quarters of Captain Hugo, where navigation charts double as wallpaper and yesterday’s coffee cup might contain tomorrow’s coordinates! The genuine fake window offers stunning views of wherever the captain thinks we are (he’s been known to mistake the Mediterranean for the Caribbean on more than one occasion).\nDespite the creative filing system (read: artistic piles), our beloved captain insists he knows exactly where everything is – including his lucky compass, which has been “temporarily misplaced” for the past three months. The room features state-of-the-art organizational solutions, such as “that chair with all the stuff” and “the corner where important things go.”\nVisitors are kindly requested to not disturb the delicate ecosystem of nautical instruments, half-written logbooks, and at least seven different types of tea sets – all carefully arranged in what the captain calls his “systematic randomness.”",
    "description": "A luxurious 4x4 room, home to our beloved Captain Hugo, with a genuine fake window",
    "tags": [],
    "title": "Captain's Cabin",
    "uri": "/ship/network/captain/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship \u003e Network",
    "content": "Welcome to the most entertaining deck of our vessel, where every bunk tells a story and every footlocker holds at least three contraband items that technically violate maritime law. Our distinguished crew members have developed a complex social hierarchy based entirely on who can tell the tallest tale about encounters with legendary sea creatures. Current champion: Bosun McGee, who swears he taught a pod of narwhals to perform synchronized swimming routines.\nThe communal areas are a fascinating study in organized chaos. The mess hall doubles as a debate chamber where heated arguments about the best way to predict weather by reading tea leaves can last for days. The walls are decorated with “accurate” maps drawn by our navigator, complete with illustrations of sea serpents and mysterious islands that somehow move location between each voyage. Our ship’s cat, Admiral Whiskers, holds court from atop the highest shelf, judging everyone’s sea shanty performances with characteristic feline disdain.\nDown in the sleeping quarters, you’ll find an impressive collection of lucky charms, ranging from traditional rabbit’s feet to allegedly enchanted ship’s biscuits that are now too petrified to eat. Each bunk is personalized with trinkets from a hundred ports, though no one can quite explain how we acquired the stuffed dodo bird that watches over the entrance. The night watch maintains a running tally of mysterious lights seen over the water, though there’s strong suspicion that half of these sightings coincide suspiciously with nights when the rum rations were doubled.",
    "description": "Where dreams of mutiny and tales of sea monsters are equally shared",
    "tags": [],
    "title": "Crew Quarters",
    "uri": "/ship/network/crew/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship \u003e Policy",
    "content": "Our dedicated lookout has reported some rather peculiar sightings from his lofty perch. Between his frequent “strategic rest periods” and tea breaks, he’s sworn on his mother’s favorite teacup that he’s witnessed the most extraordinary maritime phenomena ever documented.\nLast week alone, he submitted a detailed report claiming to have spotted a mermaid riding a seahorse while solving a Rubik’s cube, and a group of dolphins wearing top hats performing synchronized swimming routines to classical music.\nRecent notable sightings include:\nA giant squid playing chess with a whale shark Flying fish practicing for their pilot’s license A pirate ghost ship selling timeshares to passing vessels Penguins on vacation riding jet skis A rowing boeat crewed entirely by singing sea cucumbers",
    "description": "Where our lookout pretends to spot land while actually napping",
    "tags": [],
    "title": "Crow's Nest",
    "uri": "/ship/policy/nest/index.html"
  },
  {
    "breadcrumb": "",
    "content": "“When The Purple Pulpo sets sail, even the fish hold their breath.”\n– HELP\nThe year is 1623. An unusual ship, The Purple Pulpo, emerges from the foggy sea, its sails dyed a brilliant purple that dazzles friend and foe alike. Cunning merchants whisper about a legendary octopus figurehead carved from driftwood—some say it dances under moonlight to ward off pesky sea ghosts (and suspicious tax collectors).\nMyths and Rumors Though many debate its authenticity, rumor has it the captain once successfully traded a shipload of questionable sea cucumbers for a cargo of prized purple velvet. The hue of the velvet supposedly matched the exact shade of the boat—thus reinforcing its flamboyant reputation.\nPossible Explanations A wizard was on board, casting color illusions for fun. The purple paint was accidentally created by mixing octopus ink into the ship’s pigment. Too much wine spilled on deck over many voyages. (Captain’s favorite theory.) Unlikely Allies It is said, one day a rival trading ship, the Lady Kraken, tried to outdo The Purple Pulpo by painting their masts hot pink. The clash at sea was more of a fashion show than a naval battle – onlookers cheered for hours, forgetting they were late for dinner.\nAdventures Read about some of the unbelievable adventures of The Purple Pulpo in the Captain’s Log. Notable adventures include:\nOperation Squid Spaghetti: A midnight run delivering spaghetti to stranded islanders, guided only by the glowing luminescence of algae (and embarrassed jellyfish who offered moral support). The Great Spice Heist: Smuggled saffron and paprika past rival pirate ships. Legend claims the pirates were too busy sneezing to put up any fight. A Final Toast Raise your mug of (purple) punch to The Purple Pulpo – where cargo, captain, and cephalopod might just change the hue of history. May your sails forever billow, your hull remain bold, and your cargo be as colorful as your legend!",
    "description": "“When The Purple Pulpo sets sail, even the fish hold their breath.”\n– HELP\nThe year is 1623. An unusual ship, The Purple Pulpo, emerges from the foggy sea, its sails dyed a brilliant purple that dazzles friend and foe alike. Cunning merchants whisper about a legendary octopus figurehead carved from driftwood—some say it dances under moonlight to ward off pesky sea ghosts (and suspicious tax collectors).",
    "tags": [],
    "title": "Welcome to Cobra Calvin",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "DOCS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "DOCS \u003e Ship \u003e Policy",
    "content": "Our state-of-the-art navigation system relies heavily on the ancient art of reading cloud shapes and following particularly motivated seagulls. The ship’s wheel, a magnificent piece of mahogany that squeaks exactly like a dolphin’s laugh, is primarily used as an excellent coat hanger during peaceful voyages.\nThe real steering happens through our patented “Serendipitous Navigation System™” – we simply convince the ocean currents they’re flowing in the wrong direction through sophisticated reverse psychology. Our success rate of reaching intended destinations is a proud 12%, though we’ve discovered fourteen previously unknown islands and one mysterious floating coffee shop in the process.",
    "description": "Home to our steering wheel, which may or may not be connected to anything",
    "tags": [],
    "title": "The Helm",
    "uri": "/ship/policy/helm/index.html"
  }
]
