"use client";
import { Progress } from "@nextui-org/progress";
export const dynamic = "force-dynamic";

export default function SkillProgress({
  label,
  progress,
}: {
  label: string;
  progress: number;
}) {
  return (
    <Progress
      size="md"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        // indicator: "bg-gradient-to-r from-[#a3e635] to-lime-100",
        indicator: "bg-gradient-to-r from-default-50 to-[#a3e635] to-lime-100",
        label: "tracking-wider font-semibold text-foreground/80",
        value: "text-foreground/60",
      }}
      className=" font-Manrope"
      label={label}
      value={progress}
      showValueLabel={true}
    />
  );
}
