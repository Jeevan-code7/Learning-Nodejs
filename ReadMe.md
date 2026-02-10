<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
Start the Learning Of Node js

After learning everything there is to know about JavaScript, including key ideas like callbacks, promises, async, and await. I've learned everything, and now I'm learning Node.js.

I have to study these things in the day.

- 1.Create a Respositary
- 2.Initialize the Repositary
- 3.Find the difference between node modules , package.json , package-lock.json
- 4.install express
- 5.create a server
- 6.write port 4000
- 7.make request handlers
- 8.Install nodemon
- 9.update scripts inside the package.json
- 10.difference between caret and tilda (^ & ~)
- 11.what are the dependencies
- 12.what is the use of "-g" while npm install

-1.I made a repository called Node.js Learning, added readme file, and wrote what I'm learning today.
-I made my response public so that others might see what I was learning.

- I made a source folder with the application in it.The important file is the js file, which is why I uploaded it. Everything takes place in the js file.

- 3.what is the node modules and why ?
  -> It contains third-party packages like:
  react, react-dom
  axios
  lodash
  express, etc.
  These packages are downloaded based on package.json and package-lock.json.
  Every project has its own node_modules folder.
  . To use external libraries

Instead of writing everything from scratch, we reuse:

-UI libraries
-HTTP clients
-Utility functions
-Frameworks
-Example:
import axios from "axios";
axios comes from node_modules.

2. Dependency management

package.json lists what packages your project needs.
node_modules contains actual installed code.
Keeps versions consistent across environments.

3. Faster development

- No need to write
- HTTP logic
- outing
- State management from scratch
- Saves time and reduces bugs.

-node_modules is a folder that stores all the external libraries your Node.js or React project needs.
It is created automatically by npm/yarn based on package.json so your code can use packages like React or Axios.
We don’t commit it to Git because it’s large and can be recreated anytime using npm install.

- package-lock.json locks the exact versions of all installed dependencies.
  It ensures the same code runs identically on every machine (no version mismatch).
  It makes installs faster and more reliable.
  Prevents unexpected bugs caused by automatic dependency updates.

  4.Express is a lightweight Node.js framework used to build web servers and APIs easily.
  It simplifies handling routes, requests, and responses.
  Provides middleware support for authentication, logging, and error handling.
  Helps build fast, scalable backend applications with less code.

7. A request handler in Node.js is a function that receives and processes client requests.
   It decides what action to take based on the request URL and method.
   Used to send proper responses like data, HTML, or error messages.
   Helps separate logic for different routes clearly.
   Makes server code organized, readable, and maintainable.(req,res)=>{}

   --> app.use() - We use app.use() in Express to apply middleware to requests.
   It runs code before sending the response (logging, auth, parsing data).
   Can handle all HTTP methods (GET, POST, etc.).
   Used to serve static files and parse request bodies.
   Helps keep code clean, reusable, and organized.

In package.json, caret (^) and tilde (~) control how dependency versions are updated.

Caret ^
Allows minor and patch updates
Does not change the major version
Example:
^1.2.3 → can update to 1.9.9 but not 2.0.0

Tilde ~
Allows only patch updates
Locks the minor version
Example:
~1.2.3 → can update to 1.2.9 but not 1.3.0
In short
^ → more flexible updates
~ → safer, more strict updates

- dev dependencies
- Dev dependencies are packages used only during development, not in production.
  They help with building, testing, and formatting code.
  Examples include webpack, babel, eslint, prettier, jest.
  They are listed under devDependencies in package.json.
  Excluded from production builds to reduce app size.
  Installed using npm install package-name --save-dev.
  -g

  In npm install -g, the -g (global) flag installs a package system-wide.
  Makes the package available from anywhere in the terminal
  Used for CLI tools (not project libraries)
  Examples: npm install -g nodemon, npm install -g npm
  Installed once, reusable across all projects
  Not added to package.json

-Why we add package.json to Git

It defines project metadata (name, scripts, dependencies).
Tells others what packages the project needs.
Allows anyone to install dependencies using npm install.
Mandatory to upload for any Node/React project.
-Why we add package-lock.json to Git

It locks the exact versions of installed dependencies.
Ensures same behavior across all machines (no “works on my system” issues).
Improves faster and consistent installs.
Prevents unexpected bugs from version changes.

-Why we need both

package.json → what dependencies are required.
package-lock.json → exactly which versions are used.
Together they guarantee reproducible builds.
Is it mandatory to upload both?

package.json → Always mandatory
package-lock.json → Strongly recommended (almost mandatory in real projects)
❌ Do NOT upload
node_modules/ (it’s regenerated from these two files)
One-line interview answer:
We commit package.json to define dependencies and package-lock.json to lock exact versions so that the project behaves consistently across environments.

Route Handler == (req,res)=>{
we dont send anything from this like(responce) when we saw in the postMan it always shows the sending request which means it goes infinite loop
}

const express = require("express");
const app = express();
app.use("/user", ()=>{
res.send("make request to the server")
})

app.listen(3000 , ()=>{
console.log("server started -->")
})

In (app.use) we can use multiple route handlers we want and also we can wrap it route handlers in an array [Rh1 . Rh2 , Rh 3] Like this
it will work same as how the mutltiple route handlers works
