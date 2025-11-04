import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config
// - During development, proxy the waitlist API to the Firebase Functions emulator (if running)
// - Prod is handled by Firebase Hosting rewrites in firebase.json
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // If you run: firebase emulators:start --only functions
      // This will forward /api/waitlist to http://127.0.0.1:5001/lykluk-467006/us-central1/waitlist
      '/api/waitlist': {
        target: 'http://127.0.0.1:5001/lykluk-467006/us-central1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/waitlist/, '/waitlist'),
      },
    },
  },
})
