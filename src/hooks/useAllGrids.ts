import { useGrids } from "@/hooks/useGrids";
import { Units, Period, AsciiGrid } from "@/lib";

export default function useAllGrids(selectedUnits: Units) {
  type GridFetchResult = { 
    asciiGrid: AsciiGrid | undefined,
    isLoading: boolean,
    error: Error | undefined
  };

  const results: GridFetchResult[] = [];
  for (let i = 0; i <= 12; i++) {
    results.push(useGrids(selectedUnits, Period[i]));
  }

  const asciiGrids: AsciiGrid[] = results.flatMap(r => r.asciiGrid ? [r.asciiGrid] : []);
  
  return {
    asciiGrids,
    gridsAreLoading: Object.values(results).some(r => r.isLoading),
  }
}
