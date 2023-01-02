import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  name: string;
  @IsNotEmpty()
  email: string;
}
