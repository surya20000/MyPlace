import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost300',
        secure: false,
      },
    }
  },
  plugins: [react()],
  define:{
    'import.meta.env.VITE_KEY': JSON.stringify(import.meta.env.VITE_KEY),
  }
})
