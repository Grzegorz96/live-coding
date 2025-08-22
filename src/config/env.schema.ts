import * as z from 'zod';

export const EnvSchema = z.object({
  BINANCE_BASE_URL: z.url(),
  PORT: z.string().transform((val) => parseFloat(val)),
});
