import { Injectable } from '@nestjs/common';
import axios from 'axios';

export type Kline = [
  openTime: number,
  open: string,
  high: string,
  low: string,
  close: string,
  volume: string,
  closeTime: number,
  quoteAssetVolume: string,
  numberOfTrades: number,
  takerBuyBaseAssetVolume: string,
  takerBuyQuoteAssetVolume: string,
  ignore: string,
];

export interface Candle {
  openTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  closeTime: number;
}

@Injectable()
export class BinanceService {
  private baseUrl = 'https://api.binance.com/api/v3';

  async getCandles(symbol: string, interval: string, limit: number) {
    const url = `${this.baseUrl}/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=${limit}`;
    const { data } = await axios.get<Kline[]>(url);

    const candles: Candle[] = data.map((kline) => ({
      openTime: kline[0],
      open: parseFloat(kline[1]),
      high: parseFloat(kline[2]),
      low: parseFloat(kline[3]),
      close: parseFloat(kline[4]),
      volume: parseFloat(kline[5]),
      closeTime: kline[6],
    }));

    return candles;
  }
}
