import React, { useEffect, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import faviconImage from "../favicon.png"
import trainImage from "../images__5_-removebg-preview.png"
import td0OverviewImage from "../IMG_2577.jpeg"
import td0UniformImage from "../IMG_2578.jpeg"
import week1FlyerImage from "../Week 1 F26 Morale Newsletter 2.png"
import "@flaticon/flaticon-uicons/css/regular/rounded.css"
import "./styles.css"

const navItems = [
  { id: "td0", label: "TD-0", icon: "clipboard-list", hidden: true },
  { id: "weekly", label: "Weekly", icon: "train-side", hidden: false },
  { id: "academics", label: "Academics", icon: "graduation-cap", hidden: false },
  { id: "drill", label: "Drill", icon: "shield", hidden: false },
  { id: "uniforms", label: "Uniforms", icon: "shirt", hidden: false },
  { id: "checklists", label: "Checklists", icon: "checkbox", hidden: false },
  { id: "resources", label: "Resources", icon: "folder-open", hidden: true },
  { id: "fitness", label: "Fitness", icon: "dumbbell-fitness", hidden: false },
  { id: "dodmerb", label: "DODMERB", icon: "stethoscope", hidden: false },
  { id: "calendar", label: "Calendar", icon: "calendar-days", hidden: false }
]

const visibleNavItems = navItems.filter((item) => !item.hidden)
const defaultTab = visibleNavItems[0]?.id ?? "td0"

const weeklyObjectives = [
  "Uniforms and Grooming Standards must be met. Be checking over your wingmen at all times. AS200s especially, you know what the standards are so lets set the bar high!",
  "Academics and Drill: On your own, you should be honing in on key academics and drill concepts that we've discussed. Make sure you're showing up prepared and giving your best each day you show up. Flight commanders should be focusing primarily on concepts that we can't practice outside of group settings during flight meetings.",
  "Morale: Don't let it fade! This is where we'll truly be tested as a class. Its easy to keep motivation and spirits high when everyone has plenty of time and enjoys the activities we're doing, but when things get hard there's a tendency for that motivation to fade. These next days, weeks, and months will be hard. One of the primary ways we'll get through it is by motivating each other to embrace discomfort and keep working even when we are exhausted. Be the wingman to your peers that you want for yourself!"
]

const td0UniformPdf = "https://purdue0.sharepoint.com/:u:/s/AFROTCDetachment220-WingStaff/IQB768Maj6cATYNZWyVkszhoAYXmmE6mi2zpXaeRb3ZABdY?e=Hv1yEI"
const showDetachmentUniformSop = false
const showTd0Checklist = false

const td0Flyers = [
  {
    title: "TD-0 Overview",
    icon: "clipboard-list",
    src: td0OverviewImage
  },
  {
    title: "Uniform of the Day",
    icon: "shirt",
    src: td0UniformImage
  }
]

const academicBlocks = [
  {
    title: "Study Material",
    items: [
      { label: "Code of Conduct", href: "https://knowt.com/flashcards/41c96fba-71b4-4cba-bc14-c6e2ec32c4bf"},
      { label: "Chain of Command", href: "https://knowt.com/flashcards/8787a94f-59a3-474f-bb54-8635b0911392" },
      { label: "Majcoms and Fieldcoms", href: "https://knowt.com/flashcards/55f18cd8-8aaf-421b-bbcc-135c58e13776" },
      { label: "Airmans creed", href: "https://knowt.com/flashcards/444475a0-2dc2-4801-849b-88ad6f1550ca" },
      { label: "All other study materials", href: "https://knowt.com/folder/7d426136-8cd7-4511-a816-13184dac07cc" }
    ]
  },
  {
    title: "Weekly PDF's",
    items: [
      { label: "SI PPTX", href: "#" },
      { label: "LLAB PPTX", href: "#" },
      { label: "Quiz Answers PPTX", href: "#" },
      { label: "Archived PDFs from previous weeks", href: "#" }
    ]
  },
  {
    title: "Topics for the week",
    items: [
      { label: "4.1 - Recall proper DAF customs and courtesies expected of cadets to peers, superiors, and subordinates." },
      { label: "4.2 - Practice proper forms of saluting and recognize who and when to salute." },
      { label: "4.3 - Practice reporting in/reporting out procedures(BC only)" },
      { label: "4.4 - Utilize the proper courtesies displayed during informal and formal activities." },
      { label: "4.5 - Recall procedures for proper display of the flag" },
      { label: "4.6 - Describe proper customs and courtesies for outdoor ceremonies"},
      { label: "4.7 - Describe proper customs and courtesies for indoor ceremonies" },
      { label: "4.8 - Paraphrase proper procedures for folding the flag" },
      { label: "4.9 - Describe proper procedures for retreat" },
      { label: "4.10 - Describe proper procedures for reveille" },
      { label: "6.1 - List when it is inappropriate to wear your uniform" },
      { label: "6.2 - Demonstrate proper DAF grooming standards." },
      { label: "6.3 - Demonstrate proper AFROTC and DAF dress and appearance standards." },
      { label: "7.1 - Demonstrate drill fundamentals" },
      { label: "7.2 - Demonstrate individual drill instruction" },
      { label: "7.3 - Demonstrate basic drill of the flight" },
      { label: "7.6 - Demonstrate proper guidon positioning, commands, and movements. (BCL ONLY)" },
    ]
  }
]

const drillResources = [
  { title: "FDE Procedures", detail: "", href: "https://www.youtube.com/watch?v=3hwmk0EjjTU" },
  { title: "ORI Procedures", detail: "", href: "https://www.youtube.com/watch?v=igTnT-wqrZ0" },
  { title: "Drill movements", detail: "", href: "https://www.youtube.com/watch?v=S4QR9E_t7nA&list=PL8PeSdzrOYbnXoBemcwCwKpyx0mHeQPr9" }
]

const td0ChecklistItems = [
  "Printed or downloaded TD-0 PDFs",
  "Pens and note taking supplies",
  "Water bottle",
  "Backpack",
  "Required uniform items",
  "Phone alarms turned off",
  "Know arrival time and location",
  "Any detachment-specific items announced for TD-0"
]

const uniformPdf = "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2903/dafi36-2903.pdf"
const det220SopsUrl = "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/General/F26%20SOPs%20-%20CAO%2021%20Aug.pdf?TeamsCID=be777d09-6c25-40da-b90b-a77c6971f10e"
const weeklyOpordUrl = "https://purdue0.sharepoint.com/:b:/r/sites/AFROTCDetachment220/Shared%20Documents/General/F26%20OPORD%202.pdf?d=w382fdd0f11d84459add8b2f3f381712b&csf=1&web=1&e=ikldxw"
const cadetShoutoutFormUrl = "https://forms.cloud.microsoft/r/L2RpnjAX5R"

const checklistItems = [
  "Civilian PTG's",
  "Conservative Watch",
  "Backpack(make sure it is in the correct color)",
  "Clean Shaven(for men)",
  "Hair within regulations",
  "Tucked in shoe laces",
  "If applicable: tuck in necklaces/remove them",
  "Stando'd water bottle",
]

const resourceLibrary = [
  {
    title: "SOPs",
    detail: "Detachment standards, recurring procedures, and cadet expectations."
  },
  {
    title: "OPLANs",
    detail: "Event plans, weekly execution notes, and LLAB operations references.",
    href: "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/General/02.%20Policies/Operations/S26%20Detachment%20220%20OPLAN%20-%20CAO%2019%20JAN%202026.pdf?CT=1778999021978&OR=ItemsView&wdOrigin=TEAMSFILE.FILEBROWSER.DOCUMENTLIBRARY"
  },
  {
    title: "Forms",
    detail: "Common PDFs, templates, routing documents, and sign-off sheets."
  },
  {
    title: "ORG Chart",
    detail: "Cadre, staff, flight leadership, and support channels."
  }
]

const outlookCalendarUrl = "https://outlook.office365.com/calendar/published/b02bb9e20ae947ababa2ba82084ccbbf@purdue.edu/f107ebc640be40e4b2902ebe442c1f8711563787882679947947/calendar.html"
const outlookCalendarIcsUrl = "https://outlook.office365.com/owa/calendar/b02bb9e20ae947ababa2ba82084ccbbf@purdue.edu/f107ebc640be40e4b2902ebe442c1f8711563787882679947947/calendar.ics"

const dodmerbSteps = [
  {
    title: "Create account",
    detail: "As you register in WINGS, you will get a email with the domain of health.mil. This email will include all the instructions needed to register for DMACS and create your account."
  },
  {
    title: "Medical Questionnaire",
    detail: "You will have to fill out a medical history questionnaire. Fill it out as promptly as possible."
  },
  {
    title: "Schedule Appointments",
    detail: "Schedule your appointments as soon as possible. The sooner you schedule, the sooner you will be cleared."
  },
  {
    title: "Track remedials",
    detail: "If required, you may have to complete remedial appointments. Track these and complete them as soon as possible."
  }
]

const runScores = {
  male: [
    ["13:25", 50], ["13:44", 49.5], ["14:03", 49], ["14:22", 48], ["14:41", 47],
    ["15:00", 46], ["15:19", 45], ["15:38", 44], ["15:57", 43], ["16:16", 42],
    ["16:35", 41], ["16:54", 40], ["17:13", 39], ["17:32", 38.5], ["17:51", 38],
    ["18:10", 37.5], ["18:29", 37], ["18:48", 36.5], ["19:07", 36], ["19:36", 35.5],
    ["19:45", 35]
  ],
  female: [
    ["15:30", 50], ["16:00", 49.5], ["16:29", 49], ["16:59", 48], ["17:29", 47],
    ["17:58", 46], ["18:28", 45], ["18:58", 44], ["19:27", 43], ["19:57", 42],
    ["20:27", 41], ["20:56", 40], ["21:26", 39], ["21:55", 38.5], ["22:25", 38],
    ["22:55", 37.5], ["23:24", 37], ["23:54", 36.5], ["24:24", 36], ["24:53", 35.5],
    ["25:23", 35]
  ]
}

const hrPushupMax = { male: 52, female: 42 }
const situpMax = { male: 58, female: 54 }

const whtrScores = [
  [0.49, 20, "Low Risk"],
  [0.5, 19, "Moderate Risk"],
  [0.51, 18, "Moderate Risk"],
  [0.52, 17, "Moderate Risk"],
  [0.53, 16, "Moderate Risk"],
  [0.54, 15, "Moderate Risk"],
  [0.55, 12.5, "High Risk"],
  [0.56, 10, "High Risk"],
  [0.57, 7.5, "High Risk"],
  [0.58, 5, "High Risk"],
  [0.59, 2.5, "High Risk"],
  [0.6, 0, "High Risk"]
]

function youtubeEmbedUrl(href) {
  try {
    const url = new URL(href)
    const video = url.searchParams.get("v")
    const list = url.searchParams.get("list")
    if (video) return `https://www.youtube.com/embed/${video}`
    if (list) return `https://www.youtube.com/embed/videoseries?list=${list}`
    const id = url.pathname.split("/").filter(Boolean).pop()
    return id && id !== "playlist" ? `https://www.youtube.com/embed/${id}` : null
  } catch {
    return null
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function splitTopicLabel(label) {
  const match = String(label).match(/^(\d+\.\d+)\s*[-–—]\s*(.*)$/)
  return match ? { code: match[1], text: match[2] } : { code: null, text: label }
}

function timeToSeconds(value) {
  const [minutes, seconds] = value.split(":").map((part) => Number(part))
  if (!Number.isFinite(minutes) || !Number.isFinite(seconds)) return null
  return minutes * 60 + seconds
}

function scoreByTime(value, table) {
  const seconds = timeToSeconds(value)
  if (seconds === null) return 0
  const match = table.find(([time]) => seconds <= timeToSeconds(time))
  return match ? match[1] : 0
}

function scoreByLinearReps(value, maxReps) {
  const reps = Number(value)
  if (!Number.isFinite(reps) || reps < 0) return 0
  const minReps = maxReps - 25
  if (reps < minReps) return 0
  if (reps >= maxReps) return 15
  return 15 - (maxReps - reps) * 0.5
}

function scoreByWhtr(waist, height) {
  const waistValue = Number(waist)
  const heightValue = Number(height)
  if (!Number.isFinite(waistValue) || !Number.isFinite(heightValue) || heightValue <= 0) {
    return { ratio: null, score: 0, category: "Enter height and waist" }
  }
  const ratio = waistValue / heightValue
  const roundedRatio = Math.round(ratio * 100) / 100
  const match = whtrScores.find(([limit]) => roundedRatio <= limit)
  return {
    ratio,
    score: match ? match[1] : 0,
    category: match ? match[2] : "High Risk"
  }
}

function FlaticonIcon({ name, size = 20, className = "" }) {
  return (
    <i
      className={classNames(`fi fi-rr-${name}`, "inline-flex items-center justify-center leading-none", className)}
      style={{ fontSize: size, width: size, height: size }}
      aria-hidden="true"
    />
  )
}

function App() {
  const [active, setActive] = useState(defaultTab)
  const [menuOpen, setMenuOpen] = useState(false)
  const current = useMemo(() => visibleNavItems.find((item) => item.id === active), [active])

  const goTo = (id) => {
    setActive(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2e7d2] text-parchment">
      <div className="fixed inset-0 -z-10 bg-[#f2e7d2]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-45 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent_38%)]" />
      <Header active={active} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <NavRail active={active} goTo={goTo} />
        </aside>
        <div className="min-w-0">
          <Hero active={current} />
          <div className="mt-6">
            {active === "td0" && <Td0Page />}
            {active === "weekly" && <WeeklyPage />}
            {active === "academics" && <AcademicsPage />}
            {active === "drill" && <DrillPage />}
            {active === "uniforms" && <UniformPage />}
            {active === "checklists" && <ChecklistPage />}
            {active === "resources" && <ResourcesPage />}
            {active === "fitness" && <FitnessPage />}
            {active === "dodmerb" && <DodmerbPage />}
            {active === "calendar" && <CalendarPage />}
          </div>
        </div>
      </section>
      <MobileNav active={active} goTo={goTo} open={menuOpen} />
    </main>
  )
}

function Header({ active, goTo, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-brass/20 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => goTo(defaultTab)} className="flex items-center gap-3 text-left">
          <span className="grid size-11 place-items-center overflow-hidden rounded bg-transparent p-0.5">
            <img src={faviconImage} alt="" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block text-base font-black uppercase tracking-[0.16em] text-parchment sm:text-lg">GMC Resource Page</span>
            <span className="block text-xs uppercase tracking-[0.2em] text-brass">Integrity · Service · Excellence</span>
          </span>
        </button>
        <div className="hidden items-center gap-2 lg:flex">
          {visibleNavItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={classNames(
                "rounded px-3 py-2 text-sm font-semibold transition",
                active === item.id ? "bg-obsidian text-ink" : "text-parchment/70 hover:bg-field hover:text-parchment"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-11 place-items-center rounded border border-brass/30 bg-field text-parchment lg:hidden"
          aria-label="Toggle navigation"
        >
          <FlaticonIcon name={menuOpen ? "cross-small" : "menu-burger"} size={22} />
        </button>
      </div>
    </header>
  )
}

function NavRail({ active, goTo }) {
  return (
    <nav className="sticky top-24 space-y-2 rounded border border-brass/20 bg-ink/95 p-3 shadow-gold">
      {visibleNavItems.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className={classNames(
              "group flex w-full items-center justify-between rounded px-3 py-3 text-left transition",
              active === item.id ? "bg-obsidian text-ink" : "text-parchment/72 hover:bg-field hover:text-parchment"
            )}
          >
            <span className="flex items-center gap-3 text-sm font-bold">
              <FlaticonIcon name={item.icon} size={18} />
              {item.label}
            </span>
            <FlaticonIcon name="angle-small-right" size={16} className={active === item.id ? "opacity-100" : "opacity-0 transition group-hover:opacity-100"} />
          </button>
        )
      })}
    </nav>
  )
}

function MobileNav({ active, goTo, open }) {
  if (!open) return null
  return (
    <div className="fixed inset-x-3 top-20 z-40 rounded border border-brass/25 bg-ink p-3 shadow-gold lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        {visibleNavItems.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={classNames(
                "flex items-center gap-2 rounded px-3 py-3 text-sm font-bold",
                active === item.id ? "bg-obsidian text-ink" : "bg-field text-parchment/78"
              )}
            >
              <FlaticonIcon name={item.icon} size={17} />
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Hero({ active }) {
  return (
    <section className="relative overflow-hidden rounded border border-brass/20 bg-ink/95 p-6 shadow-gold sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-bullion" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_260px] lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded border border-brass/25 bg-field px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-obsidian">
            Detachment 220 Boilermakers
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-parchment sm:text-6xl">
            GMC Resource Page
          </h1>
        </div>
        <div className="relative mx-auto grid aspect-square w-full max-w-[220px] place-items-center overflow-hidden bg-transparent">
          <img src={trainImage} alt="Boilermaker train" className="h-full w-full object-contain p-0" />
        </div>
      </div>
    </section>
  )
}

function Panel({ title, icon, children, action }) {
  return (
    <section className="rounded border border-brass/18 bg-ink/95 p-5 shadow-gold">
      <div className={`${children ? "mb-4" : ""} flex flex-wrap items-center justify-between gap-3`}>
        <h2 className="flex items-center gap-3 text-xl font-black text-parchment">
          {icon && <FlaticonIcon name={icon} size={22} />}
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  )
}

function Td0Page() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {td0Flyers.map((flyer) => (
          <Td0FlyerCard key={flyer.title} flyer={flyer} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel
          title="Uniform Items"
          icon="shirt"
          action={
            <a
              href="https://purdue0-my.sharepoint.com/:b:/g/personal/oabillei_purdue_edu/IQCscFfR0VjgQoIrBH7l0Z67AWbrRn7mdatWKm_Vn6ODbm8?e=hvLAk0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
            >
              <FlaticonIcon name="file" size={16} />
              Open PDF
            </a>
          }
        />
        <Panel
          title="F26 TD-0 OPORD"
          icon="file"
          action={
            <a
              href="https://purdue0-my.sharepoint.com/:b:/g/personal/oabillei_purdue_edu/IQAmEnk7kzvTSIHNBu47EFckAZjAlrZb2NiYRmniFxkf4h0?e=vkLYPT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
            >
              <FlaticonIcon name="file" size={16} />
              Open PDF
            </a>
          }
        />
      </div>
      {showDetachmentUniformSop && (
        <Panel
          title="Detachment Uniform SOP"
          icon="shirt"
          action={
            <a
              href={td0UniformPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
            >
              <FlaticonIcon name="file" size={16} />
              Open PDF
            </a>
          }
        />
      )}
      {showTd0Checklist && (
        <Panel
          title="TD-0 Checklist"
          icon="checkbox"
          action={
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]">
              <FlaticonIcon name="print" size={16} />
              Print
            </button>
          }
        >
          <ChecklistGrid items={td0ChecklistItems} />
        </Panel>
      )}
    </div>
  )
}

function Td0FlyerCard({ flyer }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setExpanded(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [expanded])

  return (
    <Panel
      title={flyer.title}
      icon={flyer.icon}
      action={
        <a
          href={flyer.src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
        >
          <FlaticonIcon name="file" size={16} />
          Open
        </a>
      }
    >
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="group relative block w-full overflow-hidden rounded border border-brass/20 bg-ink text-left transition hover:border-bullion/55 hover:shadow-gold"
        aria-label={`Expand ${flyer.title}`}
      >
        <img src={flyer.src} alt={flyer.title} className="w-full" />
        <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="mb-6 inline-flex translate-y-3 items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian shadow-gold transition duration-300 group-hover:translate-y-0">
            <FlaticonIcon name="expand" size={16} />
            Click to expand
          </span>
        </span>
      </button>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={flyer.title}
        >
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />
          <div
            className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded border border-brass/30 bg-ink shadow-gold animate-zoomIn"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-brass/20 bg-field px-5 py-3">
              <h3 className="flex items-center gap-2 text-lg font-black text-parchment">
                {flyer.icon && <FlaticonIcon name={flyer.icon} size={18} className="text-brass" />}
                {flyer.title}
              </h3>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="grid size-9 place-items-center rounded border border-brass/25 bg-ink text-parchment transition hover:border-bullion/55 hover:text-bullion"
                aria-label="Close"
              >
                <FlaticonIcon name="cross-small" size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-ink">
              <img src={flyer.src} alt={flyer.title} className="mx-auto w-full" />
            </div>
          </div>
        </div>
      )}
    </Panel>
  )
}

function WeeklyPage() {
  return (
    <div className="grid gap-6">
      <Panel
        title="Weekly OPORD"
        icon="file"
        action={
          <a
            href={weeklyOpordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="file" size={16} />
            Open PDF
          </a>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
        <Td0FlyerCard
          flyer={{
            title: "Week 1",
            src: week1FlyerImage
          }}
        />
        <div className="grid gap-6">
          <Panel title="Goals" icon="target">
            <div className="grid gap-3">
              {weeklyObjectives.map((objective, index) => (
                <div key={objective} className="flex items-start gap-3 rounded border border-brass/15 bg-field/72 px-3 py-2.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded bg-bullion text-sm font-black text-obsidian">{index + 1}</span>
                  <span className="text-sm font-bold leading-5 text-parchment/82">{objective}</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel
            title="Cadet Shoutout Form"
            action={
              <a
                href={cadetShoutoutFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
              >
                Open Form
              </a>
            }
          />
        </div>
      </div>
    </div>
  )
}

function AcademicsPage() {
  const topicBlock = academicBlocks.find((block) => block.title === "Topics for the week")
  const linkBlocks = academicBlocks.filter((block) => block.title !== "Topics for the week")

  return (
    <Panel title="Academics Study Page" icon="graduation-cap">
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          {linkBlocks.map((block) => (
            <div key={block.title} className="rounded border border-brass/15 bg-field/72 p-4">
              <h3 className="text-lg font-black text-parchment">{block.title}</h3>
              <div className="mt-4 space-y-2">
                {block.items.map((item, index) => {
                  const label = typeof item === "string" ? item : item.label
                  const href = typeof item === "string" ? undefined : item.href
                  if (href) {
                    return (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-bullion underline decoration-brass/40 underline-offset-4 transition hover:text-parchment hover:decoration-bullion"
                      >
                        <FlaticonIcon name="book-open-cover" size={15} className="text-brass" />
                        {label}
                      </a>
                    )
                  }
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-parchment/74">
                      <FlaticonIcon name="book-open-cover" size={15} className="text-brass" />
                      {label}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        {topicBlock && (
          <div className="rounded border border-brass/15 bg-field/72 p-4">
            <h3 className="text-lg font-black text-parchment">{topicBlock.title}</h3>
            <div className="mt-3 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
              {topicBlock.items.map((item, index) => {
                const label = typeof item === "string" ? item : item.label
                const { code, text } = splitTopicLabel(label)
                return (
                  <div key={index} className="flex items-start gap-2 text-[13px] leading-snug text-parchment/74">
                    {code ? (
                      <span className="mt-px shrink-0 rounded bg-bullion/18 px-1.5 py-0.5 text-[11px] font-black leading-none text-black">
                        {code}
                      </span>
                    ) : null}
                    <span>{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Panel>
  )
}

function DrillPage() {
  return (
    <Panel title="Drill & Procedures" icon="shield">
      <div className="grid gap-4 md:grid-cols-3">
        {drillResources.map((resource) => {
          const embed = youtubeEmbedUrl(resource.href)
          if (embed) {
            return <DrillVideoCard key={resource.title} resource={resource} embed={embed} />
          }
          return (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded border border-brass/15 bg-field/72 p-5 transition hover:border-bullion/45 hover:bg-[#e9dcc0] hover:shadow-gold"
            >
              <FlaticonIcon name="shield" className="mb-5 text-brass" size={30} />
              <h3 className="text-lg font-black text-parchment">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-parchment/68">{resource.detail}</p>
            </a>
          )
        })}
      </div>
    </Panel>
  )
}

function DrillVideoCard({ resource, embed }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setExpanded(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [expanded])

  return (
    <div className="overflow-hidden rounded border border-brass/15 bg-field/72">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <h3 className="text-lg font-black text-parchment">{resource.title}</h3>
        <a
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center rounded bg-bullion px-3 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
        >
          Open
        </a>
      </div>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="group relative block aspect-video w-full overflow-hidden bg-ink text-left transition hover:border-bullion/55"
        aria-label={`Expand ${resource.title}`}
      >
        <iframe
          src={embed}
          title={resource.title}
          className="pointer-events-none h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="mb-4 inline-flex translate-y-3 items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian shadow-gold transition duration-300 group-hover:translate-y-0">
            <FlaticonIcon name="expand" size={16} />
            Click to expand
          </span>
        </span>
      </button>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={resource.title}
        >
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />
          <div
            className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded border border-brass/30 bg-ink shadow-gold animate-zoomIn"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-brass/20 bg-field px-5 py-3">
              <h3 className="flex items-center gap-2 text-lg font-black text-parchment">
                <FlaticonIcon name="shield" size={18} className="text-brass" />
                {resource.title}
              </h3>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="grid size-9 place-items-center rounded border border-brass/25 bg-ink text-parchment transition hover:border-bullion/55 hover:text-bullion"
                aria-label="Close"
              >
                <FlaticonIcon name="cross-small" size={18} />
              </button>
            </div>
            <div className="aspect-video w-full bg-ink">
              <iframe
                src={`${embed}${embed.includes("?") ? "&" : "?"}autoplay=1`}
                title={`${resource.title} expanded`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function UniformPage() {
  return (
    <div className="grid gap-6">
      <Panel
        title="Det 220 SOP's"
        icon="file"
        action={
          <a
            href={det220SopsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="file" size={16} />
            Open PDF
          </a>
        }
      />
      <UniformGuide title="DAFI 36-2903" pdf={uniformPdf} pdfVar="uniformPdf" />
    </div>
  )
}

function UniformGuide({ title, pdf, pdfVar }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setExpanded(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [expanded])

  return (
    <Panel
      title={title}
      icon="shirt"
      action={
        pdf && (
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="file" size={16} />
            Open PDF
          </a>
        )
      }
    >
      <div className="rounded border border-brass/15 bg-field/72 p-5">
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group relative block h-[520px] min-h-[420px] w-full overflow-hidden rounded border border-brass/25 bg-ink text-left transition duration-300 hover:border-bullion/55 hover:shadow-gold"
          aria-label={`Expand ${title} PDF`}
        >
          {pdf ? (
            <iframe
              src={pdf}
              title={title}
              className="pointer-events-none h-full w-full"
            />
          ) : (
            <span className="grid h-full w-full place-items-center text-center text-sm text-parchment/45">
              <span>
                <FlaticonIcon name="file" size={40} className="mx-auto mb-3 text-brass" />
                Add your PDF URL to <span className="font-bold text-parchment/70">{pdfVar}</span>
              </span>
            </span>
          )}
          <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="mb-6 inline-flex translate-y-3 items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian shadow-gold transition duration-300 group-hover:translate-y-0">
              <FlaticonIcon name="expand" size={16} />
              Click to expand
            </span>
          </span>
        </button>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />
          <div
            className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded border border-brass/30 bg-ink shadow-gold animate-zoomIn"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-brass/20 bg-field px-5 py-3">
              <h3 className="flex items-center gap-2 text-lg font-black text-parchment">
                <FlaticonIcon name="shirt" size={18} className="text-brass" />
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="grid size-9 place-items-center rounded border border-brass/25 bg-ink text-parchment transition hover:border-bullion/55 hover:text-bullion"
                aria-label="Close"
              >
                <FlaticonIcon name="cross-small" size={18} />
              </button>
            </div>
            {pdf ? (
              <iframe
                src={pdf}
                title={`${title} expanded`}
                className="h-full w-full flex-1 bg-ink"
              />
            ) : (
              <div className="grid flex-1 place-items-center p-8 text-center text-sm text-parchment/55">
                <span>
                  <FlaticonIcon name="file" size={48} className="mx-auto mb-4 text-brass" />
                  Set the <span className="font-bold text-parchment/75">{pdfVar}</span> URL to display your PDF here.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </Panel>
  )
}

function ChecklistPage() {
  return (
    <Panel
      title="Checklist for 8/31"
      icon="checkbox"
      action={
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]">
          <FlaticonIcon name="print" size={16} />
          Print
        </button>
      }
    >
      <ChecklistGrid items={checklistItems} />
    </Panel>
  )
}

function ChecklistGrid({ items }) {
  return (
    <div className="print-area grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-3 rounded border border-brass/15 bg-field/72 p-4 text-sm font-bold text-parchment/82">
          <input type="checkbox" className="size-5 accent-bullion" />
          {item}
        </label>
      ))}
    </div>
  )
}

function ResourcesPage() {
  return (
    <Panel title="Resource Library" icon="folder-open">
      <div className="grid gap-4 md:grid-cols-2">
        {resourceLibrary.map(({ title, detail, href }) => {
          const ResourceTag = href ? "a" : "button"
          return (
          <ResourceTag
            key={title}
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            className="group flex items-center justify-between rounded border border-brass/15 bg-field/72 p-5 text-left transition hover:border-bullion/45 hover:bg-[#183d5e]"
          >
            <span>
              <span className="block text-lg font-black text-parchment">{title}</span>
              <span className="mt-2 block text-sm leading-6 text-parchment/68">{detail}</span>
            </span>
            <FlaticonIcon name="download" size={22} className="shrink-0 text-brass transition group-hover:translate-y-1" />
          </ResourceTag>
          )
        })}
      </div>
    </Panel>
  )
}

function FitnessPage() {
  const [gender, setGender] = useState("male")
  const [runTime, setRunTime] = useState("")
  const [pushups, setPushups] = useState("")
  const [situps, setSitups] = useState("")
  const [height, setHeight] = useState("")
  const [waist, setWaist] = useState("")
  const runScore = scoreByTime(runTime, runScores[gender])
  const pushupScore = scoreByLinearReps(pushups, hrPushupMax[gender])
  const situpScore = scoreByLinearReps(situps, situpMax[gender])
  const whtr = scoreByWhtr(waist, height)
  const total = runScore + pushupScore + situpScore + whtr.score
  const totalDisplay = total.toFixed(1).replace(".0", "")
  const passing = total >= 75
  const excellent = total >= 90

  return (
    <div className="grid gap-6">
      <Panel title="AFROTC PFA Calculator" icon="calculator">
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <div className="rounded border border-brass/15 bg-field/72 p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-brass">Gender</span>
                <select
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className="mt-2 w-full rounded border border-brass/25 bg-ink px-4 py-3 font-bold text-parchment outline-none transition focus:border-bullion"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <FitnessInput label="2-mile run" value={runTime} setValue={setRunTime} placeholder="13:25" helper="mins:secs" />
              <FitnessInput label="Hand-release push-ups" value={pushups} setValue={setPushups} placeholder="52" helper="2 minute total" type="number" />
              <FitnessInput label="Sit-ups" value={situps} setValue={setSitups} placeholder="58" helper="1 minute total" type="number" />
              <FitnessInput label="Height" value={height} setValue={setHeight} placeholder="70" helper="inches" type="number" />
              <FitnessInput label="Waist" value={waist} setValue={setWaist} placeholder="34" helper="inches" type="number" />
            </div>
          </div>
          <div className="rounded border border-brass/25 bg-field p-5 shadow-gold">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-bullion">Composite</p>
                <p className="mt-2 text-5xl font-black text-parchment">{totalDisplay}</p>
              </div>
              <div className={classNames(
                "rounded px-3 py-2 text-sm font-black uppercase tracking-[0.14em]",
                passing ? "bg-bullion text-obsidian" : "bg-red-500/20 text-red-100"
              )}>
                {excellent ? "Excellent" : passing ? "Passing" : "Needs 75"}
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <ScoreRow label="Run" value={runScore} max="50" />
              <ScoreRow label="HR Push-ups" value={pushupScore} max="15" />
              <ScoreRow label="Sit-ups" value={situpScore} max="15" />
              <ScoreRow label="Waist / Height" value={whtr.score} max="20" />
            </div>
            <div className="mt-5 rounded border border-brass/20 bg-ink p-4">
              <p className="text-sm font-bold text-parchment">WHtR: {whtr.ratio === null ? "--" : whtr.ratio.toFixed(2)}</p>
              <p className="mt-1 text-sm text-parchment/68">{whtr.category}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <FitnessNote title="Scoring" detail=" Run is 50 points, hand-release push-ups and sit-ups are 15 each, and waist-to-height ratio is 20." />
          <FitnessNote title="Waist-to-height" detail="The calculator divides waist by height, rounds to two decimals, then applies the chart points." />
          <FitnessNote title="Passing" detail="A composite score of 75 or higher is marked passing; 90 or higher is marked excellent." />
        </div>
      </Panel>
    </div>
  )
}

function FitnessInput({ label, value, setValue, placeholder, helper, type = "text" }) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-brass">{label}</span>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        type={type}
        min={type === "number" ? "0" : undefined}
        className="mt-2 w-full rounded border border-brass/25 bg-ink px-4 py-3 font-bold text-parchment outline-none transition placeholder:text-parchment/35 focus:border-bullion"
      />
      <span className="mt-1 block text-xs text-parchment/52">{helper}</span>
    </label>
  )
}

function ScoreRow({ label, value, max }) {
  const display = value.toFixed(1).replace(".0", "")
  return (
    <div className="flex items-center justify-between rounded border border-brass/20 bg-ink px-4 py-3">
      <span className="text-sm font-bold text-parchment/76">{label}</span>
      <span className="font-black text-parchment">{display} / {max}</span>
    </div>
  )
}

function FitnessNote({ title, detail }) {
  return (
    <div className="rounded border border-brass/15 bg-field/72 p-4">
      <h3 className="font-black text-parchment">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-parchment/68">{detail}</p>
    </div>
  )
}

function DodmerbPage() {
  return (
    <Panel title="DODMERB Help" icon="stethoscope">
      <div className="grid gap-4 md:grid-cols-4">
        {dodmerbSteps.map((step, index) => (
          <div key={step.title} className="rounded border border-brass/15 bg-field/72 p-5">
            <span className="text-3xl font-black text-brass">{index + 1}</span>
            <h3 className="mt-4 font-black text-parchment">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-parchment/68">{step.detail}</p>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function CalendarPage() {
  return (
    <div className="grid gap-6">
      <Panel
        title="Outlook ICS link(upload to your calendar to sync all AFROTC events)"
        action={
          <a
            href={outlookCalendarIcsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            Open link
          </a>
        }
      />
      <Panel
        title="Outlook Calendar"
        icon="calendar-days"
        action={
          <a
            href={outlookCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="calendar-days" size={16} />
            Open in new tab
          </a>
        }
      >
        <div className="overflow-hidden rounded border border-brass/20 bg-ink">
          <iframe
            src={outlookCalendarUrl}
            title="Detachment 220 Outlook calendar"
            className="h-[70vh] min-h-[520px] w-full bg-white"
          />
        </div>
      </Panel>
    </div>
  )
}

createRoot(document.getElementById("root")).render(<App />)


