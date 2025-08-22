import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { BinanceController } from './binance.controller';

@Module({
  imports: [BinanceService],
  controllers: [BinanceController],
  providers: [BinanceService],
})
export class BinanceModule {}
