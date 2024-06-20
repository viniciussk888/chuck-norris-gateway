import {Module} from "@nestjs/common";
import {WinstonModule} from "nest-winston";
import {ConfigModule} from "@nestjs/config";
import winstonConfig from "./common/winston.logger";
import {HealthcheckModule} from "./modules/healthcheck/healthcheck.module";
import {ChuckNorrisModule} from "./modules/chuck-norris/chuck-norris.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthcheckModule,
    ChuckNorrisModule,
    WinstonModule.forRoot(winstonConfig)
  ]
})
export class AppModule {}
