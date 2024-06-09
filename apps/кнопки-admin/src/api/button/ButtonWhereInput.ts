import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ButtonWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  size?: StringNullableFilter;
};
