import app from "./app.js";

Deno.serve(app.fetch);


// deployctl deploy --prod --token=ddp_Eea7ohaKd9HoUGAA68g0IADWkBkx4R0xw5cQ --project=yutong-web-dev-lea-521 app-run.js