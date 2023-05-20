# Express-Sequelize backend server template

### To get started:

- Clone this repo: `git clone https://gitlab.com/ctf-tech-2023/backend-template`
- Reset the git remote repo URL: `git remote rm origin`
- Set new git remote URL: `git remote add origin https://gitlab.com/ctf-tech-2023/new-repo-name`
- Remove the template environment files from git alone: `git rm -r --cached *.env*`

### Project setup:

- Edit `package.json` to reflect the new name and URLs
- Edit `README.md` to reflect project details
- Run `npm i` to install all dependencies
- Before running `sequelize-cli` commands while developing, make sure to set `$env:NODE_ENV='development'` on Windows, or `NODE_ENV=development` on Linux/MacOS
- Env config:
  - **.env** - All things common to all environments (port, mailer creds, JWT secret, admin data access creds, etc.)
  - **.env.development** - Development environment (dev captcha secret, dev DB details)
  - **.env.staging** - Staging environment (dev captcha secret, staging DB conn. string) - **for sysadmins**
  - **.env.production** - Production environment (production captcha secret, prod DB conn. string) - **for sysadmins**
- Staging: `npm run staging_prep` and `npm run staging` to deploy on Render after configuring a new web service on Render dashboard
