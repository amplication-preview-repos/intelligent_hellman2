import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ButtonService } from "./button.service";
import { ButtonControllerBase } from "./base/button.controller.base";

@swagger.ApiTags("buttons")
@common.Controller("buttons")
export class ButtonController extends ButtonControllerBase {
  constructor(protected readonly service: ButtonService) {
    super(service);
  }
}
