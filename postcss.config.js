// pnpm add -D postcss-pxtorem
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
    },
  },
}
