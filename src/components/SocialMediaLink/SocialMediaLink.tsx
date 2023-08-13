import { useEffect, useState } from 'react';
import { fetchEntryData } from '../../utils/fetchEntryId';

interface SocialMediaLinkProps {
  entryId: string;
}

export const SocialMediaLink = ({ entryId }: SocialMediaLinkProps) => {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEntryData(entryId);
      setEntry(data);
    };

    fetchData();
  }, [entryId]);

  return (
    <div>
      {entry && (
        <div>
          <a href={entry.fields.url}>{entry.fields.platform}</a>
        </div>
      )}
    </div>
  );
};
