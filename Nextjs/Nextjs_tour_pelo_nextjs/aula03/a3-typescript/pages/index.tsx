import Link from 'next/link';
import LinkPrefetchPage from './link-prefetch';

export default function Home() {
  return (
    <div>
      Nada por aqui
      <Link href="/sobre"  prefetch={false}>sobre</Link>
      <LinkPrefetchPage/>
    </div>
  )
}
