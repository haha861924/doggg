import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { Thumbnail } from 'components';
import { IPost } from 'types/post';
import { getAllPosts } from 'utils/mdxUtils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  posts: IPost[];
};

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail'
  ]);
  // retunr the posts props
  return { props: { posts } }
}


const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Technical articles</h1>
      <div className="space-y-12">
        {posts?.map((post) => (
          <div key={post.slug}>
            <div className="mb-4">
              <Thumbnail
                slug={post.slug}
                title={post.title}
                src={post.thumbnail} />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/posts/${post.slug}`}>
                <span>{post.title}</span>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
