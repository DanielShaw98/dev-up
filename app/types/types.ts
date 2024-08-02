import { User, File } from "@prisma/client";

export interface ProjectWithDetails {
  id: number;
  title: string;
  description: string;
  name?: string;
  styles?: string;
  tools?: string;
  createdAt: Date;
  updatedAt: Date;
  author: User;
  files?: File[];
}
