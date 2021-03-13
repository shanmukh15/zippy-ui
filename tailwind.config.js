module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark-1': '#13628C',
        'primary-dark-2': '#1E4759',
        'primary-dark-3': '#002E40',
        'primary-dark-4': '#306E8C',
        'primary-dark-5': '#2497D8',
        'primary-light-1': '#324104',
        'primary-light-2': '#ABCE48',
        'primary-light-3': '#98BF0A',
        'primary-light-4': '#364116',
        'primary-light-5': '#6E8F0A',
        'secondary-1': '#1D60BF',
        'secondary-2': '#BF2F1D',
        'secondary-3': '#2497D8',
        'neutral-1': '#F2F2F2',
        'neutral-2': '#A6A6A6',
        'neutral-3': '#595959',
        'neutral-4': '#262626',
        'neutral-5': '#0D0D0D',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
