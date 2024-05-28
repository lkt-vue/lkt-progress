
import {App, Plugin} from "vue";
import "../style.css";
import { default as progress } from "./lib-components/LktProgress.vue";
const LktProgress: Plugin = {
    install: (app: App, options?: {}) => {
        app.component('lkt-progress', progress);
    },
};
export default LktProgress;