export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="font-display font-semibold text-foreground">
            Kreatech
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="#" className="hover:text-accent">
            GitHub
          </a>
          <a href="mailto:info@kreatech.ee" className="hover:text-accent">
            info@kreatech.ee
          </a>
        </div>
      </div>
    </footer>
  );
}
