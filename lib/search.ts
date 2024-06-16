export async function searchResults(query: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
  );

  const result = await res.json();
  return result[0];
}
