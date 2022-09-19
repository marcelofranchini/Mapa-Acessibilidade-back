import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public cpf: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public password: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public token: string;
}
