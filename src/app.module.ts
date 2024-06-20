import {Module} from "@nestjs/common";
import {WinstonModule} from "nest-winston";
import {ConfigModule} from "@nestjs/config";
import winstonConfig from "./common/winston.logger";
import {HealthcheckModule} from "./modules/healthcheck/healthcheck.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthcheckModule,
    WinstonModule.forRoot(winstonConfig)
  ]
})
export class AppModule {}
