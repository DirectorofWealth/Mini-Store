import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-slate-900">
            Mini Store
          </h1>

          <nav className="flex gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              Products
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;