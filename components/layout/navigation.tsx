"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const navigationCategories: { title: string; href: string; description: string }[] = [
  {
    title: "T-shirts",
    href: "/products?category=tshirts",
    description: "Classic and graphic cotton tees for everyday wear."
  },
  {
    title: "Hand bags",
    href: "/products?category=handbags",
    description: "Stylish tote bags, crossbody bags, and clutches."
  },
  {
    title: "Caps",
    href: "/products?category=caps",
    description: "Baseball caps, beanies, and snapbacks."
  },
  {
    title: "Shoes",
    href: "/products?category=shoes",
    description: "Running shoes, loafers, and casual sneakers."
  },
  {
    title: "Watches",
    href: "/products?category=watches",
    description: "Luxury chronographs and minimalist analog watches."
  },
  {
    title: "Sun glasses",
    href: "/products?category=sunglasses",
    description: "Classic aviators and modern wayfarer frames."
  }
];


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="mb-1 text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full flex-col justify-end rounded-md bg-[url('https://bundui-images.netlify.app/products/01.jpeg')] bg-cover p-0! no-underline outline-hidden select-none focus:shadow-md"
                    href="/">
                    <div className="bg-foreground/30 space-y-2 p-4 text-white backdrop-blur-md">
                      <div className="font-medium">New Arrivals</div>
                      <p className="text-sm leading-tight">
                        Discover the styles in our latest collection.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Summer Collection">
                Lightweight essentials perfect for the warm season.
              </ListItem>
              <ListItem href="#" title="Accessories">
                Complete your look with our stylish bags, jewelry, and more.
              </ListItem>
              <ListItem href="#" title="Sale">
                Shop discounted items before they&#39;re gone.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:grid-cols-2 lg:w-[550px]">
              {navigationCategories.map((category) => (
                <ListItem key={category.title} title={category.title} href={category.href}>
                  {category.description}
                </ListItem>
              ))}
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">All Products</div>
                    <div className="text-muted-foreground">Browse our full product catalog.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">FAQs</div>
                    <div className="text-muted-foreground">Answers to common questions.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">Get inspired by our latest posts.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
