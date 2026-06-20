import { pathToFileURL } from "node:url";

import { isESModule } from "./module.js";
import { isWindows } from "./platform.js";


interface NormalizeOptions {
  isESM?: boolean;
  isWindows?: boolean;
}

export function normalize(path: string, options?: NormalizeOptions): string {
  const windows = options?.isWindows ?? isWindows();
  const esm = options?.isESM ?? isESModule();

  if (!windows || !esm) {
    return path;
  }

  if (/^[A-Za-z]:\\/.test(path)) {
    return `file:///${path.replace(/\\/g, "/")}`;
  }

  return pathToFileURL(path).toString();
}
