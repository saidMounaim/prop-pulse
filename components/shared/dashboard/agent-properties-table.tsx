"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { PropertyType, Status } from "@/lib/generated/prisma/enums";

interface AgentProperty {
  id: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  status: Status;
  type: PropertyType;
  image: string;
  createdAt: Date;
}

export function AgentPropertiesTable({ data }: { data: AgentProperty[] }) {
  return (
    <div className="rounded-md border bg-white dark:bg-slate-900">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((property) => (
            <TableRow key={property.id}>
              <TableCell>
                <div className="relative h-10 w-16 overflow-hidden rounded-md">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="line-clamp-1">{property.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">
                  {property.location}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    property.status === "ACTIVE" ? "default" : "secondary"
                  }
                >
                  {property.status}
                </Badge>
              </TableCell>
              <TableCell>
                {/* Format Enum FOR_SALE -> For Sale */}
                <span className="capitalize">
                  {property.type.toLowerCase().replace("_", " ")}
                </span>
              </TableCell>
              <TableCell>{property.price}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/listings/${property.slug}`}>
                        <Eye className="mr-2 h-4 w-4" /> View Live
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/edit/${property.id}`}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
