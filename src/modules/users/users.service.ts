import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { hashCreate } from '../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const emailExist = await this.findOneEmail(createUserDto.email);
    const cpfExist = await this.findOneCpf(createUserDto.cpf);

    if (emailExist) {
      throw new HttpException('email já cadastrado', 404);
    }

    if (cpfExist) {
      throw new HttpException('cpf já cadastrado', 404);
    }
    const hash = await hashCreate(createUserDto.password);
    createUserDto.password = hash;
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }
  findOneEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  findOneCpf(cpf: string) {
    return this.userModel.findOne({ cpf });
  }
  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
