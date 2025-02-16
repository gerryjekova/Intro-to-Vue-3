
// 1 create app  
// 2 ({})  <- OPTIONS OBJECT - allows addition of optional properties in order to config the application 
// !! -- It needs to be included even if empty if you want to get it started
// It creates the Vue instance which is the 💗 of our APP - it powers everything
const app = Vue.createApp({
  //data OPTION
    data() {
        // returns an object
        return {
            brand: 'Vue Mastery',
            // we place our data inside here, which for now is just Socks
            product: 'Socks',
            // we then proceed to import the app in our index.html <div id="app"> <h1> {{ product }} </h1> </div>

            // we then add the image property and give it the path into the image folder  
           selectedVariant: 0,
            // we then go to add an <img> to the html

            //url: 'https://discord.gg/NGvSgapD3a',
            // adding the url to the data object ,I tried to run the link with https and it didn't go through in case I need to be reminded 

            // we make this a boolean and add it to the html with v-if
            //inStock: true
            // display changes to none in the devtools when it's changed to false dynamically
           //image: '/assets/images/socks_blue.jpg', - replacing with Computed Property
           //awesome
           //awesome: true,

           // if inventory > 10 (stock), else-if inventory <= 10 && inventory > 0 (almost out of stock), else (out of stock) 
           //inventory: 99,
           //inStock: true, - switching out for computed property
           // exercise: add an onSale boolean to the data object, use that to conditionally render a p tag that says "On Sale", whenever onSale is true
           //onSale: false,

           // how do we display details as a list? 
           details: [ '50% cotton', '30% wool', '20% polyester'],
           // creating variants array 
           variants: [
            { id: 437, color: 'green' , image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 212, color: 'blue' , image: './assets/images/socks_blue.jpg' , quantity: 0  }, 
           ],

           // todos: [
             //         { name: 'Schedule 30 Shorts!'} , { name: 'Giveaway' }, { name: 'Shower!' } ,
               //    ],
                   
            cart: 0,
        }
    },
    methods: {
      addToCart () {
        this.cart += 1
      },
      updateVariant(index) {
        this.selectedVariant = index
      },
    },
    //COMPUTED PROPERTY 
    computed: { 
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      }
    }
})

