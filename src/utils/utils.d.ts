/* Datadog */
interface DataDogRumUser {
  id: string;
  // DataDogRumUser의 다른 속성에 대한 타입 정의도 여기에 추가할 수 있습니다.
}

interface DataDogRum {
  init(configuration: Record<string, any>): void;
  startSessionReplayRecording(): void;
  stopSessionReplayRecording(): void;
  onReady(callback: () => void): void;
  setUser(user: DataDogRumUser): void;
  setUserProperty(key: string, value: string): void;
}

/* Hotjar */
type HotjarHj = {
  (command: 'identify', userId: string | null, properties: Record<string, unknown>): void;
  // Hotjar의 다른 메소드에 대한 타입 정의도 여기에 추가할 수 있습니다.
};


/* global 변수에 대한 타입 정의 */
declare global {
  interface Window {
    DD_RUM?: DataDogRum;
    hj?: HotjarHj;
  }
}

export {};
