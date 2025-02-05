import React from "react";
import { useTranslations } from "next-intl";
import { shallow } from "zustand/shallow";
import { Modal, Tabs, Button, type TabsOption } from "@ltopx/lx-ui";
import { useOpenStore } from "@/hooks/useOpen";
import Icon from "@/components/icon";

type ChargeTokenTypes = "1" | "2";

export default function ChargeToken() {
  const tRecharge = useTranslations("recharge");

  const [open, setOpen] = useOpenStore(
    (state) => [state.chargeTokenOpen, state.updateChargeTokenOpen],
    shallow
  );
  const [type, setType] = React.useState<ChargeTokenTypes>("1");

  const options: TabsOption[] = [
    {
      label: `${tRecharge("pkg")} 1`,
      value: "1",
      children: (
        <div className="border rounded-md max-h-[calc(100vh-400px)] p-4 box-border overflow-y-auto relative dark:border-neutral-200/40">
          <div>
            <div className="flex font-semibold text-2xl gap-2">
              <span className="dark:text-neutral-300">L-GPT Points 1</span>
            </div>
            <div>
              <span className="bg-clip-text bg-license-premium font-semibold text-transparent text-3xl">
                $5.00
              </span>
            </div>
            <div className="flex flex-col mt-2 text-sm gap-2">
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("pkg-1-desc-1")}
              </div>
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("pkg-1-desc-2")}
              </div>
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("no-expiration-date")}
              </div>
            </div>
          </div>
          <Icon
            icon="lightning_fill"
            size={32}
            className="top-4 right-4 text-orange-400 absolute"
          />
        </div>
      ),
    },
    {
      label: `${tRecharge("pkg")} 2`,
      value: "2",
      children: (
        <div className="border rounded-md max-h-[calc(100vh-400px)] p-4 box-border overflow-y-auto relative dark:border-neutral-200/40">
          <div>
            <div className="flex font-semibold text-2xl gap-2">
              <span className="dark:text-neutral-300">L-GPT Points 2</span>
            </div>
            <div>
              <span className="bg-clip-text bg-license-premium font-semibold text-transparent text-3xl">
                $10.00
              </span>
            </div>
            <div className="flex flex-col mt-2 text-sm gap-2">
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("pkg-2-desc-1")}
              </div>
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("pkg-2-desc-2")}
              </div>
              <div className="flex pl-6 text-neutral-600 gap-2 items-center relative dark:text-neutral-300">
                <Icon
                  icon="check_circle_fill"
                  size={18}
                  className="left-0 text-green-400 absolute"
                />
                {tRecharge("no-expiration-date")}
              </div>
            </div>
          </div>
          <Icon
            icon="lightning_fill"
            size={32}
            className="top-4 right-4 text-orange-400 absolute"
          />
        </div>
      ),
    },
  ];

  const onClose = () => setOpen(false);

  return (
    <Modal
      title={tRecharge("tokens-recharge")}
      open={open}
      onClose={onClose}
      footer={null}
    >
      <Tabs
        itemsFull
        options={options}
        activeTab={type}
        onChange={(value) => setType(value as ChargeTokenTypes)}
      />
      <div className="flex mt-3 justify-center">
        <Button
          type="primary"
          href="https://lgpt.lemonsqueezy.com/checkout/buy/c1dcfdb0-57c6-406a-87d2-a1347daab068"
        >
          {tRecharge("recharge")}
        </Button>
      </div>
      <div className="mt-2 flex">
        <Button type="link" target="_blank" href="https://docs.ltopx.com/token">
          {tRecharge("learn-more-about-token")}
        </Button>
      </div>
    </Modal>
  );
}
