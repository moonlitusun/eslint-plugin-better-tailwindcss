import config from "@schoero/configs/eslint";
import { defineConfig } from "eslint/config";


const sharedConfig = config.map(entry => {
  if(!entry.rules || !("eslint-plugin-unicorn/prefer-export-from" in entry.rules)){
    return entry;
  }

  return {
    ...entry,
    rules: {
      ...entry.rules,
      "eslint-plugin-unicorn/prefer-export-from": ["warn", { checkUsedVariables: true }]
    }
  };
});


export default defineConfig([
  ...sharedConfig,
  {
    files: ["**/*.test.{js,jsx,cjs,mjs,ts,tsx}", "**/*.test-d.{ts,tsx}"],
    rules: {
      "eslint-plugin-stylistic/quotes": ["warn", "double", { allowTemplateLiterals: "always", avoidEscape: true }],
      "eslint-plugin-typescript/no-unnecessary-condition": "off",
      "eslint-plugin-typescript/no-useless-template-literals": "off",
      "eslint-plugin-vitest/expect-expect": "off"
    }
  },
  {
    files: ["**/*.test.ts"],
    rules: {
      "eslint-plugin-perfectionist/sort-objects": "off",
      "eslint-plugin-typescript/naming-convention": "off",
      "eslint-plugin-typescript/no-floating-promises": "off"

    }
  },
  {
    files: ["tests/utils/lint.ts"],
    rules: {
      "eslint-plugin-typescript/naming-convention": "off"
    }
  }
]);
