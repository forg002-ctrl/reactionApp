import { createApp } from 'vue';
import { Quasar, Notify, Dialog } from 'quasar';

import router from './router';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';

(async (): Promise<void> => {
    let app = createApp(App);

    app.use(router);
    app.use(Quasar, {
        plugins: {
            Dialog,
            Notify,
        },
    });

    app.mount('#app');
})();
