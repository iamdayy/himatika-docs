export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'zinc',
    },
  },
  header: {
    // Title to display if no logo
    title: 'Himpunan Mahasiswa Informatika',
    // Logo configuration
    logo: {
      alt: 'HIMATIKA',
      // Light mode
      light: '/logo.png',
      // Dark mode
      dark: '/logo.png'
    },
  },
   assistant: {
    // Show the floating input on documentation pages
    floatingInput: false,

    // Show the "Explain with AI" button in the sidebar
    explainWithAi: true,

    // FAQ questions to display when chat is empty
    faqQuestions: [],

    // Keyboard shortcuts
    shortcuts: {
      focusInput: 'meta_i'
    },

    // Custom icons
    icons: {
      trigger: 'i-lucide-sparkles',
      explain: 'i-lucide-brain'
    }
  }
})
