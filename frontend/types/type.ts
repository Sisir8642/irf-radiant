import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type IconType = ComponentType<LucideProps>;

export type StatCardProps = {
  icon: IconType;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  isInView: boolean;
};

export type FeatureCardProps = {
  icon: IconType;
  title: string;
  delay?: number;
  isInView: boolean;
};
