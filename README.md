# modular-angular-bootstrap
basic structure to kickstart an angular project. modular with signup/login .

### To run:

` sudo vi /etc/nginx/sites-available/<project>.conf`
  
    server{
      listen *:80;
      
       location / {
        alias <path to project>/src/;
        index base.html;
       }
    }

` sudo ln -s /etc/nginx/sites-available/<project>.conf /etc/nginx/sites-enabled/<project>.conf`
` sudo service nginx restart`

checkout http://localhost and the project should be up and running.

### Files
* ##### base.html
   base structure of html page. defining actual content area.  
  import CSS file here.
  uses require.js for JS files and dependencies


* ##### common/js/main.js
   Contains requuire.js config.
  - define all JS files that needs to be invoked.
  - vendor specific JS stored in `/common/js/vendor`
  - CSS libs stored in `/common/css`
  - specify shim and dependencies
  - calls app.js to start the angular app.

* ##### app.js
  - creates angular app.
  - calls all sub modules and serivces.
  - bootstraps the project.


### Menu
  - Menu is managed by menuApp located at `/common/js/mainmenu.js`
  - to change the menu, inject `menuService` in any controller. 
  - Elements can be added in menu by `menuService.add(item)`.
  - Entire menu can be replaced by `menuService.setMenu(new_menu)`
  - Menu is displayed and controlled by a directive called `main-menu`

### Modules

Each module contains:
 - <modulename>App.js
 - services
 - controller
 - views

##### Auth Module
* AuthApp.js
  - defines auth app
  - assigns sub contrllers
  - assigns auth services
  - defines auth related routes and sub routes

* js/controllers
 - contains login/ signup and authentication related code
 - Services contain http calls and definations
 - views contains HTML templates
 - 
 
