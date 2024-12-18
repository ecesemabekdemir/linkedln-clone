import Footer from "@/components/footer";

export default function LinkedLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
