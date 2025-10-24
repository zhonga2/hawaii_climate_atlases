import { useUncertaintyGrids } from "@/hooks/useUncertaintyGrids";
import { Units, Period } from "@/lib";

export default function useUncertaintyData(selectedUnits: Units, selectedPeriod: Period) {
  const {
    asciiGrid,
    isLoading: gridsLoading,
  } = useUncertaintyGrids(selectedUnits, Period[selectedPeriod]);
  const allDataLoaded =
    !!asciiGrid;
  const isLoading =
    gridsLoading;
  return {
    asciiGrid,
    allDataLoaded,
    isLoading,
  }
}
