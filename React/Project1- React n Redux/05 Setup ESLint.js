To help us quickly catch mistakes, maintain consistency and enforce best practices
we're going to use ESLint to lint our code.

Everytime we save it'll run.
To configure ESLint we need to put eslintrc file in the root

0==Off 1==Warning 2==Error (these numbers are @bottom)

{ //most of this setup can be done with $eslint --init
  "extends": [
    "eslint:recommended", //we begin by extending ESLint's recommonded settings as a baseline
    "plugin:import/errors", //we're also augmenting the recommended settings with plugins that provide enhanced linting  for ES6 imports
    "plugin:import/warnings"
  ],
  
  "plugins": [
    "react" //here we're also using ESLint plugin React to add a number of React-specific linting rules
    //all the rules can be seen below. They're prefixed with react.
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {  //this is for the browser environment (i.e client side code)``
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  
  
  //Here we override various settings based on our personal choice
  "rules": {
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "semi": [1, "always"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    
    /*  Note that these are react rules: 0==Off 1==Warning 2==Error */
    "react/display-name": [ 1, {"ignoreTranspilerName": false }],
    "react/forbid-prop-types": [1, {"forbid": ["any"]}],
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1
  }
}

//and finally in pkg.json add this in "scripts"
"scripts: : {
..
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
..
}//eslint by default doesn't have a watch functionality. So we use esw(eslint-watch)
//update: eslint-watch(esw) doesn't currently support spaces in file names.
//webpack.config.*, src, tools are the files we are asking it to watch but that shouldn't be really necessary 

$npm run lint


//also add this
"scripts": {
    "lint:watch": "npm run lint -- --watch", //`npm run lint` will execute our custom 'lint' command
}//this wierd syntax let us pass 'watch' flag to our lint script


/* Now we want to run all the scripts automatically without hastle  */
$npm run all
//with this we can run all at a time or in parallel


//add
    "start": "npm-run-all --parallel open:src lint:watch",
//parallel flag is passed to tell it to run anything that is listed right to it 'at the same time'
//i.e open:src lint:watch will be done at a time

//final scripts key will look like this

"scripts": {
    "prestart": "babel-node tools/startMessage.js",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch"
    }


