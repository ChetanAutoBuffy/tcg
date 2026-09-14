// Pure-data ES module. NO React, NO JSX — safe to import from Node.
// One entry per automotive-aftermarket vertical TCG builds software for.
//
// Voice: "Tell us the problem, we'll figure out the technology."
// Buyer-native vocabulary (ACES/PIES, fitment, qualifiers, EDI 850/856/810,
// punchout, WD, jobber) kept plain-English.
//
// Confidentiality: proof lines are genericized — no client names, no numbers we
// can't stand behind. ACES/PIES are standards owned by the Auto Care Association
// (NOT SEMA). We build software that operates on catalog/reference data the
// client owns and licenses — TCG does not resell Auto Care licensed data.

export const solutions = [
  {
    slug: "repair-shops",
    title: "Software & AI for Auto Repair Shops",
    metaTitle: "Auto Repair Shop Software & AI | The Chadha Group",
    metaDescription:
      "Custom software and AI for auto repair shops: connect your shop management system to parts suppliers, speed up quoting, and automate the busywork.",
    eyebrow: "Auto Repair Shops",
    intro:
      "Most shops run on a management system that almost does what they need — but not quite. We build the missing pieces: the parts lookup, the supplier connection, the quote that writes itself. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Your techs jump between your shop management system and three supplier websites just to price one repair.",
      "Parts get ordered for the wrong vehicle because fitment isn't checked against the VIN.",
      "Quotes and estimates take too long, so customers walk before they approve the work.",
      "You can't see real-time availability or pricing from your suppliers without phoning them.",
      "Front-desk staff re-type the same customer and vehicle info into four different tools.",
    ],
    whatWeBuild: [
      "A live connection between your shop management system and your parts suppliers, so availability and pricing show up where you already work.",
      "VIN and year/make/model fitment lookup wired to your suppliers' catalogs so you only order parts that actually fit.",
      "An AI quoting assistant that drafts estimates from a job description and your labor rates in seconds.",
      "Automated customer updates — approvals, status, and ready-for-pickup texts — triggered by your workflow.",
      "A parts-ordering dashboard that compares your preferred suppliers on price and availability in one view.",
      "Custom reporting that shows job profitability, parts margin, and tech productivity without spreadsheet exports.",
    ],
    proof: [
      "Built supplier connections that pull live parts availability into a shop's existing workflow.",
      "Automated quote drafting that turned a multi-minute estimate into a few clicks.",
      "Connected fitment data so parts are checked against the vehicle before they're ordered.",
    ],
    faqs: [
      {
        q: "Can you connect my shop management system to my parts suppliers?",
        a: "Yes. That's one of the most common things we build. If your suppliers offer an API, a punchout, or even a data feed, we can pull live availability and pricing into the tools you already use — so your team stops tabbing between websites to price a single job.",
      },
      {
        q: "I use a specific shop management platform. Do I have to switch software?",
        a: "No. We build around what you already run. The goal is to add the missing piece — a parts lookup, a supplier connection, a faster quote — not to rip out your management system and retrain your whole shop.",
      },
      {
        q: "Can AI help my front desk write estimates faster?",
        a: "Yes. We build AI quoting assistants that draft an estimate from a plain-English job description plus your labor rates and parts pricing. Your service writer reviews and adjusts instead of building every quote from scratch.",
      },
      {
        q: "How do I make sure parts fit the customer's vehicle before ordering?",
        a: "We wire VIN or year/make/model fitment checks into your ordering flow using the fitment data your suppliers provide, so a part that doesn't fit the vehicle gets flagged before anyone places the order.",
      },
      {
        q: "How long does a project like this take?",
        a: "Because we build fast with Claude Code, you usually see a working version in days, not months. We scope the exact bottleneck on a call, ship something you can click, then iterate until it's right.",
      },
    ],
    ctaLine: "Tell us what's slowing your shop down. We'll tell you what we can build to fix it.",
  },
  {
    slug: "parts-distributors",
    title: "Custom Software for Auto Parts Distributors & Warehouse Distributors",
    metaTitle: "Parts Distributor Software (WD) | The Chadha Group",
    metaDescription:
      "Custom software for auto parts distributors and WDs: inventory, multi-channel pricing, EDI, and B2B ordering built around how you actually sell.",
    eyebrow: "Distributors & WDs",
    intro:
      "Warehouse distributors and jobbers move enormous SKU counts across channels that never quite agree with each other. We build the systems that keep inventory, pricing, and orders in sync — and give your B2B accounts a way to order that doesn't run through a phone and a fax. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Inventory and pricing drift out of sync between your ERP, your website, and your marketplace listings.",
      "B2B accounts still order by phone, email, and fax because you have no real ordering portal.",
      "Every new supplier or customer means another custom EDI or feed integration nobody wants to own.",
      "Account-based pricing, tiers, and terms live in someone's head or a fragile spreadsheet.",
      "You can't answer 'do we have it and what does it cost this customer' without three lookups.",
    ],
    whatWeBuild: [
      "A single source of truth for inventory and pricing that pushes to your website, marketplaces, and B2B channels in real time.",
      "A B2B ordering portal with account-based pricing, tiered terms, bulk order pads, and full order history.",
      "EDI integration for your trading partners — 850 purchase orders, 855 acknowledgments, 856 ASNs, and 810 invoices.",
      "Supplier feed ingestion that maps messy catalog files into your system and flags conflicts before they ship.",
      "Automated pricing rules by customer, tier, region, or volume — applied consistently everywhere you sell.",
      "Dashboards for fill rate, backorders, aged inventory, and margin by customer and product line.",
      "Punchout catalogs so your larger customers can order from inside their own procurement systems.",
    ],
    proof: [
      "Built inventory and pricing sync that keeps a large SKU catalog aligned across multiple channels.",
      "Delivered B2B ordering portals with account-based pricing and bulk order pads.",
      "Integrated EDI document flows with trading partners without ripping out the existing ERP.",
    ],
    faqs: [
      {
        q: "Can you keep my inventory and pricing in sync across my website and marketplaces?",
        a: "Yes. We build a single source of truth that owns your inventory and pricing, then pushes updates in real time to your website, eBay, Amazon, Walmart, and your B2B portal — so stock and price stop drifting apart across channels.",
      },
      {
        q: "Do you build B2B ordering portals for wholesale accounts?",
        a: "Yes. We build private portals with account-based pricing, tiered terms, bulk order pads, saved lists, and order history — built around how you actually sell to jobbers and fleet accounts, not a generic retail cart.",
      },
      {
        q: "Can you set up EDI with my trading partners?",
        a: "Yes. We handle the common document set — EDI 850 purchase orders, 855 acknowledgments, 856 advance ship notices, and 810 invoices — and connect it to your existing ERP so partners can trade with you the way they require.",
      },
      {
        q: "We handle a huge number of SKUs. Can your systems handle that scale?",
        a: "Yes. High SKU counts and messy supplier feeds are exactly the environment we build for. We map incoming catalog data into a clean structure, de-dupe, and flag conflicts so scale doesn't turn into chaos.",
      },
      {
        q: "Do I have to replace my ERP?",
        a: "No. We build around your ERP, not over it. Most of what we do connects to and extends the system you already run rather than forcing a rip-and-replace.",
      },
    ],
    ctaLine: "Tell us where your channels fall out of sync. We'll build the system that keeps them honest.",
  },
  {
    slug: "catalog-data",
    title: "ACES/PIES Catalog & Product-Data Tools",
    metaTitle: "ACES & PIES Catalog Data Tools | The Chadha Group",
    metaDescription:
      "Software for ACES and PIES catalog and product data: validate fitment, clean qualifiers, transform feeds, and get marketplace-ready data you can trust.",
    eyebrow: "Catalog & Product Data",
    intro:
      "ACES and PIES are the backbone of aftermarket product data — and a constant source of pain when files are messy, fitment is wrong, or a marketplace rejects your feed. We build software that operates on the catalog and reference data you own and license, cleaning it, validating it, and shaping it for wherever it needs to go. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Fitment errors slip through and you find out when customers return parts that never fit.",
      "PIES attributes, qualifiers, and digital assets are inconsistent across your product lines.",
      "Every marketplace and customer wants the data in a slightly different shape, so someone reformats by hand.",
      "You can't tell which SKUs are missing images, specs, or complete fitment coverage.",
      "Supplier ACES/PIES files arrive in different versions and something always breaks on import.",
    ],
    whatWeBuild: [
      "Validation tools that check ACES fitment and PIES attributes against the standards and catch errors before they publish.",
      "A qualifier and attribute cleaner that normalizes inconsistent values across your catalog.",
      "Feed transformers that convert your ACES/PIES data into the exact format each marketplace or customer requires.",
      "Coverage dashboards showing which SKUs are missing images, specs, fitment, or required attributes.",
      "Importers that ingest supplier ACES/PIES files across versions and reconcile them into one clean structure.",
      "A product-data workbench where your team edits, reviews, and approves records with a full audit trail.",
    ],
    proof: [
      "Built tooling that validates fitment and product attributes before data ever reaches a marketplace.",
      "Transformed catalog feeds into the specific formats different channels and customers require.",
      "Surfaced data-coverage gaps so teams know exactly which records are incomplete.",
    ],
    faqs: [
      {
        q: "Who owns the ACES and PIES standards, and can you work with them?",
        a: "ACES and PIES are standards owned and maintained by the Auto Care Association (they are not SEMA standards). We build software that operates on the ACES/PIES catalog and reference data you already own and license — we don't resell Auto Care licensed data, we help you use yours better.",
      },
      {
        q: "Can you validate my fitment data before it goes live?",
        a: "Yes. We build validators that check your ACES fitment records and PIES attributes against the standards and your own rules, flagging errors, gaps, and conflicts before the data reaches a customer or marketplace.",
      },
      {
        q: "My data is a mess of inconsistent qualifiers and attributes. Can you clean it?",
        a: "Yes. We build normalization tools that standardize qualifiers, attributes, and values across your catalog, so the same thing is described the same way on every SKU.",
      },
      {
        q: "Every channel wants my product data in a different format. Can you automate that?",
        a: "Yes. We build feed transformers that take your ACES/PIES source data and output the exact shape each marketplace, retailer, or customer requires, so nobody is reformatting spreadsheets by hand.",
      },
      {
        q: "Can you show me which products have incomplete data?",
        a: "Yes. We build coverage dashboards that flag SKUs missing images, specifications, complete fitment, or required attributes, so you can prioritize what to fix first.",
      },
    ],
    ctaLine: "Tell us where your catalog data breaks. We'll build the tooling that keeps it clean and standards-ready.",
  },
  {
    slug: "category-management",
    title: "AI Category Management for Auto Parts",
    metaTitle: "AI Category Management for Auto Parts | The Chadha Group",
    metaDescription:
      "AI category management for auto parts: generate on-spec titles, descriptions, and fitment-aware content across thousands of SKUs in hours instead of weeks.",
    eyebrow: "AI Category Management",
    intro:
      "Writing titles, descriptions, and fitment-aware content across thousands of SKUs takes a team weeks — and it's out of date the moment your catalog changes. We build AI category management systems that do the heavy lifting on brand, on spec, and at scale. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Writing and rewriting titles, bullets, and descriptions across thousands of SKUs eats your team's time.",
      "Content quality and tone drift depending on who wrote which listing.",
      "New products sit unpublished for weeks because nobody has time to write them up.",
      "Marketplace content rules change and you have to touch every listing again.",
      "Your descriptions don't mention the fitment and attributes buyers actually search for.",
    ],
    whatWeBuild: [
      "AI agents that generate titles, descriptions, and bullet points across your whole catalog, on brand and on spec.",
      "Fitment-aware content that pulls year/make/model and attribute data straight from your ACES/PIES records.",
      "Bulk enrichment that fills missing attributes and rewrites weak listings in hours, not weeks.",
      "Channel-specific rewriting so the same product reads correctly for eBay, Amazon, Walmart, and your own store.",
      "A review-and-approve workflow so your team stays in control of what actually publishes.",
      "Re-generation triggers so listings update automatically when your catalog or the marketplace rules change.",
    ],
    proof: [
      "Generated on-spec product content across very large SKU catalogs in a fraction of the usual time.",
      "Built fitment-aware copy that pulls directly from structured catalog data.",
      "Delivered channel-specific rewriting so one product reads correctly everywhere it's listed.",
    ],
    faqs: [
      {
        q: "Can AI write product titles and descriptions for thousands of auto parts?",
        a: "Yes. That's exactly what our AI category management systems do. We generate titles, bullets, and descriptions across your whole catalog, on brand and on spec, and route everything through a human review step so your team stays in control of what publishes.",
      },
      {
        q: "Will the AI content actually be accurate about fitment and specs?",
        a: "Yes, because we ground it in your own data. The AI writes from your structured ACES/PIES records — year/make/model, attributes, qualifiers — rather than inventing details, so the content matches what the part actually is and what it fits.",
      },
      {
        q: "Can it write differently for each marketplace?",
        a: "Yes. eBay, Amazon, Walmart, and your own store each have different rules and buyer expectations. We build channel-specific rewriting so the same product reads correctly and stays compliant on every channel.",
      },
      {
        q: "Do we still get to review content before it goes live?",
        a: "Always. We build a review-and-approve workflow so nothing publishes without a human sign-off. The AI removes the grunt work; your team keeps editorial control.",
      },
      {
        q: "How fast can we enrich a backlog of listings?",
        a: "Bulk enrichment that used to take a team weeks typically runs in hours once the system is set up. New products stop sitting unpublished because content generation keeps pace with your catalog.",
      },
    ],
    ctaLine: "Tell us how many SKUs are waiting on content. We'll build the AI that clears the backlog.",
  },
  {
    slug: "manufacturers",
    title: "Software & Data Systems for Aftermarket Manufacturers",
    metaTitle: "Aftermarket Manufacturer Software | The Chadha Group",
    metaDescription:
      "Software and data systems for aftermarket parts manufacturers: build and publish ACES/PIES, manage fitment, and get products to market faster.",
    eyebrow: "Aftermarket Manufacturers",
    intro:
      "As a manufacturer, your product data is your product to the channel — and if your ACES/PIES isn't clean and complete, distributors and marketplaces won't carry you well. We build the systems that let you author, validate, and publish product data and get new parts to market faster. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Building ACES fitment and PIES data for new products is slow, manual, and error-prone.",
      "Distributors keep asking for your data in different formats and versions.",
      "Fitment coverage is incomplete, so your parts don't show up in year/make/model searches.",
      "You have no single system to author, review, and publish product data across customers.",
      "New product launches stall because the data package isn't ready when the part is.",
    ],
    whatWeBuild: [
      "A product-data authoring system for building ACES fitment and PIES attributes with validation built in.",
      "Publishing pipelines that output your data in each distributor's and marketplace's required format.",
      "Fitment coverage tools that show gaps and help you extend applications to more vehicles.",
      "A digital asset workflow that keeps images, specs, and documents attached to the right SKUs.",
      "Automated feeds to your distributors and channel partners so everyone gets current data.",
      "Launch dashboards that track each new product's data readiness alongside its release.",
    ],
    proof: [
      "Built authoring and validation tooling for structured manufacturer product data.",
      "Delivered publishing pipelines that output one data set into many partner formats.",
      "Created fitment coverage tools that reveal where applications are incomplete.",
    ],
    faqs: [
      {
        q: "Can you help us build and manage our ACES and PIES data?",
        a: "Yes. We build authoring systems where your team creates ACES fitment and PIES attributes with validation built in, so records are checked against the standards as they're built rather than after they break. ACES/PIES are Auto Care Association standards; we build software that works with the data you own and license.",
      },
      {
        q: "Our distributors all want data in different formats. Can you automate publishing?",
        a: "Yes. We build publishing pipelines that take one clean source data set and output it in each distributor's and marketplace's required format and version, so you stop hand-building a file for every partner.",
      },
      {
        q: "How do we know where our fitment coverage is incomplete?",
        a: "We build coverage tools that map your applications against vehicle data and highlight gaps, so you can see exactly which makes, models, and years your parts aren't showing up for and extend coverage deliberately.",
      },
      {
        q: "Can product data be ready when a new part launches?",
        a: "Yes. We build launch dashboards that track each product's data readiness — fitment, attributes, images, documents — alongside its release date, so the data package ships when the part does instead of weeks later.",
      },
      {
        q: "Do you replace our PIM or work with it?",
        a: "Either way. If you have a PIM, we extend and connect it. If you don't, we can build the authoring and publishing layer you need. We shape the solution to how you already operate.",
      },
    ],
    ctaLine: "Tell us where your product data slows a launch. We'll build the system that gets parts to market on time.",
  },
  {
    slug: "marketplace-sellers",
    title: "Marketplace Automation for eBay, Amazon & Walmart Parts Sellers",
    metaTitle: "eBay Amazon Walmart Parts Automation | The Chadha Group",
    metaDescription:
      "Marketplace automation for auto parts sellers on eBay, Amazon, and Walmart: sync inventory and pricing, generate fitment-correct listings, and stop overselling.",
    eyebrow: "Marketplace Sellers",
    intro:
      "Selling parts across eBay, Amazon, and Walmart means fighting inventory drift, listing rules, and fitment requirements on every channel at once. We build the automation that keeps your listings correct, your stock in sync, and your team out of the spreadsheet. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "You oversell because stock isn't synced in real time across every channel.",
      "Each marketplace demands fitment and compatibility data in its own format.",
      "Repricing to stay competitive is a manual, all-day chore.",
      "Listing thousands of SKUs by hand means new inventory sits unlisted for weeks.",
      "A pricing or content error has to be fixed channel by channel.",
    ],
    whatWeBuild: [
      "Real-time inventory sync across eBay, Amazon, Walmart, and your own store from one source of truth.",
      "Fitment-correct listing generation that formats compatibility data the way each marketplace requires.",
      "Automated bulk listing and relisting so new inventory goes live fast, not weeks late.",
      "Rules-based repricing that keeps you competitive within margins you set.",
      "Order routing and centralized management so all channels flow into one workflow.",
      "Error monitoring that catches pricing, stock, and content problems and fixes them everywhere at once.",
    ],
    proof: [
      "Built real-time multi-channel inventory sync that prevents overselling.",
      "Automated fitment-correct listing generation across major marketplaces.",
      "Delivered rules-based repricing that keeps sellers competitive without manual effort.",
    ],
    faqs: [
      {
        q: "Can you sync my inventory across eBay, Amazon, and Walmart so I stop overselling?",
        a: "Yes. We build a single source of truth for your stock that pushes real-time updates to every channel, so when a part sells on one marketplace the count drops everywhere before someone else can buy what you don't have.",
      },
      {
        q: "Each marketplace wants fitment data differently. Can you handle that?",
        a: "Yes. We generate listings with fitment and compatibility formatted the way each channel requires — eBay's compatibility system, Amazon's part-finder data, Walmart's requirements — from your underlying catalog data.",
      },
      {
        q: "Can you automate repricing across channels?",
        a: "Yes. We build rules-based repricing that adjusts your prices to stay competitive while respecting the minimum margins you set, so you're not manually chasing prices all day across three marketplaces.",
      },
      {
        q: "I have thousands of SKUs to list. Can you bulk-list them?",
        a: "Yes. We build automated bulk listing and relisting so new inventory goes live quickly and correctly instead of waiting weeks for someone to key it in by hand.",
      },
      {
        q: "Do you connect to the marketplace APIs directly?",
        a: "Yes, wherever a marketplace offers an API we integrate with it directly, and we build around feed-based channels too. The point is one workflow that manages all your channels instead of logging into each one.",
      },
    ],
    ctaLine: "Tell us which channel is costing you time or oversells. We'll build the automation that ends it.",
  },
  {
    slug: "rep-agencies",
    title: "Technology for Manufacturers' Rep Agencies",
    metaTitle: "Manufacturers Rep Agency Software | The Chadha Group",
    metaDescription:
      "Custom software for manufacturers' rep agencies: track lines, commissions, and POS data, and give principals and buyers the reports they want.",
    eyebrow: "Rep Agencies",
    intro:
      "Rep agencies live between principals and buyers, and the work of reconciling lines, commissions, and sales data usually lands in a pile of spreadsheets. We build the systems that pull it together so you can spend time selling, not stitching reports. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "Commission statements arrive from every principal in a different format, and reconciling them is manual.",
      "You can't easily see sales and POS trends across the lines you represent.",
      "Buyers and principals want reports you have to build by hand every time.",
      "Sample requests, line reviews, and follow-ups get tracked in scattered notes.",
      "Onboarding a new line means rebuilding your tracking from scratch.",
    ],
    whatWeBuild: [
      "A commission tracking system that ingests each principal's statements and reconciles them automatically.",
      "Sales and POS dashboards that show trends across every line you represent in one place.",
      "Report generators that produce the views principals and buyers ask for on demand.",
      "A CRM shaped to rep work — lines, territories, buyers, sample requests, and line reviews.",
      "Automated alerts for commission discrepancies, slipping accounts, and follow-up deadlines.",
      "Data ingestion that maps any principal's or retailer's file into your standard structure.",
    ],
    proof: [
      "Built commission reconciliation that ingests statements in many formats.",
      "Delivered cross-line sales dashboards that replace manual spreadsheet roll-ups.",
      "Automated the recurring reports principals and buyers ask for.",
    ],
    faqs: [
      {
        q: "Can you automate reconciling commission statements from all my principals?",
        a: "Yes. Every principal sends commissions in a different format, so we build ingestion that maps each one into a standard structure and reconciles it automatically, flagging discrepancies instead of making you check line by line.",
      },
      {
        q: "Can I see sales across all the lines I represent in one place?",
        a: "Yes. We build dashboards that pull sales and POS data across your principals and retailers into a single view, so you can spot trends and slipping accounts without rebuilding a spreadsheet each month.",
      },
      {
        q: "Buyers and principals keep asking for custom reports. Can you help?",
        a: "Yes. We build report generators that produce the specific views your principals and buyers want on demand, so you're not hand-building the same reports over and over.",
      },
      {
        q: "Can you handle data coming from lots of different retailers and principals?",
        a: "Yes. Messy, inconsistent files from many sources are exactly what we build ingestion for. We map any incoming format into your standard structure so everything downstream just works.",
      },
      {
        q: "Do you build a full CRM or connect to what I use?",
        a: "Either. We can build a CRM shaped to how rep agencies actually work — lines, territories, sample requests, line reviews — or connect the tracking to tools you already use. We fit the solution to your workflow.",
      },
    ],
    ctaLine: "Tell us which reconciliation or report eats your week. We'll build the system that does it for you.",
  },
  {
    slug: "edi-integrations",
    title: "EDI & System Integration for the Automotive Aftermarket",
    metaTitle: "EDI & Integration for Auto Aftermarket | The Chadha Group",
    metaDescription:
      "EDI and system integration for the auto aftermarket: connect ERP, suppliers, and trading partners with EDI 850/855/856/810, punchout, and API integrations.",
    eyebrow: "EDI & Integration",
    intro:
      "The aftermarket runs on systems that have to talk to each other — ERPs, supplier catalogs, trading partners, marketplaces — and the connections between them are where deals and hours get lost. We build the integrations that make your systems trade cleanly. Tell us the problem, we'll figure out the technology.",
    painPoints: [
      "A new trading partner requires EDI you don't have the in-house team to build.",
      "Orders and invoices get re-keyed between systems because nothing is connected.",
      "Supplier catalogs and pricing live in files that never make it into your ERP cleanly.",
      "Your website, ERP, and marketplaces each hold a different version of the truth.",
      "Large customers want punchout ordering you can't currently support.",
    ],
    whatWeBuild: [
      "EDI integration for the core document set — 850 purchase orders, 855 acknowledgments, 856 ASNs, and 810 invoices.",
      "ERP integrations that connect your system of record to your website, suppliers, and channels.",
      "Punchout catalogs so enterprise customers order from inside their own procurement systems.",
      "API integrations that sync inventory, pricing, orders, and catalog data between platforms in real time.",
      "Supplier feed ingestion that maps catalog and pricing files into your ERP without manual cleanup.",
      "Middleware and monitoring so failed transactions get caught and retried, not silently lost.",
    ],
    proof: [
      "Built EDI document flows with trading partners connected to an existing ERP.",
      "Delivered real-time API integrations that sync data across platforms.",
      "Set up punchout so enterprise buyers order from their own procurement systems.",
    ],
    faqs: [
      {
        q: "A trading partner is requiring EDI. Can you set that up?",
        a: "Yes. We build the core EDI document set — 850 purchase orders, 855 acknowledgments, 856 advance ship notices, and 810 invoices — and connect it to your ERP so you can onboard the partner without building an EDI team in-house.",
      },
      {
        q: "Can you connect my ERP to my website and marketplaces?",
        a: "Yes. We build integrations that make your ERP the system of record and sync inventory, pricing, and orders out to your website, marketplaces, and B2B channels, so every system shows the same truth in real time.",
      },
      {
        q: "What is punchout and can you build it?",
        a: "Punchout lets a large customer browse your catalog and order from inside their own procurement system, with the order flowing back to you automatically. Yes, we build punchout catalogs so you can win and keep enterprise accounts that require it.",
      },
      {
        q: "My supplier data comes as messy files. Can you get it into my ERP?",
        a: "Yes. We build ingestion that maps supplier catalog and pricing files — whatever format they arrive in — into your ERP's structure, cleaning and reconciling along the way so you're not re-keying data by hand.",
      },
      {
        q: "How do you make sure transactions don't silently fail?",
        a: "We build monitoring and middleware around the integrations, so a failed EDI document or API call gets caught, logged, and retried, with alerts to your team, instead of disappearing and surfacing as a missed order later.",
      },
    ],
    ctaLine: "Tell us which systems refuse to talk to each other. We'll build the integration that connects them.",
  },
];

export default solutions;
