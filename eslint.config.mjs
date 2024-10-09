import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      ignores: ['**/build/**', '**/dist/**'],
      rules: {
        "semi": ["error", "never"],
        "@typescript-eslint/no-explicit-any": "off" // Desactiva la regla para permitir 'any'
      }
    }
)
  