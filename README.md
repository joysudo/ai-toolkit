# Git Commands + Guide setup

1. The GitHub Setup (Fork & Clone)
    Click "Fork": Do this on the original GitHub web page to create your own remote copy.
   
   -  git clone <your-fork-url>: Downloads your personal fork to your computer.
   -  cd <repository-name>: Moves your terminal into the project folder.

2. Configure the Original Project
    git remote add upstream <original-repo-url>: Links your local project to the original       r       repository   so you can sync future updates.

3. Make and Commit Changes
   git checkout -b <new-branch-name>: Creates and switches to a new branch for your feature.

Edit your files: Make your code changes in your text editor.
- git status: Verifies which files you modified.
- git add .: Stages all of your modified files.
- git commit -m "Description of changes": Saves your staged changes locally.

4. Push and Propose
   git push origin <new-branch-name>: Uploads your local branch up to your GitHub fork.

   Pull Request: Open GitHub in your browser and click "Compare & pull request" to send your           changes to the original project owner.

# Below here is more Additional resources within GitHub - Command Lines. 

SETUP AND CONFIGURATION
--------------------------------------------------------------------------------
git init
-> Initializes a new local repository.

git clone <url>
-> Copies a remote repository locally.

git config --global user.name "<name>"
-> Sets your commit username.

git config --global user.email "<email>"
-> Sets your commit email.


MANAGING CHANGES
--------------------------------------------------------------------------------
git status
-> Shows modified and staged files.

git add <file>
-> Stages a specific file.

git add .
-> Stages all modified files.

git commit -m "<message>"
-> Saves staged changes locally.

git commit --amend
-> Modifies the last commit.


BRANCHING AND MERGING
--------------------------------------------------------------------------------
git branch
-> Lists all local branches.

git branch <branch-name>
-> Creates a new branch.

git checkout <branch-name>
-> Switches to a branch.

git checkout -b <branch-name>
-> Creates and switches branch.

git merge <branch-name>
-> Merges branch into current.

git branch -d <branch-name>
-> Deletes a local branch.


REMOTE REPOSITORIES
--------------------------------------------------------------------------------
git remote add origin <url>
-> Links local to remote.

git fetch
-> Downloads history without merging.

git pull
-> Downloads and merges changes.

git push origin <branch>
-> Uploads commits to remote.


INSPECTING HISTORY
--------------------------------------------------------------------------------
git log
-> Shows chronological commit history.

git log --oneline
-> Displays condensed history list.

git diff
-> Shows unstaged file changes.

git blame <file>
-> Shows author of changes.


UNDOING CHANGES
--------------------------------------------------------------------------------
git restore <file>
-> Discards uncommitted local changes.

git reset --soft HEAD~1
-> Undoes commit, keeps changes.

git reset --hard HEAD~1
-> Undoes commit, deletes changes.

git revert <commit-id>
-> Creates rollback commit safely.

git stash
-> Saves uncommitted work temporary.

git stash pop
-> Restores latest stashed work.
---
-------------------------------------------------------------------------------------------------------------------------------
# **** FIREBASE ****

🔐 Authentication & Backend Architecture (Firebase RPT Documentation)
1. Purpose
The AI Toolkit uses Firebase Authentication as its secure identity layer, ensuring that students, educators, and administrators can log in safely across web and mobile environments. Firebase provides a unified backend platform that handles login flows, user management, and session security without requiring a custom server stack. This allows the toolkit to focus on delivering AI‑powered learning experiences while relying on Google’s trusted infrastructure for authentication and data protection.

“Firebase gives developers backend services for apps, including authentication, databases, hosting, analytics, and messaging in one Google platform.”

2. Requirements
Minimum Requirements
A Google Firebase project

Web application configured with Firebase SDK

At least one enabled authentication provider (Email/Password, Google, etc.)

Basic Firestore collections for storing user profiles or progress

“A typical firebase app starts with project creation, SDK installation, and environment setup.”

Recommended Requirements
Firebase CLI for local development

Emulator Suite for testing authentication and Firestore rules

Indexed Firestore models and validated security rules

Organization‑managed Firebase project for production deployments

“Firebase documentation covers emulators, CI deployment, security rules testing, analytics events, remote config, app distribution, and monitoring.”

3. Technical Overview
Authentication Flow
The AI Toolkit uses Firebase Authentication to manage:

User sign‑in and sign‑out

Session persistence

Provider‑based login (Google, Email/Password, etc.)

Secure redirect handling

“Firebase authentication handles common sign‑in flows with managed provider support.”

Firestore Integration (Optional for User Data)
If the toolkit stores user progress or profile data, Firestore is used as the synchronized document database.

“Firebase firestore stores synchronized document data for web and mobile clients.”

Security Rules
All authentication‑gated reads/writes follow Firebase’s recommended rule patterns:

Users can only access their own documents

Public content is read‑only

Sensitive data requires explicit validation

“Firebase docs recommend handling permissions deliberately because client‑connected databases depend on strong rules, indexes, and validation logic.”

4. Implementation Steps
Create Firebase Project  
Register the AI Toolkit app in the Firebase Console.

Install Firebase SDK  
Add Firebase Authentication and Firestore packages to the project.

Enable Authentication Providers  
Configure Google, Email/Password, or other providers in the Firebase Console.

Set Up Firestore (If Used)  
Create collections for user profiles, progress tracking, or toolkit metadata.

Configure Security Rules  
Validate access patterns before production deployment.

“Create firebase firestore data models, indexes, and security rules before production writes.”

5. Why Firebase for the AI Toolkit
Firebase shortens development time and reduces backend complexity, allowing the AI Toolkit team to focus on building interactive AI learning modules rather than managing servers.

“Firebase can shorten the distance between an idea and a working application… without a large backend team.”

It also provides:

Reliable hosting

Scalable authentication

Real‑time data sync

Built‑in analytics

Easy deployment workflows

6. Cost Considerations
The AI Toolkit can operate within Firebase’s free tier during early development and testing. As usage scales, monitoring read/write operations and storage is recommended.

“Firebase free tiers are useful for experiments, but firebase price changes can matter when reads, writes, storage, hosting traffic, or cloud functions scale quickly.”

7. Summary
Firebase provides a secure, scalable, and developer‑friendly foundation for authentication in the AI Toolkit. By leveraging Firebase Authentication and optional Firestore integration, the project gains a modern backend without the overhead of custom infrastructure — enabling faster iteration, safer user access, and a smoother experience for students and educators.



-------------------------------------------------------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
