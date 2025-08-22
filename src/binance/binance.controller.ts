import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { CandlesQueryDto } from './dto/candles-query.dto';

@Controller('markets')
export class BinanceController {
  constructor(private readonly binance: BinanceService) {}

  @Get('candles')
  async getCandles(@Query() candlesQuery: CandlesQueryDto) {
    return this.binance.getCandles(candlesQuery);
  }
}
