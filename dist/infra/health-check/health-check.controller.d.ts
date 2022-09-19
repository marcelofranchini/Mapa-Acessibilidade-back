import { Connection } from 'mongoose';
import { Response } from 'express';
export declare class HealthCheckController {
    private readonly connection;
    constructor(connection: Connection);
    healthCheck(res: Response): void;
}
