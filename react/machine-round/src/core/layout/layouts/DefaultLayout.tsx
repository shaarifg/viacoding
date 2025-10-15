import Settings from "@/core/layout/common/settings/Settings";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-gray-50">
    <aside className="w-64 bg-primary text-white p-4">Sidebar</aside>
    <main className="flex-1 p-6">{children}</main>
  </div>
);
