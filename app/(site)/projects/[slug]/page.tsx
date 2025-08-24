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
      <div className="max-w-6xl mx-auto px-4 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="rounded-full px-2 py-1 text-xs border">
              <FlowerIcon size={14} className="mr-1" /> Assetz Properties
            </Badge>
          </div>
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {project.title}
          </h1>
          <div className="mt-1 flex items-center text-sm text-muted-foreground w-full justify-between">
            <div className="flex items-center gap-1">
              <MapPin size={14} /> {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Link href="/" className="text-sm flex items-center gap-1">
                <Share2 size={14} /> Share
              </Link>
              <Link href="/" className="text-sm flex items-center gap-1">
                <Bookmark size={14} /> Bookmark
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-5 grid grid-cols-6 space-x-4 border rounded-xl p-3">
            <div className="col-span-3 relative aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover rounded-xl"
                priority={false}
              />
              <div className="absolute inset-0 flex items-end justify-start p-3">
                <Button variant="default" className="bg-white text-black/50">
                  <FlowerIcon size={16} />
                  Show All Photos
                </Button>
              </div>
            </div>
            <div className="col-span-2 row-span-2 space-y-4">
              <div className="relative aspect-[16.8/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover rounded-xl"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover rounded-xl"
                  priority={false}
                />
              </div>
            </div>
            <div className="col-span-1 relative aspect-[9/19.7]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover rounded-xl"
                priority={false}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="default" className="bg-white text-black/50">
                  <Play size={14} />
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <Card className="shadow-none border-0">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Claim your own piece of majestic living beneath the clouds.
                  Welcome aboard Green Clouds, Kerala’s First Biophilic Sky
                  Bungalows by Veegaland Homes. It is exceptionally unique and
                  available only through exclusive invitation. These homes are
                  designed for a discerning community of families who prioritise
                  life, luxury and nature.
                </p>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <FeatureBadge
                    icon={<TriangleRightIcon size={14} className="rotate-90" />}
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
                <div className="mt-12">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FlipHorizontalIcon size={14} /> Floor & Counter
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
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
                        <div className="flex items-center gap-2">
                          <FileStack size={14} /> Fitting
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
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
                        <div className="flex items-center gap-2">
                          <Plus size={14} /> Wall & Ceiling
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
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
          <div className="col-span-2 lg:sticky lg:top-24 h-max">
            <Card className="shadow-none border-0 bg-accent mx-2 p-4 rounded-3xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold">
                    ₹{project.priceStr}
                  </div>
                </div>
                <Button className="w-full mt-4">Contact Seller</Button>
                <div className="text-sm text-muted-foreground mt-4 text-center">
                  Possession on January 25
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <hr className="my-10" />

        {/* Similar section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-3">Explore Neighbourhood</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mt-8">
            <div className="col-span-3">
              <Neighbourhood />
            </div>
            <div className="col-span-2 px-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border">
                <iframe
                  src="https://www.google.com/maps?q=12.9716,77.5946&z=13&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map view of neighbourhood"
                  aria-label="Map view of neighbourhood"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        {/* Similar section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center gap-2">
            Popular Properties in {project.city} <ChevronRightIcon size={28} />
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {similar.slice(0, 4).map((p) => (
                <PropertyCard key={p.id} project={p} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
