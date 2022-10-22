import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type PointDocument = Point & Document;

@Schema()
export class Point {
  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ type: Object, required: false })
  coord: {
    lng: number;
    lat: number;
  };

  @Prop({ required: false })
  idUser: string;

  @Prop({ required: false })
  type: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const PointSchema = SchemaFactory.createForClass(Point);
