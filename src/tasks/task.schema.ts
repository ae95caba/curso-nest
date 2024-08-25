import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Task);
