import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ButtonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
