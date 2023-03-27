interface AuthBody {
  email: string;
  password: string;
}

interface AuthResponse {
  email: string;
}

export { AuthBody, AuthResponse };
