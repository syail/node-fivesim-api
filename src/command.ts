export interface DefaultReq {
  [key: string]: unknown;
}

export interface DefaultRes extends DefaultReq {}

interface RootCommandResult {
  // HTTP response status code
  readonly status: number;
  readonly success: boolean;
}

export interface CommandResultFailed extends RootCommandResult {
  readonly success: false;
  readonly message?: string;
}

export interface CommandResultDoneValue<T> {
  readonly success: true;
  readonly result: T;
}

interface CommandResultDoneVoid extends RootCommandResult {
  readonly success: true;
}

export type CommandResultDone<T = void> = T extends void ? CommandResultDoneVoid : CommandResultDoneValue<T>;
export type CommandResult<T = void> = CommandResultFailed | CommandResultDone<T>;
export type AsyncCommandResult<T = void> = Promise<CommandResult<T>>;
