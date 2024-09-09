type RefreshType = {
  shouldRefresh?: boolean;
  setShouldRefresh?: React.SetStateAction<boolean>;
};

type AppState = RefreshType | undefined ;

export { RefreshType, AppState };
