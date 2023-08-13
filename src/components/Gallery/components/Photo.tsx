import { useEffect, useState } from 'react';
import { fetchEntryData } from '../../../utils/fetchEntryId';

interface PhotoProps {
  entryId: string;
}

export const Photo = ({ entryId }: PhotoProps) => {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntryData(entryId);
      setEntry(data);
    };

    fetchData();
  }, [entryId]);

  console.log(entry);

  return <div>Photo</div>;
};
