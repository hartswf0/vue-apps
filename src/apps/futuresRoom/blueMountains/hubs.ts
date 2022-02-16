import App from "./App.vue";
import HubsAppProto from "../../HubsApp";

class HubsApp extends HubsAppProto {
    constructor (width: number, height: number, params: any = {}) {
        super(App, width, height, params)
        this.isInteractive = true;
    }
}

var init = function(params: any = {}) {
    let app = new HubsApp(600,475, params)//this is where to change the size of the vue app + also need to change main.ts size
    app.mount()
    return app
}

export default init