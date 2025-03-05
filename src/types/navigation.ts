export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Collection: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface NavigatorScreenParams<ParamList> {
      id?: string;
    }
  }
}
