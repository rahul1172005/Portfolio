export interface ContactFormData {
    fullName: string;
    email: string;
    projectType: string;
    budgetRange: string;
    projectDetails: string;
    submittedAt: Date;
    status: 'new' | 'contacted' | 'closed';
}
