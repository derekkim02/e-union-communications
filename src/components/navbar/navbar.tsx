import React from "react";
import companyLogo from "@/assets/company-logo.svg";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Users, BookOpenText, BriefcaseBusiness, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

interface Logo {
  url: string
  src: string
  alt?: string
  title: string
}

const logo: Logo = {
  url: "/",
  src: companyLogo,
  title: "E Union Communication"
}

const homeMenu: MenuItem = {
  title: "Home",
  url: "/",
}
const aboutMenu: MenuItem = {
  title: "About",
  url: "/about",
  items: [
    {
      title: "The Team",
      url: "###",
      description: "Meet the team behind the company",
      icon: <Users className="size-5 shrink-0" />
    },
    {
      title: "Our Story",
      url: "###",
      description: "Learn about our journey and values",
      icon: <BookOpenText className="size-5 shrink-0" />
    },
    {
      title: "Careers",
      url: "###",
      description: "Join our team and grow with us",
      icon: <BriefcaseBusiness className="size-5 shrink-0" />
    },
  ]
}

const servicesMenu: MenuItem = {
  title: "Services",
  url: "/services",
  items: [
    {
      title: "Smart Home Solutions",
      url: "###",
      description: "Providing seamless, modern automation systems that enhance comfort, security, and energy efficiency in your home.",
    },
    {
      title: "Home Cinema",
      url: "###",
      description: "Home Cinema delivers immersive, high-quality audiovisual experiences that bring the magic of the movies to you.",
    },
    {
      title: "Renovation",
      url: "###",
      description: "Transform and modernize your living spaces to enhance comfort, functionality, and style",
    },
  ]
}

const contactMenu: MenuItem = {
  title: "Contact",
  url: "/contact",
}

const SubMenuLink = ({ item, className }: { item: MenuItem, className?: string }) => {
  return (
      <Link
        to={item.url}
        className={`flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground ${className}`}
      >
        <div className="text-foreground">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </Link>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link
          to={item.url}
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  )
}

const NavBar = () => {
  const menu: MenuItem[] = [
    homeMenu,
    aboutMenu,
    servicesMenu,
    contactMenu
  ]

  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} alt={logo.alt} className="max-h-8" />
              <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
            </Link>

            {/* Navigation Menu */}
            <div className="flex flex-col items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} alt={logo.alt} className="max-h-8" />
              <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} alt={logo.alt} className="max-h-8" />
                      <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          
          </div>
        </div>

      </div>
    </section>
  );
}

export default NavBar;