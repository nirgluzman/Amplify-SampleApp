# Setup an Amplify Fullstack Project

## Quickstart
https://docs.amplify.aws/react/start/quickstart/

## Manual Installation
https://docs.amplify.aws/react/start/manual-installation/

(1) **Framework Init**

```bash
npm create vite@latest <project name> -- --template react-ts
```

(2) **Add Amplify to Project**

- Start from scratch, either with a brand new directory or an existing frontend app.
- Running this command will scaffold a lightweight Amplify project in our current project.

```bash
npm create amplify@latest
```

(3) **Connect to Backend AWS Services provisioned and managed by Amplify**

- For JavaScript-based applications, the client library can be configured by using the generated `outputs.json` file:

```ts
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
```

# Amplify Sandbox Environment
https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/

- Dedicated, temporary AWS environment that mirrors our application's cloud **backend resources**.
- Leverages techniques like CDK hot-swapping for fast deployment of code changes.
- It's designed to be used by individual developers during the development phase, allowing them to build and iterate on backend logic without affecting shared development or production environments.
- Cloud sandbox environments are designed for **development purposes** and are not intended for production workloads.
- Note that `amplify_outputs.json` file is generated during deployment from both the Amazon Console and an Amplify sandbox, reflecting the versatility of the deployment processes.

- Create a new sandbox environment:

```bash
npx ampx sandbox
```
- Terminating a sandbox environment:

```bash
npx ampx sandbox delete
```

#  Amplify UI Library
https://docs.amplify.aws/react/build-ui/

- Amplify offers a UI Library to build web app user interfaces that are connected to the backend.

- [`Authenticator`](https://ui.docs.amplify.aws/react/connected-components/authenticator?platform=react) component adds complete authentication flows to our application with minimal boilerplate.

- Installation:

```bash
npm install @aws-amplify/ui-react
```
