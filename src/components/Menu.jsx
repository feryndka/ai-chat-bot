"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  const listMenu = [
    {
      name: "Home",
      link: "/home",
      break: <BreadcrumbSeparator />,
    },
    {
      name: "Product",
      link: "/world",
      break: <BreadcrumbSeparator />,
    },
    {
      name: "Fashion",
      link: "/travel",
    },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {listMenu.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.link}
                  className={`${
                    pathname.startsWith(item.link) &&
                    "dark:text-white text-black font-bold"
                  }`}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {item.break}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
