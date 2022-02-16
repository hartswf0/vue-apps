import WebAppProto from "../../WebApp";
import App from './App.vue'

class WebApp extends WebAppProto {
    constructor () {
        super(App, 600, 475)//change the size of the vue app here
    }
}

let app = new WebApp()
app.mount()

app.vueRoot!.$el.style.border = "solid 0.1em"