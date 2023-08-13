import { useEffect, useState } from 'react';
import './App.css';
import { fetchEntry } from '../contentfulClient';
import { Menu } from './components/Menu/Menu';
import { Contact } from './components/Contact/Contact';
import { Gallery } from './components/Gallery/Gallery';
import { Navbar } from '@/components/Navbar/Navbar';

function App() {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    fetchEntry('2RF9yrpfMb8sq4fd4AuxjY')
      .then((response) => setEntry(response.data))
      .catch(console.error);
  }, []);

  const menuId = entry?.fields?.menu?.sys?.id || null;
  const contactId = entry?.fields?.contactPage?.sys?.id || null;
  const photos =
    entry?.fields?.gallery?.map((photo: any) => photo.sys.id) || [];
  const description = entry?.fields?.description || {};

  return (
    <>
      <Navbar />
      <div>hello</div>
      <div>
        {entry && (
          <div>
            <h2>{entry.fields.title}</h2>
            <p>{description}</p>
            {menuId && <Menu entryId={menuId} />}
            {contactId && <Contact entryId={contactId} />}
            {photos && <Gallery photosIds={photos} />}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
