import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connectDB.js";
import postRoutes from "./routes/postRoutes.js";
import quikpikRoutes from "./routes/quikpikRoutes.js";

dotenv.config();

const app = express();
// const allowedOrigins = ["http://localhost:5173"];
// app.use(cors({
//     origin: function (origin, callback) {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     credentials: true, // Allow cookies and headers with credentials
// }));
app.use(cors())
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/quikpik", quikpikRoutes);
// app.get("/", (req, res) => {
//     res.send("Hello From Backend");
// });

const startServer = async() => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log(`Server has started on port http://localhost:8080`))
    } catch (error){
        console.log(error);
    }
};

startServer();