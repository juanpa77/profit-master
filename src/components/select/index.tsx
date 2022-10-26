import { ChangeEvent } from "react";
import { Select, Option } from "./styed";
// import { useCategoryContex } from "../../hooks/useContex";

interface Props {
  handleInputChange(e: ChangeEvent<HTMLSelectElement>): void;
  defaultCategory: string;
  categories: string[]
}

export const SelectList = ({ handleInputChange, defaultCategory, categories }: Props) => {
  // const { category } = useCategoryContex();

  return (
    <Select
      defaultValue={defaultCategory}
      onChange={(e) => handleInputChange(e)}
      name="category"
    >
      {categories.map(category => {
        return (
          <Option key={category}>
            {category}
          </Option>
        );
      })}
    </Select>
  );
};
