// ============== Contoh 1 ===============================

// import express from "express";

// const PORT = 3000;
// const app = express();

// app.get("/", (req, res) => res.json({status: "NTask API"}));

// app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));

// ============== Contoh 2 + consign ===============================

// import express from "express";
// import consign from "consign";

// const PORT = 3000;
// const app = express();

// app.set("json spaces", 4);

// consign()
// 	.include("routes")
// 	.into(app);

// app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));

// ============== Contoh 3 + MVR ===============================

import express from "express";
import consign from "consign";

const app = express();

consign()
	.include("libs/config.js")
	.then("db.js")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);