const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
    bsc: {
    tvl: getUniTVL({
      factory: '0xa053582601214FEb3778031a002135cbBB7DBa18', 
      useDefaultCoreAssets: true
    })
  },
};