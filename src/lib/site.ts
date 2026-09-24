/* FitForge site data: brand, images, programs, schedule, pricing, testimonials, posts */

export const IMAGES = {
  hero: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3d495a3a1e3c.png",
  heroAlt: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6fb4fb122246.jpg",
  about: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/594e2230d750.jpg",
  strength: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3f9285733654.jpg",
  hiit: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/44beb837d064.jpg",
  mobility: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b90bc4b9d95a.jpg",
  nutrition: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d5f439278f6b.jpg",
  boxing: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/24af96ba56c0.jpg",
  online: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/14522564050b.jpg",
  ctaBg: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2f8cc89af832.jpg",
  team1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ffed46f80ba4.jpg",
  team2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/416b243de1b7.jpg",
  team3: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/92d97e6ff717.jpg",
  client1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/39fd654339c7.jpeg",
  client2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/413ee4e997a7.jpg",
  client3: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2a31d27662fd.jpg",
  blog1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1e2963b720ba.jpg",
  blog2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/18234e9280e4.jpg",
  blog3: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/19c1e9b9e3cc.jpg",
};

export const BRAND = {
  name: "FitForge",
  fullName: "FitForge Personal Training Studio",
  tagline: "Stronger starts here",
  phone: "+234 802 345 7890",
  email: "hello@fitforge.ng",
  address: "14B Admiralty Way, Lekki Phase 1, Lagos",
  hours: "Mon to Sat: 6:00am to 9:00pm  •  Sun: Open gym 4:00pm to 7:00pm",
  shortHours: "Mon to Sat 6am to 9pm",
  designer: "hanifah Studio",
  designerUrl: "https://preview-chat-8dbaa95e-ab4d-48e2-9030-1e7c59b14b99.space-z.ai/website-offer",
};

export const HERO_SLIDES = [
  {
    kicker: "Personal training studio in Lekki Phase 1, Lagos",
    title: ["Stronger", "starts here."],
    text: "One on one coaching built around your body, your schedule and your goals. No guesswork and no pressure, just steady progress you can see and feel.",
  },
  {
    kicker: "Coaching for busy people",
    title: ["Training that", "fits your life."],
    text: "Sessions from 6 in the morning to 9 at night, six days a week. Your plan moves with your calendar so training stops being the thing you keep quitting.",
  },
  {
    kicker: "Real coaching, real results",
    title: ["Six weeks in,", "everything changes."],
    text: "Most clients sleep better and feel lighter by week three. By week six, clothes fit differently and stairs stop being a chore. That is how we work.",
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years coaching" },
  { value: 480, suffix: "+", label: "Clients trained" },
  { value: 9200, suffix: "+", label: "Sessions delivered" },
  { value: 94, suffix: "%", label: "Still training after one year" },
];

export const WHY_POINTS = [
  {
    title: "Programs written for you, not copied",
    text: "Every plan starts with a movement screen and a real conversation about your history. We build from there, and we adjust it every single week.",
  },
  {
    title: "Coaches who actually watch",
    text: "You will never be left guessing on form. A coach is next to you, counting your reps and calling out cues from the first warmup to the last set.",
  },
  {
    title: "Progress you can measure",
    text: "We test strength, mobility and body composition every six weeks. When numbers move, you know it is working. When they stall, we change the plan.",
  },
  {
    title: "A floor with zero egos",
    text: "Big gyms can feel like a stage. Here, nobody films you and nobody stares. Beginners train next to veterans and everyone just gets to work.",
  },
];

export type Program = {
  slug: string;
  title: string;
  image: string;
  tag: string;
  duration: string;
  excerpt: string;
  body: string[];
  forWho: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "personal-training",
    title: "One on One Personal Training",
    image: IMAGES.strength,
    tag: "Private coaching",
    duration: "45 to 60 min sessions",
    excerpt:
      "Full attention, every rep. We plan each session around your goal, your injuries and your pace, then track the numbers so progress is not a feeling but a fact.",
    body: [
      "This is the most personal thing we do. Before your first session we sit down for a movement screen and talk through your training history, old injuries, schedule and what you actually want out of this. From there your coach writes a program that belongs to you alone.",
      "Sessions run 45 to 60 minutes and can be booked from 6am to 9pm, Monday to Saturday. Every six weeks we retest your strength, mobility and body composition, then rebuild the plan around the results. You always know what you are working toward and why.",
      "Most private clients train two to three times a week. Some chase their first pull up, some want to deadlift double their body weight and plenty just want to move without their back complaining. All of it counts.",
    ],
    forWho: "Best for beginners, people returning from a long break, and anyone who wants undivided attention.",
  },
  {
    slug: "small-group-strength",
    title: "Small Group Strength",
    image: IMAGES.hiit,
    tag: "Max 6 people",
    duration: "55 min sessions",
    excerpt:
      "The energy of a class with the eye of a coach. Capped at six people so your form still gets watched, with barbells, dumbbells and honest work.",
    body: [
      "Groups are capped at six, which is the sweet spot. You get the push of training next to other people, and the coach still has time to correct every squat and every press. Sessions follow a written program, so week builds on week instead of starting from zero each Monday.",
      "A typical session opens with joint prep and a warmup, moves into a main strength block on the barbell or dumbbells, then finishes with a short conditioning piece that leaves you tired but not destroyed. We are not fans of workouts that put you on the floor for two days.",
      "Timetable slots run early morning, lunchtime and evening. Members usually pick two or three fixed days a week and keep them, which is honestly half the battle.",
    ],
    forWho: "Best for anyone who wants structure and community without the price of private coaching.",
  },
  {
    slug: "fat-loss-kickstart",
    title: "Fat Loss Kickstart",
    image: IMAGES.boxing,
    tag: "8 week program",
    duration: "3 sessions weekly",
    excerpt:
      "An eight week sprint for people who want to see the scale and the mirror move. Training, simple nutrition targets and a weekly check in with your coach.",
    body: [
      "Eight weeks, three sessions a week, one clear target. The training mixes circuit work, pads and intervals, so you burn calories without living on a treadmill. Intensity is scaled to where you are today, not where some chart says you should be.",
      "The food side stays simple on purpose. You get daily protein and calorie targets, a template for building plates, and no list of forbidden foods. Your coach checks in once a week, looks at your log and makes one or two adjustments. Small changes, kept honestly, beat drastic ones every time.",
      "Clients who complete the kickstart typically lose 4 to 9kg and, more importantly, learn habits that keep the weight off. The goal is that you never need to buy this program twice.",
    ],
    forWho: "Best for people with a deadline, an event or simply a fire that needs lighting.",
  },
  {
    slug: "mobility-and-recovery",
    title: "Mobility and Recovery",
    image: IMAGES.mobility,
    tag: "Low impact",
    duration: "45 min sessions",
    excerpt:
      "For stiff desks, heavy weekends and stubborn joints. Guided mobility, breathing and tissue work that keeps you training instead of nursing injuries.",
    body: [
      "This is the quiet work that keeps everything else possible. Sessions blend controlled stretching, joint circles, breathing drills and soft tissue work with balls and rollers. You leave standing taller and breathing easier, not drenched.",
      "Desk workers with locked up hips and shoulders do brilliantly here, and so do our harder training members who use one mobility session a week to stay pain free. We also run dedicated recovery blocks for clients coming back after injury, in step with what their physio says.",
      "Wear comfortable clothes. Everything else, including mats and tools, is on the floor waiting for you.",
    ],
    forWho: "Best for desk workers, older adults, and anyone training hard who wants to stay loose and healthy.",
  },
  {
    slug: "nutrition-coaching",
    title: "Nutrition Coaching",
    image: IMAGES.nutrition,
    tag: "Habits based",
    duration: "Monthly coaching",
    excerpt:
      "No detox teas and no banned foods. A coach helps you fix how you actually eat, one habit at a time, with targets that survive Lagos traffic and busy weeks.",
    body: [
      "Most people roughly know what healthy eating looks like. The problem is doing it on a Tuesday when work ran late and there is nothing at home. That is exactly what this coaching is for. We build your habits around your real life, not around a fantasy meal plan.",
      "You start with a simple review of your current week, then set two or three targets, like protein at every meal or prepping two dinners ahead. We check in weekly, review what worked and adjust. Nothing is banned. Party jollof still has a place in your life.",
      "Nutrition coaching runs month to month and pairs well with any training program, though it also works on its own if training is not your focus right now.",
    ],
    forWho: "Best for anyone tired of extreme diets that end the same way they started.",
  },
  {
    slug: "online-coaching",
    title: "Online Coaching",
    image: IMAGES.online,
    tag: "Train anywhere",
    duration: "Monthly program",
    excerpt:
      "A written plan, a form check by video and a coach in your pocket. For travellers and home trainers who want FitForge programming without the commute.",
    body: [
      "You get a full monthly program built around whatever equipment you have, even if that is a pair of dumbbells and a balcony. Each week you send videos of your main lifts, your coach reviews them and sends back corrections, then updates the next block.",
      "Check ins happen twice a week by message and once a month by video call. It is remarkable how far a nudge at the right moment goes. Clients who train with us online while travelling for work often keep better streaks than they did at a gym.",
      "Pause anytime, resume anytime. Life happens, we understand.",
    ],
    forWho: "Best for frequent travellers, home trainers and former members who moved cities.",
  },
];

export const TEAM = [
  {
    name: "Amara Eze",
    role: "Strength and Conditioning Coach",
    image: IMAGES.team1,
    bio: "Former track athlete. Four years coaching, patient with beginners and ruthless about good form.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Small Group Training",
    image: IMAGES.team2,
    bio: "The loudest cheer on the floor. Runs our morning groups and somehow makes burpees feel fair.",
  },
  {
    name: "Ngozi Balogun",
    role: "Mobility and Nutrition Coach",
    image: IMAGES.team3,
    bio: "Certified nutrition coach and mobility nerd. Believes a stiff body just needs better instructions.",
  },
];

export const PRICING = [
  {
    name: "Group",
    price: "₦65,000",
    period: "per month",
    highlight: false,
    features: [
      "8 small group sessions",
      "Movement screen and goal setting",
      "Progress check every 6 weeks",
      "Member WhatsApp community",
    ],
    cta: "Start with Group",
  },
  {
    name: "Private",
    price: "₦220,000",
    period: "per month",
    highlight: true,
    badge: "Most popular",
    features: [
      "12 one on one sessions",
      "Fully personalised program",
      "Nutrition targets and weekly check in",
      "Body composition testing",
      "Flexible booking, 6am to 9pm",
    ],
    cta: "Book Private Coaching",
  },
  {
    name: "Online",
    price: "₦40,000",
    period: "per month",
    highlight: false,
    features: [
      "Custom monthly program",
      "Video form reviews",
      "Twice weekly coach check in",
      "Train from anywhere",
    ],
    cta: "Go Online",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I joined in January after my doctor read my numbers to me like a court verdict. Ten months later I am down 14kg, off one medication and I actually look forward to 6am sessions. Dapo and the team made it feel possible from day one.",
    name: "Chinedu O.",
    detail: "Banker, member for 10 months",
    image: IMAGES.client1,
  },
  {
    quote:
      "Two babies and a desk job left me feeling like a stranger in my own body. The small group sessions were exactly what I needed. Six people, one coach, no judgement. My deadlift went from empty bar to 80kg and my back pain is gone.",
    name: "Tolu A.",
    detail: "Marketing manager, member for 14 months",
    image: IMAGES.client2,
  },
  {
    quote:
      "At 52 I thought strength training was for young people. Coach Amara proved me wrong in the gentlest way. I garden, I climb my stairs without pausing and my grandchildren cannot keep up with me. Best money I spend every month.",
    name: "Femi A.",
    detail: "Retired engineer, member for 2 years",
    image: IMAGES.client3,
  },
];

export type ScheduleRow = {
  time: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
};

export const SCHEDULE: ScheduleRow[] = [
  {
    time: "6:00am",
    mon: "Small Group Strength",
    tue: "Fat Loss Kickstart",
    wed: "Small Group Strength",
    thu: "Fat Loss Kickstart",
    fri: "Small Group Strength",
    sat: "Team Workout",
  },
  {
    time: "7:00am",
    mon: "Private Coaching",
    tue: "Private Coaching",
    wed: "Private Coaching",
    thu: "Private Coaching",
    fri: "Private Coaching",
    sat: "Mobility and Recovery",
  },
  {
    time: "12:30pm",
    mon: "Fat Loss Kickstart",
    tue: "Mobility and Recovery",
    wed: "Fat Loss Kickstart",
    thu: "Mobility and Recovery",
    fri: "Fat Loss Kickstart",
    sat: "Private Coaching",
  },
  {
    time: "6:00pm",
    mon: "Small Group Strength",
    tue: "Private Coaching",
    wed: "Small Group Strength",
    thu: "Private Coaching",
    fri: "Small Group Strength",
    sat: "Closed",
  },
  {
    time: "7:00pm",
    mon: "Fat Loss Kickstart",
    tue: "Small Group Strength",
    wed: "Fat Loss Kickstart",
    thu: "Small Group Strength",
    fri: "Team Workout",
    sat: "Closed",
  },
];

export type Post = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    id: "protein",
    title: "You are probably not eating enough protein, here is how to fix it this week",
    category: "Nutrition",
    date: "September 8, 2026",
    readTime: "4 min read",
    image: IMAGES.blog2,
    excerpt:
      "Most of the clients who walk through our door eat far less protein than they think. Here is the simple maths we use, and three changes that take zero cooking skill.",
    body: [
      "Ask most new clients what they ate yesterday and the answer sounds healthy enough. Rice, some chicken, maybe salad at lunch. Then we add it up and the protein lands at 40 or 50 grams for the whole day. For anyone training, that is less than half of what the body needs to actually build anything.",
      "The target we use is simple. Roughly 1.6 grams of protein per kilogram of body weight, spread across the day. For a 75kg person that is about 120 grams, which sounds like a lot until you break it down: eggs at breakfast, chicken or fish at lunch, some yoghurt or a shake in the evening, and you are basically there.",
      "Three changes fix most of this without cooking anything fancy. First, put a protein source on your plate first, then build around it. Second, keep boiled eggs and plain yoghurt where you can see them, because food you forget about does not get eaten. Third, double the portion you think you need at dinner and save half for lunch tomorrow.",
      "Do that for two weeks and training starts to feel different. Recovery speeds up, hunger stops running your afternoon, and the numbers on the bar start moving again. It is the least glamorous advice we give and it works more reliably than anything else.",
    ],
  },
  {
    id: "dumbbell-workout",
    title: "The 20 minute dumbbell workout we give every new client",
    category: "Training",
    date: "August 25, 2026",
    readTime: "3 min read",
    image: IMAGES.blog1,
    excerpt:
      "Short on time or waiting for your first session? This is the exact routine we hand out, six moves, two rounds, one pair of dumbbells and no excuses needed.",
    body: [
      "New clients always ask what they can do at home before their program starts. This is the one we hand out. You need two dumbbells, a patch of floor and 20 minutes. It will not build a six pack but it will wake up every joint that a desk has put to sleep.",
      "The circuit is six moves. Squats, push ups, rows, reverse lunges, overhead press and a plank. Do 10 reps of each, 30 seconds for the plank, then rest for a minute and go again. Two rounds to start, three when it stops feeling honest.",
      "The order is deliberate. Legs and push alternate with pull and core, so you keep moving without any single muscle quitting early. Move slowly enough that the last two reps of every set are a little ugly. If everything looks perfect, the dumbbells are too light.",
      "Do this two or three times a week and your first month with us will feel very different. Your coach will still rebuild everything properly, but you will arrive with joints that remember how to work.",
    ],
  },
  {
    id: "sleep",
    title: "Sleep is the supplement you are not taking",
    category: "Recovery",
    date: "August 11, 2026",
    readTime: "4 min read",
    image: IMAGES.blog3,
    excerpt:
      "Two clients, same program, wildly different results. The difference usually is not genetics or effort. It is what happens between the hours of 11pm and 6am.",
    body: [
      "We see it constantly. Two people follow the same plan, eat similarly, show up the same amount. After eight weeks one is flying and the other is dragging. Before blaming age or genetics, we ask about sleep, and the answer explains almost everything.",
      "Training is the stimulus but recovery is where change actually happens. Muscle is rebuilt, hormones rebalance and the nervous system resets while you sleep. Cut that short night after night and you are basically borrowing energy from tomorrow to survive today.",
      "The fixes that matter are boring and effective. A consistent bedtime, even on weekends. A dark room, phone charging outside arm's reach. Caffeine finished before 2pm, since it lingers far longer than people expect. None of this is exciting. All of it works.",
      "If you take one thing from this blog, take this: for two weeks, get seven hours and watch what happens to your energy, your appetite and your mood. Then tell us training is the hard part.",
    ],
  },
  {
    id: "consistency",
    title: "How to stay consistent when work gets crazy",
    category: "Mindset",
    date: "July 28, 2026",
    readTime: "3 min read",
    image: IMAGES.strength,
    excerpt:
      "Every busy season ends the same way for some people: gym gone, progress gone. Here is the exact strategy our most consistent members use to protect their training.",
    body: [
      "Busy seasons are not a surprise. Year end, quarterly reviews, wedding events, they all arrive on schedule, yet every time they show up, training is the first thing thrown out. It does not have to be.",
      "The trick our most consistent members use is embarrassingly simple: they shrink the plan instead of abandoning it. During normal weeks they train three times. During chaos weeks they train once, a 30 minute session we pre agreed. That single kept promise keeps the identity alive, and identity is what drives habits, not motivation.",
      "Book sessions like meetings, on the calendar, with the same respect. Morning slots survive chaos best because nothing has collided with 6am yet. Members who train after work miss three times as many sessions during busy weeks, the data in our booking system does not lie.",
      "One session a week for six weeks beats zero sessions for six weeks, every single time. Come busy season, do less, but never do nothing.",
    ],
  },
  {
    id: "cardio-weights",
    title: "Cardio or weights first? An honest answer",
    category: "Training",
    date: "July 14, 2026",
    readTime: "3 min read",
    image: IMAGES.hiit,
    excerpt:
      "The internet treats this like a holy war. Here is what we actually tell clients, and why the answer matters less than what you do with the other 23 hours.",
    body: [
      "Someone asks this in the studio at least twice a month, usually with the tone of someone expecting a secret. The honest answer: for most people, on most goals, it matters far less than they fear.",
      "If your main goal is strength, lift first while you are fresh, then do 10 to 15 minutes of easy cardio if you want it. If your main goal is running a race, run first and lift after. The thing you care about most gets the best version of you. That is the whole science.",
      "What matters infinitely more is total volume across the week. Two strength sessions and 8,000 daily steps will beat one perfect gym session followed by a sofa, regardless of the order inside it. We have watched people agonise over sequencing while averaging 4,000 steps a day.",
      "So here is permission to stop researching and start moving. Pick the order that gets you through the door happiest. Consistency has already settled this debate.",
    ],
  },
  {
    id: "early-workout",
    title: "What to eat before a 6am workout",
    category: "Nutrition",
    date: "June 30, 2026",
    readTime: "3 min read",
    image: IMAGES.nutrition,
    excerpt:
      "Our 6am sessions are packed, and this question comes with them every week. Here is what actually works when your stomach wakes up after your alarm.",
    body: [
      "Training at 6am means eating at 5:40am, and most bodies are not thrilled about that. The good news is that for a session under an hour, you need less than you think.",
      "If you can stomach something small, go for fast and light: a banana, two slices of toast with a little honey, or a handful of dates. The goal is a bit of quick energy, not a meal. Save protein and real food for breakfast after, when your body is ready to use it.",
      "If eating that early makes you feel sick, skip it. Training fasted for 45 minutes is completely fine for most people. Bring water, maybe a cup of coffee if you like, and eat a proper breakfast within an hour of finishing. The myth that you must eat immediately or the workout is wasted has been retired for years.",
      "The only real mistake is a heavy meal. Porridge, fried food or a protein bar the size of your forearm at 5:40am will meet you again on the floor around 6:20. Keep it light, keep it simple, and let breakfast do the real work after.",
    ],
  },
];

export const FAQS = [
  {
    q: "I have never trained before. Is this for me?",
    a: "Yes, and honestly you are our favourite kind of client. Beginners get a full movement screen, a program built from zero and a coach beside you for every session. Nobody is thrown into a class to sink or swim.",
  },
  {
    q: "How do I start?",
    a: "Book a free trial session. We will show you the studio, talk through your goals and put you through a taster session. If it feels right, we recommend a program. No pressure and no pushy sales talk.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothes, trainers and a water bottle. Towels, mats and everything else are on us. First timers should arrive 10 minutes early for a quick tour.",
  },
  {
    q: "Can I pause my membership?",
    a: "Yes. Travel, illness, busy season, life happens. Members can pause for up to two months a year at no cost. We would rather you come back than quit.",
  },
];
