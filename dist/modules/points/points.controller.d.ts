import { PointsService } from './points.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
export declare class PointsController {
    private readonly pointsService;
    constructor(pointsService: PointsService);
    create(createPointDto: CreatePointDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePointDto: UpdatePointDto): string;
    remove(id: string): string;
}
