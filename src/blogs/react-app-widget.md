---
slug: "/blog/how-to-embed-a-react-application-on-any-website"
date: "2020-05-16"
title: "React App Widgets"
featuredImage: "../images/wireframe.jpg"
---

# How to Embed a React Application in Any Website

> Use create-react-app and then embed it into an existing project

A while ago a wrote a fun blog on how to embed react applications into any website (from create react app).

If you would like to check it out you can follow this link to [Medium](https://betterprogramming.pub/how-to-embed-a-react-application-on-any-website-1bee1d15617f)

TLDR - It looks like this!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>React Widget Example</title>
  </head>
  <body>
    <h1>Hello! This is some static content</h1>

    <div id="javascriptExample"></div>
    <div id="typescriptExample"></div>

    <h3>Thanks for checking out my blog!</h3>

    <script src="./react-javascript/dist/runtime-main.e2d9c359.js"></script>
    <script src="./react-javascript/dist/2.bdbb6c1f.chunk.js"></script>
    <script src="./react-javascript/dist/main.64e80544.chunk.js"></script>

    <script src="./react-typescript/dist/launch.js"></script>
    <script src="./react-typescript/dist/2.d6116b10.chunk.js"></script>
    <script src="./react-typescript/dist/main.2c581a6e.chunk.js"></script>
  </body>
</html>
```

And the source code can be found [here](https://github.com/jollyjerr/react-widget)
