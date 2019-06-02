# reddit-data-scraping
An app that displays posts for a given subreddit. It uses Reddit API to fetch the top subreddit posts.

![Imgur Image](https://media.giphy.com/media/fdG0bXqpZjXEXSOgRR/giphy.gif)


## Requirements
- Node.js (http://nodejs.org/)
- Npm (https://npmjs.org/) or
- Yarn (https://yarnpkg.com)

You should be able to run the following command after the installation procedure below.

```
$ node --version
v8.11.1

$ npm --version
5.6.0

$ yarn --version
1.6.0
```
## Checkout

```
git clone https://github.com/mguduri/reddit-data-scraping.git
cd PROJECT
```

You can either use npm or yarn to run this application. Please pick one and follow below instructions.


## Installing Dependencies
On the root directory of the project please execute either one of the below commands to install all the project dependencies. You don't have to run both commands, just pick one.

```
yarn install
```
**OR**

```
npm install
```
## Starting the application
On the root directory of the project please execute either one of the below commands to start the reddit data scraping application:

```
yarn start
```

**OR**
```
npm run start
```

After this is complete, the application will be deployed on port `8080`. A browser window opens and it will navigate to `localhost:8080`.

## Testing

```
# run all tests
yarn test:coverage
```
**OR**

```
npm run test
```
## Creating a Production build
This will create a minified version of build.js

```sh
yarn build
```
**OR**


```sh
npm run build
```

---

## Languages & tools
### Build tool
- Webpack 4 & Babel 7

### JavaScript
- React is used for rendering UI views
- Redux for state management
- Redux Sagas are used as a middleware
- Axios for making service calls
- React bootstap reusable components

### CSS
- Bootstrap 4
- SASS styles

### Testing frameworks
- Enzyme
- Jest

### Code coverage
- Jest code coverage

### Eslint
This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google name of the editor + eslint you will find how to enable it for your editor.

## Project structure

After creation, your project should look like this:

```
*reddit-data-scraping*
|
├── */src/*
│   ├── */actions/* redux action creators
│   ├── */components/* react components along with tests
│   ├── */reducers/* redux store
│   ├── */sagas/* redux sagas middleware
│   ├── */services/* service end points
│   ├── */store/* redux store configuration
│   ├── */sass/* styling
│   ├── */util/* contains utils for the components
│   ├── *index.js* App's entry point
│   ├── *reddit-data-scraping.js* Main component
│       
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *.eslintrc* eslint config
├── *.gitignore* ignored folders setup
├── *.config.json* contains app specific configuration
├── *.jest.config.js* contains config for jest tests
├── *.enzyme.config.js* contains config for enzyme jest support
├── *.babelrc* babel config (polyfills)
├── * webpack.config.js* webpack config, it has a dev and prod environment
└── * README.md* this file
```

## Design
Reddit data scraping uses react for rendering ui components, redux for state management and sagas as a middleware.

### UI components
The project contains one main container "SubRedditPostsContainer" that connects to the store and maps state to props and dispatches actions to the store

There are 3 primary components search, posts and post
- Search component allows a user to search for a subreddit
- Posts component renders all the posts for a given subreddit
- Post component renders a given post and handles any action on that post

### Sagas
get-subreddit-posts saga watches for particular actions like "fetch subbreddit posts" and makes service calls to fetch the data and dispatches an action to update store with the response

### Store/Reducers
sub-reddit-post reducer receives actions with data and creates a copy of the new state that is then made available to the components.

Here are some of the thoughts occurred while working on the app:
- I could use my own css to render data, but instead I leveraged bootstap css as I don't have to worry bout responsiveness
- I used my own pagination component to restrict the number of posts that could be viewed at once. This component is very basic and the look and feel could be enhanced based on the requirements
- Also, instead of using pagination alone, we could also create infinite scrolling with pagination for a better user experience
- I co-located tests with their components so as to keep them close to the code. As the app grows, we could also create a test folder for all the tests.
- Currently jest global code coverage threshold is set to 80%, we can tweak it as per our need.
