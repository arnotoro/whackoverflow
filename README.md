# About
This is the project work for the course "Advanced Web Applications" at LUT University. The project is a fullstack web application for sharing code snippets. The application is built using the MERN stack (MongoDB, Express, React, Node.js).

## Requirements and points proposal

### Mandatory requirements
- [x] Implementation of backend with Express.js
- [x] Utilization of database (MongoDB)
- [x] Authentication
  - [x] Users have an option to register and login
  - [x] JSON Web Token (JWT) based authorization
  - [x] Only authenticated users can post and comment
- [x] Features
  - [x] Authenticated users can:
    - [x] Post new code snippets
    - [x] Comment on existing posts
  - [x] Non-authenticated users can see posts and comments
  - [x] There is a page listing all the posts and after opening one post, comments are also listed
- [x] Responsive design
  - [x] App needs to be usable on mobile devices and desktop browsers
- [x] Documentation (README.md)
  - [x] Technology choices
  - [x] Installation guidelines
  - [x] User manual
  - [x] Features implemented
  - [x] Number of points

### Optional requirements
- [x] Frontend with React.js Bootstrap
- [x] Timestamp when a post is created

### Points proposal
- 25 points for mandatory requirements
- 5 points for utilization of a frontside framework (React.js)
- 1 point for timestamp when a post is created

#### Total points: 31

## Technology choices
- Frontend: React.js (with Bootstrap)
- Backend: Express.js
- Database: MongoDB
- Authentication: JSON Web Token (JWT) with Passport.js and Bcrypt.js
  
## Installation guidelines
1. Clone the repository `git clone https://github.com/arnotoro/whackoverflow`
2. Make sure you are using the latest npm version by typing `nvm use node` and then install dependencies using `npm install`
3. Create a .env file in the ./server repository with a key value pair `JWT_SECRET=ensaatatakoskaanvalmiiksi`
4. Run the application `npm run dev`
5. Enjoy!

## User manual
### Creating a user
1. Click the "Register" button in the navigation bar
2. Fill in your information and click "Register"
3. Login with your credentials
4. Start sharing code snippets and comment on other people's posts!
   
### Sharing a code snippet
1. Click the "Create a new Snippet" button in the navigation bar
2. Give your snippet a title
3. Write your code snippet. (Supports text indentation for code blocks)
4. Post your snippet