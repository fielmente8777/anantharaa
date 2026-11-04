"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useWebContext } from "@/context-api/WebContext";

import {
  mahaDeepamPopup as data,
  type NightId,
  type PetalConfig,
} from "./mahaDeepamData";
import {
  DeepamChatIcon,
  DeepamClockIcon,
  DeepamCloseIcon,
  DeepamDiyaIcon,
  DeepamMinusIcon,
  DeepamPlusIcon,
} from "@/utils/deepamIcons";

const DAY = 24 * 60 * 60 * 1000;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-deepam-gold";
const labelCls =
  "text-[11px] font-semibold uppercase tracking-[0.16em] text-deepam-muted";

const Petals = ({
  items,
  className,
}: {
  items: PetalConfig[];
  className: string;
}) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 ${className}`}
  >
    {items.map((p, i) => (
      <span
        key={i}
        className="deepam-petal"
        style={{
          left: p.left,
          width: p.width,
          height: p.height,
          background: p.color,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
        }}
      />
    ))}
  </div>
);

const MahaDeepamPopup = () => {
  const pathName = usePathname();
  const { isOpenDeepamPopup, setIsOpenDeepamPopup } = useWebContext();

  const [night, setNight] = useState<NightId>("both");
  const [guests, setGuests] = useState<number>(data.guests.default);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartY = useRef<number | null>(null);

  const isLanding = pathName === "/";
  // const isLanding = pathName === "/" || pathName === "/sonagiriserene/";

  useEffect(() => {
    const now = Date.now();
    const start = new Date(data.eventStart).getTime();
    const end = new Date(data.eventEnd).getTime();
    setExpired(now >= end);
    setDaysLeft(Math.ceil((start - now) / DAY));
  }, []);

  // useEffect(() => {
  //   if (!isLanding || expired) return;

  //   setIsOpenDeepamPopup(true);
  // }, [isLanding, expired, setIsOpenDeepamPopup]);

  useEffect(() => {
    if (!isLanding || expired) return;

    const timer = setTimeout(() => {
      setIsOpenDeepamPopup(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isLanding, expired, setIsOpenDeepamPopup]);

  const close = useCallback(() => {
    setIsOpenDeepamPopup(false);
  }, [setIsOpenDeepamPopup]);

  useEffect(() => {
    if (!isOpenDeepamPopup) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpenDeepamPopup, close]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    if (e.changedTouches[0].clientY - touchStartY.current > 70) close();
    touchStartY.current = null;
  };

  const whatsappHref = useMemo(() => {
    const selected = data.nights.find((n) => n.id === night)!;
    const text = data.whatsappMessage(selected.full, guests);
    return `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [night, guests]);

  if (expired || pathName === "/thank-you/") return null;

  const countdownLabel =
    daysLeft === null
      ? ""
      : daysLeft > 1
        ? `${daysLeft} days to the Deepam`
        : daysLeft === 1
          ? "1 day to the Deepam"
          : "The Deepam is here";

  return (
    <>
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Maha Deepam room booking"
        aria-hidden={!isOpenDeepamPopup}
        className={`fixed inset-0 z-[9999] flex items-end justify-center bg-p2/65 px-4 pb-3 backdrop-blur-[3px] transition-[opacity,visibility] duration-300 md:items-center md:bg-p2/70 md:p-6 md:pb-6 md:backdrop-blur-[4px] ${
          isOpenDeepamPopup
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={close}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`hide-scroll relative flex max-h-[88dvh] w-full max-w-md flex-col overflow-y-auto rounded-t-[22px] md:rounded-[18px] bg-deepam-night shadow-[0_-20px_60px_rgba(10,2,2,0.45)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] md:h-[600px] md:max-h-[90dvh] md:max-w-[940px] md:flex-row md:overflow-hidden md:rounded-[18px] md:shadow-[0_40px_100px_rgba(10,2,2,0.55)] ${
            isOpenDeepamPopup
              ? "translate-y-0 md:scale-100 md:opacity-100"
              : "translate-y-full md:translate-y-[18px] md:scale-[0.98] md:opacity-0"
          }`}
        >
          {/* close */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className={`absolute right-3 top-3 z-20 flex size-11 items-center justify-center rounded-full border border-deepam-gold/70 bg-deepam-night/85 text-deepam-gold shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition hover:bg-deepam-night active:scale-95 md:right-3.5 md:top-3.5 md:border-deepam-cream/20 md:bg-black/15 md:text-deepam-cream md:shadow-none md:hover:bg-black/30 ${focusRing}`}
          >
            <DeepamCloseIcon />
          </button>

          <div className="relative h-[204px] shrink-0 overflow-hidden bg-deepam-night md:h-auto md:w-[400px]">
            <Image
              src={data.imageMobile}
              alt="Annamalaiyar Temple gopuram lit with lamps for Karthigai Deepam"
              fill
              sizes="448px"
              className="object-cover object-[center_30%] md:hidden"
            />

            <Image
              src={data.image}
              alt="Annamalaiyar Temple gopuram lit with lamps for Karthigai Deepam"
              fill
              sizes="400px"
              className="hidden object-cover object-top md:block"
            />
            <div
              aria-hidden="true"
              className="deepam-hero-fade absolute inset-0"
            />

            <Petals
              items={data.petals.mobile}
              className="[--petal-drift:30px] [--petal-fall:230px] md:hidden"
            />
            <Petals
              items={data.petals.desktop}
              className="[--petal-drift:40px] [--petal-fall:640px] max-md:hidden"
            />

            <div
              className="absolute inset-x-0 top-0 z-10 flex justify-center pb-6 pt-2 md:hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <span className="h-1 w-10 rounded-full bg-deepam-ivory/55" />
            </div>

            <div className="absolute inset-x-8 top-[30px] hidden flex-col gap-1.5 md:flex">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-deepam-gold">
                {data.mantra}
              </p>
              <p className="font-display text-[22px] font-semibold uppercase tracking-[0.06em] text-deepam-ivory">
                {data.place}
              </p>
            </div>

            <div className="absolute inset-x-5 bottom-3.5 flex flex-col gap-1.5 md:hidden">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-deepam-gold">
                {data.mantra} · {data.place}
              </p>
              <div className="flex items-center justify-between gap-2.5">
                <h2 className="font-display text-[33px] font-semibold leading-[1.05] tracking-[0.01em] text-deepam-gold">
                  {data.title}
                </h2>
                <div className="flex shrink-0 flex-col items-center rounded-md bg-deepam-gold px-3 pb-1.5 pt-1.5 text-deepam-ink-strong">
                  <span className="font-sans text-[26px] font-extrabold leading-none tabular-nums">
                    {data.dateBig}
                  </span>
                  <span className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.18em]">
                    {data.dateSmallMobile}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-6 hidden flex-col gap-3 md:flex">
              {countdownLabel && (
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-deepam-gold/45 bg-deepam-night/60 py-[7px] pl-2.5 pr-[13px] text-xs font-semibold tracking-[0.03em] text-deepam-ivory">
                  <DeepamDiyaIcon size={18} className="text-deepam-gold" />
                  <span>{countdownLabel}</span>
                </span>
              )}
              <figure className="flex items-center gap-3 rounded-[14px] border border-deepam-cream/15 bg-deepam-night/75 py-2 pl-2 pr-3.5">
                <div className="relative h-[68px] w-[104px] shrink-0 overflow-hidden rounded-[9px]">
                  <Image
                    src={data.thumb.image}
                    alt="The temple gopuram seen through a room window at Anantharaa"
                    fill
                    sizes="104px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-col gap-1">
                  <span className="font-secondary text-xl font-medium italic leading-[1.1] text-deepam-ivory">
                    {data.thumb.title}
                  </span>
                  <span className="text-xs text-deepam-gold-soft">
                    {data.thumb.caption}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="hide-scroll relative flex min-w-0 flex-1 flex-col md:overflow-y-auto">
            {/* story */}
            <div className="px-5 pb-[18px] pt-3.5 md:px-12 md:pb-6 md:pt-[38px]">
              <p className="mb-2.5 flex items-center gap-[9px] text-[11px] font-semibold uppercase tracking-[0.14em] text-deepam-sand md:mb-3.5 md:gap-2.5 md:text-xs md:tracking-[0.16em]">
                <span
                  aria-hidden="true"
                  className="deepam-live-dot block size-[7px] shrink-0 rounded-full bg-deepam-ember md:size-2"
                />
                <span className="md:hidden">{data.eyebrowMobile}</span>
                <span className="max-md:hidden">{data.eyebrow}</span>
              </p>

              {/* desktop title + date */}
              <h2 className="hidden font-display text-[48px] font-semibold leading-[1.05] tracking-[0.02em] text-deepam-gold md:block">
                {data.title}
              </h2>
              <div className="mt-3.5 hidden w-fit items-baseline gap-2.5 rounded-md bg-deepam-gold px-3.5 pb-[7px] pt-1.5 text-deepam-ink-strong md:inline-flex">
                <span className="font-sans text-[32px] font-extrabold leading-none tabular-nums">
                  {data.dateBig}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  {data.dateSmall}
                </span>
              </div>

              <p className="max-w-[430px] font-secondary text-[19px] font-medium leading-[1.3] text-deepam-cream md:mt-[18px] md:text-[22px]">
                {data.description}
              </p>

              <ul className="mt-4 grid grid-cols-3 gap-3 md:mt-5 md:gap-4">
                {data.features.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex flex-col gap-1.5 text-xs leading-[1.35] text-deepam-sand md:flex-row md:items-start md:gap-[9px] md:text-[13px]"
                  >
                    <Icon className="shrink-0 text-deepam-gold" />
                    <span className="whitespace-pre-line">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 border-t border-deepam-gold/20 bg-deepam-dark/80 px-5 pb-[22px] pt-4 md:mt-auto md:gap-3.5 md:px-12 md:pb-[26px] md:pt-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
                {/* nights */}
                <div className="flex min-w-0 flex-col gap-3 md:gap-[9px]">
                  <div className="flex items-center justify-between">
                    <span id="deepam-nights-label" className={labelCls}>
                      Your nights
                    </span>
                    <span className="inline-flex items-center gap-[5px] text-xs font-semibold text-deepam-amber md:hidden">
                      <DeepamClockIcon size={13} />
                      Limited rooms
                    </span>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="deepam-nights-label"
                    className="grid grid-cols-3 gap-2 md:flex"
                  >
                    {data.nights.map((n) => (
                      <button
                        key={n.id}
                        type="button"
                        aria-pressed={night === n.id}
                        onClick={() => setNight(n.id)}
                        className={`h-11 whitespace-nowrap rounded-[10px] border px-1.5 text-sm font-semibold transition-colors md:px-4 ${focusRing} ${
                          night === n.id
                            ? "border-deepam-cream bg-deepam-cream text-deepam-ink"
                            : "border-deepam-cream/30 bg-transparent text-deepam-cream hover:border-deepam-cream/60"
                        }`}
                      >
                        {n.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start md:gap-[9px]">
                  <span id="deepam-guests-label" className={labelCls}>
                    Guests
                  </span>
                  <div
                    role="group"
                    aria-labelledby="deepam-guests-label"
                    className="flex items-center rounded-[10px] border border-deepam-cream/30"
                  >
                    <button
                      type="button"
                      aria-label="Fewer guests"
                      disabled={guests <= data.guests.min}
                      onClick={() =>
                        setGuests((g) => Math.max(data.guests.min, g - 1))
                      }
                      className={`flex size-11 items-center justify-center rounded-[10px] text-deepam-cream disabled:opacity-30 ${focusRing}`}
                    >
                      <DeepamMinusIcon />
                    </button>
                    <span
                      aria-live="polite"
                      className="min-w-7 text-center text-base font-semibold text-deepam-cream"
                    >
                      {guests}
                    </span>
                    <button
                      type="button"
                      aria-label="More guests"
                      disabled={guests >= data.guests.max}
                      onClick={() =>
                        setGuests((g) => Math.min(data.guests.max, g + 1))
                      }
                      className={`flex size-11 items-center justify-center rounded-[10px] text-deepam-cream disabled:opacity-30 ${focusRing}`}
                    >
                      <DeepamPlusIcon />
                    </button>
                  </div>
                </div>
              </div>

              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className={`mt-0.5 flex h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-deepam-gold text-base font-bold text-deepam-ink-strong transition hover:brightness-105 active:brightness-95 md:mt-0 md:tracking-[0.01em] ${focusRing}`}
              >
                <DeepamChatIcon />
                Check availability on WhatsApp
              </Link>

              <div className="flex items-center justify-center gap-3 text-[13px] text-deepam-muted md:justify-between">
                <p>
                  <span className="md:hidden">Or call </span>
                  <span className="max-md:hidden">Prefer to call? </span>
                  {data.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && " · "}
                      <a
                        href={p.href}
                        className={`font-semibold text-deepam-cream underline transition-colors hover:text-deepam-gold ${focusRing}`}
                      >
                        {p.label}
                      </a>
                    </span>
                  ))}
                </p>
                <span className="inline-flex items-center gap-1.5 font-semibold text-deepam-amber max-md:hidden">
                  <DeepamClockIcon size={14} />
                  Limited rooms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REOPEN PILL (after the popup is closed) ================= */}
      {/* {showReopen && (
        <button
          type="button"
          onClick={() => setIsOpenDeepamPopup(true)}
          aria-label="Open Maha Deepam room booking"
          className={`deepam-pill-in fixed bottom-4 left-[76px] z-30 inline-flex h-[50px] items-center gap-2 rounded-full border border-deepam-gold/55 bg-deepam pl-3 pr-1.5 text-[13px] font-semibold text-deepam-cream shadow-[0_12px_30px_rgba(30,6,6,0.35)] md:bottom-[22px] md:left-0 md:right-0 md:mx-auto md:h-[54px] md:w-fit md:gap-3 md:pl-4 md:pr-2 md:text-sm md:shadow-[0_16px_40px_rgba(30,6,6,0.35)] ${focusRing}`}
        >
          <DeepamDiyaIcon size={18} className="text-deepam-gold md:size-5" />
          <span className="md:hidden">{data.reopen.label}</span>
          <span className="max-md:hidden">{data.reopen.labelDesktop}</span>
          <span className="inline-flex h-[38px] items-center rounded-full bg-deepam-gold px-3.5 font-bold text-deepam-ink-strong md:px-4">
            {data.reopen.cta}
          </span>
        </button>
      )} */}
    </>
  );
};

export default MahaDeepamPopup;
