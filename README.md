# GIPHY app
This app, when a button is registered, will display ten GIPH's in relation to the subject.
Pre-selected GIPH buttons are available. There's a feature that allows the user to add a button with a subject of thier choice! The GIPH's start out still. You can click on the GIPH to play then again to pause.
    
 Try it out  [GiphyApp](https://jjferg.github.io/Giphy-App/)
 
## Over View
- Front End Application
- HTML  is minimal. A Div container is used to house the elements. A form element with input for user.
- BootStrap is use just to keep the elements in simple order.
- Javsascript/JQuery is used here to dynamically create the button elements along with attributes. Which takes the users 
input makes GET request to the giphy api, if successful the data is returned then rendered to the HTML.
- CSS is used to color and shape the buttons. 

## How to install this app on your computer(local)
1. Under the repository name, click Clone or download.
2. In the Clone with HTTPs section, click to copy the clone URL for the repository.
3. Open Git Bash.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Link to [Install Instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

### requirements for install(local)
First you need to do is create a GIPH account. Sign up and request a key for API accesss. <br />
Now add the api key to you query string Example: 
```js 
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + api key
```

