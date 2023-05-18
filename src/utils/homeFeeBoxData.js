import icons from "./icons";

const numberOne = 345797466;

const homeFeeBoxData = [
  {
    id: 0,
    icon: icons.currencies.litecoin,
    currencyType: "لایت کوین",
    acronym: "LTC",
    purchagePrice: numberOne.toLocaleString("fa"),
    sellPrice: numberOne.toLocaleString("fa"),
  },
  {
    id: 0,
    icon: icons.currencies.ethereum,
    currencyType: "اتریوم",
    acronym: "ETH",
    purchagePrice: numberOne.toLocaleString("fa"),
    sellPrice: numberOne.toLocaleString("fa"),
  },
  {
    id: 0,
    icon: icons.currencies.bitcoin,
    currencyType: "بیت کوین",
    acronym: "BTC",
    purchagePrice: numberOne.toLocaleString("fa"),
    sellPrice: numberOne.toLocaleString("fa"),
  },
];

export default homeFeeBoxData;
