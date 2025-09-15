import HeyUni from "@/heyuni-instance";

export type HeyFrameContext = {
  apiClient: $TSFixMe;
};

export function useHeyFrameContext(): HeyFrameContext {
  const initContainer = HeyUni.Application.getContainer('init');
  return {
    apiClient: initContainer.httpClient
  };
}
