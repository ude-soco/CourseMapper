# Course Mapper

### Pre-requisities:
1. MongoDB
2. NodeJS
3. npm

### Install some command line tools
```
sudo npm install -g bower
sudo npm install -g gulp
sudo npm install -g grunt
sudo npm install -g nodemon
```
### This will install the needed modules
```
npm install
bower install

run mongoDB if it is not yet running
```
### Run pre-script compiler
`grunt`

### Run the application
`node ./bin/wwww`

### Creating an initial admin account

Send an HTTP request to `/accounts/createAdmin` to create a user with the name "admin". Please note the randomly generated password which will be printed to `stdout`.
