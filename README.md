<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Binance API Configuration
BINANCE_BASE_URL=https://api.binance.com/api/v3
PORT=3000
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test
```

## API Endpoints

The application provides the following endpoints:

### `GET /api/markets/candles`

Get cryptocurrency candle data from Binance API.

**Query Parameters:**

- `symbol` (required): Trading pair symbol (e.g., BTCUSDT, ETHUSDT)
  - Valid values: BTCUSDT, ETHUSDT, BNBUSDT, ADAUSDT, SOLUSDT, XRPUSDT, DOTUSDT, DOGEUSDT, AVAXUSDT, MATICUSDT, LINKUSDT, UNIUSDT, LTCUSDT, BCHUSDT, ATOMUSDT, FILUSDT, VETUSDT, TRXUSDT, ETCUSDT, XLMUSDT, BTCBUSD, ETHBUSD, BNBBUSD, ADABUSD, SOLBUSD, ETHBTC, BNBBTC, ADABTC, SOLBTC, XRPBTC, BNBETH, ADAETH, SOLETH, XRPETH, DOTETH
- `interval` (optional): Time interval for candles (default: 1h)
  - Valid values: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M
- `limit` (optional): Number of candles to return (default: 100, min: 10, max: 1000)

**Example Request:**

```
GET /api/markets/candles?symbol=BTCUSDT&interval=1h&limit=50
```

### `GET /api/analysis`

Analyze price changes and trends from candle data.

**Query Parameters:**

- `symbol` (required): Trading pair symbol (same valid values as above)
- `interval` (optional): Time interval (same valid values as above)
- `limit` (optional): Number of candles to analyze (same constraints as above)

**Example Request:**

```
GET /api/analysis?symbol=ETHUSDT&interval=4h&limit=100
```

**Response Examples:**

**Candles Response:**

```json
[
  {
    "openTime": 1640995200000,
    "open": 100.5,
    "high": 110.75,
    "low": 95.25,
    "close": 105.3,
    "volume": 1000.5,
    "closeTime": 1640998800000
  }
]
```

**Analysis Response:**

```json
{
  "symbol": "ETHUSDT",
  "interval": "4h",
  "limit": 100,
  "startPrice": 105.3,
  "endPrice": 120.9,
  "minPrice": 95.25,
  "maxPrice": 125.8,
  "changePercent": "14.82%"
}
```

## Features

- **Binance Integration**: Fetches real-time cryptocurrency data from Binance API
- **Price Analysis**: Analyzes price changes, trends, and volatility
- **Data Validation**: Comprehensive input validation for API parameters
- **Testing**: Full test coverage with Jest and NestJS testing utilities
