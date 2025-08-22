import { BinanceService } from './binance.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';

describe('BinanceService', () => {
  let service: BinanceService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        BinanceService,
        {
          provide: ConfigService,
          useValue: {
            getOrThrow: jest
              .fn()
              .mockReturnValue('https://testnet.binance.vision'),
          },
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BinanceService>(BinanceService);
  });

  it('fetches candles from Binance public API', async () => {
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

    const mockHttpService = module.get<HttpService>(HttpService);
    (mockHttpService.get as jest.Mock).mockReturnValue(
      of({ data: mockResponse }),
    );

    const candles = await service.getCandles({
      symbol: 'BTCUSDT',
      interval: '1h',
      limit: 2,
    });

    expect(candles).toHaveLength(2);
    expect(candles[0].close).toBe(34500);
    expect(candles[0]).toHaveProperty('openTime');
    expect(candles[0]).toHaveProperty('open');
    expect(candles[0]).toHaveProperty('high');
    expect(candles[0]).toHaveProperty('low');
    expect(candles[0]).toHaveProperty('close');
    expect(candles[0]).toHaveProperty('volume');
    expect(candles[0]).toHaveProperty('closeTime');
  });
});
