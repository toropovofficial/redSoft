export default async function loadPost(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  } catch (error) {
    return false;
  }
}
