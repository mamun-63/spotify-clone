# Spotify Clone

#### Checkout Live Demo of this Spotify clone: [*Live Site*](https://spotify-clone-5c591.web.app//) 
#### Don't have spotify account, check here: [Live Site](https://angry-wing-9e2972.netlify.app/) *It'll not display acoount's info like playlist, songs, album name etc.*


##### Keywords: *react, react-hooks, react context api, material-ui, spotify api*

#### App Overview 
- Fetched user(me in this case) token to authenticate to spotify
- Connecting our app to spotify API by the access token spotify provide
- When connection established- have fetched real time Playlist from my account
- Also fetched Your Release Radar songs and some information like artists name, album, how many songs, or likes

### Description

It's a massive build of API fetching I can say. Spotify API has it's own User Authentication. But it has no permission to use like user-password login system. You need prior spotify account attached to the browser, only then you can access to spotify main page. I have used my own spotify account id to get real time Playlist and songs to display in this clone. So if you are trying this app, then you can't go the page of yours account. Although you're using your own account login, it will redirect to my accounts page.

<img src="./public/image/spotify-clone.png" alt="Spotify-clone_Photo"/>  
<img src="./public/image/spotify-clone_.png" alt="Spotify-clone_Photo"/>  

#### Limitation
- You can't play song, control sound or play next, use shuffle
- This can be done only if you have premium spotify account maybe

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).