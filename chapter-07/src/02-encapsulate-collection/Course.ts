export class Course {
  private _name: string;
  private _isAdvanced: boolean;

  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
  get name() {
    return this._name;
  }
}
