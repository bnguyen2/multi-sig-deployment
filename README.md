## Multi-sigs deliverables

- Spacecoin deployed: https://rinkeby.etherscan.io/address/0xe63C4bC87B485d8332b75D5B80d41A025F8E6945
- ICO deployed to: https://rinkeby.etherscan.io/address/0x4296DF2b16B5890CA82E5a76a02F302a4C41499A

https://gnosis-safe.io/app/rin:0xc20Dfc0eb8E64868c185FE1E6Bcc66Baf342898B/transactions/history

- Name of function called `buyTokens` from ICO contract
  Internal transactions shows here: https://rinkeby.etherscan.io/address/0x4296DF2b16B5890CA82E5a76a02F302a4C41499A#internaltx

## Teammates

- vip
- matricksdecoder

## Design Exercise

- Consider and write down the positive and negative tradeoffs of the following configurations for a multisig wallet. In particular, consider how each configuration handles the common failure modes of wallet security
  - 1-of-N
  - M-of-N (where M: such that 1 < M < N)
  - N-of-N

1-of-N: Simplest configuration, where the wallet owner is the only one who can spend tokens. While less secure, it is the fastest method to use for making transactions. Think this makes sense when you need speed, for example if you're yield farming, trading NFTs, trading/investing in defi protocols, or playing a p2e game where you need to make many tx to proceed in gameplay. Would be a pain in the butt to use a multisig wallet for this.

M-of-N: typical multisig configuration, where you onboard trusted members/delegates to sign the tx before tx can occurs. Makes the most sense to use when there is a lot of money involved, especially for DAO treasuries / funds. If you only allow the dev/founder to control the funds, there could be a chance of getting rugged by the protocol founder, or if something happens to the owner, then the funds will be lost forever.

However there also arguments against multisigs for some use case as it slows you down if you need to make quick decisions. You'll need majority vote before something can occur. I think it makes sense to have "hot" wallets that aren't multisigs to allow you to make quick decision like if you're investing in defi or trading NFTs. Something that our DAO have been ideating on is making our DAO treasury multi-sig, while allowing trusted delegates to have their own wallets to make quick investment decisions if needed. Speed is essential as everything moves very fast in crypto. If you have a multi-sigged wallet for certain investing strategies, could actually be a detriment, for example say some token you own in your treasury is crashing and you need to exit quickly. If someone on the team isn't available then tough luck.

There also another problem with M-of-N is delegate colluding. For example, say we have 2 / 3 multi-sig wallet, and I wanted to rug the project with the another delegate who now is a good friend as we've been collaborating very closly on this project for a couple years. We both can vote on the multi-sig to send the money to another account and run away with it (just using an example, I would never).

N-of-N: To be honest I've never seen this used in the real world, but please enlighten me if you have. IMO would be likely be just as worst as the 1-of-n (or probably worst), as nothing would get done unless everyone votes yes or no. Let's say a delegate on the multi-sig is no where to be found, then funds are stuck forever. Would it be the most secured? You could say that, but then you can argue all the problems that comes with it: someone dying, no longer available, or has a team fall-out and goes rogue, then would be a pain to recover from.
