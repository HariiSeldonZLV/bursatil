import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from "vuetify/iconsets/mdi"

// 🎨 Tema oscuro minimalista
const vuetify = createVuetify({
  components,
  directives,
  icons: { defaultSet: "mdi", aliases, sets: { mdi } },
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          primary: "#003ac3",
          secondary: "#042960",
          accent: "#EEEEEE",
          error: "#FF5722",
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount("#app")