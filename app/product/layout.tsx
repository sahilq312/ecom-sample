
import ProductFooter from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Navbar>
      {children}
      {/* <ProductFooter/> */}
    </Navbar>
  );
}
