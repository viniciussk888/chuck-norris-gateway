import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {ChuckNorrisService} from "./infra/services/chuck-noris.service";
import {ChuckNorrisController} from "./infra/controllers/chuck-norris.controller";

@Module({
  imports: [HttpModule],
  controllers: [ChuckNorrisController],
  providers: [
    {
      provide: ChuckNorrisService,
      useClass: ChuckNorrisService
    }
  ]
})
export class ChuckNorrisModule {}
