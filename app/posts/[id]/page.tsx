type MOVIE = {
  userID: number;
  id: number;
  title: string;
  body: string;
};
const DetailPosts = async ({ params }: any) => {
  const data: MOVIE = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());
  return (
    <div>
      <h1 className="text-xl mb-4">{data.title}</h1>
      <p className="text-gray-600">{data.body}</p>
    </div>
  );
};
export default DetailPosts;
