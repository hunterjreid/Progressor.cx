<br>
<p align="center">
    <br><sub>A COMPANZT</sub>
    <h3 align="center"><a href="https://ee.com">Progrossor.cx</a>©</h3>
</p>






<details closed>

<summary><h4 style="text-align: center;">Dev Install</h4></summary>

<br>

## 
```bash
git clone https://github.com/hunterjreid/Progressor.com
cd Progressor.com/client
npm i
npm run serve

cd Progressor.com/server
npm i
npm run server

npm run build <- Dist
```
</details>
<details closed>



<summary><h4>Prod Install</h4></summary>
## Prod Install



```js

apt-get install apache2 mysql-server mysql-client php -y 
wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb

sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'Q#ate#ke38297';

npm i vue@3.2.26






=================================

Ubuntu 20.04  LTS  x64

apt-get update && apt-get upgrade -y
apt-get install apache2 mysql-server mysql-client php -y

sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '4L!2de#wdof[Z%';

apt install -y phpmyadmin
Leave password for phpmyadmin empty.

Upload files of Progressor.com git to var/www

Naviagte to /etc/apache2/apache2.conf
Add on new line: Include /etc/phpmyadmin/apache.conf

/sbin/iptables -A INPUT -t filter -p tcp --dport 80 -j ACCEPT

Naviagte to /etc/apache2/sites-available/000-default.conf
Change DocumentRoot /var/www/client/dist

apt-get update

reboot

systemctl start apache2

sudo curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash
apt-get install -y nodejs
npm install -g @vue/cli

Upload DB Via PHP MYADMIN

Change Server Config to Prod

Change src/App.vue Change api_prefix: "https://Progressor.com:8443",

cd /var/www/client

npm install
npm run build

cd /var/www/server

npm install
npm install -g forever
npm install -g nodemon
forever start server.js

sudo ufw allow 53
sudo ufw allow 22
sudo ufw allow 8443
sudo ufw allow 80/tcp
sudo ufw allow 8443/tcp

sudo ufw reload

systemctl start apache2

```

</details>



<details closed>

<summary><h4>Prod Update</h4></summary>

<br>

<h1><sub>IP 45.32.245.216   <br>
Pass: L!2doc[Z%EHF)gj5      <br>
PHP Pass: 4L!2de#wdof[Z%</sub></h1>



```js






cd /var/www/
rm -r client -f
rm -r server -f

Upload files of Progressor.com git to var/www

Switch server/server.js mode to production

Switch client/src/App.vue PREFIX_API to correct port "https://progressor.com:8443"

systemctl restart apache2


<I>reboot (optional)</i>


apt-get update

cd /var/www/client

npm install
npm run serve
npm run build

cd /var/www/server

npm install
npm install -g forever
forever start server.js

```
</details>
<details closed>
    
<summary><h5>Images / screenshots</h5></summary>


NOTHING HERE ATM

<br>

</details>
