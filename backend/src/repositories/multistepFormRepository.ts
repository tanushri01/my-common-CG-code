import { FilterQuery } from 'mongoose';
import AddMultistepFormDto from '../commons/dto/addMultistepFormDto';
import userModel, { IUser } from '../database/user';

export default class MultistepFormRepository {
  public async addMultistepForm(user: AddMultistepFormDto): Promise<void> {
    await userModel.findOneAndUpdate(
      { userId: user.userId },
      {
        $push: {
          'multistepForm': user.multistepForm,
        },
      },
      {
        new: true,
        projection: {
          _id: 0,
          'multistepForm._id': 0,
        },
      }
    );
  }

  public async findByUserId(userId: string): Promise<IUser | null> {
    const filter: FilterQuery<IUser> = {
      userId: userId,
    };
    const projection = {
      'multistepForm._id': 0,
    };
    const options = {
      lean: true,
    };
    const userRecord = await userModel.findOne(filter, projection, options);
    return userRecord;
  }

  public async updateFormStatus(user: IUser): Promise<void> {
    await userModel.updateOne({ userId: user.userId }, user);
  }
}
