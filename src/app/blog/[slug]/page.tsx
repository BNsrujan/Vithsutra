import BlogPost from '@/components/blog/BlogPost'

export default async function Page({ params }: { params: { slug: string } }) {
  return <BlogPost slug={params.slug} />
} 