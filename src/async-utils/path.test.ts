import { describe, expect, it } from "vitest";

import { normalize } from "./path.js";


describe("normalize", () => {
  it("converts Windows filesystem paths into file URLs for ESM imports", () => {
    expect(normalize("C:\\work\\repo\\node_modules\\tailwindcss\\dist\\lib.mjs", {
      isESM: true,
      isWindows: true
    })).toBe("file:///C:/work/repo/node_modules/tailwindcss/dist/lib.mjs");
  });

  it("leaves filesystem paths unchanged outside Windows ESM imports", () => {
    expect(normalize("/work/repo/node_modules/tailwindcss/dist/lib.mjs", {
      isESM: false,
      isWindows: false
    })).toBe("/work/repo/node_modules/tailwindcss/dist/lib.mjs");
  });
});
