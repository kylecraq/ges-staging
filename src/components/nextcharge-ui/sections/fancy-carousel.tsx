'use client';

import { MapPin, Battery, Info } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    badge: 'MAPPA NAVIGABILE',
    title: 'Stazioni di Ricarica',
    description:
      'Scopri tutte le colonnine di ricarica disponibili grazie alla nostra mappa interattiva e sempre aggiornata. Scopri tutte le colonnine di ricarica disponibili grazie alla nostra mappa interattiva e sempre aggiornata.Scopri tutte le colonnine di ricarica disponibili grazie alla nostra mappa interattiva e sempre aggiornata.',
    backgroundImage: 'modern-electric-charging-port.jpg',
    foregroundImage: 'professional-woman-electric-car-coffee.jpg',
    icon: MapPin,
  },
  {
    id: 2,
    badge: 'RICARICA VELOCE',
    title: 'Tecnologia Avanzata',
    description:
      'Ricarica rapida fino a 350kW per massimizzare il tuo tempo. Le nostre stazioni sono dotate delle più moderne tecnologie per garantire efficienza e velocità.',
    backgroundImage: 'customer-support-center-blurred.jpg',
    foregroundImage: 'electric-car-charging-cable.jpg',
    icon: Battery,
  },
  {
    id: 3,
    badge: 'SUPPORTO 24/7',
    title: 'Sempre al Tuo Fianco',
    description:
      'Il nostro team è disponibile 24 ore su 24, 7 giorni su 7 per assisterti. Che tu abbia domande tecniche o necessiti di supporto, siamo qui per aiutarti in ogni momento.',
    backgroundImage: 'customer-support-center-blurred.jpg',
    foregroundImage: 'customer-service-headset.jpg',
    icon: Info,
  },
];

export function FancyCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => {
          const Icon = slide.icon;
          const ForegroundImage = `/carousel/${slide.foregroundImage}`;
          const BackgroundImage = `/carousel/${slide.backgroundImage}`;

          return (
            <SwiperSlide key={slide.id} className="h-screen">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div className="relative h-full w-full">
                  <Image
                    src={BackgroundImage || '/placeholder.svg'}
                    alt="Background"
                    className="object-cover object-center"
                    fill={true}
                  />
                </div>
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-16 lg:px-24">
                {/* Left Side - Text Content */}
                <div className="max-w-xl space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-bold tracking-wider text-black uppercase">
                    <Icon className="h-4 w-4" />
                    {slide.badge}
                  </div>

                  {/* Text Box */}
                  <div className="rounded-3xl bg-white p-8 shadow-2xl">
                    <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                      {slide.title}
                    </h2>
                    <p className="leading-relaxed text-neutral-700">
                      {slide.description}
                    </p>
                  </div>
                </div>

                {/* Center - Circular Image */}
                <div className="relative hidden lg:block">
                  <div className="relative h-[600px] w-[450px]">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-[50%] border-4 border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.5)]" />

                    {/* Image */}
                    <div className="absolute inset-2 overflow-hidden rounded-[50%]">
                      <div className="relative h-full w-full">
                        <Image
                          src={ForegroundImage || '/placeholder.svg'}
                          alt="Featured"
                          className="object-cover object-center"
                          fill={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Circular Image - Bottom */}
              <div className="absolute bottom-8 left-1/2 block -translate-x-1/2 lg:hidden">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 rounded-full border-4 border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.5)]" />
                  <div className="absolute inset-2 overflow-hidden rounded-full">
                    <div className="relative h-full w-full">
                      <Image
                        src={ForegroundImage || '/placeholder.svg'}
                        alt="Featured"
                        fill={true}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
