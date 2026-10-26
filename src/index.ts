import { createApp } from './createApp.ts';
const PORT = Number(process.env.PORT) || 3000;
const app = createApp();
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
