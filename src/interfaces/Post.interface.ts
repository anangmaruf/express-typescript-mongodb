export interface IPost {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    components: object[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}