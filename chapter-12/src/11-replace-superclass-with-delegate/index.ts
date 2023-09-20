import { LocalDate, ChronoUnit } from '@js-joda/core';

export class CatalogItem {
  protected _id: number;
  protected _title: string;
  protected _tags: string[];

  constructor(id: number, title: string, tags: string[]) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  hasTag(arg: string): boolean {
    return this._tags.includes(arg);
  }
}

export class Scroll extends CatalogItem {
  private _lastCleaned: LocalDate;

  constructor(
    id: number,
    title: string,
    tags: string[],
    dateLastCleaned: LocalDate,
  ) {
    super(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }

  needsCleaning(targetDate: LocalDate): boolean {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate: LocalDate): number {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
