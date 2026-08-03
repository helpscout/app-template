# Help Scout Developer Platform — Sidebar App Template

This is a basic starter template for building a Help Scout Sidebar App. It uses [Vite](https://vitejs.dev) and React, and it comes with Help Scout's UI Kit and JavaScript SDK pre-installed.


## 🚀 Getting Started

1. Go to https://github.com/helpscout/app-template and click the green **Use this template** button → **Create a new repository**. Give your new repo a name, and save it.
2. On your new repo on GitHub, click **Code** → **Codespaces** → **Create codespace on main**.
> The first time you open a Codespace it will take a couple of minutes to build the container and install dependencies. Once that's done, you'll see VS Code running in your browser with a terminal open at the bottom.
3. In the terminal, run `npm run dev`.
4. Open the **Ports** tab (next to Terminal) — port `5173` is forwarded automatically and set to Public. Copy its URL from the **Local Address** column, you'll need it in a few minutes.
> If Public isn't available as an option, your GitHub org may restrict it — right-click the port and set **Port Visibility** to **Public** yourself. Help Scout loads your app inside a customer's browser, so a Private port will show a GitHub sign-in page instead of your app.

5. On Help Scout, login as an Administrator or Account owner and navigate to **Manage** -> **Apps** -> **Build a custom app** (or click [here](https://secure.helpscout.net/apps/custom/))
6. Click on **Create App**, fill out the form as described below, and click Save:
- App Name: anything you want
- Content Type: Dynamic App
- Callback URL: the URL you copied in step 4
- New Apps Platform: Toggle on
- Mailboxes: select the mailboxes where you want this app to be available in
7. Go to one of the Mailboxes you selected in the previous step and open a conversation. You should see your app running in the right Sidebar.
8. Now you can start making changes to your app in the Codespace and you should see those changes reflected immediately in Help Scout.

## 🛠️ Resources

- [UI Kit Storybook](https://ui-kit-bqr.pages.dev/)
- [JavaScript SDK Documentation](https://paper.dropbox.com/doc/Developer-Platform-API-Methods--B3IOyiE8hnLX3P9gvmwcroNQAg-uEz4uEB6x7aWsur5NdPui)
