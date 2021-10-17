interface Storage {
    getItem: (key: string) => string | null,
    setItem: (key: string, value: any) => void
}

let storageInstance: Storage;

export const setItem = async (key: string, value: any): Promise<void> => {
  await storageInstance.setItem(key, value.toString());
};

export const getItem = async (key: string): Promise<string | null> => Promise.resolve(storageInstance.getItem(key));

export const setInstance = (instance: Storage): void => {
  storageInstance = instance;
};
