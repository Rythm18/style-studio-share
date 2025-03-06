
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Collection: { id: number };
  Search: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
