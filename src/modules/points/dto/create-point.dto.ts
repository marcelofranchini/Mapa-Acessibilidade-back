import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CoordPointDto {
  @IsNotEmpty()
  public lat: number;
  @IsNotEmpty()
  public lng: number;
}
export class CreatePointDto {
  @IsString()
  @IsNotEmpty()
  @Type(() => CoordPointDto)
  public coord: CoordPointDto;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public idUser: string;

  @IsString()
  @IsNotEmpty()
  public image: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public type: string;
}
