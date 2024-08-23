import * as bcrypt from "bcryptjs";
import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserPayLoad } from "./types";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const user = await this.userService.findOneByEmail(data.email);
    let confirmPassword = await bcrypt.compare(data.password, user.password);
    if (!confirmPassword) throw new BadRequestException("incorrect password");

    const payload: UserPayLoad = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      phone: user.phone,
      photo: user.photo,
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: "2 days",
    });

    delete user.password;

    return {
      token,
      user,
    };
  }

  async getUserById(id: number) {
    const user = await this.userService.findUserById(id);
    return user;
  }
}
