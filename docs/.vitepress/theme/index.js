import DefaultTheme from 'vitepress/theme'
import './custom.css'
import '@scalar/api-reference/style.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const ScalarWrapper = await import('./ScalarWrapper.vue')
      app.component('ScalarWrapper', ScalarWrapper.default)
    }
  }
}
