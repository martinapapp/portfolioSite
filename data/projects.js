export const projects = [
  {
    title: 'ReelRecs',
    image: 'images/projects/reel-recs.png',
    description: 'ReelRecs is a fullstack conversational movie recommendation chatbot that uses semantic search and RAG to deliver context-aware suggestions. It integrates vector embeddings with PostgreSQL (pgvector), the Gemini API, and a secure Express backend deployed as a single service.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'pgVector', 'RAG', ],
    live: 'https://reelrecs.onrender.com',
    github: 'https://github.com/martinapapp/reelRecs',
  },
  {
    title: 'Sales Dashboard',
    image: 'images/projects/sales-dashboard.png',
    description: 'Paper Like A Boss is a fullstack real-time sales dashboard built with React and Supabase, enabling teams to track deals and visualize performance through live-updating charts. It implements role-based access control, real-time database subscriptions, and secure data handling with PostgreSQL features like RLS, triggers, and relational constraints.',
    tech: ['JavaScript', 'PostgreSQL', 'Data visualization', 'Supabase', 'React'],
    live: 'https://sales-dashboard-metrics.netlify.app/signin',
    github: 'https://github.com/martinapapp/salesDashboard',
  },
  {
    title: 'Assembly Endgame',
    image: 'images/projects/assembly-endgame.png',
    description: 'Assembly Endgame is a Hangman-style word game built with React and TypeScript, focusing on clean state management through derived state and strongly typed component architecture. It emphasizes accessibility (ARIA live regions), dynamic UI behavior, and maintainable design using presentational components and modern tooling.',
    tech: ['TypeScript','React', 'clsx', 'ARIA'],
    live: 'https://assemblyendgame-game.netlify.app/',
    github: 'https://github.com/martinapapp/assemblyEndGame',
  },
  {
    title: 'Spiral Sounds',
    image: 'images/projects/spiral-sounds.png',
    description: 'Spiral Sounds is a fullstack vinyl record store built with Node.js, Express, and SQLite, featuring product browsing, filtering, search, and a session-based shopping cart. It focuses on REST API design, secure authentication with sessions, and a modular architecture using routes, controllers, and middleware.',
    tech: ['Express', 'SQLite', 'bcryptjs', 'session-based auth', 'MVC'],
    live: 'https://spiralsounds-production-3337.up.railway.app/',
    github: 'https://github.com/martinapapp/spiralSounds',
  },
]