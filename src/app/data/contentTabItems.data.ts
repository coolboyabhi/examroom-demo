import { ContentItem, ContentTabItem, SelectedColor } from "../types/content.type";

export const CONTENT_TAB_ITEMS: ContentTabItem[] = [
    {
        for: ['ALL', 'SUPPORT_OPERATIONAL'],
        icon: 'done',
        label: 'Examroom',
        uptime: '100%',
        link: ''
    },
    {
        for: ['ALL', 'SERVER_DB'],
        icon: 'done',
        label: 'Item Banking',
        uptime: '99.9%',
        link: ''
    },
    {
        for: ['ALL', 'SERVER_DB'],
        icon: 'done',
        label: 'Edison A',
        uptime: '100%',
        link: ''
    },
    {
        for: ['ALL', 'SERVER_DB'],
        icon: 'done',
        label: 'Einstein',
        uptime: '100%',
        link: ''
    },
    {
        for: ['ALL', 'SERVER_DB'],
        icon: 'done',
        label: 'ExamLock',
        uptime: '100%',
        link: ''
    },
    {
        for: ['ALL', 'BUSINESS_OPERATIONAL'],
        icon: 'done',
        label: 'NIC',
        uptime: '100%',
        link: ''
    },
    {
        for: ['ALL', 'BUSINESS_OPERATIONAL'],
        icon: 'done',
        label: 'Test Site',
        uptime: '100%',
        link: ''
    },
];

export const CONTENT_ITEMS: ContentItem[] = [
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'Database',
        link: ''
    },
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'API Server',
        link: ''
    },
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'Microservices',
        link: ''
    },
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'UI Servers',
        link: ''
    },
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'Incidents',
        link: ''
    },
    {
        type: 'ICON',
        for: ['SERVER_DB'],
        icon: 'data_table',
        label: 'Escalations',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '479',
        label: 'Agents Active',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '2.00 %',
        label: 'Abandoned Rate',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '00:05:29',
        label: 'Average Handle Time',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '00:05:29',
        label: 'Average Speed Of Answer',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '86.34 %',
        label: 'CSAT',
        link: ''
    },
    {
        type: 'DATA',
        for: ['BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'],
        data: '32.34 %',
        label: 'Contentment Rate (IVR)',
        link: ''
    },
    
];

export const SELECTED_COLOR: SelectedColor = {
    color: 'text-teal-500',
    bg: 'bg-teal-500',
    border: 'border-teal-500'
};