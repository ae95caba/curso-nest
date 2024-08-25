import { IsNumber, IsString, MinLength } from 'class-validator';
export class TaskDto {
  @IsString()
  @MinLength(1)
  title: string;
  @IsString()
  @MinLength(1)
  description: string;
}
