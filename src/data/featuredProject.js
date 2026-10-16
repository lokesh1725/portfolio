// Primary featured project. Only documented, verifiable contributions are listed.
export const featuredProject = {
  name: 'Medsy Question Bank Metrics Dashboard',
  subtitle: 'Featured Project',
  company: 'Blue Silicon Infotech Pvt. Ltd.',
  summary:
    'Worked on an existing question-bank management application to implement and improve metrics functionality across its frontend and backend.',
  stack: ['Python', 'Flask', 'MongoDB', 'APScheduler', 'JavaScript', 'React-related frontend code', 'REST APIs', 'Git'],
  overview:
    'Medsy is a medical education platform with a question-bank module. My work focused on the metrics side of that module — surfacing meaningful question statistics to the dashboard and keeping those numbers up to date.',
  problem:
    'Question-bank statistics were needed on the dashboard, but the application did not have a reliable way to persist and refresh those metrics. Bringing those numbers together across institute questions, Medsy questions and related filters needed changes across multiple repositories.',
  contributions: [
    'Worked with a multi-repository application, changes spanning the frontend and backend.',
    'Implemented backend functionality for question-bank metrics.',
    'Created the MongoDB collection question_bank_metrics_snapshot.',
    'Implemented scheduled metric snapshot refreshes using APScheduler at midnight in the Asia/Kolkata timezone.',
    'Updated backend controllers, routes and application initialization.',
    'Worked on frontend question-bank metrics components and API utility functions.',
    'Worked with question statistics, institute questions, Medsy questions and related filtering behavior.',
  ],
  architecture: [
    {
      title: 'Admin Dashboard',
      description: 'Where metrics are viewed by administrators and staff.',
    },
    {
      title: 'Frontend API Utilities',
      description: 'JavaScript utility functions that call the question-bank metrics endpoints.',
    },
    {
      title: 'Backend Routes & Controllers',
      description: 'Flask routes and controllers that compute and return question metrics.',
    },
    {
      title: 'MongoDB Snapshot Collection',
      description: 'question_bank_metrics_snapshot stores the latest computed metrics.',
    },
  ],
  scheduledFlow: [
    {
      title: 'Scheduled Refresh',
      description: 'APScheduler triggers a job at midnight (Asia/Kolkata).',
    },
    {
      title: 'Metrics Snapshots',
      description: 'Metrics are recomputed and written to the snapshot collection.',
    },
    {
      title: 'Dashboard Statistics',
      description: 'The dashboard reads the latest snapshot for fast, consistent numbers.',
    },
  ],
  // Screenshots are intentionally left as placeholders — the application is not public.
  screenshots: [
    { src: '', caption: 'Question bank metrics overview (screenshot placeholder)' },
    { src: '', caption: 'Metrics filtering by question type (screenshot placeholder)' },
  ],
  links: {
    // No public repository or live demo is available for this internal application.
    github: '',
    demo: '',
  },
}
