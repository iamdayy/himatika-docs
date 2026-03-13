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
    sections: [
      {
        title: 'Panduan Admin',
        description: 'Panduan lengkap untuk admin',
        links: [
          {
            title: 'Kelola Sertifikat',
            description: 'Panduan lengkap mendesain, mengonfigurasi, dan menerbitkan sertifikat digital untuk peserta dan panitia agenda.',
            href: '/4.panduan-admin/9.kelola-sertifikat',
          },
          {
            title: 'Kelola Agenda',
            description: 'Panduan lengkap untuk mengelola agenda',
            href: '/4.panduan-admin/1.kelola-agenda',
          },
        ],
      },
    ],
  },
})