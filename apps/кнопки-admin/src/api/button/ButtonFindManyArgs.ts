import { ButtonWhereInput } from "./ButtonWhereInput";
import { ButtonOrderByInput } from "./ButtonOrderByInput";

export type ButtonFindManyArgs = {
  where?: ButtonWhereInput;
  orderBy?: Array<ButtonOrderByInput>;
  skip?: number;
  take?: number;
};
