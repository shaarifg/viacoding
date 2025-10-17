import { ReactNode } from "react";
import { SquareNavigationProvider } from "../../../../@square/components/navigation/SquareNavigationContext";
import { SquareNavigationItem } from "../../../../@square/components/navigation/navigation.types";
import { HorizontalNavigation } from "../../../../@square/components/navigation/horizontal/HorizontalNavigation";

// Example navigation items (you can later load this dynamically)
const navigation: SquareNavigationItem[] = [
  {
    id: "dashboards",
    title: "Dashboards",
    type: "group",
    icon: "heroicons_outline:home",
    children: [
      {
        id: "dashboards.project",
        title: "Project",
        type: "basic",
        icon: "heroicons_outline:clipboard-document-check",
        link: "/dashboards/project",
      },
      {
        id: "dashboards.analytics",
        title: "Analytics",
        type: "basic",
        icon: "heroicons_outline:chart-pie",
        link: "/dashboards/analytics",
      },
      {
        id: "dashboards.finance",
        title: "Finance",
        type: "basic",
        icon: "heroicons_outline:banknotes",
        link: "/dashboards/finance",
      },
      {
        id: "dashboards.crypto",
        title: "Crypto",
        type: "basic",
        icon: "heroicons_outline:currency-dollar",
        link: "/dashboards/crypto",
      },
    ], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: "apps",
    title: "Apps",
    type: "group",
    icon: "heroicons_outline:squares-2x2",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: "pages",
    title: "Pages",
    type: "group",
    icon: "heroicons_outline:document-duplicate",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: "user-interface",
    title: "UI",
    type: "group",
    icon: "heroicons_outline:rectangle-stack",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: "navigation-features",
    title: "Misc",
    type: "group",
    icon: "heroicons_outline:bars-3",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];

export const ModernLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SquareNavigationProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* Header with Horizontal Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Modern Layout</h1>
            <HorizontalNavigation
              navigation={navigation}
              name="modernLayoutNav"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SquareNavigationProvider>
  );
};
