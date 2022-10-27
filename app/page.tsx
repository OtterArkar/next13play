import Image from "next/image";
import snippet from "../public/snippet.png";
export default function Home() {
  return (
    <div className="mt-12 ">
      <div className="space-y-4">
        <h1 className="text-4xl">
          All about <span className="text-blue-500">caching</span> in the end
        </h1>
        <Image
          className="m-0"
          alt="snippet"
          src={snippet}
          width={700}
          height={500}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
// export const runtime = "experimental-edge";
