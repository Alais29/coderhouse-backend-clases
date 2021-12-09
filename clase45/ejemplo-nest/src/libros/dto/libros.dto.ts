import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class libroDTO {
  readonly id: string;

  @IsNotEmpty()
  @Length(5, 40)
  readonly titulo: string;

  @IsNotEmpty()
  readonly autor: string;

  @IsNotEmpty()
  @IsNumber()
  readonly precio: number;
}
