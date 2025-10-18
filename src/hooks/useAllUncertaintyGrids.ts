import { useUncertaintyGrids } from "@/hooks/useUncertaintyGrids";
import { Units, Period, AsciiGrid } from "@/lib";

export default function useAllUncertaintyGrids(selectedUnits: Units) {
  type GridFetchResult = { 
    asciiGrid: AsciiGrid | undefined,
    isLoading: boolean,
    error: Error | undefined
  };

  const results: GridFetchResult[] = [
    useUncertaintyGrids(selectedUnits, Period[0]),
    useUncertaintyGrids(selectedUnits, Period[1]),
    useUncertaintyGrids(selectedUnits, Period[2]),
    useUncertaintyGrids(selectedUnits, Period[3]),
    useUncertaintyGrids(selectedUnits, Period[4]),
    useUncertaintyGrids(selectedUnits, Period[5]),
    useUncertaintyGrids(selectedUnits, Period[6]),
    useUncertaintyGrids(selectedUnits, Period[7]),
    useUncertaintyGrids(selectedUnits, Period[8]),
    useUncertaintyGrids(selectedUnits, Period[9]),
    useUncertaintyGrids(selectedUnits, Period[10]),
    useUncertaintyGrids(selectedUnits, Period[11]),
    useUncertaintyGrids(selectedUnits, Period[12]),
  ];

  const asciiGrids: AsciiGrid[] = results.flatMap(r => r.asciiGrid ? [r.asciiGrid] : []);
  
  return {
    asciiGrids,
    gridsAreLoading: Object.values(results).some(r => r.isLoading),
  }
}