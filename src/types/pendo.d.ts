interface PendoStatic {
  initialize(options: Record<string, unknown>): void;
  identify(options: Record<string, unknown>): void;
  clearSession(): void;
  track(
    eventName: string,
    properties?: Record<string, string | number | boolean>,
  ): void;
}

interface Window {
  pendo?: PendoStatic;
}

// eslint-disable-next-line no-var
declare var pendo: PendoStatic;
