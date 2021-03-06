import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import {
  authorIdAtom,
  deviceIdAtom,
  devicesAtom,
  isHostAtom,
  roomDescriptionAtom,
  roomIdAtom,
  roomTitleAtom,
} from "../../../atoms";
import { useQuery } from "../../../hooks/useQuery";
import { useResetRoom } from "../../../hooks/useResetRoom";
import { useToast } from "../../../hooks/useToast";
import { Button } from "../../primitives/Button";
import { Flex } from "../../primitives/Flex";
import { Heading4, Heading5 } from "../../primitives/Heading";
import { Input } from "../../primitives/Input";

const AudioSettings: React.VFC = () => {
  const [deviceId, setDeviceId] = useAtom(deviceIdAtom);
  const devices = useAtomValue(devicesAtom);
  return (
    <>
      <Heading5>녹음 장치</Heading5>
      <Input
        as="select"
        value={deviceId ?? undefined}
        onChange={(event) => setDeviceId(event.target.value)}
      >
        {devices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label}
          </option>
        ))}
      </Input>
    </>
  );
};
const RoomSettings: React.VFC = () => {
  const roomId = useAtomValue(roomIdAtom);
  const authorId = useAtomValue(authorIdAtom);
  const roomTitle = useAtomValue(roomTitleAtom);
  const roomDescription = useAtomValue(roomDescriptionAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const queries = useQuery();
  const router = useRouter();
  const resetRoom = useResetRoom();
  const toast = useToast();
  useEffect(() => {
    setTitle(roomTitle ?? "");
  }, [roomTitle]);
  useEffect(() => {
    setDescription(roomDescription ?? "");
  }, [roomDescription]);
  if (roomId == null) return null;
  if (authorId == null) return null;
  return (
    <>
      <Heading5>방 제목</Heading5>
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            queries.updateRoomSettings(roomId, authorId, {
              title,
            });
            event.currentTarget.blur();
          } else if (event.key === "Escape") {
            setTitle(roomTitle ?? "");
            event.currentTarget.blur();
          }
        }}
        placeholder="방 제목을 입력해주세요"
      />
      <Heading5>공지사항</Heading5>
      <Input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            queries.updateRoomSettings(roomId, authorId, {
              description,
            });
            event.currentTarget.blur();
          } else if (event.key === "Escape") {
            setDescription(roomDescription ?? "");
            event.currentTarget.blur();
          }
        }}
        placeholder="공지사항을 입력해주세요"
      />
      <Flex direction="vertical" align="center">
        <Button
          color="dangerous"
          onClick={async () => {
            try {
              const { roomId: nextRoomId } = await queries.resetRoom(
                roomId,
                authorId,
              );
              resetRoom();
              router.push(`/rooms/${nextRoomId}`, undefined, { shallow: true });
              toast("새로운 방에 다시 로그인 해주세요");
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error(error);
            }
          }}
        >
          방 초기화
        </Button>
      </Flex>
    </>
  );
};

export const SettingsCard: React.VFC = () => {
  const [selected, setSelected] = useState(0);
  const isHost = useAtomValue(isHostAtom);
  return (
    <Flex direction="vertical" gap="10">
      <Flex gap="20">
        <Heading4
          color="transparent"
          style={{
            padding: "8px 0",
            borderRadius: 0,
            border: "2px solid transparent",
            borderBottom:
              selected === 0 ? "2px solid var(--colors-primary100)" : undefined,
            color: selected === 0 ? undefined : "var(--colors-text33)",
          }}
          onClick={() => setSelected(0)}
        >
          음성 설정
        </Heading4>
        {isHost && (
          <Heading4
            color="transparent"
            style={{
              padding: "8px 0",
              borderRadius: 0,
              border: "2px solid transparent",
              borderBottom:
                selected === 1
                  ? "2px solid var(--colors-primary100)"
                  : undefined,
              color: selected === 1 ? undefined : "var(--colors-text33)",
            }}
            onClick={() => setSelected(1)}
          >
            방 설정
          </Heading4>
        )}
      </Flex>
      {selected === 0 && <AudioSettings />}
      {selected === 1 && <RoomSettings />}
    </Flex>
  );
};
