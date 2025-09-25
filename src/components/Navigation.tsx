import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator } from
'@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger } from
'@/components/ui/sheet';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b943c8e9-3afe-4def-98dc-7dbc474a2be6.webp"
              alt="MyKohi Logo"
              className="h-10 w-auto" />

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MyKohi
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/">
              <Button
                variant="ghost"
                className={`text-blue-700 hover:text-blue-900 ${isActive('/') ? 'bg-blue-50' : ''}`}>

                Home
              </Button>
            </Link>
            
            <Link to="/about">
              <Button
                variant="ghost"
                className={`text-blue-700 hover:text-blue-900 ${isActive('/about') ? 'bg-blue-50' : ''}`}>

                About
              </Button>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-blue-700 hover:text-blue-900 ${location.pathname.startsWith('/services') ? 'bg-blue-50' : ''}`}>

                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/services/tms-treatment" className="w-full">
                    TMS Treatment Consulting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/depression-treatment" className="w-full">
                    Depression Treatment Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/mental-health-consulting" className="w-full">
                    Mental Health Practice Consulting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/ketamine-therapy" className="w-full">
                    Ketamine Therapy Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/digital-marketing" className="w-full">
                    Digital Marketing Solutions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/team">
              <Button
                variant="ghost"
                className={`text-blue-700 hover:text-blue-900 ${isActive('/team') ? 'bg-blue-50' : ''}`}>

                Team
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                className="bg-blue-600 hover:bg-blue-700">

                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                  <SheetDescription className="text-left">
                    MyKohi TMS & Mental Health Consulting
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" onClick={closeSheet}>
                    <Button variant="ghost" className="w-full justify-start text-blue-700">
                      Home
                    </Button>
                  </Link>
                  
                  <Link to="/about" onClick={closeSheet}>
                    <Button variant="ghost" className="w-full justify-start text-blue-700">
                      About
                    </Button>
                  </Link>

                  <div className="space-y-2">
                    <Link to="/services" onClick={closeSheet}>
                      <Button variant="ghost" className="w-full justify-start text-blue-700 font-semibold">
                        Services
                      </Button>
                    </Link>
                    <div className="pl-4 space-y-1">
                      <Link to="/services/tms-treatment" onClick={closeSheet}>
                        <Button variant="ghost" className="w-full justify-start text-sm text-blue-600">
                          TMS Treatment Consulting
                        </Button>
                      </Link>
                      <Link to="/services/depression-treatment" onClick={closeSheet}>
                        <Button variant="ghost" className="w-full justify-start text-sm text-blue-600">
                          Depression Treatment Marketing
                        </Button>
                      </Link>
                      <Link to="/services/mental-health-consulting" onClick={closeSheet}>
                        <Button variant="ghost" className="w-full justify-start text-sm text-blue-600">
                          Mental Health Practice Consulting
                        </Button>
                      </Link>
                      <Link to="/services/ketamine-therapy" onClick={closeSheet}>
                        <Button variant="ghost" className="w-full justify-start text-sm text-blue-600">
                          Ketamine Therapy Marketing
                        </Button>
                      </Link>
                      <Link to="/services/digital-marketing" onClick={closeSheet}>
                        <Button variant="ghost" className="w-full justify-start text-sm text-blue-600">
                          Digital Marketing Solutions
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <Link to="/team" onClick={closeSheet}>
                    <Button variant="ghost" className="w-full justify-start text-blue-700">
                      Team
                    </Button>
                  </Link>

                  <Link to="/contact" onClick={closeSheet}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>);

};

export default Navigation;