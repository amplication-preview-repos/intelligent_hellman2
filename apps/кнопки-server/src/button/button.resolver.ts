import * as graphql from "@nestjs/graphql";
import { ButtonResolverBase } from "./base/button.resolver.base";
import { Button } from "./base/Button";
import { ButtonService } from "./button.service";

@graphql.Resolver(() => Button)
export class ButtonResolver extends ButtonResolverBase {
  constructor(protected readonly service: ButtonService) {
    super(service);
  }
}
