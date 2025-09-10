export class UpdateEmpanadaDto {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly type: string,
    public readonly filling: string,
    public readonly price: number,
    public readonly is_sold_out?: boolean
  ) {}

  // get values() {
  //   const returnObj: { [key: string]: any } = {};

  //   if (this.name) returnObj.name = this.name;
  //   if (this.type) returnObj.type = this.type;
  //   if (this.filling) returnObj.filling = this.filling;
  //   if (this.price) returnObj.price = this.price;
  //   if (this.is_sold_out) returnObj.is_sold_out = this.is_sold_out;

  //   return returnObj;
  // }

  static create(props: { [key: string]: any }): [string?, UpdateEmpanadaDto?] {
    const { id, name, type, filling, price, is_sold_out = false } = props;

    if (!id || isNaN(Number(id))) {
      return ["id must be a valid number"];
    }

    return [
      undefined,
      new UpdateEmpanadaDto(id, name, type, filling, price, is_sold_out),
    ];
  }
}
