import { IsEmpty, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsEmpty({ message: 'Your cannot pass user id' })
  readonly user: User;
}
