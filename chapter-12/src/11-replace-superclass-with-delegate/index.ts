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

interface Catalog {
  get(id: string): CatalogItem;
}

export class Scroll {
  private _lastCleaned: LocalDate;
  private _catalogItem: CatalogItem;
  constructor(
    id: number,
    dateLastCleaned: LocalDate,
    catalog: Catalog,
    catalogId: string,
  ) {
    this._catalogItem = catalog.get(catalogId);
    this._lastCleaned = dateLastCleaned;
  }

  needsCleaning(targetDate: LocalDate): boolean {
    const threshold = this._catalogItem.hasTag('revered') ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate: LocalDate): number {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
