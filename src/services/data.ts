export async function fetchData(value: string) {
  try {
    const responsive = await fetch(value);
    const data = await responsive.json();
    return data.results;
  } catch (error) {
    console.log(new Error('error'));
  }
}
