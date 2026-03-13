// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content","nuxt-llms"],
  site: {
    name: 'Dokumentasi Resmi Situs Resmi HIMATIKA',
    description: 'Himpunan Mahasiswa Informatika'
  },
  llms: {
    domain: 'https://docs.himatika-itsnupekalongan.com',
    title: 'Dokumentasi Resmi Situs Resmi HIMATIKA',
    description: 'Himpunan Mahasiswa Informatika',
  },
})