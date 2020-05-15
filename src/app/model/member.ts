/**
 * Member class
 * **
 * Represents a team member, with a name, a status, and a photo
 */
export class Member {
  // The member's name
  private _name: string;

  // The member's status
  private _status: string;

  // The member's photo
  private _imagePath: string;

  /**
   * _name getter
   */
  public get name(): string {
    return this._name;
  }

  /**
   * _status getter
   */
  public get status(): string {
    return this._status;
  }

  /**
   * _imagePath getter
   */
  public get imagePath(): string {
    return this._imagePath;
  }

  /**
   * Member constructor
   * @param name A given name string
   * @param status A given status string
   * @param imagePath A given imagePath string
   */
  constructor(name: string, status: string, imagePath: string) {
    this._name = name;
    this._status = status;
    this._imagePath = imagePath;
  }
}
