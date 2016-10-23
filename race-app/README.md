# Angular-2 Racing Application

## Build and Run the App

```
npm install

npm start
```


## Additional Information

Prerequisite: Install Node.js (v4+) and npm (v3+)

If Node.js and npm aren't already on your machine, install them. Our examples require node v4.x.x or higher and npm 3.x.x or higher. To check which version you are using, run node -v and npm -v in a terminal window.

-------------------------------------------------

Step 1: Create and configure the project

Download/Clone to your system and unzip.

Run in terminal window:

npm install

"node_modules" and "typings" folders should appear. If the typings folder doesn't show up after running npm install, you'll need to install it manually with the command:

npm run typings install

-------------------------------------------------

Step 2: Build and run the application

npm start

That command runs the following two parallel node processes:

  + The TypeScript compiler in watch mode.
  + A static file server called lite-server that loads index.html in a browser and refreshes the browser when application files change.

In a few moments, a browser tab should open and display the page.

