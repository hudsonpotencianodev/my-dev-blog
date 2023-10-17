import Link from 'next/link';
import usePostList from '@/hooks/use-post-list';

export default function Home() {
  const { data } = usePostList();

  return (
    <>
      {data &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((d: any) => (
          <Link
            key={d.id}
            href={{
              pathname: '/posts/[slug]',
              query: { slug: encodeURIComponent(d.id) }
            }}
          >
            {d.title ?? ''}
          </Link>
        ))}
    </>
  );
}
