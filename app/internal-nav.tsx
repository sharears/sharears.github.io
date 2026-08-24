import Link from "./static-link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
  { label: "Publications", href: "/publications" },
  { label: "Service & outreach", href: "/service" },
] as const;

type InternalNavProps = {
  current?: (typeof navigationItems)[number]["label"];
};

export default function InternalNav({ current }: InternalNavProps) {
  return (
    <nav className="nav pageNav" aria-label="Portfolio navigation">
      <Link className="brand" href="/" prefetch={true} aria-label="Sharear Saon home">
        SS<span>.</span>
      </Link>
      <div className="pageNavLinks">
        {navigationItems.map((item) => {
          const isCurrent = item.label === current;

          return (
            <Link
              key={item.label}
              className={isCurrent ? "isCurrent" : undefined}
              href={item.href}
              prefetch={true}
              aria-current={isCurrent ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
