import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { QueryDto } from './dto/query.dto';

@Controller('markets')
export class BinanceController {
  constructor(private readonly binance: BinanceService) {}

  @Get('candles')
  async getCandles(@Query() query: QuerySchema) {
    console.log(query);
  }
}
