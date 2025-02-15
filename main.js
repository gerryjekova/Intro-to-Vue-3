
// 1 create app  
// 2 ({})  <- OPTIONS OBJECT - allows addition of optional properties in order to config the application 
// !! -- It needs to be included even if empty if you want to get it started
// It creates the Vue instance which is the 💗 of our APP - it powers everything
const app = Vue.createApp({
  //data OPTION
    data() {
        // returns an object
        return {
            // we place our data inside here, which for now is just Socks
            product: 'Socks',
            // we then proceed to import the app in our index.html <div id="app"> <h1> {{ product }} </h1> </div>

            // we then add the image property and give it the path into the image folder  
            image: './assets/images/socks_blue.jpg',
            // we then go to add an <img> to the html

            url: 'https://discord.gg/NGvSgapD3a',
            // adding the url to the data object ,I tried to run the link with https and it didn't go through in case I need to be reminded 

            // we make this a boolean and add it to the html with v-if
            //inStock: true
            // display changes to none in the devtools when it's changed to false dynamically
            
           awesome: true,

           inventory: 3,

           // exercise: add an onSale boolean to the data object, use that to conditionally render a p tag that says "On Sale", whenever onSale is true
           onSale: false

            
        }
    }
})

