import { dbMysql } from "../../data/mysql/db";
import {
  CreateEmpanadaDto,
  CustomError,
  UpdateEmpanadaDto,
} from "../../domain";

export class EmpanadaService {
  constructor() {}

  async getEmpanadas() {
    try {
      const [rows] = await dbMysql.execute(
        "SELECT * FROM empanadas ORDER BY id DESC"
      );

      const data = (rows as any[]).map((row) => ({
        id: row.id,
        name: row.name,
        type: row.type,
        filling: row.filling,
        price: row.price,
        is_sold_out: row.is_sold_out,
      }));

      return data;
    } catch (error) {
      throw CustomError.internalServer("Internal Server Error");
    }
  }

  async getEmpanada(id: number) {
    try {
      const [rows] = await dbMysql.execute(
        "SELECT * FROM empanadas WHERE id = ?",
        [id]
      );

      const data = (rows as any[]).map((row) => ({
        id: row.id,
        name: row.name,
        type: row.type,
        filling: row.filling,
        price: row.price,
        is_sold_out: row.is_sold_out,
      }));

      return data;
    } catch (error) {
      throw CustomError.internalServer("Internal Server Error");
    }
  }

  async storeEmpanada(createEmpanadaDto: CreateEmpanadaDto) {
    try {
      await dbMysql.execute(
        `INSERT INTO empanadas (name, type, filling, price, is_sold_out) 
          VALUES (?, ?, ?, ?, ?)`,
        [
          createEmpanadaDto.name,
          createEmpanadaDto.type,
          createEmpanadaDto.filling,
          createEmpanadaDto.price,
          createEmpanadaDto.is_sold_out,
        ]
      );

      return {
        message: "Empanada Created",
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async deleteEmpanada(id: number) {
    try {
      const [rows] = await dbMysql.execute(
        "SELECT * FROM empanadas WHERE id = ?",
        [id]
      );

      const data = (rows as any[]).map((row) => ({
        id: row.id,
      }));

      if (data.length > 0) {
        await dbMysql.execute("DELETE FROM empanadas WHERE id = ?", [id]);
        return {
          message: "Empanada Deleted",
        };
      } else {
        return {
          error: "Empanada not exist",
        };
      }
    } catch (error) {
      throw CustomError.internalServer("Internal Server Error");
    }
  }

  async updateEmpanada(dto: UpdateEmpanadaDto) {
    try {
      const [rows] = await dbMysql.execute(
        "SELECT * FROM empanadas WHERE id = ?",
        [dto.id]
      );

      const data = (rows as any[]).map((row) => ({
        id: row.id,
      }));

      if (data.length > 0) {
        await dbMysql.execute(
          `UPDATE empanadas set name = ?, type = ?, filling = ?, price = ?, is_sold_out = ? where id = ?`,
          [dto.name, dto.type, dto.filling, dto.price, dto.is_sold_out, dto.id]
        );
        return {
          message: "Empanada Updated",
        };
      } else {
        return {
          error: "Empanada not exist",
        };
      }
    } catch (error) {
      throw CustomError.internalServer("Internal Server Error");
    }
  }
}
