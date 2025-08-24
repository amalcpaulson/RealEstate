import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  BedDouble,
  Ruler,
  FlowerIcon,
  Share2,
  Bookmark,
  Play,
  TriangleRightIcon,
  GalleryThumbnails,
  MoreHorizontalIcon,
  FlipHorizontalIcon,
  FileStack,
  Plus,
  ChevronRightIcon,
} from "lucide-react";
import type { Project } from "@/lib/types";
import { CITIES, POPULAR_BY_CITY } from "@/lib/data";
import { PropertyCard } from "@/components/buyer/property-card";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectNavbar from "@/components/site/ProjectNavbar/page";
import FeatureBadge from "@/components/details/FeatureBadge/page";
import Neighbourhood from "@/components/details/Neighbourhood/page";
import styles from "./index.module.css";

function allProjects(): Project[] {
  return (CITIES as readonly string[]).flatMap(
    (city) => POPULAR_BY_CITY[city as keyof typeof POPULAR_BY_CITY] || []
  );
}

function getProjectBySlug(slug: string): Project | undefined {
  return allProjects().find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return allProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? project.title : "Project",
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const similar = (
    POPULAR_BY_CITY[project.city as keyof typeof POPULAR_BY_CITY] || []
  ).filter((p) => p.slug !== project.slug);

  return (
    <>
      <ProjectNavbar />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <Badge className={styles.badge}>
              <FlowerIcon size={14} className={styles.badgeIcon} /> Assetz Properties
            </Badge>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.subtitle}>
            <div className={styles.location}>
              <MapPin size={14} /> {project.location}
            </div>
            <div className={styles.actions}>
              <Link href="/" className={styles.actionLink}>
                <Share2 size={14} /> Share
              </Link>
              <Link href="/" className={styles.actionLink}>
                <Bookmark size={14} /> Bookmark
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className={styles.image}
                priority={false}
              />
              <div className={styles.imageOverlay}>
                <Button variant="default" className={styles.showPhotosButton}>
                  <FlowerIcon size={16} />
                  Show All Photos
                </Button>
              </div>
            </div>
            <div className={styles.sideImages}>
              <div className={styles.sideImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className={styles.image}
                  priority={false}
                />
              </div>
              <div className={styles.sideImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className={styles.image}
                  priority={false}
                />
              </div>
            </div>
            <div className={styles.thumbnailImage}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className={styles.image}
                priority={false}
              />
              <div className={styles.thumbnailOverlay}>
                <Button variant="default" className={styles.playButton}>
                  <Play size={14} />
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <p className={styles.description}>
                  Claim your own piece of majestic living beneath the clouds.
                  Welcome aboard Green Clouds, Kerala’s First Biophilic Sky
                  Bungalows by Veegaland Homes. It is exceptionally unique and
                  available only through exclusive invitation. These homes are
                  designed for a discerning community of families who prioritise
                  life, luxury and nature.
                </p>
                <div className={styles.features}>
                  <FeatureBadge
                    icon={<TriangleRightIcon size={14} className={styles.featureIcon} />}
                    label="17 acres"
                  />
                  <FeatureBadge
                    icon={<BedDouble size={14} />}
                    label="85% Open"
                  />
                  <FeatureBadge icon={<Ruler size={14} />} label="03 Bath" />
                  <FeatureBadge icon={<BedDouble size={14} />} label="03 Bed" />
                  <FeatureBadge
                    icon={<GalleryThumbnails size={14} />}
                    label="Gym"
                  />
                  <FeatureBadge
                    icon={<MoreHorizontalIcon size={14} />}
                    label="80+ More"
                  />
                </div>
                <div className={styles.accordion}>
                  <Accordion
                    type="single"
                    collapsible
                    className={styles.accordionContainer}
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className={styles.accordionTrigger}>
                          <FlipHorizontalIcon size={14} /> Floor & Counter
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={styles.accordionContent}>
                        <p>
                          Our flagship product combines cutting-edge technology
                          with sleek design. Built with premium materials, it
                          offers unparalleled performance and reliability.
                        </p>
                        <p>
                          Key features include advanced processing capabilities,
                          and an intuitive user interface designed for both
                          beginners and experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className={styles.accordionTrigger}>
                          <FileStack size={14} /> Fitting
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={styles.accordionContent}>
                        <p>
                          We offer worldwide shipping through trusted courier
                          partners. Standard delivery takes 3-5 business days,
                          while express shipping ensures delivery within 1-2
                          business days.
                        </p>
                        <p>
                          All orders are carefully packaged and fully insured.
                          Track your shipment in real-time through our dedicated
                          tracking portal.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        <div className={styles.accordionTrigger}>
                          <Plus size={14} /> Wall & Ceiling
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={styles.accordionContent}>
                        <p>
                          We stand behind our products with a comprehensive
                          30-day return policy. If you&apos;re not completely
                          satisfied, simply return the item in its original
                          condition.
                        </p>
                        <p>
                          Our hassle-free return process includes free return
                          shipping and full refunds processed within 48 hours of
                          receiving the returned item.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right */}
          <div className={styles.sidebar}>
            <Card className={styles.sidebarCard}>
              <CardContent className={styles.sidebarCardContent}>
                <div className={styles.price}>
                  ₹{project.priceStr}
                </div>
                <Button className={styles.contactButton}>Contact Seller</Button>
                <div className={styles.possession}>
                  Possession on January 25
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Similar section */}
        <div className={styles.neighbourhood}>
          <h2 className={styles.sectionTitle}>Explore Neighbourhood</h2>
          <div className={styles.neighbourhoodContent}>
            <div className={styles.neighbourhoodDetails}>
              <Neighbourhood />
            </div>
            <div className={styles.mapContainer}>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps?q=12.9716,77.5946&z=13&output=embed"
                  className={styles.iframe}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map view of neighbourhood"
                  aria-label="Map view of neighbourhood"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Similar section */}
        <div className={styles.similar}>
          <h2 className={styles.sectionTitle}>
            Popular Properties in {project.city} <ChevronRightIcon size={28} />
          </h2>
          <div className={styles.similarGrid}>
            {similar.slice(0, 4).map((p) => (
              <PropertyCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}