export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-gray-200 to-gray-50">
      {children}
    </div>
  );
}
