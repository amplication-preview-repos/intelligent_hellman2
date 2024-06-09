import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ButtonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="size" source="size" />
      </SimpleForm>
    </Create>
  );
};
