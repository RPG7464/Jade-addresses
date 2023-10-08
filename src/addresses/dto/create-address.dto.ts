import { IsString, IsInt } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  name: string;

  @IsString()
  street_address: string;

  @IsString()
  street_address2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  postal_code: string;

  @IsString()
  country: string;

  @IsInt()
  phone_number: number;
}
