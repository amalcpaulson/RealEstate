"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import { Badge } from "../ui/badge";
import { Bookmark, MapPin } from "lucide-react";

export function PropertyCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="overflow-hidden h-full flex flex-col shadow-none">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 262px, (min-width: 640px) 33vw, 100vw"
            className="object-cover p-2 rounded-[18px]"
            priority={false}
          />
          <div className="absolute right-1.5 top-2 flex gap-2">
            <Image
              src={project.logo}
              alt="Builder Logo"
              width={40}
              height={40}
            />
          </div>
        </div>
        <CardContent className="p-3 pt-0">
          <Badge className="mb-2 bg-muted text-muted-foreground rounded-full py-1 px-2">
            <MapPin size={12} className="mr-1" />
            {project.location}
          </Badge>
          <h3 className="line-clamp-2 text-sm leading-5 font-medium min-h-[2.5rem]">
            {project.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-md font-bold text-primary">{`₹${project.priceStr}`}</p>
            <Bookmark size={20} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
