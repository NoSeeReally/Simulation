interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <p className="text-center">{text}</p>
    </footer>
  );
}