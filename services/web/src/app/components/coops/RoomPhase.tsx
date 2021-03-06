import { SmallCard } from "../core/SmallCard";
import { Flex } from "../primitives/Flex";
import { Heading4 } from "../primitives/Heading";
import { Scroll } from "../primitives/Scroll";

import { ChatListCard } from "./cards/ChatListCard";
import { InviteCodeCard } from "./cards/InviteCodeCard";
import { ParticipantListCard } from "./cards/ParticipantListCard";
import { RoomDetailCard } from "./cards/RoomDetailCard";
import { SettingsCard } from "./cards/SettingsCard";
import { CoopsLogo } from "./logo";

interface RoomRhaseProps {}
export const RoomRhase: React.VFC<RoomRhaseProps> = () => {
  return (
    <Flex
      direction={{
        "@initial": "horizontal",
        "@bp": "vertical",
      }}
      reverse={{
        "@initial": false,
        "@bp": true,
      }}
      gap="10"
      css={{ flex: 1 }}
    >
      <Flex
        direction="vertical"
        css={{
          flex: "1 1",
          "@initial": { maxWidth: "480px" },
          "@bp": { maxWidth: "initial" },
        }}
      >
        <Scroll direction="vertical" gap="10" y>
          <SmallCard hasGradient>
            <Flex align="center" gap="10">
              <CoopsLogo />
              <Heading4>COOPS</Heading4>
            </Flex>
          </SmallCard>
          <SmallCard>
            <InviteCodeCard />
          </SmallCard>
          <SmallCard>
            <ParticipantListCard />
          </SmallCard>
          <SmallCard>
            <SettingsCard />
          </SmallCard>
        </Scroll>
      </Flex>
      <Flex direction="vertical" gap="10" css={{ flex: "1 1", minWidth: 0 }}>
        <SmallCard hasGradient>
          <RoomDetailCard />
        </SmallCard>
        <SmallCard css={{ flex: "1" }}>
          <ChatListCard />
        </SmallCard>
      </Flex>
    </Flex>
  );
};
