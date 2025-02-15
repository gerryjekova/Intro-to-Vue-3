### 1 [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/) learning path from https://www.vuemastery.com/courses/
> [To Find Vue Script from CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
### [Creating a New App](https://www.vuemastery.com/courses/intro-to-vue-3/creating-the-vue-app-vue3)
>> using `mountedApp.product = 'Shoes'`  in F12 Console changes the data and updates it automatically
>>>![devtools test1](assets/images/update-devtools.png)
### 3 Attribute Binding
>>>> ![vbind](assets/images/vbind.png)
>- how do we bind src to image? -> v-bind:src="image" - 💡this is the v-bind directive - we created a bond between the attribute "image" & the data itself inside it in the app 
>>> `v-bind` <-  (dynamically bind)  `:` <- (the : serves as the glue) `src` <- (attribute) `"image"` <- value of the expression 
>> ![bind to image data](assets/images/binds-image-to-imagedata.png)
> ![use cases](assets/images/vbind-usecases.png)
### 4 [Conditional Rendering](https://www.vuemastery.com/courses/intro-to-vue-3/conditional-rendering-vue3) 
- [Docs](https://vuejs.org/guide/essentials/conditional.html)
>- `<p` **v-show**=`"inStock">`In Stock`</p>` 
>- `v-if` it is `in stock` 
>- `show` `'in stock'`
>>- can be achieved with `v-if` as well
>>>-  `<p` **v-if**=`"inStock">`In Stock`</p>` 
>>- `v-if` it is in stock - show `'in stock'`
>- `<p` **v-else**`>` Out of Stock `</p>`
> ![devtools testing](assets/images/devtools-real-time-render.png)