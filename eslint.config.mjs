import eslintParser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPrettier from 'eslint-config-prettier';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
    {
        files: ['**/*.ts'],
        extends: [
            jestPlugin.configs['flat/recommended'],
            jestPlugin.configs['flat/style'],
            jsEslint.configs.recommended,
            tsEslint.configs.recommended,
            tsEslint.configs.stylistic,   // change to strictTypeCheckd or stylisticTypeChecked
            // angularEslint.config.tsRecommended,  // for Angular projects
        ],
        plugins: {
            '@typescript-eslint': eslintPlugin,
            jest: jestPlugin,
            prettier: eslintPrettier,  //  to turn off all rules that are unnecessary or might conflict with Prettier
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.node,
            },
            parser: eslintParser,
            ecmaVersion: 2023,
            sourceType: 'script',
            parserOptions: {
                project: './tsconfig.eslint.json',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,  // path.dirname(fileURLToPath(import.meta.url)), for node.js < 20.11.0
            },
        },
        rules: {
            'arrow-parens': ['error', 'as-needed'],
            'brace-style': 'error',
            camelcase: 'error',
            'consistent-return': 'error',
            'constructor-super': 'error',
            curly: 'error',
            'default-case': 'error',
            'dot-notation': 'error',
            'eol-last': 'error',
            eqeqeq: 'error',
            'func-style': ['error', 'expression', { allowArrowFunctions: true }],
            'guard-for-in': 'error',  // error: The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype
            indent: ['warn', 4, {
                SwitchCase: 1,
            }],
            // override jest recommended rules
            'jest/expect-expect': ['warn', {
                assertFunctionNames: ['expect', 'verify*'],
            }],
            'keyword-spacing': 'error',
            'max-classes-per-file': ['error', 1],
            'max-len': ['error', 120, {
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            }],
            'new-parens': 'error',  // error: Missing ‘()’ invoking a constructor
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-cond-assign': 'error',
            'no-console': 'error',
            'no-debugger': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-fallthrough': 'error',
            'no-lonely-if': 'warn',
            'no-mixed-spaces-and-tabs': 'warn',
            'no-multiple-empty-lines': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-param-reassign': 'error',
            'no-redeclare': 'off',  // disabled as TypeScript’s compiler enforce this check; error ‘InstantType’ is already defined as a built-in global variable
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-shadow': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-undef': 'off',  // disabled as TypeScript’s compiler enforce this check
            'no-undef-init': 'error',
            'no-unsafe-finally': 'error',
            'no-unused-expressions': 'error',
            'no-unused-labels': 'error',
            'no-unused-vars': 'off',  // use @typescript-eslint/no-unused-vars instead
            'no-var': 'error',
            'object-curly-newline': 'off',  // warning: Unexpected line break before this closing brace
            'object-shorthand': ['error', 'never'],
            'one-var': ['error', 'never'],
            'prefer-arrow-callback': ['warn', {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            }],
            'prefer-const': 'error',
            'prefer-object-spread': 'error',
            quotes: ['error', 'single'],
            radix: 'error',
            semi: 'error',
            'semi-spacing': 'warn',
            'spaced-comment': 'error',
            '@typescript-eslint/class-methods-use-this': 'off',  // error: Expected ‘this’ to be used by class method
            '@typescript-eslint/consistent-generic-constructors': 'warn',
            '@typescript-eslint/consistent-indexed-object-style': 'warn',
            '@typescript-eslint/consistent-type-assertions': ['warn', {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow',
            }],
            '@typescript-eslint/consistent-type-definitions': 'error',
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': ['error', {
                fixStyle: 'inline-type-imports',
                disallowTypeAnnotations: false,
                prefer: 'type-imports',
            }],
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
            '@typescript-eslint/method-signature-style': 'off',  // error: Shorthand method is forbidden. Use a function property instead
            '@typescript-eslint/no-empty-object-type': ['error', {
                allowInterfaces: 'always',
                allowObjectTypes: 'always',
            }],
            '@typescript-eslint/no-explicit-any': ['error', {
                fixToUnknown: true,
                ignoreRestArgs: true,
            }],
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unsafe-function-type': 'off',  // error: The ‘Function’ type accepts any function-like value. Prefer explicitly defining any function parameters and return type
            '@typescript-eslint/no-unused-vars': ['error', {
                vars: 'local',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true,
            }],
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': ['error', {
                ignoreBooleanCoercion: true,
                ignorePrimitives: true,
                ignoreTernaryTests: true,
            }],
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-readonly': 'off',  // error: Member ‘lambaClass’ is never reassigned; mark it as ‘readolnly’
            '@typescript-eslint/prefer-regexp-exec': 'off',  // error: Use the ‘RegExp#exec()’ method instead
            '@typescript-eslint/promise-function-async': 'off',  // error: Functions that return promises must be async
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': ['error', {
                requireDefaultForNonUnion: true,
                considerDefaultExhaustiveForUnions: true,
            }],
        },
    },
    {
        ignores: [
            'build',
            'dist',
            'node_modules',
            'qa',
        ],
    },
);
