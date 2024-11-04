/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  printWidth: 80,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  semi: true,
  bracketSpacing: true,
  arrowParens: "always",
  bracketSameLine: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]"
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    //"@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
};
