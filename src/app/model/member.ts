export class Member {
  private _name: string;
  private _status: string;
  private _imagePath: string;

  public get name(): string {
    return this._name;
  }

  public get status(): string {
    return this._status;
  }

  public get imagePath(): string {
    return this._imagePath;
  }

  constructor(name: string, status: string, imagePath: string) {
    this._name = name;
    this._status = status;
    this._imagePath = imagePath;
  }
}
