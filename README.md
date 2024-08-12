# Todo List
This project allows you to create and manage your todo lists with an intuitive interface. You can add tasks and see a projection of what may happen in the future based on your todo lists. 😁


## Built With
* Node.js - A JavaScript runtime built on Chrome's V8 engine.
* EJS - A simple templating language that lets you generate HTML markup with plain JavaScript.
* CSS - Cascading Style Sheets for styling the application.
* MongoDB - A NoSQL database for storing your todo lists.


## Getting Started
Follow these steps to set up the project locally:

* Node.js and npm: You can download and install them from [Node.js official website](https://nodejs.org/en).
  
* MongoDB: Make sure MongoDB is installed and running on your local machine. You can follow the [official MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) for setup. To start MongoDB, use the command:
```sh 
sudo systemctl start mongod
```
The project will automatically connect to the database once MongoDB is running.

### Prerequisites
Ensure you have the following installed on your system:

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/farzaddm/Todo-List.git
   ```
2. **Install NPM packages:**
    ```sh
    npm install
    ```
3. **Run the project:**
   ```sh
    node app.js
   ```

## Usage
To create a new section in your todo list, simply append the section name to the URL after the `/` character. For example, you can access a section named "work" by navigating to `http://localhost:3000/work`.


## App Structure
```bash
myandpp
|__public
|    |__style.css
|__views
|    |__home.ejs
|__app.js
|__README.md
|__package-lock.json
|__package.json                  
```
