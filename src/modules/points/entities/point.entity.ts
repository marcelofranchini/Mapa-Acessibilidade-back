import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type PointDocument = Point & Document;

@Schema()
export class Point {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: Object, required: true })
  coord: {
    lng: number;
    lat: number;
  };

  @Prop({ required: true })
  idUser: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const PointSchema = SchemaFactory.createForClass(Point);
