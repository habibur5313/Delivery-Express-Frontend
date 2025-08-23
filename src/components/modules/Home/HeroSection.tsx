import { Button } from "@/components/ui/button";
import Logo from "@/assets/icon/Logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HeroSection() {

  return (
    <section className="relative overflow-hidden py-32 min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Logo */}
          <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm mb-6">
            <Logo />
          </div>

          {/* Heading & Tagline */}
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-pretty lg:text-5xl">
              Fast & Reliable <span className="text-primary">Parcel Delivery</span>
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
              Deliver your parcels anywhere in Bangladesh with speed and reliability.
              Track your delivery and manage your parcels easily with our platform.
            </p>
          </div>

          {/* City selection + Search button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select Your City" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Delivery Cities</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
              <Button disabled>Book Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
