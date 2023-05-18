import icons from "./icons";

const numberOne = 345797466;
const numberTwo = 6345797466;

const homeAndMarketsTableData = [
  {
    id: 0,
    icon: icons.currencies.bitcoin,
    currencyType: "بیت کوین",
    acronym: "BTC",
    changePercentage: {
      type: "negative",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 1,
    icon: icons.currencies.bitcoinCash,
    currencyType: "بیت کوین کش",
    acronym: "BCH",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 2,
    icon: icons.currencies.dashcoin,
    currencyType: "دش کوین",
    acronym: "DASH",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 3,
    icon: icons.currencies.litecoin,
    currencyType: "لایت کوین",
    acronym: "LTC",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 4,
    icon: icons.currencies.ethereum,
    currencyType: "اتریوم",
    acronym: "ETH",
    changePercentage: {
      type: "negative",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 5,
    icon: icons.currencies.ethereumClassic,
    currencyType: "اتریوم کلاسیک",
    acronym: "ETC",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 6,
    icon: icons.currencies.ripple,
    currencyType: "ریپل",
    acronym: "RIPPLE",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
  {
    id: 7,
    icon: icons.currencies.tron,
    currencyType: "ترون",
    acronym: "TRON",
    changePercentage: {
      type: "positive",
      value: "۴.۶",
    },
    globalPrice: numberOne.toLocaleString("fa"),
    purchacePrice: numberTwo.toLocaleString("fa"),
    sellPrice: numberTwo.toLocaleString("fa"),
  },
];

export default homeAndMarketsTableData;
