import SideNav from "../ui/dashboard/sidenav";

// Essa prop children sempre será o conteúdo de um arquivo page ou de outro arquivo layout. Como esse layout está dentro da pasta dashboard, ele será
// utilizado em todas "rotas filhas" de /dashboard, ex: /dashboard/customers e /dashboard/invoices.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
