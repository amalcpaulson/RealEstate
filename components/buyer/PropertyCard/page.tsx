"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import { Badge } from "../../ui/badge";
import { Bookmark, MapPin } from "lucide-react";

import styles from "./index.module.css";

export function PropertyCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.link}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 262px, (min-width: 640px) 33vw, 100vw"
            className={styles.image}
            priority={false}
          />
          <div className={styles.logoWrapper}>
            <Image
              src={project.logo}
              alt="Builder Logo"
              width={40}
              height={40}
            />
          </div>
        </div>
        <CardContent className={styles.content}>
          <Badge className={styles.badge}>
            <MapPin size={12} className={styles.mapIcon} />
            {project.location}
          </Badge>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.footer}>
            <p className={styles.price}>{`₹${project.priceStr}`}</p>
            <Bookmark size={20} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
