// import * as z from 'zod';

// export const QuerySchema = z.object({
//   symbol: z.string().min(3),
//   interval: z.string().default('1h'),
//   limit: z.coerce.number().min(10).max(1000).default(100),
// });

// export type QuerySchemaType = z.infer<typeof QuerySchema>;
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  Min,
  Max,
  Length,
  IsOptional,
} from 'class-validator';

export class QueryDto {
  @IsString()
  @Length(3)
  symbol: string;

  @IsOptional()
  @IsString()
  interval: string = '1h';

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(10)
  @Max(1000)
  limit: number = 100;
}
