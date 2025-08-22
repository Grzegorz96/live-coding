import { AnalysisService } from 'src/analysis/analysis.service';
import { BinanceService } from 'src/binance/binance.service';

describe('AnalysisService', () => {
  let analysisService: AnalysisService;
  let mockBinanceService: BinanceService;

  beforeEach(() => {
    mockBinanceService = {
      getCandles: jest.fn(),
    } as unknown as BinanceService;

    analysisService = new AnalysisService(mockBinanceService);
  });

  it('corectly analyzes price changes', async () => {
    const mockCandles = [
      {
        openTime: 1,
        open: 90,
        high: 110,
        low: 85,
        close: 100,
        volume: 100,
        closeTime: 2,
      },
      {
        openTime: 2,
        open: 110,
        high: 130,
        low: 100,
        close: 120,
        volume: 150,
        closeTime: 3,
      },
    ];

    (mockBinanceService.getCandles as jest.Mock).mockResolvedValue(mockCandles);

    const result = await analysisService.analyze({
      symbol: 'BTCUSDT',
      interval: '1h',
      limit: 10,
    });
    expect(result.startPrice).toBe(100);
    expect(result.endPrice).toBe(100);
    expect(result.minPrice).toBe(100);
    expect(result.maxPrice).toBe(100);
    expect(result.changePercent).toBe('0.00%');
  });
});
