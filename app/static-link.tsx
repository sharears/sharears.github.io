import type { AnchorHTMLAttributes, ReactNode } from "react";

type StaticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  prefetch?: boolean;
  children: ReactNode;
};

export default function StaticLink({ prefetch: _prefetch, ...props }: StaticLinkProps) {
  const match = props.href.match(/^([^?#]*)(.*)$/);
  const path = match?.[1] ?? props.href;
  const suffix = match?.[2] ?? "";
  const lastSegment = path.split("/").at(-1) ?? "";
  const shouldAddTrailingSlash = path.startsWith("/") && path !== "/" && !path.endsWith("/") && !lastSegment.includes(".");
  const href = `${shouldAddTrailingSlash ? `${path}/` : path}${suffix}`;

  return <a {...props} href={href} />;
}
