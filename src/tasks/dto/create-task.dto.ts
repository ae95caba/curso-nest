import { IsString, MinLength } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  readonly title: string;
  @IsString()
  @MinLength(1)
  readonly description: string;
}
