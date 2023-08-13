import { fetchEntry as fetchFromContentful } from '../../contentfulClient';

export const fetchEntryData = async (entryId: string) => {
  try {
    const response = await fetchFromContentful(entryId);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
