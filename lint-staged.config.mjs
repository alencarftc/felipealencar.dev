/* eslint-disable import/no-anonymous-default-export */
export default {
  '*.{js, jsx,ts,tsx}': ['eslint --quiet --fix'],
  '*.{json,js,ts,jsx,tsx,html}': ['prettier --write --ignore-unknown'],
}
