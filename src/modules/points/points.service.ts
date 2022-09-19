import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { Point, PointDocument } from './entities/point.entity';

@Injectable()
export class PointsService {
  constructor(
    @InjectModel(Point.name) private pointModel: Model<PointDocument>,
  ) {}

  create(createPointDto: CreatePointDto) {
    const point = new this.pointModel(createPointDto);
    return point.save();
  }

  findAll() {
    const points = this.pointModel.find();
    return points;
  }

  findOne(id: string) {
    return this.pointModel.findById(id);
  }

  findUseId(id: string) {
    return this.pointModel.find({ idUser: id });
  }
  update(id: string, updatePointDto: UpdatePointDto) {
    return this.pointModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatePointDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.pointModel.deleteOne({ _id: id }).exec();
  }
}
