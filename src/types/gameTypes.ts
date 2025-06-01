import BoardFootballPlayer from "../core/match/team/footballplayers/boardFootballPlayer";

export type MatchDataType = {
  hostTeamData: TeamDataType;
  guestTeamData: TeamDataType;
  gameConfig: GameConfigType;
};

export type TeamDataType = {
  name: string;
  initials: string;
  logoKey: string;
  logoURL: string;
  formation: string;
  fansColor: number;
  tactics: {
    formation: {
      defenceLine: "wide-attack" | "normal";
      centerLine: "wide-attack" | "wide-back" | "normal";
      attackLine: "wide-attack" | "wide-back" | "normal";
    };
  };
  passSpeed: number;
  shootSpeed: number;
  goalKeeperSpeed: number;
  shootAccuracy: number;
  motionSpeed: number;
  comments: {
    saveBallComments: Array<string>;
    defenderComments: Array<string>;
    shooterComments: Array<string>;
  };
  freeKiskFrequency: number;
  penaltyFrequency: number;
};

export type GameConfigType = {
  mode: GameModeType;
  hostFansCountPercent: number; // her you can set how many host team fans you want on stadium (from 0 to 100)
  mathTime: number;
};

export type GameModeType =
  | "board-football"
  | "old-style"
  | "new-style"
  | "marble-football"
  | "experimental";

export type MatchInfoType = {
  matchTitle: string;
  matchSubTitle: string;
};

export type FootballPlayerData = {
  who: "unkown" | "hostPlayer" | "guestPlayer";
  potentialShortPassVariants?: BoardFootballPlayer[];
  potentialLongPassVariants?: BoardFootballPlayer[];
  position: "goalKeeper" | "defender" | "middfielder" | "attacker";
};
