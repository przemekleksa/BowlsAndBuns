import { useEffect, useState } from 'react';
import { fetchEntryData } from '../../utils/fetchEntryId';

interface FoodItemProps {
  entryId: string;
  category: string;
}

export const FoodItem = ({ entryId, category }: FoodItemProps) => {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntryData(entryId);
      setEntry(data);
    };

    fetchData();
  }, [entryId]);

  if (!entry?.fields?.category.includes(category)) return null;

  return (
    <div>
      {entry && (
        <>
          <div>{entry.fields.name}</div>
          <div>{entry.fields.ingredients}</div>
          <div>{entry.fields.price}</div>
          <div>{entry.fields.allegens}</div>
        </>
      )}
    </div>
  );
};
