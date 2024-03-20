module.exports = {
  root: true,
  extends: ['@redwoodjs/eslint-config', 'plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      callees: ['twMerge', 'createTheme'],
      classRegex: '^(class(Name)|theme)?$',
    },
  },
  rules: {
    'jsx-a11y/no-onchange': 'off',
  },
}
