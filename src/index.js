import { createApp } from 'vue'
import axios from 'axios'

const app = createApp({
  data() {
    return {
      city: '',
      weather: null,
      loading: false
    };
  },
  methods: {
    async getWeather() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=7914d5a440960cfd5df3bd0388a7ad0f`
        );
        this.weather = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
})

app.mount('#app')