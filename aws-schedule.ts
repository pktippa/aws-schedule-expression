export class AwsScheduleCron {
  private _minutes = '*';
  private _hours = '*';
  private _dayOfMonth = '*';
  private _month = '*';
  private _dayOfWeek = '?';
  private _year = '*';
  constructor() {}

  minutes(input: string) {
    this._minutes = input;
    return this;
  }

  hours(input: string) {
    this._hours = input;
    return this;
  }

  dayOfMonth(inout: string) {
    this._dayOfMonth = inout;
    this._dayOfWeek = '?';
    return this;
  }

  setMonth(input: string) {
    this._month = input;
    return this;
  }

  dayOfWeek(input: string) {
    this._dayOfWeek = input;
    this._dayOfMonth = '?';
    return this;
  }

  year(input: string) {
    this._year = input;
    return this;
  }

  build() {
    return [
      this._minutes,
      this._hours,
      this._dayOfMonth,
      this._month,
      this._dayOfWeek,
      this._year,
    ].join(' ');
  }
}
