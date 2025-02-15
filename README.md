> [To Find Vue Script from CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
>> using `mountedApp.product = 'Shoes'`  in F12 Console changes the data and updates it automatically
>>>![devtools test1](assets/images/update-devtools.png)
>>>> ![vbind](assets/images/vbind.png)
>>>>    <!-- how do we bind src to image? -> v-bind:src="image" - 💡this is the v-bind directive - we created a bond between the attribute "image" & the data itself inside it in the app-->  
>>> `v-bind` <-  (dynamically bind)  `:` <- (the : serves as the glue) `src` <- (attribute) `"image"` <- value of the expression 
>> ![bind to image data](assets/images/binds-image-to-imagedata.png)
> ![use cases](assets/images/vbind-usecases.png)