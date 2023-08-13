import { useEffect, useState } from 'react';
import { fetchEntryData } from '../../utils/fetchEntryId';
import { SocialMediaLink } from '../SocialMediaLink/SocialMediaLink';

interface ContactProps {
  entryId: string;
}

export const Contact = ({ entryId }: ContactProps) => {
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
        <>
          <div>{entry.fields.title}</div>
          <div>{entry.fields.address}</div>
          <div>{entry.fields.email}</div>
          <div>{entry.fields.phone}</div>
          {entry.fields.socialMediaLinks.map((socialMediaLink: any) => (
            <SocialMediaLink
              entryId={socialMediaLink?.sys?.id}
              key={socialMediaLink.sys.id}
            />
          ))}
        </>
      )}
    </div>
  );
};
