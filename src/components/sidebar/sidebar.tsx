"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  name: string;
  route: string;
  subroutes?: SidebarProps[];
}
export function Sidebar() {
  const pathname = usePathname();

  const routes: SidebarProps[] = [
    { name: "Home", route: "/" },
    {
      name: "Builds",
      route: "/builds",
      subroutes: [
        { name: "Create build", route: "/builds/create" },
        { name: "View builds", route: "/builds/view" },
      ],
    },
    {
      name: "Items",
      route: "/items",
      subroutes: [
        { name: "Weapons", route: "/items/weapons" },
        { name: "Shields", route: "/items/shields" },
        { name: "Artifacts", route: "/items/artifacts" },
        { name: "Class Mods", route: "/items/class-mods" },
        { name: "Grenades", route: "/items/grenades" },
      ],
    },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.route}>
            <Link
              href={route.route}
              className={route.route === pathname ? "active" : ""}
            >
              {route.name}
            </Link>
            {route.subroutes && pathname.startsWith(route.route) && (
              <ul>
                {route.subroutes.map((subroute) => (
                  <li key={subroute.route}>
                    <Link
                      href={subroute.route}
                      className={subroute.route === pathname ? "active" : ""}
                    >
                      {subroute.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
