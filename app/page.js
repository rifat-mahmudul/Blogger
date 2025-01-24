import Link from 'next/link';

// Fetch data directly in the server component
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="max-w-[90%] xl:max-w-[1200px] mx-auto mt-6 mb-16">
      <h1 className="text-3xl font-bold mb-5 text-center text-black">Featured Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <div 
            key={post.id} 
            className="p-4 border border-green-500 rounded-lg text-center shadow"
          >
            <h1 className='font-bold text-lg'>{post.title}</h1>
            <p className="text-gray-600 mt-2 mb-2">{post.body.slice(0, 50)}...</p>
            <Link href={`/blog/${post.id}`}>
              <button className='py-2 px-5 bg-green-500 hover:bg-green-600 transition text-white rounded-lg font-semibold'>See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
