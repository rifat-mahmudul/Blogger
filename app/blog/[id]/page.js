import Link from "next/link";

export default async function BlogPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="max-w-[90%] xl:max-w-[800px] mx-auto mt-8 border border-gray-400 rounded-lg p-4 shadow-xl shadow-green-200">
      <h1><span className="font-bold text-lg">Blog ID :</span> {post.id}</h1>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
        {post.title}
      </h1>
      <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
        {post.body}
      </p>
      <Link 
        href="/" 
        className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition-all duration-300"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
