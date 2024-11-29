import Header from "@/components/header";

export default function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
