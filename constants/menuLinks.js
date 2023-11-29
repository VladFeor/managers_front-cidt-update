import { useUserStore } from '~/store';

const hasProjectId = computed(() => useUserStore().getUserProjectId);

const menuData = {
  dashboard: {
    name: 'Dashboard',
    img: 'Dashboard',
    to: '/',
  },
  talents: {
    name: 'Talents',
    img: 'Talents',
    to: '/leaderboard',
  },
  project: {
    name: 'Project',
    img: 'Project',
    to: '/projects',
  },
  projects: {
    name: 'Projects',
    img: 'Project',
    to: '/projects',
  },
  tasks: {
    name: 'Tasks',
    img: 'Tasks',
    to: '/tasks',
  },
  requests: {
    name: 'Requests',
    img: 'Request',
    to: '/requests',
  },
  managers: {
    name: 'Managers',
    img: 'Managers',
    to: '/managers',
  },
  referrals: {
    name: 'Referrals',
    img: 'Refferals',
    to: '/referrals',
  },
  reports: {
    name: 'Reports',
    img: 'Reports',
    to: '/reports',
  },
  automations: {
    name: 'Automations',
    img: 'Automations',
    to: '/automations',
  },
};

const {
  reports,
  referrals,
  dashboard,
  talents,
  projects,
  tasks,
  requests,
  managers,
  automations,
  project,
} = menuData;

const MENU_LINKS = {
  isProjectOwner: [dashboard, talents, project, tasks, referrals, managers, automations, requests],
  isSuperAdmin: [dashboard, talents, projects, tasks, requests, managers, referrals, reports],
  isProjectAdministrator: [dashboard, talents, project, tasks, managers, referrals],
  isAdminSupport: [dashboard, talents, projects, tasks, managers, automations],
  isProjectManager: [dashboard, talents, project, tasks],
  isCatapultManager: hasProjectId.value
    ? [dashboard, talents, projects, tasks, requests, managers]
    : [dashboard, talents, projects, tasks, requests],
};

export default MENU_LINKS;
