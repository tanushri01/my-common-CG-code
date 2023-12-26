import HttpStatus from 'http-status-codes';
import { FilterQuery } from 'mongoose';
import constants from '../commons/constants';
import UserModel, { IUser } from '../database/user';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import ValidateTokenDto from '../commons/dto/validateTokenDto';
import UpdateUserDto from '../commons/dto/updateUserDto';
import { LoginTypeEnum } from '../commons/enum/loginType';

export default class UserRepository {
  public async findUserByEmail(user: IUser): Promise<IUser> {
    const userRecord = await this.checkIfUserAlreadyExists(user.email, user.loginType);
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_EMAIL);
    }
    return userRecord;
  }

  public async checkIfUserMailAlreadyExists(email: string, loginType?: LoginTypeEnum): Promise<IUser | null> {
    const userRecord = await this.checkIfUserAlreadyExists(email, loginType);
    if (userRecord) {
      throw new ExpressError(HttpStatus.CONFLICT, constants.VALIDATION_MESSAGE.DUPLICATE_EMAIL);
    }
    return null;
  }

  private async checkIfUserAlreadyExists(email: string, loginType?: LoginTypeEnum): Promise<IUser | null> {
    const userRecord = await UserModel.find({ email: { $regex: new RegExp(`^${email}$`), $options: 'i' }, loginType });
    if (userRecord.length === 0) {
      return null;
    }
    return userRecord[0];
  }

  public async createUser(user: IUser): Promise<IUser> {
    const userRecord = new UserModel(user);
    const record = await userRecord.save();
    return record;
  }

  public async updateUserDetail(user: Partial<Pick<IUser, 'userId' | 'resetPasswordToken'>>): Promise<IUser> {
    const filter: FilterQuery<IUser> = {
      userId: user.userId,
    };
    const update = <Record<string, unknown>>{};

    if (user.resetPasswordToken) {
      update.resetPasswordToken = user.resetPasswordToken;
    }
    const userRecord = await UserModel.findOneAndUpdate(filter, { $set: update }).lean<IUser>();
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.USER_NOT_FOUND);
    }
    return userRecord;
  }

  public async updateUserPassword(user: Partial<Pick<IUser, 'resetPasswordToken' | 'password'>>): Promise<IUser> {
    const filter: FilterQuery<IUser> = {
      resetPasswordToken: user.resetPasswordToken,
    };
    const update: Partial<IUser> = {};
    update.password = user.password;
    update.resetPasswordToken = 'expired';
    const userRecord = await UserModel.findOneAndUpdate(filter, { $set: update }).lean<IUser>();
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_EMAIL_TOKEN);
    }
    return userRecord;
  }

  public async findUserDetails(User: ValidateTokenDto): Promise<IUser | null> {
    const filter: FilterQuery<IUser> = {
      email: User.email,
      resetPasswordToken: User.token,
    };
    return await UserModel.findOne(filter);
  }

  public async getUserDetails(userId: string): Promise<IUser | null> {
    const filter: FilterQuery<IUser> = {
      userId: userId,
    };
    return await UserModel.findOne(filter);
  }

  public async updateUser(data: UpdateUserDto): Promise<void> {
    const filter: FilterQuery<IUser> = {
      userId: data.userId,
    };
    const update: Partial<IUser> = {};
    if (data.newPassword) {
      update.password = data.newPassword;
    }
    if (data.firstName) {
      update.firstName = data.firstName;
    }
    if (data.lastName) {
      update.lastName = data.lastName;
    }
    if (data.email) {
      update.email = data.email;
    }
    const userRecord = await UserModel.findOneAndUpdate(filter, { $set: update }).lean<IUser>();
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.USER_NOT_FOUND);
    }
  }
  public async updateCustomerId(userId: string, customerId: string): Promise<void> {
    const filter: FilterQuery<IUser> = {
      userId: userId,
    };
    const update: Partial<IUser> = {};
    update.customerId = customerId;

    const userRecord = await UserModel.findOneAndUpdate(filter, { $set: update }).lean<IUser>();
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.USER_NOT_FOUND);
    }
  }
}
