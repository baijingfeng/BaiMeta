import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

const server = express()

server.get('/', (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />)

  res.send(`
    <html>
      <head>
        <title>React SSR Demo</title>
      </head>
      <body>
        <div id="app">${appString}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `)
})

server.listen(3000)
