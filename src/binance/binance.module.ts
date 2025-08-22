import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Module({
  imports: [BinanceService],
  controllers: [],
  providers: [],
})
export class BinanceModule {}
