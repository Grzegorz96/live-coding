import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CandlesQueryDto {
  @IsString()
  @IsIn(
    [
      'BTCUSDT',
      'ETHUSDT',
      'BNBUSDT',
      'ADAUSDT',
      'SOLUSDT',
      'XRPUSDT',
      'DOTUSDT',
      'DOGEUSDT',
      'AVAXUSDT',
      'MATICUSDT',
      'LINKUSDT',
      'UNIUSDT',
      'LTCUSDT',
      'BCHUSDT',
      'ATOMUSDT',
      'FILUSDT',
      'VETUSDT',
      'TRXUSDT',
      'ETCUSDT',
      'XLMUSDT',
      'BTCBUSD',
      'ETHBUSD',
      'BNBBUSD',
      'ADABUSD',
      'SOLBUSD',
      'ETHBTC',
      'BNBBTC',
      'ADABTC',
      'SOLBTC',
      'XRPBTC',
      'BNBETH',
      'ADAETH',
      'SOLETH',
      'XRPETH',
      'DOTETH',
    ],
    {
      message:
        'Symbol must be a valid cryptocurrency trading pair (e.g., BTCUSDT, ETHUSDT, etc.)',
    },
  )
  symbol: string;

  @IsOptional()
  @IsString()
  @IsIn(
    [
      '1m',
      '3m',
      '5m',
      '15m',
      '30m',
      '1h',
      '2h',
      '4h',
      '6h',
      '8h',
      '12h',
      '1d',
      '3d',
      '1w',
      '1M',
    ],
    {
      message:
        'Interval must be one of: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M',
    },
  )
  interval: string = '1h';

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(10)
  @Max(1000)
  limit: number = 100;
}
