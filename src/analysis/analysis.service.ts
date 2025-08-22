import { Injectable } from '@nestjs/common';
import { BinanceService } from '../binance/binance.service';
import { CandlesQueryDto } from 'src/binance/dto/candles-query.dto';

@Injectable()
export class AnalysisService {
  constructor(private readonly binance: BinanceService) {}

  async analyze({ symbol, interval, limit }: CandlesQueryDto) {
    const candles = await this.binance.getCandles({ symbol, interval, limit });

    const prices = candles.map((c) => c.close);
    const first = prices[0];
    const last = prices[prices.length - 1];
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const change = ((last - first) / first) * 100;

    return {
      symbol,
      interval,
      limit,
      startPrice: first,
      endPrice: last,
      minPrice: min,
      maxPrice: max,
      changePercent: change.toFixed(2) + '%',
    };
  }
}
