import { AnalysisService } from 'src/analysis/analysis.service';
import nock from 'nock';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

const mockResponse = [
  [
    1625097600000,
    '34000.00',
    '35000.00',
    '33000.00',
    '34500.00',
    '1000',
    1625101200000,
  ],
  [
    1625101200000,
    '34500.00',
    '35500.00',
    '34000.00',
    '35000.00',
    '1200',
    1625104800000,
  ],
];

describe('BinanceSevice', () => {
  let service: BinanceService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: './env',
        }),
      ],

      providers: [BinanceService, ConfigService],
    }).compile();

    service = module.get<BinanceService>(BinanceService);
  });

  it('fetches candles from Binance public API', async () => {
    nock('https://api.binance.com')
      .get('/api/v3/klines')
      .query(true)
      .reply(200, mockResponse);

    const candles = await service.getCandles({
      symbol: 'BTCUSDT',
      interval: '1h',
      limit: 10,
    });

    expect(candles).toHaveLength(10);
    expect(candles[0].close).toBe(200);
  });
});
