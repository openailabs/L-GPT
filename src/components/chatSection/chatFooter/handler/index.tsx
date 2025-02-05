import React from "react";
import { useTranslations } from "next-intl";
import { shallow } from "zustand/shallow";
import { Button, Confirm } from "@ltopx/lx-ui";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useChannelStore, initChannelList } from "@/hooks/useChannel";
import { useOpenStore } from "@/hooks/useOpen";
import { useUserInfoStore } from "@/hooks/useUserInfo";
import { useLLMStore } from "@/hooks/useLLM";
import { useModelCacheStore } from "@/hooks/useModelCache";
import { cn } from "@/lib";
import Icon from "@/components/icon";
import Share from "./share";

export default function Handler() {
  const tChat = useTranslations("chat");
  const tMenu = useTranslations("menu");
  const tCommon = useTranslations("common");

  const [activeId, list] = useChannelStore(
    (state) => [state.activeId, state.list],
    shallow
  );
  const [openai, azure] = useLLMStore(
    (state) => [state.openai, state.azure],
    shallow
  );
  const LLMOptions = React.useMemo(() => [openai, azure], [openai, azure]);
  const license_type = useUserInfoStore((state) => state.license_type);

  const updateChatSettingOpen = useOpenStore(
    (state) => state.updateChatSettingOpen
  );
  const addList = useChannelStore((state) => state.addList);
  const cancelGPT = useChannelStore((state) => state.cancelGPT);
  const clearItem = useChannelStore((state) => state.clearItem);
  const checkModel = useModelCacheStore((state) => state.checkModel);

  const findChannel = list.find((item) => item.channel_id === activeId);

  if (!findChannel?.chat_list?.length) return null;

  const renderLLM = () => {
    const findLLM = LLMOptions.find(
      (item) => item.value === findChannel?.channel_model.type
    );
    if (!findLLM) return "";
    const findModel = findLLM.models.find(
      (item) => item.value === findChannel?.channel_model.name
    );
    return findModel?.label || "";
  };

  const renderIcon = () => {
    if (!findChannel?.channel_model) return null;

    const { type, name } = findChannel?.channel_model;

    if (type === "openai") {
      return (
        <Icon
          icon="openai"
          size={16}
          className={cn({
            "text-[#20a37f]": name.startsWith("gpt-3"),
            "text-[#a26bf7]": name.startsWith("gpt-4"),
          })}
        />
      );
    }

    if (type === "azure") return <Icon icon="azure" size={16} />;

    return null;
  };

  const onChannelAdd = () => {
    if (
      list.length >= 10 &&
      license_type !== "premium" &&
      license_type !== "team"
    ) {
      return toast.error(tChat("conversation-limit"), {
        id: "conversation-limit",
      });
    }

    const channel_id = uuidv4();
    const addItem = { ...initChannelList[0], channel_id };

    checkModel(addItem);
    addList(addItem);
  };

  const onCancel = () => {
    if (!findChannel.channel_loading) return;
    cancelGPT(findChannel.channel_id);
    toast.error(tChat("canceled"), { id: "cancel_chat" });
  };

  const onClear = () => {
    console.log(124124);
    clearItem();
  };

  if (findChannel?.channel_loading) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex py-1.5 gap-2 items-center">
          <Button
            className="rounded-full h-7 text-xs px-2.5"
            type="danger"
            onClick={onCancel}
            icon={<Icon icon="stop_fill" size={18} />}
          >
            <span className="hidden lg:block">{tChat("stop-generate")}</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex py-1.5 gap-2 items-center">
        <Button
          className="h-7 text-xs px-2.5 group"
          rounded
          outline
          type="primary"
          onClick={() => updateChatSettingOpen(true)}
          icon={<Icon icon="settings_3_line" size={18} />}
        >
          <span className="hidden lg:block">{tChat("chat-setting")}</span>
        </Button>
        <Button
          className="h-7 text-xs px-2.5"
          rounded
          outline
          type="primary"
          icon={renderIcon()}
        >
          <span className="hidden lg:block">{renderLLM()?.toUpperCase()}</span>
        </Button>
        <Share channel={findChannel} llm={LLMOptions} />
        <Button
          className="h-7 text-xs px-2.5"
          rounded
          outline
          type="primary"
          icon={<Icon icon="add_line" size={16} />}
          onClick={onChannelAdd}
        >
          <span className="hidden lg:block">{tMenu("new-chat")}</span>
        </Button>
      </div>

      <Confirm
        title={tMenu("clear-all-conversation")}
        content={tChat("clear-current-conversation")}
        type="danger"
        onOk={onClear}
        okText={tCommon("ok")}
        cancelText={tCommon("cancel")}
      >
        <Button
          className="h-7 text-xs px-2.5"
          rounded
          type="danger"
          outline
          icon={<Icon icon="broom_line" size={16} />}
        >
          <span className="hidden lg:block">
            {tMenu("clear-all-conversation")}
          </span>
        </Button>
      </Confirm>
    </div>
  );
}
