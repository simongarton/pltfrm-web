import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(['NODE_ENV', 'PLTFRM_API_KEY', 'PLTFRM_URL']) // Add your environment variables here
  ],
})
