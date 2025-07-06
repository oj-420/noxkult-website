import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <Image
        src="/noxkult-logo.jpeg"
        width={300}
        height={300}
        alt="Noxkult Logo"
      />
    </main>
  );
}