import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address extends Document {
  @Prop()
  name: string;

  @Prop()
  street_address: string;

  @Prop()
  street_address2: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  postal_code: string;

  @Prop()
  country: string;

  @Prop()
  phone_number: number;
}
export const AddressSchema = SchemaFactory.createForClass(Address);
