export default function InternalPageHeader({ title }: { title: string }) {
  return (
    <header className="internalPageHeader">
      <h1>{title}</h1>
    </header>
  );
}
