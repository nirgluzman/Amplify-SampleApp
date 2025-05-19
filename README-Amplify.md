# Setup an Amplify Project

## Quickstart
https://docs.amplify.aws/react/start/quickstart/

## Manual Installation
https://docs.amplify.aws/react/start/manual-installation/

(1) **Initialize Amplify Project**

- Start from scratch, either with a brand new directory or an existing frontend app.
- Running this command will scaffold a lightweight Amplify project in our current project.

```bash
npm create amplify@latest
```

(2) **Connect to Backend AWS Services provisioned and managed by Amplify**

- For JavaScript-based applications, the client library can be configured by using the generated `outputs.json` file:

```ts
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
```
