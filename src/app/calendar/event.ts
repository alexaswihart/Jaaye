export class Event {
    description?: string;
    date?: {
        day: string;
        month: string;
        year: string;
    };
    details?: {
        venue?: string;
        url?: string;
        additionalInfo?: string;
    };
    image?: string;
    isEvent?: boolean;
    isRelease?: boolean;
}