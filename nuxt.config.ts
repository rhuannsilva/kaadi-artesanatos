// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    },
  },
  modules: ["@ant-design-vue/nuxt", '@nuxtjs/google-fonts', "nuxt-rating"],
  googleFonts: {
    families: {
      Poppins: true
    }
  }
})