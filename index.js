// ============== Contoh 1 ===============================

// import express from "express";

// const PORT = 3000;
// const app = express();

// app.get("/", (req, res) => res.json({status: "NTask API"}));

// app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));

// ============== Contoh 2 ===============================

import express from "express";
import consign from "consign";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

consign()
	.include("routes")
	.into(app);

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));