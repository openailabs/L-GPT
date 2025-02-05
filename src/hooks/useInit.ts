// Initialize various page-level states
import React from "react";
import { create } from "zustand";
import { useChannelInit } from "./useChannel";
import { useOpenAIInit } from "./useOpenAI";
import { useLLMInit } from "./useLLM";
import { useModelCacheInit } from "./useModelCache";
import { usePromptInit } from "./usePrompt";
import { useTTSInit } from "./useTTS";

type Init = {
  isInit: boolean;
  init: () => void;
};

const useStore = create<Init>((set) => ({
  isInit: false,

  init: () => set({ isInit: true }),
}));

export const useInit = () => {
  const isInit = useStore((state) => state.isInit);
  const init = useStore((state) => state.init);

  const initChannel = useChannelInit();
  const initOpenAI = useOpenAIInit();
  const initLLM = useLLMInit();
  const initModelCache = useModelCacheInit();
  const initPrompt = usePromptInit();
  const initTTS = useTTSInit();

  React.useEffect(() => {
    initChannel();
    initOpenAI();
    initLLM();
    initModelCache();
    initPrompt();
    initTTS();
    init();
  }, []);

  return isInit;
};
