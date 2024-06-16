
# pltfrm-web

React/Vite + Tailwind front end for demos of pltfrm data.

See the main [pltfrm](https://github.com/simongarton/pltfrm) repository for the back-end.

## Hosting

Hosted on [Netlify](https://pltfrm-web.netlify.app/) which I'm finding just works.

## Display

![Screenshot](/documentation/web.png)

I'm currently returning the current weather; the next 60 minutes of forecast rain; and the next 48 hours of various metrics.

## Source data

The source data is from [OpenWeatherMap](https://openweathermap.org/)/

## Set up

```
npm create vite
(follow the prompts for project name, React, Javascript)
cd pltfrm-web

npm install

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
(add the types to content in tailwind.config.js)
(add the directives to index.css)

npm install react-chartjs-2 chartjs

npm run dev

```

[Tailwind install on Vite](https://tailwindcss.com/docs/guides/vite)

Now edit the App page and away we go.
