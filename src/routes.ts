/**
 * An array of routes that are accessible to the public
 *
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are used for authentication
 *
 * These routes will redirect logged in users to `/settings`
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
];

/**
 * Prexix for api authentication routes
 *
 * These routes are locked down ya know
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 *
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
