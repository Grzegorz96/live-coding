import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BinanceModule } from './binance/binance.module';
import { AnalysisModule } from './analysis/analysis.module';
import { EnvSchema } from './config/env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: (env) => EnvSchema.parse(env),
    }),
    BinanceModule,
    AnalysisModule,
  ],
})
export class AppModule {}
