 # Parking Explorer API
 The parking Explorer API, is a small application to answring to a small test consisting to expose an API presenting the list of parkings in Rennes city, and information about each parking
 like the status, the opning schedules, the geolocalisation, ect.

 The last API consume the following data source: https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=export-api-parking-citedia

 ## technical choice:
 * VSCode: Free, easy to use and extensible IDE. 
 * Nodejs: Runtime environment Based on Javascript engine.
  - Why NodeJS:
    - Why Not!
    - lightweight
    - Love it
    - JSON native & JavaScript++
    - facility and productivity 
    - speed and performance
    - huge number of free tools and active community 
 
 * NPM: Package manager for nodeJS.
  - Why NPM:
    - Make it easy to install libraries, frameworks and to manage packages dependencies

 * Express: An open source server side framework for node.JS
  - Why Express: 
    - Robust and fast app development (has been the uber choice in their server dev)

 * Mocka: JavaScript test Framework runing on nodejs
  - Why Mocka:   
    - easy to integrate in node.JS project
    - flexible, simple and promise support
 * Chai: Assertion library
  - Why Chai:
    - easy to use, extensible, naturel language and huge expressions possibilies
 
 * Eslint: code analyser that allow to quickly find problems in the code 
  - Eslint:
    - performant, personalizable analyze rules, easy integration with node.JS and IDE plugins availability 

* Git: Distributed version controle system.

## Install the application:
In root folder, just run 
```shell
npm install
```

## Analyze the code quality
In root folder, just run 
```shell
npm run lint
```

## Run the application
```shell
npm start
```

## Automatically test the Application:
```shell
npm test
```

-------------------------------------------

# Identified improvements:
  * Error Handling: To be more user-friendly the application should handle errors better, for example a more sofisticated request parsing and suggestions on parameters to use.

  * Mappers: the actual version just expose the data as retrieved from the source, a better version would transform and filter the data so that we send to the client just the data he needs in each request, and in the easiest format to parse.

  * Security: add a token based authentication (like JWT)

  * Variabilization and automatic set up of the NODE environment, in case we have more than one env.

  * More tests for error cases

-------------------------------------------
Spent Time
 ```shell
+/- 4 Hours
```




