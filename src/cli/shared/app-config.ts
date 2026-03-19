import type { AppConfig } from "../../core/types/index.js";

export const APP_CONFIG: AppConfig = {
  appName: "cli-example",
  version: "1.0.0",
  environment: (process.env.APP_ENV ??
    "development") as AppConfig["environment"],
};
