// app/app/[domain]/page.tsx
export default function DomainPage({ params }: { params: { domain: string } }) {
  return <div>Welcome to {params.domain}'s app!!!!</div>;
}
