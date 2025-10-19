import { useGrids } from "@/hooks/useGrids";
import { Units, Period } from "@/lib";

export default function useUncertaintyData(selectedUnits: Units, selectedPeriod: Period) {
  const {
    asciiGrid,
    isLoading: gridsLoading,
  } = useGrids(selectedUnits, Period[selectedPeriod]);
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
