### Page

```ts
const createdTitle: Title = await Prisma.title.create({
  data: { title: awesomeTitle, content_id: createdContent.id, user_id },
});
```

```js
export const content = {
	blockchain: [
		{
			name: 'Tradingview',
			url: 'https://br.tradingview.com/chart/',
		},
	],

	bitcoin: [
		{
			name: 'Bitcoin Market Cycle Charts',
			url: 'https://www.lookintobitcoin.com/charts/',
		},
		{
			name: 'Bitcoin Monthly Return',
			url: 'https://bitcoinmonthlyreturn.com/',
		},
		{
			name: 'Social Intelligence for Crypto',
			url: 'https://lunarcrush.com/markets?col=1&metric=social_dominance',
		},
	],

	defi: [
		{
			name: 'DeFil Lama',
			url: 'https://defillama.com/',
		},
	],

	tools: [
		{
			name: 'Tradingview',
			url: 'https://br.tradingview.com/chart/',
		},
	],

	news: [
		{
			name: 'Coindesk',
			url: 'https://www.coindesk.com/',
		},
	],
};

export const content2 = {
	Typescript: [
		{
			name: 'Typescript src',
			url: 'https://br.tradingview.com/chart/',
		},
	],
	Javascript: [
		{
			name: 'Typesc',
			url: 'https://br.tradingview.com/chart/',
		},
	],
};
```
