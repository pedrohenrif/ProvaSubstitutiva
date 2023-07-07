import { Router } from "express";
import { PcController } from "../controllers/Pc.Controller";

const router: Router = Router();

router.post("/", new PcController().cadastrar);
router.get("/listar", new PcController().listar);
router.delete("/:id", new PcController().deletar);

export { router };