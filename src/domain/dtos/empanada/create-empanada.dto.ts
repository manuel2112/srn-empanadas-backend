export class CreateEmpanadaDto {
  private constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly filling: string,
    public readonly price: number,
    public readonly is_sold_out?: boolean
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateEmpanadaDto?] {
    const { name, type, filling, price, is_sold_out = false } = object;

    if (!name) return ["Missing name"];
    if (!type) return ["Missing type"];
    if (!filling) return ["Missing filling"];
    if (!price) return ["Missing price"];

    return [
      undefined,
      new CreateEmpanadaDto(name, type, filling, price, is_sold_out),
    ];
  }
}
