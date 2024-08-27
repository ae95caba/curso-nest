import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
