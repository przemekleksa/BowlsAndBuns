import { useEffect, useState } from 'react';
import { fetchEntry } from '../../../contentfulClient';
import { FoodItem } from '../FoodItem/FoodItem';

interface MenuProps {
  entryId: string;
}

export const Menu = ({ entryId }: MenuProps) => {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    fetchEntry(entryId)
      .then((response) => setEntry(response.data))
      .catch(console.error);
  }, []);

  const foodItems = entry?.fields?.foodItems || [];

  return (
    <>
      <div>Menu</div>
      <div>Breakfast</div>
      {entry &&
        foodItems.map((foodItem: any) => (
          <FoodItem
            entryId={foodItem?.sys?.id}
            key={foodItem.sys.id}
            category="Breakfast"
          />
        ))}
      <div>Main</div>
      {entry &&
        foodItems.map((foodItem: any) => (
          <FoodItem
            entryId={foodItem?.sys?.id}
            key={foodItem.sys.id}
            category="Main"
          />
        ))}
    </>
  );
};
