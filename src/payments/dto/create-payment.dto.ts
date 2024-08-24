import { IsString, MinLength } from 'class-validator';
export class CreatePaymentDto {
  @IsString()
  @MinLength(1)
  title: string;
  @IsString()
  @MinLength(1)
  description: string;
}
