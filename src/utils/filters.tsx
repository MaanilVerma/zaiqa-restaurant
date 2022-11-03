import { FoodItem } from "../../types";
import { useStateValue } from "../context/StateProvider";

export const FilterFood = (category: string) => {
  const [{ foodItems }] = useStateValue();
  return foodItems?.filter(
    (item: FoodItem) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const GetFoodById = (id: number) => {
  const [{ foodItems }] = useStateValue();
  return foodItems?.find((item: FoodItem) => item.id === id);
};
