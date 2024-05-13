// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class LToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("LToken", id.toString(), this);
    }
  }

  static loadInBlock(id: string): LToken | null {
    return changetype<LToken | null>(store.get_in_block("LToken", id));
  }

  static load(id: string): LToken | null {
    return changetype<LToken | null>(store.get("LToken", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get totalMintedRewards(): BigDecimal {
    let value = this.get("totalMintedRewards");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set totalMintedRewards(value: BigDecimal) {
    this.set("totalMintedRewards", Value.fromBigDecimal(value));
  }

  get tvlUpdates(): TVLChangeLoader {
    return new TVLChangeLoader(
      "LToken",
      this.get("id")!.toString(),
      "tvlUpdates",
    );
  }

  get aprUpdates(): APRChangeLoader {
    return new APRChangeLoader(
      "LToken",
      this.get("id")!.toString(),
      "aprUpdates",
    );
  }

  get activities(): ActivityLoader {
    return new ActivityLoader(
      "LToken",
      this.get("id")!.toString(),
      "activities",
    );
  }

  get rewardsMints(): RewardsMintLoader {
    return new RewardsMintLoader(
      "LToken",
      this.get("id")!.toString(),
      "rewardsMints",
    );
  }
}

export class TVLChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TVLChange entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TVLChange must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TVLChange", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TVLChange | null {
    return changetype<TVLChange | null>(store.get_in_block("TVLChange", id));
  }

  static load(id: string): TVLChange | null {
    return changetype<TVLChange | null>(store.get("TVLChange", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ltoken(): string {
    let value = this.get("ltoken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ltoken(value: string) {
    this.set("ltoken", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }
}

export class APRChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save APRChange entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type APRChange must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("APRChange", id.toString(), this);
    }
  }

  static loadInBlock(id: string): APRChange | null {
    return changetype<APRChange | null>(store.get_in_block("APRChange", id));
  }

  static load(id: string): APRChange | null {
    return changetype<APRChange | null>(store.get("APRChange", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ltoken(): string {
    let value = this.get("ltoken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ltoken(value: string) {
    this.set("ltoken", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get apr(): BigDecimal {
    let value = this.get("apr");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set apr(value: BigDecimal) {
    this.set("apr", Value.fromBigDecimal(value));
  }
}

export class Activity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Activity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Activity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Activity", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Activity | null {
    return changetype<Activity | null>(store.get_in_block("Activity", id));
  }

  static load(id: string): Activity | null {
    return changetype<Activity | null>(store.get("Activity", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get ltoken(): string {
    let value = this.get("ltoken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ltoken(value: string) {
    this.set("ltoken", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get action(): string {
    let value = this.get("action");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get amountAfterFees(): BigDecimal {
    let value = this.get("amountAfterFees");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set amountAfterFees(value: BigDecimal) {
    this.set("amountAfterFees", Value.fromBigDecimal(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class RewardsMint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RewardsMint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RewardsMint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("RewardsMint", id.toString(), this);
    }
  }

  static loadInBlock(id: string): RewardsMint | null {
    return changetype<RewardsMint | null>(
      store.get_in_block("RewardsMint", id),
    );
  }

  static load(id: string): RewardsMint | null {
    return changetype<RewardsMint | null>(store.get("RewardsMint", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ltoken(): string {
    let value = this.get("ltoken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ltoken(value: string) {
    this.set("ltoken", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get balanceBefore(): BigDecimal {
    let value = this.get("balanceBefore");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set balanceBefore(value: BigDecimal) {
    this.set("balanceBefore", Value.fromBigDecimal(value));
  }

  get revenue(): BigDecimal {
    let value = this.get("revenue");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set revenue(value: BigDecimal) {
    this.set("revenue", Value.fromBigDecimal(value));
  }

  get growth(): BigDecimal {
    let value = this.get("growth");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set growth(value: BigDecimal) {
    this.set("growth", Value.fromBigDecimal(value));
  }
}

export class PreMiningLock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PreMiningLock entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PreMiningLock must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PreMiningLock", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PreMiningLock | null {
    return changetype<PreMiningLock | null>(
      store.get_in_block("PreMiningLock", id),
    );
  }

  static load(id: string): PreMiningLock | null {
    return changetype<PreMiningLock | null>(store.get("PreMiningLock", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get duration(): i32 {
    let value = this.get("duration");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set duration(value: i32) {
    this.set("duration", Value.fromI32(value));
  }
}

export class StakingUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakingUser entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakingUser must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("StakingUser", id.toString(), this);
    }
  }

  static loadInBlock(id: string): StakingUser | null {
    return changetype<StakingUser | null>(
      store.get_in_block("StakingUser", id),
    );
  }

  static load(id: string): StakingUser | null {
    return changetype<StakingUser | null>(store.get("StakingUser", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get stakeIndex(): BigInt {
    let value = this.get("stakeIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set stakeIndex(value: BigInt) {
    this.set("stakeIndex", Value.fromBigInt(value));
  }

  get stakedAmount(): BigInt {
    let value = this.get("stakedAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set stakedAmount(value: BigInt) {
    this.set("stakedAmount", Value.fromBigInt(value));
  }

  get earnedAmount(): BigInt {
    let value = this.get("earnedAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set earnedAmount(value: BigInt) {
    this.set("earnedAmount", Value.fromBigInt(value));
  }
}

export class StakingAPRInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakingAPRInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakingAPRInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("StakingAPRInfo", id.toString(), this);
    }
  }

  static loadInBlock(id: string): StakingAPRInfo | null {
    return changetype<StakingAPRInfo | null>(
      store.get_in_block("StakingAPRInfo", id),
    );
  }

  static load(id: string): StakingAPRInfo | null {
    return changetype<StakingAPRInfo | null>(store.get("StakingAPRInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardPerSec(): BigInt {
    let value = this.get("rewardPerSec");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rewardPerSec(value: BigInt) {
    this.set("rewardPerSec", Value.fromBigInt(value));
  }

  get totalStaked(): BigInt {
    let value = this.get("totalStaked");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalStaked(value: BigInt) {
    this.set("totalStaked", Value.fromBigInt(value));
  }

  get interestRate(): BigDecimal {
    let value = this.get("interestRate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set interestRate(value: BigDecimal) {
    this.set("interestRate", Value.fromBigDecimal(value));
  }
}

export class TVLChangeLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): TVLChange[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<TVLChange[]>(value);
  }
}

export class APRChangeLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): APRChange[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<APRChange[]>(value);
  }
}

export class ActivityLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Activity[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Activity[]>(value);
  }
}

export class RewardsMintLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): RewardsMint[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<RewardsMint[]>(value);
  }
}
