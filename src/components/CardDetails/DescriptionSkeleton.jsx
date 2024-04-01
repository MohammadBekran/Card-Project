import { useDarkModeSelector } from "../../redux/darkMode";
import { Skeleton } from "../common/Skeleton";

const DescriptionSkeleton = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div>
      <Skeleton
        width={300}
        height={20}
        baseColor={darkMode && "#0000007e"}
        highlightColor={darkMode && "#0000003b"}
      />
      <Skeleton
        className="w-full"
        height={200}
        baseColor={darkMode && "#0000007e"}
        highlightColor={darkMode && "#0000003b"}
      />
    </div>
  );
};

export { DescriptionSkeleton };
