# Simple Node App from project AyaPay test.





********Disclaimer: This is a test project for interview.******





# Overview

I copied the NodeJS code from the repo which it's in email. The original plan was to host all the code, both infrastructure provision terraform code and Nodejs code, in same repo but setting up GitHub actions will be hard and complex, So I separate two different repo for infrastructure provision and NodeJS app.

I apply well-known Docker best practices for security and speed, add a GitHub action CI/CD pipeline, and optimize the NodeJS code for more readability, speed, and configurability in the current version of the app.

# Optimizing the Code

The original code was old school and some part are unnecessary. Mainly I switch the variables type from `var` to `const` to apply current JavaScript best practices, remove some necessary code , apply express latest `response` style, and instead of serving from express server, I used NodeJS native http server as serving point for more speed. Most important of all is I separate the env variables like `PORT` to outside instead of hardcoding inside the file.

# Applying CI/CD Pipeline

The most vital aspects of modern cloud native development is CI/CD, even through this part is not in the test, I assumed this is better to applied. Jenkins is dominating the market, but for the not-too-complex-build-process app like NodeJS, I assumed GitHub actions is the best, Platform like NodeJS, Python and Go are not too complex in building unlike Java or .NET. Current action is fairly simple, since there is nothing to test in the code and there is only one library used, so I skip the test and security check stage. Initially I want to apply [synk](https://snyk.io/) but since there is only one library, this seem like overengineering. Currently using DockerHub for hosting the image. Action config is under `/github/workflows/main.yml` path.

# Dockernizing the App

Initially, I want to apply multi-stage build, like below

 

```docker
# 1. Build the app using build env
FROM node:latest AS build-env
--- building -----

# 1. Build the app using minimal alpine env
FROM node:lts-alpine
--- running ----
```

but the current app has not build process, so I go with the simple flow. Added and run with `dumb-init` for prevent unexpected behaviour when running inside of Docker.

# Running the App using Docker

Since the PORT is separated into env variables, now it’s need to provide port value in docker run.

 

```docker
$docker run -p <host-port>:<docker-port> \
-d -e PORT=3000 -e NODE_ENV=production \ 
khantki/ayapay-simple-node-app:main
```