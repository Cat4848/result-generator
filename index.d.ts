interface Success {
    success: true;
    data: string;
}
interface Fail {
    success: false;
    error: Error;
}
export declare class ResultGenerator {
    generateSuccess(data: string): Success;
    generateError(err: unknown): Fail;
}
export {};
