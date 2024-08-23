import { ExecutionContext, Injectable } from "@nestjs/common";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { UserPayLoad, UserRole } from "../types";

@Injectable()
export class RiderGuard extends JwtAuthGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isActivated = await super.canActivate(context);

    if (!isActivated) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as UserPayLoad;

    return user.role === UserRole.RIDER;
  }
}
