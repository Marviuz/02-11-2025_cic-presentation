import {
  SiTwitch,
  SiTwitchHex,
  SiYoutube,
  SiYoutubeHex,
} from "@icons-pack/react-simple-icons";
import { FC } from "react";

export const End: FC = () => {
  return (
    <div className="grid place-items-center h-full ">
      <div className="grid gap-8">
        <p className="text-6xl text-center font-black">
          Thanks for listening! 👋
        </p>
        <p className="text-2xl text-center font-bold">
          Presentation available at{" "}
          <span className="text-techstacks">
            https://github.com/Marviuz/02-11-2025_cic-presentation
          </span>
        </p>
        <ul className="mx-auto space-y-4">
          <li className="text-2xl font-bold">
            <SiYoutube className="inline" color={SiYoutubeHex} />{" "}
            youtube.com/@Marviuz
          </li>
          <li className="text-2xl font-bold">
            <SiTwitch className="inline" color={SiTwitchHex} />{" "}
            twitch.tv/Marviuz
          </li>
        </ul>
      </div>
    </div>
  );
};
