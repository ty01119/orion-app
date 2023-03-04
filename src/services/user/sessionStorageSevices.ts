export class SessionStorageServcies {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  saveToSessionStorage(data: unknown) {
    sessionStorage.setItem(this.key, JSON.stringify(data));
  }
  getFromSessionStorage() {
    const data = sessionStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }
  removeFromSessionStorage() {
    sessionStorage.removeItem(this.key);
  }
}

export const sessionTokenService = new SessionStorageServcies('orion-seesion-token');
