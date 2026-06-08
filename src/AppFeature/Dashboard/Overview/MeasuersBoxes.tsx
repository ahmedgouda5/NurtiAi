import { theme } from "@/styles/theme";

type MeasuresCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon?: React.ReactNode;
  valueColor: string;
  progress?: number;
  progressColor?: [string, string];
};

export function MeasuersBoxes({
  title,
  value,
  subtitle,
  icon,
  valueColor,
  progress,
  progressColor,
}: MeasuresCardProps) {
  return (
    <div
      className="h-full rounded-3xl border p-5 lg:p-6"
      style={{
        backgroundColor: theme.colors.bg2,
        borderColor: theme.colors.border,
      }}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3
            className="text-xs font-semibold uppercase tracking-wider md:text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            {title}
          </h3>

          {icon}
        </div>

        <div>
          <h2 className={`text-3xl font-bold  ${valueColor}`}>{value}</h2>

          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: theme.colors.textSecondary }}
          >
            {subtitle}
          </p>
        </div>

        {progress !== undefined && (
          <div
            className="mt-auto h-1.5 w-full overflow-hidden rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${progressColor?.[0]} 0%, ${progressColor?.[1]} 100%)`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
