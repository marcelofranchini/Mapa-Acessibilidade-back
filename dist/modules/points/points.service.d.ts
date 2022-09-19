import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
export declare class PointsService {
    create(createPointDto: CreatePointDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePointDto: UpdatePointDto): string;
    remove(id: number): string;
}
