# subreddit-display
A React app to display posts for a given subreddit. It uses Reddit API to fetch the top 50 subreddit posts and displays 10 posts at a time.

![Imgur Image](https://media.giphy.com/media/fdG0bXqpZjXEXSOgRR/giphy.gif)

## Requirements
`subreddit-display` requires [Node.js](http://nodejs.org/) for runtime and [Yarn](https://yarnpkg.com) for package management. It has been developed and tested with the following versions:
```sh
$ node --version
v12.3.1

$ yarn --version
1.16.0
```

## Installation

### Checkout source

```sh
git clone https://github.com/mguduri/subreddit-display.git
cd subreddit-display
```

### Install dependencies

```sh
yarn install
```

### Launch application
```sh
yarn start
```
At this point, `subreddit-display` should be running on port `8080`.
Enter any subreddit name (ex: Reactjs) in the search bar displayed on the homepage.


## Testing
```sh
yarn test:coverage
```

## Building
To create a minified version of build.js for production/staging rollout

```sh
yarn build
```


## Tech Stack
Following are the languages and tools used for building this react application

### JavaScript
- React is used for rendering UI views
- Redux for state management
- Redux Sagas are used as a middleware
- Axios for making service calls
- React bootstap for reusable components

### CSS
- Bootstrap 4
- SASS styles

### Testing frameworks
- Enzyme
- Jest

### Code coverage
- Jest

### Eslint
This application uses AirBnB Javascript specs to aid in improving readability and building error-free react and javasctipt code

### Build tool
- Webpack 4 & Babel 7

## Project structure

This application is laid out in the following manner:

```
*subreddit-display*
|
├── */src/*
│   ├── */actions/* redux action creators
│   ├── */components/* react components along with tests
│   ├── */reducers/* redux store
│   ├── */sagas/* redux sagas middleware
│   ├── */services/* service endpoints
│   ├── */store/* redux store configuration
│   ├── */sass/* styling
│   ├── */util/* contains utils for the components
│   ├── *index.js* app's entry point
│   ├── *subreddit-display.js* Main component
│       
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *.eslintrc* eslint config
├── *.gitignore* ignored folders setup
├── *.config.json* contains app specific configuration
├── *.jest.config.js* contains config for jest tests
├── *.enzyme.config.js* contains config for enzyme jest support
├── *.babelrc* babel config (polyfills)
├── * webpack.config.js* webpack config, it has a dev and prod environment configuration
└── * README.md* this file
```

## Design
This application uses react for rendering ui components, redux for state management and sagas as a middleware.

### UI components
The project contains one main container `SubRedditPostsContainer` that connects to the store and maps state to props and dispatches actions to the store

There are 3 primary components: `search`, `posts` and `post`
- Search: allows a user to search for a subreddit
- Posts: renders all the posts for a given subreddit
- Post: renders a given post and handles any action on that post

### Sagas
`get-subreddit-posts` saga watches for particular actions like `SUBREDDIT_POSTS_FETCH_REQUEST` and makes service calls to fetch the data and dispatch an action to update store with the response

### Store/Reducers
`sub-reddit-post` reducer receives actions with data and creates a copy of the new state which is then made available to the components

## Discussion
Some of the thoughts occurred while working on the app:
- I could have used my own css to render data, but instead I leveraged bootstap css for ease of use
- I used my own pagination component to restrict the number of posts that could be viewed at once. This component is very basic and the look and feel could be enhanced based on the requirements
- Also, instead of using pagination alone, we could also create infinite scrolling with pagination for a better user experience
- I co-located tests with their components so as to keep them close to the code. As the app grows, we could also create a test folder for all the tests
- Currently jest global code coverage threshold is set to 80%, we can tweak it as needed
