import { Connection } from 'mongoose';
import { HealthCheckService, MongooseHealthIndicator } from '@nestjs/terminus';
export declare class HealthcheckController {
    private readonly health;
    private readonly mongooseIndicator;
    private applicationConn;
    constructor(health: HealthCheckService, mongooseIndicator: MongooseHealthIndicator, applicationConn: Connection);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
