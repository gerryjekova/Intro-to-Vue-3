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
            product: 'Lamp '
            // we then proceed to import the app in our index.html <div id="app"> <h1> {{ product }} </h1> </div>
        }
    }
})