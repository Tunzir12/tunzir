# Firebase Setup Guide for Your Portfolio

This guide will help you set up Google authentication and Firebase Realtime Database for your portfolio project management system.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "portfolio-tunzira")
4. Follow the setup wizard
5. Select or create a Google Cloud project
6. Enable Google Analytics (optional)
7. Click "Create project"

## Step 2: Set Up Authentication

1. In Firebase Console, go to **Authentication**
2. Click **Get started**
3. In the **Sign-in method** tab:
   - Click **Google**
   - Toggle "Enable" ON
   - Add a project support email
   - Click **Save**

## Step 3: Set Up Realtime Database

1. In Firebase Console, go to **Realtime Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location closest to your users
5. Click **Done**

### Realtime Database Security Rules (for public read, authenticated write)

Go to **Realtime Database → Rules** and update with:

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null",
    "projects": {
      ".indexOn": ["createdAt"]
    }
  }
}
```

**For development/testing:** You can temporarily use test mode rules that allow all operations:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Important:** Test mode should only be used for development. For production, use authenticated rules.

## Step 4: Set Up Cloud Storage (for project images)

1. In Firebase Console, go to **Storage**
2. Click **Get started**
3. Select **Start in test mode**
4. Choose your location
5. Click **Done**

### Storage Security Rules

Go to **Storage → Rules** and update with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 5: Get Your Firebase Config

1. In Firebase Console, click the gear icon (Settings)
2. Go to **Project settings**
3. Scroll down to "Your apps"
4. Click the web app (if none exist, click **Add app** and select web)
5. Under "Firebase SDK snippet", select "Config"
6. Copy your config object

Your config will look like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789...",
  appId: "1:123456789:web:abcdef123456..."
}
```

## Step 6: Create Environment Variables

**Important:** Never commit your Firebase config to version control. Instead, use environment variables.

1. Create a `.env` file in your project root (next to `package.json`)
2. Add your Firebase config as environment variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.region.firebasedatabase.app
```

3. The `.env` file is already added to `.gitignore` to keep it secret

## Step 7: Update Your Config File

Your `src/config/firebase.js` should now use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
}
```

## Step 8: Install Firebase Package

Run this command in your project:

```bash
npm install firebase
```

## Step 9: Test the Setup

1. Run your dev server: `npm run dev`
2. Navigate to `http://localhost:5173/#/admin-login`
3. Click "Sign in with Google"
4. After authentication, you should see the Admin Dashboard
5. Try adding a project!

## Usage

### Public Users:
- See projects on the homepage
- Can view project details, live demos, and GitHub links

### Admin (You):
- Go to `/admin-login` to sign in with Google
- Access `/admin-dashboard` to manage projects
- Add, edit, or delete projects
- Upload project images
- Add technology tags
- Add live links and GitHub links

## Troubleshooting

### "Auth Error: Code: auth/unauthorized-domain"
- Go to Firebase Console → Authentication → Settings
- Add your domain to "Authorized domains"
- If using localhost, it should be auto-added

### Images not uploading
- Make sure Cloud Storage is set up
- Check that your security rules allow authenticated writes

### Projects not showing
- Check Realtime Database connection in browser DevTools
- Make sure Realtime Database is created (not Firestore)
- Verify your security rules allow public reads

### "PERMISSION_DENIED: Permission denied" when saving projects
- Check your Realtime Database security rules in Firebase Console
- Make sure you are signed in with Google authentication
- If using email-restricted rules, ensure your email matches exactly (case-sensitive)
- For development, temporarily use test mode rules: `{ ".read": true, ".write": true }`
- Verify that the `auth` object is available in your Firebase security rules

### Environment variables not loading
- Make sure your `.env` file is in the project root (next to `package.json`)
- Restart your dev server after creating or modifying `.env`
- Check that variable names start with `VITE_` (required for Vite)
- Verify `.env` is listed in `.gitignore`

## Database Structure

Your projects will be stored in Realtime Database under `/projects/` with this structure:

```
{
  "projects": {
    "uniqueId1": {
      "title": "My Project Name",
      "description": "Project description...",
      "tags": ["React", "Node.js", "MongoDB"],
      "liveLink": "https://project.com",
      "githubLink": "https://github.com/username/repo",
      "imageUrl": "https://firebasestorage.googleapis.com/...",
      "createdAt": "2026-04-04T10:30:00.000Z",
      "updatedAt": "2026-04-04T10:30:00.000Z"
    },
    "uniqueId2": {
      // ... another project
    }
  }
}
```

## Security Notes

- **Environment Variables:** Your Firebase config is now stored in `.env` which is gitignored and won't be committed to GitHub
- Test mode rules should only be used for development
- Before production, update Realtime Database rules to authenticate users properly
- Never commit your `.env` file to version control (it's already in `.gitignore`)
- Consider limiting writes to only your email address for additional security

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null && auth.token.email == 'your-email@gmail.com'",
    "projects": {
      ".indexOn": ["createdAt"]
    }
  }
}
```

**Important:** Replace `'your-email@gmail.com'` with your actual Google account email address that you use to sign in.

---

For more help, check the [Firebase Documentation](https://firebase.google.com/docs/)
