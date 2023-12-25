export type ContentLabel = {
    color: string;
    icon: string;
    content: string;
}

export type ContentTabItem = {
    for: Tabs[number][];
    icon: string;
    label: string;
    uptime: string;
    link: string;
}

export type ContentItem = {
    type: 'ICON'
    for: Tabs[number][];
    icon: string;
    label: string;
    link: string;
} | {
    type: 'DATA'
    for: Tabs[number][];
    data: string;
    label: string;
    link: string;
};

export type SelectedColor = {
    color: string;
    bg: string;
    border: string;
};


export type Tabs = ['ALL', 'SERVER_DB', 'BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'];