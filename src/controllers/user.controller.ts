import { Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('set-problem-flags-to-false')
  async setProblemFlagsToFalse(): Promise<{ affectedUsers: number }> {
    const affectedUsers = await this.userService.setProblemFlagsToFalse();
    return { affectedUsers };
  }
}
