import express from 'express';
import usersRouter from './routes/users.ts';
import statusRouter from './routes/status.ts';
import session from 'express-session';
import passport from 'passport';

export function createApp() {
  const app = express();
  app.use(express.json());

  app.use(
    session({
      secret: 'development-only-secret-replace-for-production',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false, // Allows cookies over localhost HTTP
        maxAge: 60 * 60 * 1000,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api/users', usersRouter);
  app.use('/api/status', statusRouter);

  return app;
}
