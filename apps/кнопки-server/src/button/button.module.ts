import { Module } from "@nestjs/common";
import { ButtonModuleBase } from "./base/button.module.base";
import { ButtonService } from "./button.service";
import { ButtonController } from "./button.controller";
import { ButtonResolver } from "./button.resolver";

@Module({
  imports: [ButtonModuleBase],
  controllers: [ButtonController],
  providers: [ButtonService, ButtonResolver],
  exports: [ButtonService],
})
export class ButtonModule {}
