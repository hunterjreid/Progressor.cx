

<details open>

<summary><h4 style="text-align: center;">Dev Install</h4></summary>

```markdown
# For the client side:
git clone https://github.com/hunterjreid/Progressor.cx
cd Progressor.cx/client
npm i
npm run serve

# Open a new PowerShell and run the server:
cd Progressor.cx/server
npm i
npm run server
```
</details>

<details closed>

<summary><h4 style="text-align: center;">Why i made it</h4></summary>

Got a question about cybersecurity? Progressor has the answer. It's like asking a friend who knows all about online security. You'll get clear, easy-to-follow advice that empowers you to make smart choices and stay protected.

Progressor fits into your cybersecurity routine seamlessly. It's available online and on your mobile device whenever you need it. No complicated setups—just straightforward answers that help you navigate the world of cybersecurity confidently.

</details>


<details closed>

<summary><h4 style="text-align: center;">What is Progressor ??</h4></summary>



Progressor is your go-to solution for cybersecurity questions. It's like having a virtual cybersecurity expert on hand all the time. This smart chat bot uses AI to give you quick and accurate answers whenever you need them, helping you stay safe online.

With Progressor, you can stay ahead of potential cybersecurity threats. It keeps an eye on security data and patterns, giving you timely advice to prevent issues before they become big problems. Whether you're a tech pro or not, Progressor makes cybersecurity easy to understand and act on.

</details>

<details closed>

<summary><h4 style="text-align: center;">How does it give Instant Answers, with No Fuss</h4></summary>

<br>

Progressor is your go-to solution for cybersecurity questions. It's like having a virtual cybersecurity expert on hand all the time. This smart chat bot uses AI to give you quick and accurate answers whenever you need them, helping you stay safe online.

With Progressor, you can stay ahead of potential cybersecurity threats. It keeps an eye on security data and patterns, giving you timely advice to prevent issues before they become big problems. Whether you're a tech pro or not, Progressor makes cybersecurity easy to understand and act on.



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
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '4Lwerf[Z%';

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
npm run build <- Dist

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

<h1><sub>Irw   <br>
Pass: LrewEHF)gj5      <br>
PHP Pass: erwof[Z%</sub></h1>



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
<details open>
