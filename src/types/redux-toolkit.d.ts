declare global {
  type RootState = ReturnType<typeof store.getState>;
}

export {};