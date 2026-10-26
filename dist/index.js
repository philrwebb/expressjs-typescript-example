import { createApp } from './createApp.js';
const PORT = Number(process.env.PORT) || 3000;
const app = createApp();
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
//# sourceMappingURL=index.js.map