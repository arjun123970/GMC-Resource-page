import React, { useEffect, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import faviconImage from "../favicon.png"
import trainImage from "../images__5_-removebg-preview.png"
import summerWorkoutPlanPdf from "../Summer Workout Plan F26 (1).pdf"
import "@flaticon/flaticon-uicons/css/regular/rounded.css"
import "./styles.css"

const navItems = [
  { id: "td0", label: "TD-0", icon: "clipboard-list" },
  { id: "weekly", label: "Weekly", icon: "train-side" },
  { id: "academics", label: "Academics", icon: "graduation-cap" },
  { id: "drill", label: "Drill", icon: "shield" },
  { id: "uniforms", label: "Uniforms", icon: "shirt" },
  { id: "checklists", label: "Checklists", icon: "checkbox" },
  { id: "resources", label: "Resources", icon: "folder-open" },
  { id: "fitness", label: "Fitness", icon: "dumbbell-fitness" },
  { id: "dodmerb", label: "DODMERB", icon: "stethoscope" },
  { id: "calendar", label: "Calendar", icon: "calendar-days" }
]

const weeklyObjectives = [
  "Goal 1",
  "Goal 2",
  "Goal 3",
  "Goal 4"
]

const td0UniformPdf = "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct%2FS26%20Detachment%20220%20SOPs%20%2D%20CAO%2028%20Feb%202026%2Epdf&parent=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct"

const td0Pdfs = [
  {
    title: "TD-0 Welcome Packet",
    detail: "Add the TD-0 welcome, schedule, or orientation PDF here.",
    href: "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct%2FS26%20Detachment%20220%20SOPs%20%2D%20CAO%2028%20Feb%202026%2Epdf&parent=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct"
  },
  {
    title: "TD-0 Briefing Slides",
    detail: "Add the TD-0 academic, training, or LLAB briefing PDF here.",
    href: "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct%2FS26%20Detachment%20220%20SOPs%20%2D%20CAO%2028%20Feb%202026%2Epdf&parent=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct"
  },
  {
    title: "TD-0 Reference Guide",
    detail: "Add the TD-0 reference, procedures, or standards PDF here.",
    href: "https://purdue0.sharepoint.com/sites/AFROTCDetachment220/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct%2FS26%20Detachment%20220%20SOPs%20%2D%20CAO%2028%20Feb%202026%2Epdf&parent=%2Fsites%2FAFROTCDetachment220%2FShared%20Documents%2FGeneral%2F00%2E%20S26%20USE%20ME%2F02%2E%20Policies%2FStandards%20and%20Conduct"
  }
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
      { label: "Topic 1", href: "#" },
      { label: "Topic 2", href: "#" },
      { label: "Topic 3", href: "#" },
      { label: "Topic 4", href: "#" }
    ]
  }
]

const drillResources = [
  { title: "FDE Prep", detail: "PDF detailing procedure as well as maybe a stando FDE procedure? Will need to talk to AO about this.", href: "#" },
  { title: "ORI Readiness", detail: "Same deal as before.", href: "#" },
  { title: "Procedures", detail: "Other Procedures like Fall in, Change of Command, and how to do every role type deal.", href: "#" }
]

const uniformPdf = "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2903/dafi36-2903.pdf"

const checklistItems = [
  "Pens",
  "Water bottle",
  "Backpack",
  "Stando'd quiz papers and note taking sheets",
  "Clean shaven(for men)",
  "PCA's ironed and shoes shined",
  "Phone alarms turned off",
  "Any additional items that are needed for that specific week we can update as needed"
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

const dodmerbSteps = [
  {
    title: "Create account",
    detail: "Use the DODMERB PDF sent out earlier this year as a starting point."
  },
  {
    title: "Schedule exams",
    detail: "Use the DODMERB PDF sent out earlier this year as a starting point.."
  },
  {
    title: "Track remedials",
    detail: "Use the DODMERB PDF sent out earlier this year as a starting point."
  },
  {
    title: "Ask for help early",
    detail: "Use the DODMERB PDF sent out earlier this year as a starting point."
  }
]

const runScores = {
  male: [
    ["13:25", 50], ["13:55", 49.4], ["14:12", 48.8], ["14:27", 48.1], ["14:41", 47.5],
    ["15:05", 46.9], ["15:17", 46.3], ["15:28", 45.6], ["15:38", 45], ["16:09", 43.9],
    ["16:29", 42.9], ["16:49", 41.8], ["17:08", 40.7], ["17:18", 39.6], ["17:37", 38.6],
    ["17:55", 37.5], ["18:23", 35.5], ["18:39", 34], ["19:07", 32.5], ["19:36", 31],
    ["19:45", 29.5]
  ],
  female: [
    ["15:30", 50], ["15:55", 49.4], ["16:00", 48.8], ["16:04", 48.1], ["16:27", 47.5],
    ["17:03", 46.9], ["17:17", 46.3], ["17:31", 45.6], ["17:44", 45], ["18:18", 43.9],
    ["18:38", 42.9], ["18:58", 41.8], ["19:16", 40.7], ["19:34", 39.6], ["19:52", 38.6],
    ["20:12", 37.5], ["20:57", 35.5], ["21:40", 34], ["22:07", 32.5], ["22:37", 31],
    ["22:45", 29.5]
  ]
}

const pushupScores = {
  male: [
    [67, 15], [66, 14.9], [65, 14.7], [64, 14.6], [63, 14.4], [62, 14.3], [61, 14.1],
    [60, 14], [59, 13.8], [58, 13.7], [57, 13.5], [56, 13.4], [55, 13.2], [54, 13.1],
    [53, 12.9], [52, 12.8], [51, 12.6], [50, 12.5], [49, 12.3], [48, 12.2], [47, 12],
    [46, 11.7], [45, 11.6], [44, 11.3], [43, 11], [42, 10.8], [41, 10.5], [40, 10.2],
    [39, 9.8], [38, 9.5], [37, 9], [36, 8.7], [35, 8.3], [34, 8], [33, 7.5],
    [32, 5.3], [31, 3], [30, 0.8]
  ],
  female: [
    [47, 15], [46, 14.9], [45, 14.7], [44, 14.6], [43, 14.4], [42, 14.3], [41, 14.1],
    [40, 14], [39, 13.8], [38, 13.7], [37, 13.5], [36, 13.4], [35, 13.2], [34, 12.9],
    [33, 12.8], [32, 12.6], [31, 12.5], [30, 12.3], [29, 12.2], [28, 12], [27, 11.3],
    [26, 11], [25, 10.8], [24, 10.5], [23, 9.8], [22, 9.5], [21, 9], [20, 8.7],
    [19, 8.3], [18, 7.5], [17, 5.3], [16, 3], [15, 0.8]
  ]
}

const situpScores = {
  male: [
    [58, 15], [57, 14.8], [56, 14.6], [55, 14.3], [54, 14.1], [53, 13.8], [52, 13.5],
    [51, 13.2], [50, 13.1], [49, 12.8], [48, 12.5], [47, 12], [46, 11.3], [45, 10.5],
    [44, 9.8], [43, 9.5], [42, 9], [41, 6.8], [40, 4.5], [39, 2.3]
  ],
  female: [
    [54, 15], [53, 14.8], [52, 14.6], [51, 14.3], [50, 14.1], [49, 13.5], [48, 13.4],
    [47, 13.2], [46, 12.9], [45, 12.8], [44, 12], [43, 11.7], [42, 11.3], [41, 10.5],
    [40, 10.2], [39, 9.8], [38, 9], [37, 6.8], [36, 4.5], [35, 2.3]
  ]
}

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
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

function scoreByReps(value, table) {
  const reps = Number(value)
  if (!Number.isFinite(reps)) return 0
  const match = table.find(([minimum]) => reps >= minimum)
  return match ? match[1] : 0
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
  const [active, setActive] = useState("td0")
  const [menuOpen, setMenuOpen] = useState(false)
  const current = useMemo(() => navItems.find((item) => item.id === active), [active])

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
        <button onClick={() => goTo("td0")} className="flex items-center gap-3 text-left">
          <span className="grid size-11 place-items-center overflow-hidden rounded bg-transparent p-0.5">
            <img src={faviconImage} alt="" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block text-base font-black uppercase tracking-[0.16em] text-parchment sm:text-lg">GMC Hub</span>
            <span className="block text-xs uppercase tracking-[0.2em] text-brass">Integrity · Service · Excellence</span>
          </span>
        </button>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 5).map((item) => (
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
      {navItems.map((item) => {
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
        {navItems.map((item) => {
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
            GMC Resource Hub
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-parchment/72 sm:text-lg">
            A one stop shop for all your GMC resource needs.
          </p>
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
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-3 text-xl font-black text-parchment">
          <FlaticonIcon name={icon} size={22} />
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
      <Panel title="TD-0 PDFs" icon="file">
        <div className="grid gap-4 md:grid-cols-3">
          {td0Pdfs.map((pdf, index) => (
            <Td0PdfEmbed
              key={pdf.title}
              pdf={pdf}
              index={index}
            />
          ))}
        </div>
      </Panel>

      <Panel
        title="Uniform Section"
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
      >
        <div className="overflow-hidden rounded border border-brass/20 bg-ink">
          <iframe
            src={td0UniformPdf}
            title="TD-0 Uniform Standards"
            className="h-[70vh] min-h-[520px] w-full bg-ink"
          />
        </div>
      </Panel>

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
    </div>
  )
}

function Td0PdfEmbed({ pdf, index }) {
  const [expanded, setExpanded] = useState(false)
  const hasPdf = Boolean(pdf.href && pdf.href !== "#")

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
    <section className="flex aspect-square min-h-[280px] flex-col overflow-hidden rounded border border-brass/15 bg-field/72">
      <div className="flex min-h-[118px] items-start justify-between gap-3 border-b border-brass/15 bg-ink px-4 py-3">
        <div>
          <h3 className="text-lg font-black text-parchment">TD-0 PDFs</h3>
        </div>
        {hasPdf && (
          <a
            href={pdf.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded bg-bullion px-3 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="file" size={15} />
            Open
          </a>
        )}
      </div>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="group relative min-h-0 flex-1 bg-ink text-left transition hover:bg-field/80"
        aria-label={`Expand ${pdf.title}`}
      >
        {hasPdf ? (
          <iframe
            src={pdf.href}
            title={pdf.title}
            className="pointer-events-none h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-field/72" />
        )}
        <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="mb-5 inline-flex translate-y-3 items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian shadow-gold transition duration-300 group-hover:translate-y-0">
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
          aria-label={pdf.title}
        >
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />
          <div
            className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded border border-brass/30 bg-ink shadow-gold animate-zoomIn"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-brass/20 bg-field px-5 py-3">
              <h3 className="flex items-center gap-2 text-lg font-black text-parchment">
                <FlaticonIcon name="file" size={18} className="text-brass" />
                {pdf.title}
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
            {hasPdf ? (
              <iframe
                src={pdf.href}
                title={`${pdf.title} expanded`}
                className="h-full w-full flex-1 bg-ink"
              />
            ) : (
              <div className="flex-1 bg-field/72" />
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function WeeklyPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <Panel title="Weekly Morale Poster" icon="trophy">
        <div className="relative overflow-hidden rounded border border-brass/25 bg-field p-7">
          <div className="absolute right-4 top-4 rounded border border-brass/25 bg-ink px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-parchment">Week 01</div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-bullion">Morale Theme</p>
          <h3 className="mt-6 text-4xl font-black leading-none text-parchment sm:text-5xl">Insert theme of the week</h3>
          <p className="mt-4 max-w-xl text-parchment/70">The morale PDF will  be inserted here.</p>
          <div className="mt-8 h-2 overflow-hidden rounded bg-brass/20">
            <div className="h-full w-3/4 rounded bg-bullion" />
          </div>
        </div>
      </Panel>
      <Panel title="Growth Goals & LLAB" icon="target">
        <div className="space-y-3">
          {weeklyObjectives.map((objective, index) => (
            <div key={objective} className="flex items-start gap-3 rounded border border-brass/15 bg-field/72 p-3">
              <span className="grid size-7 shrink-0 place-items-center rounded bg-bullion text-sm font-black text-obsidian">{index + 1}</span>
              <span className="text-sm leading-6 text-parchment/82">{objective}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

function AcademicsPage() {
  return (
    <Panel title="Academics Study Page" icon="graduation-cap">
      <div className="grid gap-4 md:grid-cols-3">
        {academicBlocks.map((block) => (
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
    </Panel>
  )
}

function DrillPage() {
  return (
    <Panel title="Drill & Procedures" icon="shield">
      <div className="grid gap-4 md:grid-cols-3">
        {drillResources.map((resource) => (
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
        ))}
      </div>
    </Panel>
  )
}

function UniformPage() {
  return (
    <div className="grid gap-6">
      <UniformGuide title="Detachment Uniform SOP" pdf={td0UniformPdf} pdfVar="td0UniformPdf" />
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
      title="Printable Checklist"
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
  const pushupScore = scoreByReps(pushups, pushupScores[gender])
  const situpScore = scoreByReps(situps, situpScores[gender])
  const whtr = scoreByWhtr(waist, height)
  const total = runScore + pushupScore + situpScore + whtr.score
  const totalDisplay = total.toFixed(1).replace(".0", "")
  const passing = total >= 75
  const excellent = total >= 90

  return (
    <div className="grid gap-6">
      <Panel
        title="Summer Workout Plan"
        icon="file"
        action={
          <a
            href={summerWorkoutPlanPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-bullion px-4 py-2 text-sm font-black text-obsidian transition hover:bg-[#efd28c]"
          >
            <FlaticonIcon name="file" size={16} />
            Open PDF
          </a>
        }
      >
        <div className="overflow-hidden rounded border border-brass/20 bg-ink">
          <iframe
            src={summerWorkoutPlanPdf}
            title="Summer Workout Plan F26"
            className="h-[70vh] min-h-[520px] w-full bg-ink"
          />
        </div>
      </Panel>

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
              <FitnessInput label="Pushups" value={pushups} setValue={setPushups} placeholder="67" helper="1 minute total" type="number" />
              <FitnessInput label="Situps" value={situps} setValue={setSitups} placeholder="58" helper="1 minute total" type="number" />
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
              <ScoreRow label="Pushups" value={pushupScore} max="15" />
              <ScoreRow label="Situps" value={situpScore} max="15" />
              <ScoreRow label="Waist / Height" value={whtr.score} max="20" />
            </div>
            <div className="mt-5 rounded border border-brass/20 bg-ink p-4">
              <p className="text-sm font-bold text-parchment">WHtR: {whtr.ratio === null ? "--" : whtr.ratio.toFixed(2)}</p>
              <p className="mt-1 text-sm text-parchment/68">{whtr.category}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <FitnessNote title="Scoring" detail="Run is worth 50 points, pushups and situps are 15 each, and waist-to-height ratio is 20." />
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
  )
}

createRoot(document.getElementById("root")).render(<App />)


