import { createContext, useContext, useState } from "react";
import { DefaultLayout } from "@/core/layout/layouts/DefaultLayout";
import { CompactLayout } from "@/core/layout/layouts/CompactLayout";
import { ModernLayout } from "@/core/layout/layouts/ModernLayout";

const LAYOUTS: Record<string, React.FC<{ children: React.ReactNode }>> = {
  default: DefaultLayout,
  compact: CompactLayout,
  modern: ModernLayout,
};

const LayoutContext = createContext({
  layout: "default",
  setLayout: (layout: string) => {},
});

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState("default");
  const Layout = LAYOUTS[layout] || DefaultLayout;

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
};
