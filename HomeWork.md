- create mutliple Route handler and play with that
- next()
- next funtion and errors along with res.send
- what is middleware
- how express js bsically handles request behind the scenes
- what is the difference between the app.use and app.all

// password hashing

- validate data in sign up API
- install bcrypt package
- create passwordHash using bcrypt.hash & save the user isexcrupted password
- create login API
- Compare Passwords and throw errors if email or pasword isinvalid

// JWT authentication

- install cookie-parser
- send dummy cookie
- create GET /profile API and check if you get cookie or not
- install jsonwebtoken
- In Login API, after email and password validation, create a JWT token and send it to user
- read the cookies inside the profile API and find the loggedIn user
-
