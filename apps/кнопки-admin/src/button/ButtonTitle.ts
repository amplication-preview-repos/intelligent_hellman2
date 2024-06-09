import { Button as TButton } from "../api/button/Button";

export const BUTTON_TITLE_FIELD = "color";

export const ButtonTitle = (record: TButton): string => {
  return record.color?.toString() || String(record.id);
};
