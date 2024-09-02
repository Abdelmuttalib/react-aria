import ThemeSwitcher from "@/components/theme";
import { GradientBackground } from "@/components/ui/gradient";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

function getDocsComponentPath(component: string) {
  return `${siteConfig.paths.docs}${siteConfig.paths.components}/${component}`;
}

const docsComponentsPaths = Object.entries(siteConfig.paths.components)
  .map(([key, value]) =>
    key === "index"
      ? null
      : {
          title: key.replace("-", " "),
          href: value,
        }
  )
  .filter(Boolean);

const docsLayoutLinks = [
  {
    section: "Getting Started",
    links: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Components",
        href: "/docs/components",
      },
      {
        title: "Guides",
        href: "/docs/guides",
      },
      {
        title: "CSS",
        href: "/docs/css",
      },
    ],
  },
  {
    section: "Components",
    links: docsComponentsPaths,
  },
];

function DocsLayoutSidebarLink({
  href,
  title,
  active,
}: {
  href: string;
  title: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      // href={href}
      className={cn(
        "block py-2 px-4 text-sm rounded rounded-l-none text-foreground-lighter dark:text-gray-300 hover:bg-background dark:hover:bg-background border-l-2 capitalize hover:text-foreground",
        {
          "border-primary font-medium text-foreground-light": active,
        }
      )}
      // className="text-sm rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {title}
    </Link>
  );
}

const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/components", title: "Components" },
  { href: "/docs", title: "Docs" },
  // { href: "/blog", title: "Blog" },
  // { href: "/about", title: "About" },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen flex flex-col overflow-y-auto pl-10 pb-10">
      <div className="relative">
        <GradientBackground />
      </div>
      <header className="border-b sticky top-0 z-40 block bg-background/[0.3] backdrop-blur-md">
        <div className="w-full h-14">
          <DocsLayoutContainer className="h-full flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="font-medium tracking-tight text-lg rounded-[2px] bg-[#222] dark:bg-background text-white px-1 -mx-1">
                React Aria UI
              </h1>
            </div>
            <div className="flex items-center text-sm gap-x-4">
              {headerNavLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.title}
                </Link>
              ))}
              {/* <ThemeSwitcher /> */}
            </div>
          </DocsLayoutContainer>
        </div>
      </header>
      <div className="flex-1 pb-72">
        <DocsLayoutContainer className="flex h-full flex-1 gap-x-8 relative">
          <DocsLayoutSidebar className="fixed py-10" />
          <DocsLayoutMain className="ml-56 mr-10 max-w-2xl mx-auto py-10">
            {children}
          </DocsLayoutMain>
          {/* <DocsLayoutSidebarReferrer className="fixed bg-red-300">
            <p>
              <a href="#ff" className="text-primary underline">
                Edit this page on GitHub
              </a>
            </p>
          </DocsLayoutSidebarReferrer> */}
        </DocsLayoutContainer>
      </div>
      {/* <footer className="border-t mt-auto h-80">
        <DocsLayoutContainer>
          <p>© {new Date().getFullYear()}</p>
        </DocsLayoutContainer>
      </footer> */}
    </div>
  );
}

function DocsLayoutSidebar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <aside
      className={cn(
        "w-56 mr-10 h-full overflow-auto scrollbar-hide",
        className
      )}
    >
      <nav className="pb-40">
        {docsLayoutLinks.map((link, i) => (
          <>
            <h5
              key={link.section}
              className={`text-sm font-semibold ${i !== 0 ? "mt-3" : ""}`}
            >
              {link.section}
            </h5>
            <ul key={link.section + i} className="mt-3">
              {link.links.map((link) =>
                link ? (
                  <li key={link.href}>
                    <DocsLayoutSidebarLink
                      {...link}
                      active={router.pathname === link.href}
                    />
                  </li>
                ) : null
              )}
            </ul>
          </>
        ))}
      </nav>
    </aside>
  );
}

function DocsLayoutMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex-1 h-full min-h-screen", className)}>
      {children}
    </main>
  );
}

function DocsLayoutSidebarReferrer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-44 text-sm text-gray-500", className)}>
      {children}
    </div>
  );
}

function DocsLayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto", className)}>{children}</div>
  );
}
