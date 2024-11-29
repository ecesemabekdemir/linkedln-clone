import Footer from "@/components/footer";

export default function AdsLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
