export interface PageData {
  title: string;
  path: string;
  summary: {
    description: string;
    image?: ResponsiveImageOutput;
  }
  content: {
    description: string;
    attribution: string;
    coverImage?: ResponsiveImageOutput;
    timeline?: {
      description: string;
      image?: ResponsiveImageOutput;
    }[]
  }
}
