import { Controller, Get, Query } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { CandlesQueryDto } from 'src/binance/dto/candles-query.dto';

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly analysis: AnalysisService) {}

  @Get()
  analyze(@Query() candlesQuery: CandlesQueryDto) {
    return this.analysis.analyze(candlesQuery);
  }
}
