Simple rule — whenever you create a new React + Tailwind project, use these exact versions in your `package.json`:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install daisyui@latest
npm install vite@6 @vitejs/plugin-react@4
```

Then set up `src/index.css`:
```css
@import "tailwindcss";
@plugin "daisyui";
```

And `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

**The golden rule:** Always downgrade Vite to v6 after scaffolding, because `npm create vite@latest` installs Vite 8 by default which is broken with `@tailwindcss/vite` right now. Until they release a fix, this is the safe setup.