import { Photo } from './components/Photo';

interface GalleryProps {
  photosIds: string[];
}

export const Gallery = ({ photosIds }: GalleryProps) => {
  return (
    <>
      {photosIds &&
        photosIds.map((photoId) => <Photo entryId={photoId} key={photoId} />)}
    </>
  );
};
