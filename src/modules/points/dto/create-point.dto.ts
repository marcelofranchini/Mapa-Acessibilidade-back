import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  public idUser: string;

  @IsString()
  @IsOptional()
  public image?: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public type: string;
}
