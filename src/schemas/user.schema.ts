import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ required: true })
  email: string;

  @Prop()
  avatar: string;

  @Prop({ default: '' })
  nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
