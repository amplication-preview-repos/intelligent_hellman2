import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ButtonServiceBase } from "./base/button.service.base";

@Injectable()
export class ButtonService extends ButtonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
