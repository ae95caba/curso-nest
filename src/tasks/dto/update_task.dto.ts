import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsEmpty({ message: 'Your cannot pass user id' })
  readonly user: User;
}
