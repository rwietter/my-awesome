export const db_index = [
  {
    name: "blockchain",
  },
  {
    name: "bitcoin",
  },
  {
    name: "defi",
  },
  {
    name: "tools",
  },
  {
    name: "news",
  },
];


export const items = {
  blockchain: [
    {
      name: "Tradingview",
      url: "https://br.tradingview.com/chart/",
    },
  ],

  bitcoin: [
    {
      name: "Bitcoin Market Cycle Charts",
      url: "https://www.lookintobitcoin.com/charts/",
    },
    {
      name: "Bitcoin Monthly Return",
      url: "https://bitcoinmonthlyreturn.com/",
    },
    {
      name: "Social Intelligence for Crypto",
      url: "https://lunarcrush.com/markets?col=1&metric=social_dominance",
    },
  ],

  defi: [
    {
      name: "DeFil Lama",
      url: "https://defillama.com/",
    },
  ],

  tools: [
    {
      name: "Tradingview",
      url: "https://br.tradingview.com/chart/",
    },
  ],

  news: [
    {
      name: "Coindesk",
      url: "https://www.coindesk.com/",
    },
  ],
};

export type IndexKeys = {
  [key: string]: any
}

export type KeysExtract = "blockchain" | "bitcoin" | "defi" | "tools" | "news";

export type IContent = {
  [key in KeysExtract]: {
    name: string;
    url: string;
  }[];
};


export const keys: IndexKeys = Object.keys(items);
export const values = Object.values(items);
