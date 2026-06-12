import { theme } from "@/styles/theme";
import { IoIosMoon } from "react-icons/io";

const Sleep = () => {
  return (
    <div
      className="h-full rounded-3xl border p-3 "
      style={{
        backgroundColor: theme.colors.bg2,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="flex justify-between">
        <h1
          style={{ color: theme.colors.text }}
          className="flex items-center text-md font-semibold tracking-wider"
        >
          <IoIosMoon style={{ color: theme.colors.purple }} />
          Sleep
        </h1>

        <span style={{ color: theme.colors.textSecondary }}>8 hours</span>
      </nav>
      <section className="my-10">
        <div className="flex items-center gap-3">
          <div
            className="h-3 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: theme.colors.textSecondary }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: "60%",
                background: `linear-gradient(90deg, ${theme.colors.purple} 30%, ${theme.colors.blue} 70%)`,
              }}
            />
          </div>

          <span style={{ color: theme.colors.textSecondary }}>60%</span>
        </div>

        <span
          className="mt-2 block text-left"
          style={{ color: theme.colors.textSecondary }}
        >
          05:00 PM - 01:00 AM
        </span>
      </section>
    </div>
  );
};

export default Sleep;
