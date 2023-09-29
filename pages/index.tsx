import Link from 'next/link';
import usePostList from '@/hooks/use-post-list';

export default function Home() {
  const { data } = usePostList();

  return (
    <>
      {data && data.map(d => <Link key={d.sys.id}
        href={{
          pathname: '/posts/[slug]',
          query: { slug: encodeURIComponent(d.sys.id) },
        }}>{d.fields.title}</Link>)}
    </>
  )
}