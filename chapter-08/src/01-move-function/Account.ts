export class Account {
  public daysOverdrawn: number;
  private type: AccountType;

  constructor(daysOverdrawn: number, type: AccountType) {
    this.daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;

    if (this.daysOverdrawn > 0) {
      result += this.type.overdraftCharge(this);
    }

    return result;
  }
}

export class AccountType {
  private isPremium: boolean;

  constructor(isPremium: boolean) {
    this.isPremium = isPremium;
  }

  overdraftCharge(account: Account) {
    if (this.isPremium) {
      const baseCharge = 10;

      if (account.daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (account.daysOverdrawn - 7) * 0.85;
      }
    } else {
      return account.daysOverdrawn * 1.75;
    }
  }
}
