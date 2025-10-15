export const ModernLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
    <header className="p-4 font-bold bg-white shadow">Modern Header</header>
    <main className="flex-1 p-6">{children}</main>
  </div>
);
