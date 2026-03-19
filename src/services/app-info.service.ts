import type { AppConfig } from "../core/types/index.js";

export function getAppInfo(config: AppConfig): string {
  return `${config.appName} v${config.version} [${config.environment}]`;
}

export function getAppName(config: AppConfig): string {
  return config.appName;
}

export function getAppVersion(config: AppConfig): string {
  return config.version;
}

export function getAppEnvironment(config: AppConfig): string {
  return config.environment;
}
