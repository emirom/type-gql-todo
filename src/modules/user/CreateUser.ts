import { User } from "../../entity/User";
import { RegisterUserInput } from "./register/RegisterUserInput";
import { createSingleResolver } from "../../utils/createSingleResolver";

export const CreateUserResolver = createSingleResolver(
  "User",
  User,
  RegisterUserInput,
  User
);
// @Resolver()
// export class CreateUserResolver extends BaseCreateUser {
//     sendEmail(email, await createConfirmationUrl(user.id));
// }
