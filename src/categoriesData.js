export const categories = [
  { 
    id: 1, 
    title: "Agriculture", 
    desc: "Crops, Soil Science, and Agronomy", 
    image: "images/img1.jpg",
    aboutDept: "The Unit of Agriculture focuses on enhancing sustainable crop productivity, optimizing fertilizer applications based on scientific soil testing, and developing high-yield agronomic practices suitable for various agro-climatic zones.",
    subCategories: ["Cereals", "Millets", "Pulses", "Oilseeds", "Fibre Crops", "Sugar Crops"],
    incharge: {
      name: "Dr. Anil Kumar",
      role: "Head of Agronomy & Senior Soil Scientist",
      contact: "+91-5944-233451",
      email: "agri.head.pantnagar[at]gmail[dot]com"
    },
    notices: [
      "🌾 Rabi crop sowing guidelines booklet has been uploaded to the dashboard resource center.",
      "🧪 Free Soil Testing camp organized at KVK center from next Wednesday. Bring 500g dried soil samples.",
      "⚠️ Alert: High humidity levels expected next week. Inspect paddy crops for signs of blast disease."
    ],
    relatedLinks: ["National Food Security Mission", "Unit of Agriculture", "Crop Management System"],
    subDetails: {
      "Cereals": {
        about: "Pantnagar University's Cereals Division handles genetic lineage modification and high-yield cultivation tracking for staples like Rice and Wheat, engineered to withstand regional monsoon shifts.",
        guidelines: [
          { step: "Seed Sowing Depth", detail: "Sow certified Paddy strains at a depth of 2-3 cm with standard 20x15 cm plant-to-row spacing." },
          { step: "Nitrogen Management", detail: "Apply NPK fertilizer in a 120:60:40 ratio split cleanly into baseline, tillering, and panicle initiation phases." },
          { step: "Weed Infestation Avoidance", detail: "Apply university-recommended post-emergence herbicides within 3 to 5 days of transplanting." }
        ],
        videos: [
          { id: 1, title: "Precision Rice Transplanting Protocols at GBPUA&T", duration: "14:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
          { id: 2, title: "Identifying and Mitigating Wheat Rust and Leaf Blight", duration: "11:05", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        notices: [
          { text: "⚠️ High humidity warning: Inspect paddy leaf junctions carefully for active blast spot patterns.", pdfUrl: "https://www.gbpuat.ac.in/notices/blast_disease_advisory.pdf" },
          { text: "🌾 Registered farmers can pick up foundation crop seed variants at the processing plant gate.", pdfUrl: "" }
        ],
        marketRates: [
          { item: "Certified Paddy Seed (Basmati)", unit: "Per 25 Kg Bag", price: "₹ 1,250", state: "In Stock" },
          { item: "High-Yield Wheat Seed (Pant Wheat)", unit: "Per 40 Kg Bag", price: "₹ 1,850", state: "Pre-order Required" }
        ]
      },
      "Millets": {
        about: "Dedicated to climate-resilient farming, the Millets segment standardizes low-water, high-nutrient cultivation maps for finger millet (Ragi) and pearl millet.",
        guidelines: [
          { step: "Substrate Drainage", detail: "Ensure field layout avoids water logging. Millets thrive on light, well-drained loamy structures." },
          { step: "Water Interventions", detail: "Irrigate only during critical growth nodes: flowering and grain-filling stages if rain fails." }
        ],
        videos: [{ id: 1, title: "Ragi (Finger Millet) Organic Sowing Systems", duration: "09:30", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🌾 Direct incentive grants for millet diversification are processing at block offices right now.", pdfUrl: "https://www.gbpuat.ac.in/notices/millet_incentive.pdf" }
        ],
        marketRates: [{ item: "Certified Bajra Seeds", unit: "Per 5 Kg Pack", price: "₹ 450", state: "In Stock" }]
      },
      "Pulses": {
        about: "Focuses on nitrogen-fixing legume cultivation structures, improving grain texture, and shortening maturity cycles for Chickpeas, Pigeon Peas, and Lentils.",
        guidelines: [
          { step: "Rhizobium Treatment", detail: "Treat seeds with Rhizobium culture slurry before sowing to boost root nodule development." },
          { step: "Moisture Protection", detail: "Provide efficient drainage grooves. Pulse roots decay easily under persistent saturation blocks." }
        ],
        videos: [{ id: 1, title: "Rhizobium Seed Treatment Practical Steps", duration: "08:12", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Alert: Spray Neem-based botanical mixtures at pod formation node to counter pod borer risks.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Certified Chickpea Seeds", unit: "Per 10 Kg Bag", price: "₹ 750", state: "In Stock" }]
      },
      "Oilseeds": {
        about: "Improves oil-extraction yields and disease thresholds for local mustard, rapeseed, and sunflower crops.",
        guidelines: [
          { step: "Sulfur Supplementation", detail: "Incorporate elemental Sulfur at 20-25 kg per hectare during layout tiling to increase oil content." }
        ],
        videos: [{ id: 1, title: "Mustard Aphid Protection Protocols", duration: "11:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "⚠️ Temperature Alert: Sudden temperature drops may induce mustard aphid colony spreads.", pdfUrl: "https://www.gbpuat.ac.in/notices/mustard_alert.pdf" }
        ],
        marketRates: [{ item: "High-Oil Yellow Mustard Seed", unit: "Per 5 Kg Bag", price: "₹ 600", state: "In Stock" }]
      },
      "Fibre Crops": {
        about: "Provides processing standards for Cotton and Jute cultivation layouts optimized for industrial tensile strengths.",
        guidelines: [{ step: "Defoliation Control", detail: "Manage insect barriers strictly during standard flowering setup cycles." }],
        videos: [{ id: 1, title: "Jute Retting Modern Tank Methods", duration: "13:20", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "📅 Fibre processing field display day is scheduled for next Friday at the college research block.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Certified Jute Seeds", unit: "Per 5 Kg Pack", price: "₹ 380", state: "Limited Stock" }]
      },
      "Sugar Crops": {
        about: "Standardizes Sugarcane crop guidelines including trench sowing, ratoon management, and red rot fungal block controls.",
        guidelines: [
          { step: "Trench Planting", detail: "Open trenches 20-25 cm deep with a clean 90 cm row-to-row layout distance." },
          { step: "Red Rot Prevention", detail: "Select sets exclusively from clean companion plots. Avoid planting sets showing split red tissue." }
        ],
        videos: [{ id: 1, title: "Sugarcane Trench Sowing & Ratoon Care", duration: "16:45", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Strict sugarcane layout inspections are active across university testing plots this week.", pdfUrl: "https://www.gbpuat.ac.in/notices/sugarcane_inspection.pdf" }
        ],
        marketRates: [{ item: "Elite Sugarcane Sett Bundles", unit: "Per 100 Setts", price: "₹ 250", state: "Pre-order Required" }]
      }

      
    }
  },
  { 
    id: 3, 
    title: "Veterinary Science", 
    desc: "Animal Health and Livestock", 
    image: "images/img2.avif",
    aboutDept: "Our Veterinary Science division specializes in livestock herd management, cattle health diagnostics, preventive vaccination programs, and cutting-edge research in optimal animal metabolic nutrition tracking systems.",
    subCategories: ["Cattle", "Buffalo", "Poultry", "Piggery", "Animal Nutrition"],
    incharge: {
      name: "Dr. Shivani Sharma",
      role: "Director of Livestock Research Clinic",
      contact: "+91-5944-233452",
      email: "vet.clinic.pantnagar[at]gmail[dot]com"
    },
    notices: [
      "🐮 Free Foot-and-Mouth Disease (FMD) vaccination drive begins across local villages starting tomorrow.",
      "🥛 Register for the upcoming Dairy Farm Optimization Workshop before Saturday evening.",
      "🛑 Feed Warning: Ensure cattle feed is stored away from moisture to eliminate toxic mold growth."
    ],
    relatedLinks: ["Livestock Health Portal", "Veterinary Council", "Dairy Development Board"],
    subDetails: {
      "Cattle": {
        about: "Provides management plans for crossbred cows (Sahiwal, Holstein Friesian) focused on increasing milk yield and optimizing breeding cycles.",
        guidelines: [
          { step: "Shed Ventilation", detail: "Maintain high cross-ventilation lines and implement roof-mist systems when ambient heat crosses 35°C." },
          { step: "Milking Hygiene", detail: "Perform complete teat-dipping using a potassium permanganate solution both before and after milking." }
        ],
        videos: [{ id: 1, title: "Mastitis Prevention and Teat Care Steps", duration: "10:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🐮 Deworming drops must be administered to calves under 6 months old before the season shifts.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Certified Pure Cow Colostrum Packet", unit: "Per 1 Litre Bottle", price: "₹ 120", state: "In Stock" }]
      },
      "Buffalo": {
        about: "Focuses on Murrah breed optimization management, heat stress relief infrastructure, and water wallowing cycles.",
        guidelines: [{ step: "Wallowing Protocols", detail: "Provide fresh water wallowing options for 2 hours daily during peak heat intervals to preserve milk fat percentage." }],
        videos: [{ id: 1, title: "Managing Murrah Buffalo Breeding Cycles", duration: "12:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "⚠️ Monitor herd for early shipping fever warning signs during transition rainy setups.", pdfUrl: "https://www.gbpuat.ac.in/notices/buffalo_fever.pdf" }
        ],
        marketRates: [{ item: "Premium Buffalo Breeding Straws", unit: "Per Cryo-Vial", price: "₹ 200", state: "In Stock" }]
      },
      "Poultry": {
        about: "Covers commercial broiler weight management, layer egg optimization rules, and deep-litter bio-security frameworks.",
        guidelines: [{ step: "Litter Management", detail: "Rake lime powder into the rice husk floor litter weekly to keep moisture below 15% and limit ammonia buildup." }],
        videos: [{ id: 1, title: "Bio-Security Infrastructure for Poultry Sheds", duration: "14:10", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Visitors are restricted from entering the campus incubator house to preserve avian biosecurity.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Day-Old Kuroiler / Chabro Chicks", unit: "Per 100 Chicks Box", price: "₹ 3,500", state: "In Stock" }]
      },
      "Piggery": {
        about: "Deals with high-efficiency breeding standards for Yorkshire and Landrace lines, emphasizing structural waste management.",
        guidelines: [{ step: "Iron Supplementation", detail: "Administer Iron dextran injections to piglets on day 3 to prevent anemia." }],
        videos: [{ id: 1, title: "Modern Piggery Sty Layout & Management", duration: "09:20", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "📅 Swine fever prophylactic vaccine stock has arrived at the university clinic counter.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Weaner Piglets (Standard Cross)", unit: "Per Pair", price: "₹ 4,500", state: "Pre-order Required" }]
      },
      "Animal Nutrition": {
        about: "Teaches farmers how to formulate cost-effective feeds, create urea-treated straw, and make high-nutrition silage.",
        guidelines: [{ step: "Silage Compaction", detail: "Pack green chopped maize tightly into pit silos to remove all oxygen pockets, triggering anaerobic fermentation." }],
        videos: [{ id: 1, title: "How to Build a Low-Cost Silage Pit at Home", duration: "15:30", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🥛 Bring feed ingredients to the college lab on Thursdays for free toxic mold testing.", pdfUrl: "https://www.gbpuat.ac.in/notices/feed_testing.pdf" }
        ],
        marketRates: [{ item: "University Mineral Mixture (Pant Min)", unit: "Per 10 Kg Sack", price: "₹ 650", state: "In Stock" }]
      }
    }
  },
  { 
    id: 4, 
    title: "Technology", 
    desc: "Agri-Engineering & Machinery", 
    image: "images/img3.jpg",
    aboutDept: "The College of Agricultural Engineering introduces advanced mechanized solutions, precision micro-irrigation designs, smart solar-powered post-harvest processing storage equipment, and renewable farm energy installations.",
    subCategories: ["Farm Machinery", "Irrigation Systems", "Post-Harvest Tech", "Green Energy"],
    incharge: {
      name: "Er. Rajesh Verma",
      role: "Chief Engineer / Workshop Superintendent",
      contact: "+91-5944-233453",
      email: "agritech.eng[at]gmail[dot]com"
    },
    notices: [
      "🚜 Subsidy applications for Custom Hiring Laser Land Levelers are now open at the university counter.",
      "💧 New drip-irrigation layout designs are available for distribution to local horticulture farmers.",
      "🔧 Maintenance Training: Tractor hydraulics troubleshooting session is scheduled for next Monday."
    ],
    relatedLinks: ["Agri-Tech Innovation Hub", "Machinery Testing Center", "Renewable Energy Portal"],
    subDetails: {
      "Farm Machinery": {
        about: "Standardizes machinery testing setups for equipment like zero-tillage seed drills, laser levelers, and custom combine harvesters.",
        guidelines: [{ step: "Calibration", detail: "Calibrate fluted seed rollers to ensure accurate seed delivery and prevent seed crushing." }],
        videos: [{ id: 1, title: "Calibrating a Zero-Till Seed Drill Machine", duration: "11:20", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🚜 Laser Leveler implements are ready for custom hire booking at the campus garage block.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Custom Tillage Laser Leveling Service", unit: "Per Hour Hire", price: "₹ 800", state: "Available" }]
      },
      "Irrigation Systems": {
        about: "Covers tech configurations for drip layouts, venturi fertilizer injectors, and water-saving sprinkler setups.",
        guidelines: [{ step: "Filter Flushing", detail: "Flush disc and sand filters weekly to clear clay silt and protect inline dripper paths from clogging." }],
        videos: [{ id: 1, title: "Maintaining Drip Lines and Venturi Injectors", duration: "13:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "💧 Micro-irrigation field mapping assistance can be scheduled with the college technical team.", pdfUrl: "https://www.gbpuat.ac.in/notices/drip_booking.pdf" }
        ],
        marketRates: [{ item: "Inline Disc Filter Replacement Mesh", unit: "Per Unit Piece", price: "₹ 1,200", state: "In Stock" }]
      },
      "Post-Harvest Tech": {
        about: "Teaches modern sorting, grading, grain moisture tracking, and cold chain preservation techniques.",
        guidelines: [{ step: "Moisture Check", detail: "Dry grains until moisture levels drop below 12% before sealing them in long-term storage silos." }],
        videos: [{ id: 1, title: "Safe Grain Sun-Drying and Moisture Controls", duration: "10:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Storage Notice: Never pack warm grains directly from fields into plastic bags; let them cool first.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Digital Moisture Meter (Handheld Calibrated)", unit: "Per Device", price: "₹ 3,200", state: "Limited Stock" }]
      },
      "Green Energy": {
        about: "Applies solar water pumping tech, fixed-dome biogas installations, and biomass briquetting production models.",
        guidelines: [{ step: "Solar Array Angle", detail: "Tilt solar pumping panels to 28 degrees South to maximize winter power capture on northern farms." }],
        videos: [{ id: 1, title: "Biogas Plant Maintenance and Slurry Feed Balance", duration: "12:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "☀️ State solar-pump energy subsidy clearance certificates are processing at counter 3.", pdfUrl: "https://www.gbpuat.ac.in/notices/solar_subsidy.pdf" }
        ],
        marketRates: [{ item: "Deenabandhu Biogas Fixed-Dome Structural Blueprint", unit: "Per Plan Set", price: "Free Download", state: "Available" }]
      }
    }
  },
  { 
    id: 5, 
    title: "Fishery", 
    desc: "Aquaculture and Fish Management", 
    image: "images/img5.jpeg",
    aboutDept: "The College of Fisheries Science works closely with fish breeders to optimize inland freshwater pond setups, design efficient water-recirculating aquaponics systems, monitor hatchery health, and balance balanced feed distributions.",
    subCategories: ["Freshwater Fish", "Aquaponics", "Fish Feed", "Hatchery Management", "Ornamental Fish"],
    incharge: {
      name: "Dr. Manoj Joshi",
      role: "Principal Hatchery Operations Officer",
      contact: "+91-5944-233454",
      email: "fisheries.pantnagar[at]gmail[dot]com"
    },
    notices: [
      "🐟 High-quality Carp seed fingerlings are available for collection at Pond Complex Unit 4.",
      "🧪 Water Quality Check: Monitor pond dissolved oxygen (DO) early in the morning during cloudy days.",
      "📅 Aquaponics commercial production seminar registrations open online from the first of the month."
    ],
    relatedLinks: ["Blue Revolution Schemes", "National Fisheries Board", "Aquaculture Standards"],
    subDetails: {
      "Freshwater Fish": {
        about: "Handles composite fish culture setups combining surface, column, and bottom feeding carps (Catla, Rohu, Mrigal) to maximize pond yields.",
        guidelines: [{ step: "Liming Protocol", detail: "Apply agricultural Limestone at 250 kg per hectare to stabilize pond soil pH between 6.5 and 7.5." }],
        videos: [{ id: 1, title: "Freshwater Carp Composite Pond Setup Manual", duration: "15:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🧪 Bring water samples in sterile jars on Tuesday mornings for a free water chemistry check.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Certified Rohu / Catla Fingerlings", unit: "Per 1,000 Fry Pack", price: "₹ 800", state: "In Stock" }]
      },
      "Aquaponics": {
        about: "Integrates recirculating water systems connecting aquaculture tanks with soil-free vegetable growth lines.",
        guidelines: [{ step: "Ammonia Tracking", detail: "Check total ammonia nitrogen (TAN) daily. Keep levels below 1.0 ppm to avoid stress on fish gills." }],
        videos: [{ id: 1, title: "Setting Up Inline Nitrifying Bio-Filters", duration: "12:10", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "📅 Commercial Aquaponics construction seminar passes can be picked up at the main office.", pdfUrl: "https://www.gbpuat.ac.in/notices/aquaponics_seminar.pdf" }
        ],
        marketRates: [{ item: "Nitrifying Bio-Media Balls Bundle", unit: "Per 20 Kg Bag", price: "₹ 1,500", state: "In Stock" }]
      },
      "Fish Feed": {
        about: "Teaches on-farm sinking and floating pellet formulation using local mustard cake and rice polish inputs.",
        guidelines: [{ step: "Protein Balancing", detail: "Adjust feed mix to maintain 30-32% crude protein for fingerlings, reducing to 26% for adult grow-out fish." }],
        videos: [{ id: 1, title: "Formulating Low-Cost Floating Fish Feed Pellets", duration: "10:35", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Feed Reminder: Avoid overfeeding on cloudy days because dissolved oxygen levels drop naturally.", pdfUrl: "" }
        ],
        marketRates: [{ item: "University Growth Starter Micro-Pellets", unit: "Per 50 Kg Bag", price: "₹ 2,100", state: "In Stock" }]
      },
      "Hatchery Management": {
        about: "Covers induced breeding techniques using synthetic hormone injections under strict sterile water controls.",
        guidelines: [{ step: "Circular Pool Velocity", detail: "Maintain circular spawning pool water speed at 0.4 meters per second to keep carp eggs suspended safely." }],
        videos: [{ id: 1, title: "Induced Breeding and Egg Stripping Operations", duration: "16:20", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "⚠️ Hatchery disinfection cycle is active this weekend. Public entries are paused.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Induced Breeding Hormone Extracts (Pant-Spawn)", unit: "Per 10ml Vial", price: "₹ 450", state: "Limited Stock" }]
      },
      "Ornamental Fish": {
        about: "Applies breeding and tank filtration standards for commercial varieties like Goldfish, Guppies, and Angel Fish.",
        guidelines: [{ step: "Salinity Shock Check", detail: "Maintain live-bearer fry environments at 2-3 ppt salinity to reduce early fungal mortalities." }],
        videos: [{ id: 1, title: "Commercial Breeding Layouts for Goldfish", duration: "09:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🐠 Aquarium glass tank construction designs have been added to the portal resource center.", pdfUrl: "https://www.gbpuat.ac.in/notices/aquarium_blueprints.pdf" }
        ],
        marketRates: [{ item: "Red Comet Goldfish Breeding Pairs", unit: "Per 10 Pairs", price: "₹ 600", state: "In Stock" }]
      }
    }
  },
  { 
    id: 6, 
    title: "Community Science", 
    desc: "Food Science and Home Management", 
    image: "images/img8.jpg",
    aboutDept: "The Unit of Community Science drives value-added agricultural product development, standardized food processing techniques, home resource optimizations, and rural entrepreneurship programs for women.",
    subCategories: ["Food & Nutrition", "Clothing & Textiles", "Child Development", "Home Management"],
    incharge: {
      name: "Dr. Preeti Bisht",
      role: "Coordinator of Rural Food Processing Initiatives",
      contact: "+91-5944-233455",
      email: "community.sci[at]gmail[dot]com"
    },
    notices: [
      "🍯 Certificate course in fruit preservation and homemade jam marketing begins on the 15th.",
      "📝 Applications invited for the Women Self-Help Group (SHG) organic spice processing grant.",
      "🍎 Advisory: Nutritional balanced diet charts for children have been dispatched to local community centers."
    ],
    relatedLinks: ["Nutrition Mission", "Women Empowerment Schemes", "Food Processing Ministry"],
    subDetails: {
      "Food & Nutrition": {
        about: "Provides formulas for therapeutic food mixes, fruit preservation, high-protein supplements, and value-added millets produce packaging.",
        guidelines: [{ step: "Sterilization", detail: "Boil glass packaging jars at 100°C for 20 minutes before filling with hot jams to establish a true vacuum seal." }],
        videos: [{ id: 1, title: "Standardized Mango and Tomato Pickle Processing", duration: "13:10", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🍯 Registrations for the Fruit Processing Certificate Course close this Thursday at 4:00 PM.", pdfUrl: "https://www.gbpuat.ac.in/notices/fruit_processing_schedule.pdf" }
        ],
        marketRates: [{ item: "High-Protein Millet Mix Formula Sheet", unit: "Per Printed Copy", price: "₹ 20", state: "In Stock" }]
      },
      "Clothing & Textiles": {
        about: "Focuses on natural textile dyes, value-added linen products, and setting up small-scale rural garment workshops.",
        guidelines: [{ step: "Mordanting", detail: "Pre-treat cotton fabrics with Alum fixatives to stabilize natural organic dyes against sunlight washing." }],
        videos: [{ id: 1, title: "Natural Dye Extraction from Local Flora Roots", duration: "11:05", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🎨 The rural textile design studio open expo begins next Monday at the campus extension gallery.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Certified Organic Herbal Indigo Powder", unit: "Per 1 Kg Pack", price: "₹ 400", state: "In Stock" }]
      },
      "Child Development": {
        about: "Provides parenting guides, preschool lesson plans, and developmental milestones tracker tools for rural childcare networks.",
        guidelines: [{ step: "Diet Tracking", detail: "Assess early growth charts monthly against standard reference charts to verify proper nutrition." }],
        videos: [{ id: 1, title: "Rural Early Education Play-Tool Fabrication", duration: "08:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "📝 Anganwadi worker tool kits are ready for collection at the Unit main library office.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Child Growth Tracking Graph Charts Pad", unit: "Per 50 Sheets Pad", price: "₹ 80", state: "In Stock" }]
      },
      "Home Management": {
        about: "Teaches ergonomic work practices for farm women, kitchen ergonomics, waste reuse, and household finance tracking.",
        guidelines: [{ step: "Tool Selection", detail: "Use university-approved long-handle weeders to avoid back strain during weeding." }],
        videos: [{ id: 1, title: "Ergonomic Tools for Reducing Drudgery in Farming", duration: "10:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🏡 Free household solar gadget demonstration day will take place at the campus courtyard this Saturday.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Low-Cost Smokeless Biomass Chulha Plans", unit: "Per Structural Blueprint", price: "Free Download", state: "Available" }]
      }
    }
  },
  { 
    id: 11, 
    title: "Apiculture", 
    desc: "Honey Bee Rearing & Honey Production", 
    image: "images/img6.jpg",
    aboutDept: "Our Apiculture Research Center provides comprehensive technical expertise on establishing honey bee colonies, managing seasonal pollination dynamics, processing pure honey, and identifying common hive diseases.",
    subCategories: ["Honey Bee Species", "Beekeeping Equipment", "Honey Extraction", "Bee Pollination", "Bee Diseases"],
    incharge: {
      name: "Dr. H.S. Rana",
      role: "Chief Entomologist & Apiary Supervisor",
      contact: "+91-5944-233456",
      email: "apiculture.center[at]gmail[dot]com"
    },
    notices: [
      "🐝 Italian Honey Bee (Apis mellifera) colonies are available for structural farm distribution next month.",
      "🛑 Warning: Hive inspections must be accelerated to protect against mite infestation during rainy weather.",
      "🍯 Bulk honey testing kits are available at the laboratory discount counter."
    ],
    relatedLinks: ["National Bee Board", "Sweet Revolution Mission", "Honey Testing Labs"],
    subDetails: {
      "Honey Bee Species": {
        about: "Provides management plans for Italian Bees (Apis mellifera) and Indian Hive Bees (Apis cerana indica) to optimize seasonal honey yields.",
        guidelines: [{ step: "Colony Inspection", detail: "Inspect hive boxes weekly during sunny periods to confirm queen cell integrity and check brood development patterns." }],
        videos: [{ id: 1, title: "Handling and Multiplying Italian Honey Bee Boxes", duration: "14:25", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🐝 Italian Honey Bee frames can be booked at the Entomology office counters starting today.", pdfUrl: "" }
        ],
        marketRates: [{ item: "4-Frame Active Bee Colony with Queen", unit: "Per Wooden Hive Box", price: "₹ 3,800", state: "In Stock" }]
      },
      "Beekeeping Equipment": {
        about: "Covers specifications for Langstroth hive boxes, comb foundation sheets, hive tools, and protective worker veils.",
        guidelines: [{ step: "Comb Sheet Fixing", detail: "Use a warm wire embedder to fit wax comb foundation sheets securely into wire frames before expanding hives." }],
        videos: [{ id: 1, title: "Assembling Langstroth Boxes and Wax Wire Frames", duration: "09:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛠️ Standard university-stamped hive boxes are available at factory production discount rates.", pdfUrl: "https://www.gbpuat.ac.in/notices/hive_box_subsidy.pdf" }
        ],
        marketRates: [{ item: "Stainless Steel Honey Bee Smoker Tool", unit: "Per Unit Device", price: "₹ 450", state: "In Stock" }]
      },
      "Honey Extraction": {
        about: "Covers clean centrifugal extraction methods, processing setups, moisture reduction, and storage guidelines.",
        guidelines: [{ step: "Uncapping Process", detail: "Use a heated uncapping knife to slice off cell wax seals cleanly without breaking the structural comb cells beneath." }],
        videos: [{ id: 1, title: "Centrifugal Extraction Operations and Filtration Steps", duration: "11:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🍯 Bulk raw honey evaluation testing kits are available at the laboratory discount counter.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Food-Grade Honey Strainer Mesh Double Layer", unit: "Per Strainer Assembly", price: "₹ 350", state: "In Stock" }]
      },
      "Bee Pollination": {
        about: "Coordinates hive placement schedules in mustard, sunflower, and litchi orchards to increase crop pollination and seed set yields.",
        guidelines: [{ step: "Hive Density", detail: "Place 3-5 active bee hives per hectare at 10% crop bloom to ensure thorough field pollination coverage." }],
        videos: [{ id: 1, title: "Maximizing Litchi Orchard Yields with Honey Bees", duration: "08:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Insecticide Warning: Pause chemical pesticide sprays while university hives are active in local sectors.", pdfUrl: "https://www.gbpuat.ac.in/notices/pollination_safety.pdf" }
        ],
        marketRates: [{ item: "Orchard Pollination Colony Rental Plan", unit: "Per Hive Box / Month", price: "₹ 500", state: "Available" }]
      },
      "Bee Diseases": {
        about: "Covers identification guidelines and organic control setups for varroa mites, foulbrood bacteria, and wasps.",
        guidelines: [{ step: "Mite Screening", detail: "Dust hive frame junctions with fine powdered sugar weekly to trigger varroa mite drop and count infestations." }],
        videos: [{ id: 1, title: "Identifying and Countering Varroa Mite Infestations", duration: "12:12", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [
          { text: "🛑 Emergency Alert: Report any unexpected brood blackening or foul odors to our entomology team immediately.", pdfUrl: "" }
        ],
        marketRates: [{ item: "Organic Formic Acid Hive Mite Strips Pack", unit: "Per 10 Strips Packet", price: "₹ 180", state: "In Stock" }]
      }
    }
  },
  { 
    id: 12, 
    title: "Mushroom", 
    desc: "Mushroom Cultivation & Spawns", 
    image: "images/img4.jpg",
    aboutDept: "The Unit of Mushroom Research & Cultivation at GBPUA&T is dedicated to empowering local farmers through low-cost, high-yield indoor farming technologies. We specialize in standardized spawn (seed) production, crop management, and post-harvest preservation methods.",
    subCategories: ["Button Mushroom", "Oyster Mushroom", "Milky Mushroom", "Mushroom Processing"],
    incharge: {
      name: "Dr. K.P.S. Kushwaha",
      role: "Unit In-Charge / Principal Scientist",
      contact: "+91-5944-233457",
      email: "mushroom.pantnagar[at]gmail[dot]com"
    },
    notices: [
      "⚠️ Fresh Button Mushroom Spawn (Seeds) available for booking from next Monday.",
      "📅 3-Day Hands-on Mushroom Cultivation Training starting on the 10th of next month. Register at the center.",
      "🛑 Important: Maintain substrate moisture levels strictly between 65-70% during spawn run."
    ],
    relatedLinks: ["Mushroom Research Center", "Training Schedules", "Spawn Availability"],
    subDetails: {
      "Button Mushroom": {
        about: "tarun Dutta Button Mushroom (Agaricus bisporus) is the most widely cultivated mushroom variety at GBPUA&T. It requires premium pasteurized compost and highly regulated climate-controlled crop rooms for commercial success.",
        guidelines: [
          { step: "Temp Window", detail: "Maintain spawn run temperature at exactly 22°C to 24°C, then lower to 16°C to 18°C for cropping." },
          { step: "Casing Layer", detail: "Apply a clean 3-4 cm casing layer of well-rotted farmyard manure and coir pith mixture." },
          { step: "Hygiene Control", detail: "Spray university-approved bio-fungicides to protect pins against cobweb mold infections." }
        ],
        videos: [
          { id: 1, title: "Button Mushroom Compost Sowing & Casing Rules", duration: "15:10", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
          { id: 2, title: "Pinhead Optimization Protocols", duration: "10:30", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        notices: [
          { text: "💥 Alert: Button Mushroom spawn slots for winter cultivation cycles are filling up fast.", pdfUrl: "https://www.gbpuat.ac.in/notices/button_spawn_booking.pdf" },
          { text: "📅 Compost collection windows are open from 8:00 AM to 1:00 PM at the Pantnagar farm yard.", pdfUrl: "" }
        ],
        marketRates: [
          { item: "Premium Button Spawn", unit: "Per 1 Kg Pack", price: "₹ 90", state: "In Stock" },
          { item: "Ready Layer Casing Mix", unit: "Per 50 Kg Bag", price: "₹ 350", state: "Pre-order Required" }
        ]
      },
      "Oyster Mushroom": {
        about: "Oyster Mushroom (Pleurotus species) is perfect for small-scale rural setups. It requires no specialized high-tech climate control infrastructure and thrives on clean, pasteurized agricultural straw residues.",
        guidelines: [
          { step: "Substrate Prep", detail: "Boil clean wheat straw pieces in water for 45 minutes or steam pasteurize overnight." },
          { step: "Incubation", detail: "Keep spawned poly-bags in complete darkness for 15-20 days until spawn run is white." },
          { step: "Cropping Space", detail: "Cut clean vertical slits in the plastic sheets, increase humidity to 85%, and allow light." }
        ],
        videos: [
          { id: 1, title: "Low-Cost Oyster Mushroom Bag Packing Steps", duration: "11:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
          { id: 2, title: "Straw Pasteurization Setup Tutorial", duration: "07:45", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        notices: [
          { text: "🍄 Oyster Mushroom spawn varieties (Dhingri) can be bought instantly at discount retail rates this week.", pdfUrl: "" }
        ],
        marketRates: [
          { item: "Oyster Spawn (Dhingri)", unit: "Per 1 Kg Pack", price: "₹ 80", state: "In Stock" },
          { item: "Dried Oyster Products", unit: "Per 250g Box", price: "₹ 200", state: "In Stock" }
        ]
      },
      "Milky Mushroom": {
        about: "Milky Mushroom (Calocybe indica) is a tropical variety native to India. It handles hot summer temperatures well and features a long post-harvest shelf life.",
        guidelines: [{ step: "Summer Temperature", detail: "Maintain cropping room temperature between 30°C and 35°C with relative humidity at 80-85%." }],
        videos: [{ id: 1, title: "Summer Milky Mushroom Cropping Rooms Setup", duration: "12:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "📅 Milky mushroom summer spawn orders are currently open for booking at the central lab desk.", pdfUrl: "" }],
        marketRates: [{ item: "Certified Milky Mushroom Spawn", unit: "Per 1 Kg Pack", price: "₹ 95", state: "In Stock" }]
      },
      "Mushroom Processing": {
        about: "Focuses on post-harvest value addition techniques, such as hot-air tray dehydration, mushroom powder milling, and pickling setups.",
        guidelines: [{ step: "Dehydration Rules", detail: "Dry fresh mushrooms at 55°C for 8-10 hours until crisp, reducing total moisture to less than 10%." }],
        videos: [{ id: 1, title: "Mushroom Powder Formulation and Vacuum Canning", duration: "10:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "📝 Commercial mushroom pickling recipe files have been uploaded to the dashboard resource logs.", pdfUrl: "https://www.gbpuat.ac.in/recipes/mushroom_pickle.pdf" }],
        marketRates: [{ item: "Pure Sundried Oyster Powder", unit: "Per 500g Jar", price: "₹ 450", state: "In Stock" }]
      }
    }
  },
  { 
    id: 8, 
    title: "Student Mart (EC)", 
    desc: "Buy University Produce", 
    image: "images/img7.jpg",
    aboutDept: "The Student Mart acts as a direct-to-consumer bridge, letting farmers and citizens purchase officially verified organic seeds, certified plant saplings, pure dairy products, and processed items created across university campuses.",
    subCategories: ["Organic Seeds", "Plant Saplings", "Dairy Products", "Processed Goods"],
    incharge: {
      name: "Dr. Poonam Malik",
      role: "Mart Manager & Farm Produce Quality Inspector",
      contact: "+91-5944-233458",
      email: "studentmart.seeds[at]gmail[dot]com"
    },
    notices: [
      "🌱 Certified organic vegetable seed packets are now in stock for the current sowing cycle.",
      "🥭 High-yield grafted mango and lemon saplings are ready for collection at the university nursery outlet.",
      "🥛 Fresh Pantnagar ghee distribution timings shifted: Now open 9:00 AM to 4:00 PM."
    ],
    relatedLinks: ["University Store Locator", "Organic Certification", "Student Mart Initiatives"],
    subDetails: {
      "Organic Seeds": {
        about: "Provides certified, university-grown seed lots for seasonal vegetables and field crops, verified for maximum germination viability.",
        guidelines: [{ step: "Germination Verification", detail: "Store seed packs in dark, cool, humidity-free cabinets to preserve seed vigor values." }],
        videos: [{ id: 1, title: "Pantnagar Seed Processing and Testing Standards", duration: "12:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🌱 Seasonal vegetable seed packets are fully stocked at the retail mart checkout counter.", pdfUrl: "" }],
        marketRates: [{ item: "Certified Hybrid Tomato Seeds Set", unit: "Per 100g Seed Pouch", price: "₹ 150", state: "In Stock" }]
      },
      "Plant Saplings": {
        about: "Supplies high-yield fruit grafts, timber saplings, and tissue-cultured medicinal flora straight from the university nursery.",
        guidelines: [{ step: "Planting Care", detail: "Drench sapling root balls with microbial bio-protectants during field transplanting to mitigate transplant shock." }],
        videos: [{ id: 1, title: "Transplanting Soft-Tissue Fruit Grafts Safely", duration: "10:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🥭 Grafted mango and lemon saplings are ready for loading at Nursery Sector 3.", pdfUrl: "https://www.gbpuat.ac.in/notices/nursery_stock_2026.pdf" }],
        marketRates: [{ item: "Elite Amrapali Mango Grafted Sapling", unit: "Per Individual Sapling", price: "₹ 60", state: "In Stock" }]
      },
      "Dairy Products": {
        about: "Distributes pasteurized milk, cultured butter, clarified ghee, and milk paneer produced at the university's dairy research center.",
        guidelines: [{ step: "Cold Chain Rule", detail: "Maintain storage temperatures strictly below 4°C to preserve structural freshness parameters." }],
        videos: [{ id: 1, title: "Standardized Testing and Processing of Milk at Pantnagar", duration: "11:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🥛 Fresh Pantnagar clarified ghee distribution timing: 9:00 AM to 4:00 PM on weekdays.", pdfUrl: "" }],
        marketRates: [{ item: "Pure Pantnagar Cow Ghee Tin", unit: "Per 1 Litre Sealed Tin", price: "₹ 680", state: "In Stock" }]
      },
      "Processed Goods": {
        about: "Features commercial shelf-ready items like processed honey jar lots, value-added spice powders, and campus-bottled squashes.",
        guidelines: [{ step: "Batch Verification", detail: "Scan printed back labels to trace chemical parameters and processing dates." }],
        videos: [{ id: 1, title: "Spice Processing and Dehydration Facilities Overview", duration: "08:30", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "📦 Small-scale farmer groups can submit products for processing validation metrics on Wednesdays.", pdfUrl: "https://www.gbpuat.ac.in/notices/shg_guidelines.pdf" }],
        marketRates: [{ item: "Pure Organic Honey (Apiary Collected)", unit: "Per 1 Kg Sealed Bottle", price: "₹ 320", state: "In Stock" }]
      }
    }

    
  },

   { 
    id: 9, 
    title: "Student Mart (EC)", 
    desc: "Buy University Produce", 
    image: "images/img7.jpg",
    aboutDept: "The Student Mart acts as a direct-to-consumer bridge, letting farmers and citizens purchase officially verified organic seeds, certified plant saplings, pure dairy products, and processed items created across university campuses.",
    subCategories: ["Organic Seeds", "Plant Saplings", "Dairy Products", "Processed Goods"],
    incharge: {
      name: "Dr. Poonam Malik",
      role: "Mart Manager & Farm Produce Quality Inspector",
      contact: "+91-5944-233458",
      email: "studentmart.seeds[at]gmail[dot]com"
    },
    notices: [
      "🌱 Certified organic vegetable seed packets are now in stock for the current sowing cycle.",
      "🥭 High-yield grafted mango and lemon saplings are ready for collection at the university nursery outlet.",
      "🥛 Fresh Pantnagar ghee distribution timings shifted: Now open 9:00 AM to 4:00 PM."
    ],
    relatedLinks: ["University Store Locator", "Organic Certification", "Student Mart Initiatives"],
    subDetails: {
      "Organic Seeds": {
        about: "Provides certified, university-grown seed lots for seasonal vegetables and field crops, verified for maximum germination viability.",
        guidelines: [{ step: "Germination Verification", detail: "Store seed packs in dark, cool, humidity-free cabinets to preserve seed vigor values." }],
        videos: [{ id: 1, title: "Pantnagar Seed Processing and Testing Standards", duration: "12:50", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🌱 Seasonal vegetable seed packets are fully stocked at the retail mart checkout counter.", pdfUrl: "" }],
        marketRates: [{ item: "Certified Hybrid Tomato Seeds Set", unit: "Per 100g Seed Pouch", price: "₹ 150", state: "In Stock" }]
      },
      "Plant Saplings": {
        about: "Supplies high-yield fruit grafts, timber saplings, and tissue-cultured medicinal flora straight from the university nursery.",
        guidelines: [{ step: "Planting Care", detail: "Drench sapling root balls with microbial bio-protectants during field transplanting to mitigate transplant shock." }],
        videos: [{ id: 1, title: "Transplanting Soft-Tissue Fruit Grafts Safely", duration: "10:40", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🥭 Grafted mango and lemon saplings are ready for loading at Nursery Sector 3.", pdfUrl: "https://www.gbpuat.ac.in/notices/nursery_stock_2026.pdf" }],
        marketRates: [{ item: "Elite Amrapali Mango Grafted Sapling", unit: "Per Individual Sapling", price: "₹ 60", state: "In Stock" }]
      },
      "Dairy Products": {
        about: "Distributes pasteurized milk, cultured butter, clarified ghee, and milk paneer produced at the university's dairy research center.",
        guidelines: [{ step: "Cold Chain Rule", detail: "Maintain storage temperatures strictly below 4°C to preserve structural freshness parameters." }],
        videos: [{ id: 1, title: "Standardized Testing and Processing of Milk at Pantnagar", duration: "11:15", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "🥛 Fresh Pantnagar clarified ghee distribution timing: 9:00 AM to 4:00 PM on weekdays.", pdfUrl: "" }],
        marketRates: [{ item: "Pure Pantnagar Cow Ghee Tin", unit: "Per 1 Litre Sealed Tin", price: "₹ 680", state: "In Stock" }]
      },
      "Processed Goods": {
        about: "Features commercial shelf-ready items like processed honey jar lots, value-added spice powders, and campus-bottled squashes.",
        guidelines: [{ step: "Batch Verification", detail: "Scan printed back labels to trace chemical parameters and processing dates." }],
        videos: [{ id: 1, title: "Spice Processing and Dehydration Facilities Overview", duration: "08:30", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
        notices: [{ text: "📦 Small-scale farmer groups can submit products for processing validation metrics on Wednesdays.", pdfUrl: "https://www.gbpuat.ac.in/notices/shg_guidelines.pdf" }],
        marketRates: [{ item: "Pure Organic Honey (Apiary Collected)", unit: "Per 1 Kg Sealed Bottle", price: "₹ 320", state: "In Stock" }]
      }
    }

    
  }
];