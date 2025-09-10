import { Request, Response } from "express";
import {
  CreateEmpanadaDto,
  CustomError,
  UpdateEmpanadaDto,
} from "../../domain";
import { EmpanadaService } from "../services";

export class EmpanadaController {
  // DI
  constructor(private readonly empanadaService: EmpanadaService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getEmpanadas = async (req: Request, res: Response) => {
    this.empanadaService
      .getEmpanadas()
      .then((empanadas) => res.status(200).json(empanadas))
      .catch((error) => this.handleError(error, res));
  };

  getEmpanadaById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id)) {
      res.status(500).json({ error: "id must be number" });
    } else {
      this.empanadaService
        .getEmpanada(id)
        .then((empanada) => res.status(200).json(empanada))
        .catch((error) => this.handleError(error, res));
    }
  };

  storeEmpanada = (req: Request, res: Response) => {
    const [error, createEmpanadaDto] = CreateEmpanadaDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.empanadaService
      .storeEmpanada(createEmpanadaDto!)
      .then((response) => res.status(201).json(response))
      .catch((error) => this.handleError(error, res));
  };

  putEmpanada = (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id)) {
      res.status(500).json({ error: "id must be number" });
    } else {
      const [error, updateEmpanadaDto] = UpdateEmpanadaDto.create({
        ...req.body,
        id,
      });
      if (error) return res.status(400).json({ error });

      this.empanadaService
        .updateEmpanada(updateEmpanadaDto!)
        .then((response) => res.status(201).json(response))
        .catch((error) => this.handleError(error, res));
    }
  };

  deleteEmpanada = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id)) {
      res.status(500).json({ error: "id must be number" });
    } else {
      this.empanadaService
        .deleteEmpanada(id)
        .then((response) => res.status(200).json(response))
        .catch((error) => this.handleError(error, res));
    }
  };
}
