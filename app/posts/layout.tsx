import Link from "next/link";
type MOVIE = {
  userID: number;
  id: number;
  title: string;
  body: string;
};
interface POSTS {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: POSTS) => {
  const data: MOVIE[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return (
    <div className="pt-4 grid grid-cols-[40%_60%] gap-4">
      <div className="space-y-4 ">
        {data.map((post: MOVIE) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            tabIndex={post.id}
            className="block p-4 border border-gray-800 rounded-md cursor-pointer hover:border-gray-600"
          >
            <h2 className="text-gray-100">{post.title}</h2>
          </Link>
        ))}
      </div>

      <div className="p-4 border border-gray-700 rounded-md h-max">
        {children}
      </div>
    </div>
  );
};
export default RootLayout;
