class AuthToken {
  private token: string | null;

  constructor() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  setToken(newToken: string) {
    this.token = newToken;
  }

  deleteToken() {
    this.token = null;
  }
}

export const authToken = new AuthToken();
