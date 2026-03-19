export type AppEnvironment = "development" | "test" | "production";

export type AppConfig = {
  appName: string;
  version: string;
  environment: AppEnvironment;
};

export type KeyValue<T = unknown> = Record<string, T>;
