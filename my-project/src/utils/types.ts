type HomePageProps = {
  shouldRefresh?: boolean;
  setShouldRefresh?: React.SetStateAction<boolean>;
  type:
    | "default"
    | "trending"
    | "popular"
    | "discussed"
    | "responded"
    | "recommended";
};

type AppState = HomePageProps | undefined;

export { HomePageProps, AppState };
