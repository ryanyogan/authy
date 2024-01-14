"use clent";

import { CardWrapper } from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      Login
    </CardWrapper>
  );
}
