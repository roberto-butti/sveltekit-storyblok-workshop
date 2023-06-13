# Sveltekit Storyblok Workshop

This is the repository for tracking all the processes for creating a sample SvelteKit application with Stroyblok.
The GitHub repository is here: [sveltekit-storyblok-workshop](https://github.com/roberto-butti/sveltekit-storyblok-workshop)

## Install SvelteKit

```shell
# Installing SveteKit base project
npm create svelte@latest sveltekit-storyblok-workshop
# Installing package in the project directory
cd sveltekit-storyblok-workshop
npm install
# Adding local Git
git init && git add -A && git commit -m "Initial commit"
# Running the local web server and open the browser
npm run dev -- --open
```

## Creating Storyblok space
To obtain your access token, you have to [create a new Storyblok space](https://app.storyblok.com/#/me/spaces/new).
You can create a space for free by selecting the "Community plan".

## Configuring the Visual Editor

In the "Settings" section, selecting the "Visual Editor" tab, you can set the `Location (default environment)` with `https://localhost:5173/`

![Visual Editor Settings](doc/settings-visual-editor.png)

## Getting the Access Token

In the "Settings" section, selecting the "Access Tokens" tab, you can get your access token.

![Getting the Access Token](doc/settings-access-token.png)

## Setting the Access token
For setting the access token you can copy the `.env.example` file into `.env` file or in general you have to set the following 2 parameters in the `.env` file:

```
PUBLIC_ACCESS_TOKEN=yourspaceaccesstoken
PUBLIC_REGION=eu
```

These two parameters will be used in the Storyblok connection.
