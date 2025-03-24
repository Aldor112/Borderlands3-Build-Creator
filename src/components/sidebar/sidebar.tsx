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
    <nav className="h-screen bg-[#1a1a1a] text-[#f4d03f] p-4 border-2 border-[#f4d03f] font-[Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif]">
      <ul>
        {routes.map((route) => (
          <li key={route.route} className="mb-2">
            <Link
              href={route.route}
              className={`block p-2 border border-[#f4d03f] font-bold ${
                route.route === pathname
                  ? "bg-[#2c2c2c] text-[#f4d03f]"
                  : "hover:bg-[#3e3e3e] hover:text-white"
              }`}
            >
              {route.name}
            </Link>
            {route.subroutes && pathname.startsWith(route.route) && (
              <ul className="ml-4 mt-2">
                {route.subroutes.map((subroute) => (
                  <li key={subroute.route} className="mb-1">
                    <Link
                      href={subroute.route}
                      className={`block p-2 border border-[#f4d03f] font-bold ${
                        subroute.route === pathname
                          ? "bg-[#2c2c2c] text-[#f4d03f]"
                          : "hover:bg-[#3e3e3e] hover:text-white"
                      }`}
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
