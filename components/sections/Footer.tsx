export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
      <div className="glass rounded-3xl p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Luxe Realty</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="#listings">Listings</a>
            <a className="hover:text-slate-900" href="#lead">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
