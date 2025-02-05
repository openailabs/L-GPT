import React from "react";
import { useTranslations } from "next-intl";
import { shallow } from "zustand/shallow";
import { cn } from "@/lib";
import { useChannelStore } from "@/hooks/useChannel";
import type { ChannelCost } from "@/hooks/useChannel/types";
import { useOpenAIStore } from "@/hooks/useOpenAI";
import Token from "./token";

export default function Title() {
  const tMenu = useTranslations("menu");
  const tSetting = useTranslations("setting");

  const tokenRef = React.useRef<any>(null);

  const [activeId, channelList] = useChannelStore(
    (state) => [state.activeId, state.list],
    shallow
  );

  const [openAIKey, azureKey, env] = useOpenAIStore(
    (state) => [state.openai.apiKey, state.azure.apiKey, state.env],
    shallow
  );

  const apiKey = React.useMemo(
    () => openAIKey || azureKey || env.OPENAI_API_KEY || env.AZURE_API_KEY,
    [openAIKey, azureKey, env]
  );

  const { channel_name, channel_cost } = React.useMemo(() => {
    const find = channelList.find((ch) => ch.channel_id === activeId);
    return {
      channel_name: find?.channel_name || "",
      channel_cost: find?.channel_cost || ({} as ChannelCost),
    };
  }, [activeId, channelList]);

  const onCheckToken = () => tokenRef.current?.init();

  return (
    <>
      <div className="h-full flex flex-col justify-center">
        <div className="truncate max-w-[calc(100%-200px)] mx-auto text-center font-semibold transition-colors">
          {apiKey
            ? channel_name || tMenu("new-conversation")
            : tSetting("set-api-key")}
        </div>
        {!!channel_cost.tokens && (
          <div className="text-xs text-neutral-400 flex justify-center">
            <div
              className={cn(
                "cursor-pointer select-none px-2.5 py-0.5 rounded-full transition-colors",
                "hover:bg-neutral-200 hover:text-neutral-900",
                "dark:hover:bg-neutral-600 dark:hover:text-neutral-200"
              )}
              onClick={onCheckToken}
            >
              <span>${channel_cost.usd}</span>
              <span> / </span>
              <span>{channel_cost.tokens} Tokens</span>
            </div>
          </div>
        )}
      </div>
      <Token ref={tokenRef} cost={channel_cost} />
    </>
  );
}
