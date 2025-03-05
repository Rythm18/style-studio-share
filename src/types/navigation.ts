
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Collection: { id: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
