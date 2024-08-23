import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { KnexService } from "src/knex.service";
import { Model } from "objection";
import { User } from "src/models/user.model";
import { UserRole } from "src/auth/types";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
  constructor(private readonly knexService: KnexService) {}

  onModuleInit() {
    Model.knex(this.knexService.getKnexInstance());
  }

  async create(data: CreateUserDto) {
    const userExist = await User.query().findOne({ email: data.email });
    if (userExist) throw new ConflictException("Email already exist");

    const { email, phone, name, password, photo } = data;
    const createUser = await User.query().insert({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
      phone,
      role: UserRole.USER,
      photo,
    });

    if (!createUser) throw new BadRequestException("error creating user account");

    return "Account created successfully, kindly login...";
  }

  async findOneByEmail(email: string) {
    const user = await User.query().findOne({ email });
    if (!user) throw new NotFoundException("email does not exist");
    return user;
  }

  async findUserById(id: number) {
    const user = await User.query().findOne({ id });
    if (!user) throw new NotFoundException("email does not exist");
    return user;
  }
}
