import { User, File } from "@prisma/client";

export interface ProjectWithDetails {
  id: number;
  title: string;
  description: string;
  name: string | null;
  styles: string | null;
  tools: string | null;
  createdAt: Date;
  updatedAt: Date;
  author: User;
  files: File[];
}
