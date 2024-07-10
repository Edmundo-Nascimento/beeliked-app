export enum LocalStorageKeyEnum {
  LOCAL_STORAGE_KEY = '@beeliked-storage'
}

const set = (value: object, keyStorage: string): void => {
  if (value) {
    localStorage.setItem(keyStorage, JSON.stringify(value));
  } else {
    localStorage.removeItem(keyStorage);
  }
};

const get = (keyStorage: any): any => {
  if (localStorage.getItem(keyStorage)) {
    return JSON.parse(localStorage.getItem(keyStorage) || '');
  }
};

const remove = (): void => {
  localStorage.removeItem(LocalStorageKeyEnum.LOCAL_STORAGE_KEY);
};

const token = (): string => {
  const data = get(LocalStorageKeyEnum.LOCAL_STORAGE_KEY);
  if (data) {
    return data['access_token'];
  }

  return '';
};

const authenticationData = (): any => {
  const data = get(LocalStorageKeyEnum.LOCAL_STORAGE_KEY);
  if (data) {
    return data;
  }

  return null;
};

const Storage = {
  set,
  get,
  remove,
  token,
  authenticationData,
};

export default Storage;
