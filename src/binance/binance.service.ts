import { Injectable } from '@nestjs/common';
import axios from 'axios';

type Candles = number[];

@Injectable()
export class BinanceService {
  private baseUrl = 'https://api.binance.com/api/v3';

  async getCandles(symbol: string, interval: string, limit: number) {
    const url = `${this.baseUrl}/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=${limit}`;
    const { candles } = await axios.get<Candles>(url);

    const formated = candles;
  }
}
