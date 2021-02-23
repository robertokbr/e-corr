import { container } from 'tsyringe';
import { Request, Response } from 'express';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService.ts';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const { avatar } = request.body;

    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarfilename: avatar,
    });

    user.password = '';

    return response.json(user);
  }
}

export default UserAvatarController;
