import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  items-center h-20">
          <Link href="/" className="font-bold text-2xl text-primary">
            ASHAA
          </Link>
          <div className="flex space-x-0 md:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tailoring Courses</DropdownMenuItem>
                <DropdownMenuItem>Dress Designing Courses</DropdownMenuItem>
                <DropdownMenuItem>Student's Creation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Courses</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  Basic Tailoring Course (6 months)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Basic Embroidery Course (3 months)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Diploma in Tailoring and Dress Designing (1 year)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Short-term Fun Courses (3 months)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Recycle & Reuse Old Clothes (3 months)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Certificates</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  Certificates for Tailoring Course
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Diploma Certificate for Dress Designing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="default">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
